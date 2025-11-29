import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Settings, 
  Palette, 
  DollarSign, 
  Moon, 
  Sun, 
  Lock, 
  User, 
  Bell, 
  HelpCircle,
  Edit2,
  Save,
  X,
  Flag,
  Sparkles // Added Sparkles for extra animation
} from "lucide-react";
import { toast } from "sonner";
import DashboardLayout from "@/components/DashboardLayout";

interface BankDetails {
  accountHolder: string;
  accountNumber: string;
  ifscCode: string;
  bankName: string;
  accountType: string;
}

const Support = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState<any>(null);
  const [theme, setTheme] = useState<"light" | "dark" | "auto" | "tricolor">("dark");
  const [editingBank, setEditingBank] = useState(false);
  const [bankDetails, setBankDetails] = useState<BankDetails>({
    accountHolder: "Kasthuri Shravani",
    accountNumber: "1234567890",
    ifscCode: "SBIN0001234",
    bankName: "State Bank of India",
    accountType: "Savings",
  });

  const [formData, setFormData] = useState<BankDetails>(bankDetails);
  const [notifications, setNotifications] = useState({
    email: true,
    sms: true,
    push: true,
    newsletter: false,
  });

  const [passwordData, setPasswordData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (!storedUser) {
      navigate("/login");
      return;
    }
    try {
      setUser(JSON.parse(storedUser));
      
      // Load saved theme
      const savedTheme = localStorage.getItem("theme") as "light" | "dark" | "auto" | "tricolor" || "dark";
      setTheme(savedTheme);
      
      // Apply class on load
      const root = document.documentElement;
      root.classList.remove("dark", "tricolor");
      
      if (savedTheme === "dark") {
        root.classList.add("dark");
      } else if (savedTheme === "tricolor") {
        root.classList.add("tricolor");
      } else if (savedTheme === "auto") {
        const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
        if (systemTheme === "dark") root.classList.add("dark");
      }
    } catch {
      navigate("/login");
    }
  }, [navigate]);

  const handleThemeChange = (newTheme: "light" | "dark" | "auto" | "tricolor") => {
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    
    const root = document.documentElement;
    root.classList.remove("dark", "tricolor");
    
    if (newTheme === "dark") {
      root.classList.add("dark");
    } else if (newTheme === "tricolor") {
      root.classList.add("tricolor");
    } else if (newTheme === "auto") {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
      if (systemTheme === "dark") root.classList.add("dark");
    }
    
    toast.success(`Theme changed to ${newTheme.charAt(0).toUpperCase() + newTheme.slice(1)}`);
  };

  const handleBankInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSaveBankDetails = () => {
    if (!formData.accountHolder || !formData.accountNumber || !formData.ifscCode || !formData.bankName) {
      toast.error("Please fill all required fields");
      return;
    }

    if (formData.accountNumber.length < 8) {
      toast.error("Invalid account number");
      return;
    }

    setBankDetails(formData);
    setEditingBank(false);
    localStorage.setItem(`bankDetails-${user?.id}`, JSON.stringify(formData));
    toast.success("Bank details updated successfully!");
  };

  const handleCancelEdit = () => {
    setFormData(bankDetails);
    setEditingBank(false);
  };

  const handlePasswordChange = () => {
    if (!passwordData.currentPassword || !passwordData.newPassword || !passwordData.confirmPassword) {
      toast.error("Please fill all password fields");
      return;
    }

    if (passwordData.newPassword !== passwordData.confirmPassword) {
      toast.error("New passwords don't match");
      return;
    }

    if (passwordData.newPassword.length < 8) {
      toast.error("Password must be at least 8 characters");
      return;
    }

    toast.success("Password updated successfully!");
    setPasswordData({ currentPassword: "", newPassword: "", confirmPassword: "" });
  };

  const handleNotificationToggle = (key: keyof typeof notifications) => {
    const updated = { ...notifications, [key]: !notifications[key] };
    setNotifications(updated);
    localStorage.setItem(`notifications-${user?.id}`, JSON.stringify(updated));
    toast.success("Notification preferences updated");
  };

  if (!user) return null;

  return (
    <DashboardLayout userRole={user.role}>
      <div className="min-h-screen bg-gradient-to-br from-background via-secondary/5 to-background pt-20">
        <div className="max-w-6xl mx-auto px-4 py-12">
          {/* Header */}
          <div className="text-center mb-12 animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl font-cosmic font-bold mb-4 flex items-center justify-center gap-3">
              <Settings className="w-10 h-10 text-cosmic-saffron animate-spin-slow" />
              Settings & Support
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Manage your account, preferences, and personal information.
            </p>
          </div>

          {/* Settings Tabs */}
          <Tabs defaultValue="theme" className="w-full">
            <TabsList className="grid w-full grid-cols-5 mb-8">
              <TabsTrigger value="theme" className="text-sm md:text-base">
                🎨 Theme
              </TabsTrigger>
              <TabsTrigger value="bank" className="text-sm md:text-base">
                🏦 Bank Details
              </TabsTrigger>
              <TabsTrigger value="password" className="text-sm md:text-base">
                🔐 Password
              </TabsTrigger>
              <TabsTrigger value="notifications" className="text-sm md:text-base">
                🔔 Notifications
              </TabsTrigger>
              <TabsTrigger value="profile" className="text-sm md:text-base">
                👤 Profile
              </TabsTrigger>
            </TabsList>

            {/* Theme Tab */}
            <TabsContent value="theme" className="animate-fade-in-up">
              <Card className="border-primary/20 bg-card/50 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Palette className="w-5 h-5 text-cosmic-saffron" />
                    Theme Preferences
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-muted-foreground">
                    Choose your preferred theme for the CLYFO platform.
                  </p>

                  <div className="grid md:grid-cols-4 gap-4">
                    {/* Light Theme */}
                    <div
                      onClick={() => handleThemeChange("light")}
                      className={`group p-6 rounded-lg border-2 cursor-pointer transition-all duration-300 hover:scale-105 ${
                        theme === "light"
                          ? "border-cosmic-saffron bg-cosmic-saffron/10 shadow-lg"
                          : "border-border hover:border-primary/50 hover:shadow-md"
                      }`}
                    >
                      <Sun className="w-8 h-8 mb-3 text-yellow-500 group-hover:rotate-12 transition-transform duration-300" />
                      <h3 className="font-semibold mb-2">Light Mode</h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        Bright and clean interface
                      </p>
                      {theme === "light" && (
                        <Badge className="gradient-cosmic text-background">Active</Badge>
                      )}
                    </div>

                    {/* Dark Theme */}
                    <div
                      onClick={() => handleThemeChange("dark")}
                      className={`group p-6 rounded-lg border-2 cursor-pointer transition-all duration-300 hover:scale-105 ${
                        theme === "dark"
                          ? "border-cosmic-saffron bg-cosmic-saffron/10 shadow-lg"
                          : "border-border hover:border-primary/50 hover:shadow-md"
                      }`}
                    >
                      <Moon className="w-8 h-8 mb-3 text-purple-500 group-hover:-rotate-12 transition-transform duration-300" />
                      <h3 className="font-semibold mb-2">Dark Mode</h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        Easy on the eyes, perfect for night
                      </p>
                      {theme === "dark" && (
                        <Badge className="gradient-cosmic text-background">Active</Badge>
                      )}
                    </div>

                    {/* Auto Theme */}
                    <div
                      onClick={() => handleThemeChange("auto")}
                      className={`group p-6 rounded-lg border-2 cursor-pointer transition-all duration-300 hover:scale-105 ${
                        theme === "auto"
                          ? "border-cosmic-saffron bg-cosmic-saffron/10 shadow-lg"
                          : "border-border hover:border-primary/50 hover:shadow-md"
                      }`}
                    >
                      <Palette className="w-8 h-8 mb-3 text-blue-500 group-hover:scale-110 transition-transform duration-300" />
                      <h3 className="font-semibold mb-2">Auto</h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        Follow system settings
                      </p>
                      {theme === "auto" && (
                        <Badge className="gradient-cosmic text-background">Active</Badge>
                      )}
                    </div>

                    {/* Tricolor Theme - Enhanced with Animation */}
                    <div
                      onClick={() => handleThemeChange("tricolor")}
                      className={`group p-6 rounded-lg border-2 cursor-pointer transition-all duration-500 hover:scale-105 ${
                        theme === "tricolor"
                          ? "border-orange-500 shadow-xl shadow-orange-100/50 ring-2 ring-offset-2 ring-orange-200 bg-gradient-to-br from-orange-50 via-white to-green-50 scale-105"
                          : "border-border hover:border-orange-400 hover:shadow-lg hover:shadow-orange-50 bg-white"
                      }`}
                    >
                      <div className="flex justify-between items-start">
                        <Flag className={`w-8 h-8 mb-3 text-orange-600 transition-transform duration-500 group-hover:rotate-12 ${theme === 'tricolor' ? 'animate-pulse' : ''}`} />
                        {theme === "tricolor" && (
                          <Sparkles className="w-5 h-5 text-green-600 animate-pulse" />
                        )}
                      </div>
                      <h3 className="font-semibold mb-2 text-slate-900">Tricolor</h3>
                      <p className="text-sm text-slate-600 mb-4">
                        Indian Flag Inspired
                      </p>
                      {theme === "tricolor" && (
                        <Badge className="bg-gradient-to-r from-orange-500 via-white to-green-600 text-black border border-slate-200 shadow-md animate-pulse">Active</Badge>
                      )}
                    </div>

                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Bank Details Tab */}
            <TabsContent value="bank">
              <Card className="border-primary/20 bg-card/50 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <DollarSign className="w-5 h-5 text-cosmic-saffron" />
                      Bank Account Details
                    </div>
                    {!editingBank && (
                      <Button
                        onClick={() => {
                          setEditingBank(true);
                          setFormData(bankDetails);
                        }}
                        variant="outline"
                        size="sm"
                      >
                        <Edit2 className="w-4 h-4 mr-2" />
                        Edit
                      </Button>
                    )}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {editingBank ? (
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">Account Holder Name *</label>
                        <input
                          type="text"
                          name="accountHolder"
                          value={formData.accountHolder}
                          onChange={handleBankInputChange}
                          className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:border-primary"
                          placeholder="Full Name"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-2">Account Number *</label>
                        <input
                          type="text"
                          name="accountNumber"
                          value={formData.accountNumber}
                          onChange={handleBankInputChange}
                          className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:border-primary"
                          placeholder="1234567890"
                        />
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium mb-2">IFSC Code *</label>
                          <input
                            type="text"
                            name="ifscCode"
                            value={formData.ifscCode}
                            onChange={handleBankInputChange}
                            className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:border-primary"
                            placeholder="SBIN0001234"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium mb-2">Bank Name *</label>
                          <input
                            type="text"
                            name="bankName"
                            value={formData.bankName}
                            onChange={handleBankInputChange}
                            className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:border-primary"
                            placeholder="State Bank of India"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-2">Account Type</label>
                        <select
                          name="accountType"
                          value={formData.accountType}
                          onChange={handleBankInputChange}
                          className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:border-primary"
                        >
                          <option>Savings</option>
                          <option>Current</option>
                          <option>Business</option>
                        </select>
                      </div>

                      <div className="flex gap-3">
                        <Button
                          onClick={handleSaveBankDetails}
                          className="flex-1 gradient-cosmic text-background"
                        >
                          <Save className="w-4 h-4 mr-2" />
                          Save Details
                        </Button>
                        <Button
                          onClick={handleCancelEdit}
                          variant="outline"
                          className="flex-1"
                        >
                          <X className="w-4 h-4 mr-2" />
                          Cancel
                        </Button>
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-3">
                      <div className="p-3 bg-background rounded-lg">
                        <p className="text-sm text-muted-foreground">Account Holder</p>
                        <p className="font-semibold">{bankDetails.accountHolder}</p>
                      </div>
                      <div className="p-3 bg-background rounded-lg">
                        <p className="text-sm text-muted-foreground">Account Number</p>
                        <p className="font-semibold">****{bankDetails.accountNumber.slice(-4)}</p>
                      </div>
                      <div className="grid md:grid-cols-2 gap-3">
                        <div className="p-3 bg-background rounded-lg">
                          <p className="text-sm text-muted-foreground">IFSC Code</p>
                          <p className="font-semibold">{bankDetails.ifscCode}</p>
                        </div>
                        <div className="p-3 bg-background rounded-lg">
                          <p className="text-sm text-muted-foreground">Bank Name</p>
                          <p className="font-semibold">{bankDetails.bankName}</p>
                        </div>
                      </div>
                      <div className="p-3 bg-background rounded-lg">
                        <p className="text-sm text-muted-foreground">Account Type</p>
                        <p className="font-semibold">{bankDetails.accountType}</p>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>

            {/* Password Tab */}
            <TabsContent value="password">
              <Card className="border-primary/20 bg-card/50 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Lock className="w-5 h-5 text-cosmic-saffron" />
                    Change Password
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 max-w-md">
                  <div>
                    <label className="block text-sm font-medium mb-2">Current Password</label>
                    <input
                      type="password"
                      value={passwordData.currentPassword}
                      onChange={(e) =>
                        setPasswordData({ ...passwordData, currentPassword: e.target.value })
                      }
                      className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:border-primary"
                      placeholder="••••••••"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">New Password</label>
                    <input
                      type="password"
                      value={passwordData.newPassword}
                      onChange={(e) =>
                        setPasswordData({ ...passwordData, newPassword: e.target.value })
                      }
                      className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:border-primary"
                      placeholder="••••••••"
                    />
                    <p className="text-xs text-muted-foreground mt-1">
                      Minimum 8 characters required
                    </p>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Confirm Password</label>
                    <input
                      type="password"
                      value={passwordData.confirmPassword}
                      onChange={(e) =>
                        setPasswordData({ ...passwordData, confirmPassword: e.target.value })
                      }
                      className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:border-primary"
                      placeholder="••••••••"
                    />
                  </div>

                  <Button
                    onClick={handlePasswordChange}
                    className="w-full gradient-cosmic text-background"
                  >
                    Update Password
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Notifications Tab */}
            <TabsContent value="notifications">
              <Card className="border-primary/20 bg-card/50 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Bell className="w-5 h-5 text-cosmic-saffron" />
                    Notification Preferences
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {[
                    { key: "email", label: "Email Notifications", description: "Receive updates via email" },
                    { key: "sms", label: "SMS Alerts", description: "Important updates via SMS" },
                    { key: "push", label: "Push Notifications", description: "Get app notifications" },
                    { key: "newsletter", label: "Newsletter", description: "Weekly CLYFO insights" },
                  ].map((item) => (
                    <div key={item.key} className="flex items-center justify-between p-3 bg-background rounded-lg border border-border/50">
                      <div>
                        <p className="font-semibold text-sm">{item.label}</p>
                        <p className="text-xs text-muted-foreground">{item.description}</p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          checked={notifications[item.key as keyof typeof notifications]}
                          onChange={() => handleNotificationToggle(item.key as keyof typeof notifications)}
                          className="sr-only peer"
                        />
                        <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-cosmic-saffron"></div>
                      </label>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </TabsContent>

            {/* Profile Tab */}
            <TabsContent value="profile">
              <Card className="border-primary/20 bg-card/50 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <User className="w-5 h-5 text-cosmic-saffron" />
                    Profile Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-4 p-4 bg-background rounded-lg">
                    <div className="w-16 h-16 rounded-full bg-gradient-cosmic/20 flex items-center justify-center">
                      <span className="text-2xl font-bold">{user.firstName.charAt(0)}</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">
                        {user.firstName} {user.lastName}
                      </h3>
                      <p className="text-sm text-muted-foreground">{user.email}</p>
                      <Badge className="mt-2 capitalize">{user.role}</Badge>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="p-3 bg-background rounded-lg">
                      <p className="text-sm text-muted-foreground">User ID</p>
                      <p className="font-semibold font-mono text-sm">{user.id}</p>
                    </div>
                    <div className="p-3 bg-background rounded-lg">
                      <p className="text-sm text-muted-foreground">Member Since</p>
                      <p className="font-semibold">{new Date().toLocaleDateString()}</p>
                    </div>
                  </div>

                  <Button variant="outline" className="w-full">
                    <Edit2 className="w-4 h-4 mr-2" />
                    Edit Profile
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          {/* Help Section */}
          <Card className="border-primary/20 bg-card/50 backdrop-blur-sm mt-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <HelpCircle className="w-5 h-5 text-cosmic-saffron" />
                Need Help?
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Can't find what you're looking for? Contact our support team.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button variant="outline">📧 Email Support</Button>
                <Button variant="outline">💬 Live Chat</Button>
                <Button variant="outline">📞 Call Us</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Support;