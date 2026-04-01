import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

import basementImg from "@/assets/basement.png";
import suiteImg from "@/assets/Suite.png";
import pharmacyImg from "@/assets/medical.png";
import clinicImg from "@/assets/service-clinic.jpg";
import officeImg from "@/assets/service-office.jpg";
import spaImg from "@/assets/spa.png";
import commercialImg from "@/assets/service-commercial.jpg";
import residentialImg from "@/assets/service-residential.jpg";
import maintenanceImg from "@/assets/service-maintenance.jpg";

const services = [
  {
    title: "Legal Basement Construction",
    desc: "Fully permitted basements built to Calgary's building code — pass inspection the first time.",
    image: basementImg,
    slug: "legal-basement",
  },
  {
    title: "Secondary Suite Development",
    desc: "Income-generating suites designed for maximum ROI and tenant comfort.",
    image: suiteImg,
    slug: "secondary-suite",
  },
  {
    title: "Pharmacy Construction",
    desc: "Purpose-built pharmacies meeting all regulatory and accessibility requirements.",
    image: pharmacyImg,
    slug: "pharmacy",
  },
  {
    title: "Medical Clinic Construction",
    desc: "Healthcare spaces designed for patient flow, compliance, and professional excellence.",
    image: clinicImg,
    slug: "medical-clinic",
  },
  {
    title: "Office Construction",
    desc: "Modern workspaces engineered for productivity, collaboration, and growth.",
    image: officeImg,
    slug: "office",
  },
  {
    title: "Spa & Wellness Buildouts",
    desc: "Luxurious wellness environments that elevate the client experience.",
    image: spaImg,
    slug: "spa-wellness",
  },
  {
    title: "Commercial Construction",
    desc: "Full-scale commercial builds — retail, restaurants, warehouses, and mixed-use spaces done right.",
    image: commercialImg,
    slug: "commercial",
  },
  {
    title: "Residential Construction",
    desc: "Custom homes, renovations, and additions built with quality craftsmanship and care.",
    image: residentialImg,
    slug: "residential",
  },
  {
    title: "Maintenance Services",
    desc: "Reliable property maintenance — HVAC, plumbing, electrical, and general repairs for residential and commercial buildings.",
    image: maintenanceImg,
    slug: "maintenance",
  },
];

const Services = () => {
  return (
    <section id="services" className="section-padding section-alt">
      <div className="container-tight">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-widest">What We Build</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mt-3 mb-4">
            Our Services
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Not just construction — we build legally approved, income-generating spaces.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((s, i) => (
            <motion.div
              key={s.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <Link
                to={`/services/${s.slug}`}
                className="group block bg-card rounded-xl overflow-hidden shadow-sm hover-lift border border-border"
              >
                <div className="img-zoom aspect-[4/3]">
                  <img src={s.image} alt={s.title} className="w-full h-full object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {s.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">{s.desc}</p>
                  <Button variant="ghost" className="p-0 h-auto text-primary font-semibold group-hover:gap-3 transition-all">
                    View Details <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
export { services };
