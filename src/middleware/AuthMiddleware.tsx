import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { supabase } from '@/lib/supabase';
import { toast } from '@/components/ui/use-toast';

export const useAuthMiddleware = () => {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const checkSession = async () => {
      try {
        // Verify token validity
        const { data: { session }, error } = await supabase.auth.getSession();
        
        if (error || !session) {
          await signOut();
          navigate('/auth');
          return;
        }

        // Check if token is about to expire (within 5 minutes)
        const expiresAt = new Date(session.expires_at! * 1000);
        const fiveMinutes = 5 * 60 * 1000;
        
        if (Date.now() + fiveMinutes >= expiresAt.getTime()) {
          // Refresh the session
          const { error: refreshError } = await supabase.auth.refreshSession();
          if (refreshError) {
            await signOut();
            navigate('/auth');
            return;
          }
        }

        // Check email verification status
        if (!session.user.email_verified && !session.user.app_metadata.provider) {
          toast({
            variant: "destructive",
            title: "Email belum terverifikasi",
            description: "Silakan verifikasi email Anda terlebih dahulu"
          });
          await signOut();
          navigate('/auth');
          return;
        }

        // Detect suspicious activities
        const currentUserAgent = window.navigator.userAgent;
        const storedUserAgent = localStorage.getItem('user_agent');
        
        if (storedUserAgent && storedUserAgent !== currentUserAgent) {
          toast({
            variant: "destructive",
            title: "Sesi Mencurigakan Terdeteksi",
            description: "Demi keamanan, silakan login kembali"
          });
          await signOut();
          navigate('/auth');
          return;
        }

        localStorage.setItem('user_agent', currentUserAgent);

      } catch (error) {
        console.error('Session check failed:', error);
        await signOut();
        navigate('/auth');
      }
    };

    const interval = setInterval(checkSession, 60000); // Check every minute
    checkSession(); // Initial check

    return () => clearInterval(interval);
  }, [user, signOut, navigate]);
};