"use client";

import { useState } from "react";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Subscriptions from "@/components/sections/Subscriptions";
import BookingModal from "@/components/booking/BookingModal";

export default function Home() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  return (
    <main className="flex min-h-screen flex-col bg-softWhite">
      <Hero onBookClick={() => setIsBookingModalOpen(true)} />
      <Services onBookClick={() => setIsBookingModalOpen(true)} />
      <Subscriptions onBookClick={() => setIsBookingModalOpen(true)} />
      {/* Portfolio, Testimonials, FAQ will go here */}

      <BookingModal 
        isOpen={isBookingModalOpen} 
        onClose={() => setIsBookingModalOpen(false)} 
      />
    </main>
  );
}
