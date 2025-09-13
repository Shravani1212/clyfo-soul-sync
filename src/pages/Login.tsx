import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Eye, EyeOff, Phone, Mail, User, Lock } from "lucide-react";
import clyfoLogo from "@/assets/clyfo-logo.jpg";
import cosmicBg from "@/assets/cosmic-bg.jpg";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [loginType, setLoginType] = useState("email");

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
      
      <div className="w-full max-w-md relative z-10">
        <div className="text-center mb-8 animate-fade-in-up">
          <img src={clyfoLogo} alt="CLYFO" className="h-16 w-auto mx-auto mb-4 rounded-lg shadow-cosmic" />
          <h1 className="text-3xl font-cosmic font-bold mb-2">
            Welcome to CLYFO<sup className="text-lg text-infinity-gold">369</sup>
          </h1>
          <p className="text-muted-foreground">
            Enter the Consciousness Operating System
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
                        placeholder={loginType === "email" ? "Enter your email" : "Enter your phone"}
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

              <TabsContent value="register" className="space-y-6">
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input 
                        id="firstName"
                        placeholder="First name"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input 
                        id="lastName"
                        placeholder="Last name"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <div className="relative">
                      <Input 
                        id="email"
                        type="email"
                        placeholder="Enter your email"
                        className="pl-10"
                      />
                      <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <div className="relative">
                      <Input 
                        id="phone"
                        type="tel"
                        placeholder="Enter your phone"
                        className="pl-10"
                      />
                      <Phone className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    </div>
                  </div>

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

                  <div className="space-y-4">
                    <Badge variant="outline" className="text-xs">
                      Choose Your Path
                    </Badge>
                    <div className="grid grid-cols-2 gap-4">
                      <Button variant="outline" className="h-auto p-4 flex flex-col">
                        <User className="w-6 h-6 mb-2 text-cosmic-saffron" />
                        <span className="font-medium">Aspirant</span>
                        <span className="text-xs text-muted-foreground">Learn & Rise</span>
                      </Button>
                      <Button variant="outline" className="h-auto p-4 flex flex-col">
                        <User className="w-6 h-6 mb-2 text-consciousness-purple" />
                        <span className="font-medium">Transformer</span>
                        <span className="text-xs text-muted-foreground">Serve & Earn</span>
                      </Button>
                    </div>
                  </div>

                  <Button className="w-full gradient-cosmic text-background font-medium animate-cosmic-glow">
                    Join the Consciousness Revolution
                  </Button>
                </div>
              </TabsContent>
            </Tabs>

            <div className="mt-8 pt-6 border-t border-border text-center">
              <p className="text-xs text-muted-foreground">
                By continuing, you agree to our Terms of Service and Privacy Policy
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Path Selection Help */}
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