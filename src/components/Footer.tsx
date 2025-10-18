import { Leaf, Mail, MessageSquare } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-b from-green-900 to-green-800 text-white border-t border-green-700/30">
      <div className="absolute inset-0 bg-[url('/src/assets/noise.png')] opacity-5"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-green-600/20 via-transparent to-green-950/30"></div>
      <div className="container mx-auto px-4 py-16 relative">
        <div className="max-w-md mx-auto text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Link 
              to="/" 
              className="inline-flex items-center gap-2 group"
            >
              <div className="p-2 bg-white/10 rounded-xl group-hover:bg-white/20 transition-colors duration-300">
                <Leaf className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-white">
                Zero Pack
              </span>
            </Link>
          </motion.div>
          
          <motion.p 
            className="text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Zero Pack memotong sampah plastik harian dengan sistem isi ulang higienis & terjadwal. 
            Kamu pakai seperti biasa, Bumi bernapas lebih lega.
          </motion.p>

          <motion.div 
            className="flex justify-center gap-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <a
              href="https://wa.me/your-number"
              className="flex items-center gap-2 text-gray-600 hover:text-green-600 transition-colors group"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageSquare className="h-5 w-5 group-hover:scale-110 transition-transform" />
              <span className="font-medium">WhatsApp</span>
            </a>
            <a
              href="mailto:info@zeropack.id"
              className="flex items-center gap-2 text-gray-600 hover:text-green-600 transition-colors group"
            >
              <Mail className="h-5 w-5 group-hover:scale-110 transition-transform" />
              <span className="font-medium">Email</span>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="pt-8 border-t border-green-100"
          >
            <p className="text-sm text-gray-500">
              © {new Date().getFullYear()} Zero Pack. Semua hak dilindungi.
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
