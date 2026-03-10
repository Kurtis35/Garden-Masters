import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MessageCircle, ArrowDown } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      {/* landing page hero luxury landscaping garden */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: 'url("https://pixabay.com/get/gf1c6d48ae999d4d120675a89d0a15265a5e7524d5eb49538d9e922e0cacbc70b7b85ccbaeb6052338ae6b14f167eb0384494b3c7836ef98e9fdc43ee8fe55331_1280.jpg")',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-background"></div>
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white text-sm font-medium tracking-wider uppercase mb-6">
              Expert Landscaping S.A
            </span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-6 text-balance leading-tight"
          >
            Premium Landscaping in Cape Town
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg md:text-xl text-white/90 mb-10 text-balance max-w-2xl mx-auto font-light"
          >
            Transform your garden into a beautiful outdoor space with professional landscaping, lawn care and garden maintenance.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a href="https://wa.me/27658415382" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
              <Button size="lg" className="w-full sm:w-auto h-14 px-8 text-base rounded-full bg-primary hover:bg-primary/90 text-white shadow-xl shadow-primary/30 gap-2">
                <MessageCircle className="w-5 h-5" />
                Get Free Quote
              </Button>
            </a>
            <a href="#gallery" className="w-full sm:w-auto">
              <Button size="lg" variant="outline" className="w-full sm:w-auto h-14 px-8 text-base rounded-full bg-white/10 backdrop-blur-md border-white/30 text-white hover:bg-white hover:text-foreground transition-all">
                View Our Work
              </Button>
            </a>
          </motion.div>
        </div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce"
      >
        <a href="#services" className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-primary transition-colors">
          <ArrowDown className="w-5 h-5" />
        </a>
      </motion.div>
    </section>
  );
}
