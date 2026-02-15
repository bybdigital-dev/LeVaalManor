import { Card, CardContent } from "@/components/ui/card";
import {
  Ship,
  Flag,
  TreePine,
  Eye,
  Mountain,
  UtensilsCrossed,
  MapPin,
} from "lucide-react"; // Make sure Padel, Squash, TennisBall are valid icons; otherwise replace with your preferred icons

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
  {
    icon: Flag,
    title: "Tennis",
    description:
      "Enjoy the tennis courts on the Parys Golf Estate for casual or competitive play.",
  },
  {
    icon: Flag,
    title: "Squash",
    description:
      "Challenge your friends on the estate’s squash courts and enjoy a fun workout.",
  },
  {
    icon: Flag,
    title: "Padel",
    description:
      "Try the growing sport of padel on the estate’s professional courts.",
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
  {
    name: "Riverbank Deli",
    type: "Café",
    description: "Light meals, coffee, and pastries by the river",
  },
  {
    name: "Estate Bistro",
    type: "Bistro",
    description: "Casual dining with local ingredients and wines",
  },
  {
    name: "The Green Pepper",
    type: "Restaurant & Bar",
    description: "Casual, family-friendly with a contemporary menu",
  },
  {
    name: "Sunset Lounge",
    type: "Bar & Café",
    description: "Relax with drinks and tapas while enjoying sunset views",
  },
];

export default function AmenitiesSection() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        {/* LOCAL ACTIVITIES */}
        <div className="mt-0 md:mt-0">
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

        {/* RESTAURANTS */}
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
