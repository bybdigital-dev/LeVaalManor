import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Quote, Star } from "lucide-react";
import heroImage from "@assets/images/frontn1.jpeg";
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
      {/* ================= HERO SECTION ================= */}
      <section className="relative w-full h-screen">
        {/* HERO IMAGE */}
        <img
          src={heroImage}
          alt="Le Vaal Manor exterior"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-black/40" />

        {/* HERO CONTENT */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 md:px-6">
          <p className="text-accent text-xs font-medium tracking-[0.25em] uppercase mb-2">
            Parys Golf Estate, South Africa
          </p>

          <h1
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-white drop-shadow-lg mb-4"
            style={{ fontFamily: "var(--font-script)" }}
          >
            Le Vaal Manor
          </h1>

          <p className="text-base md:text-lg text-white max-w-2xl mx-auto font-light leading-relaxed mb-6">
            Experience refined luxury and tranquil elegance in an exclusive
            golf estate setting
          </p>

          <Button
            size="lg"
            className="bg-accent text-accent-foreground border-accent-border font-medium shadow-lg"
            onClick={() => onNavigate("contact")}
            data-testid="button-book-stay"
          >
            Book Your Stay
          </Button>
        </div>

        {/* SCROLL INDICATOR */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10">
          <div className="animate-bounce">
            <div className="w-6 h-10 rounded-full border-2 border-white/50 flex items-start justify-center p-2">
              <div className="w-1 h-2 bg-white/70 rounded-full" />
            </div>
          </div>
        </div>
      </section>

      {/* ================= TESTIMONIALS ================= */}
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
