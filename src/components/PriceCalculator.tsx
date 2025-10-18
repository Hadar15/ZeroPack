import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Users, CheckCircle } from "lucide-react";

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
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-green-50/50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl md:text-4xl font-bold mb-4">
              Kalkulator Harga
            </h2>
            <p className="text-base md:text-lg text-gray-600 mb-8 md:mb-12">
              Hitung Estimasi Biaya Bulanan
              <br />
              Paket Refill untuk Kebutuhan Kos Kamu
            </p>
          </motion.div>

          <Card className="bg-white shadow-xl overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-6 md:gap-8 p-6 md:p-8">
              {/* Input Section */}
              <div className="space-y-6 md:space-y-8">
                <div className="text-left space-y-4">
                  <label className="block text-base md:text-lg font-medium text-gray-700">
                    Jumlah Penghuni Kos
                  </label>
                  <div className="flex items-center gap-4 bg-green-50/50 p-4 rounded-xl">
                    <div className="p-2 bg-green-100 rounded-lg">
                      <Users className="w-5 h-5 md:w-6 md:h-6 text-green-600" />
                    </div>
                    <div className="flex-1">
                      <Slider
                        value={[residents]}
                        onValueChange={(value) => setResidents(value[0])}
                        max={10}
                        min={1}
                        step={1}
                        className="mt-2"
                      />
                    </div>
                    <motion.div
                      key={residents}
                      initial={{ scale: 1.2 }}
                      animate={{ scale: 1 }}
                      className="w-12 h-12 flex items-center justify-center bg-white rounded-lg shadow-sm"
                    >
                      <span className="font-bold text-xl md:text-2xl text-green-600">
                        {residents}
                      </span>
                    </motion.div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-green-600 to-green-500 rounded-xl p-4 md:p-6 text-left shadow-lg">
                  <h4 className="font-semibold text-lg md:text-xl text-white mb-3">
                    Paket Bulanan
                  </h4>
                  <div className="space-y-2 text-green-50 text-sm md:text-base">
                    {features.map((feature, index) => (
                      <motion.div
                        key={feature}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-center gap-2"
                      >
                        <CheckCircle className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0" />
                        <span>{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Price Display */}
              <div className="flex flex-col justify-center space-y-6 md:space-y-8 bg-green-50/30 p-6 rounded-xl">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`total-${residents}`}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="space-y-6"
                  >
                    <div>
                      <p className="text-gray-600 mb-2">Total per bulan:</p>
                      <p className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-green-600 to-green-500 bg-clip-text text-transparent">
                        Rp {formatPrice(calculateTotal())}
                      </p>
                    </div>
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.2 }}
                    >
                      <p className="text-gray-600 mb-2">Per orang per bulan:</p>
                      <p className="text-xl md:text-2xl font-semibold text-green-600">
                        Rp {formatPrice(basePrice)}
                      </p>
                    </motion.div>
                  </motion.div>
                </AnimatePresence>

                <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 text-sm md:text-base">
                  <p className="text-gray-600">
                    * Harga tetap {formatPrice(basePrice)}/orang untuk paket 3 produk esensial. 
                    Harga final disesuaikan dengan pilihan produk.
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}