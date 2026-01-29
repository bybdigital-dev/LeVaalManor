import { Card, CardContent } from "@/components/ui/card";
import {
  Car,
  Flag,
  Flame,
  Wifi,
  UtensilsCrossed,
  Tv,
  Wind,
  Bed,
  Bath,
  Mountain,
  Lock,
  Coffee,
} from "lucide-react";

const amenities = [
  {
    icon: Lock,
    title: "Secure Parking",
    description: "Private covered parking within the secure estate grounds",
  },
  {
    icon: Flag,
    title: "Golf Estate Access",
    description: "Direct access to Parys Golf Estate's world-class facilities",
  },
  {
    icon: Flame,
    title: "Outdoor Braai Area",
    description: "Fully equipped braai with outdoor dining and lounging space",
  },
  {
    icon: Wifi,
    title: "Free High-Speed Wi-Fi",
    description: "Complimentary fibre internet throughout the property",
  },
  {
    icon: UtensilsCrossed,
    title: "Self-Catering Kitchen",
    description: "Modern kitchen with premium appliances and cookware",
  },
  {
    icon: Tv,
    title: "Entertainment System",
    description: "Smart TV with streaming services and sound system",
  },
  {
    icon: Wind,
    title: "Air Conditioning",
    description: "Climate control in all bedrooms and living areas",
  },
  {
    icon: Bed,
    title: "Premium Bedding",
    description: "Luxury linens and quality mattresses for restful sleep",
  },
  {
    icon: Bath,
    title: "En-Suite Bathrooms",
    description: "Private bathrooms with premium fixtures and toiletries",
  },
  {
    icon: Mountain,
    title: "Scenic Views",
    description: "Panoramic views of the golf course and natural landscape",
  },
  {
    icon: Coffee,
    title: "Welcome Amenities",
    description: "Complimentary coffee, tea, and welcome refreshments",
  },
  {
    icon: Car,
    title: "Guest Parking",
    description: "Additional parking available for visiting guests",
  },
];

export default function AmenitiesSection() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-accent font-body text-xs font-medium tracking-[0.2em] uppercase mb-3">
            Property Features
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground font-serif">
            Amenities & Services
          </h2>
          <p className="mt-4 text-sm text-muted-foreground font-body max-w-2xl mx-auto">
            Everything you need for a comfortable and memorable stay
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
          {amenities.map((amenity) => (
            <Card
              key={amenity.title}
              className="bg-card border-card-border hover-elevate transition-all duration-300 group"
              data-testid={`card-amenity-${amenity.title.toLowerCase().replace(/\s+/g, "-")}`}
            >
              <CardContent className="p-5 flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                  <amenity.icon className="w-6 h-6 text-accent" />
                </div>
                <div className="min-w-0">
                  <h3 className="font-semibold text-foreground font-serif text-sm mb-1">
                    {amenity.title}
                  </h3>
                  <p className="text-xs text-muted-foreground font-body leading-relaxed">
                    {amenity.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
