import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Zap, Trophy, Calendar, Users, TrendingUp, ChevronRight } from "lucide-react";
import DashboardLayout from "@/components/DashboardLayout";

interface Challenge {
  id: string;
  name: string;
  category: "referral" | "contribution" | "wellness" | "learning";
  description: string;
  reward: string;
  deadline: string;
  progress: number;
  participants: number;
  difficulty: "Easy" | "Medium" | "Hard";
  icon: string;
}

const Challenges = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState<any>(null);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [joinedChallenges, setJoinedChallenges] = useState<string[]>([]);

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

  const challenges: Challenge[] = [
    {
      id: "1",
      name: "Referral Race",
      category: "referral",
      description: "Invite 5 friends this month and win exclusive perks!",
      reward: "₹500 + Badge",
      deadline: "End of Month",
      progress: 65,
      participants: 1234,
      difficulty: "Easy",
      icon: "🎯",
    },
    {
      id: "2",
      name: "Contribution Quest",
      category: "contribution",
      description: "Complete 10 community service hours and earn research credits.",
      reward: "₹1000 + Certificate",
      deadline: "30 Days",
      progress: 45,
      participants: 456,
      difficulty: "Medium",
      icon: "🌍",
    },
    {
      id: "3",
      name: "Wellness Warrior",
      category: "wellness",
      description: "Maintain 21-day meditation streak and unlock wellness rewards.",
      reward: "₹750 + Meditation Kit",
      deadline: "21 Days",
      progress: 80,
      participants: 789,
      difficulty: "Medium",
      icon: "🧘",
    },
    {
      id: "4",
      name: "Learning Lightning",
      category: "learning",
      description: "Complete 5 courses in the Enlightenment series.",
      reward: "₹1500 + Laptop Sticker",
      deadline: "45 Days",
      progress: 30,
      participants: 234,
      difficulty: "Hard",
      icon: "📚",
    },
    {
      id: "5",
      name: "Team Impact",
      category: "contribution",
      description: "Form a team and complete group wellness projects.",
      reward: "₹2000 + Team Badge",
      deadline: "60 Days",
      progress: 55,
      participants: 567,
      difficulty: "Hard",
      icon: "👥",
    },
    {
      id: "6",
      name: "Green Guardian",
      category: "wellness",
      description: "Plant 10 trees or complete eco-warrior tasks.",
      reward: "₹600 + Eco Badge",
      deadline: "90 Days",
      progress: 40,
      participants: 345,
      difficulty: "Easy",
      icon: "🌱",
    },
  ];

  const handleJoinChallenge = (challengeId: string) => {
    if (!joinedChallenges.includes(challengeId)) {
      setJoinedChallenges([...joinedChallenges, challengeId]);
    }
  };

  const filteredChallenges = selectedCategory === "all" 
    ? challenges 
    : challenges.filter(c => c.category === selectedCategory);

  if (!user) return null;

  return (
    <DashboardLayout userRole={user.role}>
      <div className="min-h-screen bg-gradient-to-br from-background via-secondary/5 to-background pt-20">
        <div className="max-w-6xl mx-auto px-4 py-12">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-cosmic font-bold mb-4 flex items-center justify-center gap-3">
              <Zap className="w-10 h-10 text-cosmic-saffron" />
              CLYFO Challenges
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Complete challenges, earn rewards, and climb the leaderboard. Every action creates impact.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-3 mb-8 justify-center">
            <Button
              variant={selectedCategory === "all" ? "default" : "outline"}
              onClick={() => setSelectedCategory("all")}
              className={selectedCategory === "all" ? "gradient-cosmic text-background" : ""}
            >
              All Challenges
            </Button>
            <Button
              variant={selectedCategory === "referral" ? "default" : "outline"}
              onClick={() => setSelectedCategory("referral")}
              className={selectedCategory === "referral" ? "gradient-cosmic text-background" : ""}
            >
              🎯 Referral
            </Button>
            <Button
              variant={selectedCategory === "contribution" ? "default" : "outline"}
              onClick={() => setSelectedCategory("contribution")}
              className={selectedCategory === "contribution" ? "gradient-cosmic text-background" : ""}
            >
              🌍 Contribution
            </Button>
            <Button
              variant={selectedCategory === "wellness" ? "default" : "outline"}
              onClick={() => setSelectedCategory("wellness")}
              className={selectedCategory === "wellness" ? "gradient-cosmic text-background" : ""}
            >
              🧘 Wellness
            </Button>
            <Button
              variant={selectedCategory === "learning" ? "default" : "outline"}
              onClick={() => setSelectedCategory("learning")}
              className={selectedCategory === "learning" ? "gradient-cosmic text-background" : ""}
            >
              📚 Learning
            </Button>
          </div>

          {/* Challenges Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {filteredChallenges.map((challenge) => (
              <Card key={challenge.id} className="border-primary/20 bg-card/50 backdrop-blur-sm hover:border-primary/40 transition-all">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-start gap-3 flex-1">
                      <span className="text-3xl">{challenge.icon}</span>
                      <div>
                        <CardTitle className="text-lg">{challenge.name}</CardTitle>
                        <Badge variant="outline" className="mt-2 text-xs">
                          {challenge.difficulty}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground">{challenge.description}</p>

                  {/* Progress Bar */}
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Progress</span>
                      <span className="font-semibold">{challenge.progress}%</span>
                    </div>
                    <div className="w-full bg-background rounded-full h-2">
                      <div
                        className="bg-gradient-cosmic h-2 rounded-full transition-all"
                        style={{ width: `${challenge.progress}%` }}
                      ></div>
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-3 text-sm">
                    <div className="flex items-center gap-1 text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      <span>{challenge.deadline}</span>
                    </div>
                    <div className="flex items-center gap-1 text-muted-foreground">
                      <Users className="w-4 h-4" />
                      <span>{challenge.participants} joined</span>
                    </div>
                  </div>

                  {/* Reward */}
                  <div className="p-3 bg-cosmic-saffron/10 border border-cosmic-saffron/30 rounded-lg">
                    <p className="text-sm font-semibold text-cosmic-saffron">{challenge.reward}</p>
                  </div>

                  {/* Action Button */}
                  {joinedChallenges.includes(challenge.id) ? (
                    <Button disabled className="w-full" variant="outline">
                      ✓ Joined
                    </Button>
                  ) : (
                    <Button
                      onClick={() => handleJoinChallenge(challenge.id)}
                      className="w-full gradient-cosmic text-background"
                    >
                      Join Challenge
                      <ChevronRight className="w-4 h-4 ml-2" />
                    </Button>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Create Challenge CTA */}
          <Card className="border-primary/20 bg-card/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Zap className="w-5 h-5 text-cosmic-saffron" />
                Create Your Challenge
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Design custom challenges for your network with specific goals, rules, and rewards. Foster community engagement!
              </p>
              <Button className="gradient-cosmic text-background">
                Create Challenge
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Challenges;