import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary/5 to-background flex items-center justify-center px-4">
      <div className="text-center animate-fade-in-up">
        <div className="text-8xl md:text-9xl font-cosmic font-bold gradient-cosmic bg-clip-text text-transparent mb-4">
          404
        </div>
        <h1 className="text-4xl md:text-5xl font-cosmic font-bold mb-4">
          Page Not Found
        </h1>
        <p className="text-xl text-muted-foreground mb-8 max-w-md mx-auto">
          The consciousness you seek is not on this path. Let's return to the beginning.
        </p>
        <Button 
          size="lg" 
          className="gradient-cosmic text-background shadow-cosmic"
          onClick={() => navigate("/")}
        >
          <Home className="w-4 h-4 mr-2" />
          Return to Home
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
