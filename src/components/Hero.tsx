import { Link } from "react-router-dom";
import { BadgeCheck, Leaf, Recycle } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with parallax effect */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/80 to-background/95" />
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-6 py-32 text-center">
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold text-foreground leading-tight">
            Selamatkan Bumi dari
            <br />
            <span className="text-primary">Plastik Sekali Pakai</span>
          </h1>

          <h2 className="text-3xl md:text-4xl font-semibold text-primary">
            Isi Ulang Higienis,
            <br />
            Bumi Lebih Sehat
          </h2>

          <p className="text-xl md:text-2xl text-foreground/70 max-w-2xl mx-auto leading-relaxed">
            Zero Pack memotong sampah plastik harian dengan sistem isi ulang higienis & terjadwal. 
            Kamu pakai seperti biasa, Bumi bernapas lebih lega.
          </p>

          <div className="flex flex-wrap justify-center gap-8 my-12">
            <div className="flex items-center gap-2 text-foreground/70">
              <BadgeCheck className="h-6 w-6 text-primary" />
              <span>Transparan Dampak</span>
            </div>
            <div className="flex items-center gap-2 text-foreground/70">
              <Leaf className="h-6 w-6 text-primary" />
              <span>Higienis & Aman</span>
            </div>
            <div className="flex items-center gap-2 text-foreground/70">
              <Recycle className="h-6 w-6 text-primary" />
              <span>Hemat Tanpa Ribet</span>
            </div>
          </div>

          <Link
            to="/auth"
            className="inline-block px-8 py-4 bg-primary text-primary-foreground rounded-full font-semibold text-lg hover:shadow-xl hover:scale-105 transition-all"
          >
            Mulai Sekarang
          </Link>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-float">
          <div className="w-6 h-10 border-2 border-foreground/30 rounded-full flex justify-center pt-2">
            <div className="w-1 h-3 bg-primary rounded-full animate-pulse-soft" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
