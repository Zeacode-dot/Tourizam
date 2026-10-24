"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Compass, Phone, Mail, MapPin, Send, Check, MessageCircle, Clock } from "lucide-react";
import { DESTINATIONS } from "@/data/destinations";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  return (
    <footer className="bg-[#142334] text-slate-300 text-sm border-t border-slate-800">
      {/* Upper Main Footer Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Column 1: About Trip Makers Tourizms */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2.5 group">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#1e354c] to-[#f97150] flex items-center justify-center text-white shadow-md">
                <Image src="/images/logo.png" alt="Trip Makers Tourizms" width={20} height={20} className="object-contain" />
              </div>
              <div>
                <span className="text-lg font-black text-white uppercase tracking-tight">
                  Trip Makers <span className="text-[#f97150]">Tourizms</span>
                </span>
                <span className="block text-[8px] uppercase tracking-wider text-slate-400 font-semibold">
                  Chennai Head Office
                </span>
              </div>
            </Link>
            <p className="text-xs text-slate-400 leading-relaxed">
              With over 10+ years of travel industry leadership, Trip Makers Tourizms is Chennai&apos;s premier specialist for customized international & domestic holidays, fast visa processing, flight bookings, and boutique stays.
            </p>
            <div className="space-y-2.5 pt-2 text-xs">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#f97150] shrink-0 mt-0.5" />
                <span>No. 22/542, 24th Street, G.K.M Colony, Chennai – 600082, Tamil Nadu, India</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#f97150] shrink-0" />
                <a href="tel:+919444119518" className="hover:text-white transition-colors">
                  +91 94441 19518 / +91 98846 78631
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <a
                  href="https://wa.me/919988467863"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  WhatsApp: +91 98846 78631
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#f97150] shrink-0" />
                <a href="mailto:info@tripmakerstourizms.in" className="hover:text-white transition-colors">
                  info@tripmakerstourizms.in
                </a>
              </div>
              <div className="flex items-center gap-2.5 text-slate-400">
                <Clock className="w-4 h-4 text-[#f97150] shrink-0" />
                <span>Mon - Sat: 9:30 AM - 8:00 PM</span>
              </div>
            </div>
          </div>

          {/* Column 2: Popular Tour Destinations */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-5 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#f97150]"></span>
              Popular Destinations
            </h4>
            <ul className="space-y-2.5 text-xs">
              {DESTINATIONS.slice(0, 7).map((dest) => (
                <li key={dest.id}>
                  <Link
                    href={`/packages?destination=${encodeURIComponent(dest.name)}`}
                    className="hover:text-[#f97150] transition-colors flex items-center justify-between group"
                  >
                    <span className="group-hover:translate-x-1 transition-transform">
                      {dest.name}
                    </span>
                    <span className="text-[10px] bg-slate-800 text-slate-400 px-2 py-0.5 rounded-full">
                      from ₹{dest.startingPrice.toLocaleString("en-IN")}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Core Travel Services */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-5 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#f97150]"></span>
              Our Core Services
            </h4>
            <ul className="space-y-2.5 text-xs">
              {[
                "Visa Assistance & Processing",
                "Domestic & International Flights",
                "Hotel & Luxury Resort Booking",
                "Customized Holiday Packages",
                "Honeymoon Tour Specials",
                "Group & Corporate Travel",
                "24×7 Local Customer Support",
                "Airport Chauffeur Transfers"
              ].map((service, idx) => (
                <li key={idx}>
                  <Link
                    href="/#services"
                    className="hover:text-[#f97150] transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#f97150]/60"></span>
                    <span className="group-hover:translate-x-1 transition-transform">
                      {service}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Location Map & Newsletter */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#f97150]"></span>
              Visit Our Chennai Office
            </h4>
            
            {/* Embedded Google Map */}
            <div className="w-full h-36 rounded-xl overflow-hidden border border-slate-700 mb-4 bg-slate-800 relative">
              <iframe
                title="Trip Makers Tourizms Chennai Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3885.670564619379!2d80.20790757578051!3d13.11943801160352!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.0!3m3!1m2!1s0x3a526442657e7eb1%3A0x6b17c244ad06cf72!2sGKM%20Colony%2C%20Perambur%2C%20Chennai%2C%20Tamil%20Nadu%20600082!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            <p className="text-[11px] text-slate-400 mb-2">
              Receive exclusive festive discount vouchers & secret itineraries:
            </p>
            <form onSubmit={handleSubscribe} className="space-y-2">
              <div className="relative">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your Email Address..."
                  className="w-full px-3 py-2 bg-slate-800/80 border border-slate-700 rounded-lg text-xs text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#f97150]"
                />
                <button
                  type="submit"
                  aria-label="Subscribe"
                  className="absolute right-1 top-1 bottom-1 px-3 bg-[#f97150] hover:bg-[#e85e34] text-white rounded-md text-xs font-bold transition-all flex items-center justify-center cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>
              {subscribed && (
                <p className="text-[11px] text-emerald-400 font-semibold flex items-center gap-1 animate-in fade-in">
                  <Check className="w-3 h-3" /> Thank you for subscribing!
                </p>
              )}
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Bar: Copyright & Legal */}
      <div className="border-t border-slate-800/80 bg-[#0e1925] text-xs text-slate-500 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p>
            &copy; {new Date().getFullYear()} Trip Makers Tourizms (Chennai). All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/contact" className="hover:text-slate-300 transition-colors">
              Chennai Office
            </Link>
            <Link href="/contact" className="hover:text-slate-300 transition-colors">
              Terms & Conditions
            </Link>
            <Link href="/contact" className="hover:text-slate-300 transition-colors">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
