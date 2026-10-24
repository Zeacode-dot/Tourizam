"use client";

import React, { useState } from "react";
import { useParams, notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
  Star,
  Clock,
  MapPin,
  Users,
  Globe2,
  ShieldCheck,
  Check,
  X as CloseIcon,
  ChevronDown,
  Heart,
  Share2,
  Phone,
  HelpCircle,
  Calendar,
  Sparkles,
} from "lucide-react";
import { TOURS, Tour } from "@/data/tours";
import { useBooking } from "@/context/BookingContext";

export default function TourDetailsPage() {
  const params = useParams();
  const slug = params?.slug as string;
  const tour = TOURS.find((t) => t.slug === slug);

  const { formatPrice, openBookingModal, isWishlisted, toggleWishlist } = useBooking();

  const [activeDay, setActiveDay] = useState<number | null>(1);
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const [lightboxImg, setLightboxImg] = useState<string | null>(null);

  // Local sidebar booking calculator
  const [selectedDate, setSelectedDate] = useState(() => {
    const d = new Date();
    d.setDate(d.getDate() + 14);
    return d.toISOString().split("T")[0];
  });
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [transferAddon, setTransferAddon] = useState(true);
  const [insuranceAddon, setInsuranceAddon] = useState(false);

  if (!tour) {
    return notFound();
  }

  const wishlisted = isWishlisted(tour.id);

  // Calculation
  const childPrice = Math.round(tour.price * 0.65);
  const addonsTotal = (transferAddon ? 45 : 0) + (insuranceAddon ? 35 : 0);
  const estimatedTotal = adults * tour.price + children * childPrice + addonsTotal;

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: tour.title,
        text: tour.overview,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert("Tour link copied to clipboard!");
    }
  };

  return (
    <div className="bg-slate-50 min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Breadcrumb Navigation */}
        <nav className="text-xs text-slate-500 flex items-center gap-2 flex-wrap">
          <Link href="/" className="hover:text-[#f97150] transition-colors">
            Home
          </Link>
          <span>/</span>
          <Link href="/tours" className="hover:text-[#f97150] transition-colors">
            Tours
          </Link>
          <span>/</span>
          <Link
            href={`/tours?destination=${encodeURIComponent(tour.country)}`}
            className="hover:text-[#f97150] transition-colors"
          >
            {tour.country}
          </Link>
          <span>/</span>
          <span className="text-slate-800 font-semibold truncate max-w-xs">
            {tour.title}
          </span>
        </nav>

        {/* Title Header with Action Buttons */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-2">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="bg-[#f97150] text-white text-[11px] font-bold px-3 py-1 rounded-md uppercase tracking-wider">
                {tour.category}
              </span>
              {tour.discountBadge && (
                <span className="bg-slate-900 text-white text-[11px] font-bold px-3 py-1 rounded-md">
                  {tour.discountBadge}
                </span>
              )}
            </div>
            <h1 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight">
              {tour.title}
            </h1>
            <div className="flex items-center gap-4 text-xs text-slate-500 flex-wrap">
              <div className="flex items-center gap-1 text-slate-700">
                <MapPin className="w-4 h-4 text-[#f97150]" />
                <span className="font-semibold">{tour.destination}, {tour.country}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-3.5 h-3.5 ${
                        i < Math.floor(tour.rating) ? "fill-amber-400" : "text-slate-200"
                      }`}
                    />
                  ))}
                </div>
                <span className="font-bold text-slate-800">{tour.rating}</span>
                <span>({tour.reviewsCount} guest reviews)</span>
              </div>
            </div>
          </div>

          {/* Share & Wishlist */}
          <div className="flex items-center gap-3">
            <button
              onClick={handleShare}
              className="px-4 py-2 bg-white hover:bg-slate-100 border border-slate-200 rounded-xl text-xs font-bold text-slate-700 flex items-center gap-2 shadow-sm transition-colors cursor-pointer"
            >
              <Share2 className="w-4 h-4" />
              <span>Share</span>
            </button>
            <button
              onClick={() => toggleWishlist(tour.id)}
              className="px-4 py-2 bg-white hover:bg-slate-100 border border-slate-200 rounded-xl text-xs font-bold text-slate-700 flex items-center gap-2 shadow-sm transition-colors cursor-pointer"
            >
              <Heart
                className={`w-4 h-4 ${
                  wishlisted ? "fill-red-500 text-red-500" : "text-slate-500"
                }`}
              />
              <span>{wishlisted ? "Saved" : "Save"}</span>
            </button>
          </div>
        </div>

        {/* Dynamic Image Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3 rounded-2xl overflow-hidden shadow-lg">
          {/* Main Large Hero Image */}
          <div
            className="md:col-span-2 relative aspect-[16/11] bg-slate-200 cursor-pointer overflow-hidden group"
            onClick={() => setLightboxImg(tour.gallery[0] || tour.heroImage)}
          >
            <Image
              src={tour.gallery[0] || tour.heroImage}
              alt={tour.title}
              fill
              priority
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <span className="absolute bottom-3 left-3 bg-black/60 text-white text-[11px] font-medium px-3 py-1 rounded-md backdrop-blur-sm">
              Click to enlarge
            </span>
          </div>

          {/* Sub Gallery Images */}
          <div className="md:col-span-2 grid grid-cols-2 gap-3">
            {tour.gallery.slice(1, 5).map((img, idx) => (
              <div
                key={idx}
                className="relative aspect-[16/11] bg-slate-200 cursor-pointer overflow-hidden group rounded-lg"
                onClick={() => setLightboxImg(img)}
              >
                <Image
                  src={img}
                  alt={`${tour.title} photo ${idx + 2}`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Two Column Layout: Main Content (8 cols) & Sticky Booking Sidebar (4 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* LEFT: Tour Details (8 Cols) */}
          <div className="lg:col-span-8 space-y-10">
            {/* Quick Facts Strip */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
              <div className="space-y-1">
                <Clock className="w-5 h-5 text-[#f97150] mx-auto" />
                <span className="block text-[11px] text-slate-400 font-medium">Duration</span>
                <span className="font-bold text-slate-800 text-xs sm:text-sm">{tour.duration}</span>
              </div>
              <div className="space-y-1">
                <Users className="w-5 h-5 text-[#f97150] mx-auto" />
                <span className="block text-[11px] text-slate-400 font-medium">Max Group</span>
                <span className="font-bold text-slate-800 text-xs sm:text-sm">{tour.maxGroupSize} People</span>
              </div>
              <div className="space-y-1">
                <Globe2 className="w-5 h-5 text-[#f97150] mx-auto" />
                <span className="block text-[11px] text-slate-400 font-medium">Languages</span>
                <span className="font-bold text-slate-800 text-xs sm:text-sm">
                  {tour.languages.join(", ")}
                </span>
              </div>
              <div className="space-y-1">
                <ShieldCheck className="w-5 h-5 text-[#f97150] mx-auto" />
                <span className="block text-[11px] text-slate-400 font-medium">Cancellation</span>
                <span className="font-bold text-emerald-600 text-xs sm:text-sm">Flexible</span>
              </div>
            </div>

            {/* Overview */}
            <div className="bg-white rounded-2xl p-8 border border-slate-200/80 shadow-sm space-y-4">
              <h2 className="text-2xl font-black text-slate-900 tracking-tight">
                Tour Overview
              </h2>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                {tour.overview}
              </p>

              {/* Highlights */}
              <div className="pt-6 border-t border-slate-100">
                <h3 className="font-bold text-slate-900 text-base mb-4 flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-[#f97150]" />
                  <span>Key Trip Highlights</span>
                </h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
                  {tour.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-slate-700">
                      <div className="w-5 h-5 rounded-full bg-orange-100 text-[#f97150] flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3 h-3 stroke-[3]" />
                      </div>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Itinerary Accordion */}
            <div className="bg-white rounded-2xl p-8 border border-slate-200/80 shadow-sm space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-black text-slate-900 tracking-tight">
                    Day-by-Day Itinerary
                  </h2>
                  <p className="text-xs text-slate-500 mt-1">
                    Complete breakdown of activities, culinary experiences, and hotels
                  </p>
                </div>
                <button
                  onClick={() => setActiveDay(activeDay === null ? 1 : null)}
                  className="text-xs font-bold text-[#f97150] hover:underline cursor-pointer"
                >
                  {activeDay === null ? "Expand First Day" : "Collapse All"}
                </button>
              </div>

              <div className="space-y-3">
                {tour.itinerary.map((item) => {
                  const isOpen = activeDay === item.day;
                  return (
                    <div
                      key={item.day}
                      className="border border-slate-200 rounded-xl overflow-hidden transition-all duration-200"
                    >
                      <button
                        onClick={() => setActiveDay(isOpen ? null : item.day)}
                        className={`w-full p-4 flex items-center justify-between text-left font-bold text-sm transition-colors cursor-pointer ${
                          isOpen ? "bg-orange-50/70 text-[#f97150]" : "bg-white hover:bg-slate-50 text-slate-800"
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <span
                            className={`w-7 h-7 rounded-full text-xs flex items-center justify-center font-bold ${
                              isOpen
                                ? "bg-[#f97150] text-white"
                                : "bg-slate-100 text-slate-700"
                            }`}
                          >
                            {item.day}
                          </span>
                          <span>{item.title}</span>
                        </div>
                        <ChevronDown
                          className={`w-4 h-4 transition-transform duration-200 ${
                            isOpen ? "rotate-180 text-[#f97150]" : "text-slate-400"
                          }`}
                        />
                      </button>

                      {isOpen && (
                        <div className="p-5 bg-white border-t border-slate-100 space-y-4 text-xs sm:text-sm animate-in fade-in duration-150">
                          <p className="text-slate-600 leading-relaxed">
                            {item.description}
                          </p>

                          <div className="flex flex-wrap items-center gap-4 pt-2 text-xs text-slate-500 border-t border-slate-100">
                            {item.meals && (
                              <div className="bg-slate-50 px-3 py-1.5 rounded-lg">
                                <strong>Meals:</strong> {item.meals}
                              </div>
                            )}
                            {item.hotel && (
                              <div className="bg-slate-50 px-3 py-1.5 rounded-lg">
                                <strong>Hotel:</strong> {item.hotel}
                              </div>
                            )}
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Included & Excluded Columns */}
            <div className="bg-white rounded-2xl p-8 border border-slate-200/80 shadow-sm space-y-6">
              <h2 className="text-2xl font-black text-slate-900 tracking-tight">
                What&apos;s Included & Excluded
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {/* Included */}
                <div className="space-y-3">
                  <h4 className="font-bold text-sm text-emerald-700 uppercase tracking-wider flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-600" />
                    <span>Included With Tour</span>
                  </h4>
                  <ul className="space-y-2 text-xs sm:text-sm text-slate-600">
                    {tour.included.map((inc, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{inc}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Excluded */}
                <div className="space-y-3">
                  <h4 className="font-bold text-sm text-red-700 uppercase tracking-wider flex items-center gap-2">
                    <CloseIcon className="w-4 h-4 text-red-600" />
                    <span>Not Included</span>
                  </h4>
                  <ul className="space-y-2 text-xs sm:text-sm text-slate-600">
                    {tour.excluded.map((exc, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CloseIcon className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                        <span>{exc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Meeting Point & Policies */}
            <div className="bg-white rounded-2xl p-8 border border-slate-200/80 shadow-sm space-y-4">
              <h2 className="text-2xl font-black text-slate-900 tracking-tight">
                Meeting Point & Policies
              </h2>
              <div className="p-4 bg-slate-50 rounded-xl space-y-2 text-xs sm:text-sm">
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-[#f97150] shrink-0 mt-0.5" />
                  <div>
                    <strong>Departure / Meeting Point:</strong>
                    <p className="text-slate-600">{tour.meetingPoint}</p>
                  </div>
                </div>
                <div className="flex items-start gap-2 pt-2 border-t border-slate-200">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <strong>Cancellation Terms:</strong>
                    <p className="text-slate-600">{tour.cancellationPolicy}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQs Accordion */}
            {tour.faqs.length > 0 && (
              <div className="bg-white rounded-2xl p-8 border border-slate-200/80 shadow-sm space-y-4">
                <h2 className="text-2xl font-black text-slate-900 tracking-tight flex items-center gap-2">
                  <HelpCircle className="w-6 h-6 text-[#f97150]" />
                  <span>Frequently Asked Questions</span>
                </h2>

                <div className="space-y-3">
                  {tour.faqs.map((faq, i) => {
                    const isOpen = activeFaq === i;
                    return (
                      <div
                        key={i}
                        className="border border-slate-200 rounded-xl overflow-hidden"
                      >
                        <button
                          onClick={() => setActiveFaq(isOpen ? null : i)}
                          className="w-full p-4 flex items-center justify-between text-left font-bold text-xs sm:text-sm text-slate-800 bg-white hover:bg-slate-50 transition-colors cursor-pointer"
                        >
                          <span>{faq.question}</span>
                          <ChevronDown
                            className={`w-4 h-4 text-slate-400 transition-transform ${
                              isOpen ? "rotate-180" : ""
                            }`}
                          />
                        </button>
                        {isOpen && (
                          <div className="p-4 bg-slate-50 border-t border-slate-100 text-xs sm:text-sm text-slate-600 leading-relaxed animate-in fade-in">
                            {faq.answer}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Customer Reviews Section */}
            <div className="bg-white rounded-2xl p-8 border border-slate-200/80 shadow-sm space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-100">
                <div>
                  <h2 className="text-2xl font-black text-slate-900 tracking-tight">
                    Guest Reviews
                  </h2>
                  <p className="text-xs text-slate-500">
                    Real reviews from travelers who experienced this tour
                  </p>
                </div>
                <div className="flex items-center gap-3 bg-orange-50 px-4 py-2.5 rounded-xl border border-orange-100">
                  <span className="text-3xl font-black text-[#f97150]">
                    {tour.rating}
                  </span>
                  <div>
                    <div className="flex text-amber-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                      ))}
                    </div>
                    <span className="text-[11px] text-slate-500 font-semibold">
                      Based on {tour.reviewsCount} reviews
                    </span>
                  </div>
                </div>
              </div>

              {/* Review Cards */}
              <div className="space-y-4">
                {tour.reviews.map((rev) => (
                  <div
                    key={rev.id}
                    className="p-5 rounded-xl border border-slate-100 bg-slate-50/50 space-y-2"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-full overflow-hidden relative">
                          <Image
                            src={rev.avatar}
                            alt={rev.author}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <h4 className="font-bold text-xs sm:text-sm text-slate-900">
                            {rev.author}
                          </h4>
                          <span className="text-[10px] text-slate-400 font-medium">
                            {rev.travelerType} • {rev.date}
                          </span>
                        </div>
                      </div>
                      <div className="flex text-amber-400">
                        {[...Array(rev.rating)].map((_, i) => (
                          <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                        ))}
                      </div>
                    </div>
                    <h5 className="font-bold text-xs text-slate-800 pt-1">
                      {rev.title}
                    </h5>
                    <p className="text-xs text-slate-600 leading-relaxed italic">
                      &ldquo;{rev.content}&rdquo;
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT: Dynamic Booking Engine Sticky Card (4 Cols) */}
          <div className="lg:col-span-4 sticky top-24 space-y-4">
            <div className="bg-white rounded-2xl p-6 border-2 border-orange-200/80 shadow-xl space-y-5">
              {/* Header Pricing */}
              <div className="pb-4 border-b border-slate-100 flex items-end justify-between">
                <div>
                  <span className="text-xs text-slate-400 font-medium">From</span>
                  <div className="text-3xl font-black text-[#f97150]">
                    {formatPrice(tour.price)}
                  </div>
                  <span className="text-[11px] text-slate-400">per person / adult</span>
                </div>
                {tour.originalPrice && (
                  <span className="text-sm text-slate-400 line-through">
                    {formatPrice(tour.originalPrice)}
                  </span>
                )}
              </div>

              {/* Dynamic Interactive Date Selector */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5 flex items-center gap-1.5">
                  <Calendar className="w-4 h-4 text-[#f97150]" />
                  <span>Choose Departure Date</span>
                </label>
                <input
                  type="date"
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-[#f97150]"
                />
              </div>

              {/* Guests Selector */}
              <div className="space-y-3 bg-slate-50 p-4 rounded-xl border border-slate-100">
                <div className="flex items-center justify-between text-xs">
                  <div>
                    <span className="font-bold text-slate-800">Adults (12+)</span>
                    <span className="block text-[10px] text-slate-400">
                      {formatPrice(tour.price)} each
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => setAdults(Math.max(1, adults - 1))}
                      className="w-7 h-7 rounded-md bg-white border border-slate-200 font-bold flex items-center justify-center hover:bg-slate-100 cursor-pointer"
                    >
                      -
                    </button>
                    <span className="font-bold w-4 text-center">{adults}</span>
                    <button
                      type="button"
                      onClick={() => setAdults(adults + 1)}
                      className="w-7 h-7 rounded-md bg-white border border-slate-200 font-bold flex items-center justify-center hover:bg-slate-100 cursor-pointer"
                    >
                      +
                    </button>
                  </div>
                </div>

                <div className="flex items-center justify-between text-xs pt-2 border-t border-slate-200">
                  <div>
                    <span className="font-bold text-slate-800">Children (2-11)</span>
                    <span className="block text-[10px] text-slate-400">
                      {formatPrice(childPrice)} each (35% OFF)
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => setChildren(Math.max(0, children - 1))}
                      className="w-7 h-7 rounded-md bg-white border border-slate-200 font-bold flex items-center justify-center hover:bg-slate-100 cursor-pointer"
                    >
                      -
                    </button>
                    <span className="font-bold w-4 text-center">{children}</span>
                    <button
                      type="button"
                      onClick={() => setChildren(children + 1)}
                      className="w-7 h-7 rounded-md bg-white border border-slate-200 font-bold flex items-center justify-center hover:bg-slate-100 cursor-pointer"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>

              {/* Add-ons */}
              <div className="space-y-2 text-xs">
                <span className="font-bold text-slate-700 block">Optional Add-ons:</span>
                <label className="flex items-center justify-between cursor-pointer">
                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={transferAddon}
                      onChange={(e) => setTransferAddon(e.target.checked)}
                      className="rounded text-[#f97150]"
                    />
                    <span>Airport Transfer</span>
                  </div>
                  <span className="font-bold text-slate-700">+$45</span>
                </label>
                <label className="flex items-center justify-between cursor-pointer">
                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={insuranceAddon}
                      onChange={(e) => setInsuranceAddon(e.target.checked)}
                      className="rounded text-[#f97150]"
                    />
                    <span>Travel Insurance</span>
                  </div>
                  <span className="font-bold text-slate-700">+$35</span>
                </label>
              </div>

              {/* Subtotal & Book Button */}
              <div className="pt-3 border-t border-slate-100 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-slate-500 font-medium">Total Estimate:</span>
                  <span className="text-2xl font-black text-[#f97150]">
                    {formatPrice(estimatedTotal)}
                  </span>
                </div>

                <button
                  onClick={() => openBookingModal(tour)}
                  className="w-full py-3.5 bg-[#f97150] hover:bg-[#e85e34] text-white rounded-xl font-bold text-xs uppercase tracking-wider shadow-lg shadow-orange-500/25 transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
                >
                  Book This Tour Now
                </button>

                <p className="text-[11px] text-slate-400 text-center flex items-center justify-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
                  <span>Instant confirmation • No booking fee</span>
                </p>
              </div>
            </div>

            {/* Help & Support Widget */}
            <div className="bg-slate-900 text-white rounded-2xl p-6 text-center space-y-3 shadow-md">
              <div className="w-10 h-10 rounded-full bg-[#f97150] text-white flex items-center justify-center mx-auto">
                <Phone className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-sm">Need Help Booking?</h4>
              <p className="text-xs text-slate-400">
                Speak directly with an expert travel advisor to customize your trip.
              </p>
              <a
                href="tel:1820334533"
                className="block text-[#f97150] font-bold text-sm hover:underline"
              >
                1.820.3345.33
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxImg && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 cursor-pointer"
          onClick={() => setLightboxImg(null)}
        >
          <div className="relative max-w-4xl max-h-[85vh] w-full aspect-[16/10]">
            <Image
              src={lightboxImg}
              alt="Enlarged view"
              fill
              className="object-contain"
            />
          </div>
          <button
            onClick={() => setLightboxImg(null)}
            className="absolute top-6 right-6 text-white text-3xl font-bold cursor-pointer"
          >
            &times;
          </button>
        </div>
      )}
    </div>
  );
}
