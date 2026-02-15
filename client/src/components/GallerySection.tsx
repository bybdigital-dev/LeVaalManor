import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { X } from "lucide-react";
import I1 from "@assets/images/1.jpg";
import I2 from "@assets/images/2.jpg";
import I3 from "@assets/images/3.jpg";
import I4 from "@assets/images/4.jpg";
import I5 from "@assets/images/5.jpg";
import I6 from "@assets/images/6.jpg";
import I7 from "@assets/images/7.jpg";
import I8 from "@assets/images/8.jpg";
import I9 from "@assets/images/9.jpg";
import I10 from "@assets/images/10.jpg";
import I11 from "@assets/images/11.jpg";
import I12 from "@assets/images/12.jpg";
import I13 from "@assets/images/13.jpg";
import I14 from "@assets/images/14.jpg";
import I15 from "@assets/images/15.jpg";
import I16 from "@assets/images/16.jpg";
import I17 from "@assets/images/17.jpg";
import I18 from "@assets/images/18.jpg";
import I19 from "@assets/images/19.jpg";
import I20 from "@assets/images/20.jpg";
import I21 from "@assets/images/21.jpg";
import I22 from "@assets/images/22.jpg";
import I23 from "@assets/images/23.jpg";
import I24 from "@assets/images/24.jpg";
import I25 from "@assets/images/25.jpg";
import I26 from "@assets/images/26.jpg";
import I27 from "@assets/images/27.jpg";
import I28 from "@assets/images/28.jpg";
import I29 from "@assets/images/29.jpg";
import I30 from "@assets/images/30.jpg";
import I31 from "@assets/images/31.jpg";
import I32 from "@assets/images/32.jpg";
import I33 from "@assets/images/33.jpg";
import I34 from "@assets/images/34.jpg";
import I35 from "@assets/images/35.jpg";
import I36 from "@assets/images/36.jpg";
import I37 from "@assets/images/37.jpg";
import I38 from "@assets/images/38.jpg";
import I39 from "@assets/images/39.jpg";
import I40 from "@assets/images/40.jpg";
import I41 from "@assets/images/g1.jpg";
import I42 from "@assets/images/g2.jpg";
import I43 from "@assets/images/g3.jpg";
import I44 from "@assets/images/g4.jpg";

const galleryImages = [
  { id: 1, src: I36, alt: "Room 1", title: "Room 1" },
  { id: 2, src: I37, alt: "Room 1", title: "Room 1" },
  { id: 3, src: I3, alt: "Room 1", title: "Room 1" },
  { id: 4, src: I11, alt: "Room 1 bathroom", title: "Room 1 bathroom" },
  { id: 5, src: I35, alt: "Room 2", title: "Room 2" },
  { id: 6, src: I39, alt: "Room 2", title: "Room 2" },
  { id: 7, src: I10, alt: "Room 2", title: "Room 2" },
  { id: 8, src: I4, alt: "Room 2 bathroom", title: "Room 2 bathroom" },
  { id: 9, src: I32, alt: "Room 3", title: "Room 3" },
  { id: 10, src: I38, alt: "Room 3", title: "Room 3" },
  { id: 11, src: I1, alt: "Room 3", title: "Room 3" },
  { id: 12, src: I2, alt: "Room 3", title: "Room 3" },
  { id: 13, src: I12, alt: "Room 3 bathroom", title: "Room 3 bathroom" },
  { id: 14, src: I33, alt: "Room 4", title: "Room 4" },
  { id: 15, src: I34, alt: "Room 4", title: "Room 4" },
  { id: 16, src: I13, alt: "Room 4", title: "Room 4" },
  { id: 17, src: I40, alt: "Room 4 bathroom", title: "Room 4 bathroom" },
  { id: 18, src: I17, alt: "Kitchen", title: "Kitchen" },
  { id: 19, src: I18, alt: "Kitchen", title: "Kitchen" },
  { id: 20, src: I19, alt: "Kitchen", title: "Kitchen" },
  { id: 21, src: I5, alt: "TV Room", title: "TV Room" },
  { id: 22, src: I6, alt: "TV Room", title: "TV Room" },
  { id: 23, src: I7, alt: "TV Room", title: "TV Room" },
  { id: 24, src: I8, alt: "TV Room", title: "TV Room" },
  { id: 25, src: I9, alt: "TV Room", title: "TV Room" },
  { id: 26, src: I20, alt: "Patio", title: "Patio" },
  { id: 27, src: I21, alt: "Patio", title: "Patio" },
  { id: 28, src: I22, alt: "Patio", title: "Patio" },
  { id: 29, src: I23, alt: "Patio", title: "Patio" },
  { id: 30, src: I24, alt: "Patio", title: "Patio" },
  { id: 31, src: I25, alt: "Patio", title: "Patio" },
  { id: 32, src: I26, alt: "Patio", title: "Patio" },
  { id: 33, src: I27, alt: "Patio", title: "Patio" },
  { id: 34, src: I28, alt: "Patio", title: "Patio" },
  { id: 35, src: I29, alt: "Patio", title: "Patio" },
  { id: 36, src: I30, alt: "Patio", title: "Patio" },
  { id: 37, src: I14, alt: "Entertainment room", title: "Entertainment room" },
  { id: 38, src: I15, alt: "Entertainment room", title: "Entertainment room" },
  { id: 39, src: I16, alt: "Entertainment room", title: "Entertainment room" },
  { id: 40, src: I41, alt: "Golf course", title: "Golf course" },
   { id: 41, src: I42, alt: "Golf course", title: "Golf course" },
   { id: 42, src: I43, alt: "Golf course", title: "Golf course" },
   { id: 43, src: I44, alt: "Golf course", title: "Golf course" },
 
];

export default function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null);

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-accent text-xs font-medium tracking-[0.2em] uppercase mb-3">
            Photo Gallery
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">
            Explore{" "}
            <span style={{ fontFamily: "var(--font-script)" }}>Le Vaal Manor</span>
          </h2>
          <p className="mt-4 text-sm text-muted-foreground max-w-2xl mx-auto">
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
              <div
                className="absolute bottom-0 left-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ visibility: "visible" }}
              >
                <p className="text-white font-medium text-sm">{image.title}</p>
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
                  <p className="text-white font-medium text-base">
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
