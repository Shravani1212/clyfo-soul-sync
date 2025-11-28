import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Copy, Share2, Users, TrendingUp, Award, Calendar, ChevronLeft, ChevronRight } from "lucide-react";
import DashboardLayout from "@/components/DashboardLayout";

interface TopReferrer {
  id: string;
  name: string;
  referrals: number;
  earnings: number;
  avatar: string;
}

interface Challenge {
  id: string;
  name: string;
  description: string;
  reward: string;
  deadline: string;
  progress: number;
}

const Referral = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState<any>(null);
  const [copied, setCopied] = useState(false);
  const [currentMonth, setCurrentMonth] = useState(new Date());

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

  const referralLink = `https://clyfo.com/ref/${user?.id || "USER123"}`;

  const handleCopyReferralLink = () => {
    navigator.clipboard.writeText(referralLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const topReferrers: TopReferrer[] = [
    { id: "1", name: "Arun Sharma", referrals: 16, earnings: 5600, avatar: "AS" },
    { id: "2", name: "Priya Patel", referrals: 12, earnings: 4200, avatar: "PP" },
    { id: "3", name: "Vikram Singh", referrals: 10, earnings: 3500, avatar: "VS" },
  ];

  const challenges: Challenge[] = [
    {
      id: "1",
      name: "Referral Race",
      description: "Invite the most friends this month and win exclusive perks!",
      reward: "Join Now",
      deadline: "End of Month",
      progress: 65,
    },
    {
      id: "2",
      name: "Contribution Quest",
      description: "Contribute to our community and earn research-based on your progress.",
      reward: "View Quest",
      deadline: "Ongoing",
      progress: 45,
    },
  ];

  const stats = [
    { label: "Total Earnings", value: "$150", icon: TrendingUp },
    { label: "Contribution Program", value: "78%", icon: Award },
    { label: "Projected Earnings", value: "$225", icon: Award },
  ];

  if (!user) return null;

  return (
    <DashboardLayout userRole={user.role}>
      <div className="min-h-screen bg-gradient-to-br from-background via-secondary/5 to-background pt-20">
        <div className="max-w-6xl mx-auto px-4 py-12">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-cosmic font-bold mb-4">
              Your Referral Network
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Each node represents a successful referral. Share your unique referral code and build your network to unlock exclusive rewards and bonus points!
            </p>
          </div>

          {/* Hero Section with Network Image */}
          <div className="mb-12 relative rounded-xl overflow-hidden h-64 md:h-80 bg-gradient-to-br from-cosmic-saffron/20 to-consciousness-purple/20 border border-primary/20 flex items-center justify-center">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 1200 400%22><defs><linearGradient id=%22grad1%22 x1=%220%25%22 y1=%220%25%22 x2=%22100%25%22 y2=%22100%25%22><stop offset=%220%25%22 style=%22stop-color:rgba(255,193,7,0.1);stop-opacity:1%22/><stop offset=%22100%25%22 style=%22stop-color:rgba(156,39,176,0.1);stop-opacity:1%22/></linearGradient></defs><rect fill=%22url(%23grad1)%22 width=%221200%22 height=%22400%22/></svg>')] bg-cover"></div>
            <div className="relative z-10 text-center">
              <h2 className="text-3xl md:text-4xl font-cosmic font-bold mb-4">
                Your Referral Network
              </h2>
              <p className="text-muted-foreground mb-6">
                Each node represents a successful referral. Share your unique referral code.
              </p>
              <Button className="gradient-cosmic text-background">View Leaderboard</Button>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {stats.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <Card key={idx} className="border-primary/20 bg-card/50 backdrop-blur-sm">
                  <CardContent className="pt-6">
                    <div className="flex items-start justify-between">
                      <div>
                        <p className="text-sm text-muted-foreground mb-2">{stat.label}</p>
                        <p className="text-3xl font-cosmic font-bold">{stat.value}</p>
                      </div>
                      <Icon className="w-8 h-8 text-cosmic-saffron" />
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Referral Link Section */}
          <Card className="mb-12 border-primary/20 bg-card/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="w-5 h-5" />
                Invite Friends
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Share your unique referral link with friends. Links are available in multiple formats.
              </p>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={referralLink}
                  readOnly
                  className="flex-1 px-4 py-2 bg-background border border-border rounded-lg text-sm"
                />
                <Button
                  onClick={handleCopyReferralLink}
                  variant="outline"
                  className="gap-2"
                >
                  <Copy className="w-4 h-4" />
                  {copied ? "Copied!" : "Copy"}
                </Button>
              </div>
              <div className="pt-4 flex gap-2">
                <Button variant="outline" className="flex-1 gap-2">
                  <Share2 className="w-4 h-4" />
                  Share via WhatsApp
                </Button>
              </div>
              <p className="text-xs text-muted-foreground">
                Links are available in multiple formats. Choose the one that suits your sharing method best.
              </p>
            </CardContent>
          </Card>

          {/* Top Referrers */}
          <div className="mb-12">
            <h2 className="text-2xl font-cosmic font-bold mb-6">Top Referrers</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {topReferrers.map((referrer, idx) => (
                <Card key={referrer.id} className="border-primary/20 bg-card/50 backdrop-blur-sm">
                  <CardContent className="pt-6 text-center">
                    <div className="w-16 h-16 rounded-full bg-gradient-cosmic/20 flex items-center justify-center mx-auto mb-4">
                      <span className="text-xl font-bold">{referrer.avatar}</span>
                    </div>
                    <h3 className="font-semibold mb-1">{referrer.name}</h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      {referrer.referrals} referrals, ${referrer.earnings} earned
                    </p>
                    <Badge variant="outline">Rank #{idx + 1}</Badge>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Challenges Section */}
          <div className="mb-12">
            <h2 className="text-2xl font-cosmic font-bold mb-6">Current Challenges</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {challenges.map((challenge) => (
                <Card key={challenge.id} className="border-primary/20 bg-card/50 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-lg">{challenge.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-sm text-muted-foreground">{challenge.description}</p>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Progress</span>
                        <span className="font-semibold">{challenge.progress}%</span>
                      </div>
                      <div className="w-full bg-background rounded-full h-2">
                        <div
                          className="bg-gradient-cosmic h-2 rounded-full"
                          style={{ width: `${challenge.progress}%` }}
                        ></div>
                      </div>
                    </div>
                    <Button className="w-full gradient-cosmic text-background">
                      {challenge.reward}
                    </Button>
                    <p className="text-xs text-muted-foreground flex items-center gap-2">
                      <Calendar className="w-3 h-3" />
                      {challenge.deadline}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Recommended Challenges */}
            <h3 className="text-xl font-cosmic font-bold mb-6">Recommended Challenges</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {challenges.map((challenge) => (
                <Card key={`rec-${challenge.id}`} className="border-primary/20 bg-card/50 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-lg">{challenge.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">{challenge.description}</p>
                    <Button variant="outline" className="w-full">
                      Join Now
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Create Challenge Section */}
          <Card className="border-primary/20 bg-card/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle>Create Your Own Challenge</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-6">
                Design custom challenges for your network with specific goals, rules, and rewards. Foster community engagement and earn rewards!
              </p>
              <Button className="gradient-cosmic text-background">
                Create Challenge
              </Button>
            </CardContent>
          </Card>

          {/* Challenge Notification */}
          <div className="mt-8 p-4 bg-blue-500/10 border border-blue-400/30 rounded-lg">
            <p className="text-sm text-blue-200">
              ✨ <strong>New Challenge Alert!</strong> Refer your friends and opportunities to earn rewards! Enable notifications to receive timely information about new contests and updates.
            </p>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Referral;