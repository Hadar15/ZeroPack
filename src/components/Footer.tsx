import { Leaf, Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12 mb-12">
            <div className="md:col-span-1 space-y-6">
              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-primary/20 rounded-xl">
                  <Leaf className="w-7 h-7 text-primary" />
                </div>
                <span className="text-2xl font-bold">ZeroPack</span>
              </div>
              <p className="text-secondary-foreground/80 leading-relaxed text-base max-w-sm">
                Bersama ZeroPack, hidup praktis dan peduli lingkungan bukan lagi pilihan sulit.
              </p>
            </div>

            <div className="md:col-span-1 md:text-center">
              <h3 className="font-semibold text-xl mb-6">Layanan</h3>
              <ul className="space-y-3 text-secondary-foreground/80">
                <li className="hover:text-primary transition-colors cursor-pointer">Sabun Cair</li>
                <li className="hover:text-primary transition-colors cursor-pointer">Detergen</li>
                <li className="hover:text-primary transition-colors cursor-pointer">Pembersih Lantai</li>
                <li className="hover:text-primary transition-colors cursor-pointer">Sabun Cuci Piring</li>
              </ul>
            </div>

            <div className="md:col-span-1">
              <h3 className="font-semibold text-xl mb-6">Kontak</h3>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-secondary-foreground/80 hover:text-primary transition-colors group cursor-pointer">
                  <Mail className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                  <span>info@zeropack.id</span>
                </li>
                <li className="flex items-center gap-3 text-secondary-foreground/80 hover:text-primary transition-colors group cursor-pointer">
                  <Phone className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                  <span>+62 812-3456-7890</span>
                </li>
                <li className="flex items-center gap-3 text-secondary-foreground/80 hover:text-primary transition-colors group cursor-pointer">
                  <MapPin className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                  <span>Yogyakarta, Indonesia</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-secondary-foreground/20 text-center text-secondary-foreground/70">
            <p>&copy; 2025 ZeroPack. All rights reserved. Made with 🌿 for the Earth.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
