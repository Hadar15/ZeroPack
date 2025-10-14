import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Leaf } from "lucide-react";

const Login = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const handleGoogleLogin = async () => {
    setIsLoading(true);
    try {
      // TODO: Implement Google login with your backend
      // For now, we'll just simulate a login
      await new Promise(resolve => setTimeout(resolve, 1000));
      navigate('/dashboard');
    } catch (error) {
      console.error('Login failed:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background px-4">
      <div className="w-full max-w-md space-y-8">
        {/* Logo */}
        <div className="flex flex-col items-center gap-2">
          <div className="p-3 bg-primary/10 rounded-xl">
            <Leaf className="w-8 h-8 text-primary" />
          </div>
          <h2 className="text-2xl font-bold text-foreground">
            Selamat Datang di ZeroPack
          </h2>
          <p className="text-foreground/60 text-center max-w-sm">
            Lakukan login untuk mulai menggunakan layanan refill ZeroPack
          </p>
        </div>

        {/* Login Options */}
        <div className="space-y-4">
          {/* Google Login Button */}
          <button
            onClick={handleGoogleLogin}
            disabled={isLoading}
            className="w-full flex items-center justify-center gap-3 px-6 py-3 border-2 border-border 
                     rounded-lg font-medium text-foreground hover:bg-primary/5 transition-all
                     disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <img 
              src="https://www.google.com/favicon.ico" 
              alt="Google" 
              className="w-5 h-5"
            />
            <span>
              {isLoading ? "Memproses..." : "Lanjutkan dengan Google"}
            </span>
          </button>
        </div>

        {/* Divider */}
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-border"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-4 bg-background text-foreground/60">
              atau
            </span>
          </div>
        </div>

        {/* Alternative Option */}
        <div className="text-center space-y-4">
          <Link
            to="/"
            className="text-primary hover:underline transition-all"
          >
            Kembali ke Beranda
          </Link>
        </div>

        {/* Terms */}
        <p className="text-center text-sm text-foreground/60">
          Dengan melanjutkan, kamu menyetujui{" "}
          <Link to="/terms" className="text-primary hover:underline">
            Ketentuan Layanan
          </Link>{" "}
          dan{" "}
          <Link to="/privacy" className="text-primary hover:underline">
            Kebijakan Privasi
          </Link>{" "}
          kami
        </p>
      </div>
    </div>
  );
};

export default Login;