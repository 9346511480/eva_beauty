"use client";

import { useState, useEffect } from "react";
import { 
  format, 
  addMonths, 
  subMonths, 
  startOfMonth, 
  endOfMonth, 
  startOfWeek, 
  endOfWeek, 
  isSameMonth, 
  isSameDay, 
  addDays,
  isBefore,
  startOfToday
} from "date-fns";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

interface CalendarPickerProps {
  selectedDate: Date | null;
  onSelect: (date: Date) => void;
  onNext: () => void;
}

export default function CalendarPicker({ selectedDate, onSelect, onNext }: CalendarPickerProps) {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const today = isMounted ? startOfToday() : new Date();

  // Mock available time slots
  const timeSlots = [
    "09:00 AM", "10:30 AM", "12:00 PM", "02:30 PM", "04:00 PM", "06:00 PM"
  ];

  if (!isMounted) {
    return <div className="h-full flex items-center justify-center min-h-[300px]">Loading calendar...</div>;
  }

  const renderHeader = () => {
    return (
      <div className="flex justify-between items-center mb-4">
        <button 
          onClick={() => setCurrentMonth(subMonths(currentMonth, 1))}
          className="p-2 hover:bg-charcoal/5 rounded-full transition-colors"
        >
          <ChevronLeft className="text-charcoal w-5 h-5" />
        </button>
        <span className="font-serif text-lg font-bold text-charcoal">
          {format(currentMonth, "MMMM yyyy")}
        </span>
        <button 
          onClick={() => setCurrentMonth(addMonths(currentMonth, 1))}
          className="p-2 hover:bg-charcoal/5 rounded-full transition-colors"
        >
          <ChevronRight className="text-charcoal w-5 h-5" />
        </button>
      </div>
    );
  };

  const renderDays = () => {
    const days = [];
    const dateFormat = "EEEEEE";
    let startDate = startOfWeek(currentMonth);

    for (let i = 0; i < 7; i++) {
      days.push(
        <div className="text-center font-sans text-xs font-semibold text-charcoal-light py-2" key={i}>
          {format(addDays(startDate, i), dateFormat)}
        </div>
      );
    }

    return <div className="grid grid-cols-7 mb-2">{days}</div>;
  };

  const renderCells = () => {
    const monthStart = startOfMonth(currentMonth);
    const monthEnd = endOfMonth(monthStart);
    const startDate = startOfWeek(monthStart);
    const endDate = endOfWeek(monthEnd);

    const rows = [];
    let days = [];
    let day = startDate;
    let formattedDate = "";

    while (day <= endDate) {
      for (let i = 0; i < 7; i++) {
        formattedDate = format(day, "d");
        const cloneDay = day;
        const isDisabled = isBefore(day, today);
        const isSelected = selectedDate && isSameDay(day, selectedDate);

        days.push(
          <div
            className={`p-1 flex justify-center items-center ${
              !isSameMonth(day, monthStart)
                ? "text-gray-300 pointer-events-none"
                : isDisabled
                ? "text-gray-300 pointer-events-none"
                : "text-charcoal cursor-pointer"
            }`}
            key={day.toString()}
            onClick={() => !isDisabled && onSelect(cloneDay)}
          >
            <span
              className={`w-8 h-8 flex items-center justify-center rounded-full transition-all duration-200 font-sans text-sm ${
                isSelected
                  ? "bg-roseGold text-white shadow-md font-semibold"
                  : !isDisabled && isSameMonth(day, monthStart)
                  ? "hover:bg-roseGold/20"
                  : ""
              }`}
            >
              {formattedDate}
            </span>
          </div>
        );
        day = addDays(day, 1);
      }
      rows.push(
        <div className="grid grid-cols-7 gap-1 mb-1" key={day.toString()}>
          {days}
        </div>
      );
      days = [];
    }
    return <div>{rows}</div>;
  };

  return (
    <motion.div 
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="flex flex-col h-full"
    >
      <div className="bg-white p-4 rounded-xl shadow-sm border border-charcoal/5 mb-6">
        {renderHeader()}
        {renderDays()}
        {renderCells()}
      </div>

      {selectedDate && (
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex-1"
        >
          <h4 className="font-sans font-medium text-charcoal mb-3 text-sm">
            Select Time for {format(selectedDate, "MMM do, yyyy")}
          </h4>
          <div className="grid grid-cols-3 gap-2 mb-6">
            {timeSlots.map((time) => (
              <button
                key={time}
                onClick={() => setSelectedTime(time)}
                className={`py-2 px-1 text-sm font-sans rounded-md transition-all duration-200 ${
                  selectedTime === time
                    ? "bg-roseGold text-white border border-roseGold shadow-sm"
                    : "bg-white border border-charcoal/10 text-charcoal hover:border-roseGold/50 hover:bg-roseGold/5"
                }`}
              >
                {time}
              </button>
            ))}
          </div>

          <div className="mt-auto pt-4 flex justify-end">
            <button
              disabled={!selectedTime}
              onClick={onNext}
              className={`py-3 px-8 rounded-full font-sans font-medium transition-all duration-300 ${
                selectedTime 
                  ? "bg-charcoal text-white hover:bg-charcoal-light shadow-md" 
                  : "bg-gray-200 text-gray-400 cursor-not-allowed"
              }`}
            >
              Continue
            </button>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
}
