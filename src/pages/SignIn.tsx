import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Leaf, ArrowLeft, Eye, EyeOff } from "lucide-react";
import { supabase } from "@/lib/supabase";
import { toast } from "@/components/ui/use-toast";

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      setIsLoading(true);
      const { data, error } = await supabase.auth.signInWithPassword({
        email: formData.email,
        password: formData.password,
      });

      if (error) throw error;

      toast({
        title: "Login Berhasil",
        description: "Selamat datang kembali!",
      });

      navigate("/dashboard");
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Login Gagal",
        description: error.message || "Email atau password salah",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background px-4">
      <div className="w-full max-w-md space-y-8">
        {/* Header */}
        <div className="flex flex-col items-center gap-6">
          <div className="p-3 bg-primary/10 rounded-xl">
            <Leaf className="w-8 h-8 text-primary" />
          </div>
          <div className="text-center space-y-2">
            <h1 className="text-2xl font-bold text-foreground">
              Masuk ke ZeroPack
            </h1>
            <p className="text-foreground/60">
              Masukkan email dan password untuk melanjutkan
            </p>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium text-foreground">
                Email
              </label>
              <input
                id="email"
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 rounded-lg border-2 border-border bg-background 
                         focus:outline-none focus:border-primary/50 transition-colors"
                placeholder="nama@email.com"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="password" className="text-sm font-medium text-foreground">
                Password
              </label>
              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  required
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border-2 border-border bg-background 
                           focus:outline-none focus:border-primary/50 transition-colors"
                  placeholder="Masukkan password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-foreground/60 hover:text-foreground"
                >
                  {showPassword ? (
                    <EyeOff className="w-5 h-5" />
                  ) : (
                    <Eye className="w-5 h-5" />
                  )}
                </button>
              </div>
            </div>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full py-3 px-4 bg-primary text-primary-foreground rounded-lg font-medium
                     hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary/50
                     disabled:opacity-50 disabled:cursor-not-allowed transition-all"
          >
            {isLoading ? "Memproses..." : "Masuk"}
          </button>
        </form>

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

        {/* Google Sign In */}
        <button
          onClick={async () => {
            try {
              setIsLoading(true);
              const { data, error } = await supabase.auth.signInWithOAuth({
                provider: 'google',
                options: {
                  redirectTo: `${window.location.origin}/auth/callback`
                }
              });

              if (error) throw error;
            } catch (error: any) {
              toast({
                variant: "destructive",
                title: "Login Gagal",
                description: "Gagal login dengan Google"
              });
            } finally {
              setIsLoading(false);
            }
          }}
          disabled={isLoading}
          className="w-full flex items-center justify-center gap-3 py-3 px-4 border-2 border-border 
                   rounded-lg font-medium text-foreground hover:bg-primary/5 transition-all
                   disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <img 
            src="https://www.google.com/favicon.ico" 
            alt="Google" 
            className="w-5 h-5"
          />
          Masuk dengan Google
        </button>

        {/* Links */}
        <div className="space-y-4">
          <div className="flex justify-between items-center text-sm">
            <Link 
              to="/forgot-password" 
              className="text-primary hover:underline"
            >
              Lupa Password?
            </Link>
            <Link 
              to="/signup" 
              className="text-primary hover:underline"
            >
              Buat Akun Baru
            </Link>
          </div>
          <div className="flex justify-center">
            <Link
              to="/auth"
              className="inline-flex items-center gap-2 text-foreground/60 hover:text-foreground transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Kembali
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;