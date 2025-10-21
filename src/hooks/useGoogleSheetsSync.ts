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
  const syncInProgress = useRef(false);

  useEffect(() => {
    // Hanya jalankan jika user ada, belum pernah sync, dan tidak sedang sync
    if (user && !hasSynced.current && !syncInProgress.current) {
      syncInProgress.current = true;
      
      // Kirim data user ke Google Sheets (akan di-check dulu apakah sudah ada)
      const syncUserData = async () => {
        try {
          const result = await sendUserToGoogleSheets({
            timestamp: new Date().toISOString(),
            user_id: user.id,
            email: user.email || "",
            name: user.user_metadata?.full_name || user.user_metadata?.name || "",
            provider: user.app_metadata?.provider || "email"
          });
          
          if (result) {
            hasSynced.current = true;
          }
        } catch (error) {
          console.error("❌ Error syncing user to Google Sheets:", error);
        } finally {
          syncInProgress.current = false;
        }
      };

      // Delay sedikit untuk menghindari multiple calls
      const timeoutId = setTimeout(syncUserData, 500);
      
      return () => clearTimeout(timeoutId);
    }
  }, [user]);
}
