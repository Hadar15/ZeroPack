import { Outlet } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

function Dashboard() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-24 pb-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <Outlet />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default Dashboard;