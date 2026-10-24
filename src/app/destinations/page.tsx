import React from "react";
import Link from "next/link";
import Image from "next/image";
import { MapPin, ArrowRight } from "lucide-react";
import { DESTINATIONS } from "@/data/destinations";

export const metadata = {
  title: "Destinations - Travel Tour",
  description: "Explore vacation packages by world regions: Europe, Asia, Africa, America, Oceania.",
};

export default function DestinationsPage() {
  return (
    <div className="bg-slate-50 min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Banner */}
        <div className="bg-slate-900 rounded-2xl p-8 sm:p-14 text-white text-center space-y-3 relative overflow-hidden">
          <div className="relative z-10 max-w-2xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-widest text-[#f97150]">
              Discover Seven Continents
            </span>
            <h1 className="text-3xl sm:text-5xl font-black tracking-tight">
              World Destinations
            </h1>
            <p className="text-xs sm:text-sm text-slate-300">
              From majestic alpine summits to tranquil tropical atolls and vibrant cultural capitals.
            </p>
          </div>
        </div>

        {/* Destination Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {DESTINATIONS.map((dest) => (
            <div
              key={dest.id}
              className="bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-[0_4px_25px_rgba(0,0,0,0.06)] hover:shadow-xl transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                  <Image
                    src={dest.image}
                    alt={dest.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <span className="text-[10px] uppercase font-bold tracking-wider text-[#f97150]">
                      {dest.region}
                    </span>
                    <h3 className="text-2xl font-black">{dest.name}</h3>
                  </div>
                  <span className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-slate-900 text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                    {dest.tourCount} Tours
                  </span>
                </div>

                <div className="p-6 space-y-4">
                  <p className="text-xs text-slate-500 leading-relaxed">
                    {dest.description}
                  </p>

                  <div>
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-2">
                      Popular Highlights:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {dest.popularSpots.map((spot, i) => (
                        <span
                          key={i}
                          className="bg-slate-100 text-slate-700 text-[11px] font-semibold px-2.5 py-1 rounded-md"
                        >
                          {spot}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0 border-t border-slate-100 mt-4 flex items-center justify-between">
                <div>
                  <span className="text-[10px] text-slate-400 font-medium block">Starting from</span>
                  <span className="text-base font-black text-[#f97150]">
                    ${dest.startingPrice.toLocaleString()}
                  </span>
                </div>

                <Link
                  href={`/tours?destination=${encodeURIComponent(dest.name)}`}
                  className="px-4 py-2 bg-[#f97150] hover:bg-[#e85e34] text-white rounded-lg text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 shadow-sm transition-all"
                >
                  <span>Explore</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
