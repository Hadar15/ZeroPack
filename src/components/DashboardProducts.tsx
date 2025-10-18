import { motion } from "framer-motion";
import { Package } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";
import { ProductOrderModal } from "./ProductOrderModal";

const products = [
  {
    id: 1,
    name: "Sampo Herbal Natural",
    description: "Sampo herbal dengan ekstrak alami untuk rambut sehat dan berkilau",
    price: "25.000",
    volume: "1L",
    image: "/src/assets/products/shampoo.jpg"
  },
  {
    id: 2,
    name: "Sabun Mandi Natural",
    description: "Sabun mandi natural dengan formula lembut untuk kulit sehat",
    price: "15.000",
    volume: "1L",
    image: "/src/assets/products/bodysoap.jpg"
  }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export function DashboardProducts() {
  const [selectedProduct, setSelectedProduct] = useState<typeof products[0] | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mt-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex items-center gap-3 mb-6"
      >
        <div className="p-2 bg-green-100 rounded-xl">
          <Package className="w-5 h-5 text-green-600" />
        </div>
        <h2 className="text-xl font-semibold">Produk Tersedia</h2>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
      >
        {products.map((product) => (
          <motion.div key={product.id} variants={item}>
            <Card className="group cursor-pointer overflow-hidden" onClick={() => {
              setSelectedProduct(product);
              setIsOpen(true);
            }}>
              <div className="aspect-[4/3] relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20 z-10" />
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-4">
                <h3 className="font-medium mb-1">{product.name}</h3>
                <p className="text-sm text-muted-foreground mb-2 line-clamp-2">
                  {product.description}
                </p>
                <p className="text-green-600 font-semibold">
                  Rp {product.price}/<span className="text-sm font-normal">{product.volume}</span>
                </p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      {selectedProduct && (
        <ProductOrderModal
          isOpen={isOpen}
          onClose={() => {
            setIsOpen(false);
            setSelectedProduct(null);
          }}
          product={selectedProduct}
        />
      )}
    </div>
  );
}