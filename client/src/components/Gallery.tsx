import { motion } from "framer-motion";

const images = [
  // gallery landscaping luxury backyard
  "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=800&auto=format&fit=crop",
  // gallery beautiful manicured lawn
  "https://images.unsplash.com/photo-1558904541-efa843a96f0f?q=80&w=800&auto=format&fit=crop",
  // gallery garden path with plants
  "https://images.unsplash.com/photo-1550236520-7050fce0e58f?q=80&w=800&auto=format&fit=crop",
  // gallery landscaping patio
  "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?q=80&w=800&auto=format&fit=crop",
  // gallery modern garden design
  "https://images.unsplash.com/photo-1598902108854-10e335adac99?q=80&w=800&auto=format&fit=crop",
  // gallery lush green landscaping plants
  "https://images.unsplash.com/photo-1585074245728-ee18fb8f29ea?q=80&w=800&auto=format&fit=crop",
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-2 mb-4"
          >
            <div className="w-12 h-[2px] bg-primary"></div>
            <span className="text-primary font-bold tracking-wider uppercase text-sm">Portfolio</span>
            <div className="w-12 h-[2px] bg-primary"></div>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6"
          >
            Our Recent Work
          </motion.h2>
        </div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {images.map((src, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="break-inside-avoid relative group overflow-hidden rounded-2xl cursor-pointer shadow-md"
            >
              <img 
                src={src} 
                alt={`Landscaping project ${index + 1}`} 
                className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <p className="text-white font-medium text-lg">Project View</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
