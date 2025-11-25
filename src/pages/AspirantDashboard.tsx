import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  BookOpen,
  Trophy,
  Users,
  TrendingUp,
  Award,
  LogOut,
  Settings,
  Bell,
  Home,
  CheckCircle,
  Clock
} from "lucide-react";

interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  role: string;
  lifeStage: string;
  createdAt: string;
  profileCompletion: number;
  coins: number;
  level: number;
}

const AspirantDashboard = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

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
          <p className="text-muted-foreground">Loading your consciousness journey...</p>
        </div>
      </div>
    );
  }

  if (!user) return null;

  const enrolledCourses = [
    {
      id: 1,
      title: "The 5D Pillar of Consciousness",
      progress: 65,
      modules: 6,
      completedModules: 4,
      dimension: "Psychological"
    },
    {
      id: 2,
      title: "Basic Three Insights",
      progress: 42,
      modules: 4,
      completedModules: 2,
      dimension: "Spiritual"
    },
    {
      id: 3,
      title: "Flying Like Birds in Infinity",
      progress: 15,
      modules: 8,
      completedModules: 1,
      dimension: "Physical"
    }
  ];

  const testStatus = [
    { id: 1, title: "Logic & Creative MCQ Test", status: "completed", score: 92 },
    { id: 2, title: "Audio Recording Test", status: "completed", score: 88 },
    { id: 3, title: "UPSC Level Interview", status: "upcoming", score: null }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary/5 to-background">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-border/50 bg-background/95 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-cosmic-saffron/20 flex items-center justify-center">
              <span className="font-bold text-cosmic-saffron">{user.firstName.charAt(0)}</span>
            </div>
            <div>
              <h2 className="font-bold text-lg">{user.firstName} {user.lastName}</h2>
              <p className="text-sm text-muted-foreground">ID: {user.id}</p>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-cosmic-saffron">{user.coins}</div>
              <div className="text-xs text-muted-foreground">Coins</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-consciousness-purple">Lvl {user.level}</div>
              <div className="text-xs text-muted-foreground">Level</div>
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
        <Card className="mb-8 bg-gradient-to-r from-cosmic-saffron/10 to-consciousness-purple/10 border-primary/30">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold mb-2">Welcome to Your Consciousness Journey, {user.firstName}! 🌟</h2>
            <p className="text-muted-foreground mb-4">
              You're on the path to enlightenment. Complete your courses, pass your tests, and unlock amazing rewards!
            </p>
            <div className="flex gap-4">
              <Button className="gradient-cosmic text-background">Start Learning</Button>
              <Button variant="outline">View Roadmap</Button>
            </div>
          </CardContent>
        </Card>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6 text-center">
              <Trophy className="w-8 h-8 text-cosmic-saffron mx-auto mb-2" />
              <p className="text-sm text-muted-foreground mb-1">Courses</p>
              <p className="text-2xl font-bold">{enrolledCourses.length}</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <CheckCircle className="w-8 h-8 text-green-400 mx-auto mb-2" />
              <p className="text-sm text-muted-foreground mb-1">Tests Passed</p>
              <p className="text-2xl font-bold">2/3</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <TrendingUp className="w-8 h-8 text-consciousness-purple mx-auto mb-2" />
              <p className="text-sm text-muted-foreground mb-1">Overall Progress</p>
              <p className="text-2xl font-bold">40%</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <Award className="w-8 h-8 text-infinity-gold mx-auto mb-2" />
              <p className="text-sm text-muted-foreground mb-1">Badges</p>
              <p className="text-2xl font-bold">3</p>
            </CardContent>
          </Card>
        </div>

        {/* Main Content Tabs */}
        <Tabs defaultValue="courses" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="courses">Enrolled Courses</TabsTrigger>
            <TabsTrigger value="tests">Tests & Levels</TabsTrigger>
            <TabsTrigger value="progress">Progress</TabsTrigger>
          </TabsList>

          {/* Courses */}
          <TabsContent value="courses" className="space-y-6">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-bold flex items-center gap-2">
                <BookOpen className="w-5 h-5" />
                Your Learning Path
              </h3>
              <Button className="gradient-cosmic text-background">Browse More</Button>
            </div>

            <div className="space-y-6">
              {enrolledCourses.map(course => (
                <Card key={course.id}>
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h4 className="font-bold text-lg mb-1">{course.title}</h4>
                        <Badge className="text-xs">{course.dimension}</Badge>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-semibold text-cosmic-saffron">{course.progress}%</p>
                        <p className="text-xs text-muted-foreground">{course.completedModules}/{course.modules} modules</p>
                      </div>
                    </div>
                    <Progress value={course.progress} className="mb-4 h-2" />
                    <Button size="sm" className="gradient-cosmic text-background">Continue Learning</Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Tests */}
          <TabsContent value="tests" className="space-y-6">
            <h3 className="text-lg font-bold">Assessment Journey</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {testStatus.map(test => (
                <Card key={test.id}>
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <h4 className="font-medium text-sm">{test.title}</h4>
                      <Badge 
                        className={test.status === "completed" ? "bg-green-500/20 text-green-400" : "bg-blue-500/20 text-blue-400"}
                      >
                        {test.status.charAt(0).toUpperCase() + test.status.slice(1)}
                      </Badge>
                    </div>
                    {test.status === "completed" && (
                      <p className="text-2xl font-bold text-cosmic-saffron mb-2">{test.score}%</p>
                    )}
                    <Button size="sm" className="w-full gradient-cosmic text-background">
                      {test.status === "completed" ? "View Report" : "Schedule"}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Progress */}
          <TabsContent value="progress">
            <Card>
              <CardHeader>
                <CardTitle>Your Consciousness Evolution</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <div className="flex justify-between mb-2">
                    <span>Profile Completion</span>
                    <span className="font-bold">{user.profileCompletion}%</span>
                  </div>
                  <Progress value={user.profileCompletion} />
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span>Overall Course Progress</span>
                    <span className="font-bold">40%</span>
                  </div>
                  <Progress value={40} />
                </div>
                <div className="mt-6 p-4 bg-blue-500/10 border border-blue-500/30 rounded-lg">
                  <p className="text-sm text-blue-200">
                    🎯 <strong>Next Milestone:</strong> Complete all modules in "The 5D Pillar of Consciousness" to unlock the Advanced Dimension course!
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default AspirantDashboard;