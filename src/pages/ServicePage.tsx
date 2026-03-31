import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowLeft, CheckCircle, Shield, TrendingUp, ClipboardList } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import ServiceGallery from "@/components/ServiceGallery";

import basementImg from "@/assets/service-basement.jpg";
import basementImg2 from "@/assets/service-basement-2.jpg";
import basementImg3 from "@/assets/service-basement-3.jpg";
import suiteImg from "@/assets/service-secondary-suite.jpg";
import suiteImg2 from "@/assets/service-suite-2.jpg";
import suiteImg3 from "@/assets/service-suite-3.jpg";
import pharmacyImg from "@/assets/service-pharmacy.jpg";
import pharmacyImg2 from "@/assets/service-pharmacy-2.jpg";
import pharmacyImg3 from "@/assets/service-pharmacy-3.jpg";
import clinicImg from "@/assets/service-clinic.jpg";
import clinicImg2 from "@/assets/service-clinic-2.jpg";
import clinicImg3 from "@/assets/service-clinic-3.jpg";
import officeImg from "@/assets/service-office.jpg";
import officeImg2 from "@/assets/service-office-2.jpg";
import officeImg3 from "@/assets/service-office-3.jpg";
import spaImg from "@/assets/service-spa.jpg";
import spaImg2 from "@/assets/service-spa-2.jpg";
import spaImg3 from "@/assets/service-spa-3.jpg";
import commercialImg from "@/assets/service-commercial.jpg";
import commercialImg2 from "@/assets/service-commercial-2.jpg";
import commercialImg3 from "@/assets/service-commercial-3.jpg";
import residentialImg from "@/assets/service-residential.jpg";
import residentialImg2 from "@/assets/service-residential-2.jpg";
import residentialImg3 from "@/assets/service-residential-3.jpg";
import maintenanceImg from "@/assets/service-maintenance.jpg";
import maintenanceImg2 from "@/assets/service-maintenance-2.jpg";
import maintenanceImg3 from "@/assets/service-maintenance-3.jpg";

