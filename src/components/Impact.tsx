import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import animmImage from "@/assets/animm.jpg";

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
    <section className="py-12 bg-gradient-to-br from-blue-50/40 via-slate-50/60 to-gray-50/40 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 right-10 w-72 h-72 bg-blue-100/40 rounded-full opacity-50 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 30, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 left-10 w-96 h-96 bg-slate-100/50 rounded-full opacity-40 blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            x: [0, -20, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-12 items-center">
            {/* Left: Content */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-3 space-y-8"
            >
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
                  Dampak Kolektif Kita
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  Bersama-sama kita sudah menyelamatkan Bumi dari ribuan botol plastik
                </p>
              </div>

              {/* Time frame selector */}
              <div className="inline-flex bg-white/80 backdrop-blur-sm rounded-xl p-1.5 border border-gray-200 shadow-sm">
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
                        className="absolute inset-0 bg-gradient-to-r from-gray-800 to-gray-900 rounded-lg"
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

              {/* Stats display - Horizontal Layout */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`plastic-${selectedTimeFrame}`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.4 }}
                    className="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-gray-200 text-center"
                  >
                    <motion.p 
                      className="text-4xl font-bold bg-gradient-to-r from-gray-800 to-gray-900 bg-clip-text text-transparent mb-2"
                      initial={{ scale: 0.9 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 100 }}
                    >
                      {currentData.plastic_kg}
                    </motion.p>
                    <p className="text-sm text-gray-600 font-medium">kg plastik terselamatkan</p>
                  </motion.div>

                  <motion.div
                    key={`bottles-${selectedTimeFrame}`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.4, delay: 0.05 }}
                    className="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-gray-200 text-center"
                  >
                    <motion.p 
                      className="text-4xl font-bold bg-gradient-to-r from-gray-800 to-gray-900 bg-clip-text text-transparent mb-2"
                      initial={{ scale: 0.9 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 100 }}
                    >
                      {currentData.bottles.toLocaleString()}
                    </motion.p>
                    <p className="text-sm text-gray-600 font-medium">setara botol 500ml</p>
                  </motion.div>

                  <motion.div
                    key={`refills-${selectedTimeFrame}`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                    className="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-gray-200 text-center"
                  >
                    <motion.p 
                      className="text-4xl font-bold bg-gradient-to-r from-gray-800 to-gray-900 bg-clip-text text-transparent mb-2"
                      initial={{ scale: 0.9 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 100 }}
                    >
                      {currentData.refills}
                    </motion.p>
                    <p className="text-sm text-gray-600 font-medium">total refill</p>
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
              className="relative lg:col-span-2 flex items-center"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-xl w-full">
                <img
                  src={animmImage}
                  alt="Dampak Kolektif"
                  className="w-full h-auto max-h-[400px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/10 to-transparent pointer-events-none" />
              </div>
              
              {/* Decorative accent */}
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-br from-gray-200 to-gray-300 rounded-full blur-2xl opacity-50 -z-10" />
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full blur-2xl opacity-40 -z-10" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}