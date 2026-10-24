"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Search, Menu, X, Compass, ChevronDown, Phone, MessageCircle } from "lucide-react";
import Image from "next/image";
import { CATEGORIES } from "@/data/tours";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchModalOpen, setSearchModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      setSearchModalOpen(false);
      router.push(`/packages?query=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  const openQuoteModal = () => {
    window.dispatchEvent(new CustomEvent("open-lead-popup"));
  };

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Tour Packages", href: "/packages" },
    { label: "Destinations", href: "/destinations" },
    { label: "Services", href: "/#services" },
    { label: "About Us", href: "/#about" },
    { label: "Categories", href: "#", hasDropdown: true },
    { label: "Contact", href: "/contact" },
  ];

  const isHome = pathname === "/";

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          isScrolled
            ? "bg-slate-950/85 backdrop-blur-md shadow-xl py-3 text-white border-b border-white/10"
            : isHome
            ? "bg-transparent py-4 text-white border-b border-white/10"
            : "bg-white py-4 text-slate-800 border-b border-slate-100 shadow-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div>
              <Image src="/images/logo.png" alt="Trip Makers Tourizms" width={100} height={40} className="object-contain" />
            </div>
            <div>
              <span className={`text-xl sm:text-2xl font-black tracking-tight uppercase ${isHome || isScrolled ? "text-white" : "text-slate-900"}`}>
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6 text-[14px] font-semibold">
            {navLinks.map((link) => {
              if (link.hasDropdown) {
                return (
                  <div
                    key={link.label}
                    className="relative"
                    onMouseEnter={() => setDropdownOpen(true)}
                    onMouseLeave={() => setDropdownOpen(false)}
                  >
                    <button
                      className={`flex items-center gap-1 transition-colors py-2 cursor-pointer ${
                        isHome || isScrolled
                          ? "text-slate-200 hover:text-white"
                          : "text-slate-700 hover:text-[#f97150]"
                      }`}
                    >
                      <span>{link.label}</span>
                      <ChevronDown className="w-3.5 h-3.5 opacity-70" />
                    </button>
                    {dropdownOpen && (
                      <div className="absolute top-full left-0 w-64 bg-slate-900/95 backdrop-blur-md rounded-xl shadow-2xl border border-white/10 py-3 text-sm z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                        {CATEGORIES.map((cat) => (
                          <Link
                            key={cat.slug}
                            href={`/packages?category=${encodeURIComponent(cat.name)}`}
                            className="block px-4 py-2 hover:bg-white/10 hover:text-[#f97150] text-slate-200 font-medium transition-colors"
                            onClick={() => setDropdownOpen(false)}
                          >
                            {cat.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`transition-colors py-2 relative ${
                    isActive
                      ? "text-[#f97150] font-bold"
                      : isHome || isScrolled
                      ? "text-slate-200 hover:text-white"
                      : "text-slate-700 hover:text-[#f97150]"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#f97150] rounded-full"></span>
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Actions: Search, Call & Quote Button */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setSearchModalOpen(true)}
              aria-label="Open Search"
              className={`w-9 h-9 rounded-full flex items-center justify-center transition-colors cursor-pointer ${
                isHome || isScrolled
                  ? "bg-white/10 hover:bg-white/20 text-white"
                  : "bg-slate-100 hover:bg-orange-50 hover:text-[#f97150] text-slate-600"
              }`}
            >
              <Search className="w-4 h-4" />
            </button>

            <button
              onClick={openQuoteModal}
              className="hidden sm:inline-flex items-center justify-center bg-[#f97150] hover:bg-[#e85e34] text-white px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-md shadow-orange-500/25 transition-all hover:scale-105 active:scale-95 cursor-pointer"
            >
              Plan Your Trip
            </button>

            {/* Mobile Menu Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle mobile menu"
              className={`lg:hidden p-2 focus:outline-none cursor-pointer ${
                isHome || isScrolled ? "text-white" : "text-slate-700 hover:text-[#f97150]"
              }`}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-slate-100 px-6 py-5 shadow-xl space-y-4 animate-in slide-in-from-top-4 duration-200">
            {navLinks.map((link) => (
              <div key={link.label}>
                <Link
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block py-2 text-base font-semibold ${
                    pathname === link.href ? "text-[#f97150]" : "text-slate-800"
                  }`}
                >
                  {link.label}
                </Link>
              </div>
            ))}
            <div className="pt-2 border-t border-slate-100 flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  openQuoteModal();
                }}
                className="w-full text-center bg-[#f97150] hover:bg-[#e85e34] text-white py-3 rounded-lg text-sm font-bold uppercase tracking-wider cursor-pointer"
              >
                Plan A Trip (Get Free Quote)
              </button>
              <a
                href="tel:+919444119518"
                className="w-full text-center bg-slate-900 text-white py-2.5 rounded-lg text-xs font-bold uppercase flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-[#f97150]" />
                <span>Call +91 94441 19518</span>
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Global Search Modal */}
      {searchModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-md flex items-start justify-center pt-24 px-4">
          <div className="bg-white w-full max-w-2xl rounded-2xl shadow-2xl p-6 relative animate-in fade-in zoom-in-95 duration-150">
            <button
              onClick={() => setSearchModalOpen(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-700 text-2xl font-bold cursor-pointer"
            >
              &times;
            </button>
            <h3 className="text-xl font-bold text-slate-900 mb-4">Search Tour Packages & Destinations</h3>
            <form onSubmit={handleSearchSubmit} className="relative">
              <input
                type="text"
                autoFocus
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="E.g. Malaysia, Dubai, Thailand, Sri Lanka, Andaman, Europe..."
                className="w-full pl-12 pr-28 py-4 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 font-medium placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#f97150]"
              />
              <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
              <button
                type="submit"
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#f97150] hover:bg-[#e85e34] text-white px-5 py-2.5 rounded-lg text-xs font-bold uppercase cursor-pointer"
              >
                Search
              </button>
            </form>
            <div className="mt-4 flex flex-wrap items-center gap-2 text-xs text-slate-500">
              <span className="font-semibold text-slate-700">Popular Searches:</span>
              {["Malaysia", "Dubai", "Thailand", "Sri Lanka", "Vietnam", "Andaman", "Lakshadweep", "Europe"].map((term) => (
                <button
                  key={term}
                  type="button"
                  onClick={() => {
                    setSearchQuery(term);
                    router.push(`/packages?query=${encodeURIComponent(term)}`);
                    setSearchModalOpen(false);
                  }}
                  className="bg-slate-100 hover:bg-orange-100 hover:text-[#f97150] px-2.5 py-1 rounded-full cursor-pointer transition-colors"
                >
                  {term}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
