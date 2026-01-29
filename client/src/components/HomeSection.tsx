import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Quote, Star } from "lucide-react";
import heroImage from "@assets/images/hero-manor.png";
import type { Section } from "@/App";

interface HomeSectionProps {
  onNavigate: (section: Section) => void;
}

const testimonials = [
  {
    id: 1,
    name: "Martin & Beth Robinson",
    location: "Cape Town, SA",
    rating: 5,
    text: "An absolutely stunning property. The attention to detail, the views of the golf course, and the peaceful atmosphere made our anniversary trip unforgettable. We will definitely be returning.",
  },
  {
    id: 2,
    name: "Michael van der Berg",
    location: "Johannesburg, SA",
    rating: 5,
    text: "Le Vaal Manor exceeded all expectations. The kitchen was fully equipped for our family gathering, and the outdoor braai area was perfect for evening entertainment.",
  },
  {
    id: 3,
    name: "Eric Jensen",
    location: "Upington, SA",
    rating: 5,
    text: "A hidden gem on Parys Golf Estate. The manor offers the perfect blend of luxury and comfort. The hosts were incredibly accommodating and the property is immaculately maintained.",
  },
];

export default function HomeSection({ onNavigate }: HomeSectionProps) {
  return (
    <div className="flex flex-col">
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Le Vaal Manor exterior"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/70" />
        </div>

        <div className="relative z-10 container mx-auto px-4 md:px-6 text-center">
          <div className="max-w-4xl mx-auto space-y-6 md:space-y-8">
            <div className="space-y-3">
              <p className="text-accent text-xs font-medium tracking-[0.25em] uppercase">
                Parys Golf Estate, South Africa
              </p>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-normal text-white tracking-tight drop-shadow-lg" style={{ fontFamily: 'var(--font-script)' }}>
                Le Vaal Manor
              </h1>
            </div>
            <p className="text-base md:text-lg text-white/90 max-w-2xl mx-auto font-light leading-relaxed">
              Experience refined luxury and tranquil elegance in an exclusive
              golf estate setting
            </p>
            <div className="pt-4 md:pt-6">
              <Button
                size="lg"
                className="bg-accent text-accent-foreground border-accent-border font-medium shadow-lg"
                onClick={() => onNavigate("contact")}
                data-testid="button-book-stay"
              >
                Book Your Stay
              </Button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
          <div className="animate-bounce">
            <div className="w-6 h-10 rounded-full border-2 border-white/50 flex items-start justify-center p-2">
              <div className="w-1 h-2 bg-white/70 rounded-full" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12 md:mb-16">
            <p className="text-accent text-xs font-medium tracking-[0.2em] uppercase mb-3">
              Guest Experiences
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">
              What Our Guests Say
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {testimonials.map((testimonial) => (
              <Card
                key={testimonial.id}
                className="bg-card border-card-border hover-elevate transition-all duration-300"
                data-testid={`card-testimonial-${testimonial.id}`}
              >
                <CardContent className="p-6 md:p-8">
                  <Quote className="w-8 h-8 text-accent/40 mb-4" />
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-accent text-accent"
                      />
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                    "{testimonial.text}"
                  </p>
                  <div className="border-t border-border pt-4">
                    <p className="text-sm font-semibold text-foreground">
                      {testimonial.name}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {testimonial.location}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
