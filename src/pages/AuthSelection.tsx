import { Link, useNavigate } from "react-router-dom";
import { Leaf, LogIn, UserPlus } from "lucide-react";
import { useState } from 'react';
import { toast } from "@/components/ui/use-toast";
import { supabase } from "@/lib/supabase";

const AuthSelection = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const handleGoogleLogin = async () => {
    try {
      setIsLoading(true);
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: 'http://localhost:8080/auth/callback'
        }
      });

      if (error) {
        toast({
          variant: "destructive",
          title: "Login Gagal",
          description: error.message
        });
        return;
      }

      // Supabase will handle the redirect automatically
    } catch (error) {
      console.error('Error:', error);
      toast({
        variant: "destructive",
        title: "Login Gagal",
        description: "Terjadi kesalahan saat login dengan Google"
      });
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background">
      <div className="w-full max-w-md p-8 space-y-12">
        {/* Logo and Welcome Message */}
        <div className="text-center space-y-4">
          <div className="flex flex-col items-center gap-3">
            <div className="p-3 bg-primary/10 rounded-xl">
              <Leaf className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-2xl font-bold text-foreground">
              Selamat Datang di ZeroPack
            </h1>
          </div>
          <p className="text-foreground/60 text-base">
            Pilih cara untuk memulai perjalanan ramah lingkungan bersama kami
          </p>
        </div>

        {/* Auth Options */}
        <div className="grid gap-4">
          {/* Sign In Button */}
          <Link
            to="/signin"
            className="group p-6 bg-background border-2 border-border rounded-xl hover:border-primary/50 transition-all"
          >
            <div className="flex items-center gap-4">
              <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                <LogIn className="w-6 h-6 text-primary" />
              </div>
              <div className="flex-1">
                <h2 className="text-lg font-semibold text-foreground">Masuk</h2>
                <p className="text-sm text-foreground/60">
                  Sudah punya akun? Masuk untuk melanjutkan
                </p>
              </div>
            </div>
          </Link>

          {/* Sign Up Button */}
          <Link
            to="/signup"
            className="group p-6 bg-background border-2 border-border rounded-xl hover:border-primary/50 transition-all"
          >
            <div className="flex items-center gap-4">
              <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                <UserPlus className="w-6 h-6 text-primary" />
              </div>
              <div className="flex-1">
                <h2 className="text-lg font-semibold text-foreground">Daftar</h2>
                <p className="text-sm text-foreground/60">
                  Baru di ZeroPack? Buat akun baru
                </p>
              </div>
            </div>
          </Link>

          {/* Divider */}
          <div className="relative my-4">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-border"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-background text-foreground/60">atau</span>
            </div>
          </div>

          {/* Google Sign In */}
          <button
            onClick={handleGoogleLogin}
            disabled={isLoading}
            className="flex items-center justify-center gap-3 p-4 w-full border-2 border-border rounded-xl
                     hover:bg-primary/5 transition-all text-foreground font-medium
                     disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <img
              src="https://www.google.com/favicon.ico"
              alt="Google"
              className="w-5 h-5"
            />
            Lanjutkan dengan Google
          </button>
        </div>

        {/* Back to Home */}
        <div className="text-center">
          <Link
            to="/"
            className="text-primary hover:underline transition-all text-sm"
          >
            Kembali ke Beranda
          </Link>
        </div>

        {/* Terms and Privacy */}
        <p className="text-center text-xs text-foreground/60 mt-8">
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

export default AuthSelection;