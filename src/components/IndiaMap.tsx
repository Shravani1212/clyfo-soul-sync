import { useEffect, useState } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";

// Using Natural Earth 110m scale TopoJSON - India will be extracted from this
// Focus: zoom into India's bounding box
const GEO_URL =
  "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

// India's ISO numeric code is 356
const INDIA_CODE = "356";

const cities = [
  { name: "New Delhi", coordinates: [77.21, 28.61] as [number, number], color: "#FF9933" },
  { name: "Mumbai", coordinates: [72.88, 19.07] as [number, number], color: "#FF9933" },
  { name: "Bengaluru", coordinates: [77.59, 12.97] as [number, number], color: "#138808" },
  { name: "Hyderabad", coordinates: [78.47, 17.38] as [number, number], color: "#FFB347" },
  { name: "Chennai", coordinates: [80.27, 13.08] as [number, number], color: "#138808" },
  { name: "Kolkata", coordinates: [88.36, 22.57] as [number, number], color: "#d4af37" },
  { name: "Ahmedabad", coordinates: [72.58, 23.02] as [number, number], color: "#FF9933" },
  { name: "Jaipur", coordinates: [75.79, 26.91] as [number, number], color: "#FF9933" },
  { name: "Lucknow", coordinates: [80.95, 26.85] as [number, number], color: "#FFB347" },
  { name: "Kochi", coordinates: [76.27, 9.94] as [number, number], color: "#138808" },
  { name: "Visakhapatnam", coordinates: [83.31, 17.69] as [number, number], color: "#138808" },
  { name: "Chandigarh", coordinates: [76.79, 30.73] as [number, number], color: "#FFB347" },
];

const IndiaMap = () => {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setActive((p) => (p + 1) % cities.length), 1500);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="relative w-full flex flex-col items-center justify-center gap-4">
      <ComposableMap
        projection="geoMercator"
        projectionConfig={{
          center: [82, 22],   // Center on India
          scale: 900,         // Zoom level — higher = more zoomed in
        }}
        width={400}
        height={480}
        style={{ width: "100%", maxWidth: 320, height: "auto" }}
      >
        <Geographies geography={GEO_URL}>
          {({ geographies }) =>
            geographies
              .filter((geo) => geo.id === INDIA_CODE)
              .map((geo) => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  style={{
                    default: {
                      fill: "hsl(var(--primary) / 0.18)",
                      stroke: "hsl(var(--primary))",
                      strokeWidth: 1.5,
                      outline: "none",
                    },
                    hover: {
                      fill: "hsl(var(--primary) / 0.28)",
                      stroke: "hsl(var(--primary))",
                      strokeWidth: 1.5,
                      outline: "none",
                    },
                    pressed: { outline: "none" },
                  }}
                />
              ))
          }
        </Geographies>

        {/* City Markers */}
        {cities.map((city, i) => {
          const isActive = active === i;
          return (
            <Marker key={city.name} coordinates={city.coordinates}>
              {/* Ripple rings */}
              {isActive && (
                <>
                  <circle r={16} fill="none" stroke={city.color} strokeWidth={0.8}
                    opacity={0.5} style={{ animation: "r1 1.5s ease-out infinite" }} />
                  <circle r={9} fill="none" stroke={city.color} strokeWidth={1}
                    opacity={0.7} style={{ animation: "r2 1.5s ease-out 0.35s infinite" }} />
                </>
              )}
              <circle
                r={isActive ? 6 : 3.5}
                fill={city.color}
                stroke="white"
                strokeWidth={isActive ? 1.5 : 0.5}
                opacity={isActive ? 1 : 0.6}
                style={{
                  filter: isActive ? `drop-shadow(0 0 6px ${city.color})` : "none",
                  transition: "all 0.4s ease",
                }}
              />
              {isActive && (
                <text
                  y={-12}
                  textAnchor="middle"
                  fontSize={7}
                  fontWeight="bold"
                  fontFamily="Outfit, sans-serif"
                  fill={city.color}
                  style={{ pointerEvents: "none" }}
                >
                  {city.name}
                </text>
              )}
            </Marker>
          );
        })}
      </ComposableMap>

      {/* Impact Stats */}
      <div className="flex justify-center gap-8">
        {[
          { val: "28+", label: "States", color: "#FF9933" },
          { val: "150+", label: "Villages", color: "hsl(var(--primary))" },
          { val: "50K+", label: "Rising", color: "#138808" },
        ].map((s) => (
          <div key={s.label} className="text-center">
            <div className="font-bold text-base font-outfit" style={{ color: s.color }}>{s.val}</div>
            <div className="text-[11px] text-muted-foreground">{s.label}</div>
          </div>
        ))}
      </div>

      <style>{`
        @keyframes r1 { 0% { r:5px; opacity:0.7; } 100% { r:22px; opacity:0; } }
        @keyframes r2 { 0% { r:3px; opacity:0.5; } 100% { r:12px; opacity:0; } }
      `}</style>
    </div>
  );
};

export default IndiaMap;
