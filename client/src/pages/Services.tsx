import { motion } from "framer-motion";
import { 
  Leaf, Scissors, Trees, Droplets, Sparkles, 
  Star, Award, CheckCircle2, ArrowRight 
} from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { Button } from "@/components/ui/button";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12 }
  }
};

const services = [
  {
    icon: Leaf,
    title: "Landscaping Design",
    description: "Custom garden designs tailored to your vision and outdoor space",
    image: "https://images.unsplash.com/photo-1551431009-381d36ac3a99?w=800&h=600&fit=crop",
    benefits: ["Custom layouts", "3D visualization", "Sustainable designs", "Budget optimization"]
  },
  {
    icon: Scissors,
    title: "Lawn Maintenance",
    description: "Professional lawn care and maintenance for year-round beauty",
    image: "https://images.unsplash.com/photo-1564695899-91f4155f5fbf?w=800&h=600&fit=crop",
    benefits: ["Weekly trimming", "Soil health", "Weed control", "Pest management"]
  },
  {
    icon: Trees,
    title: "Tree Trimming",
    description: "Expert tree care, pruning, and removal services",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop",
    benefits: ["Safety pruning", "Disease treatment", "Shape maintenance", "Hazard removal"]
  },
  {
    icon: Droplets,
    title: "Irrigation Systems",
    description: "Smart watering solutions for efficient garden hydration",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop",
    benefits: ["Automated systems", "Water savings", "Smart scheduling", "Installation & repair"]
  },
  {
    icon: Sparkles,
    title: "Garden Cleanups",
    description: "Complete garden restoration and seasonal cleanup services",
    image: "https://images.unsplash.com/photo-1598234657869-2a1d401b0d56?w=800&h=600&fit=crop",
    benefits: ["Debris removal", "Seasonal prep", "Deep cleaning", "Landscaping refresh"]
  },
  {
    icon: Award,
    title: "Residential Care",
    description: "Comprehensive garden maintenance for homeowners",
    image: "https://images.unsplash.com/photo-1594622852884-dcdba6d796d1?w=800&h=600&fit=crop",
    benefits: ["Regular upkeep", "Seasonal service", "Emergency care", "24/7 availability"]
  }
];

const processSteps = [
  { step: "01", title: "Consultation", desc: "Free site visit and detailed project discussion" },
  { step: "02", title: "Design", desc: "Custom plans and 3D visualization" },
  { step: "03", title: "Execution", desc: "Professional installation and setup" },
  { step: "04", title: "Maintenance", desc: "Ongoing care and seasonal services" }
];

export default function Services() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <FloatingWhatsApp />

      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1551431009-381d36ac3a99?w=1200&h=800&fit=crop"
            alt="Services" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-background"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Premium Landscaping Services
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Complete outdoor solutions for residential and commercial properties
            </p>
            <Button 
              size="lg" 
              className="bg-accent hover:bg-accent/90 text-foreground"
              onClick={() => window.location.href = "tel:+27658415382"}
            >
              Get Your Free Consultation
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              variants={fadeInUp}
              className="group bg-white rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <service.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">{service.title}</h3>
                </div>
                
                <p className="text-muted-foreground mb-6">{service.description}</p>
                
                <div className="space-y-3 mb-6">
                  {service.benefits.map((benefit, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{benefit}</span>
                    </div>
                  ))}
                </div>

                <Button 
                  variant="outline" 
                  className="w-full group/btn"
                  onClick={() => window.location.href = "https://wa.me/27658415382"}
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary/5">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Process</h2>
            <p className="text-lg text-muted-foreground">From consultation to completion in four simple steps</p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-4 gap-8"
          >
            {processSteps.map((item, idx) => (
              <motion.div key={idx} variants={fadeInUp} className="relative">
                <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                  <div className="text-5xl font-bold text-primary/20 mb-4">{item.step}</div>
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.desc}</p>
                </div>
                {idx < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="w-8 h-8 text-primary/30" />
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-primary to-primary/70 rounded-3xl p-12 text-center text-white">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-4">Ready to Transform Your Garden?</h2>
            <p className="text-xl text-white/90 mb-8">
              Contact us today for a free consultation and custom quote
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-white text-primary hover:bg-white/90"
                onClick={() => window.location.href = "tel:+27658415382"}
              >
                Call Now
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10"
                onClick={() => window.location.href = "https://wa.me/27658415382"}
              >
                WhatsApp Us
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
