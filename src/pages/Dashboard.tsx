import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Eye, EyeOff, Phone, Mail, User, Lock, Smartphone, Radio } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import clyfoLogo from "@/assets/clyfo-logo.jpg";
import cosmicBg from "@/assets/cosmic-bg.jpg";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [loginType, setLoginType] = useState("email");
  const [language, setLanguage] = useState("english");
  const [selectedPath, setSelectedPath] = useState<"aspirant" | "transformer" | null>(null);

  const lifeStages = [
    { id: "children", label: "👶 Children", age: "1-5 yrs", color: "from-pink-500" },
    { id: "learners", label: "📚 Learners", age: "6-12 yrs", color: "from-blue-500" },
    { id: "youth", label: "💼 Youth", age: "13-30 yrs", color: "from-purple-500" },
    { id: "family", label: "🏠 Family", age: "30-50 yrs", color: "from-green-500" },
    { id: "older", label: "🌿 Older", age: "50+ yrs", color: "from-amber-500" }
  ];

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    // Redirect to registration flow with selected path
    console.log("Register with path:", selectedPath);
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
            <Tabs defaultValue="login" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-8">
                <TabsTrigger value="login" className="font-medium">Login</TabsTrigger>
                <TabsTrigger value="register" className="font-medium">Register</TabsTrigger>
              </TabsList>

              {/* LOGIN TAB */}
              <TabsContent value="login" className="space-y-6">
                <div className="space-y-4">
                  <div className="flex gap-2">
                    <Button 
                      variant={loginType === "email" ? "default" : "outline"}
                      size="sm"
                      onClick={() => setLoginType("email")}
                      className="flex-1"
                    >
                      <Mail className="w-4 h-4 mr-2" />
                      Email
                    </Button>
                    <Button 
                      variant={loginType === "phone" ? "default" : "outline"}
                      size="sm"
                      onClick={() => setLoginType("phone")}
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
                        placeholder={loginType === "email" ? "Enter your email" : "+91-XXXXXXXXXX"}
                        className="pl-10"
                      />
                      {loginType === "email" ? (
                        <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      ) : (
                        <Phone className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      )}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <div className="relative">
                      <Input 
                        id="password"
                        type={showPassword ? "text" : "password"}
                        placeholder="Enter your password"
                        className="pl-10 pr-10"
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
                  </div>

                  <Button className="w-full gradient-cosmic text-background font-medium animate-cosmic-glow">
                    Enter CLYFO Portal
                  </Button>

                  <div className="text-center">
                    <Button variant="link" className="text-sm text-primary">
                      Forgot Password?
                    </Button>
                  </div>
                </div>
              </TabsContent>

              {/* REGISTER TAB */}
              <TabsContent value="register" className="space-y-6">
                <form onSubmit={handleRegister} className="space-y-4">
                  {/* Life Stage Selection */}
                  <div className="space-y-3">
                    <Label className="text-base font-semibold">Select Your Life Stage</Label>
                    <div className="grid grid-cols-5 gap-2">
                      {lifeStages.map((stage) => (
                        <button
                          key={stage.id}
                          type="button"
                          onClick={() => console.log(stage.id)}
                          className={`p-3 rounded-lg border-2 transition-all text-center text-sm font-medium ${
                            true ? "border-primary/50 bg-card/50" : "border-border bg-card/20"
                          } hover:border-primary`}
                        >
                          <div className="text-xl mb-1">{stage.label.split(" ")[0]}</div>
                          <div className="text-xs text-muted-foreground">{stage.age}</div>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Basic Info */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" placeholder="First name" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" placeholder="Last name" />
                    </div>
                  </div>

                  {/* Contact Info */}
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <div className="relative">
                      <Input id="email" type="email" placeholder="Enter your email" className="pl-10" />
                      <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <div className="relative">
                      <Input id="phone" type="tel" placeholder="+91-XXXXXXXXXX" className="pl-10" />
                      <Phone className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    </div>
                  </div>

                  {/* Aadhar & Social */}
                  <div className="space-y-2">
                    <Label htmlFor="aadhar">Aadhar Number</Label>
                    <Input id="aadhar" placeholder="XXXX XXXX XXXX" />
                  </div>

                  <div className="space-y-2">
                    <Label>Social Profiles (Optional)</Label>
                    <div className="grid grid-cols-3 gap-2">
                      <Input placeholder="Instagram Username" />
                      <Input placeholder="Facebook ID" />
                      <Input placeholder="LinkedIn Profile" />
                    </div>
                  </div>

                  {/* Password */}
                  <div className="space-y-2">
                    <Label htmlFor="newPassword">Create Password</Label>
                    <div className="relative">
                      <Input 
                        id="newPassword"
                        type={showPassword ? "text" : "password"}
                        placeholder="Create a strong password"
                        className="pl-10 pr-10"
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
                  </div>

                  {/* Path Selection */}
                  <div className="space-y-3">
                    <Badge variant="outline" className="text-xs">Choose Your Path</Badge>
                    <div className="grid grid-cols-2 gap-4">
                      <button
                        type="button"
                        onClick={() => setSelectedPath("aspirant")}
                        className={`h-auto p-4 rounded-lg border-2 flex flex-col items-center transition-all ${
                          selectedPath === "aspirant"
                            ? "border-cosmic-saffron bg-cosmic-saffron/10"
                            : "border-border hover:border-cosmic-saffron"
                        }`}
                      >
                        <User className="w-6 h-6 mb-2 text-cosmic-saffron" />
                        <span className="font-medium">Aspirant</span>
                        <span className="text-xs text-muted-foreground">Learn & Rise</span>
                      </button>
                      <button
                        type="button"
                        onClick={() => setSelectedPath("transformer")}
                        className={`h-auto p-4 rounded-lg border-2 flex flex-col items-center transition-all ${
                          selectedPath === "transformer"
                            ? "border-consciousness-purple bg-consciousness-purple/10"
                            : "border-border hover:border-consciousness-purple"
                        }`}
                      >
                        <User className="w-6 h-6 mb-2 text-consciousness-purple" />
                        <span className="font-medium">Transformer</span>
                        <span className="text-xs text-muted-foreground">Serve & Earn</span>
                      </button>
                    </div>
                  </div>

                  <Button type="submit" className="w-full gradient-cosmic text-background font-medium animate-cosmic-glow">
                    Join the Consciousness Revolution
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