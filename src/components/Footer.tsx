import { Leaf, Mail, MessageSquare } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-green-50 via-green-50/50 to-green-100/20 border-t border-green-100">
      <div className="container mx-auto px-4 py-16">
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
              <div className="p-2 bg-green-100 rounded-xl group-hover:bg-green-200 transition-colors duration-300">
                <Leaf className="h-6 w-6 text-green-600" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-green-600 to-green-500 bg-clip-text text-transparent">
                Zero Pack
              </span>
            </Link>
          </motion.div>
          
          <motion.p 
            className="text-gray-600"
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
