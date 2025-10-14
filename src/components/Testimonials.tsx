import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "Anisa Rahma",
      role: "Mahasiswi, Yogyakarta",
      comment:
        "ZeroPack bikin hidup di kos jadi lebih praktis! Ga perlu lagi repot beli produk rumah tangga. Tinggal isi ulang, hemat kantong juga hemat lingkungan.",
      rating: 5,
    },
    {
      name: "Budi Santoso",
      role: "Karyawan Startup",
      comment:
        "Pelayanannya cepat dan ramah. Produknya berkualitas, harganya terjangkau. Seneng bisa ikut jaga bumi sambil tetap praktis.",
      rating: 5,
    },
    {
      name: "Clara Putri",
      role: "Content Creator",
      comment:
        "Konsep refill ini genius! Aku suka banget karena packaging-nya juga estetik. Cocok buat yang peduli lingkungan tapi tetap pengen hidup modern.",
      rating: 5,
    },
    {
      name: "Dimas Prasetyo",
      role: "Freelancer",
      comment:
        "Awalnya skeptis, tapi setelah coba ternyata produknya bagus dan pengantarannya tepat waktu. Recommended banget!",
      rating: 5,
    },
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Kata <span className="text-primary">Mereka</span>
          </h2>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            Dengarkan pengalaman pengguna ZeroPack yang sudah merasakan dampak positifnya
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <Card className="backdrop-blur-sm bg-card/80 border-2 shadow-xl">
            <CardContent className="p-12">
              <div className="flex justify-center mb-6">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-6 h-6 fill-primary text-primary"
                  />
                ))}
              </div>

              <blockquote className="text-xl md:text-2xl text-foreground text-center leading-relaxed mb-8">
                "{testimonials[currentIndex].comment}"
              </blockquote>

              <div className="text-center">
                <p className="text-lg font-semibold text-foreground">
                  {testimonials[currentIndex].name}
                </p>
                <p className="text-sm text-foreground/70">
                  {testimonials[currentIndex].role}
                </p>
              </div>

              <div className="flex justify-center gap-2 mt-8">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentIndex
                        ? "bg-primary w-8"
                        : "bg-foreground/30 hover:bg-foreground/50"
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="absolute top-1/2 -translate-y-1/2 -left-4 md:-left-16">
            <Button
              onClick={prevTestimonial}
              variant="outline"
              size="icon"
              className="rounded-full w-12 h-12 shadow-lg hover:scale-110 transition-transform"
            >
              <ChevronLeft className="w-6 h-6" />
            </Button>
          </div>

          <div className="absolute top-1/2 -translate-y-1/2 -right-4 md:-right-16">
            <Button
              onClick={nextTestimonial}
              variant="outline"
              size="icon"
              className="rounded-full w-12 h-12 shadow-lg hover:scale-110 transition-transform"
            >
              <ChevronRight className="w-6 h-6" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
