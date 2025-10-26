import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { MessageCircle, Calendar, Droplet, BarChart3, Shield, FlaskConical, Sparkles, CheckCircle2 } from "lucide-react";

export function WorkflowAndHygiene() {
  const steps = [
    {
      number: "1",
      icon: MessageCircle,
      title: "Chat WhatsApp",
      description: "Pilih produk, tentukan jadwal refill kamu dengan paket bulanan"
    },
    {
      number: "2",
      icon: Calendar,
      title: "Jadwal Terjadwal",
      description: "Kami datang sesuai jadwal, tidak perlu repot ingat-ingat"
    },
    {
      number: "3",
      icon: Droplet,
      title: "Isi Ulang Botol",
      description: "Botol kamu diisi ulang dengan produk higienis & food-grade"
    },
    {
      number: "4",
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
    <div className="w-full py-20 px-4 bg-gradient-to-b from-background via-green-50/30 to-background">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-green-700 to-green-500 bg-clip-text text-transparent">
            Mudah & Terpercaya
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Proses yang sederhana dengan standar kebersihan yang ketat
          </p>
        </motion.div>

        {/* Main Grid Layout */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left: Cara Kerja */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="inline-block">
              <h3 className="text-3xl font-bold mb-2 text-gray-900">Cara Kerja</h3>
              <div className="h-1 w-20 bg-gradient-to-r from-green-500 to-green-300 rounded-full"></div>
            </div>
            <p className="text-gray-600 mb-8">
              Empat langkah sederhana untuk mulai menyelamatkan Bumi
            </p>
            
            <div className="space-y-4">
              {steps.map((step, index) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="relative bg-white shadow-md hover:shadow-xl transition-all duration-300 border-l-4 border-green-500 group hover:-translate-y-1">
                    <CardContent className="p-5">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                            <step.icon className="w-6 h-6 text-white" />
                          </div>
                        </div>
                        <div className="flex-1 pt-1">
                          <div className="flex items-center gap-2 mb-2">
                            <span className="text-sm font-bold text-green-600">Langkah {step.number}</span>
                          </div>
                          <h4 className="text-lg font-semibold mb-1 text-gray-900">{step.title}</h4>
                          <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: SOP Kebersihan (offset ke bawah) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6 lg:mt-24"
          >
            <div className="inline-block">
              <h3 className="text-3xl font-bold mb-2 text-gray-900">SOP Kebersihan Ketat</h3>
              <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-blue-300 rounded-full"></div>
            </div>
            <p className="text-gray-600 mb-8">
              Standar tinggi untuk keamanan dan kualitas produk Anda
            </p>
            
            <div className="space-y-4">
              {hygieneSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                >
                  <Card className="relative bg-gradient-to-br from-white to-blue-50/30 shadow-md hover:shadow-xl transition-all duration-300 border-l-4 border-blue-500 group hover:-translate-y-1">
                    <CardContent className="p-5">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                            <step.icon className="w-6 h-6 text-white" />
                          </div>
                        </div>
                        <div className="flex-1 pt-1">
                          <h4 className="text-lg font-semibold mb-1 text-gray-900">{step.title}</h4>
                          <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16 p-8 bg-gradient-to-r from-green-500 to-blue-500 rounded-2xl shadow-xl"
        >
          <p className="text-white text-lg font-medium mb-4">
            Bergabung dengan ribuan pengguna yang sudah merasakan manfaatnya
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-white/90">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5" />
              <span className="text-sm">Proses Cepat</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5" />
              <span className="text-sm">Aman & Higienis</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5" />
              <span className="text-sm">Ramah Lingkungan</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
