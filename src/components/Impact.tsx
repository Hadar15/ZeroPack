import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import dattsImage from "@/assets/datts.jpg";

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
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: Content */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                Dampak Kolektif Kita
              </h2>
              <p className="text-lg text-gray-600 mb-10">
                Bersama-sama kita sudah menyelamatkan Bumi dari ribuan botol plastik
              </p>

              {/* Time frame selector */}
              <div className="inline-flex bg-white rounded-lg p-1 mb-10 border border-gray-200">
                {timeFrames.map((timeFrame) => (
                  <motion.button
                    key={timeFrame.id}
                    onClick={() => setSelectedTimeFrame(timeFrame.id)}
                    className={`px-6 py-3 rounded-lg transition-all duration-300 relative ${
                      selectedTimeFrame === timeFrame.id
                        ? "text-white"
                        : "text-gray-600"
                    }`}
                    whileTap={{ scale: 0.95 }}
                  >
                    {selectedTimeFrame === timeFrame.id && (
                      <motion.div
                        className="absolute inset-0 bg-gray-900 rounded-lg"
                        layoutId="activeFrame"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                    <span className="relative z-10 text-sm font-medium">
                      {timeFrame.label}
                    </span>
                  </motion.button>
                ))}
              </div>

              {/* Stats display */}
              <div className="space-y-6">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`plastic-${selectedTimeFrame}`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.4 }}
                    className="border-b border-gray-200 pb-6"
                  >
                    <motion.p 
                      className="text-5xl font-bold text-gray-900 mb-2"
                      initial={{ scale: 0.9 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 100 }}
                    >
                      {currentData.plastic_kg}
                    </motion.p>
                    <p className="text-gray-600">kg plastik terselamatkan</p>
                  </motion.div>

                  <motion.div
                    key={`bottles-${selectedTimeFrame}`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.4, delay: 0.05 }}
                    className="border-b border-gray-200 pb-6"
                  >
                    <motion.p 
                      className="text-5xl font-bold text-gray-900 mb-2"
                      initial={{ scale: 0.9 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 100 }}
                    >
                      {currentData.bottles.toLocaleString()}
                    </motion.p>
                    <p className="text-gray-600">setara botol 500ml</p>
                  </motion.div>

                  <motion.div
                    key={`refills-${selectedTimeFrame}`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                  >
                    <motion.p 
                      className="text-5xl font-bold text-gray-900 mb-2"
                      initial={{ scale: 0.9 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 100 }}
                    >
                      {currentData.refills}
                    </motion.p>
                    <p className="text-gray-600">total refill</p>
                  </motion.div>
                </AnimatePresence>
              </div>
            </motion.div>

            {/* Right: Image */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <img
                src={dattsImage}
                alt="Dampak Kolektif"
                className="w-full h-auto rounded-lg"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}