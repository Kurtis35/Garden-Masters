import { Leaf, MapPin, Phone, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-foreground text-white py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="bg-primary p-2 rounded-xl text-primary-foreground">
                <Leaf className="w-6 h-6" />
              </div>
              <span className="font-display font-bold text-2xl tracking-tight">
                Gardenmasters
              </span>
            </div>
            <p className="text-white/70 max-w-sm">
              Transforming Cape Town's outdoor spaces with premium landscaping, 
              garden design, and professional maintenance services.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-display font-bold text-xl">Quick Links</h4>
            <nav className="flex flex-col space-y-2">
              <a href="#services" className="text-white/70 hover:text-white transition-colors w-fit">Services</a>
              <a href="#gallery" className="text-white/70 hover:text-white transition-colors w-fit">Our Work</a>
              <a href="#about" className="text-white/70 hover:text-white transition-colors w-fit">About Us</a>
              <a href="#reviews" className="text-white/70 hover:text-white transition-colors w-fit">Reviews</a>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-display font-bold text-xl">Contact Us</h4>
            <div className="space-y-3">
              <a href="tel:+27658415382" className="flex items-start gap-3 text-white/70 hover:text-white transition-colors">
                <Phone className="w-5 h-5 shrink-0 mt-0.5" />
                <span>065 841 5382</span>
              </a>
              <a href="mailto:info@gardenmasters.co.za" className="flex items-start gap-3 text-white/70 hover:text-white transition-colors">
                <Mail className="w-5 h-5 shrink-0 mt-0.5" />
                <span>info@gardenmasters.co.za</span>
              </a>
              <div className="flex items-start gap-3 text-white/70">
                <MapPin className="w-5 h-5 shrink-0 mt-0.5" />
                <span>
                  Mountain View Heights, 91 Serenade St<br />
                  Northpine, Cape Town 7505<br />
                  South Africa
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 text-center text-white/50 text-sm">
          <p>&copy; {new Date().getFullYear()} Gardenmasters Landscaping S.A. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
