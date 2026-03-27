import { Brain, Heart, Leaf, Globe, Cpu, DollarSign, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Send } from "lucide-react";
import { Link } from "react-router-dom";
import ClyfoLogo from "@/components/ClyfoLogo";

const Footer = () => {
  const dimensions = [
    { icon: Brain, label: "Psychological", color: "cosmic-saffron" },
    { icon: Heart, label: "Spiritual", color: "consciousness-purple" },
    { icon: Leaf, label: "Physical", color: "cosmic-green" },
    { icon: Globe, label: "Environmental", color: "infinity-gold" },
    { icon: Cpu, label: "Technological", color: "cosmic-saffron" },
    { icon: DollarSign, label: "Financial", color: "cosmic-green" }
  ];

  return (
    <footer className="relative z-10 bg-background border-t border-primary/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 py-12 md:py-20 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Company Info */}
        <div className="space-y-6">
          <div className="flex items-center gap-2">
            <ClyfoLogo className="h-12 w-auto" />
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed">
              Elevating human consciousness through the 3C-6D-9A infinity looping framework. Where enlightenment meets employment.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 rounded-full bg-card border border-primary/10 hover:bg-primary/5 transition-colors">
                <Facebook className="w-4 h-4 text-primary" />
              </a>
              <a href="#" className="p-2 rounded-full bg-card border border-primary/10 hover:bg-primary/5 transition-colors">
                <Twitter className="w-4 h-4 text-primary" />
              </a>
              <a href="#" className="p-2 rounded-full bg-card border border-primary/10 hover:bg-primary/5 transition-colors">
                <Instagram className="w-4 h-4 text-primary" />
              </a>
              <a href="#" className="p-2 rounded-full bg-card border border-primary/10 hover:bg-primary/5 transition-colors">
                <Linkedin className="w-4 h-4 text-primary" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-cosmic text-sm font-bold uppercase tracking-wider mb-6">Quick Links</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li><Link to="/about" className="hover:text-primary transition-colors">Our Vision</Link></li>
              <li><Link to="/team" className="hover:text-primary transition-colors">Our Team</Link></li>
              <li><Link to="/events" className="hover:text-primary transition-colors">Events & Workshops</Link></li>
              <li><Link to="/certifications" className="hover:text-primary transition-colors">Certifications</Link></li>
              <li><Link to="/testimonials" className="hover:text-primary transition-colors">Success Stories</Link></li>
              <li><Link to="/movement" className="hover:text-primary transition-colors">Join the Movement</Link></li>
            </ul>
          </div>

          {/* Programmes */}
          <div>
            <h4 className="font-cosmic text-sm font-bold uppercase tracking-wider mb-6">Programmes</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li><Link to="/programmes" className="hover:text-primary transition-colors">Aspirant Journey</Link></li>
              <li><Link to="/programmes" className="hover:text-primary transition-colors">Transformer Path</Link></li>
              <li><Link to="/programmes" className="hover:text-primary transition-colors">21-Day Transformation</Link></li>
              <li><Link to="/programmes" className="hover:text-primary transition-colors">Community Mentoring</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="font-cosmic text-sm font-bold uppercase tracking-wider mb-6">Contact Us</h4>
            <div className="space-y-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-primary" />
                <span>support@clyfo.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-primary" />
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-primary" />
                <span>Viksit Bharat Hub, Hyderabad, India</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
          <p>© 2026 CLYFO^369(♾). All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-primary transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
