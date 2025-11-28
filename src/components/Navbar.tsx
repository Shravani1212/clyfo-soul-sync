import { useState, useEffect } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { LogOut, Menu, X, Home, Gift, Zap, BarChart3, Settings, Wrench } from "lucide-react";
import clyfoLogo from "@/assets/clyfo-logo.jpg";

interface User {
  id: string;
  firstName: string;
  lastName: string;
  role: "aspirant" | "transformer";
  email: string;
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const checkUser = () => {
      const storedUser = localStorage.getItem("user");
      if (storedUser) {
        try {
          setUser(JSON.parse(storedUser));
        } catch {
          localStorage.removeItem("user");
          setUser(null);
        }
      } else {
        setUser(null);
      }
    };

    checkUser();

    // Listen for storage changes
    window.addEventListener("storage", checkUser);
    return () => window.removeEventListener("storage", checkUser);
  }, [location.pathname]);

  const isActive = (path: string) => location.pathname === path;

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    setIsOpen(false);
    navigate("/login", { replace: true });
  };

  // Public nav items
  const publicNavItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Programmes", path: "/programmes" },
    { name: "Testimonials", path: "/testimonials" },
    { name: "Contact", path: "/contact" },
  ];

  // Authenticated nav items
  const authenticatedNavItems = [
    { name: "Dashboard", path: user?.role === "aspirant" ? "/aspirant-dashboard" : "/transformer-dashboard", icon: Home },
    { name: "Referral", path: "/referral", icon: Gift },
    { name: "Challenges", path: "/challenges", icon: Zap },
    { name: "Leaderboard", path: "/leaderboard", icon: BarChart3 },
    { name: "Tools", path: "/tools", icon: Wrench },
    { name: "Support", path: "/support", icon: Settings },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/95 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 cursor-pointer">
          <img src={clyfoLogo} alt="CLYFO" className="h-10 w-auto rounded" />
          <span className="text-lg font-cosmic font-bold gradient-cosmic bg-clip-text text-transparent">
            CLYFO<sup className="text-xs">369</sup>
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-1">
          {user ? (
            // Authenticated user - show dashboard nav
            <>
              {authenticatedNavItems.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.name}
                    to={item.path}
                    className={`px-3 py-2 rounded-md text-sm font-medium flex items-center gap-1 transition-colors ${
                      isActive(item.path)
                        ? "text-primary bg-primary/10"
                        : "text-muted-foreground hover:text-foreground hover:bg-accent"
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    {item.name}
                  </Link>
                );
              })}
            </>
          ) : (
            // Public user - show public nav
            <>
              {publicNavItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActive(item.path)
                      ? "text-primary bg-primary/10"
                      : "text-muted-foreground hover:text-foreground hover:bg-accent"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </>
          )}
        </div>

        {/* Auth Section */}
        <div className="flex items-center gap-3">
          {user ? (
            <>
              <div className="flex items-center gap-2 px-3 py-1 bg-card/50 rounded-lg hidden sm:flex">
                <div className="w-8 h-8 rounded-full bg-cosmic-saffron/20 flex items-center justify-center">
                  <span className="text-xs font-bold">{user.firstName.charAt(0)}</span>
                </div>
                <span className="text-sm font-medium">{user.firstName}</span>
              </div>

              <Button
                size="sm"
                variant="outline"
                onClick={handleLogout}
                className="gap-2 text-red-400 hover:text-red-400 hidden sm:flex"
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
                className="gradient-cosmic text-background hidden sm:block"
                onClick={() => navigate("/login")}
              >
                Sign Up
              </Button>
            </>
          )}

          {/* Mobile Menu Toggle */}
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden animate-fade-in-up">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-card/95 backdrop-blur-md rounded-lg mt-2 mx-2">
            {user ? (
              // Authenticated mobile menu
              <>
                {authenticatedNavItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <Link
                      key={item.name}
                      to={item.path}
                      onClick={() => setIsOpen(false)}
                      className={`block px-3 py-2 rounded-md text-base font-medium flex items-center gap-2 ${
                        isActive(item.path)
                          ? "text-primary bg-primary/10"
                          : "text-muted-foreground hover:text-foreground hover:bg-accent"
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                      {item.name}
                    </Link>
                  );
                })}
                <div className="pt-4 space-y-2 border-t border-border">
                  <div className="px-3 py-2 text-sm font-medium">
                    👤 {user.firstName} {user.lastName}
                  </div>
                  <Button
                    onClick={() => handleLogout()}
                    variant="outline"
                    className="w-full text-red-400 justify-start"
                  >
                    <LogOut className="w-4 h-4 mr-2" />
                    Logout
                  </Button>
                </div>
              </>
            ) : (
              // Public mobile menu
              <>
                {publicNavItems.map((item) => (
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
                <div className="pt-4 space-y-2 border-t border-border">
                  <Link to="/login" onClick={() => setIsOpen(false)}>
                    <Button variant="outline" className="w-full">
                      Login
                    </Button>
                  </Link>
                  <Link to="/login" onClick={() => setIsOpen(false)}>
                    <Button className="w-full gradient-cosmic text-background">
                      Sign Up
                    </Button>
                  </Link>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;