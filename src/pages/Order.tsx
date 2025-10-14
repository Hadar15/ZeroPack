import OrderForm from "@/components/OrderForm";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const Order = () => {
  return (
    <div>
      <div className="mb-8">
        <Link
          to="/dashboard"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Kembali ke Dashboard</span>
        </Link>
        <h1 className="text-3xl font-bold mt-4">Formulir Pemesanan</h1>
        <p className="text-muted-foreground mt-1">
          Isi formulir di bawah ini untuk melakukan pemesanan produk ramah lingkungan
        </p>
      </div>
      <OrderForm />
    </div>
  );
};

export default Order;
