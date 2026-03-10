import { motion } from "framer-motion";
import { Star, Clock, ShieldCheck, MapPin, BadgeDollarSign } from "lucide-react";

const reasons = [
  { icon: <Star className="w-6 h-6" />, text: "5 Star Rated Service" },
  { icon: <Clock className="w-6 h-6" />, text: "Open 24 Hours" },
  { icon: <ShieldCheck className="w-6 h-6" />, text: "Professional Experts" },
  { icon: <MapPin className="w-6 h-6" />, text: "Serving Cape Town" },
  { icon: <BadgeDollarSign className="w-6 h-6" />, text: "Affordable Pricing" },
];

export default function TrustIndicators() {
  return (
    <section className="py-16 bg-primary text-primary-foreground overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center gap-3"
            >
              <div className="p-3 bg-white/10 rounded-full backdrop-blur-sm">
                {reason.icon}
              </div>
              <span className="font-medium text-lg tracking-wide">{reason.text}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
