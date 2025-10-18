import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Mission from "@/components/Mission";
import { HowItWorks } from "@/components/HowItWorks";
import { HygieneStandards } from "@/components/HygieneStandards";
import Testimonials from "@/components/Testimonials";
import { FAQ } from "@/components/FAQ";
import Footer from "@/components/Footer";
import { useAuth } from "@/contexts/AuthContext";

const Index = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate('/dashboard');
    }
  }, [user, navigate]);
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <Mission />
      <HowItWorks />
      <HygieneStandards />
      <Testimonials />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Index;
