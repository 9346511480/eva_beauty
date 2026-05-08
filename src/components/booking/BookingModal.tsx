"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { useState } from "react";
import CalendarPicker from "./Calendar";
import BookingForm from "./BookingForm";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BookingModal({ isOpen, onClose }: BookingModalProps) {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [step, setStep] = useState<1 | 2>(1);

  const handleClose = () => {
    onClose();
    setTimeout(() => {
      setStep(1);
      setSelectedDate(null);
    }, 300); // Reset after animation
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
          {/* Backdrop */}
          <motion.div 
            className="absolute inset-0 bg-charcoal/80 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
          />
          
          {/* Modal Content */}
          <motion.div 
            className="relative w-full max-w-4xl bg-softWhite rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row min-h-[600px]"
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
          >
            {/* Left side - Branding/Image (Hidden on mobile) */}
            <div className="hidden md:block md:w-2/5 bg-roseGold relative">
              <img 
                src="https://images.unsplash.com/photo-1596704017254-9b121068fb31?q=80&w=1936&auto=format&fit=crop" 
                alt="Bridal service" 
                className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-60"
              />
              <div className="absolute inset-0 p-8 flex flex-col justify-between text-softWhite">
                <div>
                  <h3 className="font-serif text-3xl font-bold mb-2">Eva Beauty</h3>
                  <p className="font-sans font-light opacity-90">Premium Bridal Services</p>
                </div>
                <div>
                  <p className="font-sans italic font-light opacity-80 text-sm">
                    "Your beauty is our passion. Let us make your special day unforgettable."
                  </p>
                </div>
              </div>
            </div>

            {/* Right side - Interactive Form */}
            <div className="w-full md:w-3/5 p-6 sm:p-10 flex flex-col relative h-[600px] overflow-y-auto">
              <button 
                onClick={handleClose}
                className="absolute top-4 right-4 text-charcoal-light hover:text-charcoal transition-colors p-2"
                aria-label="Close modal"
              >
                <X size={24} />
              </button>

              <div className="mb-8">
                <h2 className="font-serif text-3xl text-charcoal font-bold mb-2">
                  {step === 1 ? "Select a Date" : "Complete Booking"}
                </h2>
                <div className="flex items-center space-x-2 text-sm font-sans">
                  <span className={`transition-colors ${step === 1 ? "text-roseGold font-medium" : "text-charcoal-light"}`}>
                    1. Date & Time
                  </span>
                  <span className="text-charcoal-light">/</span>
                  <span className={`transition-colors ${step === 2 ? "text-roseGold font-medium" : "text-charcoal-light"}`}>
                    2. Your Details
                  </span>
                </div>
              </div>

              <div className="flex-1">
                {step === 1 ? (
                  <CalendarPicker 
                    selectedDate={selectedDate} 
                    onSelect={(date) => setSelectedDate(date)} 
                    onNext={() => setStep(2)}
                  />
                ) : (
                  <BookingForm 
                    selectedDate={selectedDate} 
                    onBack={() => setStep(1)}
                    onSuccess={handleClose}
                  />
                )}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
