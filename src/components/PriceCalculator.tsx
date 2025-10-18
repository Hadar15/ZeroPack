import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Users } from "lucide-react";

export function PriceCalculator() {
  const [residents, setResidents] = useState(3);
  const basePrice = 82000; // Price per person

  const calculateTotal = () => {
    return residents * basePrice;
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('id-ID').format(price);
  };

  return (
    <section className="py-24 bg-gradient-to-b from-white to-green-50/50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Kalkulator Harga
          </h2>
          <p className="text-lg text-gray-600 mb-12">
            Hitung Estimasi Biaya
            <br />
            Cari tahu berapa biaya refill untuk kos kamu
          </p>

          <Card className="p-8 bg-white shadow-xl">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Input Section */}
              <div className="space-y-8">
                <div className="text-left space-y-4">
                  <label className="block text-lg font-medium text-gray-700">
                    Jumlah Penghuni Kos
                  </label>
                  <div className="flex items-center gap-4">
                    <Users className="w-6 h-6 text-green-600" />
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
                    <span className="font-semibold text-xl min-w-[2ch] text-center">
                      {residents}
                    </span>
                  </div>
                </div>

                <div className="bg-green-50 rounded-lg p-6 text-left">
                  <h4 className="font-semibold text-green-800 mb-2">
                    Paket Bulanan
                  </h4>
                  <p className="text-green-700 text-sm">
                    Ayo berkontribusi menyelamatkan bumi dari sampah plastik
                  </p>
                </div>
              </div>

              {/* Price Display */}
              <div className="flex flex-col justify-center space-y-6">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`total-${residents}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="space-y-4"
                  >
                    <div className="space-y-1">
                      <p className="text-gray-600">Total per bulan:</p>
                      <p className="text-4xl font-bold text-green-600">
                        Rp {formatPrice(calculateTotal())}
                      </p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-gray-600">Per orang per bulan:</p>
                      <p className="text-2xl font-semibold text-green-600">
                        Rp {formatPrice(basePrice)}
                      </p>
                    </div>
                  </motion.div>
                </AnimatePresence>

                <p className="text-sm text-gray-500 italic">
                  * Harga tetap {formatPrice(basePrice)}/orang untuk paket 3 produk esensial 
                  (sabun piring, sampo, deterjen). Harga final disesuaikan dengan pilihan produk.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}