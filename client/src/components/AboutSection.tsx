import { useState } from "react";
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
Play,
X,
} from "lucide-react";

import videoThumbnail from "@assets/images/31.jpg";

const propertyFeatures = [
{ icon: Bed, title: "4 Bedrooms", description: "Spacious bedrooms with premium linens and quality mattresses" },
{ icon: Bath, title: "4 En-Suite Bathrooms", description: "Each bedroom has its own private en-suite bathroom" },
{ icon: ChefHat, title: "Full Kitchen", description: "Modern kitchen with premium appliances and cookware" },
{ icon: Gamepad2, title: "Pool Table", description: "Entertainment room with professional pool table" },
{ icon: Sun, title: "Solar Power", description: "Eco-friendly solar power system for uninterrupted electricity" },
{ icon: Waves, title: "Swimming Pool", description: "Private swimming pool for relaxation and entertainment" },
{ icon: Flame, title: "Two Braai Areas", description: "Outdoor braai facilities for traditional South African dining" },
{ icon: Flame, title: "Indoor Fireplace", description: "Cosy kaggel for warm winter evenings" },
{ icon: Car, title: "Parking", description: "Two lock-up garages plus two open parking spaces" },
{ icon: Shield, title: "Security", description: "24-hour security within the prestigious Parys Golf Estate" },
{ icon: Sun, title: "Air Conditioning", description: "Each bedroom is equipped with modern air conditioning" },
{ icon: Waves, title: "Backup Water", description: "Reliable backup water supply ensures uninterrupted comfort" },
];

const highlights = [
{
icon: Shield,
title: "Privacy & Security",
description: "Nestled within the prestigious Parys Golf Estate with 24-hour security.",
},
{
icon: Sparkles,
title: "Luxury Finishes",
description: "Premium linens, designer furnishings, and meticulous attention to detail.",
},
];

const propertyVideo = {
thumbnail: videoThumbnail,
title: "Le Vaal Manor",
description: "Take a closer look at your private retreat on Parys Golf Estate",
duration: "",
youtubeId: "-f_asUV1D7o",
};

export default function AboutSection() {
const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

return ( <section className="py-16 md:py-24 bg-background"> <div className="container mx-auto px-4 md:px-6">
{/* ================= ABOUT TEXT ================= */} <div className="space-y-6 max-w-4xl mx-auto text-center"> <p className="text-accent text-xs font-medium tracking-[0.2em] uppercase mb-3">
About Le Vaal Manor </p> <h2 className="text-2xl md:text-3xl font-bold text-foreground leading-tight">
Your Private Retreat on Parys Golf Estate </h2>
      <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
        <p>
          Welcome to Le Vaal Manor, your perfect escape on the prestigious
          Parys Golf and Country Estate. Set in a quiet and tranquil part
          of the estate, you’ll fall asleep to the sound of the Vaal
          River while still being close to everything – from estate
          facilities to the shops, restaurants, and activities in the
          town of Parys.
        </p>

        <p>
          This spacious double-storey guest house is ideally positioned
          on the 18th hole, while being just a short stroll from the
          clubhouse, restaurant, padel, tennis, and squash courts. The
          estate also offers 24-hour security.
        </p>

        <p>
          Designed for comfort, relaxation, and easy entertaining, the
          house features four en-suite bedrooms, each with its own
          private bathroom. Two bedrooms are fitted with queen beds,
          while the other two offer single beds – ideal for families,
          friends, or golf groups. Air conditioning throughout the house
          ensures year-round comfort.
        </p>

        <p>
          The open and welcoming living spaces flow effortlessly to the
          outdoors. Enjoy lazy days by the swimming pool, relaxed
          evenings around the braai area, or sunset gatherings on the
          upper-level balcony, which also features a braai and stunning
          elevated views.
        </p>

        <p>
          The home offers a fully equipped self-catering kitchen, a
          double garage, and an inverter system that keeps essential
          lights and plug points running during power outages, ensuring
          a comfortable and uninterrupted stay.
        </p>

        <p>
          Whether you’re here for golf, a relaxing getaway, or a stylish
          stay with friends and family, Le Vaal Manor offers the perfect
          balance of peace, luxury, and convenience.
        </p>
      </div>
    </div>

    {/* ================= VIDEO CARD ================= */}
    <div className="mt-12 max-w-3xl mx-auto">
      <button
        type="button"
        onClick={() => setSelectedVideo(propertyVideo.youtubeId)}
        className="group w-full text-left rounded-lg overflow-hidden shadow-xl bg-card border border-card-border hover-elevate transition-all duration-300"
      >
        <div className="relative aspect-video overflow-hidden">
          <img
            src={propertyVideo.thumbnail}
            alt={propertyVideo.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-black/35 flex items-center justify-center">
            <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
              <Play className="w-8 h-8 text-black ml-1" />
            </div>
          </div>

          {propertyVideo.duration && (
            <div className="absolute bottom-3 right-3 bg-black/80 text-white text-xs px-2 py-1 rounded">
              {propertyVideo.duration}
            </div>
          )}
        </div>

        <div className="p-5">
          <h3 className="font-semibold text-foreground text-lg mb-1">
            {propertyVideo.title}
          </h3>
          <p className="text-sm text-muted-foreground">
            {propertyVideo.description}
          </p>
        </div>
      </button>
    </div>

    {/* ================= VIDEO POPUP ================= */}
    {selectedVideo && (
      <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center px-4">
        <div className="relative w-full max-w-5xl">
          <button
            type="button"
            onClick={() => setSelectedVideo(null)}
            className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
            aria-label="Close video"
          >
            <X className="w-8 h-8" />
          </button>

          <div className="aspect-video rounded-lg overflow-hidden bg-black">
            <iframe
              src={`https://www.youtube.com/embed/${selectedVideo}?autoplay=1`}
              title="Le Vaal Manor Video"
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    )}

    {/* ================= HIGHLIGHTS ================= */}
    <div className="flex justify-center mt-20 md:mt-28">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 max-w-3xl">
        {highlights.map((highlight) => (
          <div key={highlight.title} className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
              <highlight.icon className="w-6 h-6 text-accent" />
            </div>
            <div>
              <h4 className="text-base font-semibold text-foreground">
                {highlight.title}
              </h4>
              <p className="text-sm text-muted-foreground">
                {highlight.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* ================= FEATURES GRID ================= */}
    <div className="mt-20 md:mt-28">
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
            className="bg-card border-card-border hover-elevate transition-all duration-300"
          >
            <CardContent className="p-5 text-center">
              <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-accent/10 flex items-center justify-center">
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
