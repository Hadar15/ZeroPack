import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card } from "@/components/ui/card";

interface ImpactData {
  plastic_kg: number;
  bottles: number;
  refills: number;
}

const impactData: Record<string, ImpactData> = {
  "30": {
    plastic_kg: 9.8,
    bottles: 393,
    refills: 15
  },
  "90": {
    plastic_kg: 22.8,
    bottles: 912,
    refills: 35
  },
  "365": {
    plastic_kg: 46.8,
    bottles: 1875,
    refills: 72
  },
  "all": {
    plastic_kg: 57.9,
    bottles: 2318,
    refills: 89
  }
};

const timeFrames = [
  { id: "30", label: "30 Hari" },
  { id: "90", label: "90 Hari" },
  { id: "365", label: "12 Bulan" },
  { id: "all", label: "Semua" }
];

export function Impact() {
  const [selectedTimeFrame, setSelectedTimeFrame] = useState("30");
  const currentData = impactData[selectedTimeFrame];

  return (
    <section className="py-24 bg-gradient-to-b from-background to-green-50/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-green-500">
              Dampak Kolektif Kita
            </h2>
            <p className="text-lg md:text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
              Bersama-sama kita sudah menyelamatkan Bumi dari ribuan botol plastik
            </p>
          </motion.div>

          {/* Time frame selector */}
          <div className="inline-flex bg-white/80 backdrop-blur-sm rounded-2xl p-2 shadow-xl mb-12 border border-green-100">
            {timeFrames.map((timeFrame) => (
              <motion.button
                key={timeFrame.id}
                onClick={() => setSelectedTimeFrame(timeFrame.id)}
                className={`px-6 py-3 rounded-xl transition-all duration-300 relative ${
                  selectedTimeFrame === timeFrame.id
                    ? "text-white"
                    : "text-gray-600 hover:text-green-600"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {selectedTimeFrame === timeFrame.id && (
                  <motion.div
                    className="absolute inset-0 bg-green-600 rounded-xl"
                    layoutId="activeFrame"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10">
                  {timeFrame.label}
                </span>
              </motion.button>
            ))}
          </div>

          {/* Stats display */}
          <div className="grid md:grid-cols-3 gap-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={`plastic-${selectedTimeFrame}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <Card className="p-6 text-center bg-white hover:shadow-lg transition-shadow">
                  <motion.p 
                    className="text-4xl font-bold text-green-600 mb-2"
                    initial={{ scale: 0.5 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 100 }}
                  >
                    {currentData.plastic_kg}
                  </motion.p>
                  <p className="text-gray-600">kg plastik terselamatkan</p>
                </Card>
              </motion.div>

              <motion.div
                key={`bottles-${selectedTimeFrame}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <Card className="p-6 text-center bg-white hover:shadow-lg transition-shadow">
                  <motion.p 
                    className="text-4xl font-bold text-green-600 mb-2"
                    initial={{ scale: 0.5 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 100 }}
                  >
                    {currentData.bottles.toLocaleString()}
                  </motion.p>
                  <p className="text-gray-600">setara botol 500ml</p>
                </Card>
              </motion.div>

              <motion.div
                key={`refills-${selectedTimeFrame}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Card className="p-6 text-center bg-white hover:shadow-lg transition-shadow">
                  <motion.p 
                    className="text-4xl font-bold text-green-600 mb-2"
                    initial={{ scale: 0.5 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 100 }}
                  >
                    {currentData.refills}
                  </motion.p>
                  <p className="text-gray-600">total refill</p>
                </Card>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}