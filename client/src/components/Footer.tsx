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

            {/* Brand / Description */}
            <div className="text-center md:text-left max-w-sm">
              <button
                onClick={() => onNavigate("home")}
                className="text-3xl hover:opacity-80 transition-opacity"
                style={{ fontFamily: 'var(--font-script)' }}
                data-testid="footer-logo"
              >
                Le Vaal Manor
              </button>

              <p className="mt-2 text-xs text-primary-foreground/70 leading-relaxed">
                Luxury self-catering accommodation located within the exclusive
                Parys Golf Estate.
              </p>
            </div>

            {/* Social Icons */}
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

        {/* Footer Bottom */}
        <div className="border-t border-white/10 py-6 space-y-2">
          <p className="text-center text-xs text-primary-foreground/70">
            &copy; {currentYear} Le Vaal Manor. All rights reserved.
          </p>

          <p className="text-center text-xs text-primary-foreground/60">
            Developed by{" "}
            <a
              href="https://buildyourbrand.web.za/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-primary-foreground transition-colors"
            >
              BYB Digital
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
