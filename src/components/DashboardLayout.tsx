import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Bell, Settings, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";

interface DashboardLayoutProps {
  children: React.ReactNode;
  userRole: "aspirant" | "transformer";
}

const DashboardLayout = ({ children, userRole }: DashboardLayoutProps) => {
  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (!user) {
      navigate("/login");
      return;
    }

    try {
      const userData = JSON.parse(user);
      if (userData.role !== userRole) {
        navigate("/login");
      }
    } catch {
      navigate("/login");
    }
  }, [navigate, userRole]);

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary/5 to-background">
      {/* Header remains same */}
      {children}
    </div>
  );
};

export default DashboardLayout;