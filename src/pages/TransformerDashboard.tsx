import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Users,
  TrendingUp,
  Award,
  LogOut,
  Settings,
  Bell,
  DollarSign,
  Target,
  CheckCircle
} from "lucide-react";

interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  role: string;
  lifeStage: string;
  createdAt: string;
}

const TransformerDashboard = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [monthlyEarnings] = useState(12500);
  const [studentsGuided] = useState(25);
  const [communityRank] = useState(8);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (!storedUser) {
      navigate("/login");
      return;
    }
    try {
      setUser(JSON.parse(storedUser));
      setLoading(false);
    } catch {
      navigate("/login");
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin mb-4">
            <div className="h-12 w-12 border-4 border-primary border-t-transparent rounded-full mx-auto"></div>
          </div>
          <p className="text-muted-foreground">Initializing transformation portal...</p>
        </div>
      </div>
    );
  }

  if (!user) return null;

  const mentees = [
    { id: 1, name: "Aditya Singh", stage: "Youth", joinDate: "2024-01-15", progress: 65 },
    { id: 2, name: "Priya Sharma", stage: "Youth", joinDate: "2024-01-18", progress: 42 },
    { id: 3, name: "Raj Patel", stage: "Learners", joinDate: "2024-01-20", progress: 28 }
  ];

  const trainingSessions = [
    { id: 1, title: "Foundation Level Training", status: "completed", score: 94 },
    { id: 2, title: "Advanced Mentoring Skills", status: "in_progress", progress: 75 },
    { id: 3, title: "Leadership Excellence", status: "upcoming", progress: 0 }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary/5 to-background">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-border/50 bg-background/95 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-consciousness-purple/20 flex items-center justify-center">
              <span className="font-bold text-consciousness-purple">{user.firstName.charAt(0)}</span>
            </div>
            <div>
              <h2 className="font-bold text-lg">{user.firstName} {user.lastName}</h2>
              <p className="text-sm text-muted-foreground">Consciousness Transformer | ID: {user.id}</p>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-green-400">₹{monthlyEarnings}</div>
              <div className="text-xs text-muted-foreground">This Month</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-consciousness-purple">{studentsGuided}</div>
              <div className="text-xs text-muted-foreground">Students</div>
            </div>
            <Button size="sm" variant="outline">
              <Bell className="w-4 h-4" />
            </Button>
            <Button size="sm" variant="outline">
              <Settings className="w-4 h-4" />
            </Button>
            <Button 
              size="sm" 
              variant="outline" 
              onClick={handleLogout}
              className="text-red-400 hover:text-red-400"
            >
              <LogOut className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Welcome Card */}
        <Card className="mb-8 bg-gradient-to-r from-consciousness-purple/10 to-cosmic-saffron/10 border-primary/30">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold mb-2">Welcome to the Universe of HaiC, {user.firstName}! 🚀</h2>
            <p className="text-muted-foreground mb-4">
              You're empowering others on their consciousness journey. Every student you guide earns you rewards and recognition!
            </p>
            <div className="flex gap-4">
              <Button className="gradient-cosmic text-background">Find New Mentees</Button>
              <Button variant="outline">View Training Plan</Button>
            </div>
          </CardContent>
        </Card>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6 text-center">
              <DollarSign className="w-8 h-8 text-green-400 mx-auto mb-2" />
              <p className="text-sm text-muted-foreground mb-1">Earnings</p>
              <p className="text-2xl font-bold">₹{monthlyEarnings}</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <Users className="w-8 h-8 text-consciousness-purple mx-auto mb-2" />
              <p className="text-sm text-muted-foreground mb-1">Active Mentees</p>
              <p className="text-2xl font-bold">{studentsGuided}</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <TrendingUp className="w-8 h-8 text-cosmic-saffron mx-auto mb-2" />
              <p className="text-sm text-muted-foreground mb-1">Community Rank</p>
              <p className="text-2xl font-bold">#{communityRank}</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <Award className="w-8 h-8 text-infinity-gold mx-auto mb-2" />
              <p className="text-sm text-muted-foreground mb-1">Impact Score</p>
              <p className="text-2xl font-bold">850</p>
            </CardContent>
          </Card>
        </div>

        {/* Main Content Tabs */}
        <Tabs defaultValue="mentees" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="mentees">My Mentees</TabsTrigger>
            <TabsTrigger value="training">Training Progress</TabsTrigger>
            <TabsTrigger value="earnings">Earnings & Rewards</TabsTrigger>
          </TabsList>

          {/* Mentees */}
          <TabsContent value="mentees" className="space-y-6">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-bold flex items-center gap-2">
                <Users className="w-5 h-5" />
                Active Mentees
              </h3>
              <Button className="gradient-cosmic text-background">Connect with New Mentees</Button>
            </div>

            <div className="space-y-4">
              {mentees.map(mentee => (
                <Card key={mentee.id}>
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h4 className="font-bold text-lg">{mentee.name}</h4>
                        <p className="text-sm text-muted-foreground">{mentee.stage} | Joined {mentee.joinDate}</p>
                      </div>
                      <Badge className="text-xs">Active</Badge>
                    </div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm text-muted-foreground">Progress</span>
                      <span className="font-semibold text-consciousness-purple">{mentee.progress}%</span>
                    </div>
                    <Progress value={mentee.progress} className="h-2 mb-4" />
                    <Button size="sm" variant="outline">Send Message</Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Training Progress */}
          <TabsContent value="training" className="space-y-6">
            <h3 className="text-lg font-bold">Your Transformation Journey</h3>
            <div className="space-y-4">
              {trainingSessions.map(session => (
                <Card key={session.id}>
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h4 className="font-bold">{session.title}</h4>
                        <Badge 
                          className={
                            session.status === "completed" 
                              ? "bg-green-500/20 text-green-400"
                              : session.status === "in_progress"
                              ? "bg-blue-500/20 text-blue-400"
                              : "bg-gray-500/20 text-gray-400"
                          }
                        >
                          {session.status.charAt(0).toUpperCase() + session.status.slice(1)}
                        </Badge>
                      </div>
                      {session.status === "completed" && (
                        <div className="text-right">
                          <p className="text-2xl font-bold text-green-400">{session.score}%</p>
                          <CheckCircle className="w-5 h-5 text-green-400 mt-1" />
                        </div>
                      )}
                    </div>
                    {session.status === "in_progress" && (
                      <div className="mb-4">
                        <Progress value={session.progress} className="h-2" />
                        <p className="text-xs text-muted-foreground mt-2">{session.progress}% complete</p>
                      </div>
                    )}
                    <Button size="sm" className="gradient-cosmic text-background">
                      {session.status === "completed" ? "View Certificate" : "Continue"}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Earnings */}
          <TabsContent value="earnings" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Earnings Dashboard</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="p-4 bg-green-500/10 border border-green-500/30 rounded-lg">
                    <p className="text-sm text-muted-foreground mb-1">This Month</p>
                    <p className="text-2xl font-bold text-green-400">₹{monthlyEarnings}</p>
                  </div>
                  <div className="p-4 bg-consciousness-purple/10 border border-consciousness-purple/30 rounded-lg">
                    <p className="text-sm text-muted-foreground mb-1">Total Earned</p>
                    <p className="text-2xl font-bold text-consciousness-purple">₹{monthlyEarnings * 3}</p>
                  </div>
                  <div className="p-4 bg-cosmic-saffron/10 border border-cosmic-saffron/30 rounded-lg">
                    <p className="text-sm text-muted-foreground mb-1">Pending Payout</p>
                    <p className="text-2xl font-bold text-cosmic-saffron">₹2,500</p>
                  </div>
                </div>

                <div className="border-t pt-6">
                  <h4 className="font-bold mb-4">Earning Sources</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center p-3 bg-card/50 rounded-lg">
                      <span>Mentee Session Fees (25 students)</span>
                      <span className="font-bold">₹10,000</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-card/50 rounded-lg">
                      <span>Performance Bonus</span>
                      <span className="font-bold">₹2,000</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-card/50 rounded-lg">
                      <span>Community Impact Rewards</span>
                      <span className="font-bold">₹500</span>
                    </div>
                  </div>
                </div>

                <Button className="w-full gradient-cosmic text-background">Request Payout</Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default TransformerDashboard;