import { Card, CardContent } from "@/components/ui/card";
import {
  Bed,
  Bath,
  ChefHat,
  Gamepad2,
  Sun,
  Waves,
  Flame,
  Car,
  Shield,
  Sparkles,
} from "lucide-react";
import livingRoom from "@assets/images/living-room.png";

const propertyFeatures = [
  {
    icon: Bed,
    title: "4 Bedrooms",
    description: "Spacious bedrooms with premium linens and quality mattresses",
  },
  {
    icon: Bath,
    title: "4 En-Suite Bathrooms",
    description: "Each bedroom has its own private en-suite bathroom",
  },
  {
    icon: ChefHat,
    title: "Full Kitchen",
    description: "Modern kitchen with premium appliances and cookware",
  },
  {
    icon: Gamepad2,
    title: "Pool Table",
    description: "Entertainment room with professional pool table",
  },
  {
    icon: Sun,
    title: "Solar Power",
    description: "Eco-friendly solar power system for uninterrupted electricity",
  },
  {
    icon: Waves,
    title: "Swimming Pool",
    description: "Private swimming pool for relaxation and entertainment",
  },
  {
    icon: Flame,
    title: "Two Braai Areas",
    description: "Outdoor braai facilities for traditional South African dining",
  },
  {
    icon: Flame,
    title: "Indoor Fireplace",
    description: "Cosy kaggel for warm winter evenings",
  },
  {
    icon: Car,
    title: "Parking",
    description: "Two lock-up garages plus two open parking spaces",
  },
  {
    icon: Shield,
    title: "Security",
    description: "24-hour security within the prestigious Parys Golf Estate",
  },
];

const highlights = [
  {
    icon: Shield,
    title: "Privacy & Security",
    description:
      "Nestled within the prestigious Parys Golf Estate with 24-hour security.",
  },
  {
    icon: Sparkles,
    title: "Luxury Finishes",
    description:
      "Premium linens, designer furnishings, and meticulous attention to detail.",
  },
];

export default function AboutSection() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="space-y-6">
              <div>
                <p className="text-accent text-xs font-medium tracking-[0.2em] uppercase mb-3">
                  About Le Vaal Manor
                </p>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground leading-tight">
                  Your Private Retreat on Parys Golf Estate
                </h2>
              </div>

              <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
                <p>
                  Le Vaal Manor is a distinguished luxury short-term rental
                  situated on the renowned Parys Golf Estate in the Free State
                  province of South Africa. This exclusive property offers
                  discerning guests an unparalleled experience of comfort,
                  elegance, and tranquillity.
                </p>
                <p>
                  Designed with meticulous attention to detail, the manor
                  seamlessly blends contemporary sophistication with warm,
                  inviting spaces. Floor-to-ceiling windows frame breathtaking
                  views of the manicured golf course and surrounding natural
                  beauty.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-4">
                {highlights.map((highlight) => (
                  <div
                    key={highlight.title}
                    className="flex items-start gap-3"
                    data-testid={`highlight-${highlight.title.toLowerCase().replace(/\s+/g, "-")}`}
                  >
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                      <highlight.icon className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-foreground">
                        {highlight.title}
                      </h4>
                      <p className="text-xs text-muted-foreground">
                        {highlight.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="relative">
              <div className="aspect-[4/3] rounded-lg overflow-hidden shadow-xl">
                <img
                  src={livingRoom}
                  alt="Le Vaal Manor elegant living room"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-accent/20 rounded-lg -z-10" />
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-primary/10 rounded-lg -z-10" />
            </div>
          </div>
        </div>

        <div className="mt-16 md:mt-24">
          <div className="text-center mb-10">
            <p className="text-accent text-xs font-medium tracking-[0.2em] uppercase mb-3">
              Property Details
            </p>
            <h3 className="text-xl md:text-2xl font-bold text-foreground">
              What Le Vaal Manor Offers
            </h3>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
            {propertyFeatures.map((feature, index) => (
              <Card
                key={`${feature.title}-${index}`}
                className="bg-card border-card-border hover-elevate transition-all duration-300 group"
                data-testid={`card-feature-${feature.title.toLowerCase().replace(/\s+/g, "-")}`}
              >
                <CardContent className="p-5 text-center">
                  <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                    <feature.icon className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="font-semibold text-foreground text-sm mb-1">
                    {feature.title}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
