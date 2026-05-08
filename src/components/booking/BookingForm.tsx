"use client";

import { useState } from "react";
import { format } from "date-fns";
import { motion } from "framer-motion";
import { CheckCircle2, ChevronLeft } from "lucide-react";

interface BookingFormProps {
  selectedDate: Date | null;
  onBack: () => void;
  onSuccess: () => void;
}

export default function BookingForm({ selectedDate, onBack, onSuccess }: BookingFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Mock API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      
      // Close modal after showing success message
      setTimeout(() => {
        onSuccess();
      }, 3000);
    }, 1500);
  };

  if (isSuccess) {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center justify-center h-full text-center p-6"
      >
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
          <CheckCircle2 className="w-10 h-10 text-green-600" />
        </div>
        <h3 className="font-serif text-3xl font-bold text-charcoal mb-4">Booking Confirmed!</h3>
        <p className="font-sans text-charcoal-light mb-8 max-w-sm">
          Thank you for choosing Eva Beauty. We have sent the confirmation details to your WhatsApp and Email.
        </p>
      </motion.div>
    );
  }

  return (
    <motion.div 
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 20 }}
      className="flex flex-col h-full"
    >
      <div className="bg-roseGold/5 p-4 rounded-xl mb-6 border border-roseGold/20">
        <p className="font-sans text-sm text-charcoal-light mb-1">Selected Date</p>
        <p className="font-serif text-lg font-semibold text-charcoal">
          {selectedDate ? format(selectedDate, "EEEE, MMMM do, yyyy") : ""}
        </p>
      </div>

      <form onSubmit={handleSubmit} className="flex-1 flex flex-col space-y-4">
        <div>
          <label htmlFor="name" className="block font-sans text-sm font-medium text-charcoal mb-1">Full Name</label>
          <input 
            type="text" 
            id="name" 
            required
            className="w-full border border-gray-300 rounded-lg px-4 py-3 font-sans text-charcoal focus:outline-none focus:ring-2 focus:ring-roseGold/50 focus:border-roseGold transition-colors"
            placeholder="e.g., Priyanka Reddy"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="phone" className="block font-sans text-sm font-medium text-charcoal mb-1">WhatsApp Number</label>
            <input 
              type="tel" 
              id="phone" 
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-3 font-sans text-charcoal focus:outline-none focus:ring-2 focus:ring-roseGold/50 focus:border-roseGold transition-colors"
              placeholder="+91 98765 43210"
            />
          </div>
          <div>
            <label htmlFor="email" className="block font-sans text-sm font-medium text-charcoal mb-1">Email Address</label>
            <input 
              type="email" 
              id="email" 
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-3 font-sans text-charcoal focus:outline-none focus:ring-2 focus:ring-roseGold/50 focus:border-roseGold transition-colors"
              placeholder="bride@example.com"
            />
          </div>
        </div>

        <div>
          <label htmlFor="service" className="block font-sans text-sm font-medium text-charcoal mb-1">Service Required</label>
          <select 
            id="service" 
            required
            defaultValue=""
            className="w-full border border-gray-300 rounded-lg px-4 py-3 font-sans text-charcoal focus:outline-none focus:ring-2 focus:ring-roseGold/50 focus:border-roseGold transition-colors bg-white appearance-none"
          >
            <option value="" disabled>Select a package...</option>
            <option value="hd">HD Bridal Makeup</option>
            <option value="airbrush">Airbrush Bridal Makeup</option>
            <option value="reception">Reception Look</option>
            <option value="party">Party/Bridesmaid Makeup</option>
          </select>
        </div>

        <div>
          <label htmlFor="notes" className="block font-sans text-sm font-medium text-charcoal mb-1">Any special requirements?</label>
          <textarea 
            id="notes" 
            rows={3}
            className="w-full border border-gray-300 rounded-lg px-4 py-3 font-sans text-charcoal focus:outline-none focus:ring-2 focus:ring-roseGold/50 focus:border-roseGold transition-colors resize-none"
            placeholder="Tell us about your event, venue, or specific looks you have in mind..."
          ></textarea>
        </div>

        <div className="mt-auto pt-6 flex justify-between items-center">
          <button
            type="button"
            onClick={onBack}
            className="flex items-center text-charcoal hover:text-roseGold transition-colors font-sans font-medium text-sm"
          >
            <ChevronLeft className="w-4 h-4 mr-1" />
            Back
          </button>
          <button
            type="submit"
            disabled={isSubmitting}
            className={`py-3 px-8 rounded-full font-sans font-medium transition-all duration-300 ${
              isSubmitting 
                ? "bg-roseGold-light text-white cursor-not-allowed" 
                : "bg-charcoal text-white hover:bg-charcoal-light shadow-md"
            }`}
          >
            {isSubmitting ? "Processing..." : "Confirm Booking"}
          </button>
        </div>
      </form>
    </motion.div>
  );
}
