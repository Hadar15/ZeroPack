import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
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
          <div className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-4">
            🌿 Sustainability Made Simple
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-foreground leading-tight">
            Kurangi Sampah,
            <br />
            <span className="text-primary">Isi Ulang dengan ZeroPack</span>
          </h1>

          <p className="text-xl md:text-2xl text-foreground/70 max-w-2xl mx-auto leading-relaxed">
            Layanan refill produk rumah tangga yang ramah lingkungan dan praktis
            untuk kehidupan kos dan rumah modern.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Link
              to="/auth"
              className="group px-8 py-4 bg-primary text-primary-foreground rounded-full font-semibold text-lg hover:shadow-xl hover:scale-105 transition-all flex items-center gap-2"
            >
              Coba Sekarang
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
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
