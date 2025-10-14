import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useNavigate, Outlet } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-24 pb-24">
        <div className="container mx-auto px-6">
          <Outlet />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Dashboard;