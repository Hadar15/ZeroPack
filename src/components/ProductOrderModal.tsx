import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { MessageSquare } from "lucide-react";

interface ProductOrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: {
    name: string;
    price: string;
    volume: string;
  };
}

export function ProductOrderModal({ isOpen, onClose, product }: ProductOrderModalProps) {
  const [quantity, setQuantity] = useState(1);
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [notes, setNotes] = useState("");

  const basePrice = parseInt(product.price.replace(/\./g, ""), 10);
  const totalPrice = basePrice * quantity;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Halo, saya ingin memesan:
- Produk: ${product.name}
- Jumlah: ${quantity} ${product.volume}
- Total: Rp ${totalPrice.toLocaleString()}

Nama: ${name}
Alamat: ${address}
${notes ? `\nCatatan: ${notes}` : ""}`;

    window.open(
      `https://wa.me/628976009859?text=${encodeURIComponent(message)}`,
      "_blank"
    );
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-lg">
        <DialogHeader>
          <DialogTitle>Pesan {product.name}</DialogTitle>
          <DialogDescription>
            Isi form berikut untuk melanjutkan pemesanan via WhatsApp
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Price Calculator Section */}
          <div className="bg-green-50/50 p-4 rounded-lg space-y-4">
            <div className="space-y-2">
              <Label htmlFor="quantity">Jumlah ({product.volume})</Label>
              <div className="flex items-center gap-4">
                <button
                  type="button"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 rounded-lg bg-white text-green-600 hover:bg-green-50 transition-colors flex items-center justify-center"
                >
                  -
                </button>
                <Input
                  type="number"
                  id="quantity"
                  value={quantity}
                  onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                  className="text-center"
                  min="1"
                />
                <button
                  type="button"
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 rounded-lg bg-white text-green-600 hover:bg-green-50 transition-colors flex items-center justify-center"
                >
                  +
                </button>
              </div>
            </div>

            <div className="space-y-1">
              <div className="flex justify-between text-sm text-gray-600">
                <span>Harga per {product.volume}</span>
                <span>Rp {basePrice.toLocaleString()}</span>
              </div>
              <div className="flex justify-between font-medium">
                <span>Total Harga</span>
                <motion.span
                  key={totalPrice}
                  initial={{ scale: 1.2, color: "#059669" }}
                  animate={{ scale: 1, color: "#111827" }}
                  className="text-lg"
                >
                  Rp {totalPrice.toLocaleString()}
                </motion.span>
              </div>
            </div>

            <div className="text-sm text-green-600">
              <p>💚 Hemat {(quantity * 30).toLocaleString()}g plastik</p>
              <p>♻️ Setara {quantity * 2} botol 500ml</p>
            </div>
          </div>

          {/* Contact Details */}
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Nama Lengkap</Label>
              <Input
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="address">Alamat Pengiriman</Label>
              <Textarea
                id="address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="notes">Catatan (opsional)</Label>
              <Textarea
                id="notes"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Tambahkan catatan khusus untuk pesanan Anda..."
              />
            </div>
          </div>

          <Button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-6 flex items-center justify-center gap-2"
          >
            <MessageSquare className="w-5 h-5" />
            Lanjutkan ke WhatsApp
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}