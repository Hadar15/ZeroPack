import { Link } from "react-router-dom";
import { BadgeCheck, Leaf, Recycle, Package } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";
import { motion } from "framer-motion";

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
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/50 to-background/60" />
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-6 py-32 text-center">
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in-up">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="backdrop-blur-sm bg-white/10 px-6 py-3 rounded-full inline-block mb-6"
          >
            <p className="text-lg md:text-xl font-medium text-foreground/90">
              Selamatkan Bumi dari Plastik Sekali Pakai
            </p>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold text-foreground leading-tight tracking-tight"
          >
            Isi Ulang Higienis,
            <br />
            <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
              Bumi Lebih Sehat
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl md:text-2xl text-foreground/80 max-w-2xl mx-auto leading-relaxed font-light"
          >
            Zero Pack memotong sampah plastik harian dengan sistem isi ulang higienis & terjadwal. 
            Kamu pakai seperti biasa, Bumi bernapas lebih lega.
          </motion.p>

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

          <div className="flex items-center justify-center gap-4">
            <Link
              to="/products"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-primary border-2 border-primary rounded-full font-semibold hover:bg-primary hover:text-white transition-all duration-300 hover:scale-105"
            >
              <Package className="w-5 h-5" />
              <span>Produk</span>
            </Link>
            <Link
              to="/auth"
              className="inline-block px-6 py-3 bg-primary text-primary-foreground rounded-full font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              Mulai Sekarang
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
