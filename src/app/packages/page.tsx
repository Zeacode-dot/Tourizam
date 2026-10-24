"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Search,
  Filter,
  ArrowUpDown,
  Sparkles,
  Phone,
  MessageCircle,
  Clock,
  Compass,
  CheckCircle2,
  Calendar
} from "lucide-react";
import TourCard from "@/components/TourCard";
import { TOURS, CATEGORIES } from "@/data/tours";

export default function PackagesPage() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState<"featured" | "price-asc" | "price-desc" | "rating">("featured");
  const [maxDuration, setMaxDuration] = useState<number>(0);

  const openQuoteModal = (dest?: string) => {
    window.dispatchEvent(new CustomEvent("open-lead-popup", { detail: { destination: dest } }));
  };

  const filteredTours = useMemo(() => {
    return TOURS.filter((tour) => {
      // Category filter
      if (activeCategory === "International" && tour.category !== "International") return false;
      if (activeCategory === "Domestic & Island" && tour.category !== "Domestic" && tour.category !== "Luxury & Island") return false;
      if (activeCategory === "Europe" && tour.region !== "Europe") return false;
      if (activeCategory === "Honeymoon" && !tour.title.toLowerCase().includes("honeymoon") && tour.destination !== "Dubai" && tour.destination !== "Sri Lanka" && tour.destination !== "Andaman") return false;

      // Search query
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchesTitle = tour.title.toLowerCase().includes(query);
        const matchesDest = tour.destination.toLowerCase().includes(query);
        const matchesCountry = tour.country.toLowerCase().includes(query);
        if (!matchesTitle && !matchesDest && !matchesCountry) return false;
      }

      // Duration filter
      if (maxDuration > 0 && tour.durationDays > maxDuration) {
        return false;
      }

      return true;
    }).sort((a, b) => {
      if (sortBy === "price-asc") return a.price - b.price;
      if (sortBy === "price-desc") return b.price - a.price;
      if (sortBy === "rating") return b.rating - a.rating;
      return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
    });
  }, [activeCategory, searchQuery, sortBy, maxDuration]);

  return (
    <div className="space-y-12 pb-20">
      {/* 1. Header Banner */}
      <section className="relative bg-slate-900 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=2000&q=80"
            alt="Tour Packages"
            fill
            priority
            className="object-cover opacity-40 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/60 to-slate-950/90" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center space-y-4">
          <div className="inline-flex items-center gap-1.5 bg-[#f97150]/20 border border-[#f97150]/40 text-[#f97150] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Trip Makers Tourizms Chennai</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
            Tour Packages & Itineraries
          </h1>

          <p className="text-slate-300 max-w-2xl mx-auto text-xs sm:text-sm md:text-base leading-relaxed">
            Choose from our award-winning customized domestic and international tour packages with flight assistance, luxury stays, guided sightseeing, and visa processing.
          </p>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={() => openQuoteModal()}
              className="bg-[#f97150] hover:bg-[#e85e34] text-white text-xs font-bold uppercase tracking-wider px-6 py-3 rounded-full shadow-lg transition-transform hover:scale-105 cursor-pointer"
            >
              Get Free Instant Quote (Up to 30% OFF)
            </button>
            <a
              href="https://wa.me/919988467863?text=Hi%20Trip%20Makers%20Tourizms!%20Please%20send%20me%20your%20latest%20tour%20packages%20catalog."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold uppercase tracking-wider px-6 py-3 rounded-full shadow-lg transition-transform hover:scale-105 flex items-center gap-2 cursor-pointer"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Catalogue</span>
            </a>
          </div>
        </div>
      </section>

      {/* 2. Filter Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-xl shadow-md border border-slate-200/80 p-4 sm:p-6 space-y-5">
          {/* Top row: Categories tabs */}
          <div className="flex flex-wrap items-center gap-2 border-b border-slate-100 pb-4">
            {["All", "International", "Domestic & Island", "Europe", "Honeymoon"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveCategory(tab)}
                className={`px-4 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  activeCategory === tab
                    ? "bg-[#1e354c] text-white shadow-md shadow-slate-900/10"
                    : "bg-slate-100 hover:bg-slate-200 text-slate-700"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Bottom row: Search, Sorting, Duration */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {/* Search Input */}
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search packages, e.g. Malaysia, Dubai, Andaman..."
                className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#f97150]"
              />
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            </div>

            {/* Sort Dropdown */}
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-xs font-semibold text-slate-700 focus:outline-none focus:ring-2 focus:ring-[#f97150] cursor-pointer"
              >
                <option value="featured">Featured Packages</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
              </select>
              <ArrowUpDown className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>

            {/* Duration filter */}
            <div className="relative">
              <select
                value={maxDuration}
                onChange={(e) => setMaxDuration(Number(e.target.value))}
                className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-xs font-semibold text-slate-700 focus:outline-none focus:ring-2 focus:ring-[#f97150] cursor-pointer"
              >
                <option value={0}>Any Duration</option>
                <option value={5}>Up to 5 Days</option>
                <option value={6}>Up to 6 Days</option>
                <option value={8}>Up to 8 Days</option>
                <option value={12}>Up to 12 Days</option>
              </select>
              <Clock className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
          </div>
        </div>
      </div>

      {/* 3. Packages Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-6">
          <p className="text-xs sm:text-sm text-slate-500 font-medium">
            Showing <strong className="text-slate-900 font-bold">{filteredTours.length}</strong> holiday packages available from Chennai
          </p>
          {(activeCategory !== "All" || searchQuery || maxDuration > 0) && (
            <button
              onClick={() => {
                setActiveCategory("All");
                setSearchQuery("");
                setMaxDuration(0);
              }}
              className="text-xs font-bold text-[#f97150] hover:underline cursor-pointer"
            >
              Reset Filters
            </button>
          )}
        </div>

        {filteredTours.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-xl border border-slate-200 p-8 space-y-4">
            <Compass className="w-12 h-12 text-slate-300 mx-auto" />
            <h3 className="text-lg font-bold text-slate-800">No packages match your search</h3>
            <p className="text-xs text-slate-500 max-w-md mx-auto">
              We offer fully personalized holidays to any destination on earth! Speak to our Chennai team and we will design a custom itinerary for you.
            </p>
            <button
              onClick={() => openQuoteModal()}
              className="bg-[#f97150] text-white px-6 py-2.5 rounded-lg text-xs font-bold uppercase"
            >
              Request Custom Package
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredTours.map((tour) => (
              <TourCard key={tour.id} tour={tour} />
            ))}
          </div>
        )}
      </div>

      {/* 4. Need Custom Package CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-[#1e354c] via-[#142334] to-[#f97150] rounded-2xl p-8 sm:p-12 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <span className="text-xs font-bold text-orange-200 uppercase tracking-widest">
              Tailor-Made Holidays from Chennai
            </span>
            <h3 className="text-2xl sm:text-3xl font-black tracking-tight">
              Can&apos;t Find Your Dream Itinerary?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
              Our travel specialists will customize flights, hotels, and sightseeing to fit your exact budget and dates within 2 hours.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
            <button
              onClick={() => openQuoteModal()}
              className="bg-white hover:bg-orange-50 text-slate-900 font-extrabold text-xs uppercase px-6 py-3.5 rounded-xl shadow-lg transition-all cursor-pointer whitespace-nowrap text-center"
            >
              Get Custom Quote
            </button>
            <a
              href="tel:+919444119518"
              className="bg-[#f97150] hover:bg-[#e85e34] text-white font-extrabold text-xs uppercase px-6 py-3.5 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 whitespace-nowrap text-center"
            >
              <Phone className="w-4 h-4" />
              <span>+91 94441 19518</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
