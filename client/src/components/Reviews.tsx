import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const reviews = [
  {
    name: "Sarah Jenkins",
    date: "2 months ago",
    text: "Gardenmasters completely transformed our backyard. Their attention to detail and professionalism is unmatched in Cape Town. Highly recommended for any landscaping needs!",
  },
  {
    name: "David Mbeki",
    date: "4 months ago",
    text: "Reliable, affordable, and they do incredible work. They fixed our irrigation system and now handle our weekly lawn maintenance. Top class service.",
  },
  {
    name: "Michelle Le Roux",
    date: "1 month ago",
    text: "From the initial design to the final planting, the team was fantastic. Our garden looks like something out of a magazine. Thank you Gardenmasters!",
  }
];

export default function Reviews() {
  return (
    <section id="reviews" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6"
          >
            What Our Clients Say
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex justify-center items-center gap-1 text-accent mb-4"
          >
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 fill-current" />
            ))}
          </motion.div>
          <p className="text-muted-foreground">Based on excellent customer reviews across Cape Town.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <Card className="h-full bg-card border-none shadow-lg shadow-black/5 hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                  <div className="flex gap-1 text-accent mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-current" />
                    ))}
                  </div>
                  <p className="text-foreground text-lg mb-8 italic">"{review.text}"</p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold text-xl">
                      {review.name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground">{review.name}</h4>
                      <span className="text-sm text-muted-foreground">{review.date}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