const serviceData: Record<string, {
  title: string;
  images: string[];
  problem: string;
  solution: string;
  steps: string[];
  compliance: string;
  results: string;
}> = {
  "legal-basement": {
    title: "Legal Basement Construction",
    images: [basementImg, basementImg2, basementImg3],
    problem: "Most homeowners want to develop their basements but face confusing permit processes, code requirements, and the risk of costly rework if inspections fail. Unlicensed contractors often cut corners, leaving homeowners with illegal suites that can't be rented.",
    solution: "Shavi Homes handles the entire process — from permit applications to final inspection. We design and build basements that meet every Calgary building code requirement, ensuring you pass inspection on the first try.",
    steps: ["Free site assessment & feasibility check", "Custom design with permit-ready drawings", "Permit submission & approval management", "Full construction with milestone updates", "Final inspection & code-compliant handover"],
    compliance: "All work meets Calgary's Safety Codes Act, Alberta Building Code, and local zoning bylaws. We handle separate entrance requirements, egress windows, fire separation, HVAC, plumbing, and electrical to code.",
    results: "Homeowners typically see $1,500–$2,000+/month in rental income and a $80K–$120K increase in property value. Your legal basement becomes a genuine income-generating asset.",
  },
  "secondary-suite": {
    title: "Secondary Suite Development",
    images: [suiteImg, suiteImg2, suiteImg3],
    problem: "Building a secondary suite involves navigating complex zoning bylaws, minimum size requirements, and safety regulations. Many contractors lack experience with the specific compliance needs of legal secondary suites.",
    solution: "We specialize in secondary suites designed to maximize rental income while meeting all legal requirements. Every suite features separate entrance, full kitchen, bathroom, and living space — built for long-term tenant comfort.",
    steps: ["Zoning & feasibility review", "Suite design optimized for rental ROI", "Permit applications & approvals", "Construction with quality checkpoints", "Final inspection & tenant-ready handover"],
    compliance: "Full compliance with Calgary's secondary suite regulations including minimum ceiling heights, egress requirements, fire separation, sound insulation, and parking provisions.",
    results: "Our secondary suites generate consistent rental income and significantly increase your property's market value. Most clients see full ROI within 3–5 years.",
  },
  "pharmacy": {
    title: "Pharmacy Construction",
    images: [pharmacyImg, pharmacyImg2, pharmacyImg3],
    problem: "Pharmacy construction requires specialized knowledge of regulatory layouts, controlled substance storage, accessibility standards, and Alberta College of Pharmacy requirements — most general contractors lack this expertise.",
    solution: "We build purpose-designed pharmacies that meet every regulatory requirement from day one. Our team understands the specific needs of pharmaceutical retail and clinical pharmacy spaces.",
    steps: ["Regulatory consultation & space planning", "Design meeting all pharmacy standards", "Permit & licensing coordination", "Construction with minimal disruption", "Final handover with compliance documentation"],
    compliance: "All builds meet Alberta College of Pharmacy standards, Health Canada requirements, accessibility codes, and local building regulations.",
    results: "Our pharmacy builds open on schedule, pass all inspections, and provide optimized patient flow and staff efficiency from day one.",
  },
  "medical-clinic": {
    title: "Medical Clinic Construction",
    images: [clinicImg, clinicImg2, clinicImg3],
    problem: "Healthcare facilities require precise attention to patient flow, infection control, accessibility, and privacy regulations. Poor construction planning leads to operational inefficiencies and compliance issues.",
    solution: "We design and build medical clinics that prioritize patient experience, staff workflow, and regulatory compliance. From single-practitioner offices to multi-specialty clinics.",
    steps: ["Healthcare space planning consultation", "Clinical design with patient flow optimization", "Regulatory approvals & permits", "Construction with infection control protocols", "Commissioning & compliance verification"],
    compliance: "Full compliance with Alberta Health Services requirements, AODA accessibility standards, infection prevention guidelines, and privacy regulations for medical records.",
    results: "Our clinics operate efficiently from opening day with optimized patient flow, satisfied staff, and zero compliance concerns.",
  },
  "office": {
    title: "Office Construction",
    images: [officeImg, officeImg2, officeImg3],
    problem: "Modern offices need to balance open collaboration spaces with focused work areas, integrate technology infrastructure, and meet evolving workplace expectations — all while staying on budget.",
    solution: "We create modern workspaces engineered for productivity. Our office builds integrate smart technology, flexible layouts, and premium finishes that attract and retain top talent.",
    steps: ["Workspace needs assessment", "Design for productivity & collaboration", "Technology infrastructure planning", "Phased construction (minimal disruption)", "Final fit-out & move-in coordination"],
    compliance: "All office builds meet commercial building codes, fire safety requirements, accessibility standards, and energy efficiency regulations.",
    results: "Our office spaces improve employee satisfaction, reduce operational costs, and project the professional image your business deserves.",
  },
  "spa-wellness": {
    title: "Spa & Wellness Buildouts",
    images: [spaImg, spaImg2, spaImg3],
    problem: "Wellness spaces require specialized plumbing, ventilation, moisture control, and ambiance engineering that most contractors simply don't understand. Poor construction leads to maintenance nightmares.",
    solution: "We build luxurious spa and wellness environments with proper moisture management, ventilation systems, and premium finishes that create an unforgettable client experience.",
    steps: ["Wellness space consultation", "Ambiance-focused design & material selection", "Specialized MEP engineering", "Construction with quality-controlled finishes", "Final inspection & environment testing"],
    compliance: "All builds meet health and safety codes, commercial plumbing requirements, ventilation standards, and accessibility regulations specific to wellness facilities.",
    results: "Our spa builds deliver the premium client experience that drives repeat bookings and positive reviews — built to last with minimal maintenance.",
  },
  "commercial": {
    title: "Commercial Construction",
    images: [commercialImg, commercialImg2, commercialImg3],
    problem: "Commercial projects demand strict timelines, complex permitting, multi-trade coordination, and compliance with commercial building codes. Delays and cost overruns are the norm with inexperienced contractors.",
    solution: "Shavi Homes delivers full-scale commercial construction — from retail stores and restaurants to warehouses and mixed-use developments. We manage every phase from permits to punch list, on time and on budget.",
    steps: ["Commercial feasibility & site assessment", "Architectural design & permit coordination", "Multi-trade scheduling & procurement", "Phased construction with milestone reporting", "Final inspection, commissioning & handover"],
    compliance: "Full compliance with Alberta commercial building codes, fire safety regulations, accessibility standards (AODA), environmental requirements, and municipal zoning bylaws.",
    results: "Our commercial clients open on schedule with zero compliance issues. We've delivered retail, restaurant, and warehouse projects that operate efficiently from day one.",
  },
  "residential": {
    title: "Residential Construction",
    images: [residentialImg, residentialImg2, residentialImg3],
    problem: "Homeowners struggle to find contractors who deliver quality craftsmanship on time and within budget. Poor communication, hidden costs, and subpar finishes are all too common in residential construction.",
    solution: "We build custom homes, renovations, and additions with meticulous attention to detail. Every project includes transparent pricing, regular updates, and finishes that exceed expectations.",
    steps: ["In-home consultation & design vision", "Custom architectural plans & budgeting", "Permit applications & approvals", "Construction with weekly progress updates", "Final walkthrough & quality-assured handover"],
    compliance: "All residential work meets Alberta Building Code, energy efficiency standards, Calgary zoning bylaws, and safety codes. We handle all permits and inspections.",
    results: "Our homeowners love their spaces — beautifully crafted homes built to last, on budget, and completed when promised. Average client satisfaction rating: 4.9/5.",
  },
  "maintenance": {
    title: "Maintenance Services",
    images: [maintenanceImg, maintenanceImg2, maintenanceImg3],
    problem: "Property owners struggle to find reliable, skilled maintenance providers who respond quickly and deliver quality work. Unresolved maintenance issues lead to costly repairs, tenant complaints, and property value decline.",
    solution: "Shavi Homes offers comprehensive maintenance services for both residential and commercial properties. From routine HVAC servicing and plumbing repairs to electrical work and general upkeep — we keep your property running smoothly year-round.",
    steps: ["Maintenance request & priority assessment", "Scheduled site visit & diagnosis", "Transparent quote & approval", "Professional repair or service", "Quality check & preventive recommendations"],
    compliance: "All maintenance work meets Alberta Safety Codes, electrical and plumbing regulations, and HVAC industry standards. Our licensed technicians are fully insured and certified.",
    results: "Our maintenance clients enjoy fewer emergency repairs, longer equipment lifespans, and happier tenants. Properties under our care maintain peak condition and higher market value.",
  },
};

