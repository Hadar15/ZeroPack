import { Link } from "react-router-dom";
import { BadgeCheck, Leaf, Recycle, Package } from "lucide-react";
import { motion } from "framer-motion";
import heroImage from "../assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed animate-subtle-ken-burns"
          style={{
            backgroundImage: `url(${heroImage})`
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-green-900/60 via-green-800/40 to-green-950/70" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_var(--tw-gradient-stops))] from-primary/20 via-green-700/10 to-transparent" />
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 py-16 sm:py-20 md:py-28 lg:py-32 text-center">
        <div className="max-w-[95%] xs:max-w-[85%] sm:max-w-2xl md:max-w-3xl lg:max-w-4xl mx-auto space-y-5 sm:space-y-6 lg:space-y-8 animate-fade-in-up">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-[2rem] xs:text-[2.5rem] sm:text-[3rem] md:text-[3.5rem] lg:text-[4rem] font-bold text-white leading-[1.15] tracking-tight px-2 sm:px-0 drop-shadow-lg [text-wrap:balance]"
          >
            Isi Ulang Higienis,
            <br />
            <span className="text-white drop-shadow-[0_2px_10px_rgba(255,255,255,0.3)]">
              Bumi Lebih Sehat
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-[0.95rem] xs:text-base sm:text-lg md:text-xl text-white/90 max-w-[92%] xs:max-w-[85%] sm:max-w-xl md:max-w-2xl mx-auto leading-[1.8] xs:leading-[1.9] font-light px-2 xs:px-0 drop-shadow-md"
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
            <div className="flex items-center gap-1.5 text-white/90 bg-white/10 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10 hover:bg-white/20 hover:border-white/20 transition-all duration-300 group">
              <BadgeCheck className="h-4 w-4 sm:h-5 sm:w-5 text-primary group-hover:scale-110 transition-transform duration-300" />
              <span className="text-[0.8rem] sm:text-[0.9rem] whitespace-nowrap">Transparan Dampak</span>
            </div>
            <div className="flex items-center gap-1.5 text-white/90 bg-white/10 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10 hover:bg-white/20 hover:border-white/20 transition-all duration-300 group">
              <Leaf className="h-4 w-4 sm:h-5 sm:w-5 text-primary group-hover:scale-110 transition-transform duration-300" />
              <span className="text-[0.8rem] sm:text-[0.9rem] whitespace-nowrap">Higienis & Aman</span>
            </div>
            <div className="flex items-center gap-1.5 text-white/90 bg-white/10 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10 hover:bg-white/20 hover:border-white/20 transition-all duration-300 group">
              <Recycle className="h-4 w-4 sm:h-5 sm:w-5 text-primary group-hover:scale-110 transition-transform duration-300" />
              <span className="text-[0.8rem] sm:text-[0.9rem] whitespace-nowrap">Hemat Tanpa Ribet</span>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-col xs:flex-row items-center justify-center gap-3 xs:gap-4 sm:gap-6 px-4 xs:px-0"
          >
            <Link
              to="/products"
              className="w-full xs:w-fit inline-flex items-center justify-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md text-white border border-white/20 rounded-full text-[0.9rem] font-medium hover:bg-white/20 hover:border-white/30 transition-all duration-300 group"
            >
              <Package className="w-5 h-5" />
              <span>Lihat Produk</span>
            </Link>
            <Link
              to="/auth"
              className="w-full xs:w-fit inline-flex items-center justify-center px-4 py-2 bg-gradient-to-r from-primary to-primary/80 text-white rounded-full text-[0.9rem] font-medium hover:shadow-[0_0_20px_rgba(var(--primary),0.3)] transition-all duration-300 group"
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