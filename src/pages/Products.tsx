import { motion } from "framer-motion";
import { ArrowUpRight, Droplet } from "lucide-react";
import { Card } from "@/components/ui/card";

interface Product {
  category: string;
  name: string;
  description: string;
  price: string;
  volume: string;
  plasticSaved: string;
  bottleEquivalent: string;
  image: string;
}

const products: Product[] = [
  {
    category: "personal-care",
    name: "Sampo Herbal Natural",
    description: "Sampo herbal dengan ekstrak alami untuk rambut sehat dan berkilau",
    price: "25.000",
    volume: "1L",
    plasticSaved: "30g",
    bottleEquivalent: "2",
    image: "/src/assets/products/shampoo.jpg"
  },
  {
    category: "laundry",
    name: "Deterjen Cair Premium",
    description: "Deterjen cair konsentrat untuk cucian bersih maksimal dan wangi tahan lama",
    price: "35.000",
    volume: "1L",
    plasticSaved: "35g",
    bottleEquivalent: "2",
    image: "/src/assets/products/detergent.jpg"
  },
  {
    category: "personal-care",
    name: "Sabun Tangan Antiseptik",
    description: "Sabun cuci tangan dengan formula antiseptik, aman untuk kulit sensitif",
    price: "18.000",
    volume: "500ml",
    plasticSaved: "15g",
    bottleEquivalent: "1",
    image: "/src/assets/products/handsoap.jpg"
  },
  {
    category: "cleaning",
    name: "Pembersih Lantai Serbaguna",
    description: "Pembersih lantai untuk semua jenis permukaan, harum segar",
    price: "22.000",
    volume: "1L",
    plasticSaved: "28g",
    bottleEquivalent: "2",
    image: "/src/assets/products/floorcleaner.jpg"
  },
  {
    category: "personal-care",
    name: "Conditioner Lembut",
    description: "Conditioner melembabkan rambut tanpa membuat lepek",
    price: "28.000",
    volume: "1L",
    plasticSaved: "32g",
    bottleEquivalent: "2",
    image: "/src/assets/products/conditioner.jpg"
  },
  {
    category: "personal-care",
    name: "Sabun Mandi Natural",
    description: "Sabun mandi natural dengan formula lembut untuk kulit sehat",
    price: "15.000",
    volume: "1L",
    plasticSaved: "25g",
    bottleEquivalent: "2",
    image: "/src/assets/products/bodysoap.jpg"
  }
];

export default function Products() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50/50 via-white to-green-50/30">
      <div className="container max-w-6xl mx-auto px-4 py-24">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl mx-auto text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-green-500">
            Katalog Produk
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Produk Ramah Lingkungan
            <br />
            Pilih produk eco-friendly untuk kebutuhan rumah tangga kamu. Semua produk food-grade dan aman untuk kulit sensitif.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="group overflow-hidden bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300">
                <div className="aspect-square relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-green-600/20 to-transparent z-10" />
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-sm font-medium text-green-600 z-20">
                    {product.category}
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">{product.name}</h3>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  
                  <div className="flex justify-between items-end mb-6">
                    <div>
                      <p className="text-2xl font-bold text-green-600">
                        Rp {product.price}
                        <span className="text-base font-normal text-gray-500">/ {product.volume}</span>
                      </p>
                    </div>
                  </div>

                  <div className="space-y-2 mb-6">
                    <p className="flex items-center gap-2 text-gray-600">
                      <Droplet className="w-5 h-5 text-green-500" />
                      Hemat {product.plasticSaved} plastik per refill
                    </p>
                    <p className="text-gray-600">
                      ♻️ Setara {product.bottleEquivalent} botol 500ml
                    </p>
                  </div>

                  <a
                    href={`https://wa.me/your-number?text=Halo, saya tertarik dengan produk ${product.name}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors group"
                  >
                    Order via WhatsApp
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}