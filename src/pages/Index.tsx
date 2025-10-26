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
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      
      {/* Smooth gradient transitions between sections */}
      <div className="bg-gradient-to-b from-gray-900/5 via-gray-50 to-white">
        <Impact />
      </div>
      
      <div className="bg-gradient-to-b from-white via-gray-50/50 to-white">
        <WorkflowAndHygiene />
      </div>
      
      <div className="bg-gradient-to-b from-white via-gray-50/30 to-gray-50">
        <PriceCalculator />
      </div>
      
      <div className="bg-gradient-to-b from-gray-50 to-white">
        <FAQ />
      </div>
      
      <Footer />
    </div>
  );
};

export default Index;
