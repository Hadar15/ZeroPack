import { motion } from "framer-motion";
import { MessageCircle, Calendar, Droplet, BarChart3, Shield, FlaskConical, Sparkles, CheckCircle2 } from "lucide-react";
import caraKerjaImage from "../assets/carakerja.png";
import sopCleanImage from "../assets/sopclean.jpg";

export function WorkflowAndHygiene() {
  const steps = [
    {
      icon: MessageCircle,
      title: "Evaluate",
      subtitle: "Chat WhatsApp",
      description: "Pilih produk yang kamu butuhkan dan tentukan jadwal refill dengan paket yang sesuai"
    },
    {
      icon: Calendar,
      title: "Integrate", 
      subtitle: "Jadwal Terjadwal",
      description: "Kami datang sesuai jadwal yang telah ditentukan, tidak perlu repot ingat-ingat"
    },
    {
      icon: Droplet,
      title: "Automate",
      subtitle: "Isi Ulang Botol",
      description: "Botol kamu diisi ulang dengan produk higienis food-grade yang aman dan berkualitas"
    }
  ];

  const hygieneSteps = [
    {
      icon: Shield,
      title: "Sertifikasi Resmi",
      description: "Semua produk bersertifikat BPOM & Halal, aman untuk keluarga Indonesia"
    },
    {
      icon: FlaskConical,
      title: "Formula Premium",
      description: "Bahan berkualitas tinggi dengan standar food-grade industri internasional"
    },
    {
      icon: Sparkles,
      title: "Sterilisasi UV",
      description: "Botol disterilkan dengan UV sterilizer sebelum proses pengisian produk"
    },
    {
      icon: CheckCircle2,
      title: "Quality Control",
      description: "Setiap batch produk diuji laboratorium untuk memastikan kualitas konsisten"
    }
  ];

  return (
    <div className="w-full py-20 px-4 bg-gradient-to-b from-background via-green-50/20 to-background">
      <div className="max-w-7xl mx-auto space-y-32">
        
        {/* Section 1: Cara Kerja - Gambar Kiri, Timeline Kanan */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={caraKerjaImage} 
                alt="Cara Kerja ZeroPack" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-green-400/20 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-blue-400/20 rounded-full blur-3xl"></div>
          </motion.div>

          {/* Right: Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-green-700 to-green-500 bg-clip-text text-transparent"
              >
                How We Work
              </motion.h2>
              <p className="text-gray-600 text-lg">
                How we work with clients to deliver the maximum benefit to their business
              </p>
            </div>

            {/* Timeline */}
            <div className="relative space-y-8">
              {/* Vertical line */}
              <div className="absolute left-[15px] top-8 bottom-8 w-[2px] bg-gradient-to-b from-green-400 via-green-500 to-green-600"></div>
              
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className="relative pl-16 group"
                >
                  {/* Icon circle */}
                  <div className="absolute left-0 w-[30px] h-[30px] bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center shadow-lg group-hover:scale-125 transition-transform duration-300 border-4 border-white">
                    <step.icon className="w-4 h-4 text-white" />
                  </div>
                  
                  {/* Content */}
                  <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border-l-4 border-green-500 group-hover:-translate-y-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-xl font-bold text-gray-900">{step.title}</h3>
                      <span className="text-sm text-green-600 font-medium">• {step.subtitle}</span>
                    </div>
                    <p className="text-gray-600 leading-relaxed">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Section 2: SOP Kebersihan - Timeline Kiri, Gambar Kanan */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Timeline */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8 lg:order-1 order-2"
          >
            <div>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-700 to-blue-500 bg-clip-text text-transparent"
              >
                SOP Kebersihan Ketat
              </motion.h2>
              <p className="text-gray-600 text-lg">
                Standar tinggi untuk keamanan dan kualitas produk yang Anda gunakan
              </p>
            </div>

            {/* Timeline */}
            <div className="relative space-y-8">
              {/* Vertical line */}
              <div className="absolute left-[15px] top-8 bottom-8 w-[2px] bg-gradient-to-b from-blue-400 via-blue-500 to-blue-600"></div>
              
              {hygieneSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className="relative pl-16 group"
                >
                  {/* Icon circle */}
                  <div className="absolute left-0 w-[30px] h-[30px] bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg group-hover:scale-125 transition-transform duration-300 border-4 border-white">
                    <step.icon className="w-4 h-4 text-white" />
                  </div>
                  
                  {/* Content */}
                  <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border-l-4 border-blue-500 group-hover:-translate-y-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative lg:order-2 order-1"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={sopCleanImage} 
                alt="SOP Kebersihan ZeroPack" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-blue-400/20 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-green-400/20 rounded-full blur-3xl"></div>
          </motion.div>
        </div>

      </div>
    </div>
  );
}
