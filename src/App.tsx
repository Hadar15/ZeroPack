import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import ProtectedRoute from "./components/ProtectedRouteNew";
import { useGoogleSheetsSync } from "./hooks/useGoogleSheetsSync";
import Index from "./pages/Index";
import Order from "./pages/Order";
import Dashboard from "./pages/Dashboard";
import DashboardHome from "./pages/DashboardHome";
import Feedback from "./pages/Feedback";
import NotFound from "./pages/NotFound";
import AuthSelection from "./pages/AuthSelection";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import AuthCallback from "./pages/AuthCallback";
import Products from "./pages/Products";

const queryClient = new QueryClient();

const AppContent = () => {
  // Sync user data ke Google Sheets saat login
  useGoogleSheetsSync();

  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<Index />} />
      <Route path="/products" element={<Products />} />
      <Route path="/auth" element={<AuthSelection />} />
      <Route path="/auth/callback" element={<AuthCallback />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      
      {/* Protected Routes Group */}
      <Route element={<ProtectedRoute />}>
        <Route path="/dashboard" element={<Dashboard />}>
          <Route index element={<DashboardHome />} />
          <Route path="order" element={<Order />} />
        </Route>
        <Route path="/feedback" element={<Feedback />} />
        {/* Redirect old order route to new nested route */}
        <Route path="/order" element={<Navigate to="/dashboard/order" replace />} />
      </Route>
      
      {/* Catch All */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <AuthProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <AppContent />
        </TooltipProvider>
      </AuthProvider>
    </BrowserRouter>
  </QueryClientProvider>
);

export default App;
