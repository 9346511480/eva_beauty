"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

export interface PackageFeature {
  name: string;
  price?: string;
}

interface PackageCardProps {
  title: string;
  price: string;
  description: string;
  features: PackageFeature[];
  isPopular?: boolean;
  onBookClick: () => void;
  delay?: number;
}

export default function PackageCard({
  title,
  price,
  description,
  features,
  isPopular = false,
  onBookClick,
  delay = 0
}: PackageCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      whileHover={{ y: -10 }}
      className={`relative flex flex-col p-8 rounded-2xl bg-white border shadow-sm transition-shadow hover:shadow-xl ${
        isPopular ? "border-roseGold ring-1 ring-roseGold/30" : "border-charcoal/10"
      }`}
    >
      {isPopular && (
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <span className="bg-roseGold text-white text-xs font-bold uppercase tracking-wider py-1 px-4 rounded-full shadow-md">
            Most Popular
          </span>
        </div>
      )}

      <div className="mb-6">
        <h3 className="font-serif text-2xl font-bold text-charcoal mb-2">{title}</h3>
        <div className="flex items-baseline gap-2 mb-2">
          <span className="font-sans text-3xl font-bold text-roseGold">{price}</span>
          <span className="font-sans text-sm text-charcoal-light">total</span>
        </div>
        <p className="font-sans text-sm text-charcoal-light">{description}</p>
      </div>

      <ul className="flex-1 space-y-4 mb-8">
        {features.map((feature, idx) => (
          <li key={idx} className="flex items-start justify-between">
            <div className="flex items-start">
              <Check className="w-5 h-5 text-roseGold shrink-0 mr-3" />
              <span className="font-sans text-sm text-charcoal">{feature.name}</span>
            </div>
            {feature.price && (
              <span className="font-sans text-sm font-semibold text-charcoal-light shrink-0 ml-4">
                {feature.price}
              </span>
            )}
          </li>
        ))}
      </ul>

      <button
        onClick={onBookClick}
        className={`w-full py-3 rounded-full font-sans font-medium transition-all duration-300 ${
          isPopular
            ? "bg-roseGold text-white hover:bg-roseGold-dark shadow-md hover:shadow-lg"
            : "bg-charcoal/5 text-charcoal hover:bg-charcoal hover:text-white"
        }`}
      >
        Book Now
      </button>
    </motion.div>
  );
}
