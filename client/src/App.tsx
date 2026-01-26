import { useState, useEffect } from "react";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Header from "@/components/Header";
import HomeSection from "@/components/HomeSection";
import AboutSection from "@/components/AboutSection";
import GallerySection from "@/components/GallerySection";
import AmenitiesSection from "@/components/AmenitiesSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

export type Section = "home" | "about" | "gallery" | "amenities" | "contact";

function App() {
  const [activeSection, setActiveSection] = useState<Section>("home");
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleSectionChange = (section: Section) => {
    if (section === activeSection) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setActiveSection(section);
      setIsTransitioning(false);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 300);
  };

  useEffect(() => {
    document.body.style.overflow = isTransitioning ? "hidden" : "auto";
  }, [isTransitioning]);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <div className="min-h-screen flex flex-col bg-background">
          <Header activeSection={activeSection} onSectionChange={handleSectionChange} />
          
          <main className="flex-1">
            <div
              className={`transition-all duration-300 ease-in-out ${
                isTransitioning ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
              }`}
            >
              {activeSection === "home" && (
                <HomeSection onNavigate={handleSectionChange} />
              )}
              {activeSection === "about" && <AboutSection />}
              {activeSection === "gallery" && <GallerySection />}
              {activeSection === "amenities" && <AmenitiesSection />}
              {activeSection === "contact" && <ContactSection />}
            </div>
          </main>

          <Footer onNavigate={handleSectionChange} />
          <ScrollToTop />
        </div>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
