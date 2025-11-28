import { Toaster } from "@/components/ui/toaster"

import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import JyaniBot from "@/components/JyaniBot";

// Page imports
import Index from "@/pages/Index";
import About from "@/pages/About";
import Programmes from "@/pages/Programmes";
import Testimonials from "@/pages/Testimonials";
import Contact from "@/pages/Contact";
import Login from "@/pages/Login";
import AspirantDashboard from "@/pages/AspirantDashboard";
import TransformerDashboard from "@/pages/TransformerDashboard";
import Referral from "@/pages/Referral";
import Challenges from "@/pages/Challenges";
import Leaderboard from "@/pages/Leaderboard";
import Tools from "@/pages/Tools";
import Support from "@/pages/Support";
import NotFound from "@/pages/NotFound";

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
      
      <BrowserRouter>
        <div className="min-h-screen bg-background">
          <Navbar />
          <main className="min-h-screen">
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

              {/* Authenticated Routes */}
              <Route 
                path="/referral" 
                element={
                  <ProtectedRoute element={<Referral />} />
                } 
              />
              <Route 
                path="/challenges" 
                element={
                  <ProtectedRoute element={<Challenges />} />
                } 
              />
              <Route 
                path="/leaderboard" 
                element={
                  <ProtectedRoute element={<Leaderboard />} />
                } 
              />
              <Route 
                path="/tools" 
                element={
                  <ProtectedRoute element={<Tools />} />
                } 
              />
              <Route 
                path="/support" 
                element={
                  <ProtectedRoute element={<Support />} />
                } 
              />

              {/* Fallback */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          
          {/* AI Chatbot - Global Component */}
          <JyaniBot />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
