import { useState, useEffect } from "react";
import { Menu, X, Phone, Leaf } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "Gallery", href: "#gallery" },
    { name: "Reviews", href: "#reviews" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2 group">
            <div className="bg-primary p-2 rounded-xl text-primary-foreground group-hover:bg-accent transition-colors">
              <Leaf className="w-6 h-6" />
            </div>
            <span className={`font-display font-bold text-xl md:text-2xl tracking-tight transition-colors ${isScrolled ? 'text-foreground' : 'text-white drop-shadow-md'}`}>
              Gardenmasters
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  isScrolled ? "text-foreground/80" : "text-white/90 hover:text-white"
                }`}
              >
                {link.name}
              </a>
            ))}
            <a
              href="tel:+27658415382"
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-semibold transition-all hover:scale-105 active:scale-95 ${
                isScrolled
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30"
                  : "bg-white text-primary hover:bg-white/90"
              }`}
            >
              <Phone className="w-4 h-4" />
              Call Now
            </a>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className={`w-6 h-6 ${isScrolled ? 'text-foreground' : 'text-white'}`} />
            ) : (
              <Menu className={`w-6 h-6 ${isScrolled ? 'text-foreground' : 'text-white'}`} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white shadow-xl border-t border-border md:hidden"
          >
            <div className="flex flex-col p-4 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="px-4 py-3 text-base font-medium text-foreground hover:bg-muted rounded-xl transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="tel:+27658415382"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 px-4 py-3 bg-primary text-primary-foreground rounded-xl font-semibold"
              >
                <Phone className="w-5 h-5" />
                Call Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
