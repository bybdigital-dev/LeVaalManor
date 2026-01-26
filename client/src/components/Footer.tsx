import { SiFacebook, SiInstagram, SiWhatsapp } from "react-icons/si";
import type { Section } from "@/App";

interface FooterProps {
  onNavigate: (section: Section) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 md:px-6">
        <div className="py-8 md:py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <button
              onClick={() => onNavigate("home")}
              className="text-xl md:text-2xl font-bold font-serif hover:opacity-80 transition-opacity"
              data-testid="footer-logo"
            >
              Le Vaal Manor
            </button>

            <div className="flex items-center gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover-elevate active-elevate-2"
                aria-label="Facebook"
                data-testid="link-facebook"
              >
                <SiFacebook className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover-elevate active-elevate-2"
                aria-label="Instagram"
                data-testid="link-instagram"
              >
                <SiInstagram className="w-5 h-5" />
              </a>
              <a
                href="https://wa.me/27000000000"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover-elevate active-elevate-2"
                aria-label="WhatsApp"
                data-testid="link-whatsapp"
              >
                <SiWhatsapp className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 py-6">
          <p className="text-center text-sm text-primary-foreground/70 font-body">
            &copy; {currentYear} Le Vaal Manor. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
