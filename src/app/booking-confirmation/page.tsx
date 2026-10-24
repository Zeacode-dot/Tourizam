"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { CheckCircle2, Download, Calendar, Users, MapPin, ArrowRight } from "lucide-react";
import { useBooking } from "@/context/BookingContext";

export default function BookingConfirmationPage() {
  const { bookings, formatPrice } = useBooking();

  return (
    <div className="bg-slate-50 min-h-screen py-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="bg-white rounded-2xl p-8 border border-slate-200/80 shadow-sm text-center space-y-3">
          <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <h1 className="text-3xl font-black text-slate-900 tracking-tight">
            My Travel Bookings
          </h1>
          <p className="text-xs text-slate-500">
            View your upcoming expeditions, download vouchers, and review party details.
          </p>
        </div>

        {bookings.length === 0 ? (
          <div className="bg-white rounded-2xl p-12 text-center border border-slate-200/80 shadow-sm space-y-4">
            <p className="text-slate-500 text-sm">
              You haven&apos;t booked any tours yet.
            </p>
            <Link
              href="/tours"
              className="inline-flex items-center gap-2 bg-[#f97150] hover:bg-[#e85e34] text-white px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-wider shadow-md"
            >
              <span>Explore Top Tours</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        ) : (
          <div className="space-y-6">
            {bookings.map((b) => (
              <div
                key={b.id}
                className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex flex-col md:flex-row gap-6 items-center"
              >
                <div className="relative w-full md:w-48 aspect-[16/11] rounded-xl overflow-hidden shrink-0 bg-slate-100">
                  <Image
                    src={b.tourImage}
                    alt={b.tourTitle}
                    fill
                    className="object-cover"
                  />
                  <span className="absolute top-2 left-2 bg-emerald-600 text-white text-[10px] font-bold px-2 py-0.5 rounded">
                    {b.status}
                  </span>
                </div>

                <div className="flex-1 space-y-2 text-left w-full">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono font-bold bg-slate-100 px-2 py-0.5 rounded text-slate-600">
                      Ref: {b.id}
                    </span>
                    <span className="text-base font-black text-[#f97150]">
                      {formatPrice(b.totalPrice)}
                    </span>
                  </div>

                  <h3 className="font-bold text-base text-slate-900">
                    {b.tourTitle}
                  </h3>

                  <div className="grid grid-cols-2 gap-2 text-xs text-slate-500">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-[#f97150]" />
                      <span>{b.date}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Users className="w-3.5 h-3.5 text-[#f97150]" />
                      <span>{b.adults} Adults {b.children > 0 ? `, ${b.children} Children` : ""}</span>
                    </div>
                  </div>

                  {b.addons.length > 0 && (
                    <div className="text-[11px] text-slate-400">
                      <strong>Add-ons:</strong> {b.addons.join(", ")}
                    </div>
                  )}

                  <div className="pt-2 text-xs text-slate-600">
                    <strong>Primary Guest:</strong> {b.customerName} ({b.customerEmail})
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
