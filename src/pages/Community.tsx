import CommunityMap from "@/components/CommunityMap";
import { Badge } from "@/components/ui/badge";
import { MapPin } from "lucide-react";

const Community = () => {
  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 animate-fade-in-up">
          <Badge className="mb-4 bg-cosmic-saffron/20 border-cosmic-saffron/50 text-cosmic-saffron">
            Live Community Map
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-outfit gradient-text leading-tight">
            CLYFO Across Bharat
          </h1>
          <p className="text-lg text-muted-foreground font-inter">
            Explore where consciousness is rising. Click any city dot to meet the community, see impact numbers, and celebrate together.
          </p>
          <div className="flex items-center justify-center gap-2 mt-4 text-sm text-primary">
            <MapPin className="w-4 h-4 animate-bounce" />
            <span>Allow location access to see your position on the map</span>
          </div>
        </div>

        {/* Map */}
        <CommunityMap />
      </div>
    </div>
  );
};

export default Community;
