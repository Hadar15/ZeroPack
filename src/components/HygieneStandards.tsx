import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle } from "lucide-react"

export function HygieneStandards() {
  return (
    <div className="w-full bg-slate-50 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">SOP Kebersihan Ketat</h2>
          <p className="text-lg text-gray-600">
            Setiap botol melalui proses sanitasi food-grade untuk keamanan maksimal
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow">
            <CardContent className="pt-6">
              <CheckCircle className="h-12 w-12 text-green-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Food-Grade Standard</h3>
              <p className="text-gray-600">
                Semua produk kami menggunakan bahan food-grade yang aman untuk kulit dan lingkungan
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow">
            <CardContent className="pt-6">
              <CheckCircle className="h-12 w-12 text-green-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Bilas Air Panas</h3>
              <p className="text-gray-600">
                Botol dibilas dengan air panas {'>'}80°C untuk membunuh bakteri dan kuman
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow">
            <CardContent className="pt-6">
              <CheckCircle className="h-12 w-12 text-green-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Rak Steril & Segel</h3>
              <p className="text-gray-600">
                Botol disimpan di rak steril dan disegel dengan label tanggal untuk jaminan kualitas
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}