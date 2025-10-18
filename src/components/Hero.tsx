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
      <div className="container relative z-10 mx-auto px-4 sm:px-6 py-16 sm:py-20 md:py-28 lg:py-32 text-center">
        <div className="max-w-[95%] xs:max-w-[85%] sm:max-w-2xl md:max-w-3xl lg:max-w-4xl mx-auto space-y-5 sm:space-y-6 lg:space-y-8 animate-fade-in-up">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-[2rem] xs:text-[2.5rem] sm:text-[3rem] md:text-[3.5rem] lg:text-[4rem] font-bold text-foreground leading-[1.15] tracking-tight px-2 sm:px-0"
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
            className="text-[0.95rem] xs:text-base sm:text-lg md:text-xl text-foreground/80 max-w-[92%] xs:max-w-[85%] sm:max-w-xl md:max-w-2xl mx-auto leading-[1.8] xs:leading-[1.9] font-light px-2 xs:px-0"
          >
            Zero Pack memotong sampah plastik harian dengan sistem isi ulang higienis & terjadwal. 
            Kamu pakai seperti biasa, Bumi bernapas lebih lega.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-wrap justify-center gap-2.5 xs:gap-3 sm:gap-4 md:gap-6 my-6 sm:my-8 md:my-10"
          >
            <div className="flex items-center gap-1.5 text-foreground/80 bg-white/5 backdrop-blur-sm px-3 py-1.5 rounded-full">
              <BadgeCheck className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
              <span className="text-[0.8rem] sm:text-[0.9rem] whitespace-nowrap">Transparan Dampak</span>
            </div>
            <div className="flex items-center gap-1.5 text-foreground/80 bg-white/5 backdrop-blur-sm px-3 py-1.5 rounded-full">
              <Leaf className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
              <span className="text-[0.8rem] sm:text-[0.9rem] whitespace-nowrap">Higienis & Aman</span>
            </div>
            <div className="flex items-center gap-1.5 text-foreground/80 bg-white/5 backdrop-blur-sm px-3 py-1.5 rounded-full">
              <Recycle className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
              <span className="text-[0.8rem] sm:text-[0.9rem] whitespace-nowrap">Hemat Tanpa Ribet</span>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-col xs:flex-row items-center justify-center gap-3 sm:gap-4 px-4 xs:px-0"
          >
            <Link
              to="/products"
              className="w-full xs:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-black/20 backdrop-blur-sm text-white/90 border border-white/30 rounded-full text-[0.9rem] font-medium hover:bg-black/30 hover:border-white/40 hover:text-white transition-all duration-300 hover:scale-105 shadow-lg"
            >
              <Package className="w-5 h-5" />
              <span>Lihat Produk</span>
            </Link>
            <Link
              to="/auth"
              className="w-full xs:w-auto inline-flex items-center justify-center px-5 py-2.5 bg-primary text-primary-foreground rounded-full text-[0.9rem] font-medium hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              Mulai Sekarang
            </Link>
          </motion.div>
        </div>


      </div>
    </section>
  );
};

export default Hero;
