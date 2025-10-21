import { useEffect } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { sendUserToGoogleSheets } from "@/lib/googleSheets";

/**
 * Hook untuk otomatis mengirim data user ke Google Sheets
 * saat user login atau register
 */
export function useGoogleSheetsSync() {
  const { user } = useAuth();

  useEffect(() => {
    if (user) {
      // Kirim data user ke Google Sheets
      const syncUserData = async () => {
        try {
          await sendUserToGoogleSheets({
            timestamp: new Date().toISOString(),
            user_id: user.id,
            email: user.email || "",
            name: user.user_metadata?.full_name || user.user_metadata?.name || "",
            provider: user.app_metadata?.provider || "email"
          });
          console.log("User data synced to Google Sheets");
        } catch (error) {
          console.error("Error syncing user to Google Sheets:", error);
        }
      };

      syncUserData();
    }
  }, [user]);
}
