import { useState } from 'react';
import { supabase } from '@/lib/supabase';
import { toast } from '@/components/ui/use-toast';

export const useAccountLinking = () => {
  const [isLinking, setIsLinking] = useState(false);

  const linkWithGoogle = async (email: string) => {
    try {
      setIsLinking(true);
      
      // Cek apakah email yang sama sudah terdaftar
      const { data: { users }, error: usersError } = await supabase.auth.admin.listUsers();
      
      if (usersError) throw usersError;

      const existingUser = users?.find(user => 
        user.email?.toLowerCase() === email.toLowerCase()
      );

      if (existingUser) {
        // Jika user sudah ada, coba link dengan provider Google
        const { data, error } = await supabase.auth.signInWithOAuth({
          provider: 'google',
          options: {
            redirectTo: `${window.location.origin}/auth/callback`,
            queryParams: {
              // Access Type offline untuk mendapatkan refresh token
              access_type: 'offline',
              // Prompt consent untuk memastikan mendapat refresh token baru
              prompt: 'consent',
            }
          }
        });

        if (error) throw error;

        return data;
      } else {
        toast({
          variant: "destructive",
          title: "Akun Tidak Ditemukan",
          description: "Email ini belum terdaftar di sistem"
        });
      }
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Gagal Menghubungkan Akun",
        description: error.message
      });
    } finally {
      setIsLinking(false);
    }
  };

  return {
    linkWithGoogle,
    isLinking
  };
};