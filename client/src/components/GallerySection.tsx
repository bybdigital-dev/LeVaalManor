import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import I1 from "@assets/images/unnamed.jpg";
import I2 from "@assets/images/livingroom4.jpg";
import I3 from "@assets/images/kaggel2.jpg";
import I4 from "@assets/images/entertainment3.jpg";
import I5 from "@assets/images/patio3.jpg";
import I6 from "@assets/images/pool3.jpg";
import I7 from "@assets/images/s8.JPG";
import I8 from "@assets/images/livingroom3.jpg";
import I9 from "@assets/images/kaggel3.JPG";
import I10 from "@assets/images/livingroom5.jpg";
import I11 from "@assets/images/livingroom2.jpg";
import I12 from "@assets/images/kaggel1.jpg";
import I13 from "@assets/images/minor.jpg";
import I14 from "@assets/images/kitchen1.jpg";
import I15 from "@assets/images/kitchen2.jpg";
import I16 from "@assets/images/livingroom1.jpg";
import I17 from "@assets/images/patio4.jpg";
import I18 from "@assets/images/pool1.JPG";
import I19 from "@assets/images/pool2.JPG";
import I20 from "@assets/images/s11.JPG";
import I21 from "@assets/images/patio1.JPG";
import I22 from "@assets/images/pool5.JPG";
import I23 from "@assets/images/pool6.jpg";
import I24 from "@assets/images/patio2.jpg";
import I25 from "@assets/images/pool4.jpg";
import I26 from "@assets/images/s10.JPG";
import I27 from "@assets/images/bed2.JPG";
import I28 from "@assets/images/bed21.JPG";
import I29 from "@assets/images/bed22.JPG";
import I30 from "@assets/images/bed1.jpg";
import I31 from "@assets/images/bed11.JPG";
import I32 from "@assets/images/bed12.JPG";
import I33 from "@assets/images/bed13.JPG";
import I34 from "@assets/images/bed1b.JPG";
import I35 from "@assets/images/bed41.JPG";
import I36 from "@assets/images/bed43.JPG";
import I37 from "@assets/images/bed44.JPG";
import I38 from "@assets/images/bed4b.jpg";
import I39 from "@assets/images/bed31.JPG";
import I40 from "@assets/images/bed32.JPG";
import I41 from "@assets/images/bed33.JPG";
import I42 from "@assets/images/bed34.JPG";
import I43 from "@assets/images/entertainment2.jpg";
import I44 from "@assets/images/entertainment4.JPG";
import I45 from "@assets/images/entertainment5.jpg";
import I46 from "@assets/images/s1.JPG";
import I47 from "@assets/images/s2.JPG";
import I48 from "@assets/images/s3.JPG";
import I49 from "@assets/images/s4.JPG";
import I50 from "@assets/images/s5.JPG";
import I51 from "@assets/images/s6.JPG";
import I52 from "@assets/images/s7.JPG";
import I53 from "@assets/images/s9.JPG";
import I54 from "@assets/images/playground.JPG";
import I55 from "@assets/images/outside2.JPG";
import I56 from "@assets/images/front1.JPG";
import I57 from "@assets/images/front2.JPG";

