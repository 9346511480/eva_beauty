"use client";

import { motion } from "framer-motion";
import PackageCard, { PackageFeature } from "../ui/PackageCard";

interface ServicesProps {
  onBookClick: () => void;
}

export default function Services({ onBookClick }: ServicesProps) {
  const packages = [
    {
      title: "HD Bridal Makeup",
      price: "₹20,000",
      description: "Flawless, high-definition makeup perfect for cameras and harsh lighting.",
      features: [
        { name: "HD Makeup Application", price: "₹12,000" },
        { name: "Elaborate Hair Styling", price: "₹4,000" },
        { name: "Saree/Lehenga Draping", price: "₹2,000" },
        { name: "Premium Mink Lashes", price: "₹1,000" },
        { name: "Nail Paint & Accessories Setup", price: "₹1,000" }
      ] as PackageFeature[],
      isPopular: false
    },
    {
      title: "Airbrush Bridal",
      price: "₹30,000",
      description: "Water-resistant, silicone-based makeup for a lightweight, natural, and long-lasting glow.",
      features: [
        { name: "Silicon-based Airbrush Base", price: "₹18,000" },
        { name: "Advanced Hair Styling", price: "₹5,000" },
        { name: "Complex Draping Techniques", price: "₹3,000" },
        { name: "Luxury 3D Mink Lashes", price: "₹2,000" },
        { name: "Glow Enhancing Body Shimmer", price: "₹2,000" }
      ] as PackageFeature[],
      isPopular: true
    },
    {
      title: "Party / Reception",
      price: "₹12,000",
      description: "Elegant and sophisticated looks for bridesmaids, family, or your reception night.",
      features: [
        { name: "Flawless Party Base", price: "₹7,000" },
        { name: "Elegant Hair Do", price: "₹3,000" },
        { name: "Basic Draping", price: "₹1,000" },
        { name: "False Eyelashes & Setting", price: "₹1,000" }
      ] as PackageFeature[],
      isPopular: false
    }
  ];

  return (
    <section className="py-24 bg-softWhite relative overflow-hidden" id="services">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute -top-[10%] -right-[5%] w-[40%] h-[40%] rounded-full bg-roseGold/5 blur-3xl" />
        <div className="absolute top-[40%] -left-[10%] w-[30%] h-[50%] rounded-full bg-roseGold/5 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-serif text-4xl md:text-5xl font-bold text-charcoal mb-4"
          >
            Our Signature Packages
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-sans text-lg text-charcoal-light max-w-2xl mx-auto"
          >
            Curated makeup experiences designed to make you look and feel extraordinary on your most important days. Transparent pricing, no hidden costs.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
          {packages.map((pkg, index) => (
            <PackageCard 
              key={index}
              title={pkg.title}
              price={pkg.price}
              description={pkg.description}
              features={pkg.features}
              isPopular={pkg.isPopular}
              onBookClick={onBookClick}
              delay={0.2 + (index * 0.1)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
