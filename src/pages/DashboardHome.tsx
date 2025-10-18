import { Link } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Package, Clock, CheckCircle, AlertCircle, Users } from "lucide-react";
import { DashboardProducts } from "@/components/DashboardProducts";
import { PriceCalculator } from "@/components/PriceCalculator";

const DashboardHome = () => {
  const { user } = useAuth();
  const orders = [
    {
      id: "001",
      product: "Paket Lengkap",
      status: "completed",
      date: "2025-01-10",
      nextDelivery: "2025-01-17",
    },
    {
      id: "002",
      product: "Sabun Cair + Detergen",
      status: "processing",
      date: "2025-01-13",
      nextDelivery: "2025-01-20",
    },
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return <CheckCircle className="w-5 h-5 text-primary" />;
      case "processing":
        return <Clock className="w-5 h-5 text-accent" />;
      case "pending":
        return <AlertCircle className="w-5 h-5 text-destructive" />;
      default:
        return <Package className="w-5 h-5 text-muted-foreground" />;
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case "completed":
        return "Selesai";
      case "processing":
        return "Dalam Proses";
      case "pending":
        return "Menunggu";
      default:
        return "Unknown";
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-primary/10 text-primary";
      case "processing":
        return "bg-accent/10 text-accent";
      case "pending":
        return "bg-destructive/10 text-destructive";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  return (
    <>
              <div className="flex flex-col gap-1">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-lg md:text-xl text-primary font-medium">
                      Selamat {new Date().getHours() < 12 ? 'pagi' : 
                              new Date().getHours() < 15 ? 'siang' :
                              new Date().getHours() < 18 ? 'sore' : 'malam'},
                      {' '}{user?.user_metadata?.full_name?.split(' ')[0] || 
                            user?.user_metadata?.name?.split(' ')[0] || 
                            user?.email?.split('@')[0] || 'Pelanggan'}!
                    </p>
                    <h1 className="text-4xl md:text-5xl font-bold text-foreground">
                      Dashboard <span className="text-primary">ZeroPack</span>
                    </h1>
                    <p className="text-lg text-muted-foreground mt-2">
                      Pantau status pesanan dan jadwal pengantaran produk ramah lingkunganmu
                    </p>
                  </div>
                  <Link
                    to="/dashboard/order"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium 
                             hover:bg-primary/90 active:scale-[0.98] transition-all"
                  >
                    <Package className="w-5 h-5" />
                    <span>Pesan Sekarang</span>
                  </Link>
                </div>
              </div>      <div className="grid md:grid-cols-3 gap-6 mt-12">
        <Card>
          <CardHeader className="pb-3">
            <CardDescription>Total Pesanan</CardDescription>
            <CardTitle className="text-4xl text-primary">12</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">Sejak bergabung</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardDescription>Plastik Terhemat</CardDescription>
            <CardTitle className="text-4xl text-primary">48</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">Botol plastik 🌿</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardDescription>Pengantaran Berikutnya</CardDescription>
            <CardTitle className="text-4xl text-primary">3</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">Hari lagi</p>
          </CardContent>
        </Card>
      </div>

      <Card className="mt-12">
        <CardHeader>
          <CardTitle>Riwayat Pesanan</CardTitle>
          <CardDescription>
            Lihat status dan jadwal pengantaran produkmu
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {orders.map((order) => (
              <div
                key={order.id}
                className="flex items-center justify-between p-4 border border-border rounded-xl hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-4">
                  {getStatusIcon(order.status)}
                  <div>
                    <p className="font-semibold text-foreground">
                      {order.product}
                    </p>
                    <p className="text-sm text-foreground/60">
                      Order #{order.id} • {order.date}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <span
                    className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(
                      order.status
                    )}`}
                  >
                    {getStatusText(order.status)}
                  </span>
                  <p className="text-xs text-foreground/60 mt-2">
                    Pengantaran: {order.nextDelivery}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <DashboardProducts />
      <PriceCalculator />
    </>
  );
};

export default DashboardHome;