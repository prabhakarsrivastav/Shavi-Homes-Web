import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, User, Tag } from "lucide-react";
import { Link } from "react-router-dom";

// Importing images for blog posts
import blog1Img from "@/assets/service-basement.jpg";
import blog2Img from "@/assets/service-suite-2.jpg";
import blog3Img from "@/assets/service-pharmacy.jpg";
import blog4Img from "@/assets/service-clinic.jpg";
import blog5Img from "@/assets/service-office.jpg";
import blog6Img from "@/assets/service-spa.jpg";

const blogPosts = [
  {
    id: 1,
    title: "5 Things to Know Before Building a Legal Basement in Calgary",
    excerpt: "Building a legal basement involves more than just construction. From ceiling heights to separate heating, here's what you need to know about Calgary's bylaws.",
    image: blog1Img,
    category: "Legal Basement",
    author: "Shavi Homes Team",
    date: "Mar 30, 2026",
    slug: "legal-basement-calgary-guide",
  },
  {
    id: 2,
    title: "The ROI of Secondary Suites: How Much Can You Really Earn?",
    excerpt: "Discover how a secondary suite can pay off your mortgage faster and increase your property value by up to 20% in the current Calgary market.",
    image: blog2Img,
    category: "Investment",
    author: "Financial Expert",
    date: "Mar 25, 2026",
    slug: "secondary-suite-roi-analysis",
  },
  {
    id: 3,
    title: "Designing the Perfect Pharmacy: Compliance & Patient Experience",
    excerpt: "Healthcare construction requires a balance of strict regulatory compliance and a welcoming patient environment. We break down the essentials.",
    image: blog3Img,
    category: "Commercial",
    author: "Architecture Lead",
    date: "Mar 18, 2026",
    slug: "pharmacy-design-compliance",
  },
  {
    id: 4,
    title: "Why a Professional Medical Clinic Layout Matters for Your Practice",
    excerpt: "Patient flow, privacy, and infection control — a well-designed clinic layout can improve both staff efficiency and patient satisfaction.",
    image: blog4Img,
    category: "Medical",
    author: "Project Manager",
    date: "Mar 12, 2026",
    slug: "medical-clinic-layout-importance",
  },
  {
    id: 5,
    title: "Modern Office Trends: Creating a Space Your Team Loves",
    excerpt: "From open collaboration zones to quiet pods, see how modern office design is evolving to support hybrid work and team well-being.",
    image: blog5Img,
    category: "Office",
    author: "Design Team",
    date: "Mar 05, 2026",
    slug: "modern-office-design-trends",
  },
  {
    id: 6,
    title: "The Essentials of Spa & Wellness Center Construction",
    excerpt: "Building a spa requires specialized knowledge in moisture control, premium lighting, and acoustic privacy. Here's how we deliver luxury.",
    image: blog6Img,
    category: "Wellness",
    author: "Shavi Homes Team",
    date: "Feb 26, 2026",
    slug: "spa-wellness-construction-essentials",
  },
];

const BlogPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-heading overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-20 h-20 border-2 border-primary-foreground/30 rounded-full" />
          <div className="absolute bottom-16 left-1/4 w-6 h-6 border-2 border-primary rounded-full" />
        </div>
        <div className="container-tight px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block text-primary font-semibold text-sm uppercase tracking-widest mb-4"
          >
            Insights & Guides
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-heading font-black text-primary-foreground mb-6"
          >
            Our Latest <span className="gradient-text">Articles</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-primary-foreground/70 text-lg max-w-2xl mx-auto"
          >
            Stay updated with the latest trends in residential and commercial construction, regulatory changes in Calgary, and investment tips.
          </motion.p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="section-padding">
        <div className="container-tight px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {blogPosts.map((post, i) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="group flex flex-col bg-card rounded-2xl overflow-hidden border border-border shadow-sm hover-lift"
              >
                {/* Image */}
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full bg-heading/80 backdrop-blur-md text-primary-foreground text-[10px] font-bold uppercase tracking-widest border border-white/10">
                      {post.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-primary" />
                      {post.date}
                    </div>
                    <div className="flex items-center gap-1.5">
                      <User className="w-3.5 h-3.5 text-primary" />
                      {post.author}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="mt-auto">
                    <Button variant="ghost" className="p-0 h-auto text-primary font-bold group-hover:gap-3 transition-all" asChild>
                      <Link to={`/blog/${post.slug}`}>
                        Read More <ArrowRight className="w-4 h-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Pagination Placeholder */}
          <div className="mt-16 flex justify-center">
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" disabled>Previous</Button>
              <Button variant="outline" size="sm" className="bg-primary text-primary-foreground border-primary hover:bg-primary/90">1</Button>
              <Button variant="outline" size="sm">2</Button>
              <Button variant="outline" size="sm">Next</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="section-padding section-alt pt-0">
        <div className="container-tight px-4 sm:px-6 lg:px-8">
          <div className="bg-heading rounded-[2rem] p-8 sm:p-12 lg:p-16 relative overflow-hidden text-center sm:text-left">
            {/* Shapes */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full translate-x-1/2 -translate-y-1/2 blur-3xl" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-primary/20 rounded-full -translate-x-1/2 translate-y-1/2 blur-2xl" />

            <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
              <div>
                <h2 className="text-3xl sm:text-4xl font-heading font-black text-primary-foreground mb-4">
                  Stay Ahead With Our <span className="text-primary">Insights</span>
                </h2>
                <p className="text-primary-foreground/60 text-lg">
                  Subscribe to our newsletter and get the latest Calgary construction guides delivered to your inbox.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="h-14 flex-1 rounded-xl bg-white/5 border border-white/10 px-6 text-primary-foreground focus:outline-none focus:border-primary transition-colors"
                />
                <Button variant="cta" size="lg" className="h-14 px-8 text-base">
                  Subscribe Now
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default BlogPage;
