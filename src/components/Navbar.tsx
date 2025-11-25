import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, LogOut, Settings, User } from "lucide-react";
import clyfoLogo from "@/assets/clyfo-logo.jpg";

interface User {
  id: string;
  firstName: string;
  lastName: string;
  role: "aspirant" | "transformer";
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const location = useLocation();
  const navigate = useNavigate();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Programmes", path: "/programmes" },
    { name: "Testimonials", path: "/testimonials" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch {
        localStorage.removeItem("user");
      }
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    navigate("/login");
  };

  const handleDashboard = () => {
    if (user?.role === "aspirant") {
      navigate("/aspirant-dashboard");
    } else if (user?.role === "transformer") {
      navigate("/transformer-dashboard");
    }
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img src={clyfoLogo} alt="CLYFO" className="h-10 w-auto rounded-lg shadow-cosmic" />
            <div className="font-cosmic text-xl font-bold">
              CLYFO<sup className="text-sm text-infinity-gold">369</sup><span className="text-infinity-gold">(♾)</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                    isActive(item.path)
                      ? "text-primary bg-primary/10 shadow-cosmic"
                      : "text-muted-foreground hover:text-foreground hover:bg-accent/50"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Auth Section */}
          <div className="hidden md:flex items-center gap-3">
            {user ? (
              <>
                <div className="flex items-center gap-2 px-3 py-1 bg-card/50 rounded-lg">
                  <div className="w-8 h-8 rounded-full bg-cosmic-saffron/20 flex items-center justify-center">
                    <span className="text-xs font-bold">{user.firstName.charAt(0)}</span>
                  </div>
                  <span className="text-sm font-medium hidden sm:block">
                    {user.firstName}
                  </span>
                </div>
                
                <Button
                  size="sm"
                  variant="outline"
                  onClick={handleDashboard}
                  className="gap-2"
                >
                  <User className="w-4 h-4" />
                  Dashboard
                </Button>

                <Button
                  size="sm"
                  variant="outline"
                  onClick={handleLogout}
                  className="gap-2 text-red-400 hover:text-red-400"
                >
                  <LogOut className="w-4 h-4" />
                  Logout
                </Button>
              </>
            ) : (
              <>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => navigate("/login")}
                >
                  Login
                </Button>
                <Button
                  size="sm"
                  className="gradient-cosmic text-background"
                  onClick={() => navigate("/login")}
                >
                  Sign Up
                </Button>
              </>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-foreground hover:bg-accent"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden animate-fade-in-up">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-card/95 backdrop-blur-md rounded-lg mt-2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-2 rounded-md text-base font-medium ${
                    isActive(item.path)
                      ? "text-primary bg-primary/10"
                      : "text-muted-foreground hover:text-foreground hover:bg-accent"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 space-y-2">
                <Link to="/login" onClick={() => setIsOpen(false)}>
                  <Button variant="outline" className="w-full">
                    Login
                  </Button>
                </Link>
                <Button className="w-full gradient-cosmic text-background">
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

// Helper component for nav links
const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => navigate(href)}
      className="text-sm font-medium hover:text-primary transition-colors"
    >
      {children}
    </button>
  );
};

export default Navbar;