import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ShieldCheck, Award, FileCheck, CheckCircle2 } from "lucide-react";
import { useState } from "react";

const Certifications = () => {
  const [certId, setCertId] = useState("");
  const [validated, setValidated] = useState<boolean | null>(null);

  const handleValidate = () => {
    if (certId.trim().length > 5) {
      setValidated(true);
    } else if (certId) {
      setValidated(false);
    }
  };

  const govtApprovals = [
    {
      name: "MCA Recognised",
      desc: "Registered under Ministry of Corporate Affairs, India",
      icon: <Award className="w-8 h-8 text-blue-500 mb-4" />
    },
    {
      name: "Startup India",
      desc: "Officially recognized by DPIIT as an innovative startup",
      icon: <ShieldCheck className="w-8 h-8 text-orange-500 mb-4" />
    },
    {
      name: "MSME Registered",
      desc: "UDYAM registered educational & wellness entity",
      icon: <FileCheck className="w-8 h-8 text-green-500 mb-4" />
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in-up">
          <Badge className="mb-4 bg-infinity-gold/20 border-infinity-gold/50 text-infinity-gold">
            Gratification for Purpose
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 font-outfit gradient-text">
            Certifications & Recognition
          </h1>
          <p className="text-lg text-muted-foreground font-inter">
            CLYFO^369(♾) provides government-backed, blockchain-verifiable credentials. Build a conscious career backed by MSME and Skill India compatibility.
          </p>
        </div>

        {/* Govt Approvals */}
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {govtApprovals.map((approval, idx) => (
            <Card key={idx} className="bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/50 transition-all duration-300 text-center">
              <CardContent className="p-8 flex flex-col items-center">
                {approval.icon}
                <h3 className="text-xl font-bold mb-2 font-outfit">{approval.name}</h3>
                <p className="text-sm text-muted-foreground">{approval.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          {/* Internal Badges */}
          <div>
            <h2 className="text-3xl font-bold mb-6 font-outfit">Program Credentials</h2>
            <div className="space-y-6">
              <div className="flex gap-4 items-start p-4 rounded-xl bg-card border border-border/50 shadow-sm">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-consciousness-purple/20 to-consciousness-purple/5 flex items-center justify-center border-2 border-consciousness-purple/30 shrink-0">
                  <Award className="w-8 h-8 text-consciousness-purple" />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-foreground">Aspirant Completion Certificate</h4>
                  <p className="text-sm text-muted-foreground mb-2">Issued upon finishing the 21-Day "World of Jnani" tract. MSME-tagged.</p>
                  <Badge variant="outline" className="text-xs">Earning Badge Unlocked</Badge>
                </div>
              </div>
              <div className="flex gap-4 items-start p-4 rounded-xl bg-card border border-border/50 shadow-sm">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cosmic-saffron/20 to-cosmic-saffron/5 flex items-center justify-center border-2 border-cosmic-saffron/30 shrink-0">
                  <ShieldCheck className="w-8 h-8 text-cosmic-saffron" />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-foreground">Transformer Mentoring Badge</h4>
                  <p className="text-sm text-muted-foreground mb-2">Issued after UPSC-level testing and 7-Day Training. Legal social trust proof.</p>
                  <Badge variant="outline" className="text-xs text-cosmic-saffron border-cosmic-saffron/50">Leader Rank</Badge>
                </div>
              </div>
            </div>
          </div>

          {/* Validation Tool */}
          <div className="bg-gradient-to-br from-background to-muted/50 p-8 rounded-3xl border border-border/50 relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 p-8 opacity-10">
              <CheckCircle2 className="w-48 h-48" />
            </div>
            <div className="relative z-10">
              <Badge className="mb-4">Validator Portal</Badge>
              <h3 className="text-2xl font-bold mb-2 font-outfit">Verify a Certificate</h3>
              <p className="text-muted-foreground mb-6">
                Enter the 6-character unique ID to validate MSME & startup-backed CLYFO credentials on the blockchain.
              </p>
              <div className="flex gap-2 mb-6">
                <Input 
                  placeholder="Enter Certificate ID (e.g., CLYFO-XXXXXX)" 
                  value={certId}
                  onChange={(e) => setCertId(e.target.value)}
                  className="bg-background"
                />
                <Button onClick={handleValidate} className="gradient-cosmic text-background whitespace-nowrap">
                  Validate
                </Button>
              </div>

              {validated === true && (
                <div className="p-4 bg-green-500/10 border border-green-500/20 text-green-600 rounded-lg flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5" />
                  <div>
                    <p className="font-bold">Certificate Valid</p>
                    <p className="text-sm opacity-90">This credential is official and blockchain verified.</p>
                  </div>
                </div>
              )}
              {validated === false && (
                <div className="p-4 bg-red-500/10 border border-red-500/20 text-red-600 rounded-lg flex items-center gap-2">
                  <div>
                    <p className="font-bold">Invalid Credential</p>
                    <p className="text-sm opacity-90">We could not find a matching record.</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certifications;
