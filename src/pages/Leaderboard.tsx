import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, Crown, Medal, Flame, TrendingUp } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import DashboardLayout from "@/components/DashboardLayout";

interface LeaderboardEntry {
  rank: number;
  name: string;
  role: string;
  score: number;
  earnings: number;
  impact: number;
  streak: number;
  badge: string;
}

const Leaderboard = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState<any>(null);
  const [timeframe, setTimeframe] = useState("week");

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (!storedUser) {
      navigate("/login");
      return;
    }
    try {
      setUser(JSON.parse(storedUser));
    } catch {
      navigate("/login");
    }
  }, [navigate]);

  const aspirantLeaderboard: LeaderboardEntry[] = [
    { rank: 1, name: "Priya Kumar", role: "Learner", score: 9850, earnings: 5200, impact: 45, streak: 21, badge: "🏆" },
    { rank: 2, name: "Rajesh Patel", role: "Student", score: 8920, earnings: 4100, impact: 38, streak: 18, badge: "🥈" },
    { rank: 3, name: "Ananya Singh", role: "Professional", score: 8450, earnings: 3900, impact: 35, streak: 15, badge: "🥉" },
    { rank: 4, name: "Vikram Reddy", role: "Entrepreneur", score: 7800, earnings: 3200, impact: 28, streak: 12, badge: "⭐" },
    { rank: 5, name: "Meera Gupta", role: "Freelancer", score: 7200, earnings: 2800, impact: 25, streak: 10, badge: "✨" },
  ];

  const transformerLeaderboard: LeaderboardEntry[] = [
    { rank: 1, name: "Arun Sharma", role: "District Coach", score: 12500, earnings: 8900, impact: 156, streak: 30, badge: "🏆" },
    { rank: 2, name: "Sneha Verma", role: "Community Mentor", score: 11800, earnings: 7600, impact: 142, streak: 28, badge: "🥈" },
    { rank: 3, name: "Deepak Kumar", role: "Wellness Trainer", score: 10900, earnings: 6800, impact: 128, streak: 25, badge: "🥉" },
    { rank: 4, name: "Priya Nair", role: "Youth Coach", score: 9700, earnings: 5900, impact: 112, streak: 22, badge: "⭐" },
    { rank: 5, name: "Rohan Desai", role: "Tech Mentor", score: 8900, earnings: 5100, impact: 98, streak: 20, badge: "✨" },
  ];

  const getRankIcon = (rank: number) => {
    if (rank === 1) return <Crown className="w-5 h-5 text-yellow-500" />;
    if (rank === 2) return <Trophy className="w-5 h-5 text-gray-400" />;
    if (rank === 3) return <Medal className="w-5 h-5 text-orange-600" />;
    return <TrendingUp className="w-5 h-5 text-primary" />;
  };

  if (!user) return null;

  const LeaderboardTable = ({ data }: { data: LeaderboardEntry[] }) => (
    <div className="space-y-4">
      {data.map((entry) => (
        <Card key={entry.rank} className="border-primary/20 bg-card/50 backdrop-blur-sm hover:border-primary/40 transition-all">
          <CardContent className="pt-6">
            <div className="flex items-center gap-4">
              {/* Rank & Icon */}
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-cosmic/20">
                {getRankIcon(entry.rank)}
                <span className="font-bold text-lg">#{entry.rank}</span>
              </div>

              {/* Name & Role */}
              <div className="flex-1">
                <h3 className="font-semibold text-lg">{entry.name}</h3>
                <p className="text-sm text-muted-foreground">{entry.role}</p>
              </div>

              {/* Stats Grid */}
              <div className="hidden md:grid grid-cols-4 gap-4 text-center">
                <div>
                  <p className="text-sm text-muted-foreground">Score</p>
                  <p className="font-bold text-lg">{entry.score.toLocaleString()}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Earnings</p>
                  <p className="font-bold text-cosmic-saffron">₹{entry.earnings.toLocaleString()}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Impact</p>
                  <p className="font-bold text-lg">{entry.impact}</p>
                </div>
                <div className="flex items-center justify-center gap-1">
                  <Flame className="w-4 h-4 text-red-500" />
                  <p className="font-bold">{entry.streak}</p>
                </div>
              </div>

              {/* Badge */}
              <div className="text-3xl">{entry.badge}</div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );

  return (
    <DashboardLayout userRole={user.role}>
      <div className="min-h-screen bg-gradient-to-br from-background via-secondary/5 to-background pt-20">
        <div className="max-w-6xl mx-auto px-4 py-12">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-cosmic font-bold mb-4 flex items-center justify-center gap-3">
              <Trophy className="w-10 h-10 text-cosmic-saffron" />
              CLYFO Leaderboard
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Celebrating top achievers in our community. Your excellence inspires others.
            </p>
          </div>

          {/* Timeframe Filter */}
          <div className="flex justify-center gap-3 mb-8">
            {["week", "month", "year", "all-time"].map((frame) => (
              <button
                key={frame}
                onClick={() => setTimeframe(frame)}
                className={`px-4 py-2 rounded-lg transition-all ${
                  timeframe === frame
                    ? "bg-gradient-cosmic text-background font-semibold"
                    : "bg-card/50 text-muted-foreground hover:text-foreground"
                }`}
              >
                {frame === "week" && "This Week"}
                {frame === "month" && "This Month"}
                {frame === "year" && "This Year"}
                {frame === "all-time" && "All Time"}
              </button>
            ))}
          </div>

          {/* Leaderboards */}
          <Tabs defaultValue="aspirants" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="aspirants" className="text-base">
                📚 Aspirants (Learners)
              </TabsTrigger>
              <TabsTrigger value="transformers" className="text-base">
                🛡️ Transformers (Mentors)
              </TabsTrigger>
            </TabsList>

            <TabsContent value="aspirants">
              <div className="space-y-6">
                <div className="grid md:grid-cols-3 gap-4 mb-8">
                  <Card className="border-cosmic-saffron/50 bg-gradient-cosmic/10">
                    <CardContent className="pt-6">
                      <p className="text-sm text-muted-foreground mb-2">Top Score</p>
                      <p className="text-3xl font-bold">{aspirantLeaderboard[0].score.toLocaleString()}</p>
                      <p className="text-sm text-cosmic-saffron mt-2">{aspirantLeaderboard[0].name}</p>
                    </CardContent>
                  </Card>
                  <Card className="border-consciousness-purple/50 bg-gradient-to-br from-consciousness-purple/10 to-cosmic-saffron/10">
                    <CardContent className="pt-6">
                      <p className="text-sm text-muted-foreground mb-2">Total Participants</p>
                      <p className="text-3xl font-bold">4,230</p>
                      <p className="text-sm text-muted-foreground mt-2">Active learners</p>
                    </CardContent>
                  </Card>
                  <Card className="border-cosmic-saffron/50 bg-gradient-cosmic/10">
                    <CardContent className="pt-6">
                      <p className="text-sm text-muted-foreground mb-2">Total Rewards</p>
                      <p className="text-3xl font-bold">₹48.5L</p>
                      <p className="text-sm text-cosmic-saffron mt-2">Distributed</p>
                    </CardContent>
                  </Card>
                </div>
                <LeaderboardTable data={aspirantLeaderboard} />
              </div>
            </TabsContent>

            <TabsContent value="transformers">
              <div className="space-y-6">
                <div className="grid md:grid-cols-3 gap-4 mb-8">
                  <Card className="border-cosmic-saffron/50 bg-gradient-cosmic/10">
                    <CardContent className="pt-6">
                      <p className="text-sm text-muted-foreground mb-2">Top Score</p>
                      <p className="text-3xl font-bold">{transformerLeaderboard[0].score.toLocaleString()}</p>
                      <p className="text-sm text-cosmic-saffron mt-2">{transformerLeaderboard[0].name}</p>
                    </CardContent>
                  </Card>
                  <Card className="border-consciousness-purple/50 bg-gradient-to-br from-consciousness-purple/10 to-cosmic-saffron/10">
                    <CardContent className="pt-6">
                      <p className="text-sm text-muted-foreground mb-2">Total Mentors</p>
                      <p className="text-3xl font-bold">1,890</p>
                      <p className="text-sm text-muted-foreground mt-2">Active transformers</p>
                    </CardContent>
                  </Card>
                  <Card className="border-cosmic-saffron/50 bg-gradient-cosmic/10">
                    <CardContent className="pt-6">
                      <p className="text-sm text-muted-foreground mb-2">Total Impact</p>
                      <p className="text-3xl font-bold">32,456</p>
                      <p className="text-sm text-cosmic-saffron mt-2">Lives transformed</p>
                    </CardContent>
                  </Card>
                </div>
                <LeaderboardTable data={transformerLeaderboard} />
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Leaderboard;