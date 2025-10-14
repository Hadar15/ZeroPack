import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '@/lib/supabase';
import { toast } from '@/components/ui/use-toast';
import { accountService } from '@/lib/accountService';

const AuthCallback = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const handleAuthCallback = async () => {
      const { data: { session }, error } = await supabase.auth.getSession();
      
      if (error) {
        toast({
          variant: "destructive",
          title: "Login Gagal",
          description: error.message
        });
        navigate('/auth');
        return;
      }

      if (session) {
        try {
          // Cek apakah email sudah terdaftar dengan provider lain
          const linkedAccounts = await accountService.findUserByEmail(session.user.email!);
          
          if (linkedAccounts && linkedAccounts.length > 0) {
            // Ada akun yang terhubung dengan email yang sama
            const existingAccount = linkedAccounts[0];
            
            if (existingAccount.user_id !== session.user.id) {
              // Gabungkan akun
              await accountService.mergeAccounts(existingAccount.user_id, session.user.id);
              
              toast({
                title: "Akun Terhubung",
                description: "Akun Anda telah dihubungkan dengan metode login yang ada"
              });
            }
          }

          // Simpan identitas baru
          await accountService.linkAccount(
            session.user,
            session.user.app_metadata.provider || 'email',
            session.user.user_metadata
          );

          toast({
            title: "Login Berhasil",
            description: `Selamat datang kembali!`
          });
          navigate('/dashboard');
        } catch (error: any) {
          console.error('Error in auth callback:', error);
          toast({
            variant: "destructive",
            title: "Terjadi Kesalahan",
            description: "Gagal menghubungkan akun"
          });
          navigate('/dashboard');
        }
      }
    };

    handleAuthCallback();
  }, [navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center space-y-4">
        <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto" />
        <p className="text-foreground/60">Memproses autentikasi...</p>
      </div>
    </div>
  );
};

export default AuthCallback;