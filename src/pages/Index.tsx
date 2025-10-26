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
      
      {/* Smooth gradient transitions with subtle colors */}
      {/* Hero to Impact - Transition from green to soft blue-gray */}
      <div className="bg-gradient-to-b from-green-900/10 via-slate-50 to-blue-50/30">
        <Impact />
      </div>
      
      {/* Impact to WorkflowAndHygiene - Soft blue to gray gradient */}
      <div className="bg-gradient-to-b from-blue-50/30 via-gray-50 to-slate-50">
        <WorkflowAndHygiene />
      </div>
      
      {/* WorkflowAndHygiene to PriceCalculator - Gray to warm gradient */}
      <div className="bg-gradient-to-b from-slate-50 via-stone-50/50 to-gray-50/80">
        <PriceCalculator />
      </div>
      
      {/* PriceCalculator to FAQ - Warm to neutral */}
      <div className="bg-gradient-to-b from-gray-50/80 via-slate-50/50 to-white pt-16">
        <FAQ />
      </div>
      
      <Footer />
    </div>
  );
};

export default Index;
