import Navigation from "@/components/Navigation";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

const Feedback = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-20">
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
};

export default Feedback;