const galleryImages = [
  { id: 1, src: I1, alt: "Le Vaal Manor", title: "Le Vaal Manor" },
  { id: 2, src: I2, alt: "Living room", title: "Living room" },
  { id: 3, src: I3, alt: "Fireplace", title: "Fireplace" },
  { id: 4, src: I4, alt: "Entertainment room", title: "Entertainment room" },
  { id: 5, src: I5, alt: "Patio", title: "Patio" },
  { id: 6, src: I6, alt: "Pool", title: "Pool" },
  { id: 7, src: I7, alt: "Scenery", title: "Scenery" },
  { id: 8, src: I8, alt: "Living room", title: "Living room" },
  { id: 9, src: I9, alt: "Living room", title: "Living room" },
  { id: 10, src: I10, alt: "Living room", title: "Living room" },
  { id: 11, src: I11, alt: "Living room", title: "Living room" },
  { id: 12, src: I12, alt: "Living room", title: "Living room" },
  { id: 13, src: I13, alt: "Living room", title: "Living room" },
  { id: 14, src: I14, alt: "Kitchen", title: "Kitchen" },
  { id: 15, src: I15, alt: "Kitchen", title: "Kitchen" },
  { id: 16, src: I16, alt: "Living room", title: "Living room" },
  { id: 17, src: I17, alt: "Braai", title: "Braai" },
  { id: 18, src: I18, alt: "Pool", title: "Pool" },
  { id: 19, src: I19, alt: "Pool", title: "Pool" },
  { id: 20, src: I20, alt: "Scenery", title: "Scenery" },
  { id: 21, src: I21, alt: "Patio", title: "Patio" },
  { id: 22, src: I22, alt: "Pool", title: "Pool" },
  { id: 23, src: I23, alt: "Pool", title: "Pool" },
  { id: 24, src: I24, alt: "Patio", title: "Patio" },
  { id: 25, src: I25, alt: "Pool", title: "Pool" },
  { id: 26, src: I26, alt: "Scenery", title: "Scenery" },
  { id: 27, src: I27, alt: "Bedroom 1", title: "Bedroom 1" },
  { id: 28, src: I28, alt: "Bedroom 1", title: "Bedroom 1" },
  { id: 29, src: I29, alt: "Bedroom 1", title: "Bedroom 1" },
  { id: 30, src: I30, alt: "Bedroom 2", title: "Bedroom 2" },
  { id: 31, src: I31, alt: "Bedroom 2", title: "Bedroom 2" },
  { id: 32, src: I32, alt: "Bedroom 2", title: "Bedroom 2" },
  { id: 33, src: I33, alt: "Bedroom 2", title: "Bedroom 2" },
  { id: 34, src: I34, alt: "Bedroom 2 bathroom", title: "Bedroom 2 bathroom" },
  { id: 35, src: I35, alt: "Bedroom 3", title: "Bedroom 3" },
  { id: 36, src: I36, alt: "Bedroom 3", title: "Bedroom 3" },
  { id: 37, src: I37, alt: "Bedroom 3", title: "Bedroom 3" },
  { id: 38, src: I38, alt: "Bedroom 3 bathroom", title: "Bedroom 3 bathroom" },
  { id: 39, src: I39, alt: "Bedroom 4", title: "Bedroom 4" },
  { id: 40, src: I40, alt: "Bedroom 4", title: "Bedroom 4" },
  { id: 41, src: I41, alt: "Bedroom 4", title: "Bedroom 4" },
  { id: 42, src: I42, alt: "Bedroom 4 bathroom", title: "Bedroom 4 bathroom" },
  { id: 43, src: I43, alt: "Entertainment room", title: "Entertainment room" },
  { id: 44, src: I44, alt: "Entertainment room", title: "Entertainment room" },
  { id: 45, src: I45, alt: "Entertainment room", title: "Entertainment room" },
  { id: 46, src: I46, alt: "Scenery", title: "Scenery" },
  { id: 47, src: I47, alt: "Scenery", title: "Scenery" },
  { id: 48, src: I48, alt: "Scenery", title: "Scenery" },
  { id: 49, src: I49, alt: "Scenery", title: "Scenery" },
  { id: 50, src: I50, alt: "Scenery", title: "Scenery" },
  { id: 51, src: I51, alt: "Scenery", title: "Scenery" },
  { id: 52, src: I52, alt: "Scenery", title: "Scenery" },
  { id: 53, src: I53, alt: "Scenery", title: "Scenery" },
  { id: 54, src: I54, alt: "Playground", title: "Playground" },
  { id: 55, src: I55, alt: "Backyard", title: "Backyard" },
  { id: 56, src: I56, alt: "Front view", title: "Front view" },
  { id: 57, src: I57, alt: "Front view", title: "Front view" },
];

export default function GallerySection() {
  const [selectedImage, setSelectedImage] =
    useState<(typeof galleryImages)[0] | null>(null);

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-accent text-xs font-medium tracking-[0.2em] uppercase mb-3">
            Photo Gallery
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">
            Explore{" "}
            <span style={{ fontFamily: "var(--font-script)" }}>
              Le Vaal Manor
            </span>
          </h2>
          <p className="mt-4 text-sm text-muted-foreground max-w-2xl mx-auto">
            Take a visual journey through our luxurious spaces and stunning
            surroundings
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
          <DialogContent className="max-w-5xl p-0 overflow-hidden bg-black/95 border-none [&>button]:!opacity-100 [&>button]:!bg-black/70 [&>button:hover]:!bg-black/90 [&>button]:!text-white [&>button]:!rounded-full [&>button]:!w-10 [&>button]:!h-10 [&>button]:!flex [&>button]:!items-center [&>button]:!justify-center [&>button]:!right-4 [&>button]:!top-4 [&>button]:!z-50 [&>button>svg]:!w-6 [&>button>svg]:!h-6 [&>button>svg]:!text-white">
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