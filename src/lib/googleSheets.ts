// Google Sheets Integration Service
// Untuk menggunakan ini, Anda perlu:
// 1. Buat Google Sheet baru dengan 2 sheet: "Orders" dan "Users"
// 2. Gunakan SheetDB.io atau Sheet.best untuk membuat API endpoint
// 3. Setup environment variables di .env.local (lihat .env.example)

const GOOGLE_SHEETS_ORDERS_API = import.meta.env.VITE_GOOGLE_SHEETS_ORDERS_API || "https://sheetdb.io/api/v1/YOUR_ORDERS_SHEET_ID";
const GOOGLE_SHEETS_USERS_API = import.meta.env.VITE_GOOGLE_SHEETS_USERS_API || "https://sheetdb.io/api/v1/YOUR_USERS_SHEET_ID";

export interface OrderData {
  timestamp: string;
  user_id: string;
  email: string;
  name: string;
  address: string;
  phone: string;
  residents: string;
  products: string;
  package: string;
  status: string;
}

export interface UserData {
  timestamp: string;
  user_id: string;
  email: string;
  name?: string;
  provider?: string;
}

/**
 * Kirim data pesanan ke Google Sheets
 */
export async function sendOrderToGoogleSheets(orderData: OrderData): Promise<boolean> {
  try {
    // Format timestamp yang lebih readable
    const formattedData = {
      ...orderData,
      timestamp: new Date(orderData.timestamp).toLocaleString('id-ID', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      })
    };

    const response = await fetch(GOOGLE_SHEETS_ORDERS_API, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      body: JSON.stringify({
        data: formattedData
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("SheetDB Error:", errorText);
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.json();
    console.log("✅ Order sent to Google Sheets:", result);
    return true;
  } catch (error) {
    console.error("❌ Error sending order to Google Sheets:", error);
    return false;
  }
}

/**
 * Cek apakah user sudah terdaftar di Google Sheets
 */
export async function checkUserExistsInGoogleSheets(userId: string): Promise<boolean> {
  try {
    const response = await fetch(`${GOOGLE_SHEETS_USERS_API}/search?user_id=${userId}`, {
      method: "GET",
      headers: {
        "Accept": "application/json",
      },
    });

    if (!response.ok) {
      return false;
    }

    const result = await response.json();
    return result && result.length > 0;
  } catch (error) {
    console.error("Error checking user in Google Sheets:", error);
    return false;
  }
}

/**
 * Kirim data user authentication ke Google Sheets (hanya untuk user baru)
 */
export async function sendUserToGoogleSheets(userData: UserData): Promise<boolean> {
  try {
    // Cek apakah user sudah ada
    const userExists = await checkUserExistsInGoogleSheets(userData.user_id);
    
    if (userExists) {
      console.log("ℹ️ User sudah terdaftar, skip kirim ke Google Sheets");
      return true; // Return true karena user sudah ada (bukan error)
    }

    // Format timestamp yang lebih readable
    const formattedData = {
      ...userData,
      timestamp: new Date(userData.timestamp).toLocaleString('id-ID', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      })
    };

    const response = await fetch(GOOGLE_SHEETS_USERS_API, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      body: JSON.stringify({
        data: formattedData
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("SheetDB Error:", errorText);
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.json();
    console.log("✅ User baru berhasil terdaftar di Google Sheets:", result);
    return true;
  } catch (error) {
    console.error("❌ Error sending user to Google Sheets:", error);
    return false;
  }
}

/**
 * Update status pesanan di Google Sheets
 */
export async function updateOrderStatusInGoogleSheets(
  orderId: string, 
  newStatus: string
): Promise<boolean> {
  try {
    const response = await fetch(`${GOOGLE_SHEETS_ORDERS_API}/user_id/${orderId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        data: {
          status: newStatus
        }
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return true;
  } catch (error) {
    console.error("Error updating order status in Google Sheets:", error);
    return false;
  }
}

/**
 * Ambil semua pesanan dari Google Sheets (untuk admin)
 */
export async function getOrdersFromGoogleSheets(): Promise<OrderData[]> {
  try {
    const response = await fetch(GOOGLE_SHEETS_ORDERS_API, {
      method: "GET",
      headers: {
        "Accept": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Error fetching orders from Google Sheets:", error);
    return [];
  }
}

/**
 * Ambil semua user dari Google Sheets (untuk admin)
 */
export async function getUsersFromGoogleSheets(): Promise<UserData[]> {
  try {
    const response = await fetch(GOOGLE_SHEETS_USERS_API, {
      method: "GET",
      headers: {
        "Accept": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Error fetching users from Google Sheets:", error);
    return [];
  }
}
