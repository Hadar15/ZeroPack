import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { useAuthMiddleware } from '@/middleware/AuthMiddleware';

export function ProtectedRoute() {
  const { user, loading } = useAuth();
  useAuthMiddleware(); // Add security middleware

  // Rate limiting untuk mencegah brute force
  const rateLimitKey = `auth_attempts_${Date.now().toString().slice(0, -3)}`;
  const attempts = parseInt(localStorage.getItem(rateLimitKey) || '0');
  
  if (attempts > 10) { // Lebih dari 10 percobaan dalam 1 menit
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center space-y-4">
          <h2 className="text-xl font-semibold text-destructive">Akses Dibatasi</h2>
          <p className="text-muted-foreground">
            Terlalu banyak percobaan. Silakan coba lagi dalam beberapa menit.
          </p>
        </div>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (!user) {
    localStorage.setItem(rateLimitKey, (attempts + 1).toString());
    return <Navigate to="/auth" replace />;
  }

  return <Outlet />;
}

export default ProtectedRoute;