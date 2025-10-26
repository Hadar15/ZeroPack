import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { motion } from "framer-motion";

export function FAQ() {
  return (
    <div className="w-full max-w-4xl mx-auto py-16 px-4 relative">
      {/* Subtle background accent */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gray-100 rounded-full opacity-20 blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <motion.h2 
        className="text-3xl font-bold text-center mb-10 text-gray-900 relative z-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Pertanyaan Umum
      </motion.h2>
      
      <div className="relative z-10">
        <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>Bagaimana sistem deposit botol bekerja?</AccordionTrigger>
          <AccordionContent>
            Kamu membayar deposit botol di awal (Rp 10.000-15.000 per botol tergantung ukuran). 
            Deposit akan dikembalikan penuh jika kamu berhenti berlangganan dan mengembalikan botol dalam kondisi baik.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Bagaimana cara ubah jadwal refill?</AccordionTrigger>
          <AccordionContent>
            Kamu bisa chat via WhatsApp kapan saja untuk reschedule, pause, atau skip jadwal refill berikutnya. 
            Kami sangat fleksibel!
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Apakah tersedia di area saya?</AccordionTrigger>
          <AccordionContent>
            Saat ini kami melayani area Kota Bandung. Support kami untuk berdampak di daerah lainnya yaa!
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger>Bagaimana cara pembayaran?</AccordionTrigger>
          <AccordionContent>
            Pembayaran via transfer bank, QRIS, dan Cash On Delivery (COD). 
            Kami akan kirimkan invoice setelah refill selesai.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-5">
          <AccordionTrigger>Berapa minimal order?</AccordionTrigger>
          <AccordionContent>
            Minimal order 2 produk untuk satu kali refill. 
            Kami sarankan paket berlangganan untuk hasil maksimal dan harga lebih hemat.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      </div>
    </div>
  )
}