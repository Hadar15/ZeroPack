import { Droplet, Leaf, Home } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const Mission = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const benefits = [
    {
      icon: Leaf,
      title: "Hemat Plastik, Jaga Bumi",
      description:
        "Setiap refill yang kamu lakukan mengurangi sampah plastik dan melindungi lingkungan untuk generasi mendatang.",
      color: "bg-primary/10 text-primary",
    },
    {
      icon: Droplet,
      title: "Isi Ulang Tanpa Repot",
      description:
        "Kami datang ke tempatmu dengan produk berkualitas. Kamu tinggal pakai, tanpa ribet belanja.",
      color: "bg-secondary/10 text-secondary",
    },
    {
      icon: Home,
      title: "Cocok untuk Kos & Rumah",
      description:
        "Solusi praktis untuk kehidupan modern. Hemat tempat, hemat biaya, tetap berkualitas.",
      color: "bg-accent/10 text-accent",
    },
  ];

  return (
    <section ref={sectionRef} className="py-24 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Mengapa <span className="text-primary">ZeroPack?</span>
          </h2>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            Bersama ZeroPack, hidup praktis dan peduli lingkungan bukan lagi pilihan sulit.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className={`group p-8 bg-card rounded-3xl border border-border hover:shadow-lg transition-all duration-500 ${
                isVisible ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div
                className={`inline-flex p-4 rounded-2xl ${benefit.color} mb-6 group-hover:scale-110 transition-transform`}
              >
                <benefit.icon className="w-8 h-8" />
              </div>

              <h3 className="text-2xl font-bold text-foreground mb-4">
                {benefit.title}
              </h3>

              <p className="text-foreground/70 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Mission;
