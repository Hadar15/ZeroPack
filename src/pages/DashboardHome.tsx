import { Link } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Package, Clock, CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import { DashboardProducts } from "@/components/DashboardProducts";
import { PriceCalculator } from "@/components/PriceCalculator";
import { useEffect, useState } from "react";
import { getOrdersFromGoogleSheets, OrderData } from "@/lib/googleSheets";

const DashboardHome = () => {
  const { user } = useAuth();
  const [orders, setOrders] = useState<OrderData[]>([]);
  const [loading, setLoading] = useState(true);

  // Fetch orders from Google Sheets
  useEffect(() => {
    const fetchOrders = async () => {
      if (!user?.id) return;
      
      try {
        setLoading(true);
        const allOrders = await getOrdersFromGoogleSheets();
        // Filter orders untuk user ini saja
        const userOrders = allOrders.filter(order => order.user_id === user.id);
        // Sort by timestamp descending (newest first)
        userOrders.sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime());
        setOrders(userOrders);
      } catch (error) {
        console.error("Error fetching orders:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, [user?.id]);

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
        return "Menunggu Konfirmasi";
      default:
        return status;
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

  // Hitung statistik
  const totalOrders = orders.length;
  const totalPlasticSaved = totalOrders * 200; // 200 gram per order
  
  // Format produk name
  const getProductName = (productCode: string) => {
    const products: Record<string, string> = {
      'soap': 'Sabun Cair',
      'detergent': 'Detergen',
      'floor-cleaner': 'Pembersih Lantai',
      'dish-soap': 'Sabun Cuci Piring',
      'all': 'Paket Lengkap (Semua Produk)'
    };
    return products[productCode] || productCode;
  };

  // Format package name
  const getPackageName = (packageCode: string) => {
    const packages: Record<string, string> = {
      'weekly': 'Mingguan (7 Hari)',
      'monthly': 'Bulanan (30 Hari)'
    };
    return packages[packageCode] || packageCode;
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
            <CardTitle className="text-4xl text-primary">{totalOrders}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">Sejak bergabung</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardDescription>Plastik Terhemat</CardDescription>
            <CardTitle className="text-4xl text-primary">{totalPlasticSaved}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">Gram plastik 🌿</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardDescription>Status Pesanan</CardDescription>
            <CardTitle className="text-4xl text-primary">
              {orders.filter(o => o.status === 'pending').length}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">Menunggu konfirmasi</p>
          </CardContent>
        </Card>
      </div>

      <Card className="mt-12">
        <CardHeader>
          <CardTitle>Riwayat Pesanan</CardTitle>
          <CardDescription>
            Lihat status dan detail pemesananmu
          </CardDescription>
        </CardHeader>
        <CardContent>
          {loading ? (
            <div className="flex items-center justify-center py-12">
              <Loader2 className="w-8 h-8 animate-spin text-primary" />
              <span className="ml-3 text-muted-foreground">Memuat data pesanan...</span>
            </div>
          ) : orders.length === 0 ? (
            <div className="text-center py-12">
              <Package className="w-16 h-16 mx-auto text-muted-foreground/50 mb-4" />
              <p className="text-lg font-medium text-foreground mb-2">
                Belum ada pesanan
              </p>
              <p className="text-sm text-muted-foreground mb-6">
                Mulai pesanan pertamamu dan selamatkan Bumi dari sampah plastik!
              </p>
              <Link
                to="/dashboard/order"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium 
                         hover:bg-primary/90 transition-all"
              >
                <Package className="w-5 h-5" />
                <span>Buat Pesanan</span>
              </Link>
            </div>
          ) : (
            <div className="space-y-4">
              {orders.map((order, index) => (
                <div
                  key={`${order.user_id}-${index}`}
                  className="flex items-center justify-between p-4 border border-border rounded-xl hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center gap-4">
                    {getStatusIcon(order.status)}
                    <div>
                      <p className="font-semibold text-foreground">
                        {getProductName(order.products)}
                      </p>
                      <p className="text-sm text-foreground/60">
                        {order.name} • {order.phone}
                      </p>
                      <p className="text-xs text-foreground/50 mt-1">
                        {getPackageName(order.package)} • {order.residents} penghuni
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
                      Dipesan: {order.timestamp}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>

      <DashboardProducts />
      <PriceCalculator />
    </>
  );
};

export default DashboardHome;