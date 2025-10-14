import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Package } from "lucide-react";
import { supabase } from "@/lib/supabase";
import { useAuth } from "@/contexts/AuthContext";

const OrderForm = () => {
  const { toast } = useToast();
  const { user } = useAuth();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    phone: "",
    residents: "",
    products: "",
    package: ""
  });

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Insert order data to Supabase
      const { data, error } = await supabase
        .from('orders')
        .insert([
          {
            user_id: user?.id,
            status: 'pending',
            ...formData,
            created_at: new Date().toISOString(),
            residents: parseInt(formData.residents),
          }
        ]);

      if (error) throw error;

      toast({
        title: "Pesanan Berhasil! 🌿",
        description: "Pesanan Anda telah kami terima. Kami akan segera menghubungi Anda melalui WhatsApp untuk konfirmasi.",
      });

      // Reset form
      setFormData({
        name: "",
        address: "",
        phone: "",
        residents: "",
        products: "",
        package: ""
      });
      (e.target as HTMLFormElement).reset();
    } catch (error) {
      console.error('Error submitting order:', error);
      toast({
        title: "Gagal mengirim pesanan",
        description: "Terjadi kesalahan saat mengirim pesanan. Silakan coba lagi.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <Card className="bg-card border shadow-md">
        <CardHeader>
          <CardTitle>Form Pemesanan</CardTitle>
          <CardDescription>
            Semua informasi akan dijaga kerahasiaannya
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name">Nama Lengkap</Label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={(e) => handleChange("name", e.target.value)}
                placeholder="Masukkan nama lengkapmu"
                required
                className="bg-background/50"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="address">Alamat Kos</Label>
              <Textarea
                id="address"
                name="address"
                value={formData.address}
                onChange={(e) => handleChange("address", e.target.value)}
                placeholder="Alamat lengkap kos (jalan, nomor, RT/RW, kota)"
                required
                className="bg-background/50 min-h-24"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="phone">Nomor WhatsApp</Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleChange("phone", e.target.value)}
                  placeholder="08xx xxxx xxxx"
                  required
                  className="bg-background/50"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="residents">Jumlah Penghuni</Label>
                <Input
                  id="residents"
                  name="residents"
                  type="number"
                  min="1"
                  value={formData.residents}
                  onChange={(e) => handleChange("residents", e.target.value)}
                  placeholder="Berapa orang?"
                  required
                  className="bg-background/50"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="products">Produk yang Ingin Diisi Ulang</Label>
              <Select 
                name="products" 
                required
                value={formData.products}
                onValueChange={(value) => handleChange("products", value)}
              >
                <SelectTrigger className="bg-background/50">
                  <SelectValue placeholder="Pilih produk yang dibutuhkan" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="soap">Sabun Cair</SelectItem>
                  <SelectItem value="detergent">Detergen</SelectItem>
                  <SelectItem value="floor-cleaner">Pembersih Lantai</SelectItem>
                  <SelectItem value="dish-soap">Sabun Cuci Piring</SelectItem>
                  <SelectItem value="all">Paket Lengkap (Semua Produk)</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="package">Pilihan Paket</Label>
              <Select 
                name="package" 
                required
                value={formData.package}
                onValueChange={(value) => handleChange("package", value)}
              >
                <SelectTrigger className="bg-background/50">
                  <SelectValue placeholder="Pilih paket langganan" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="weekly">Mingguan (7 Hari)</SelectItem>
                  <SelectItem value="monthly">Bulanan (30 Hari)</SelectItem>
                </SelectContent>
              </Select>
              <p className="text-xs text-muted-foreground mt-1">
                * Pengantaran akan dilakukan secara rutin sesuai paket yang dipilih
              </p>
            </div>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors py-6"
            >
              <Package className="w-5 h-5 mr-2" />
              {isSubmitting ? "Mengirim..." : "Kirim Pesanan"}
            </Button>

            <p className="text-center text-sm text-muted-foreground">
              Dengan mengirim pesanan, Anda menyetujui untuk dihubungi melalui WhatsApp untuk konfirmasi pesanan
            </p>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default OrderForm;
