import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import { Menu, X } from "lucide-react";
import type { Section } from "@/App";

interface HeaderProps {
  activeSection: Section;
  onSectionChange: (section: Section) => void;
}

const navItems: { label: string; section: Section }[] = [
  { label: "Home", section: "home" },
  { label: "About", section: "about" },
  { label: "Gallery", section: "gallery" },
  { label: "Amenities", section: "amenities" },
  { label: "Contact", section: "contact" },
];

export default function Header({ activeSection, onSectionChange }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = (section: Section) => {
    onSectionChange(section);
    setIsOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 border-b border-border">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex h-16 md:h-20 items-center justify-between gap-4">
          <button
            onClick={() => handleNavClick("home")}
            className="flex items-center gap-2 group"
            data-testid="link-home-logo"
          >
            <span className="text-lg md:text-xl font-bold tracking-tight text-primary">
              Le Vaal Manor
            </span>
          </button>

          <nav className="hidden md:flex items-center gap-1" data-testid="nav-desktop">
            {navItems.map((item) => (
              <Button
                key={item.section}
                variant="ghost"
                className={`text-xs font-medium px-3 transition-colors ${
                  activeSection === item.section
                    ? "text-accent bg-accent/10"
                    : "text-muted-foreground"
                }`}
                onClick={() => handleNavClick(item.section)}
                data-testid={`nav-${item.section}`}
              >
                {item.label}
              </Button>
            ))}
          </nav>

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" data-testid="button-mobile-menu">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] bg-background">
              <div className="flex flex-col gap-6 pt-6">
                <div className="flex items-center justify-between">
                  <span className="text-base font-bold text-primary">
                    Le Vaal Manor
                  </span>
                </div>
                <nav className="flex flex-col gap-2" data-testid="nav-mobile">
                  {navItems.map((item) => (
                    <SheetClose asChild key={item.section}>
                      <Button
                        variant="ghost"
                        className={`justify-start text-sm font-medium ${
                          activeSection === item.section
                            ? "text-accent bg-accent/10"
                            : "text-muted-foreground"
                        }`}
                        onClick={() => handleNavClick(item.section)}
                        data-testid={`nav-mobile-${item.section}`}
                      >
                        {item.label}
                      </Button>
                    </SheetClose>
                  ))}
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
