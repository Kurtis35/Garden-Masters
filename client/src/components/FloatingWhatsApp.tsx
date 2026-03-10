import { FaWhatsapp } from "react-icons/fa";

export function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/27658415382"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-lg shadow-black/20 hover:scale-110 hover:shadow-xl hover:shadow-[#25D366]/40 active:scale-95 transition-all duration-300 animate-pulse"
      aria-label="Chat with us on WhatsApp"
    >
      <FaWhatsapp className="w-8 h-8" />
    </a>
  );
}
