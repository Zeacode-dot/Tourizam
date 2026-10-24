"use client";

import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import {
  X,
  Send,
  Phone,
  Calendar,
  Users,
  MapPin,
  CheckCircle2,
  Sparkles,
  Percent,
  Clock,
  ShieldCheck,
  MessageCircle
} from "lucide-react";

export default function LeadPopup() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Form State
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [destination, setDestination] = useState("Malaysia");
  const [travelDate, setTravelDate] = useState("");
  const [travellers, setTravellers] = useState("2 Adults");
  const [notes, setNotes] = useState("");

  useEffect(() => {
    // Check if the current page is landing page or packages/tours page
    const shouldShowOnPage =
      pathname === "/" ||
      pathname === "/packages" ||
      pathname === "/tours";

    if (shouldShowOnPage) {
      // Show popup after 800ms
      const timer = setTimeout(() => {
        // Check if user has dismissed it in this session
        const dismissed = sessionStorage.getItem("trip_lead_popup_dismissed");
        if (!dismissed) {
          setIsOpen(true);
        }
      }, 800);

      return () => clearTimeout(timer);
    }
  }, [pathname]);

  // Listen for custom trigger event to open modal from any button on the site
  useEffect(() => {
    const handleOpenModal = (e: Event) => {
      const customEvent = e as CustomEvent;
      if (customEvent.detail?.destination) {
        setDestination(customEvent.detail.destination);
      }
      setSubmitted(false);
      setIsOpen(true);
    };

    window.addEventListener("open-lead-popup", handleOpenModal);
    return () => window.removeEventListener("open-lead-popup", handleOpenModal);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    sessionStorage.setItem("trip_lead_popup_dismissed", "true");
  };

  const handleSubmit = (e: React.FormEvent, viaWhatsApp = false) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) {
      alert("Please enter your name and phone number.");
      return;
    }

    const message = `Hello Trip Makers Tourizms! 👋\nI would like to get a quote for a holiday package.\n\n*Name:* ${name}\n*Phone:* ${phone}\n*Destination:* ${destination}\n*Date:* ${travelDate || "Flexible"}\n*Travellers:* ${travellers}\n*Special Request:* ${notes || "None"}\n\nPlease share the best itinerary and offer details.`;

    if (viaWhatsApp) {
      const encoded = encodeURIComponent(message);
      window.open(`https://wa.me/919988467863?text=${encoded}`, "_blank");
    }

    setSubmitted(true);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-sm p-4 overflow-y-auto animate-in fade-in duration-200">
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-lg w-full overflow-hidden my-6 border border-orange-100">
        {/* Close Button */}
        <button
          onClick={handleClose}
          aria-label="Close modal"
          className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-slate-900/60 hover:bg-slate-900 text-white flex items-center justify-center transition-all cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Modal Header */}
        <div className="relative bg-gradient-to-br from-[#1e354c] via-[#142334] to-[#f97150] text-white p-6 sm:p-7 overflow-hidden">
          {/* Decorative background glow */}
          <div className="absolute -top-12 -right-12 w-40 h-40 bg-[#f97150]/30 rounded-full blur-2xl"></div>

          <div className="relative z-10 space-y-2">
            <div className="inline-flex items-center gap-1.5 bg-[#f97150] text-white px-3 py-1 rounded-full text-[11px] font-extrabold uppercase tracking-wider shadow-sm">
              <Sparkles className="w-3 h-3" />
              <span>Special Holiday Offer</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-black tracking-tight leading-tight">
              Plan Your Dream Vacation!
            </h3>

            <p className="text-xs sm:text-sm text-slate-200 max-w-sm leading-relaxed">
              Get <strong className="text-white font-bold underline decoration-[#f97150]">up to 30% OFF</strong> + Free Airport Transfers with <span className="text-[#f97150] font-bold">Trip Makers Tourizms Chennai</span>.
            </p>

            <div className="pt-2 flex items-center gap-4 text-[11px] text-slate-300 font-medium">
              <span className="flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#f97150]" /> 10+ Years Trust
              </span>
              <span className="flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#f97150]" /> Instant WhatsApp Quote
              </span>
              <span className="flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#f97150]" /> 100% Customized
              </span>
            </div>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-7">
          {submitted ? (
            <div className="text-center py-6 space-y-4 animate-in fade-in zoom-in-95">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-md">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="text-2xl font-black text-slate-900">
                Enquiry Received!
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 max-w-sm mx-auto leading-relaxed">
                Thank you <strong className="text-slate-800">{name}</strong>! Our Chennai travel consultant will reach out via WhatsApp / Call at <strong className="text-slate-800">{phone}</strong> within 15 minutes with customized quotes.
              </p>
              <div className="pt-3 flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href={`https://wa.me/919988467863?text=${encodeURIComponent(
                    `Hi Trip Makers Tourizms, I just submitted an enquiry for ${destination}. Please share package details!`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-md transition-all"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Chat on WhatsApp Now</span>
                </a>
                <button
                  type="button"
                  onClick={handleClose}
                  className="bg-slate-100 hover:bg-slate-200 text-slate-700 px-5 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={(e) => handleSubmit(e, false)} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {/* Name */}
                <div>
                  <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Ramesh Kumar"
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-xs font-medium text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#f97150]"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Phone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="e.g. +91 98846 78631"
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-xs font-medium text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#f97150]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {/* Destination */}
                <div>
                  <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Destination *
                  </label>
                  <select
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-xs font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#f97150] cursor-pointer"
                  >
                    <option value="Malaysia">Malaysia (5D / 4N)</option>
                    <option value="Dubai">Dubai (6D / 5N)</option>
                    <option value="Thailand">Thailand (6D / 5N)</option>
                    <option value="Sri Lanka">Sri Lanka (7D / 6N)</option>
                    <option value="Vietnam">Vietnam (6D / 5N)</option>
                    <option value="Andaman">Andaman Islands (6D / 5N)</option>
                    <option value="Lakshadweep">Lakshadweep (6D / 5N)</option>
                    <option value="Europe">Grand Europe (10D / 9N)</option>
                    <option value="Singapore">Singapore (5D / 4N)</option>
                    <option value="Custom / Other">Other / Tailor-made</option>
                  </select>
                </div>

                {/* Travel Date */}
                <div>
                  <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Tentative Travel Date
                  </label>
                  <input
                    type="date"
                    value={travelDate}
                    onChange={(e) => setTravelDate(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-xs font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#f97150]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {/* Number of travellers */}
                <div>
                  <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Travellers
                  </label>
                  <select
                    value={travellers}
                    onChange={(e) => setTravellers(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-xs font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#f97150] cursor-pointer"
                  >
                    <option value="1 Solo Traveller">1 Solo Traveller</option>
                    <option value="2 Adults (Couple / Friends)">2 Adults (Couple / Friends)</option>
                    <option value="Family (2 Adults + 1 Child)">Family (2 Adults + 1 Child)</option>
                    <option value="Family (2 Adults + 2 Children)">Family (2 Adults + 2 Children)</option>
                    <option value="Group (4+ Travellers)">Group (4+ Travellers)</option>
                  </select>
                </div>

                {/* Notes */}
                <div>
                  <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Notes / Requirements
                  </label>
                  <input
                    type="text"
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="e.g. Honeymoon, 4-Star hotels"
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-xs font-medium text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#f97150]"
                  />
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 space-y-2.5">
                <button
                  type="button"
                  onClick={(e) => handleSubmit(e, true)}
                  className="w-full py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-extrabold uppercase tracking-wider shadow-lg shadow-emerald-600/25 flex items-center justify-center gap-2 transition-all cursor-pointer hover:scale-[1.01] active:scale-[0.99]"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Get Instant Quote on WhatsApp</span>
                </button>

                <button
                  type="submit"
                  className="w-full py-3 bg-[#f97150] hover:bg-[#e85e34] text-white rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer shadow-md"
                >
                  Submit Quote Request
                </button>
              </div>

              {/* Call Hotline */}
              <div className="pt-2 text-center border-t border-slate-100 flex items-center justify-center gap-2 text-xs text-slate-500">
                <span>Prefer to talk? Call directly:</span>
                <a
                  href="tel:+919444119518"
                  className="font-bold text-slate-900 hover:text-[#f97150] flex items-center gap-1 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-[#f97150]" />
                  <span>+91 94441 19518</span>
                </a>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
