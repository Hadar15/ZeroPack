import { Leaf, Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-white border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-md mx-auto text-center space-y-6">
          <Link to="/" className="text-2xl font-bold text-green-600 hover:text-green-700 transition-colors">
            Zero Pack
          </Link>
          
          <p className="text-gray-600">
            Zero Pack memotong sampah plastik harian dengan sistem isi ulang higienis & terjadwal. 
            Kamu pakai seperti biasa, Bumi bernapas lebih lega.
          </p>

          <div className="flex justify-center gap-6">
            <a
              href="https://wa.me/your-number"
              className="flex items-center gap-2 text-gray-600 hover:text-green-600 transition-colors group"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Mail className="h-5 w-5 group-hover:scale-110 transition-transform" />
              <span>WhatsApp</span>
            </a>
            <a
              href="mailto:info@zeropack.id"
              className="flex items-center gap-2 text-gray-600 hover:text-green-600 transition-colors group"
            >
              <Mail className="h-5 w-5 group-hover:scale-110 transition-transform" />
              <span>Email</span>
            </a>
          </div>

          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Zero Pack. Semua hak dilindungi.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
