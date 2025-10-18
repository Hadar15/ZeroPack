import { Link } from "react-router-dom";
import { BadgeCheck, Leaf, Recycle, Package } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] sm:min-h-screen flex items-center justify-center overflow-hidden">
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
        <div className="absolute inset-0 bg-gradient-to-b from-background/35 via-background/30 to-background/35" />
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 sm:px-6 py-16 sm:py-24 md:py-32 text-center">
        <div className="max-w-5xl mx-auto space-y-6 sm:space-y-8 animate-fade-in-up">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight tracking-tight px-4"
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

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-wrap justify-center gap-6 sm:gap-8 my-8 sm:my-12"
          >
            <div className="flex items-center gap-2 text-foreground/80 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-full">
              <BadgeCheck className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
              <span className="text-sm sm:text-base">Transparan Dampak</span>
            </div>
            <div className="flex items-center gap-2 text-foreground/80 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-full">
              <Leaf className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
              <span className="text-sm sm:text-base">Higienis & Aman</span>
            </div>
            <div className="flex items-center gap-2 text-foreground/80 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-full">
              <Recycle className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
              <span className="text-sm sm:text-base">Hemat Tanpa Ribet</span>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
          >
            <Link
              to="/products"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-black/20 backdrop-blur-sm text-white/90 border border-white/30 rounded-full font-medium hover:bg-black/30 hover:border-white/40 hover:text-white transition-all duration-300 hover:scale-105 shadow-lg"
            >
              <Package className="w-5 h-5" />
              <span>Lihat Produk</span>
            </Link>
            <Link
              to="/auth"
              className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              Mulai Sekarang
            </Link>
          </motion.div>
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
