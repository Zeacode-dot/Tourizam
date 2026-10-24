"use client";

import React, { useState, useMemo, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import {
  Filter,
  SlidersHorizontal,
  X,
  Search,
  LayoutGrid,
  List,
  RotateCcw,
} from "lucide-react";
import TourCard from "@/components/TourCard";
import { TOURS, CATEGORIES } from "@/data/tours";
import { DESTINATIONS } from "@/data/destinations";
import { useBooking } from "@/context/BookingContext";

function ToursContent() {
  const searchParams = useSearchParams();
  const initialQuery = searchParams.get("query") || "";
  const initialDest = searchParams.get("destination") || "";
  const initialCat = searchParams.get("category") || "";
  const initialDur = searchParams.get("duration") || "";
  const initialFilter = searchParams.get("filter") || "";

  const { wishlist } = useBooking();

  // Filters state
  const [query, setQuery] = useState(initialQuery);
  const [destination, setDestination] = useState(initialDest);
  const [category, setCategory] = useState(initialCat);
  const [duration, setDuration] = useState(initialDur);
  const [maxPrice, setMaxPrice] = useState(5000);
  const [minRating, setMinRating] = useState(0);
  const [sortBy, setSortBy] = useState("popular");
  const [showOnlyWishlist, setShowOnlyWishlist] = useState(initialFilter === "wishlist");
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  // Filter & Sort Logic
  const filteredTours = useMemo(() => {
    return TOURS.filter((tour) => {
      // Wishlist filter
      if (showOnlyWishlist && !wishlist.includes(tour.id)) {
        return false;
      }

      // Query search
      if (query.trim()) {
        const q = query.toLowerCase();
        const matchesTitle = tour.title.toLowerCase().includes(q);
        const matchesDest = tour.destination.toLowerCase().includes(q) || tour.country.toLowerCase().includes(q);
        const matchesOverview = tour.overview.toLowerCase().includes(q);
        if (!matchesTitle && !matchesDest && !matchesOverview) return false;
      }

      // Destination / Region
      if (destination) {
        const destMatch =
          tour.region.toLowerCase() === destination.toLowerCase() ||
          tour.country.toLowerCase() === destination.toLowerCase() ||
          tour.destination.toLowerCase().includes(destination.toLowerCase());
        if (!destMatch) return false;
      }

      // Category
      if (category && tour.category.toLowerCase() !== category.toLowerCase()) {
        return false;
      }

      // Duration
      if (duration) {
        if (duration === "1-3" && tour.durationDays > 3) return false;
        if (duration === "4-7" && (tour.durationDays < 4 || tour.durationDays > 7)) return false;
        if (duration === "8+" && tour.durationDays < 8) return false;
      }

      // Price
      if (tour.price > maxPrice) return false;

      // Rating
      if (tour.rating < minRating) return false;

      return true;
    }).sort((a, b) => {
      if (sortBy === "price-low") return a.price - b.price;
      if (sortBy === "price-high") return b.price - a.price;
      if (sortBy === "rating") return b.rating - a.rating;
      if (sortBy === "duration") return b.durationDays - a.durationDays;
      return b.reviewsCount - a.reviewsCount; // popular
    });
  }, [query, destination, category, duration, maxPrice, minRating, sortBy, showOnlyWishlist, wishlist]);

  const handleResetFilters = () => {
    setQuery("");
    setDestination("");
    setCategory("");
    setDuration("");
    setMaxPrice(5000);
    setMinRating(0);
    setShowOnlyWishlist(false);
  };

  return (
    <div className="bg-slate-50 min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Header Banner */}
        <div className="bg-gradient-to-r from-slate-900 to-[#142334] rounded-2xl p-8 sm:p-12 text-white shadow-xl relative overflow-hidden">
          <div className="relative z-10 max-w-2xl space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#f97150]">
              Explore All Packages
            </span>
            <h1 className="text-3xl sm:text-5xl font-black tracking-tight">
              Tour Directory & Search
            </h1>
            <p className="text-xs sm:text-sm text-slate-300">
              Find and filter the perfect travel experience based on destination, activity type, budget, and duration.
            </p>
          </div>
        </div>

        {/* Filter Bar Controls & Results Count */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-4 rounded-xl border border-slate-200/80 shadow-sm">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setMobileFilterOpen(true)}
              className="lg:hidden px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold rounded-lg flex items-center gap-2 cursor-pointer"
            >
              <SlidersHorizontal className="w-4 h-4 text-[#f97150]" />
              <span>Filters ({filteredTours.length})</span>
            </button>
            <span className="text-sm font-bold text-slate-800">
              Showing <span className="text-[#f97150]">{filteredTours.length}</span> Tours
            </span>
            {showOnlyWishlist && (
              <span className="bg-red-50 text-red-600 text-xs font-bold px-2.5 py-1 rounded-full border border-red-200">
                Wishlist Filter Active
              </span>
            )}
          </div>

          <div className="flex items-center gap-4">
            {/* Sort Dropdown */}
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-600">
              <span>Sort by:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-slate-50 border border-slate-200 px-3 py-1.5 rounded-lg text-xs font-bold text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#f97150] cursor-pointer"
              >
                <option value="popular">Most Popular</option>
                <option value="rating">Highest Rated</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="duration">Longest Duration</option>
              </select>
            </div>
          </div>
        </div>

        {/* Grid Layout: Sidebar Filters (3 cols) + Results (9 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Desktop Filter Sidebar (3 cols) */}
          <aside className="hidden lg:block lg:col-span-3 space-y-6 bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm sticky top-24">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100">
              <h3 className="font-black text-sm uppercase tracking-wider text-slate-900 flex items-center gap-2">
                <Filter className="w-4 h-4 text-[#f97150]" />
                <span>Filter Tours</span>
              </h3>
              <button
                onClick={handleResetFilters}
                className="text-[11px] font-bold text-[#f97150] hover:underline flex items-center gap-1 cursor-pointer"
              >
                <RotateCcw className="w-3 h-3" />
                <span>Reset</span>
              </button>
            </div>

            {/* Keyword Search */}
            <div className="space-y-1.5">
              <label className="block text-xs font-bold text-slate-700">Keyword</label>
              <div className="relative">
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Vienna, Safari, Alps..."
                  className="w-full pl-9 pr-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs focus:outline-none focus:ring-2 focus:ring-[#f97150]"
                />
                <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              </div>
            </div>

            {/* Destination Filter */}
            <div className="space-y-1.5">
              <label className="block text-xs font-bold text-slate-700">Destination</label>
              <select
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-[#f97150] cursor-pointer"
              >
                <option value="">All Destinations</option>
                {DESTINATIONS.map((d) => (
                  <option key={d.slug} value={d.name}>
                    {d.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Category / Activity Filter */}
            <div className="space-y-1.5">
              <label className="block text-xs font-bold text-slate-700">Tour Category</label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-[#f97150] cursor-pointer"
              >
                <option value="">All Categories</option>
                {CATEGORIES.map((c) => (
                  <option key={c.slug} value={c.name}>
                    {c.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Duration Filter */}
            <div className="space-y-1.5">
              <label className="block text-xs font-bold text-slate-700">Duration</label>
              <select
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
                className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-[#f97150] cursor-pointer"
              >
                <option value="">Any Duration</option>
                <option value="1-3">1 - 3 Days</option>
                <option value="4-7">4 - 7 Days</option>
                <option value="8+">8+ Days</option>
              </select>
            </div>

            {/* Max Price Slider */}
            <div className="space-y-2 pt-2 border-t border-slate-100">
              <div className="flex justify-between text-xs font-bold">
                <span className="text-slate-700">Max Budget</span>
                <span className="text-[#f97150]">${maxPrice.toLocaleString()}</span>
              </div>
              <input
                type="range"
                min="100"
                max="5000"
                step="100"
                value={maxPrice}
                onChange={(e) => setMaxPrice(Number(e.target.value))}
                className="w-full accent-[#f97150] cursor-pointer"
              />
            </div>

            {/* Minimum Rating */}
            <div className="space-y-1.5 pt-2 border-t border-slate-100">
              <label className="block text-xs font-bold text-slate-700">Rating</label>
              <div className="flex items-center gap-2">
                {[0, 4.7, 4.9].map((r) => (
                  <button
                    key={r}
                    type="button"
                    onClick={() => setMinRating(r)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold border transition-colors cursor-pointer ${
                      minRating === r
                        ? "bg-[#f97150] text-white border-[#f97150]"
                        : "bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100"
                    }`}
                  >
                    {r === 0 ? "All" : `${r}+ Stars`}
                  </button>
                ))}
              </div>
            </div>

            {/* Wishlist only */}
            <div className="pt-2 border-t border-slate-100">
              <label className="flex items-center gap-2 cursor-pointer text-xs font-semibold text-slate-700">
                <input
                  type="checkbox"
                  checked={showOnlyWishlist}
                  onChange={(e) => setShowOnlyWishlist(e.target.checked)}
                  className="rounded text-[#f97150]"
                />
                <span>Only My Saved Tours ({wishlist.length})</span>
              </label>
            </div>
          </aside>

          {/* Results Grid (9 cols) */}
          <main className="lg:col-span-9 space-y-6">
            {filteredTours.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredTours.map((tour) => (
                  <TourCard key={tour.id} tour={tour} />
                ))}
              </div>
            ) : (
              <div className="bg-white rounded-2xl p-12 text-center border border-slate-200/80 shadow-sm space-y-4">
                <div className="w-16 h-16 rounded-full bg-orange-100 text-[#f97150] flex items-center justify-center mx-auto">
                  <Search className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-black text-slate-900">
                  No Tours Match Your Criteria
                </h3>
                <p className="text-xs text-slate-500 max-w-sm mx-auto">
                  Try adjusting your price range, clearing keywords, or selecting a broader destination region.
                </p>
                <button
                  onClick={handleResetFilters}
                  className="inline-block bg-[#f97150] hover:bg-[#e85e34] text-white text-xs font-bold uppercase tracking-wider px-6 py-3 rounded-xl shadow-md cursor-pointer"
                >
                  Clear All Filters
                </button>
              </div>
            )}
          </main>
        </div>
      </div>

      {/* Mobile Drawer Filter */}
      {mobileFilterOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex justify-end">
          <div className="bg-white w-full max-w-xs h-full p-6 overflow-y-auto space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100">
              <h3 className="font-black text-base text-slate-900">Filters</h3>
              <button
                onClick={() => setMobileFilterOpen(false)}
                className="text-slate-400 hover:text-slate-700"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="space-y-4 text-xs">
              <div>
                <label className="font-bold text-slate-700 block mb-1">Destination</label>
                <select
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  className="w-full p-2 bg-slate-50 border rounded-lg"
                >
                  <option value="">All Destinations</option>
                  {DESTINATIONS.map((d) => (
                    <option key={d.slug} value={d.name}>{d.name}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="font-bold text-slate-700 block mb-1">Category</label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full p-2 bg-slate-50 border rounded-lg"
                >
                  <option value="">All Categories</option>
                  {CATEGORIES.map((c) => (
                    <option key={c.slug} value={c.name}>{c.name}</option>
                  ))}
                </select>
              </div>

              <button
                onClick={() => setMobileFilterOpen(false)}
                className="w-full py-3 bg-[#f97150] text-white font-bold rounded-xl text-xs uppercase"
              >
                Apply Filters
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default function ToursPage() {
  return (
    <Suspense fallback={<div className="p-12 text-center text-slate-500">Loading Tours Directory...</div>}>
      <ToursContent />
    </Suspense>
  );
}
