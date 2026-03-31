import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const serviceSubPages = [
  { label: "Legal Basement", href: "/services/legal-basement" },
  { label: "Secondary Suite", href: "/services/secondary-suite" },
  { label: "Pharmacy Construction", href: "/services/pharmacy" },
  { label: "Medical Clinic", href: "/services/medical-clinic" },
  { label: "Office Construction", href: "/services/office" },
  { label: "Spa & Wellness", href: "/services/spa-wellness" },
  { label: "Commercial Construction", href: "/services/commercial" },
  { label: "Residential Construction", href: "/services/residential" },
  { label: "Maintenance Services", href: "/services/maintenance" },
];

const navLinks = [
  { label: "Why Us", href: "/why-us" },
  { label: "Process", href: "/process" },

  { label: "Testimonials", href: "/testimonials" },
  { label: "Contact", href: "/contact" },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleMouseEnter = () => {
    clearTimeout(timeoutRef.current);
    setServicesOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setServicesOpen(false), 150);
  };

  // Dynamic text classes based on scroll state
  const navTextClass = scrolled
    ? "text-muted-foreground hover:text-heading"
    : "text-white/80 hover:text-white";
  const logoTextClass = scrolled ? "text-heading" : "text-white";
  const phoneTextClass = scrolled ? "text-heading" : "text-white";
  const hamburgerClass = scrolled ? "text-heading" : "text-white";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-background/95 backdrop-blur-md shadow-md" : "bg-transparent"
        }`}
    >
      <div className="container-tight flex items-center justify-between h-16 sm:h-20 px-4 sm:px-6 lg:px-8">
        <Link to="/" className={`font-heading font-extrabold text-xl sm:text-2xl transition-colors ${logoTextClass}`}>
          SHAVI<span className="text-primary">HOMES</span>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {/* Services Dropdown */}
          <div
            ref={dropdownRef}
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <button
              className={`flex items-center gap-1 text-sm font-medium transition-colors ${navTextClass}`}
              onClick={() => setServicesOpen(!servicesOpen)}
            >
              Services
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`} />
            </button>

            {servicesOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3">
                <div className="bg-background rounded-xl shadow-xl border border-border p-2 min-w-[240px] animate-fade-in">
                  <Link
                    to="/#services"
                    className="block px-4 py-2.5 text-sm font-semibold text-heading hover:bg-muted rounded-lg transition-colors"
                    onClick={() => setServicesOpen(false)}
                  >
                    All Services
                  </Link>
                  <div className="h-px bg-border my-1" />
                  {serviceSubPages.map((s) => (
                    <Link
                      key={s.href}
                      to={s.href}
                      className="block px-4 py-2.5 text-sm text-muted-foreground hover:text-heading hover:bg-muted rounded-lg transition-colors"
                      onClick={() => setServicesOpen(false)}
                    >
                      {s.label}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Other nav links */}
          {navLinks.map((l) => (
            <Link
              key={l.href}
              to={l.href}
              className={`text-sm font-medium transition-colors ${navTextClass}`}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <a href="tel:+14035551234" className={`flex items-center gap-2 text-sm font-semibold transition-colors ${phoneTextClass}`}>
            <Phone className="w-4 h-4 text-primary" />
            (403) 555-1234
          </a>
          <Button variant="cta" size="lg" className="cta-pulse" asChild>
            <a href="/contact">Book Consultation</a>
          </Button>
        </div>

        <button
          className={`lg:hidden p-2 transition-colors ${hamburgerClass}`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-background border-t border-border animate-fade-in">
          <div className="px-4 py-4 space-y-1">
            {/* Mobile Services Accordion */}
            <button
              className="flex items-center justify-between w-full text-base font-medium text-foreground py-2"
              onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
            >
              Services
              <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${mobileServicesOpen ? "rotate-180" : ""}`} />
            </button>
            {mobileServicesOpen && (
              <div className="pl-4 space-y-1 pb-2">
                <Link
                  to="/#services"
                  className="block text-sm font-semibold text-heading py-1.5"
                  onClick={() => setMobileOpen(false)}
                >
                  All Services
                </Link>
                {serviceSubPages.map((s) => (
                  <Link
                    key={s.href}
                    to={s.href}
                    className="block text-sm text-muted-foreground py-1.5"
                    onClick={() => setMobileOpen(false)}
                  >
                    {s.label}
                  </Link>
                ))}
              </div>
            )}

            {navLinks.map((l) => (
              <Link
                key={l.href}
                to={l.href}
                className="block text-base font-medium text-foreground py-2"
                onClick={() => setMobileOpen(false)}
              >
                {l.label}
              </Link>
            ))}
            <Button variant="cta" className="w-full mt-4" asChild>
              <a href="/contact">Book Consultation</a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
