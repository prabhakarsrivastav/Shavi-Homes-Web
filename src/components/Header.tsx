import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "../assets/shavi-logo.png";

const serviceCategories = {
  residential: {
    title: "Residential Construction",
    links: [
      { label: "New Construction", href: "/services/new-construction" },
      { label: "Legal Basement", href: "/services/legal-basement" },
      { label: "Secondary Suite", href: "/services/secondary-suite" },
      { label: "Extension Suite", href: "/services/extension-suite" },
      { label: "Backyard Suite", href: "/services/backyard-suite" },
      { label: "Garage Suite", href: "/services/garage-suite" },
    ]
  },
  commercial: {
    title: "Commercial Construction",
    links: [
      { label: "Pharmacy Construction", href: "/services/pharmacy" },
      { label: "Medical Clinic", href: "/services/medical-clinic" },
      { label: "Office Construction", href: "/services/office" },
      { label: "Spa & Wellness", href: "/services/spa-wellness" },
      { label: "Maintenance Services", href: "/services/maintenance" },
    ]
  }
};

const navLinks = [
  { label: "Why Us", href: "/why-us" },
  { label: "Process", href: "/process" },
  { label: "Blog", href: "/blog" },
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
  const phoneTextClass = scrolled ? "text-heading" : "text-white";
  const hamburgerClass = scrolled ? "text-heading" : "text-white";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-background/95 backdrop-blur-md shadow-md" : "bg-transparent"
        }`}
    >
      <div className="container-tight flex items-center justify-between h-16 sm:h-20 px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-2 group">
          <img 
            src={logo} 
            alt="Shavi Homes" 
            className={`h-12 sm:h-16 w-auto transition-all duration-300 ${!scrolled ? "brightness-0 invert" : ""}`}
          />
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
                <div className="bg-background rounded-[1.5rem] shadow-2xl border border-border p-8 min-w-[560px] animate-fade-in">
                  <div className="grid grid-cols-2 gap-10">
                    {Object.entries(serviceCategories).map(([key, category]) => (
                      <div key={key}>
                        <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-primary mb-5 pl-1">
                          {category.title}
                        </h4>
                        <div className="space-y-1">
                          {category.links.map((link) => (
                            <Link
                              key={link.href}
                              to={link.href}
                              className="block px-3 py-2 text-sm font-medium text-muted-foreground hover:text-heading hover:bg-muted rounded-xl transition-all duration-300"
                              onClick={() => setServicesOpen(false)}
                            >
                              {link.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-8 pt-6 border-t border-border">
                    <Link
                      to="/#services"
                      className="inline-flex items-center text-xs font-bold text-heading hover:text-primary transition-colors pl-1"
                      onClick={() => setServicesOpen(false)}
                    >
                      View All Services <ChevronDown className="w-3 h-3 ml-1 -rotate-90" />
                    </Link>
                  </div>
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
          <a href="tel:+15876646662" className={`flex items-center gap-2 text-sm font-semibold transition-colors ${phoneTextClass}`}>
            <Phone className="w-4 h-4 text-primary" />
            +1 587 664 6662
          </a>
          <Button variant="cta" size="lg" asChild>
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
              <div className="pl-4 space-y-6 pb-4 mt-2">
                {Object.entries(serviceCategories).map(([key, category]) => (
                  <div key={key}>
                    <h4 className="text-[9px] font-black uppercase tracking-[0.2em] text-primary mb-3 pl-1">
                      {category.title}
                    </h4>
                    <div className="space-y-1">
                      {category.links.map((link) => (
                        <Link
                          key={link.href}
                          to={link.href}
                          className="block text-sm font-medium text-muted-foreground py-2 pl-1"
                          onClick={() => setMobileOpen(false)}
                        >
                          {link.label}
                        </Link>
                      ))}
                    </div>
                  </div>
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
