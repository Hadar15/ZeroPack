import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Leaf, ArrowLeft, Eye, EyeOff } from "lucide-react";
import { supabase } from "@/lib/supabase";
import { toast } from "@/components/ui/use-toast";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      setIsLoading(true);
      const { data, error } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
        options: {
          data: {
            full_name: formData.name,
          },
          emailRedirectTo: `${window.location.origin}/auth/callback`
        }
      });

      if (error) throw error;

      toast({
        title: "Pendaftaran Berhasil",
        description: "Silakan cek email Anda untuk verifikasi"
      });

      // If email confirmation is not required, redirect to dashboard
      if (data.session) {
        navigate("/dashboard");
      }
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Pendaftaran Gagal",
        description: error.message
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
              Buat Akun ZeroPack
            </h1>
            <p className="text-foreground/60">
              Daftar untuk memulai perjalanan ramah lingkungan
            </p>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium text-foreground">
                Nama Lengkap
              </label>
              <input
                id="name"
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 rounded-lg border-2 border-border bg-background 
                         focus:outline-none focus:border-primary/50 transition-colors"
                placeholder="Masukkan nama lengkap"
              />
            </div>

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
                  placeholder="Buat password"
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
              <p className="text-xs text-foreground/60 mt-1">
                Minimal 8 karakter dengan kombinasi huruf dan angka
              </p>
            </div>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full py-3 px-4 bg-primary text-primary-foreground rounded-lg font-medium
                     hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary/50
                     disabled:opacity-50 disabled:cursor-not-allowed transition-all"
          >
            {isLoading ? "Memproses..." : "Daftar"}
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

        {/* Google Sign Up */}
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
                title: "Pendaftaran Gagal",
                description: "Gagal mendaftar dengan Google"
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
          Daftar dengan Google
        </button>

        {/* Links */}
        <div className="space-y-4">
          <div className="text-center text-sm">
            Sudah punya akun?{" "}
            <Link 
              to="/signin" 
              className="text-primary hover:underline font-medium"
            >
              Masuk
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

        {/* Terms */}
        <p className="text-center text-xs text-foreground/60">
          Dengan mendaftar, kamu menyetujui{" "}
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

export default SignUp;