import { Card, CardContent } from "@/components/ui/card"

export function HowItWorks() {
  const steps = [
    {
      number: "1",
      title: "Chat WhatsApp",
      description: "Pilih produk, tentukan jadwal refill kamu dengan paket bulanan"
    },
    {
      number: "2",
      title: "Jadwal Terjadwal",
      description: "Kami datang sesuai jadwal, tidak perlu repot ingat-ingat"
    },
    {
      number: "3",
      title: "Isi Ulang Botol",
      description: "Botol kamu diisi ulang dengan produk higienis & food-grade"
    },
    {
      number: "4",
      title: "Lihat Dampak",
      description: "Pantau berapa plastik yang sudah kamu selamatkan di dashboard"
    }
  ]

  return (
    <div className="w-full py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Cara Kerja</h2>
          <p className="text-lg text-gray-600">
            Empat langkah sederhana untuk mulai menyelamatkan Bumi
          </p>
        </div>
        
        <div className="grid md:grid-cols-4 gap-6">
          {steps.map((step) => (
            <Card key={step.number} className="relative bg-white shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="pt-6">
                <div className="absolute -top-4 left-4 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">{step.number}</span>
                </div>
                <h3 className="text-xl font-semibold mb-2 mt-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}