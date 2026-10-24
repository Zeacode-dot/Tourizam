"use client";

import React from "react";
import { MessageCircle, Phone, Sparkles } from "lucide-react";

export default function FloatingActions() {
  const openQuoteModal = () => {
    window.dispatchEvent(new CustomEvent("open-lead-popup"));
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 pointer-events-none">
      {/* Quick Quote Pill */}
      <button
        onClick={openQuoteModal}
        className="pointer-events-auto bg-[#1e354c] hover:bg-[#f97150] text-white px-3.5 py-2 rounded-full text-xs font-bold shadow-xl flex items-center gap-1.5 transition-all hover:scale-105 active:scale-95 border border-white/20 group cursor-pointer"
      >
        <Sparkles className="w-3.5 h-3.5 text-amber-300 group-hover:rotate-12 transition-transform" />
        <span className="hidden sm:inline">Get Free Quote (30% OFF)</span>
        <span className="sm:hidden">Get Quote</span>
      </button>

      {/* Floating Call Button */}
      <a
        href="tel:+919444119518"
        aria-label="Call Trip Makers Tourizms"
        className="pointer-events-auto w-12 h-12 rounded-full bg-slate-900 hover:bg-slate-800 text-white shadow-xl flex items-center justify-center transition-all hover:scale-110 active:scale-95 cursor-pointer relative group"
      >
        <Phone className="w-5 h-5 text-orange-400 group-hover:animate-bounce" />
        <span className="absolute right-14 bg-slate-900 text-white text-[11px] font-semibold py-1 px-2.5 rounded-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-lg pointer-events-none">
          Call: +91 94441 19518
        </span>
      </a>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/919988467863?text=Hi%20Trip%20Makers%20Tourizms!%20I%20am%20interested%20in%20planning%20a%20tour.%20Please%20share%20details."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="pointer-events-auto w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white shadow-2xl shadow-emerald-500/40 flex items-center justify-center transition-all hover:scale-110 active:scale-95 cursor-pointer relative group"
      >
        {/* Pulse ring animation */}
        <span className="absolute inset-0 rounded-full bg-emerald-400 opacity-75 animate-ping pointer-events-none"></span>
        <MessageCircle className="w-7 h-7 relative z-10" />
        <span className="absolute right-16 bg-slate-900 text-white text-xs font-bold py-1.5 px-3 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-xl pointer-events-none flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          Chat on WhatsApp
        </span>
      </a>
    </div>
  );
}
