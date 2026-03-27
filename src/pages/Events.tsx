import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Video, Users, ArrowRight } from "lucide-react";

const Events = () => {
  const upcomingEvents = [
    {
      id: 1,
      title: "Village Transformation Bootcamp",
      date: "Oct 15, 2026",
      type: "Offline",
      location: "Medak District, Telangana",
      category: "Transformers",
      image: "https://images.unsplash.com/photo-1596422846543-75c6fc19a8bc?auto=format&fit=crop&q=80",
      isFree: true
    },
    {
      id: 2,
      title: "21-Day Awakening Series Kickoff",
      date: "Oct 18, 2026",
      type: "Online",
      location: "Zoom & YouTube Live",
      category: "Aspirants",
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80",
      isFree: false
    },
    {
      id: 3,
      title: "Conscious Parenting Workshop",
      date: "Oct 22, 2026",
      type: "Hybrid",
      location: "Hyderabad Campus + Zoom",
      category: "Family",
      image: "https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&q=80",
      isFree: false
    },
    {
      id: 4,
      title: "Digital Detox Eco-Retreat",
      date: "Nov 01, 2026",
      type: "Offline",
      location: "Araku Valley, AP",
      category: "Youth",
      image: "https://images.unsplash.com/photo-1473170611423-22489201d919?auto=format&fit=crop&q=80",
      isFree: false
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-16 relative">
      {/* Background Graphic */}
      <div className="fixed inset-0 -z-20 opacity-10 dark:opacity-5">
        <img 
          src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80" 
          alt="Map" 
          className="w-full h-full object-cover grayscale mix-blend-luminosity"
        />
        <div className="absolute inset-0 bg-background/90 backdrop-blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in-up">
          <Badge className="mb-4 bg-consciousness-purple/20 border-consciousness-purple/50 text-consciousness-purple">
            Real World Roots
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 font-outfit gradient-text">
            Live Workshops & Events
          </h1>
          <p className="text-lg text-muted-foreground font-inter">
            Join the movement. Participate in online webinars or visit our physical transformation centers across villages and cities in Bharat.
          </p>
        </div>

        {/* Action Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center bg-card/60 backdrop-blur-md p-4 rounded-2xl border border-border/50 mb-12 shadow-lg">
          <div className="flex gap-2 w-full md:w-auto overflow-x-auto pb-2 md:pb-0 mb-4 md:mb-0">
             <Button variant="secondary" className="whitespace-nowrap rounded-full">All Events</Button>
             <Button variant="ghost" className="whitespace-nowrap rounded-full">Online Seminars</Button>
             <Button variant="ghost" className="whitespace-nowrap rounded-full">Offline Camps</Button>
             <Button variant="ghost" className="whitespace-nowrap rounded-full">Free</Button>
          </div>
          <Button className="w-full md:w-auto gradient-cosmic text-background rounded-full">
            Host in My Area / Village
          </Button>
        </div>

        {/* Event Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16">
          {upcomingEvents.map((event) => (
            <Card key={event.id} className="overflow-hidden bg-card/80 backdrop-blur-sm border-primary/20 hover:border-primary/50 transition-all duration-300 group flex flex-col sm:flex-row">
              <div className="sm:w-2/5 h-48 sm:h-auto overflow-hidden relative">
                <img 
                  src={event.image} 
                  alt={event.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-2 left-2 flex flex-col gap-2">
                  <Badge className="bg-background/90 text-foreground backdrop-blur-md border-0">{event.category}</Badge>
                  {event.isFree && <Badge className="bg-green-500 text-white border-0">Free</Badge>}
                </div>
              </div>
              <CardContent className="p-6 sm:w-3/5 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-sm text-cosmic-saffron font-semibold mb-2">
                    <Calendar className="w-4 h-4" />
                    <span>{event.date}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2 font-outfit leading-tight group-hover:text-primary transition-colors">
                    {event.title}
                  </h3>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      {event.type === "Online" ? <Video className="w-4 h-4" /> : <MapPin className="w-4 h-4" />}
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Users className="w-4 h-4" />
                      <span>{event.type} Session</span>
                    </div>
                  </div>
                </div>
                
                <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                  Register Now <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Social Feeds & Communities */}
        <div className="bg-gradient-to-r from-background via-muted/50 to-background border-y border-border/50 py-12 text-center">
           <h2 className="text-2xl font-bold mb-6 font-outfit">Join Our Daily Community Feeds</h2>
           <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
             Get systematic growth analysis, success story explorations, and instant updates on newly scheduled workshops.
           </p>
           <div className="flex flex-wrap justify-center gap-4">
             <Button className="bg-[#0088cc] hover:bg-[#0088cc]/90 text-white">Join Telegram Group</Button>
             <Button className="bg-[#25D366] hover:bg-[#25D366]/90 text-white">WhatsApp Updates</Button>
             <Button className="bg-[#1877F2] hover:bg-[#1877F2]/90 text-white">Facebook Community</Button>
           </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
