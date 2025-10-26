import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import { WorkflowAndHygiene } from "@/components/WorkflowAndHygiene";
import { Impact } from "@/components/Impact";
import { PriceCalculator } from "@/components/PriceCalculator";
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
      <Impact />
      <WorkflowAndHygiene />
      <PriceCalculator />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Index;
