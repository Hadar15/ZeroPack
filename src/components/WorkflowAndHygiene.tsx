import { motion } from "framer-motion";
import { MessageCircle, Calendar, Droplet, BarChart3, Shield, FlaskConical, Sparkles, CheckCircle2 } from "lucide-react";
import caraKerjaImage from "../assets/carakerja.png";
import sopCleanImage from "../assets/sopclean.jpg";

export function WorkflowAndHygiene() {
  const steps = [
    {
      icon: MessageCircle,
      title: "Chat WhatsApp",
      description: "Pilih produk, tentukan jadwal refill kamu dengan paket bulanan"
    },
    {
      icon: Calendar,
      title: "Jadwal Terjadwal",
      description: "Kami datang sesuai jadwal, tidak perlu repot ingat-ingat"
    },
    {
      icon: Droplet,
      title: "Isi Ulang Botol",
      description: "Botol kamu diisi ulang dengan produk higienis & food-grade"
    },
    {
      icon: BarChart3,
      title: "Lihat Dampak",
      description: "Pantau berapa plastik yang sudah kamu selamatkan di dashboard"
    }
  ];

  const hygieneSteps = [
    {
      icon: Shield,
      title: "Sertifikasi BPOM & Halal",
      description: "Semua produk bersertifikat resmi dan aman untuk keluarga"
    },
    {
      icon: FlaskConical,
      title: "Formula Food-Grade",
      description: "Bahan berkualitas tinggi dengan standar industri makanan"
    },
    {
      icon: Sparkles,
      title: "Proses Sterilisasi",
      description: "Botol disterilkan sebelum pengisian dengan UV sterilizer"
    },
    {
      icon: CheckCircle2,
      title: "Quality Control Ketat",
      description: "Setiap batch diuji lab untuk memastikan kualitas konsisten"
    }
  ];

  return (
    <div className="w-full py-12 px-4 relative overflow-hidden">
      {/* Subtle animated background elements with color variation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-gray-100/60 rounded-full opacity-40 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 40, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-slate-100/50 rounded-full opacity-35 blur-3xl"
          animate={{
            scale: [1, 1.15, 1],
            x: [0, -30, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-1/2 right-1/3 w-72 h-72 bg-stone-100/40 rounded-full opacity-30 blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            y: [0, -25, 0],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto space-y-16 relative z-10">
        
        {/* Section 1: Cara Kerja - Gambar Kiri, Timeline Kanan */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <img 
              src={caraKerjaImage} 
              alt="Cara Kerja ZeroPack" 
              className="w-full h-auto"
            />
          </motion.div>

          {/* Right: Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-3 text-gray-900">
                Cara Kerja
              </h2>
              <p className="text-gray-600">
                Empat langkah sederhana untuk mulai menyelamatkan Bumi
              </p>
            </div>

            {/* Timeline */}
            <div className="relative space-y-6">
              {/* Vertical line */}
              <div className="absolute left-[11px] top-6 bottom-6 w-[2px] bg-gray-300"></div>
              
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="relative pl-12"
                >
                  {/* Icon circle */}
                  <div className="absolute left-0 w-[24px] h-[24px] bg-gray-900 rounded-full flex items-center justify-center border-2 border-white shadow-sm">
                    <step.icon className="w-3 h-3 text-white" />
                  </div>
                  
                  {/* Content */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">{step.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Section 2: SOP Kebersihan - Timeline Kiri, Gambar Kanan */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Timeline */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8 lg:order-1 order-2"
          >
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-3 text-gray-900">
                SOP Kebersihan Ketat
              </h2>
              <p className="text-gray-600">
                Standar tinggi untuk keamanan dan kualitas produk Anda
              </p>
            </div>

            {/* Timeline */}
            <div className="relative space-y-6">
              {/* Vertical line */}
              <div className="absolute left-[11px] top-6 bottom-6 w-[2px] bg-gray-300"></div>
              
              {hygieneSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="relative pl-12"
                >
                  {/* Icon circle */}
                  <div className="absolute left-0 w-[24px] h-[24px] bg-gray-900 rounded-full flex items-center justify-center border-2 border-white shadow-sm">
                    <step.icon className="w-3 h-3 text-white" />
                  </div>
                  
                  {/* Content */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">{step.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:order-2 order-1"
          >
            <img 
              src={sopCleanImage} 
              alt="SOP Kebersihan ZeroPack" 
              className="w-full h-auto"
            />
          </motion.div>
        </div>

      </div>
    </div>
  );
}
