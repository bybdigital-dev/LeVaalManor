import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { X } from "lucide-react";
import heroImage from "@assets/images/hero-manor.png";
import livingRoom from "@assets/images/living-room.png";
import bedroom from "@assets/images/bedroom.png";
import kitchen from "@assets/images/kitchen.png";
import outdoor from "@assets/images/outdoor.png";
import golfView from "@assets/images/golf-view.png";

const galleryImages = [
  {
    id: 1,
    src: heroImage,
    alt: "Le Vaal Manor exterior",
    title: "Manor Exterior",
  },
  {
    id: 2,
    src: livingRoom,
    alt: "Elegant living room",
    title: "Living Room",
  },
  {
    id: 3,
    src: bedroom,
    alt: "Master bedroom suite",
    title: "Master Suite",
  },
  {
    id: 4,
    src: kitchen,
    alt: "Modern luxury kitchen",
    title: "Kitchen",
  },
  {
    id: 5,
    src: outdoor,
    alt: "Outdoor entertainment area",
    title: "Outdoor Living",
  },
  {
    id: 6,
    src: golfView,
    alt: "Golf course views",
    title: "Golf Course Views",
  },
];

export default function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null);

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-accent font-body text-sm font-medium tracking-[0.2em] uppercase mb-3">
            Photo Gallery
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground font-serif">
            Explore Le Vaal Manor
          </h2>
          <p className="mt-4 text-muted-foreground font-body max-w-2xl mx-auto">
            Take a visual journey through our luxurious spaces and stunning surroundings
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {galleryImages.map((image) => (
            <button
              key={image.id}
              onClick={() => setSelectedImage(image)}
              className="group relative aspect-[4/3] rounded-lg overflow-hidden cursor-pointer focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background"
              data-testid={`gallery-image-${image.id}`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ visibility: "visible" }}>
                <p className="text-white font-body font-medium text-lg">
                  {image.title}
                </p>
              </div>
            </button>
          ))}
        </div>

        <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
          <DialogContent className="max-w-5xl p-0 overflow-hidden bg-black/95 border-none">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/10 hover-elevate active-elevate-2"
              data-testid="button-close-gallery"
            >
              <X className="w-5 h-5 text-white" />
            </button>
            {selectedImage && (
              <div className="relative">
                <img
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  className="w-full h-auto max-h-[85vh] object-contain"
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                  <p className="text-white font-body font-medium text-xl">
                    {selectedImage.title}
                  </p>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}
