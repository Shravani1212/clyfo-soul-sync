import { Toaster } from "@/components/ui/toaster";
import { Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import JyaniBot from "./components/JyaniBot";
import Index from "./pages/Index";
import About from "./pages/About";
import Programmes from "./pages/Programmes";
import Testimonials from "./pages/Testimonials";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Login from "./pages/LoginAuthentication";
import AspirantDashboard from "./pages/AspirantDashboard";
import TransformerDashboard from "./pages/TransformerDashboard";

const queryClient = new QueryClient();

// Protected Route Component
const ProtectedRoute = ({ 
  element, 
  requiredRole 
}: { 
  element: JSX.Element; 
  requiredRole?: "aspirant" | "transformer" 
}) => {
  const user = localStorage.getItem("user");
  
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  try {
    const userData = JSON.parse(user);
    
    if (requiredRole && userData.role !== requiredRole) {
      return <Navigate to="/login" replace />;
    }

    return element;
  } catch {
    localStorage.removeItem("user");
    return <Navigate to="/login" replace />;
  }
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="min-h-screen">
          <Navbar />
          <main className="pt-16">
            <Routes>
              {/* Public Routes */}
              <Route path="/" element={<Index />} />
              <Route path="/about" element={<About />} />
              <Route path="/programmes" element={<Programmes />} />
              <Route path="/testimonials" element={<Testimonials />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/login" element={<Login />} />

              {/* Protected Routes - Dashboards */}
              <Route 
                path="/aspirant-dashboard" 
                element={
                  <ProtectedRoute 
                    element={<AspirantDashboard />}
                    requiredRole="aspirant"
                  />
                } 
              />
              <Route 
                path="/transformer-dashboard" 
                element={
                  <ProtectedRoute 
                    element={<TransformerDashboard />}
                    requiredRole="transformer"
                  />
                } 
              />

              {/* Fallback */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          
          {/* AI Chatbot - Available globally (hidden on dashboard pages) */}
          <JyaniBot />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
