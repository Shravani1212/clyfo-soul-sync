import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  BarChart3,
  BookOpen,
  Trophy,
  Users,
  Calendar,
  TrendingUp,
  Award,
  Zap,
  Target,
  Clock,
  CheckCircle,
  AlertCircle,
  FileText,
  Smartphone
} from "lucide-react";

const Dashboard = () => {
  const [userRole] = useState<"aspirant" | "transformer">("aspirant");
  const [activeTab, setActiveTab] = useState("overview");
  
  // Mock User Data
  const userData = {
    name: "Priya Sharma",
    consciousID: "CLY369",
    role: "Aspirant - Explorer",
    joinDate: "2024-01-15",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Priya",
    profileCompletion: 85,
    coins: 1200,
    level: 3,
    tripEligibility: {
      domestic: 1200,
      international: 800
    }
  };

  const testStatus = [
    { id: 1, title: "Logic & Creative MCQ Test", status: "completed", score: 92, date: "2024-01-20" },
    { id: 2, title: "Audio Recording Test", status: "completed", score: 88, date: "2024-01-21" },
    { id: 3, title: "UPSC Level In-Person Interview", status: "upcoming", score: null, date: "2024-02-15" }
  ];

  const enrolledCourses = [
    {
      id: 1,
      title: "The 5D Pillar of Consciousness",
      progress: 65,
      modules: 6,
      completedModules: 4,
      dimension: "Psychological",
      gurus: 3
    },
    {
      id: 2,
      title: "Basic Three Insights",
      progress: 42,
      modules: 4,
      completedModules: 2,
      dimension: "Spiritual",
      gurus: 3
    },
    {
      id: 3,
      title: "Flying Like Birds in Infinity",
      progress: 15,
      modules: 8,
      completedModules: 1,
      dimension: "Physical",
      gurus: 3
    }
  ];

  const missions = [
    { id: 1, title: "Cosmic Quest", status: "completed", reward: 100 },
    { id: 2, title: "Galactic Challenge", status: "in_progress", reward: 150 },
    { id: 3, title: "Nebula Expedition", status: "upcoming", reward: 200 }
  ];

  const communityRanking = [
    { rank: 1, name: "Cosmic Crusaders", coins: 5200, members: 245 },
    { rank: 2, name: "Star Seekers", coins: 4800, members: 198 },
    { rank: 3, name: "Galaxy Guardians", coins: 4200, members: 176 },
    { rank: 4, name: "Nebula Navigators", coins: 3900, members: 152 },
    { rank: 5, name: "Astro Adventurers", coins: 3500, members: 128 }
  ];

  const freedomTools = [
    { icon: "📝", name: "Notepad", desc: "Save conceptual thoughts", status: "active" },
    { icon: "🎙️", name: "Recorder", desc: "Practice speech clarity", status: "active" },
    { icon: "📷", name: "Camera", desc: "Facial expressions & gestures", status: "active" },
    { icon: "🤖", name: "AI Chatbot", desc: "ChatGPT-powered guidance", status: "pro" }
  ];

  const certifications = [
    { title: "CLYFO Aspirant Certificate", issued: "2024-02-01", id: "CLYFO-ASP-001", status: "completed" },
    { title: "MSME Certification", issued: "2024-02-01", id: "MSME-2024-001", status: "completed" },
    { title: "Affiliate Aspirant Badge", issued: "2024-02-01", id: "AFB-2024-001", status: "active" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary/5 to-background">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-border/50 bg-background/95 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img src={userData.avatar} alt={userData.name} className="w-12 h-12 rounded-full" />
            <div>
              <h2 className="font-bold text-lg">{userData.name}</h2>
              <p className="text-sm text-muted-foreground">ID: {userData.consciousID}</p>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-cosmic-saffron">{userData.coins}</div>
              <div className="text-xs text-muted-foreground">Coins</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-consciousness-purple">Lvl {userData.level}</div>
              <div className="text-xs text-muted-foreground">Level</div>
            </div>
            <Button size="sm" className="gradient-cosmic text-background">
              Settings
            </Button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Profile Completion */}
        <Card className="mb-8 shadow-consciousness">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-lg">Profile Completion</h3>
              <Badge className="gradient-cosmic">{userData.profileCompletion}%</Badge>
            </div>
            <Progress value={userData.profileCompletion} className="h-3" />
            <p className="text-xs text-muted-foreground mt-2">
              Complete your profile to unlock exclusive features and benefits
            </p>
          </CardContent>
        </Card>

        {/* Main Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-5 mb-8">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="courses">Courses</TabsTrigger>
            <TabsTrigger value="tests">Tests & Levels</TabsTrigger>
            <TabsTrigger value="community">Community</TabsTrigger>
            <TabsTrigger value="tools">Freedom Tools</TabsTrigger>
          </TabsList>

          {/* OVERVIEW TAB */}
          <TabsContent value="overview" className="space-y-8">
            <div className="grid md:grid-cols-3 gap-6">
              {/* Trip Eligibility */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-base">
                    <Calendar className="w-5 h-5" />
                    Trip Eligibility
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">Domestic Trip</p>
                    <p className="text-2xl font-bold text-cosmic-saffron">{userData.tripEligibility.domestic} coins</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">International Trip</p>
                    <p className="text-2xl font-bold text-consciousness-purple">{userData.tripEligibility.international} coins</p>
                  </div>
                  <Button size="sm" className="w-full gradient-cosmic text-background">
                    View Trip Details
                  </Button>
                </CardContent>
              </Card>

              {/* Recent Progress */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-base">
                    <TrendingUp className="w-5 h-5" />
                    Progress
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">Current Level</p>
                    <p className="text-2xl font-bold">Explorer</p>
                    <Progress value={65} className="mt-2 h-2" />
                  </div>
                  <div className="text-xs text-muted-foreground">
                    650 XP to next level
                  </div>
                </CardContent>
              </Card>

              {/* Active Missions */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-base">
                    <Target className="w-5 h-5" />
                    Active Missions
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  {missions.filter(m => m.status === "in_progress").map(mission => (
                    <div key={mission.id} className="p-2 bg-card/50 rounded-lg">
                      <p className="text-sm font-medium">{mission.title}</p>
                      <p className="text-xs text-muted-foreground">+{mission.reward} coins</p>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>

            {/* Mission Timeline */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  Mission Completion Timeline
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {missions.map(mission => (
                    <div key={mission.id} className="flex items-start gap-4">
                      <div className="mt-1">
                        {mission.status === "completed" && (
                          <CheckCircle className="w-5 h-5 text-green-500" />
                        )}
                        {mission.status === "in_progress" && (
                          <Clock className="w-5 h-5 text-blue-500 animate-spin" />
                        )}
                        {mission.status === "upcoming" && (
                          <AlertCircle className="w-5 h-5 text-gray-500" />
                        )}
                      </div>
                      <div>
                        <h4 className="font-medium">{mission.title}</h4>
                        <p className="text-sm text-muted-foreground capitalize">{mission.status.replace("_", " ")}</p>
                      </div>
                      <div className="ml-auto">
                        <Badge className="text-xs">{mission.reward} coins</Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* COURSES TAB */}
          <TabsContent value="courses" className="space-y-6">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-bold flex items-center gap-2">
                <BookOpen className="w-5 h-5" />
                Enrolled Courses
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
                    <div className="flex items-center justify-between">
                      <p className="text-sm text-muted-foreground">{course.gurus} Expert Gurus</p>
                      <Button size="sm" className="gradient-cosmic text-background text-xs">
                        Continue Learning
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* TESTS & LEVELS TAB */}
          <TabsContent value="tests" className="space-y-6">
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
                      <div>
                        <p className="text-2xl font-bold text-cosmic-saffron mb-1">{test.score}%</p>
                        <p className="text-xs text-muted-foreground">Completed: {test.date}</p>
                      </div>
                    )}
                    {test.status === "upcoming" && (
                      <p className="text-xs text-muted-foreground">Scheduled: {test.date}</p>
                    )}
                    <Button size="sm" className="w-full mt-4 gradient-cosmic text-background">
                      {test.status === "completed" ? "View Report" : "Schedule"}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* COMMUNITY TAB */}
          <TabsContent value="community">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="w-5 h-5" />
                  Community Leaderboard
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {communityRanking.map(team => (
                    <div key={team.rank} className="flex items-center gap-4 p-3 bg-card/50 rounded-lg hover:bg-card/70 transition-all">
                      <div className="text-2xl font-bold w-8 text-center">
                        {team.rank === 1 && "🥇"}
                        {team.rank === 2 && "🥈"}
                        {team.rank === 3 && "🥉"}
                        {team.rank > 3 && team.rank}
                      </div>
                      <div className="flex-1">
                        <p className="font-medium">{team.name}</p>
                        <p className="text-xs text-muted-foreground">{team.members} members</p>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-cosmic-saffron">{team.coins}</p>
                        <p className="text-xs text-muted-foreground">coins</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* FREEDOM TOOLS TAB */}
          <TabsContent value="tools" className="space-y-6">
            <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-primary/20 rounded-lg p-6 mb-6">
              <h3 className="font-bold text-lg mb-2">🛠️ Freedom Tech Toolbox</h3>
              <p className="text-sm text-muted-foreground">
                Master the tools that unlock your consciousness potential. Practice, record, and refine your journey.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {freedomTools.map((tool, index) => (
                <Card key={index} className={tool.status === "pro" ? "border-cosmic-saffron/50 bg-cosmic-saffron/5" : ""}>
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="text-4xl">{tool.icon}</div>
                      {tool.status === "pro" && (
                        <Badge className="bg-cosmic-saffron text-black text-xs">PRO</Badge>
                      )}
                    </div>
                    <h4 className="font-bold mb-1">{tool.name}</h4>
                    <p className="text-sm text-muted-foreground mb-4">{tool.desc}</p>
                    <Button size="sm" className="w-full gradient-cosmic text-background">
                      {tool.status === "pro" ? "Unlock Pro" : "Access Tool"}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* Certifications Section */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Award className="w-6 h-6" />
            Certifications & Badges
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <Card key={index} className="border-primary/30 hover:shadow-cosmic transition-all">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-3">
                    {index === 0 && "🎓"}
                    {index === 1 && "🏢"}
                    {index === 2 && "💼"}
                  </div>
                  <h4 className="font-bold mb-2">{cert.title}</h4>
                  <p className="text-xs text-muted-foreground mb-3">ID: {cert.id}</p>
                  <p className="text-xs text-green-400 mb-4">Issued: {cert.issued}</p>
                  <Button size="sm" variant="outline" className="w-full">
                    <FileText className="w-3 h-3 mr-2" />
                    Download
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Mastery Tools Showcase */}
        <section className="mt-12 mb-12">
          <Card className="bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5 border border-primary/20">
            <CardContent className="p-8">
              <h3 className="text-2xl font-cosmic font-bold mb-4">📱 CLYFO App Ecosystem</h3>
              <p className="text-muted-foreground mb-6">
                Available on iOS, Android, and Web. Your consciousness journey synced across all devices.
              </p>
              <div className="flex gap-4">
                <Button className="gradient-cosmic text-background">
                  <Smartphone className="w-4 h-4 mr-2" />
                  Download App
                </Button>
                <Button variant="outline">Learn More</Button>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;