"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Play,
  ArrowRight,
  Shield,
  Award,
  Headphones,
  CheckCircle,
  Star,
  Quote,
  Compass,
  MapPin,
  Sparkles,
  Plane,
  FileCheck,
  Building,
  Car,
  Clock,
  Phone,
  MessageCircle,
  Users,
  ChevronRight,
  HelpCircle,
} from "lucide-react";
import HeroSearch from "@/components/HeroSearch";
import TourCard from "@/components/TourCard";
import VideoModal from "@/components/VideoModal";
import { TOURS } from "@/data/tours";
import { DESTINATIONS } from "@/data/destinations";
import { BLOGS } from "@/data/blogs";

export default function HomePage() {
  const [videoOpen, setVideoOpen] = useState(false);
  const [activePackageTab, setActivePackageTab] = useState<string>("All");

  const openQuoteModal = (destination?: string) => {
    window.dispatchEvent(
      new CustomEvent("open-lead-popup", {
        detail: { destination: destination || "Malaysia" },
      })
    );
  };

  // Filter tour packages for the featured section
  const displayedTours = TOURS.filter((tour) => {
    if (activePackageTab === "International") return tour.category === "International";
    if (activePackageTab === "Domestic & Island")
      return tour.category === "Domestic" || tour.category === "Luxury & Island";
    if (activePackageTab === "Honeymoon")
      return (
        tour.title.toLowerCase().includes("honeymoon") ||
        tour.destination === "Dubai" ||
        tour.destination === "Sri Lanka" ||
        tour.destination === "Andaman"
      );
    return true;
  });

  return (
    <div className="space-y-16 sm:space-y-24 pb-16">
      {/* =========================================================================
          1. HERO SECTION (Wanderlust-Style Hero with Image behind Navbar)
          ========================================================================= */}
      <section className="relative -mt-[112px] pt-[120px] pb-16 min-h-[720px] sm:min-h-[820px] flex items-center bg-slate-950 text-white overflow-hidden">
        {/* Hero Background Slider/Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=2400&q=85"
            alt="Trip Makers Tourizms Worldwide Tours"
            fill
            priority
            className="object-cover object-center scale-105 transform duration-1000 ease-out"
          />
          {/* Subtle cinematic gradient overlays matching reference */}
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-900/40 to-slate-950/90" />
          <div className="absolute inset-0 bg-radial-at-c from-transparent via-slate-950/20 to-slate-950/70" />
        </div>

        {/* Hero Main Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-10 sm:pt-16 pb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Heading, Subtitle & Action buttons */}
            <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-left">
              <div className="inline-flex items-center gap-2 bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 px-4 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>The World Is Waiting • 10+ Years Experience</span>
              </div>

              <div className="space-y-4">
                <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.08] text-white drop-shadow-2xl font-serif">
                  Adventures <br />
                  That Stay <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-orange-100 to-[#f97150]">
                    With You
                  </span>
                </h1>

                <p className="text-slate-200 text-sm sm:text-base md:text-lg font-normal max-w-xl leading-relaxed drop-shadow">
                  Discover breathtaking destinations, unique experiences, and unforgettable memories across the globe with Chennai&apos;s leading holiday planner.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  href="/packages"
                  className="bg-emerald-400 hover:bg-emerald-300 text-slate-950 font-bold px-7 py-3.5 rounded-full text-xs sm:text-sm uppercase tracking-wider shadow-lg shadow-emerald-500/20 transition-all hover:scale-105 active:scale-95 flex items-center gap-2"
                >
                  <span>Explore Destinations</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <button
                  onClick={() => setVideoOpen(true)}
                  className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-6 py-3.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide backdrop-blur-md transition-all hover:scale-105 flex items-center gap-2.5 cursor-pointer"
                >
                  <div className="w-7 h-7 rounded-full bg-white text-slate-900 flex items-center justify-center">
                    <Play className="w-3.5 h-3.5 fill-slate-900 translate-x-0.5" />
                  </div>
                  <span>Watch Video</span>
                </button>
              </div>

              {/* Popular Destination Quick Badges like the reference footer preview */}
              <div className="pt-6 border-t border-white/10">
                <div className="flex items-center justify-between mb-3 text-xs">
                  <span className="font-semibold text-white/90">Popular Destinations</span>
                  <Link href="/destinations" className="text-emerald-300 hover:text-emerald-200 font-medium">
                    View all &rarr;
                  </Link>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {DESTINATIONS.slice(0, 4).map((dest) => (
                    <Link
                      key={dest.id}
                      href={`/destinations/${dest.slug}`}
                      className="group relative rounded-xl overflow-hidden aspect-[4/3] border border-white/15 block"
                    >
                      <Image
                        src={dest.image}
                        alt={dest.name}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent" />
                      <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between text-white text-[11px] font-semibold">
                        <span className="truncate">{dest.name}</span>
                        <span className="flex items-center gap-0.5 text-amber-300 text-[10px]">
                          ★ 4.8
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Wanderlust Floating "Where to next?" booking widget */}
            <div className="lg:col-span-5">
              <div className="bg-slate-900/80 backdrop-blur-xl border border-white/15 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-white">Where to next?</h3>
                  <p className="text-xs text-slate-300 mt-0.5">Find your perfect escape</p>
                </div>

                {/* Tabs: Flights / Hotels / Experiences */}
                <div className="grid grid-cols-3 gap-2 bg-slate-950/60 p-1.5 rounded-2xl border border-white/5 text-xs text-center font-medium">
                  <button className="py-2 rounded-xl bg-white/10 text-white flex flex-col items-center gap-1">
                    <Plane className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Flights</span>
                  </button>
                  <button className="py-2 rounded-xl hover:bg-white/5 text-slate-300 flex flex-col items-center gap-1">
                    <Building className="w-3.5 h-3.5 text-slate-400" />
                    <span>Hotels</span>
                  </button>
                  <button className="py-2 rounded-xl hover:bg-white/5 text-slate-300 flex flex-col items-center gap-1">
                    <Compass className="w-3.5 h-3.5 text-slate-400" />
                    <span>Tours</span>
                  </button>
                </div>

                {/* Quick Inputs */}
                <div className="space-y-3 text-left">
                  <div className="bg-slate-950/60 border border-white/10 rounded-2xl p-3.5">
                    <span className="block text-[10px] uppercase font-bold text-slate-400 tracking-wider">From</span>
                    <p className="text-sm font-semibold text-white mt-0.5 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                      Chennai (MAA), India
                    </p>
                  </div>

                  <div className="bg-slate-950/60 border border-white/10 rounded-2xl p-3.5">
                    <span className="block text-[10px] uppercase font-bold text-slate-400 tracking-wider">To</span>
                    <p className="text-sm font-semibold text-white mt-0.5 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#f97150]"></span>
                      Bali, Indonesia / Dubai / Malaysia
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-slate-950/60 border border-white/10 rounded-2xl p-3">
                      <span className="block text-[10px] uppercase font-bold text-slate-400 tracking-wider">Dates</span>
                      <p className="text-xs font-semibold text-white mt-0.5">May 20 – May 30</p>
                    </div>
                    <div className="bg-slate-950/60 border border-white/10 rounded-2xl p-3">
                      <span className="block text-[10px] uppercase font-bold text-slate-400 tracking-wider">Travelers</span>
                      <p className="text-xs font-semibold text-white mt-0.5">2 Adults</p>
                    </div>
                  </div>
                </div>

                {/* Search Button */}
                <button
                  onClick={() => openQuoteModal()}
                  className="w-full bg-emerald-400 hover:bg-emerald-300 text-slate-950 font-bold py-3.5 rounded-2xl text-sm transition-all hover:scale-[1.02] shadow-lg shadow-emerald-500/20 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Search Packages & Flights</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                {/* Trust Badges */}
                <div className="grid grid-cols-4 gap-2 pt-2 border-t border-white/10 text-center text-[10px] text-slate-300">
                  <div className="flex flex-col items-center gap-1">
                    <Shield className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Best Price</span>
                  </div>
                  <div className="flex flex-col items-center gap-1">
                    <Headphones className="w-3.5 h-3.5 text-emerald-400" />
                    <span>24/7 Support</span>
                  </div>
                  <div className="flex flex-col items-center gap-1">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Customized</span>
                  </div>
                  <div className="flex flex-col items-center gap-1">
                    <Award className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Verified</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Stats Row */}
          <div className="pt-12 mt-12 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <p className="text-2xl sm:text-3xl font-black text-white">500+</p>
              <p className="text-xs text-slate-300 mt-0.5 font-medium">Destinations</p>
            </div>
            <div>
              <p className="text-2xl sm:text-3xl font-black text-white">15K+</p>
              <p className="text-xs text-slate-300 mt-0.5 font-medium">Happy Travelers</p>
            </div>
            <div>
              <p className="text-2xl sm:text-3xl font-black text-white">100+</p>
              <p className="text-xs text-slate-300 mt-0.5 font-medium">Travel Experts</p>
            </div>
            <div>
              <p className="text-2xl sm:text-3xl font-black text-white">4.9 ★</p>
              <p className="text-xs text-slate-300 mt-0.5 font-medium">Average Rating</p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          2. PLAN YOUR NEXT JOURNEY (Horizontal Quick Enquiry Bar)
          ========================================================================= */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <HeroSearch />
      </div>

      {/* =========================================================================
          3. ABOUT TRIP MAKERS TOURIZMS SECTION
          ========================================================================= */}
      <section id="about" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left: Evocative image with trust badge */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
              <Image
                src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80"
                alt="About Trip Makers Tourizms"
                fill
                className="object-cover"
              />
            </div>
            {/* Experience Floating Badge */}
            <div className="absolute -bottom-6 -right-6 sm:bottom-6 sm:-right-8 bg-[#1e354c] text-white p-5 sm:p-6 rounded-2xl shadow-2xl border-2 border-[#f97150] max-w-[220px]">
              <span className="text-3xl sm:text-4xl font-black text-[#f97150] block">
                10+
              </span>
              <span className="text-xs font-bold uppercase tracking-wider block text-slate-200">
                Years of Excellence
              </span>
              <span className="text-[11px] text-slate-400 block mt-1">
                Chennai&apos;s Most Trusted Holiday Planner
              </span>
            </div>
          </div>

          {/* Right: Narrative & Key Strengths */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-widest text-[#f97150]">
                Welcome To Trip Makers Tourizms
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                About Trip Makers Tourizms
              </h2>
              <p className="text-sm font-semibold text-[#f97150]">
                Crafting Unforgettable Holiday Experiences for Over a Decade
              </p>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Headquartered in Chennai, <strong>Trip Makers Tourizms</strong> is an accredited travel agency specializing in handcrafted domestic & international tour packages, flight bookings, hotel reservations, and swift visa assistance.
            </p>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Whether you are planning a romantic honeymoon in the Maldives or Sri Lanka, an exciting family vacation to Singapore and Malaysia, a desert escapade in Dubai, or a cultural expedition across Europe, our seasoned holiday consultants ensure every single detail is handled seamlessly from start to finish.
            </p>

            {/* 4 Feature Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-orange-50/50 border border-orange-100 flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-[#f97150] text-white flex items-center justify-center shrink-0">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-xs sm:text-sm">
                    10+ Years Industry Trust
                  </h4>
                  <p className="text-[11px] text-slate-500 mt-0.5">
                    15,000+ satisfied clients across Tamil Nadu & worldwide.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-orange-50/50 border border-orange-100 flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-[#f97150] text-white flex items-center justify-center shrink-0">
                  <Compass className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-xs sm:text-sm">
                    100% Customized Tours
                  </h4>
                  <p className="text-[11px] text-slate-500 mt-0.5">
                    Itineraries tailored to your exact budget, dates, and interests.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-orange-50/50 border border-orange-100 flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-[#f97150] text-white flex items-center justify-center shrink-0">
                  <Shield className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-xs sm:text-sm">
                    Complete Travel Logistics
                  </h4>
                  <p className="text-[11px] text-slate-500 mt-0.5">
                    Flights, Visas, Hotels, Transfers & Guides under one roof.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-orange-50/50 border border-orange-100 flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-[#f97150] text-white flex items-center justify-center shrink-0">
                  <Headphones className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-xs sm:text-sm">
                    24×7 Local Assistance
                  </h4>
                  <p className="text-[11px] text-slate-500 mt-0.5">
                    Personal tour coordinator on call throughout your entire holiday.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                onClick={() => openQuoteModal()}
                className="bg-[#1e354c] hover:bg-[#f97150] text-white text-xs font-bold uppercase tracking-wider px-7 py-3.5 rounded-full shadow-lg transition-all cursor-pointer"
              >
                Plan Your Journey With Us
              </button>
              <a
                href="tel:+919444119518"
                className="text-xs font-bold text-slate-700 hover:text-[#f97150] flex items-center gap-2"
              >
                <Phone className="w-4 h-4 text-[#f97150]" />
                <span>Call Us: +91 94441 19518</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          4. OUR CORE SERVICES (6 Services as on tripmakerstourizms.in)
          ========================================================================= */}
      <section id="services" className="bg-slate-50 py-20 border-y border-slate-200/80 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#f97150]">
              What We Do
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight title-accent">
              Our Core Services
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 pt-2">
              Comprehensive end-to-end travel solutions designed to provide hassle-free, memorable vacations for every traveler.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service 1: Visa Assistance */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-orange-200 transition-all duration-300 group">
              <div className="w-14 h-14 rounded-xl bg-orange-50 text-[#f97150] flex items-center justify-center mb-6 group-hover:bg-[#f97150] group-hover:text-white transition-colors">
                <FileCheck className="w-7 h-7" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2.5">
                Visa Assistance
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed mb-4">
                Fast and hassle-free tourist and business visa assistance for Dubai, Singapore, Schengen Europe, Malaysia, Thailand, Vietnam, UK, US, and worldwide with 100% document scrutiny.
              </p>
              <button
                onClick={() => openQuoteModal("Visa Assistance")}
                className="text-xs font-bold text-[#f97150] hover:underline flex items-center gap-1 cursor-pointer"
              >
                <span>Enquire Visa Service</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Service 2: Flight Booking */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-orange-200 transition-all duration-300 group">
              <div className="w-14 h-14 rounded-xl bg-orange-50 text-[#f97150] flex items-center justify-center mb-6 group-hover:bg-[#f97150] group-hover:text-white transition-colors">
                <Plane className="w-7 h-7" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2.5">
                Flight Booking
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed mb-4">
                Best domestic and international airfare deals with all major airlines from Chennai and across India. Group fares, easy rescheduling, and immediate e-ticket issuance.
              </p>
              <button
                onClick={() => openQuoteModal("Flight Booking")}
                className="text-xs font-bold text-[#f97150] hover:underline flex items-center gap-1 cursor-pointer"
              >
                <span>Check Flight Rates</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Service 3: Hotel Booking */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-orange-200 transition-all duration-300 group">
              <div className="w-14 h-14 rounded-xl bg-orange-50 text-[#f97150] flex items-center justify-center mb-6 group-hover:bg-[#f97150] group-hover:text-white transition-colors">
                <Building className="w-7 h-7" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2.5">
                Hotel Booking
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed mb-4">
                Handpicked 3-star, 4-star, and luxury 5-star beachfront resorts, boutique city hotels, and private pool villas at exclusive contracted rates with free breakfast options.
              </p>
              <button
                onClick={() => openQuoteModal("Hotel Booking")}
                className="text-xs font-bold text-[#f97150] hover:underline flex items-center gap-1 cursor-pointer"
              >
                <span>Reserve Hotels</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Service 4: Best Tour Packages */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-orange-200 transition-all duration-300 group">
              <div className="w-14 h-14 rounded-xl bg-orange-50 text-[#f97150] flex items-center justify-center mb-6 group-hover:bg-[#f97150] group-hover:text-white transition-colors">
                <Compass className="w-7 h-7" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2.5">
                Best Tour Packages
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed mb-4">
                Tailor-made domestic and international holiday packages with curated sightseeing, meals, private transfers, and experienced local guides at guaranteed competitive rates.
              </p>
              <Link
                href="/packages"
                className="text-xs font-bold text-[#f97150] hover:underline flex items-center gap-1"
              >
                <span>Explore All Packages</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Service 5: 24×7 Customer Support */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-orange-200 transition-all duration-300 group">
              <div className="w-14 h-14 rounded-xl bg-orange-50 text-[#f97150] flex items-center justify-center mb-6 group-hover:bg-[#f97150] group-hover:text-white transition-colors">
                <Headphones className="w-7 h-7" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2.5">
                24×7 Customer Support
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed mb-4">
                Round-the-clock emergency assistance, flight tracking, and dedicated on-tour coordination. We stand beside you from your departure gate until you safely return home.
              </p>
              <a
                href="tel:+919444119518"
                className="text-xs font-bold text-[#f97150] hover:underline flex items-center gap-1"
              >
                <span>Call Helpline: +91 94441 19518</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Service 6: Safe & Comfortable Travel */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-orange-200 transition-all duration-300 group">
              <div className="w-14 h-14 rounded-xl bg-orange-50 text-[#f97150] flex items-center justify-center mb-6 group-hover:bg-[#f97150] group-hover:text-white transition-colors">
                <Car className="w-7 h-7" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2.5">
                Safe & Comfortable Travel
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed mb-4">
                Verified private AC transfers, polite English and Tamil speaking chauffeurs, sanitized vehicles, and vetted hygiene standards for complete traveler safety.
              </p>
              <button
                onClick={() => openQuoteModal()}
                className="text-xs font-bold text-[#f97150] hover:underline flex items-center gap-1 cursor-pointer"
              >
                <span>Book Safe Cabs & Tours</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          5. POPULAR DESTINATIONS GALLERY (9 Destinations from tripmakerstourizms.in)
          ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-10 pb-4 border-b border-slate-200">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#f97150]">
              Trending Places
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Popular Destinations
            </h2>
          </div>
          <Link
            href="/destinations"
            className="text-xs font-bold uppercase tracking-wider text-[#e66836] hover:text-[#f97150] flex items-center gap-1.5 transition-colors"
          >
            <span>View All Destinations</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* 9 Destinations Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {DESTINATIONS.map((dest) => (
            <div
              key={dest.id}
              className="group relative rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 bg-slate-900 border border-slate-100"
            >
              <div className="relative aspect-[16/11] w-full">
                <Image
                  src={dest.image}
                  alt={dest.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent opacity-85" />
              </div>

              {/* Destination Card Content */}
              <div className="absolute inset-0 p-6 flex flex-col justify-between text-white">
                <div className="flex justify-between items-start">
                  <span className="bg-[#f97150] text-white text-[10px] font-bold uppercase px-2.5 py-1 rounded-full shadow-sm">
                    {dest.region}
                  </span>
                  <span className="text-xs font-bold text-slate-200 bg-slate-900/70 backdrop-blur-sm px-2.5 py-1 rounded-full border border-white/20">
                    {dest.tourCount} Tours
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="text-2xl font-black text-white group-hover:text-[#f97150] transition-colors">
                    {dest.name}
                  </h3>
                  <p className="text-xs text-slate-300 line-clamp-2 leading-relaxed">
                    {dest.description}
                  </p>

                  <div className="pt-2 flex items-center justify-between border-t border-white/20">
                    <div>
                      <span className="text-[10px] text-slate-300 block uppercase">
                        Starting From
                      </span>
                      <span className="text-lg font-black text-[#f97150]">
                        ₹{dest.startingPrice.toLocaleString("en-IN")}
                      </span>
                    </div>

                    <button
                      onClick={() => openQuoteModal(dest.name)}
                      className="bg-white/20 hover:bg-[#f97150] text-white px-4 py-2 rounded-lg text-xs font-bold uppercase transition-all backdrop-blur-sm cursor-pointer"
                    >
                      Enquire
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================================
          6. FEATURED TOUR PACKAGES (8 exact packages from tripmakerstourizms.in)
          ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-8 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-[#f97150]">
            Top-Selling Itineraries
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight title-accent">
            Featured Tour Packages
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 pt-2">
            Handpicked vacation packages from Chennai with guaranteed flight support, handpicked hotels, meals, and private transfers.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {["All", "International", "Domestic & Island", "Honeymoon"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActivePackageTab(tab)}
              className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                activePackageTab === tab
                  ? "bg-[#1e354c] text-white shadow-md shadow-slate-900/20"
                  : "bg-slate-100 hover:bg-slate-200 text-slate-700"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* 8 Packages Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {displayedTours.map((tour) => (
            <TourCard key={tour.id} tour={tour} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/packages"
            className="inline-flex items-center gap-2 bg-[#1e354c] hover:bg-[#f97150] text-white px-8 py-3.5 rounded-[4px] text-xs font-bold uppercase tracking-wider transition-all shadow-md hover:shadow-orange-500/20"
          >
            <span>View All Tour Packages</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* =========================================================================
          7. SPECIAL FESTIVE DISCOUNT PROMO BANNER
          ========================================================================= */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 rounded-2xl overflow-hidden shadow-2xl border border-orange-200">
          {/* Left: Gradient Offer */}
          <div className="bg-gradient-to-br from-[#f97251] via-[#fa8062] to-[#ff986c] text-white p-8 sm:p-14 flex flex-col justify-center items-center text-center space-y-4">
            <span className="text-xs font-bold tracking-widest uppercase text-orange-100">
              Chennai Special Offer
            </span>
            <h3 className="text-3xl sm:text-4xl font-black tracking-tight leading-tight">
              Up to 30% OFF On Holiday Packages!
            </h3>
            <p className="text-xs sm:text-sm text-orange-50 max-w-sm leading-relaxed">
              Book your domestic or international vacation today with Trip Makers Tourizms. Complimentary airport chauffeur transfers included!
            </p>
            <div className="pt-3 flex flex-wrap gap-3 justify-center">
              <button
                onClick={() => openQuoteModal()}
                className="inline-block bg-[#1e354c] hover:bg-slate-900 text-white text-xs font-bold uppercase tracking-wider px-8 py-3.5 rounded-full shadow-lg transition-transform hover:scale-105 cursor-pointer"
              >
                Claim Discount Now
              </button>
            </div>
            <span className="text-[10px] text-orange-200 uppercase tracking-widest pt-1">
              *Limited slots available for upcoming departures
            </span>
          </div>

          {/* Right: Evocative Photo */}
          <div className="relative min-h-[280px] md:min-h-full bg-slate-100">
            <Image
              src="https://images.unsplash.com/photo-1506012787146-f92b2d7d6d96?auto=format&fit=crop&w=1000&q=80"
              alt="Holiday Discount Banner"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* =========================================================================
          8. TRAVELING HIGHLIGHTS VIDEO BANNER
          ========================================================================= */}
      <section className="relative py-28 sm:py-36 bg-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=2000&q=80"
            alt="Traveling Highlights"
            fill
            className="object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-slate-950/80" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center space-y-6">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#ff7d5d]">
            Your Next Traveling Idea
          </span>
          <h2 className="text-4xl sm:text-6xl font-black tracking-tight leading-tight text-white drop-shadow">
            Traveling Highlights
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto leading-relaxed">
            Get inspired by breathtaking footage captured on our recent small-group holidays across Malaysia, Dubai, Thailand, Sri Lanka, and Europe.
          </p>

          {/* Interactive Pulsing Play Button */}
          <div className="pt-4">
            <button
              onClick={() => setVideoOpen(true)}
              aria-label="Play Traveling Highlights Video"
              className="w-20 h-20 rounded-full bg-white text-[#f97150] shadow-2xl flex items-center justify-center mx-auto hover:scale-110 active:scale-95 transition-all duration-300 cursor-pointer group relative"
            >
              <span className="absolute inset-0 rounded-full bg-white/40 animate-ping"></span>
              <Play className="w-8 h-8 fill-[#f97150] ml-1 group-hover:scale-110 transition-transform" />
            </button>
          </div>
        </div>

        {/* Video Player Modal */}
        <VideoModal isOpen={videoOpen} onClose={() => setVideoOpen(false)} />
      </section>

      {/* =========================================================================
          9. WHY CHOOSE US (6 Pillars from tripmakerstourizms.in)
          ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-[#f97150]">
            The Trip Makers Tourizms Difference
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight title-accent">
            Why Choose Us
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 pt-2">
            Chennai&apos;s most dependable travel companion with transparent pricing and passionate hospitality.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="p-7 rounded-2xl bg-white border border-slate-200/80 gdlr-card space-y-3">
            <div className="w-14 h-14 rounded-xl bg-orange-50 text-[#f97150] flex items-center justify-center">
              <Award className="w-7 h-7" />
            </div>
            <h3 className="font-bold text-slate-900 text-base">
              10+ Years of Experience
            </h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              Over a decade of seasoned industry experience organizing memorable trips for couples, families, and corporates.
            </p>
          </div>

          <div className="p-7 rounded-2xl bg-white border border-slate-200/80 gdlr-card space-y-3">
            <div className="w-14 h-14 rounded-xl bg-orange-50 text-[#f97150] flex items-center justify-center">
              <Shield className="w-7 h-7" />
            </div>
            <h3 className="font-bold text-slate-900 text-base">
              Best Price Guarantee
            </h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              Direct contracts with top hotels and ground transport operators give you unbeatable value with zero hidden costs.
            </p>
          </div>

          <div className="p-7 rounded-2xl bg-white border border-slate-200/80 gdlr-card space-y-3">
            <div className="w-14 h-14 rounded-xl bg-orange-50 text-[#f97150] flex items-center justify-center">
              <Compass className="w-7 h-7" />
            </div>
            <h3 className="font-bold text-slate-900 text-base">
              Customized Tour Packages
            </h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              Tailor-made itineraries crafted around your specific preferences, timeline, dietary needs, and vacation goals.
            </p>
          </div>

          <div className="p-7 rounded-2xl bg-white border border-slate-200/80 gdlr-card space-y-3">
            <div className="w-14 h-14 rounded-xl bg-orange-50 text-[#f97150] flex items-center justify-center">
              <CheckCircle className="w-7 h-7" />
            </div>
            <h3 className="font-bold text-slate-900 text-base">
              Hassle-free Travel Planning
            </h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              We handle every detail: flight tickets, visa processing, hotel reservations, private transfers, and sightseeing entry tickets.
            </p>
          </div>

          <div className="p-7 rounded-2xl bg-white border border-slate-200/80 gdlr-card space-y-3">
            <div className="w-14 h-14 rounded-xl bg-orange-50 text-[#f97150] flex items-center justify-center">
              <Users className="w-7 h-7" />
            </div>
            <h3 className="font-bold text-slate-900 text-base">
              Dedicated & Experienced Team
            </h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              Passionate tour specialists in Chennai and verified multilingual guides on ground ensuring warm hospitality at every turn.
            </p>
          </div>

          <div className="p-7 rounded-2xl bg-white border border-slate-200/80 gdlr-card space-y-3">
            <div className="w-14 h-14 rounded-xl bg-orange-50 text-[#f97150] flex items-center justify-center">
              <Headphones className="w-7 h-7" />
            </div>
            <h3 className="font-bold text-slate-900 text-base">
              100% Customer Satisfaction
            </h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              Over 15,000 satisfied travelers with stellar 5-star ratings and a 94% repeat client rate across Tamil Nadu.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================================
          10. CAN'T FIND PERFECT PACKAGE? CTA BANNER
          ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-[#1e354c] via-[#142334] to-[#f97150] rounded-2xl p-8 sm:p-12 text-white shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8 border border-orange-200/20">
          <div className="space-y-3 text-center md:text-left">
            <span className="text-xs font-bold uppercase tracking-widest text-[#f97150] bg-white/10 px-3 py-1 rounded-full">
              Customized Travel Concierge
            </span>
            <h3 className="text-2xl sm:text-4xl font-black tracking-tight leading-tight">
              Can&apos;t Find The Perfect Package? <br />
              <span className="text-[#f97150]">Let Us Customize It For You!</span>
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl leading-relaxed">
              Tell us your desired travel dates, budget, and destination preferences. Our Chennai holiday specialists will craft a bespoke itinerary within 2 hours.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <button
              onClick={() => openQuoteModal()}
              className="bg-white hover:bg-orange-50 text-slate-900 text-xs font-extrabold uppercase tracking-wider px-6 py-3.5 rounded-full shadow-lg transition-transform hover:scale-105 cursor-pointer text-center"
            >
              Plan Custom Trip
            </button>
            <a
              href="https://wa.me/919988467863?text=Hi%20Trip%20Makers%20Tourizms!%20I%20want%20to%20customize%20a%20tour%20package."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-extrabold uppercase tracking-wider px-6 py-3.5 rounded-full shadow-lg transition-transform hover:scale-105 flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Us</span>
            </a>
            <a
              href="tel:+919444119518"
              className="bg-[#f97150] hover:bg-[#e85e34] text-white text-xs font-extrabold uppercase tracking-wider px-6 py-3.5 rounded-full shadow-lg transition-transform hover:scale-105 flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4" />
              <span>Call Hotline</span>
            </a>
          </div>
        </div>
      </section>

      {/* =========================================================================
          11. CUSTOMER REVIEWS / TESTIMONIALS
          ========================================================================= */}
      <section className="bg-slate-100/70 py-20 border-y border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#f97150]">
              Real Travelers, Real Stories
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight title-accent">
              What Our Clients Say
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 pt-2">
              Reviews from families, couples, and group travelers who booked with Trip Makers Tourizms Chennai.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "S. Murugan & Family",
                type: "Malaysia & Singapore Tour (Family of 4)",
                avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
                text: "Trip Makers Tourizms arranged our 5-day Malaysia tour including Genting and Batu Caves. From flight check-ins to Chennai transfers, everything was flawless. The guide was super friendly with my kids!",
              },
              {
                name: "Pooja & Karthik",
                type: "Dubai Honeymoon Special (Couple)",
                avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80",
                text: "We booked our Dubai trip through Trip Makers Tourizms Chennai. Visa arrived in just 2 days! The desert safari, Burj Khalifa observation deck, and luxury marina dinner cruise were breathtaking.",
              },
              {
                name: "Ramesh Babu",
                type: "Andaman Islands Group Tour",
                avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80",
                text: "Unbeatable price and top-class 4-star hotels in Havelock and Port Blair. Scuba diving was well coordinated. Best travel agency in Chennai hands down. Will book Europe tour next year!",
              },
            ].map((review, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-7 gdlr-card border border-slate-200 flex flex-col justify-between relative shadow-sm"
              >
                <Quote className="w-8 h-8 text-[#f97150]/20 absolute top-5 right-5" />
                <div className="space-y-4">
                  <div className="flex text-amber-400">
                    {[...Array(5)].map((_, idx) => (
                      <Star key={idx} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed italic">
                    &ldquo;{review.text}&rdquo;
                  </p>
                </div>
                <div className="flex items-center gap-3 pt-6 mt-6 border-t border-slate-100">
                  <div className="w-11 h-11 rounded-full overflow-hidden relative">
                    <Image
                      src={review.avatar}
                      alt={review.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-slate-900">{review.name}</h4>
                    <span className="text-[11px] text-slate-400 font-medium">
                      {review.type}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          12. CHENNAI HEAD OFFICE LOCATION & CONTACT DETAILS + GOOGLE MAP EMBED
          ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-xl border border-slate-200/80 p-8 sm:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Column: Office Details */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#f97150]">
                  Head Office Location
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mt-1">
                  Visit Us in Chennai
                </h3>
                <p className="text-xs text-slate-500 mt-2">
                  Drop by our Chennai office for a warm cup of coffee and let our holiday planners craft your dream getaway.
                </p>
              </div>

              <div className="space-y-4 text-xs text-slate-700">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-orange-50 text-[#f97150] flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="block text-slate-900 font-bold">Address:</strong>
                    <span>No. 22/542, 24th Street, G.K.M Colony, Chennai – 600082, Tamil Nadu, India</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-orange-50 text-[#f97150] flex items-center justify-center shrink-0 mt-0.5">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="block text-slate-900 font-bold">Phone Numbers:</strong>
                    <a href="tel:+919444119518" className="hover:text-[#f97150] font-semibold">
                      +91 94441 19518
                    </a>
                    <span> / </span>
                    <a href="tel:+919884678631" className="hover:text-[#f97150] font-semibold">
                      +91 98846 78631
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                    <MessageCircle className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="block text-slate-900 font-bold">WhatsApp Direct:</strong>
                    <a
                      href="https://wa.me/919988467863"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-emerald-600 hover:underline font-semibold"
                    >
                      +91 98846 78631 (wa.me/919988467863)
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-orange-50 text-[#f97150] flex items-center justify-center shrink-0 mt-0.5">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="block text-slate-900 font-bold">Working Hours:</strong>
                    <span>Monday - Saturday: 9:30 AM – 8:00 PM</span>
                    <span className="block text-slate-400">Sunday: 10:00 AM – 5:00 PM</span>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => openQuoteModal()}
                  className="w-full sm:w-auto bg-[#f97150] hover:bg-[#e85e34] text-white text-xs font-bold uppercase tracking-wider px-6 py-3 rounded-xl shadow-lg transition-transform hover:scale-105 cursor-pointer"
                >
                  Request A Free Callback
                </button>
              </div>
            </div>

            {/* Right Column: Google Maps Embed */}
            <div className="lg:col-span-7 h-[360px] sm:h-[420px] rounded-2xl overflow-hidden border border-slate-200 shadow-md relative bg-slate-100">
              <iframe
                title="Trip Makers Tourizms Google Map Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3885.670564619379!2d80.20790757578051!3d13.11943801160352!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.0!3m3!1m2!1s0x3a526442657e7eb1%3A0x6b17c244ad06cf72!2sGKM%20Colony%2C%20Perambur%2C%20Chennai%2C%20Tamil%20Nadu%20600082!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          13. TRAVEL ARTICLES & GUIDES (Inspiration)
          ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-10 pb-4 border-b border-slate-200">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#f97150]">
              Inspiration & Guides
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Travel Articles & Tips
            </h2>
          </div>
          <Link
            href="/blog"
            className="text-xs font-bold uppercase tracking-wider text-[#e66836] hover:text-[#f97150] flex items-center gap-1.5 transition-colors"
          >
            <span>Read All Articles</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {BLOGS.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-2xl overflow-hidden border border-slate-200/80 gdlr-card transition-all duration-300 group flex flex-col justify-between shadow-xs hover:shadow-lg"
            >
              <div>
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <span className="absolute top-3 left-3 bg-[#f97150] text-white text-[10px] font-bold uppercase px-2.5 py-1 rounded-full">
                    {post.category}
                  </span>
                </div>
                <div className="p-6 space-y-3">
                  <div className="flex items-center gap-2 text-[11px] text-slate-400 font-medium">
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="font-bold text-base text-slate-900 leading-snug group-hover:text-[#f97150] transition-colors">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </h3>
                  <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>
              </div>
              <div className="p-6 pt-0 border-t border-slate-100 mt-4 flex items-center justify-between">
                <span className="text-xs font-semibold text-slate-600">
                  By {post.author}
                </span>
                <Link
                  href={`/blog/${post.slug}`}
                  className="text-xs font-bold text-[#f97150] hover:underline flex items-center gap-1"
                >
                  Read Story &rarr;
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
