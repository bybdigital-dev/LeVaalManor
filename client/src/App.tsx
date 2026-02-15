import { useState, useEffect } from "react";
import { Router as WouterRouter, Switch, Route } from "wouter";
import { useHashLocation } from "wouter/use-hash-location";
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

function SectionWrapper({ children }: { children: JSX.Element }) {
  const [isTransitioning, setIsTransitioning] = useState(true);

  useEffect(() => {
    setIsTransitioning(false);
  }, [children]);

  useEffect(() => {
    document.body.style.overflow = isTransitioning ? "hidden" : "auto";
  }, [isTransitioning]);

  return (
    <div
      className={`transition-all duration-300 ease-in-out ${
        isTransitioning ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
      }`}
    >
      {children}
    </div>
  );
}

function Routes({ onSectionChange }: { onSectionChange: (section: Section) => void }) {
  return (
    <Switch>
      <Route path="/">
        <SectionWrapper>
          <HomeSection onNavigate={onSectionChange} />
        </SectionWrapper>
      </Route>
      <Route path="/about">
        <SectionWrapper>
          <AboutSection />
        </SectionWrapper>
      </Route>
      <Route path="/gallery">
        <SectionWrapper>
          <GallerySection />
        </SectionWrapper>
      </Route>
      <Route path="/amenities">
        <SectionWrapper>
          <AmenitiesSection />
        </SectionWrapper>
      </Route>
      <Route path="/contact">
        <SectionWrapper>
          <ContactSection />
        </SectionWrapper>
      </Route>
      {/* optional catch-all */}
      <Route>
        <SectionWrapper>
          <HomeSection onNavigate={onSectionChange} />
        </SectionWrapper>
      </Route>
    </Switch>
  );
}

function App() {
  const [activeSection, setActiveSection] = useState<Section>("home");

  const handleSectionChange = (section: Section) => {
    setActiveSection(section);
    window.location.hash = `#/${section}`;
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <div className="min-h-screen flex flex-col bg-background">
          <WouterRouter hook={useHashLocation}>
            <Header activeSection={activeSection} onSectionChange={handleSectionChange} />
            <main className="flex-1">
              <Routes onSectionChange={handleSectionChange} />
              <ScrollToTop />
            </main>
            <Footer onNavigate={handleSectionChange} />
          </WouterRouter>
          <Toaster />
        </div>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
