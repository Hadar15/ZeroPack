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
    <section className="py-24 bg-gradient-to-b from-green-50/50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Dampak Kolektif Kita
          </h2>
          <p className="text-lg text-gray-600 mb-12">
            Bersama-sama kita sudah menyelamatkan Bumi dari ribuan botol plastik
          </p>

          {/* Time frame selector */}
          <div className="inline-flex bg-white rounded-xl p-2 shadow-lg mb-12">
            {timeFrames.map((timeFrame) => (
              <button
                key={timeFrame.id}
                onClick={() => setSelectedTimeFrame(timeFrame.id)}
                className={`px-6 py-2 rounded-lg transition-all duration-300 ${
                  selectedTimeFrame === timeFrame.id
                    ? "bg-green-600 text-white shadow-md"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                {timeFrame.label}
              </button>
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