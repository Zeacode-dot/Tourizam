"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Star, Clock, MapPin, Heart, Zap, MessageCircle } from "lucide-react";
import { Tour } from "@/data/tours";
import { useBooking } from "@/context/BookingContext";

interface TourCardProps {
  tour: Tour;
}

export default function TourCard({ tour }: TourCardProps) {
  const { formatPrice, isWishlisted, toggleWishlist, openBookingModal } = useBooking();
  const wishlisted = isWishlisted(tour.id);

  const getWhatsAppLink = () => {
    const text = encodeURIComponent(
      `Hello Trip Makers Tourizms! 👋\nI am interested in booking the *${tour.title}* (${tour.duration}).\nStarting at ${formatPrice(tour.price)} per person.\nPlease share the full itinerary, inclusions, and best available dates!`
    );
    return `https://wa.me/919988467863?text=${text}`;
  };

  return (
    <div className="bg-white rounded-[6px] overflow-hidden gdlr-card border border-slate-200/80 flex flex-col justify-between group transition-all duration-300 hover:shadow-xl hover:border-orange-200">
      {/* Thumbnail Container */}
      <div className="relative aspect-[16/11] w-full overflow-hidden bg-slate-100">
        <Link href={`/tour/${tour.slug}`} className="block w-full h-full">
          <Image
            src={tour.heroImage}
            alt={tour.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
            className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
          />
        </Link>

        {/* Ribbon Badge */}
        {tour.discountBadge && (
          <div
            className="ribbon-tag shadow-md"
            style={{ backgroundColor: tour.badgeColor || "#f97150" }}
          >
            {tour.discountBadge}
          </div>
        )}

        {/* Wishlist Button */}
        <button
          onClick={(e) => {
            e.preventDefault();
            toggleWishlist(tour.id);
          }}
          aria-label="Save to wishlist"
          className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/95 backdrop-blur-sm flex items-center justify-center text-slate-700 hover:text-red-500 hover:scale-110 transition-all shadow-md z-10 cursor-pointer"
        >
          <Heart
            className={`w-4 h-4 ${
              wishlisted ? "fill-red-500 text-red-500" : "text-slate-600"
            }`}
          />
        </button>

        {/* Country Badge */}
        <div className="absolute bottom-3 left-3 bg-slate-900/80 backdrop-blur-sm text-white text-[11px] font-semibold px-2.5 py-1 rounded-[4px] flex items-center gap-1 shadow-xs">
          <MapPin className="w-3 h-3 text-[#f97150]" />
          <span>{tour.country}</span>
        </div>

        {/* Duration Chip on Image */}
        <div className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-sm text-slate-800 text-[11px] font-bold px-2 py-0.5 rounded-[4px] flex items-center gap-1 shadow-xs">
          <Clock className="w-3 h-3 text-[#f97150]" />
          <span>{tour.duration}</span>
        </div>
      </div>

      {/* Content Area */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
        <div>
          {/* Title with small icon */}
          <h3 className="font-bold text-slate-900 text-[17px] leading-snug line-clamp-2 group-hover:text-[#f97150] transition-colors mb-2">
            <Link href={`/tour/${tour.slug}`} className="flex items-start gap-1.5">
              <Zap className="w-4 h-4 text-[#f97150] shrink-0 mt-1 fill-[#f97150]" />
              <span>{tour.title}</span>
            </Link>
          </h3>

          {/* Highlights Snippet */}
          <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed mb-3">
            {tour.overview}
          </p>

          {/* Price line matching Goodlayers & Trip Makers */}
          <div className="flex items-baseline gap-1.5 pt-1">
            <span className="text-xs text-slate-400 font-medium">From</span>
            {tour.originalPrice && (
              <span className="text-xs text-slate-400 line-through">
                {formatPrice(tour.originalPrice)}
              </span>
            )}
            <span className="text-xl font-black text-[#f97150]">
              {formatPrice(tour.price)}
            </span>
            <span className="text-[11px] text-slate-500 font-medium">/ person</span>
          </div>
        </div>

        {/* Bottom Metadata & CTAs */}
        <div className="pt-3 border-t border-slate-100 space-y-3">
          <div className="flex items-center justify-between text-xs text-slate-500">
            {/* Rating Stars */}
            <div className="flex items-center gap-1">
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-3.5 h-3.5 ${
                      i < Math.floor(tour.rating)
                        ? "fill-amber-400 text-amber-400"
                        : "text-slate-200"
                    }`}
                  />
                ))}
              </div>
              <span className="text-[11px] text-slate-600 font-bold ml-1">
                {tour.rating}
              </span>
              <span className="text-[10px] text-slate-400 font-medium">
                ({tour.reviewsCount})
              </span>
            </div>

            <span className="text-[11px] font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">
              Verified Tour
            </span>
          </div>

          {/* Actions: View Details, WhatsApp Enquiry, and Book */}
          <div className="grid grid-cols-2 gap-2 pt-1">
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2 px-2.5 bg-emerald-50 hover:bg-emerald-600 text-emerald-700 hover:text-white text-xs font-bold rounded-[4px] border border-emerald-200 hover:border-emerald-600 transition-all flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>

            <button
              onClick={() => openBookingModal(tour)}
              className="w-full py-2 px-2.5 bg-[#f97150] hover:bg-[#e85e34] text-white text-xs font-bold rounded-[4px] shadow-sm shadow-orange-500/20 transition-all cursor-pointer text-center"
            >
              Book Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
