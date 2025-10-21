import { useEffect, useRef } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { sendUserToGoogleSheets } from "@/lib/googleSheets";

/**
 * Hook untuk otomatis mengirim data user ke Google Sheets
 * HANYA pada registrasi pertama kali (tidak akan kirim lagi saat login)
 * 
 * Cara kerja:
 * - Saat user login/register, hook ini akan cek apakah user sudah ada di Google Sheets
 * - Jika belum ada (user baru), data akan dikirim ke Google Sheets
 * - Jika sudah ada (user lama login lagi), data TIDAK akan dikirim
 * - hasSynced.current mencegah pengiriman berulang dalam satu session
 */
export function useGoogleSheetsSync() {
  const { user } = useAuth();
  const hasSynced = useRef(false);

  useEffect(() => {
    if (user && !hasSynced.current) {
      // Kirim data user ke Google Sheets (hanya sekali)
      const syncUserData = async () => {
        try {
          await sendUserToGoogleSheets({
            timestamp: new Date().toISOString(),
            user_id: user.id,
            email: user.email || "",
            name: user.user_metadata?.full_name || user.user_metadata?.name || "",
            provider: user.app_metadata?.provider || "email"
          });
          hasSynced.current = true;
          console.log("✅ User data synced to Google Sheets");
        } catch (error) {
          console.error("❌ Error syncing user to Google Sheets:", error);
        }
      };

      syncUserData();
    }
  }, [user]);
}
