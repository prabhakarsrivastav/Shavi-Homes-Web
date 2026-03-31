import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, User } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-heading text-primary-foreground overflow-hidden">
      {/* Giant brand name */}
      <div className="container-tight px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20">
        <div className="select-none">
          <h2
            className="font-heading font-black uppercase leading-[0.85] tracking-tighter text-[#f5f0e8]"
            style={{ fontSize: "clamp(5rem, 16vw, 16rem)", WebkitTextStroke: "2px rgba(245,240,232,0.15)" }}
          >
            <span className="block">S<span style={{ color: "#F97316" }}>H</span>AVI</span>
            <span className="block"><span style={{ color: "#F97316" }}>H</span>OMES</span>
          </h2>
        </div>
      </div>

      {/* Links grid */}
      <div className="container-tight px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 pb-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-16 mb-16">
          <div>
            <h4 className="font-heading font-bold text-sm uppercase tracking-widest mb-5 text-primary-foreground">
              Services
            </h4>
            <ul className="space-y-3">
              {[
                { label: "LEGAL BASEMENT", to: "/services/legal-basement" },
                { label: "SECONDARY SUITE", to: "/services/secondary-suite" },
                { label: "PHARMACY", to: "/services/pharmacy" },
                { label: "MEDICAL CLINIC", to: "/services/medical-clinic" },
                { label: "OFFICE", to: "/services/office" },
                { label: "SPA & WELLNESS", to: "/services/spa-wellness" },
                { label: "COMMERCIAL", to: "/services/commercial" },
                { label: "RESIDENTIAL", to: "/services/residential" },
                { label: "MAINTENANCE", to: "/services/maintenance" },
              ].map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors uppercase tracking-wide"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-bold text-sm uppercase tracking-widest mb-5 text-primary-foreground">
              Company
            </h4>
            <ul className="space-y-3">
              {[
                { label: "WHY US", to: "/why-us" },
                { label: "PROCESS", to: "/process" },
                
                { label: "TESTIMONIALS", to: "/testimonials" },
                { label: "CONTACT", to: "/contact" },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.to}
                    className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors uppercase tracking-wide"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-bold text-sm uppercase tracking-widest mb-5 text-primary-foreground">
              Socials
            </h4>
            <ul className="space-y-3">
              {["FACEBOOK", "INSTAGRAM", "LINKEDIN", "GOOGLE"].map((s) => (
                <li key={s}>
                  <a
                    href="#"
                    className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors uppercase tracking-wide"
                  >
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-bold text-sm uppercase tracking-widest mb-5 text-primary-foreground">
              Studio
            </h4>
            <div className="space-y-3">
              <a
                href="mailto:info@shavihomes.com"
                className="flex items-center gap-2 text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors uppercase tracking-wide"
              >
                INFO@SHAVIHOMES.COM
              </a>
              <a
                href="tel:+14035551234"
                className="flex items-center gap-2 text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors uppercase tracking-wide"
              >
                +1 (403) 555-1234
              </a>
              <p className="text-sm text-primary-foreground/60 uppercase tracking-wide leading-relaxed">
                CALGARY, ALBERTA,
                <br />
                CANADA
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-primary-foreground/10 pt-8 sm:pt-10 flex flex-col sm:flex-row items-center justify-between gap-8 sm:gap-4 relative">
          <p className="text-xs text-primary-foreground/30 uppercase tracking-widest font-medium order-2 sm:order-1">
            Copyright © {new Date().getFullYear()}
          </p>

          <Link 
            to="/admin/login" 
            className="flex flex-col items-center gap-1.5 group transition-all duration-500 order-1 sm:order-2 px-6"
          >
            <div className="p-2.5 rounded-full bg-white/10 border border-white/10 group-hover:bg-orange-500/10 group-hover:border-orange-500/20 transition-all duration-500 shadow-inner">
              <User className="w-4 h-4 text-white group-hover:text-orange-500 transition-all duration-500" />
            </div>
            <span className="text-[9px] font-black text-white uppercase tracking-[0.2em] transition-all duration-500 translate-y-0.5">
              Admin
            </span>
          </Link>

          <p className="text-xs text-primary-foreground/30 uppercase tracking-widest font-medium order-3">
            ✦ We are <span className="font-bold text-primary-foreground/50">Shavi Homes</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
