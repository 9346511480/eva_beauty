"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Sparkles } from "lucide-react";

interface SubscriptionsProps {
  onBookClick: () => void;
}

export default function Subscriptions({ onBookClick }: SubscriptionsProps) {
  const plans = [
    {
      title: "Bridal Glow (3 Months)",
      price: "₹15,000",
      description: "Perfect for short-term preparation to ensure a radiant glow on your big day.",
      features: [
        "1 Trial Makeup Session",
        "Monthly Skincare Consultation",
        "Customized Diet Plan for Glowing Skin",
        "Pre-wedding Hair Care Routine",
        "10% off on all main event bookings"
      ]
    },
    {
      title: "Ultimate Bridal Care (6 Months)",
      price: "₹28,000",
      description: "A comprehensive journey ensuring you look your absolute best from engagement to reception.",
      features: [
        "2 Trial Makeup Sessions (Different Looks)",
        "Bi-weekly Skincare & Haircare Consultation",
        "Personalized Fitness & Diet Plan",
        "Pre-shoot Makeup & Styling",
        "Dedicated Assistant on Wedding Day",
        "20% off on all main event bookings"
      ],
      featured: true
    }
  ];

  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          
          {/* Left side: Text and Info */}
          <div className="w-full md:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-2 mb-4 text-roseGold font-sans font-medium uppercase tracking-wider text-sm">
                <Sparkles className="w-4 h-4" />
                <span>Pre-Wedding Subscriptions</span>
              </div>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-charcoal mb-6 leading-tight">
                Your Journey to a Flawless Wedding Day
              </h2>
              <p className="font-sans text-lg text-charcoal-light mb-8">
                Great makeup starts with great skin. Our subscription plans offer months of dedicated care, trials, and personalized routines so you have zero stress and 100% confidence on your special day.
              </p>
              
              <div className="hidden md:block">
                <p className="font-sans italic text-charcoal-light border-l-4 border-roseGold pl-4">
                  "The 6-month plan was a lifesaver. My skin has never looked better, and knowing my exact look months in advance kept me completely relaxed." <br/>
                  <span className="font-bold text-charcoal mt-2 block">- Sneha, Married 2023</span>
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right side: Subscription Cards */}
          <div className="w-full md:w-1/2 flex flex-col gap-6">
            {plans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative p-8 rounded-2xl overflow-hidden border transition-all hover:shadow-lg ${
                  plan.featured 
                    ? "bg-charcoal text-white border-transparent" 
                    : "bg-softWhite border-charcoal/10 text-charcoal"
                }`}
              >
                {/* Decorative glow for featured plan */}
                {plan.featured && (
                  <div className="absolute -top-20 -right-20 w-40 h-40 bg-roseGold rounded-full blur-[50px] opacity-30" />
                )}

                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className={`font-serif text-2xl font-bold mb-1 ${plan.featured ? "text-white" : "text-charcoal"}`}>
                        {plan.title}
                      </h3>
                      <p className={`font-sans text-sm ${plan.featured ? "text-gray-300" : "text-charcoal-light"}`}>
                        {plan.description}
                      </p>
                    </div>
                    <div className="text-right shrink-0 ml-4">
                      <span className={`font-sans text-2xl font-bold ${plan.featured ? "text-roseGold" : "text-roseGold"}`}>
                        {plan.price}
                      </span>
                    </div>
                  </div>

                  <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-400/20 to-transparent my-6" />

                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircle2 className={`w-5 h-5 shrink-0 mr-3 ${plan.featured ? "text-roseGold" : "text-roseGold"}`} />
                        <span className={`font-sans text-sm ${plan.featured ? "text-gray-200" : "text-charcoal"}`}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <button
                    onClick={onBookClick}
                    className={`w-full py-3 rounded-full font-sans font-medium transition-all duration-300 ${
                      plan.featured
                        ? "bg-roseGold text-white hover:bg-roseGold-dark shadow-md hover:shadow-lg"
                        : "bg-charcoal/5 text-charcoal hover:bg-charcoal hover:text-white"
                    }`}
                  >
                    Start Your Journey
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
