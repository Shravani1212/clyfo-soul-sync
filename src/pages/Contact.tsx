import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  MessageCircle, 
  Send,
  Globe,
  Heart,
  Users,
  Zap
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import cosmicBg from "@/assets/cosmic-bg.jpg";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    inquiryType: "general"
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // For AI email functionality, user needs Supabase integration
    toast({
      title: "Message Received!",
      description: "Thank you for reaching out. Our consciousness team will connect with you within 24 hours.",
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
      inquiryType: "general"
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Headquarters",
      info: "Hyderabad, Telangana, India",
      subInfo: "Expanding across Andhra Pradesh & Telangana"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone Support",
      info: "+91 CLYFO-HELP",
      subInfo: "24/7 Consciousness Support"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Portal",
      info: "connect@clyfo369.com",
      subInfo: "Response within 24 hours"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Operating Hours",
      info: "Always Available",
      subInfo: "Consciousness never sleeps"
    }
  ];

  const inquiryTypes = [
    { value: "general", label: "General Inquiry", icon: <MessageCircle /> },
    { value: "aspirant", label: "Aspirant Program", icon: <Users /> },
    { value: "transformer", label: "Transformer Program", icon: <Heart /> },
    { value: "partnership", label: "Partnership", icon: <Globe /> },
    { value: "support", label: "Technical Support", icon: <Zap /> }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section 
        className="relative py-32 px-4 text-center overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8)), url(${cosmicBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 animate-consciousness-flow opacity-20">
          <div className="w-full h-full bg-gradient-cosmic opacity-30"></div>
        </div>
        
        <div className="relative max-w-4xl mx-auto animate-fade-in-up">
          <Badge className="mb-6 text-lg px-6 py-2 gradient-infinity">
            24/7 Conscious Connection
          </Badge>
          <h1 className="text-5xl md:text-7xl font-cosmic font-bold mb-8 gradient-cosmic bg-clip-text text-transparent">
            Connect With Us
          </h1>
          <p className="text-xl md:text-2xl mb-12 text-muted-foreground leading-relaxed">
            Every question is a step towards consciousness<br/>
            <span className="text-primary font-medium">We're here to guide your journey</span>
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="shadow-consciousness animate-fade-in-up">
              <CardHeader>
                <CardTitle className="text-3xl font-cosmic flex items-center gap-3">
                  <Send className="w-8 h-8 text-primary" />
                  Send Your Message
                </CardTitle>
                <p className="text-muted-foreground">
                  Share your thoughts, questions, or consciousness insights with our team
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Inquiry Type Selection */}
                  <div className="space-y-3">
                    <Label>What can we help you with?</Label>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      {inquiryTypes.map((type) => (
                        <Button
                          key={type.value}
                          type="button"
                          variant={formData.inquiryType === type.value ? "default" : "outline"}
                          className={`h-auto p-3 flex flex-col items-center gap-2 ${
                            formData.inquiryType === type.value ? "gradient-cosmic text-background" : ""
                          }`}
                          onClick={() => setFormData(prev => ({ ...prev, inquiryType: type.value }))}
                        >
                          {type.icon}
                          <span className="text-xs">{type.label}</span>
                        </Button>
                      ))}
                    </div>
                  </div>

                  {/* Personal Information */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your conscious name"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 Your number"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject *</Label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="Brief subject line"
                        required
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div className="space-y-2">
                    <Label htmlFor="message">Your Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Share your thoughts, questions, or consciousness insights..."
                      rows={6}
                      required
                    />
                  </div>

                  <Button type="submit" className="w-full gradient-cosmic text-background font-medium shadow-cosmic">
                    Send Message to CLYFO<sup>369</sup>
                    <Send className="w-4 h-4 ml-2" />
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8 animate-fade-in-up delay-300">
              {/* Contact Cards */}
              <div className="grid gap-6">
                {contactInfo.map((contact, index) => (
                  <Card key={index} className="group hover:shadow-cosmic transition-all duration-500">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="text-primary group-hover:animate-infinity-pulse">
                          {contact.icon}
                        </div>
                        <div>
                          <h3 className="font-bold text-lg mb-1">{contact.title}</h3>
                          <p className="font-medium text-primary">{contact.info}</p>
                          <p className="text-sm text-muted-foreground">{contact.subInfo}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Quick Connect */}
              <Card className="gradient-consciousness border-none">
                <CardContent className="p-8 text-center">
                  <h3 className="text-2xl font-cosmic font-bold mb-4">Quick Connect</h3>
                  <p className="mb-6 text-muted-foreground">
                    Join our conscious community for instant updates and support
                  </p>
                  <div className="flex flex-col gap-3">
                    <Button variant="outline" className="bg-background/10 backdrop-blur-sm border-white/20 hover:bg-background/20">
                      <MessageCircle className="w-4 h-4 mr-2" />
                      WhatsApp Community
                    </Button>
                    <Button variant="outline" className="bg-background/10 backdrop-blur-sm border-white/20 hover:bg-background/20">
                      <Send className="w-4 h-4 mr-2" />
                      Telegram Channel
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Office Hours */}
              <Card className="border-primary/20">
                <CardContent className="p-6">
                  <h3 className="text-xl font-cosmic font-bold mb-4 flex items-center gap-2">
                    <Clock className="w-5 h-5 text-primary" />
                    Consciousness Support Hours
                  </h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span>Monday - Friday</span>
                      <span className="font-medium">24/7 Online</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Weekends</span>
                      <span className="font-medium">24/7 Online</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Emergency Support</span>
                      <span className="font-medium text-primary">Always Available</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-cosmic font-bold mb-12 animate-fade-in-up">
            Frequently Asked Questions
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                q: "How do I choose between Aspirant and Transformer programs?",
                a: "Take our consciousness assessment or book a free consultation call to discover your path."
              },
              {
                q: "Is CLYFO available in regional languages?",
                a: "Yes! We offer content in Telugu, Hindi, and English with more languages coming soon."
              },
              {
                q: "What makes CLYFO different from other ed-tech platforms?",
                a: "We integrate ancient consciousness wisdom with modern technology for holistic human development."
              },
              {
                q: "How can I become a CLYFO partner or trainer?",
                a: "Contact us with your background and vision. We're always looking for conscious leaders."
              }
            ].map((faq, index) => (
              <Card key={index} className="text-left hover:shadow-cosmic transition-all duration-500 animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
                <CardContent className="p-6">
                  <h3 className="font-bold mb-3">{faq.q}</h3>
                  <p className="text-muted-foreground">{faq.a}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Map & Location */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-cosmic font-bold mb-12 animate-fade-in-up">
            Our Consciousness Centers
          </h2>
          
          <Card className="shadow-consciousness animate-fade-in-up delay-300">
            <CardContent className="p-8">
              <div className="aspect-video bg-gradient-cosmic rounded-lg flex items-center justify-center mb-6">
                <div className="text-center text-background">
                  <MapPin className="w-16 h-16 mx-auto mb-4 animate-infinity-pulse" />
                  <h3 className="text-2xl font-cosmic font-bold mb-2">Telangana & Andhra Pradesh</h3>
                  <p className="text-lg">Expanding Across India & Beyond</p>
                </div>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div>
                  <h4 className="font-bold text-lg mb-2">Current Reach</h4>
                  <p className="text-3xl font-cosmic font-bold text-primary mb-2">50+</p>
                  <p className="text-muted-foreground">Districts Covered</p>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2">Active Centers</h4>
                  <p className="text-3xl font-cosmic font-bold text-primary mb-2">100+</p>
                  <p className="text-muted-foreground">Community Hubs</p>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2">Vision 2047</h4>
                  <p className="text-3xl font-cosmic font-bold text-primary mb-2">∞</p>
                  <p className="text-muted-foreground">Global Consciousness</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Contact;