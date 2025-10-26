import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Slider } from "@/components/ui/slider";
import { Users, CheckCircle } from "lucide-react";
import calcImage from "../assets/calccc.jpg";

export function PriceCalculator() {
  const [residents, setResidents] = useState(3);
  const basePrice = 82000; // Price per person

  const calculateTotal = () => {
    return residents * basePrice;
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('id-ID').format(price);
  };

  const features = [
    "Sampo Natural",
    "Sabun Piring",
    "Deterjen Cair"
  ];

  return (
    <section className="py-12 px-4 relative overflow-hidden">
      {/* Subtle animated background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-10 right-20 w-72 h-72 bg-gray-100 rounded-full opacity-35 blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-10 left-20 w-96 h-96 bg-gray-100 rounded-full opacity-25 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            y: [0, 40, 0],
          }}
          transition={{
            duration: 13,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <img 
              src={calcImage} 
              alt="Kalkulator Harga" 
              className="w-full h-auto"
            />
          </motion.div>

          {/* Right: Calculator Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-3 text-gray-900">
                Kalkulator Harga
              </h2>
              <p className="text-gray-600">
                Hitung estimasi biaya bulanan paket refill untuk kebutuhan kos kamu
              </p>
            </div>

            {/* Input Section */}
            <div className="space-y-6">
              <div>
                <label className="block text-base font-medium text-gray-700 mb-3">
                  Jumlah Penghuni Kos
                </label>
                <div className="flex items-center gap-4">
                  <div className="flex-1">
                    <Slider
                      value={[residents]}
                      onValueChange={(value) => setResidents(value[0])}
                      max={10}
                      min={1}
                      step={1}
                    />
                  </div>
                  <motion.div
                    key={residents}
                    initial={{ scale: 1.2 }}
                    animate={{ scale: 1 }}
                    className="w-16 h-16 flex items-center justify-center bg-gray-900 text-white rounded-full"
                  >
                    <span className="font-bold text-xl">{residents}</span>
                  </motion.div>
                </div>
              </div>

              {/* Price Display */}
              <div className="border-t border-gray-200 pt-6">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`total-${residents}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <p className="text-sm text-gray-600 mb-2">Total per bulan:</p>
                    <p className="text-4xl font-bold text-gray-900 mb-4">
                      Rp {formatPrice(calculateTotal())}
                    </p>
                    <p className="text-sm text-gray-600 mb-1">Per orang per bulan:</p>
                    <p className="text-xl font-semibold text-gray-700">
                      Rp {formatPrice(basePrice)}
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Features */}
              <div className="border-t border-gray-200 pt-6">
                <h4 className="font-semibold text-base text-gray-900 mb-3">
                  Paket Bulanan Termasuk:
                </h4>
                <div className="space-y-2">
                  {features.map((feature, index) => (
                    <motion.div
                      key={feature}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center gap-2 text-gray-700"
                    >
                      <CheckCircle className="w-5 h-5 flex-shrink-0 text-gray-900" />
                      <span>{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Note */}
              <p className="text-sm text-gray-500 pt-4 border-t border-gray-200">
                * Harga tetap {formatPrice(basePrice)}/orang untuk paket 3 produk esensial. 
                Harga final disesuaikan dengan pilihan produk.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}