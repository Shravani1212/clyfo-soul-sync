import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Eye, EyeOff, Phone, Mail, User, Lock, Smartphone, Radio, AlertCircle, CheckCircle } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import clyfoLogo from "@/assets/clyfo-logo.jpg";
import cosmicBg from "@/assets/cosmic-bg.jpg";

interface FormErrors {
  [key: string]: string;
}

interface UserData {
  firstName?: string;
  lastName?: string;
  email: string;
  phone?: string;
  aadhar?: string;
  password: string;
  lifeStage?: string;
  path?: "aspirant" | "transformer";
  instagram?: string;
  facebook?: string;
  linkedin?: string;
}

const Login = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [loginType, setLoginType] = useState("email");
  const [language, setLanguage] = useState("english");
  const [selectedPath, setSelectedPath] = useState<"aspirant" | "transformer" | null>(null);
  const [selectedStage, setSelectedStage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});
  const [successMessage, setSuccessMessage] = useState("");

  // Login State
  const [loginData, setLoginData] = useState({
    identifier: "",
    password: ""
  });

  // Register State
  const [registerData, setRegisterData] = useState<UserData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    aadhar: "",
    password: "",
    lifeStage: "",
    path: undefined,
    instagram: "",
    facebook: "",
    linkedin: ""
  });

  const lifeStages = [
    { id: "children", label: "👶 Children", age: "1-5 yrs", color: "from-pink-500" },
    { id: "learners", label: "📚 Learners", age: "6-12 yrs", color: "from-blue-500" },
    { id: "youth", label: "💼 Youth", age: "13-30 yrs", color: "from-purple-500" },
    { id: "family", label: "🏠 Family", age: "30-50 yrs", color: "from-green-500" },
    { id: "older", label: "🌿 Older", age: "50+ yrs", color: "from-amber-500" }
  ];

  // Validation Functions
  const validateEmail = (email: string): boolean => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const validatePhone = (phone: string): boolean => {
    const re = /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/;
    return re.test(phone);
  };

  const validateAadhar = (aadhar: string): boolean => {
    const re = /^[0-9]{12}$/;
    return re.test(aadhar.replace(/\s/g, ""));
  };

  const validatePassword = (password: string): boolean => {
    return password.length >= 8;
  };

  // Login Handler
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});
    setSuccessMessage("");
    const newErrors: FormErrors = {};

    // Validation
    if (!loginData.identifier.trim()) {
      newErrors.identifier = `${loginType === "email" ? "Email" : "Phone"} is required`;
    } else if (loginType === "email" && !validateEmail(loginData.identifier)) {
      newErrors.identifier = "Invalid email format";
    } else if (loginType === "phone" && !validatePhone(loginData.identifier)) {
      newErrors.identifier = "Invalid phone format";
    }

    if (!loginData.password.trim()) {
      newErrors.password = "Password is required";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setLoading(true);

    // Simulate API call
    setTimeout(() => {
      // Mock authentication - in real app, validate against backend
      const mockUsers = [
        { email: "aspirant@clyfo.com", phone: "+919876543210", password: "password123", role: "aspirant", id: "CLY369ASP" },
        { email: "transformer@clyfo.com", phone: "+919876543211", password: "password123", role: "transformer", id: "CLY369TRN" }
      ];

      const user = mockUsers.find(
        u => (loginType === "email" ? u.email : u.phone) === loginData.identifier && u.password === loginData.password
      );

      if (user) {
        // Store user data in localStorage
        localStorage.setItem("user", JSON.stringify({
          id: user.id,
          email: loginData.identifier,
          role: user.role,
          token: `token_${Date.now()}`,
          loginTime: new Date().toISOString()
        }));

        setSuccessMessage("✓ Login successful! Redirecting...");
        
        // Navigate based on role
        setTimeout(() => {
          if (user.role === "aspirant") {
            navigate("/aspirant-dashboard");
          } else {
            navigate("/transformer-dashboard");
          }
        }, 1500);
      } else {
        newErrors.identifier = "Invalid credentials";
        setErrors(newErrors);
      }

      setLoading(false);
    }, 1500);
  };

  // Register Handler
  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});
    setSuccessMessage("");
    const newErrors: FormErrors = {};

    // Validation
    if (!registerData.firstName?.trim()) {
      newErrors.firstName = "First name is required";
    }
    if (!registerData.lastName?.trim()) {
      newErrors.lastName = "Last name is required";
    }
    if (!registerData.email?.trim()) {
      newErrors.email = "Email is required";
    } else if (!validateEmail(registerData.email)) {
      newErrors.email = "Invalid email format";
    }
    if (!registerData.phone?.trim()) {
      newErrors.phone = "Phone is required";
    } else if (!validatePhone(registerData.phone)) {
      newErrors.phone = "Invalid phone format";
    }
    if (!registerData.aadhar?.trim()) {
      newErrors.aadhar = "Aadhar is required";
    } else if (!validateAadhar(registerData.aadhar)) {
      newErrors.aadhar = "Aadhar must be 12 digits";
    }
    if (!registerData.password?.trim()) {
      newErrors.password = "Password is required";
    } else if (!validatePassword(registerData.password)) {
      newErrors.password = "Password must be at least 8 characters";
    }
    if (!selectedStage) {
      newErrors.lifeStage = "Life stage is required";
    }
    if (!selectedPath) {
      newErrors.path = "Please select Aspirant or Transformer path";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setLoading(true);

    // Simulate API call
    setTimeout(() => {
      // Generate Conscious ID (6 characters)
      const consciousID = `CLY${Math.random().toString(36).substring(2, 5).toUpperCase()}`;

      // Store user data
      const newUser = {
        id: consciousID,
        firstName: registerData.firstName,
        lastName: registerData.lastName,
        email: registerData.email,
        phone: registerData.phone,
        aadhar: registerData.aadhar,
        lifeStage: selectedStage,
        role: selectedPath,
        token: `token_${Date.now()}`,
        createdAt: new Date().toISOString(),
        profileCompletion: 0,
        coins: 0,
        level: 1
      };

      localStorage.setItem("user", JSON.stringify(newUser));

      // Send test credentials via WhatsApp/Email (mock)
      console.log(`📧 Sending test credentials to ${registerData.email}`);
      console.log(`📱 Sending WhatsApp message to ${registerData.phone}`);
      console.log(`🎟️ Conscious ID: ${consciousID}`);

      setSuccessMessage(`✓ Registration successful! Your Conscious ID: ${consciousID}\nRedirecting to onboarding...`);

      // Navigate to onboarding/test flow
      setTimeout(() => {
        navigate("/onboarding", { 
          state: { 
            userId: consciousID, 
            role: selectedPath,
            email: registerData.email
          } 
        });
      }, 2000);

      setLoading(false);
    }, 1500);
  };

  return (
    <div 
      className="min-h-screen flex items-center justify-center px-4 py-16 relative overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.85), rgba(0,0,0,0.85)), url(${cosmicBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 animate-consciousness-flow opacity-20">
        <div className="w-full h-full bg-gradient-cosmic opacity-30"></div>
      </div>

      {/* Language Toggle */}
      <div className="absolute top-4 right-4 z-20 flex gap-2">
        <Select value={language} onValueChange={setLanguage}>
          <SelectTrigger className="w-32 bg-card/50 border-primary/30">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="english">🇬🇧 English</SelectItem>
            <SelectItem value="telugu">🇮🇳 తెలుగు</SelectItem>
            <SelectItem value="hindi">🇮🇳 हिंदी</SelectItem>
          </SelectContent>
        </Select>
        <Button size="sm" variant="outline" className="text-xs">
          <Radio className="w-3 h-3 mr-1" />
          Audio
        </Button>
      </div>
      
      <div className="w-full max-w-2xl relative z-10">
        <div className="text-center mb-8 animate-fade-in-up">
          <div className="flex justify-center mb-4">
            <img src={clyfoLogo} alt="CLYFO" className="h-20 w-auto rounded-lg shadow-cosmic animate-infinity-pulse" />
          </div>
          <h1 className="text-4xl md:text-5xl font-cosmic font-bold mb-2 gradient-cosmic bg-clip-text text-transparent">
            CLYFO<sup className="text-2xl text-infinity-gold">369</sup>
          </h1>
          <p className="text-xl text-primary font-medium mb-2">
            The Consciousness Operating System
          </p>
          <p className="text-muted-foreground">
            Where Enlightenment Meets Employment
          </p>
        </div>

        <Card className="shadow-consciousness border-primary/20 animate-fade-in-up delay-300">
          <CardHeader className="text-center pb-4">
            <CardTitle className="text-2xl font-cosmic">Access Portal</CardTitle>
          </CardHeader>
          <CardContent>
            {/* Success Message */}
            {successMessage && (
              <div className="mb-4 p-4 bg-green-500/20 border border-green-500/50 rounded-lg flex items-start gap-3 animate-fade-in-up">
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-green-200 whitespace-pre-line">{successMessage}</p>
              </div>
            )}

            <Tabs defaultValue="login" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-8">
                <TabsTrigger value="login" className="font-medium">Login</TabsTrigger>
                <TabsTrigger value="register" className="font-medium">Register</TabsTrigger>
              </TabsList>

              {/* LOGIN TAB */}
              <TabsContent value="login" className="space-y-6">
                <form onSubmit={handleLogin} className="space-y-4">
                  <div className="flex gap-2">
                    <Button 
                      type="button"
                      variant={loginType === "email" ? "default" : "outline"}
                      size="sm"
                      onClick={() => {
                        setLoginType("email");
                        setErrors({});
                      }}
                      className="flex-1"
                    >
                      <Mail className="w-4 h-4 mr-2" />
                      Email
                    </Button>
                    <Button 
                      type="button"
                      variant={loginType === "phone" ? "default" : "outline"}
                      size="sm"
                      onClick={() => {
                        setLoginType("phone");
                        setErrors({});
                      }}
                      className="flex-1"
                    >
                      <Phone className="w-4 h-4 mr-2" />
                      Phone
                    </Button>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="identifier">
                      {loginType === "email" ? "Email Address" : "Phone Number"}
                    </Label>
                    <div className="relative">
                      <Input 
                        id="identifier"
                        type={loginType === "email" ? "email" : "tel"}
                        placeholder={loginType === "email" ? "aspirant@clyfo.com" : "+919876543210"}
                        className={`pl-10 ${errors.identifier ? "border-red-500" : ""}`}
                        value={loginData.identifier}
                        onChange={(e) => {
                          setLoginData({...loginData, identifier: e.target.value});
                          if (errors.identifier) setErrors({...errors, identifier: ""});
                        }}
                      />
                      {loginType === "email" ? (
                        <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      ) : (
                        <Phone className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      )}
                    </div>
                    {errors.identifier && (
                      <p className="text-xs text-red-400 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.identifier}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <div className="relative">
                      <Input 
                        id="password"
                        type={showPassword ? "text" : "password"}
                        placeholder="Enter your password"
                        className={`pl-10 pr-10 ${errors.password ? "border-red-500" : ""}`}
                        value={loginData.password}
                        onChange={(e) => {
                          setLoginData({...loginData, password: e.target.value});
                          if (errors.password) setErrors({...errors, password: ""});
                        }}
                      />
                      <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        className="absolute right-2 top-2 h-6 w-6 p-0"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? (
                          <EyeOff className="h-4 w-4" />
                        ) : (
                          <Eye className="h-4 w-4" />
                        )}
                      </Button>
                    </div>
                    {errors.password && (
                      <p className="text-xs text-red-400 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.password}
                      </p>
                    )}
                  </div>

                  <Button 
                    type="submit" 
                    disabled={loading}
                    className="w-full gradient-cosmic text-background font-medium animate-cosmic-glow"
                  >
                    {loading ? "Authenticating..." : "Enter CLYFO Portal"}
                  </Button>

                  <div className="text-center">
                    <Button type="button" variant="link" className="text-sm text-primary">
                      Forgot Password?
                    </Button>
                  </div>

                  <div className="mt-4 p-3 bg-blue-500/10 border border-blue-500/30 rounded-lg">
                    <p className="text-xs text-blue-200">
                      <strong>Demo Credentials:</strong><br/>
                      Email: aspirant@clyfo.com | Pass: password123<br/>
                      Email: transformer@clyfo.com | Pass: password123
                    </p>
                  </div>
                </form>
              </TabsContent>

              {/* REGISTER TAB */}
              <TabsContent value="register" className="space-y-6">
                <form onSubmit={handleRegister} className="space-y-4 max-h-96 overflow-y-auto pr-2">
                  {/* Life Stage Selection */}
                  <div className="space-y-3">
                    <Label className="text-base font-semibold">Select Your Life Stage</Label>
                    <div className="grid grid-cols-5 gap-2">
                      {lifeStages.map((stage) => (
                        <button
                          key={stage.id}
                          type="button"
                          onClick={() => {
                            setSelectedStage(stage.id);
                            if (errors.lifeStage) setErrors({...errors, lifeStage: ""});
                          }}
                          className={`p-3 rounded-lg border-2 transition-all text-center text-sm font-medium ${
                            selectedStage === stage.id ? "border-cosmic-saffron bg-cosmic-saffron/10" : "border-border bg-card/20"
                          } hover:border-cosmic-saffron`}
                        >
                          <div className="text-xl mb-1">{stage.label.split(" ")[0]}</div>
                          <div className="text-xs text-muted-foreground">{stage.age}</div>
                        </button>
                      ))}
                    </div>
                    {errors.lifeStage && (
                      <p className="text-xs text-red-400 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.lifeStage}
                      </p>
                    )}
                  </div>

                  {/* Basic Info */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input 
                        id="firstName" 
                        placeholder="First name"
                        className={errors.firstName ? "border-red-500" : ""}
                        value={registerData.firstName}
                        onChange={(e) => {
                          setRegisterData({...registerData, firstName: e.target.value});
                          if (errors.firstName) setErrors({...errors, firstName: ""});
                        }}
                      />
                      {errors.firstName && <p className="text-xs text-red-400">{errors.firstName}</p>}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input 
                        id="lastName" 
                        placeholder="Last name"
                        className={errors.lastName ? "border-red-500" : ""}
                        value={registerData.lastName}
                        onChange={(e) => {
                          setRegisterData({...registerData, lastName: e.target.value});
                          if (errors.lastName) setErrors({...errors, lastName: ""});
                        }}
                      />
                      {errors.lastName && <p className="text-xs text-red-400">{errors.lastName}</p>}
                    </div>
                  </div>

                  {/* Contact Info */}
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <div className="relative">
                      <Input 
                        id="email" 
                        type="email" 
                        placeholder="Enter your email"
                        className={`pl-10 ${errors.email ? "border-red-500" : ""}`}
                        value={registerData.email}
                        onChange={(e) => {
                          setRegisterData({...registerData, email: e.target.value});
                          if (errors.email) setErrors({...errors, email: ""});
                        }}
                      />
                      <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    </div>
                    {errors.email && <p className="text-xs text-red-400">{errors.email}</p>}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <div className="relative">
                      <Input 
                        id="phone" 
                        type="tel" 
                        placeholder="+91-XXXXXXXXXX"
                        className={`pl-10 ${errors.phone ? "border-red-500" : ""}`}
                        value={registerData.phone}
                        onChange={(e) => {
                          setRegisterData({...registerData, phone: e.target.value});
                          if (errors.phone) setErrors({...errors, phone: ""});
                        }}
                      />
                      <Phone className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    </div>
                    {errors.phone && <p className="text-xs text-red-400">{errors.phone}</p>}
                  </div>

                  {/* Aadhar & Social */}
                  <div className="space-y-2">
                    <Label htmlFor="aadhar">Aadhar Number</Label>
                    <Input 
                      id="aadhar" 
                      placeholder="XXXX XXXX XXXX"
                      className={errors.aadhar ? "border-red-500" : ""}
                      value={registerData.aadhar}
                      onChange={(e) => {
                        setRegisterData({...registerData, aadhar: e.target.value});
                        if (errors.aadhar) setErrors({...errors, aadhar: ""});
                      }}
                    />
                    {errors.aadhar && <p className="text-xs text-red-400">{errors.aadhar}</p>}
                  </div>

                  <div className="space-y-2">
                    <Label>Social Profiles (Optional)</Label>
                    <div className="grid grid-cols-3 gap-2">
                      <Input 
                        placeholder="Instagram" 
                        value={registerData.instagram}
                        onChange={(e) => setRegisterData({...registerData, instagram: e.target.value})}
                      />
                      <Input 
                        placeholder="Facebook" 
                        value={registerData.facebook}
                        onChange={(e) => setRegisterData({...registerData, facebook: e.target.value})}
                      />
                      <Input 
                        placeholder="LinkedIn" 
                        value={registerData.linkedin}
                        onChange={(e) => setRegisterData({...registerData, linkedin: e.target.value})}
                      />
                    </div>
                  </div>

                  {/* Password */}
                  <div className="space-y-2">
                    <Label htmlFor="newPassword">Create Password (min 8 characters)</Label>
                    <div className="relative">
                      <Input 
                        id="newPassword"
                        type={showPassword ? "text" : "password"}
                        placeholder="Create a strong password"
                        className={`pl-10 pr-10 ${errors.password ? "border-red-500" : ""}`}
                        value={registerData.password}
                        onChange={(e) => {
                          setRegisterData({...registerData, password: e.target.value});
                          if (errors.password) setErrors({...errors, password: ""});
                        }}
                      />
                      <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        className="absolute right-2 top-2 h-6 w-6 p-0"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? (
                          <EyeOff className="h-4 w-4" />
                        ) : (
                          <Eye className="h-4 w-4" />
                        )}
                      </Button>
                    </div>
                    {errors.password && <p className="text-xs text-red-400">{errors.password}</p>}
                  </div>

                  {/* Path Selection */}
                  <div className="space-y-3">
                    <Badge variant="outline" className="text-xs">Choose Your Path</Badge>
                    <div className="grid grid-cols-2 gap-4">
                      <button
                        type="button"
                        onClick={() => {
                          setSelectedPath("aspirant");
                          if (errors.path) setErrors({...errors, path: ""});
                        }}
                        className={`h-auto p-4 rounded-lg border-2 flex flex-col items-center transition-all ${
                          selectedPath === "aspirant"
                            ? "border-cosmic-saffron bg-cosmic-saffron/10"
                            : "border-border hover:border-cosmic-saffron"
                        }`}
                      >
                        <User className="w-6 h-6 mb-2 text-cosmic-saffron" />
                        <span className="font-medium text-sm">Aspirant</span>
                        <span className="text-xs text-muted-foreground">Learn & Rise</span>
                      </button>
                      <button
                        type="button"
                        onClick={() => {
                          setSelectedPath("transformer");
                          if (errors.path) setErrors({...errors, path: ""});
                        }}
                        className={`h-auto p-4 rounded-lg border-2 flex flex-col items-center transition-all ${
                          selectedPath === "transformer"
                            ? "border-consciousness-purple bg-consciousness-purple/10"
                            : "border-border hover:border-consciousness-purple"
                        }`}
                      >
                        <User className="w-6 h-6 mb-2 text-consciousness-purple" />
                        <span className="font-medium text-sm">Transformer</span>
                        <span className="text-xs text-muted-foreground">Serve & Earn</span>
                      </button>
                    </div>
                    {errors.path && (
                      <p className="text-xs text-red-400 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.path}
                      </p>
                    )}
                  </div>

                  <Button 
                    type="submit" 
                    disabled={loading}
                    className="w-full gradient-cosmic text-background font-medium animate-cosmic-glow"
                  >
                    {loading ? "Creating Account..." : "Join the Consciousness Revolution"}
                  </Button>
                </form>
              </TabsContent>
            </Tabs>

            <div className="mt-8 pt-6 border-t border-border text-center">
              <p className="text-xs text-muted-foreground">
                By continuing, you agree to our Terms of Service and Privacy Policy
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Assessment Link */}
        <div className="mt-6 text-center animate-fade-in-up delay-500">
          <p className="text-sm text-muted-foreground mb-2">Not sure which path to choose?</p>
          <Button variant="link" className="text-primary text-sm">
            Take Our Consciousness Assessment →
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Login;