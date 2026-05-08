"use client";

import { motion } from "framer-motion";

interface HeroProps {
  onBookClick: () => void;
}

export default function Hero({ onBookClick }: HeroProps) {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-charcoal">
      {/* Background Video/Image Placeholder */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-charcoal/40 z-10" /> {/* Overlay for readability */}
        <img 
          src="https://images.unsplash.com/photo-1595959183082-7b570b7e08e2?q=80&w=2071&auto=format&fit=crop" 
          alt="Bridal Makeup" 
          className="object-cover w-full h-full opacity-80"
        />
        {/* Replace with <video> tag in production */}
      </div>

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full px-6 text-center text-softWhite">
        <motion.h1 
          className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold tracking-wide max-w-4xl leading-tight mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          Flawless Bridal Makeup for Your Special Day
        </motion.h1>
        
        <motion.p 
          className="font-sans text-lg md:text-xl font-light text-softWhite/90 mb-10 max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
        >
          Elevate your beauty with Eva Makeup Artist. Premium, luxury bridal services in Hyderabad by Renu & Indhu.
        </motion.p>

        <motion.button 
          onClick={onBookClick}
          className="bg-roseGold hover:bg-roseGold-dark text-softWhite font-sans px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-lg"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6, ease: "backOut" }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Book a Free Consultation
        </motion.button>
      </div>
    </section>
  );
}
