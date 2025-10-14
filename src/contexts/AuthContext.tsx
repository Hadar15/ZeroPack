import { createContext, useContext, useEffect, useState } from 'react';
import { User, AuthError } from '@supabase/supabase-js';
import { supabase } from '@/lib/supabase';
import { useNavigate } from 'react-router-dom';
import { toast } from '@/components/ui/use-toast';

interface AuthContextType {
  user: User | null;
  loading: boolean;
  signOut: () => Promise<void>;
  sessionExpired: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Enkripsi sederhana untuk data sensitif di localStorage
const encrypt = (text: string): string => {
  return btoa(text.split('').map((char) => 
    char.charCodeAt(0).toString(16).padStart(2, '0')
  ).join(''));
};

const decrypt = (encoded: string): string => {
  try {
    const hex = atob(encoded);
    return hex.match(/.{2}/g)?.map(hex => 
      String.fromCharCode(parseInt(hex, 16))
    ).join('') || '';
  } catch {
    return '';
  }
};

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [sessionExpired, setSessionExpired] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    let lastActivity = Date.now();
    const SESSION_TIMEOUT = 30 * 60 * 1000; // 30 minutes

    const checkSession = async () => {
      try {
        const { data: { session }, error } = await supabase.auth.getSession();
        
        if (error) throw error;

        // Check session timeout
        if (Date.now() - lastActivity > SESSION_TIMEOUT) {
          setSessionExpired(true);
          await signOut();
          toast({
            variant: "destructive",
            title: "Sesi Berakhir",
            description: "Sesi Anda telah berakhir karena tidak aktif"
          });
          return;
        }

        setUser(session?.user ?? null);
        
        // Store encrypted session data
        if (session?.user) {
          const userData = encrypt(JSON.stringify({
            id: session.user.id,
            email: session.user.email,
            last_active: Date.now()
          }));
          localStorage.setItem('secure_session', userData);
        }
      } catch (error) {
        console.error('Session check failed:', error);
        await signOut();
      } finally {
        setLoading(false);
      }
    };

    // Check session every minute
    const interval = setInterval(checkSession, 60000);
    checkSession();

    // Activity listeners
    const updateActivity = () => {
      lastActivity = Date.now();
      const secureSession = localStorage.getItem('secure_session');
      if (secureSession) {
        try {
          const session = JSON.parse(decrypt(secureSession));
          session.last_active = Date.now();
          localStorage.setItem('secure_session', encrypt(JSON.stringify(session)));
        } catch (error) {
          console.error('Session validation failed:', error);
          signOut();
        }
      }
    };

    window.addEventListener('mousemove', updateActivity);
    window.addEventListener('keydown', updateActivity);

    // Auth state changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange(async (event, session) => {
      setUser(session?.user ?? null);
      setLoading(false);
      
      if (event === 'SIGNED_IN') {
        // Validate device fingerprint
        const currentDevice = encrypt(navigator.userAgent);
        const lastDevice = localStorage.getItem('last_device');
        
        if (lastDevice && lastDevice !== currentDevice) {
          toast({
            variant: "warning",
            title: "Login dari Perangkat Baru",
            description: "Akun Anda diakses dari perangkat baru"
          });
        }
        
        localStorage.setItem('last_device', currentDevice);
        navigate('/dashboard');
      } else if (event === 'SIGNED_OUT') {
        localStorage.removeItem('secure_session');
        localStorage.removeItem('last_device');
        navigate('/');
      }
    });

    return () => {
      subscription.unsubscribe();
      clearInterval(interval);
      window.removeEventListener('mousemove', updateActivity);
      window.removeEventListener('keydown', updateActivity);
    };
  }, [navigate]);

  const signOut = async () => {
    try {
      await supabase.auth.signOut();
      localStorage.removeItem('secure_session');
      localStorage.removeItem('last_device');
      navigate('/');
    } catch (error: any) {
      console.error('Logout failed:', error);
      toast({
        variant: "destructive",
        title: "Logout Gagal",
        description: "Terjadi kesalahan saat logout"
      });
    }
  };

  const value = {
    user,
    loading,
    signOut,
    sessionExpired
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}