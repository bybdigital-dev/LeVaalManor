import { Card, CardContent } from "@/components/ui/card";
import { Shield, Sparkles, MapPin, Heart } from "lucide-react";
import livingRoom from "@assets/images/living-room.png";

const features = [
  {
    icon: Shield,
    title: "Privacy & Security",
    description:
      "Nestled within the prestigious Parys Golf Estate, Le Vaal Manor offers unparalleled privacy with 24-hour security.",
  },
  {
    icon: Sparkles,
    title: "Luxury Finishes",
    description:
      "Every detail has been carefully curated, from premium linens to designer furnishings, ensuring an exceptional stay.",
  },
  {
    icon: MapPin,
    title: "Prime Location",
    description:
      "Enjoy direct access to world-class golfing facilities while being just minutes from Parys town centre.",
  },
  {
    icon: Heart,
    title: "Personal Touch",
    description:
      "We pride ourselves on providing a personalised experience, catering to your unique needs and preferences.",
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
                <p className="text-accent font-body text-xs font-medium tracking-[0.2em] uppercase mb-3">
                  About Le Vaal Manor
                </p>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground font-serif leading-tight">
                  Your Private Retreat on Parys Golf Estate
                </h2>
              </div>

              <div className="space-y-4 font-body text-sm text-muted-foreground leading-relaxed">
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
                  beauty, creating an atmosphere of serene luxury.
                </p>
                <p>
                  Whether you're seeking a romantic getaway, a family vacation,
                  or a peaceful retreat from the everyday, Le Vaal Manor
                  provides the perfect setting for creating lasting memories.
                </p>
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
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature) => (
              <Card
                key={feature.title}
                className="bg-card border-card-border hover-elevate transition-all duration-300 group"
                data-testid={`card-feature-${feature.title.toLowerCase().replace(/\s+/g, "-")}`}
              >
                <CardContent className="p-6 text-center">
                  <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                    <feature.icon className="w-7 h-7 text-accent" />
                  </div>
                  <h3 className="font-semibold text-foreground font-serif text-base mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-xs text-muted-foreground font-body leading-relaxed">
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
