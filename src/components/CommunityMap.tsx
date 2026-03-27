import { useEffect, useState } from "react";
import { MapContainer, TileLayer, CircleMarker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";

// Community data - simulated CLYFO users across India
const communityHubs = [
  {
    city: "New Delhi",
    lat: 28.61,
    lng: 77.21,
    users: 8420,
    transformers: 340,
    villages: 28,
    color: "#FF9933",
    gif: "https://media.giphy.com/media/3o7TKSjRrfIPjeiVyM/giphy.gif", // handshake
    tagline: "Capital consciousness hub 🏛️",
    type: "aspirant"
  },
  {
    city: "Mumbai",
    lat: 19.07,
    lng: 72.88,
    users: 12500,
    transformers: 520,
    villages: 42,
    color: "#FF9933",
    gif: "https://media.giphy.com/media/l0MYEqEzwMWFCg8rm/giphy.gif", // celebration
    tagline: "Financial capital, conscious growth 💫",
    type: "transformer"
  },
  {
    city: "Bengaluru",
    lat: 12.97,
    lng: 77.59,
    users: 9800,
    transformers: 410,
    villages: 35,
    color: "#138808",
    gif: "https://media.giphy.com/media/26ufdipQqU2lhNA4g/giphy.gif", // fist bump
    tagline: "Tech meets transformation 💻",
    type: "aspirant"
  },
  {
    city: "Hyderabad",
    lat: 17.38,
    lng: 78.47,
    users: 6700,
    transformers: 280,
    villages: 22,
    color: "#FFB347",
    gif: "https://media.giphy.com/media/3ohzdIuqJoo8QdKlnW/giphy.gif", // high five
    tagline: "City of Pearls, rising in consciousness 🌟",
    type: "aspirant"
  },
  {
    city: "Chennai",
    lat: 13.08,
    lng: 80.27,
    users: 5200,
    transformers: 195,
    villages: 18,
    color: "#138808",
    gif: "https://media.giphy.com/media/xT9IgG50Lg7rusT3aw/giphy.gif", // dancing
    tagline: "Cultural capital going conscious 🎭",
    type: "transformer"
  },
  {
    city: "Kolkata",
    lat: 22.57,
    lng: 88.36,
    users: 4800,
    transformers: 165,
    villages: 15,
    color: "#d4af37",
    gif: "https://media.giphy.com/media/3o7TKSjRrfIPjeiVyM/giphy.gif",
    tagline: "City of joy, city of wisdom 📚",
    type: "aspirant"
  },
  {
    city: "Jaipur",
    lat: 26.91,
    lng: 75.79,
    users: 3600,
    transformers: 140,
    villages: 32,
    color: "#FF9933",
    gif: "https://media.giphy.com/media/l0MYEqEzwMWFCg8rm/giphy.gif",
    tagline: "Pink City, golden future 🌅",
    type: "transformer"
  },
  {
    city: "Ahmedabad",
    lat: 23.02,
    lng: 72.58,
    users: 4200,
    transformers: 180,
    villages: 40,
    color: "#FF9933",
    gif: "https://media.giphy.com/media/26ufdipQqU2lhNA4g/giphy.gif",
    tagline: "Gujarat's conscious growth engine 🌾",
    type: "aspirant"
  },
  {
    city: "Lucknow",
    lat: 26.85,
    lng: 80.95,
    users: 3100,
    transformers: 120,
    villages: 25,
    color: "#FFB347",
    gif: "https://media.giphy.com/media/3ohzdIuqJoo8QdKlnW/giphy.gif",
    tagline: "City of Nawabs, land of awareness ✨",
    type: "aspirant"
  },
  {
    city: "Kochi",
    lat: 9.94,
    lng: 76.27,
    users: 2800,
    transformers: 110,
    villages: 14,
    color: "#138808",
    gif: "https://media.giphy.com/media/xT9IgG50Lg7rusT3aw/giphy.gif",
    tagline: "Kerala's conscious coast 🌊",
    type: "transformer"
  },
  {
    city: "Visakhapatnam",
    lat: 17.69,
    lng: 83.31,
    users: 2400,
    transformers: 95,
    villages: 18,
    color: "#138808",
    gif: "https://media.giphy.com/media/l0MYEqEzwMWFCg8rm/giphy.gif",
    tagline: "Port city rises with purpose 🚢",
    type: "aspirant"
  },
  {
    city: "Pune",
    lat: 18.52,
    lng: 73.86,
    users: 5600,
    transformers: 230,
    villages: 20,
    color: "#FFB347",
    gif: "https://media.giphy.com/media/3o7TKSjRrfIPjeiVyM/giphy.gif",
    tagline: "Oxford of the East, conscious of the future 🎓",
    type: "transformer"
  },
  {
    city: "Bhopal",
    lat: 23.26,
    lng: 77.40,
    users: 2100,
    transformers: 88,
    villages: 30,
    color: "#FFB347",
    gif: "https://media.giphy.com/media/26ufdipQqU2lhNA4g/giphy.gif",
    tagline: "City of Lakes, rippling consciousness 💧",
    type: "aspirant"
  },
  {
    city: "Guwahati",
    lat: 26.14,
    lng: 91.74,
    users: 1500,
    transformers: 60,
    villages: 22,
    color: "#138808",
    gif: "https://media.giphy.com/media/3ohzdIuqJoo8QdKlnW/giphy.gif",
    tagline: "Northeast gateway to awareness 🌿",
    type: "aspirant"
  },
];

// Component to set map view to India on load
function SetIndiaView() {
  const map = useMap();
  useEffect(() => {
    map.setView([22.5, 80], 5);
  }, [map]);
  return null;
}

const CommunityMap = () => {
  const [selected, setSelected] = useState<typeof communityHubs[0] | null>(null);
  const [userLocation, setUserLocation] = useState<[number, number] | null>(null);

  // Try to get user's real location
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => setUserLocation([pos.coords.latitude, pos.coords.longitude]),
        () => {} // silently fail
      );
    }
  }, []);

  const totalUsers = communityHubs.reduce((s, h) => s + h.users, 0);
  const totalTransformers = communityHubs.reduce((s, h) => s + h.transformers, 0);

  return (
    <div className="w-full flex flex-col gap-4">
      {/* Stats row */}
      <div className="grid grid-cols-3 gap-4">
        {[
          { val: `${(totalUsers / 1000).toFixed(0)}K+`, label: "Active Users", color: "#FF9933" },
          { val: `${totalTransformers}+`, label: "Transformers", color: "#138808" },
          { val: `${communityHubs.length}`, label: "CLYFO Cities", color: "hsl(var(--primary))" },
        ].map(s => (
          <div key={s.label} className="bg-card/60 backdrop-blur-sm rounded-xl p-4 border border-border/50 text-center">
            <div className="text-2xl font-bold font-outfit" style={{ color: s.color }}>{s.val}</div>
            <div className="text-xs text-muted-foreground mt-1">{s.label}</div>
          </div>
        ))}
      </div>

      {/* Map */}
      <div className="relative rounded-2xl overflow-hidden border border-border/50 shadow-2xl" style={{ height: "500px" }}>
        <MapContainer
          center={[22.5, 80]}
          zoom={5}
          style={{ height: "100%", width: "100%" }}
          zoomControl={true}
          scrollWheelZoom={true}
        >
          <SetIndiaView />
          
          {/* Dark styled tiles */}
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
            url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
          />

          {/* User's actual location */}
          {userLocation && (
            <CircleMarker
              center={userLocation}
              radius={10}
              pathOptions={{
                fillColor: "#ffffff",
                fillOpacity: 1,
                color: "#FF9933",
                weight: 3,
              }}
            >
              <Popup>
                <div className="text-center p-2">
                  <div className="text-lg">📍 You are here!</div>
                  <div className="text-sm mt-1 text-gray-600">Join your local CLYFO community</div>
                </div>
              </Popup>
            </CircleMarker>
          )}

          {/* City hubs */}
          {communityHubs.map((hub) => (
            <CircleMarker
              key={hub.city}
              center={[hub.lat, hub.lng]}
              radius={Math.max(8, Math.log10(hub.users) * 4)}
              pathOptions={{
                fillColor: hub.color,
                fillOpacity: 0.85,
                color: "#ffffff",
                weight: 2,
              }}
              eventHandlers={{
                click: () => setSelected(hub),
              }}
            >
              <Popup>
                <div style={{ minWidth: 220, fontFamily: "Outfit, sans-serif" }}>
                  <div className="font-bold text-lg mb-1">📍 {hub.city}</div>
                  <img
                    src={hub.gif}
                    alt="reaction"
                    style={{ width: "100%", height: 100, objectFit: "cover", borderRadius: 8, marginBottom: 8 }}
                  />
                  <p style={{ fontSize: 12, color: "#555", marginBottom: 8 }}>{hub.tagline}</p>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 6, textAlign: "center" }}>
                    <div>
                      <div style={{ fontWeight: "bold", color: hub.color, fontSize: 16 }}>{hub.users.toLocaleString()}</div>
                      <div style={{ fontSize: 10, color: "#888" }}>Users</div>
                    </div>
                    <div>
                      <div style={{ fontWeight: "bold", color: "#138808", fontSize: 16 }}>{hub.transformers}</div>
                      <div style={{ fontSize: 10, color: "#888" }}>Transformers</div>
                    </div>
                    <div>
                      <div style={{ fontWeight: "bold", color: "#FF9933", fontSize: 16 }}>{hub.villages}</div>
                      <div style={{ fontSize: 10, color: "#888" }}>Villages</div>
                    </div>
                  </div>
                  <div style={{
                    marginTop: 10,
                    padding: "6px 12px",
                    background: hub.type === "aspirant" ? "#FF993320" : "#13880820",
                    borderRadius: 20,
                    fontSize: 11,
                    textAlign: "center",
                    color: hub.type === "aspirant" ? "#FF9933" : "#138808",
                    fontWeight: 600
                  }}>
                    {hub.type === "aspirant" ? "🌱 Aspirant Hub" : "⚡ Transformer Base"}
                  </div>
                </div>
              </Popup>
            </CircleMarker>
          ))}
        </MapContainer>

        {/* Legend overlay */}
        <div className="absolute bottom-4 left-4 z-[1000] bg-background/90 backdrop-blur-sm rounded-xl p-3 border border-border/50 text-xs space-y-1">
          <div className="font-semibold text-foreground mb-2">Map Legend</div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full" style={{ background: "#FF9933" }} />
            <span className="text-muted-foreground">Aspirant Hub</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full" style={{ background: "#138808" }} />
            <span className="text-muted-foreground">Transformer Base</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full border-2 border-orange-500" style={{ background: "white" }} />
            <span className="text-muted-foreground">Your Location</span>
          </div>
          <div className="text-muted-foreground text-[10px] mt-2 border-t pt-2">
            💡 Click any dot to see community details
          </div>
        </div>
      </div>

      {/* Selected city detail card */}
      {selected && (
        <div className="bg-card/80 backdrop-blur-sm rounded-2xl border border-border/50 p-6 animate-fade-in-up">
          <div className="flex items-start gap-4">
            <img
              src={selected.gif}
              alt="community reaction"
              className="w-24 h-24 object-cover rounded-xl border border-border/50 flex-shrink-0"
            />
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <h3 className="text-xl font-bold font-outfit">{selected.city}</h3>
                <span className="text-xs px-2 py-0.5 rounded-full" style={{
                  background: selected.type === "aspirant" ? "#FF993320" : "#13880820",
                  color: selected.type === "aspirant" ? "#FF9933" : "#138808",
                  fontWeight: 600
                }}>
                  {selected.type === "aspirant" ? "🌱 Aspirant Hub" : "⚡ Transformer Base"}
                </span>
              </div>
              <p className="text-muted-foreground text-sm mb-3">{selected.tagline}</p>
              <div className="flex gap-6">
                <div><span className="font-bold text-2xl" style={{ color: selected.color }}>{selected.users.toLocaleString()}</span><div className="text-xs text-muted-foreground">Total Users</div></div>
                <div><span className="font-bold text-2xl text-green-500">{selected.transformers}</span><div className="text-xs text-muted-foreground">Transformers</div></div>
                <div><span className="font-bold text-2xl text-primary">{selected.villages}</span><div className="text-xs text-muted-foreground">Villages</div></div>
              </div>
            </div>
            <button onClick={() => setSelected(null)} className="text-muted-foreground hover:text-foreground text-xl">✕</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CommunityMap;
