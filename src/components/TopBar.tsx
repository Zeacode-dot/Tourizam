"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone, Mail, Heart, User, Lock, Globe, MessageCircle } from "lucide-react";
import { useBooking, Currency } from "@/context/BookingContext";

export default function TopBar() {
  const { currency, setCurrency, wishlist } = useBooking();
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [authMode, setAuthMode] = useState<"login" | "signup">("login");
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <>
      <div className={`text-[#9ca3af] text-xs transition-colors ${isHome ? "bg-slate-950/40 border-b border-white/5 backdrop-blur-sm" : "bg-[#142334] border-b border-slate-800"}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5 flex flex-wrap items-center justify-between gap-3">
          {/* Left Info: Phone, WhatsApp & Email */}
          <div className="flex items-center gap-5 sm:gap-6">
            <a
              href="tel:+919444119518"
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#f97150]" />
              <span className="font-medium">+91 94441 19518</span>
            </a>
            <a
              href="https://wa.me/919988467863?text=Hi%20Trip%20Makers%20Tourizms!"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex items-center gap-1.5 hover:text-emerald-400 transition-colors text-slate-300"
            >
              <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
              <span>WhatsApp: +91 98846 78631</span>
            </a>
            <a
              href="mailto:info@tripmakerstourizms.in"
              className="hidden sm:flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-[#f97150]" />
              <span>info@tripmakerstourizms.in</span>
            </a>
          </div>

          {/* Right Info: Currency, Wishlist, Socials, Login */}
          <div className="flex items-center gap-4 sm:gap-5">
            {/* Currency Selector */}
            <div className="flex items-center gap-1.5 bg-[#1b2d42] px-2.5 py-1 rounded text-slate-300">
              <Globe className="w-3 h-3 text-[#f97150]" />
              <select
                value={currency}
                onChange={(e) => setCurrency(e.target.value as Currency)}
                className="bg-transparent text-xs font-semibold focus:outline-none cursor-pointer text-slate-200"
              >
                <option value="INR" className="bg-[#142334]">INR (₹)</option>
                <option value="USD" className="bg-[#142334]">USD ($)</option>
                <option value="EUR" className="bg-[#142334]">EUR (€)</option>
                <option value="GBP" className="bg-[#142334]">GBP (£)</option>
              </select>
            </div>

            {/* Wishlist Link */}
            <Link
              href="/packages?filter=wishlist"
              className="flex items-center gap-1.5 hover:text-white transition-colors relative"
            >
              <Heart className="w-3.5 h-3.5 text-[#f97150]" />
              <span className="hidden sm:inline">Wishlist</span>
              {wishlist.length > 0 && (
                <span className="bg-[#f97150] text-white rounded-full text-[10px] w-4 h-4 flex items-center justify-center font-bold">
                  {wishlist.length}
                </span>
              )}
            </Link>

            <span className="text-slate-700">|</span>

            {/* Auth Buttons */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => {
                  setAuthMode("login");
                  setShowAuthModal(true);
                }}
                className="flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer"
              >
                <Lock className="w-3 h-3 text-[#f97150]" />
                <span>Login</span>
              </button>
              <button
                onClick={() => {
                  setAuthMode("signup");
                  setShowAuthModal(true);
                }}
                className="flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer"
              >
                <User className="w-3 h-3 text-[#f97150]" />
                <span>Sign Up</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Auth Modal */}
      {showAuthModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
          <div className="bg-white rounded-xl shadow-2xl max-w-md w-full p-6 text-slate-800 relative animate-in fade-in zoom-in-95 duration-200">
            <button
              onClick={() => setShowAuthModal(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 text-xl font-bold cursor-pointer"
            >
              &times;
            </button>
            <div className="text-center mb-6">
              <span className="inline-block p-3 bg-orange-100 rounded-full text-[#f97150] mb-2">
                <User className="w-6 h-6" />
              </span>
              <h3 className="text-2xl font-bold text-slate-900">
                {authMode === "login" ? "Welcome Back" : "Create Account"}
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Access your bookings, saved trips, and special discounts
              </p>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert(authMode === "login" ? "Successfully logged in!" : "Account created successfully!");
                setShowAuthModal(false);
              }}
              className="space-y-4 text-sm"
            >
              {authMode === "signup" && (
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Ramesh Kumar"
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#f97150]"
                  />
                </div>
              )}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  placeholder="ramesh@example.com"
                  className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#f97150]"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Password
                </label>
                <input
                  type="password"
                  required
                  placeholder="••••••••"
                  className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#f97150]"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#f97150] hover:bg-[#e85e34] text-white py-3 rounded-lg font-bold shadow-lg shadow-orange-500/20 transition-all cursor-pointer"
              >
                {authMode === "login" ? "Sign In to Account" : "Register Now"}
              </button>
            </form>

            <div className="mt-5 text-center text-xs text-slate-500">
              {authMode === "login" ? (
                <span>
                  Don&apos;t have an account?{" "}
                  <button
                    onClick={() => setAuthMode("signup")}
                    className="text-[#f97150] font-bold hover:underline cursor-pointer"
                  >
                    Sign up here
                  </button>
                </span>
              ) : (
                <span>
                  Already registered?{" "}
                  <button
                    onClick={() => setAuthMode("login")}
                    className="text-[#f97150] font-bold hover:underline cursor-pointer"
                  >
                    Sign in here
                  </button>
                </span>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
