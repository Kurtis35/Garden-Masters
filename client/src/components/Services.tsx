import { motion } from "framer-motion";
import { TreePine, Scissors, Droplets, Leaf, Trash2, Home } from "lucide-react";

const services = [
  {
    icon: <TreePine className="w-8 h-8" />,
    title: "Landscaping Design",
    description: "Custom garden layouts tailored to your property, bringing your vision to life with expert plant selection."
  },
  {
    icon: <Scissors className="w-8 h-8" />,
    title: "Lawn Maintenance",
    description: "Regular mowing, edging, and fertilizing to keep your grass lush, green, and healthy year-round."
  },
  {
    icon: <Leaf className="w-8 h-8" />,
    title: "Tree Trimming",
    description: "Professional pruning and tree care to ensure healthy growth and structural safety of your garden."
  },
  {
    icon: <Droplets className="w-8 h-8" />,
    title: "Irrigation Systems",
    description: "Smart watering solutions designed to save water while keeping your plants perfectly hydrated."
  },
  {
    icon: <Trash2 className="w-8 h-8" />,
    title: "Garden Cleanups",
    description: "Seasonal or once-off intensive cleanups to restore order to overgrown or neglected outdoor spaces."
  },
  {
    icon: <Home className="w-8 h-8" />,
    title: "Residential Care",
    description: "Ongoing comprehensive garden care packages designed specifically for residential properties."
  }
];

export default function Services() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-2 mb-4"
          >
            <div className="w-12 h-[2px] bg-primary"></div>
            <span className="text-primary font-bold tracking-wider uppercase text-sm">Our Expertise</span>
            <div className="w-12 h-[2px] bg-primary"></div>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6"
          >
            Services We Provide
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground text-lg"
          >
            From conceptual design to regular maintenance, our team of experts ensures your outdoor space remains a beautiful sanctuary.
          </motion.p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="bg-card rounded-2xl p-8 border border-border shadow-sm hover:shadow-xl hover:border-primary/20 hover:-translate-y-2 transition-all duration-300 group"
            >
              <div className="w-16 h-16 rounded-xl bg-secondary flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                {service.icon}
              </div>
              <h3 className="text-2xl font-display font-bold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