const ServicePage = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = slug ? serviceData[slug] : null;

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Service not found</h1>
          <Button asChild>
            <Link to="/">Back to Home</Link>
          </Button>
        </div>
      </div>
    );
  }

  const sections = [
    { icon: ClipboardList, title: "The Problem", content: service.problem },
    { icon: CheckCircle, title: "Our Solution", content: service.solution },
    { icon: Shield, title: "Compliance & Safety", content: service.compliance },
    { icon: TrendingUp, title: "Results & ROI", content: service.results },
  ];

  return (
    <div className="min-h-screen">
      <Header />

      {/* Banner */}
      <section className="relative h-[50vh] min-h-[400px] flex items-end">
        <div className="absolute inset-0">
          <img src={service.images[0]} alt={service.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-heading/70" />
        </div>
        <div className="relative z-10 container-tight px-4 sm:px-6 lg:px-8 pb-12">
          <Link to="/#services" className="inline-flex items-center gap-2 text-primary-foreground/70 hover:text-primary-foreground mb-4 text-sm font-medium transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to Services
          </Link>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-primary-foreground">
            {service.title}
          </h1>
        </div>
      </section>

      {/* Content */}
      <div className="container-tight px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-12">
            {sections.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <s.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold">{s.title}</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed">{s.content}</p>
              </motion.div>
            ))}

            {/* Process Steps */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl font-bold mb-6">Our Process</h2>
              <div className="space-y-4">
                {service.steps.map((step, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shrink-0 text-sm font-bold text-primary-foreground">
                      {i + 1}
                    </div>
                    <p className="text-foreground font-medium pt-1">{step}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Image Gallery */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <ServiceGallery images={service.images} title={service.title} interval={2000} />
            </motion.div>
          </div>

          {/* Sidebar CTA */}
          <div>
            <div className="sticky top-24 bg-card rounded-2xl p-8 shadow-lg border border-border">
              <h3 className="text-xl font-bold mb-4">Ready to Get Started?</h3>
              <p className="text-muted-foreground text-sm mb-6">
                Get a free consultation and custom plan for your {service.title.toLowerCase()} project.
              </p>
              <Button variant="cta" className="w-full py-6 text-base mb-3 cta-pulse" asChild>
                <a href={`/contact?service=${encodeURIComponent(service.title)}`}>Book Consultation</a>
              </Button>
              <Button variant="ctaOutline" className="w-full py-5" asChild>
                <a href="tel:+14035551234">Call (403) 555-1234</a>
              </Button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default ServicePage;
