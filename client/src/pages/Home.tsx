import { motion } from "framer-motion";
import { 
  Leaf, Scissors, Trees, Droplets, Sparkles, Home as HomeIcon, 
  Star, Clock, Award, MapPin, ThumbsUp, ArrowRight, MessageCircle, Phone 
} from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";

// Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <FloatingWhatsApp />

      {/* 1. Hero Section */}
      <section id="home" className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
        {/* landing page hero scenic luxury landscaping landscape */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://pixabay.com/get/gbdc18b8c44b563892c3368b41b1e0efdcb65e82627642cb2c3c6e0cb3bb888dcc3ea030765f0a7218c4db4f978778429e89cfbd6f79b8b296e04c1cc0a58c04f_1280.jpg" 
            alt="Beautiful garden landscaping" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-foreground/70 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-background"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white mb-6">
              <Leaf className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium tracking-wide uppercase">Cape Town's Premier Landscapers</span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white leading-tight mb-6 drop-shadow-lg">
              Premium Landscaping in Cape Town
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl leading-relaxed">
              Transform your garden into a beautiful outdoor space with professional landscaping, lawn care and garden maintenance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="https://wa.me/27658415382"
                className="inline-flex justify-center items-center gap-2 px-8 py-4 rounded-xl bg-primary text-primary-foreground font-semibold text-lg hover:bg-primary/90 hover:scale-105 active:scale-95 transition-all duration-200 shadow-xl shadow-primary/30"
              >
                <MessageCircle className="w-5 h-5" />
                Get Free Quote
              </a>
              <a 
                href="#gallery"
                className="inline-flex justify-center items-center gap-2 px-8 py-4 rounded-xl bg-white/10 backdrop-blur-md text-white border border-white/30 font-semibold text-lg hover:bg-white/20 hover:scale-105 active:scale-95 transition-all duration-200"
              >
                View Our Work
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. Services Section */}
      <section id="services" className="py-24 bg-background relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">Our Services</h2>
            <p className="text-lg text-muted-foreground">
              Comprehensive landscaping solutions tailored to bring your outdoor vision to life and maintain its beauty year-round.
            </p>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {[
              { title: "Landscaping Design", desc: "Custom designs and planning to create your dream outdoor sanctuary.", icon: Leaf },
              { title: "Lawn Maintenance", desc: "Regular mowing, edging, and feeding for a lush, vibrant green lawn.", icon: Scissors },
              { title: "Tree Trimming", desc: "Professional pruning, shaping, and felling for healthy, beautiful trees.", icon: Trees },
              { title: "Irrigation Systems", desc: "Smart automated watering solutions to keep your garden perfectly hydrated.", icon: Droplets },
              { title: "Garden Cleanups", desc: "Thorough seasonal clearing, weeding, and complete refuse removal.", icon: Sparkles },
              { title: "Residential Garden Care", desc: "Comprehensive ongoing maintenance packages for peace of mind.", icon: HomeIcon }
            ].map((service, idx) => (
              <motion.div 
                key={idx}
                variants={fadeInUp}
                className="bg-card p-8 rounded-3xl shadow-lg shadow-black/5 border border-border/60 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                  <service.icon className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold font-display text-foreground mb-3">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 3. Why Choose Us */}
      <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
        {/* Decorative background element */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
          <Leaf className="absolute -top-20 -left-20 w-96 h-96 text-white rotate-45" />
          <Leaf className="absolute -bottom-20 -right-20 w-96 h-96 text-white -rotate-45" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
            >
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">Why Choose Gardenmasters?</h2>
              <p className="text-lg text-primary-foreground/80 mb-8 leading-relaxed">
                With years of experience in Cape Town's unique climate, we deliver reliable, high-quality landscaping services that transform ordinary spaces into extraordinary natural retreats.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { title: "5 Star Rated Service", icon: Star },
                  { title: "Open 24 Hours", icon: Clock },
                  { title: "Professional Experts", icon: Award },
                  { title: "Serving Cape Town", icon: MapPin },
                  { title: "Affordable Pricing", icon: ThumbsUp },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                      <item.icon className="w-6 h-6 text-accent" />
                    </div>
                    <span className="font-semibold text-lg">{item.title}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl"
            >
              {/* beautifully manicured lawn and garden path */}
              <img 
                src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=1000&auto=format&fit=crop" 
                alt="Professional garden maintenance"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. Gallery Section */}
      <section id="gallery" className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">Our Recent Work</h2>
            <p className="text-lg text-muted-foreground">
              Take a look at some of the beautiful spaces we've created for our happy clients around Cape Town.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {[
              "https://images.unsplash.com/photo-1558904541-efa843a96f0f?q=80&w=800&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?q=80&w=800&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1598902586026-646700ab2f20?q=80&w=800&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1592424001801-1b2046bc9b3e?q=80&w=800&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=800&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1416879598553-56839352136e?q=80&w=800&auto=format&fit=crop"
            ].map((imgUrl, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="relative aspect-square rounded-2xl overflow-hidden group cursor-pointer shadow-md"
              >
                {/* gallery item landscaping */}
                <img 
                  src={imgUrl} 
                  alt={`Landscaping project ${idx + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <span className="text-white font-medium text-lg flex items-center gap-2">
                    View Project <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Reviews Section */}
      <section id="reviews" className="py-24 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">What Our Clients Say</h2>
            <p className="text-lg text-muted-foreground">
              Don't just take our word for it. Here's what homeowners in Cape Town think about our services.
            </p>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              { name: "Sarah Jenkins", text: "Gardenmasters completely transformed my backyard! The team was professional, on time, and exceeded all my expectations." },
              { name: "David M.", text: "Exceptional service. They installed a new irrigation system and redesigned my flower beds. Highly recommended." },
              { name: "Amanda T.", text: "Very affordable and high quality work. My lawn has never looked this green and healthy. Fantastic job!" }
            ].map((review, idx) => (
              <motion.div 
                key={idx}
                variants={fadeInUp}
                className="bg-card p-8 rounded-3xl shadow-lg border border-border"
              >
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current text-[#F59E0B]" />
                  ))}
                </div>
                <p className="text-foreground/80 mb-6 text-lg italic">"{review.text}"</p>
                <div className="font-bold text-foreground">{review.name}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 6. About Section */}
      <section id="about" className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative rounded-3xl overflow-hidden shadow-2xl order-2 lg:order-1 h-[400px] lg:h-[600px]"
            >
              {/* landscape gardener at work */}
              <img 
                src="https://pixabay.com/get/ga5ed00319174f980240bbdd35a8d442c26da91e9f72e52a8c0dd441a22d6d4b5b40916d560b816420e635f12cc731254318c230ea91f3c6fd578901d41cdb206_1280.jpg" 
                alt="About Gardenmasters"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-3xl pointer-events-none"></div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="order-1 lg:order-2"
            >
              <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">About Us</h2>
              <h3 className="text-2xl text-primary font-semibold mb-6">
                Your Trusted Landscaping Partner in Cape Town
              </h3>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Gardenmasters Landscaping S.A is a trusted landscaping company in Cape Town specializing in garden design, lawn care, and outdoor transformations. 
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                We believe that a beautiful garden is essential for a happy home. Whether you need a complete garden overhaul, a new irrigation system, or regular maintenance to keep your lawn pristine, our team of experts is ready to help you create an outdoor space you can enjoy year-round.
              </p>
              <a 
                href="tel:+27658415382"
                className="inline-flex justify-center items-center gap-2 px-8 py-4 rounded-xl bg-primary text-primary-foreground font-semibold text-lg hover:bg-primary/90 hover:-translate-y-1 transition-all duration-200 shadow-lg shadow-primary/25"
              >
                <Phone className="w-5 h-5" />
                Speak to an Expert
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 7. Contact Section */}
      <section id="contact" className="py-24 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-card rounded-[2.5rem] shadow-xl overflow-hidden border border-border">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-10 md:p-16 flex flex-col justify-center">
                <motion.div
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  variants={fadeInUp}
                >
                  <h2 className="text-4xl font-display font-bold text-foreground mb-4">Get In Touch</h2>
                  <p className="text-muted-foreground mb-10 text-lg">
                    Ready to start your landscaping project? Contact us today for a free consultation and quote.
                  </p>

                  <div className="space-y-6 mb-12">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-bold text-foreground">Location</h4>
                        <p className="text-muted-foreground">Mountain View Heights, 91 Serenade St,<br />Northpine, Cape Town 7505</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Phone className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-bold text-foreground">Phone</h4>
                        <a href="tel:+27658415382" className="text-muted-foreground hover:text-primary transition-colors">065 841 5382</a>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <a 
                      href="tel:+27658415382"
                      className="flex-1 inline-flex justify-center items-center gap-2 px-6 py-4 rounded-xl bg-foreground text-white font-semibold hover:bg-foreground/90 transition-all"
                    >
                      <Phone className="w-5 h-5" />
                      Call Now
                    </a>
                    <a 
                      href="https://wa.me/27658415382"
                      className="flex-1 inline-flex justify-center items-center gap-2 px-6 py-4 rounded-xl bg-[#25D366] text-white font-semibold hover:bg-[#25D366]/90 transition-all shadow-lg shadow-[#25D366]/20"
                    >
                      <MessageCircle className="w-5 h-5" />
                      WhatsApp Us
                    </a>
                  </div>
                </motion.div>
              </div>

              {/* Map Iframe */}
              <div className="h-[400px] lg:h-auto min-h-[400px] bg-muted/50 relative">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3310.222271816773!2d18.6946627!3d-33.8643878!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dcc56b8259db127%3A0xcda8d011c7788424!2s91%20Serenade%20St%2C%20Northpine%2C%20Cape%20Town%2C%207560%2C%20South%20Africa!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus" 
                  className="absolute inset-0 w-full h-full border-0"
                  allowFullScreen
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Gardenmasters Location Map"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
