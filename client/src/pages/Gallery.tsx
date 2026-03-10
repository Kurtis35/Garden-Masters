import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Filter } from "lucide-react";

const galleryImages = [
  {
    id: 1,
    category: "Design",
    title: "Modern Garden Layout",
    image: "https://images.unsplash.com/photo-1551431009-381d36ac3a99?w=600&h=600&fit=crop"
  },
  {
    id: 2,
    category: "Maintenance",
    title: "Lawn Care Excellence",
    image: "https://images.unsplash.com/photo-1564695899-91f4155f5fbf?w=600&h=600&fit=crop"
  },
  {
    id: 3,
    category: "Trees",
    title: "Tree Trimming Project",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=600&fit=crop"
  },
  {
    id: 4,
    category: "Design",
    title: "Luxury Landscape Design",
    image: "https://images.unsplash.com/photo-1598234657869-2a1d401b0d56?w=600&h=600&fit=crop"
  },
  {
    id: 5,
    category: "Irrigation",
    title: "Smart Watering System",
    image: "https://images.unsplash.com/photo-1594622852884-dcdba6d796d1?w=600&h=600&fit=crop"
  },
  {
    id: 6,
    category: "Maintenance",
    title: "Garden Restoration",
    image: "https://images.unsplash.com/photo-1519097482213-23629c548ce0?w=600&h=600&fit=crop"
  },
  {
    id: 7,
    category: "Design",
    title: "Landscape Transformation",
    image: "https://images.unsplash.com/photo-1585844992996-3b92fc945287?w=600&h=600&fit=crop"
  },
  {
    id: 8,
    category: "Trees",
    title: "Professional Tree Care",
    image: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=600&h=600&fit=crop"
  },
  {
    id: 9,
    category: "Design",
    title: "Contemporary Garden Space",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=600&fit=crop"
  },
  {
    id: 10,
    category: "Maintenance",
    title: "Seasonal Cleanup",
    image: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=600&h=600&fit=crop"
  },
  {
    id: 11,
    category: "Irrigation",
    title: "Automated Garden System",
    image: "https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?w=600&h=600&fit=crop"
  },
  {
    id: 12,
    category: "Design",
    title: "Zen Garden Design",
    image: "https://images.unsplash.com/photo-1518895949257-7621c3c786d7?w=600&h=600&fit=crop"
  }
];

const categories = ["All", "Design", "Maintenance", "Trees", "Irrigation"];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredImages = activeCategory === "All" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <FloatingWhatsApp />

      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1585844992996-3b92fc945287?w=1200&h=800&fit=crop"
            alt="Gallery" 
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
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Our Gallery
            </h1>
            <p className="text-xl text-white/90">
              Explore our portfolio of stunning landscaping transformations
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Buttons */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white/50 backdrop-blur-sm sticky top-20 z-20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap gap-3 justify-center items-center"
          >
            <Filter className="w-5 h-5 text-muted-foreground" />
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-primary text-white shadow-lg scale-105"
                    : "bg-white text-foreground border border-border hover:bg-primary/10"
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredImages.map((image, idx) => (
            <motion.div
              key={image.id}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="group relative h-80 rounded-xl overflow-hidden cursor-pointer"
            >
              <img
                src={image.image}
                alt={image.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
              
              <div className="absolute inset-0 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="inline-block w-fit mb-2">
                  <span className="text-xs font-semibold text-accent bg-black/40 px-3 py-1 rounded-full">
                    {image.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white">{image.title}</h3>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary/5">
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-primary to-primary/70 rounded-3xl p-12 text-center text-white">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-4">Inspired by Our Work?</h2>
            <p className="text-xl text-white/90 mb-8">
              Let's create something beautiful for your space
            </p>
            <Button 
              size="lg"
              className="bg-white text-primary hover:bg-white/90"
              onClick={() => window.location.href = "https://wa.me/27658415382"}
            >
              Get Your Free Quote
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
