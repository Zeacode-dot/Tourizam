"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Search, MapPin, Compass, Calendar, Clock, Sparkles } from "lucide-react";
import { CATEGORIES } from "@/data/tours";
import { DESTINATIONS } from "@/data/destinations";

export default function HeroSearch() {
  const router = useRouter();
  const [keyword, setKeyword] = useState("");
  const [destination, setDestination] = useState("");
  const [category, setCategory] = useState("");
  const [duration, setDuration] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (keyword.trim()) params.append("query", keyword.trim());
    if (destination) params.append("destination", destination);
    if (category) params.append("category", category);
    if (duration) params.append("duration", duration);

    router.push(`/packages?${params.toString()}`);
  };

  const openQuoteModal = () => {
    window.dispatchEvent(new CustomEvent("open-lead-popup"));
  };

  return (
    <div className="bg-white rounded-2xl shadow-2xl p-5 sm:p-7 border border-slate-200/80 max-w-6xl mx-auto -mt-16 sm:-mt-20 relative z-20">
      <div className="flex flex-col sm:flex-row items-center justify-between pb-4 mb-4 border-b border-slate-100 gap-2">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-[#f97150] animate-pulse"></span>
          <span className="text-xs font-black uppercase tracking-wider text-slate-800">
            Plan Your Next Journey
          </span>
          <span className="text-xs text-slate-400 hidden md:inline">|</span>
          <span className="text-xs text-emerald-600 font-bold hidden md:inline">
            Festive Discount: Up to 30% OFF Applied
          </span>
        </div>
        <button
          type="button"
          onClick={openQuoteModal}
          className="text-xs font-bold text-[#f97150] hover:text-[#e85e34] flex items-center gap-1 cursor-pointer"
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>Need Instant Quote on WhatsApp? Click Here</span>
        </button>
      </div>

      <form onSubmit={handleSearch} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5 items-end">
        {/* Keywords */}
        <div>
          <label className="block text-[11px] font-bold text-slate-600 uppercase tracking-wider mb-1.5 flex items-center gap-1">
            <Search className="w-3.5 h-3.5 text-[#f97150]" />
            <span>Keyword</span>
          </label>
          <input
            type="text"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            placeholder="E.g. Malaysia, Dubai, Beach..."
            className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-xs font-semibold text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#f97150]"
          />
        </div>

        {/* Destination */}
        <div>
          <label className="block text-[11px] font-bold text-slate-600 uppercase tracking-wider mb-1.5 flex items-center gap-1">
            <MapPin className="w-3.5 h-3.5 text-[#f97150]" />
            <span>Destination</span>
          </label>
          <select
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-xs font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#f97150] cursor-pointer"
          >
            <option value="">All Destinations</option>
            {DESTINATIONS.map((d) => (
              <option key={d.slug} value={d.name}>
                {d.name}
              </option>
            ))}
          </select>
        </div>

        {/* Activity Category */}
        <div>
          <label className="block text-[11px] font-bold text-slate-600 uppercase tracking-wider mb-1.5 flex items-center gap-1">
            <Compass className="w-3.5 h-3.5 text-[#f97150]" />
            <span>Tour Type</span>
          </label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-xs font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#f97150] cursor-pointer"
          >
            <option value="">All Categories</option>
            {CATEGORIES.map((c) => (
              <option key={c.slug} value={c.name}>
                {c.name}
              </option>
            ))}
          </select>
        </div>

        {/* Duration */}
        <div>
          <label className="block text-[11px] font-bold text-slate-600 uppercase tracking-wider mb-1.5 flex items-center gap-1">
            <Clock className="w-3.5 h-3.5 text-[#f97150]" />
            <span>Duration</span>
          </label>
          <select
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
            className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-xs font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#f97150] cursor-pointer"
          >
            <option value="">Any Duration</option>
            <option value="5">5 Days / 4 Nights</option>
            <option value="6">6 Days / 5 Nights</option>
            <option value="7">7 Days / 6 Nights</option>
            <option value="10">10 Days / 9 Nights</option>
          </select>
        </div>

        {/* Search Submit Button */}
        <div>
          <button
            type="submit"
            className="w-full py-2.5 px-4 bg-[#f97150] hover:bg-[#e85e34] text-white rounded-lg text-xs font-bold uppercase tracking-wider shadow-md shadow-orange-500/25 transition-all flex items-center justify-center gap-2 cursor-pointer h-[42px]"
          >
            <Search className="w-4 h-4" />
            <span>Search Tours</span>
          </button>
        </div>
      </form>
    </div>
  );
}
