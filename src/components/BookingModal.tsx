"use client";

import React, { useState } from "react";
import Image from "next/image";
import { X, Calendar, Users, ShieldCheck, CheckCircle2, MapPin, Download, Sparkles } from "lucide-react";
import { useBooking } from "@/context/BookingContext";

export default function BookingModal() {
  const { activeBookingTour, closeBookingModal, formatPrice, currency, addBooking } = useBooking();

  const [date, setDate] = useState(() => {
    const d = new Date();
    d.setDate(d.getDate() + 14);
    return d.toISOString().split("T")[0];
  });
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);

  // Add-ons
  const [airportTransfer, setAirportTransfer] = useState(true);
  const [insurance, setInsurance] = useState(false);
  const [privateGuide, setPrivateGuide] = useState(false);

  // Customer Info
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [notes, setNotes] = useState("");

  // Booking Flow Steps
  const [step, setStep] = useState<"configure" | "details" | "confirmed">("configure");
  const [bookingRef, setBookingRef] = useState<string>("");

  if (!activeBookingTour) return null;

  const basePrice = activeBookingTour.price;
  const childPrice = Math.round(basePrice * 0.65); // 35% discount for kids

  const addonsTotal =
    (airportTransfer ? 45 : 0) +
    (insurance ? 35 : 0) +
    (privateGuide ? 120 : 0);

  const subtotal = adults * basePrice + children * childPrice + addonsTotal;
  const tax = Math.round(subtotal * 0.05); // 5% tax
  const total = subtotal + tax;

  const handleConfirmBooking = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !phone) {
      alert("Please enter all required customer information.");
      return;
    }

    const selectedAddons: string[] = [];
    if (airportTransfer) selectedAddons.push("VIP Airport Transfer ($45)");
    if (insurance) selectedAddons.push("Travel Insurance ($35)");
    if (privateGuide) selectedAddons.push("Dedicated Private Guide ($120)");

    const record = addBooking({
      tourId: activeBookingTour.id,
      tourTitle: activeBookingTour.title,
      tourImage: activeBookingTour.heroImage,
      date,
      adults,
      children,
      customerName: name,
      customerEmail: email,
      customerPhone: phone,
      addons: selectedAddons,
      totalPrice: total,
      currency,
    });

    setBookingRef(record.id);
    setStep("confirmed");
  };

  const handleDownloadTicket = () => {
    const ticketContent = `================================================
TRAVEL TOUR - OFFICIAL BOOKING CONFIRMATION
================================================
Booking Reference: ${bookingRef}
Tour: ${activeBookingTour.title}
Destination: ${activeBookingTour.destination}, ${activeBookingTour.country}
Duration: ${activeBookingTour.duration}
Departure Date: ${date}

Primary Passenger: ${name}
Email: ${email}
Phone: ${phone}

Party Details:
- Adults: ${adults}
- Children: ${children}

Total Paid: ${formatPrice(total)}
Status: Confirmed & Guaranteed

Meeting Point: ${activeBookingTour.meetingPoint}
================================================
Thank you for booking with TravelTour!
For 24/7 assistance: 1.820.3345.33
================================================`;

    const blob = new Blob([ticketContent], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `Booking-Confirmation-${bookingRef}.txt`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-sm p-4 overflow-y-auto">
      <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full my-8 text-slate-800 relative overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="bg-slate-900 text-white p-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg overflow-hidden relative shrink-0">
              <Image
                src={activeBookingTour.heroImage}
                alt={activeBookingTour.title}
                fill
                className="object-cover"
              />
            </div>
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#f97150]">
                Quick Instant Booking
              </span>
              <h3 className="font-bold text-sm sm:text-base line-clamp-1">
                {activeBookingTour.title}
              </h3>
            </div>
          </div>
          <button
            onClick={closeBookingModal}
            className="text-slate-400 hover:text-white p-1 rounded-lg transition-colors cursor-pointer"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Step 1: Configuration */}
        {step === "configure" && (
          <div className="p-6 space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Date */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5 flex items-center gap-1.5">
                  <Calendar className="w-4 h-4 text-[#f97150]" />
                  <span>Departure Date</span>
                </label>
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-[#f97150]"
                />
              </div>

              {/* Destination badge */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5 flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-[#f97150]" />
                  <span>Destination</span>
                </label>
                <div className="px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-xs font-semibold text-slate-600">
                  {activeBookingTour.destination}, {activeBookingTour.country} ({activeBookingTour.duration})
                </div>
              </div>
            </div>

            {/* Guests */}
            <div className="border border-slate-100 rounded-xl p-4 bg-slate-50/60 space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
                <Users className="w-4 h-4 text-[#f97150]" />
                <span>Number of Travelers</span>
              </h4>

              <div className="flex items-center justify-between py-1">
                <div>
                  <span className="font-bold text-sm text-slate-800">Adults (12+ yrs)</span>
                  <span className="block text-xs text-slate-500">
                    {formatPrice(basePrice)} / person
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => setAdults(Math.max(1, adults - 1))}
                    className="w-8 h-8 rounded-full border border-slate-300 font-bold flex items-center justify-center hover:bg-slate-200 cursor-pointer"
                  >
                    -
                  </button>
                  <span className="font-bold text-sm w-4 text-center">{adults}</span>
                  <button
                    type="button"
                    onClick={() => setAdults(adults + 1)}
                    className="w-8 h-8 rounded-full border border-slate-300 font-bold flex items-center justify-center hover:bg-slate-200 cursor-pointer"
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between py-1 border-t border-slate-200">
                <div>
                  <span className="font-bold text-sm text-slate-800">Children (2-11 yrs)</span>
                  <span className="block text-xs text-slate-500">
                    {formatPrice(childPrice)} / child (35% OFF)
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => setChildren(Math.max(0, children - 1))}
                    className="w-8 h-8 rounded-full border border-slate-300 font-bold flex items-center justify-center hover:bg-slate-200 cursor-pointer"
                  >
                    -
                  </button>
                  <span className="font-bold text-sm w-4 text-center">{children}</span>
                  <button
                    type="button"
                    onClick={() => setChildren(children + 1)}
                    className="w-8 h-8 rounded-full border border-slate-300 font-bold flex items-center justify-center hover:bg-slate-200 cursor-pointer"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>

            {/* Optional Addons */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                Popular Optional Extras
              </h4>
              <div className="space-y-2">
                <label className="flex items-center justify-between p-3 rounded-lg border border-slate-200 hover:border-[#f97150] transition-colors cursor-pointer bg-white">
                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={airportTransfer}
                      onChange={(e) => setAirportTransfer(e.target.checked)}
                      className="rounded text-[#f97150] focus:ring-[#f97150]"
                    />
                    <span className="text-xs font-semibold text-slate-700">
                      VIP Private Airport Chauffeur Transfer
                    </span>
                  </div>
                  <span className="text-xs font-bold text-slate-900">+$45</span>
                </label>

                <label className="flex items-center justify-between p-3 rounded-lg border border-slate-200 hover:border-[#f97150] transition-colors cursor-pointer bg-white">
                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={insurance}
                      onChange={(e) => setInsurance(e.target.checked)}
                      className="rounded text-[#f97150] focus:ring-[#f97150]"
                    />
                    <span className="text-xs font-semibold text-slate-700">
                      Comprehensive Medical & Baggage Insurance
                    </span>
                  </div>
                  <span className="text-xs font-bold text-slate-900">+$35</span>
                </label>

                <label className="flex items-center justify-between p-3 rounded-lg border border-slate-200 hover:border-[#f97150] transition-colors cursor-pointer bg-white">
                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={privateGuide}
                      onChange={(e) => setPrivateGuide(e.target.checked)}
                      className="rounded text-[#f97150] focus:ring-[#f97150]"
                    />
                    <span className="text-xs font-semibold text-slate-700">
                      Dedicated Private English Guide (All Days)
                    </span>
                  </div>
                  <span className="text-xs font-bold text-slate-900">+$120</span>
                </label>
              </div>
            </div>

            {/* Price Breakdown */}
            <div className="bg-orange-50/60 p-4 rounded-xl border border-orange-100 flex items-center justify-between">
              <div>
                <span className="text-xs text-slate-500 font-medium">Estimated Total (incl. 5% Tax):</span>
                <div className="text-2xl font-black text-[#f97150]">
                  {formatPrice(total)}
                </div>
              </div>
              <button
                type="button"
                onClick={() => setStep("details")}
                className="bg-[#f97150] hover:bg-[#e85e34] text-white px-6 py-3 rounded-xl font-bold text-xs uppercase tracking-wider shadow-lg shadow-orange-500/25 transition-all cursor-pointer"
              >
                Proceed to Details &rarr;
              </button>
            </div>
          </div>
        )}

        {/* Step 2: Passenger Details */}
        {step === "details" && (
          <form onSubmit={handleConfirmBooking} className="p-6 space-y-4">
            <h4 className="font-bold text-base text-slate-900 mb-2">
              Lead Passenger Information
            </h4>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Full Legal Name *
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. John Doe"
                className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-xs font-medium focus:outline-none focus:ring-2 focus:ring-[#f97150]"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="john@example.com"
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-xs font-medium focus:outline-none focus:ring-2 focus:ring-[#f97150]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Phone / WhatsApp *
                </label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+1 (555) 000-0000"
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-xs font-medium focus:outline-none focus:ring-2 focus:ring-[#f97150]"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Special Requests or Dietary Requirements (Optional)
              </label>
              <textarea
                rows={2}
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Vegetarian meals, wheelchair assistance, twin beds..."
                className="w-full px-3.5 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs font-medium focus:outline-none focus:ring-2 focus:ring-[#f97150]"
              ></textarea>
            </div>

            <div className="pt-2 flex items-center justify-between border-t border-slate-100 mt-4">
              <button
                type="button"
                onClick={() => setStep("configure")}
                className="text-slate-500 hover:text-slate-800 text-xs font-bold cursor-pointer"
              >
                &larr; Back
              </button>

              <div className="flex items-center gap-3">
                <span className="text-sm font-black text-slate-800">
                  Total: {formatPrice(total)}
                </span>
                <button
                  type="submit"
                  className="bg-[#f97150] hover:bg-[#e85e34] text-white px-6 py-3 rounded-xl font-bold text-xs uppercase tracking-wider shadow-lg shadow-orange-500/25 transition-all cursor-pointer flex items-center gap-2"
                >
                  <ShieldCheck className="w-4 h-4" />
                  <span>Confirm & Book</span>
                </button>
              </div>
            </div>
          </form>
        )}

        {/* Step 3: Confirmation Ticket */}
        {step === "confirmed" && (
          <div className="p-8 text-center space-y-5 animate-in fade-in zoom-in-95 duration-200">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-md">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div>
              <span className="text-xs font-bold text-emerald-600 uppercase tracking-widest flex items-center justify-center gap-1">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Booking Confirmed & Guaranteed</span>
              </span>
              <h3 className="text-2xl font-black text-slate-900 mt-1">
                You&apos;re Going on an Adventure!
              </h3>
              <p className="text-xs text-slate-500 mt-1 max-w-md mx-auto">
                A confirmation voucher and receipt have been dispatched to{" "}
                <strong className="text-slate-700">{email}</strong>.
              </p>
            </div>

            <div className="bg-slate-50 border border-dashed border-slate-300 rounded-xl p-5 text-left text-xs max-w-md mx-auto space-y-2">
              <div className="flex justify-between">
                <span className="text-slate-500">Booking Reference:</span>
                <strong className="text-slate-800 font-mono text-sm">{bookingRef}</strong>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Departure Date:</span>
                <strong className="text-slate-800">{date}</strong>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Travelers:</span>
                <strong className="text-slate-800">
                  {adults} Adults {children > 0 ? `, ${children} Children` : ""}
                </strong>
              </div>
              <div className="flex justify-between border-t border-slate-200 pt-2">
                <span className="text-slate-700 font-bold">Total Paid:</span>
                <strong className="text-[#f97150] font-black text-base">
                  {formatPrice(total)}
                </strong>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
              <button
                type="button"
                onClick={handleDownloadTicket}
                className="bg-slate-900 hover:bg-slate-800 text-white px-5 py-3 rounded-xl font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer shadow-md"
              >
                <Download className="w-4 h-4 text-[#f97150]" />
                <span>Download Voucher (.txt)</span>
              </button>
              <button
                type="button"
                onClick={closeBookingModal}
                className="bg-[#f97150] hover:bg-[#e85e34] text-white px-5 py-3 rounded-xl font-bold text-xs uppercase tracking-wider cursor-pointer"
              >
                Close & Return
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
