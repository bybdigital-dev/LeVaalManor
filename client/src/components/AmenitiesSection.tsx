import { Card, CardContent } from "@/components/ui/card";
import {
  Waves,
  Flame,
  Sun,
  ChefHat,
  Wifi,
  Tv,
  Wind,
  Coffee,
  Flag,
  Mountain,
  Ship,
  TreePine,
  Eye,
  UtensilsCrossed,
  MapPin,
} from "lucide-react";

const propertyAmenities = [
  {
    icon: Waves,
    title: "Swimming Pool",
    description: "Private pool for relaxation and entertainment",
  },
  {
    icon: Flame,
    title: "Two Braai Areas",
    description: "Outdoor braai facilities with seating and dining space",
  },
  {
    icon: Flame,
    title: "Indoor Fireplace",
    description: "Cosy kaggel for warm evenings",
  },
  {
    icon: Sun,
    title: "Solar Power",
    description: "Uninterrupted electricity supply",
  },
  {
    icon: ChefHat,
    title: "Full Kitchen",
    description: "Modern appliances and cookware",
  },
  {
    icon: Wifi,
    title: "Free Wi-Fi",
    description: "High-speed fibre internet throughout",
  },
  {
    icon: Tv,
    title: "Entertainment",
    description: "Smart TV with streaming services",
  },
  {
    icon: Wind,
    title: "Air Conditioning",
    description: "Climate control in all rooms",
  },
  {
    icon: Coffee,
    title: "Welcome Amenities",
    description: "Coffee, tea, and refreshments",
  },
];

const localActivities = [
  {
    icon: Ship,
    title: "River Activities",
    description:
      "Enjoy the Vaal River with boat cruises, kayaking, fishing, and riverside picnics just minutes away.",
  },
  {
    icon: Flag,
    title: "Golf",
    description:
      "Play on the prestigious Parys Golf Estate course or explore other nearby golf clubs in the area.",
  },
  {
    icon: TreePine,
    title: "Hiking & Nature",
    description:
      "Discover scenic hiking trails, nature reserves, and beautiful landscapes surrounding Parys.",
  },
  {
    icon: Eye,
    title: "Sightseeing",
    description:
      "Visit the Vredefort Dome (UNESCO World Heritage Site), antique shops, and art galleries in town.",
  },
  {
    icon: Mountain,
    title: "Adventure",
    description:
      "Experience quad biking, hot air ballooning, and other outdoor adventures available locally.",
  },
];

const restaurants = [
  {
    name: "O's Restaurant",
    type: "Fine Dining",
    description: "Upmarket dining with river views",
  },
  {
    name: "The Old Gaol Café",
    type: "Café & Bistro",
    description: "Charming café in a historic building",
  },
  {
    name: "Cobblestones",
    type: "Restaurant & Bar",
    description: "Popular spot for casual dining",
  },
  {
    name: "Die Koei se Gras",
    type: "Country Kitchen",
    description: "Traditional South African cuisine",
  },
];

export default function AmenitiesSection() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-accent text-xs font-medium tracking-[0.2em] uppercase mb-3">
            Property Features
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">
            Amenities & Services
          </h2>
          <p className="mt-4 text-sm text-muted-foreground max-w-2xl mx-auto">
            Everything you need for a comfortable and memorable stay
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {propertyAmenities.map((amenity) => (
            <Card
              key={amenity.title}
              className="bg-card border-card-border hover-elevate transition-all duration-300 group"
              data-testid={`card-amenity-${amenity.title.toLowerCase().replace(/\s+/g, "-")}`}
            >
              <CardContent className="p-5 flex items-start gap-4">
                <div className="flex-shrink-0 w-11 h-11 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                  <amenity.icon className="w-5 h-5 text-accent" />
                </div>
                <div className="min-w-0">
                  <h3 className="font-semibold text-foreground text-sm mb-1">
                    {amenity.title}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {amenity.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-20 md:mt-28">
          <div className="text-center mb-12">
            <p className="text-accent text-xs font-medium tracking-[0.2em] uppercase mb-3">
              Explore Parys
            </p>
            <h3 className="text-xl md:text-2xl font-bold text-foreground">
              Local Activities & Attractions
            </h3>
            <p className="mt-4 text-sm text-muted-foreground max-w-2xl mx-auto">
              Discover the charm of Parys and the surrounding Free State region
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {localActivities.map((activity) => (
              <Card
                key={activity.title}
                className="bg-card border-card-border hover-elevate transition-all duration-300 group"
                data-testid={`card-activity-${activity.title.toLowerCase().replace(/\s+/g, "-")}`}
              >
                <CardContent className="p-6">
                  <div className="w-12 h-12 mb-4 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                    <activity.icon className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="font-semibold text-foreground text-base mb-2">
                    {activity.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {activity.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="mt-16 md:mt-20">
          <div className="text-center mb-10">
            <p className="text-accent text-xs font-medium tracking-[0.2em] uppercase mb-3">
              Dining Out
            </p>
            <h3 className="text-xl md:text-2xl font-bold text-foreground">
              Recommended Restaurants & Cafés
            </h3>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {restaurants.map((restaurant) => (
              <Card
                key={restaurant.name}
                className="bg-card border-card-border hover-elevate transition-all duration-300"
                data-testid={`card-restaurant-${restaurant.name.toLowerCase().replace(/\s+/g, "-")}`}
              >
                <CardContent className="p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-9 h-9 rounded-full bg-accent/10 flex items-center justify-center">
                      <UtensilsCrossed className="w-4 h-4 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground text-sm">
                        {restaurant.name}
                      </h4>
                      <p className="text-xs text-accent">{restaurant.type}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <MapPin className="w-3 h-3 text-muted-foreground mt-0.5 flex-shrink-0" />
                    <p className="text-xs text-muted-foreground">
                      {restaurant.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
