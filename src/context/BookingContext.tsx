"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { Tour } from "@/data/tours";

export type Currency = "USD" | "EUR" | "GBP" | "INR";

interface CurrencyRate {
  symbol: string;
  rate: number;
}

const CURRENCIES: Record<Currency, CurrencyRate> = {
  USD: { symbol: "$", rate: 1 },
  EUR: { symbol: "€", rate: 0.92 },
  GBP: { symbol: "£", rate: 0.79 },
  INR: { symbol: "₹", rate: 86.5 },
};

export interface BookingRecord {
  id: string;
  tourId: string;
  tourTitle: string;
  tourImage: string;
  date: string;
  adults: number;
  children: number;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  addons: string[];
  totalPrice: number;
  currency: Currency;
  createdAt: string;
  status: "Confirmed" | "Pending";
}

interface BookingContextType {
  currency: Currency;
  setCurrency: (c: Currency) => void;
  formatPrice: (amountInUSD: number) => string;
  wishlist: string[];
  toggleWishlist: (tourId: string) => void;
  isWishlisted: (tourId: string) => boolean;
  activeBookingTour: Tour | null;
  openBookingModal: (tour: Tour) => void;
  closeBookingModal: () => void;
  bookings: BookingRecord[];
  addBooking: (booking: Omit<BookingRecord, "id" | "createdAt" | "status">) => BookingRecord;
}

const BookingContext = createContext<BookingContextType | undefined>(undefined);

export function BookingProvider({ children }: { children: React.ReactNode }) {
  const [currency, setCurrency] = useState<Currency>("USD");
  const [wishlist, setWishlist] = useState<string[]>([]);
  const [activeBookingTour, setActiveBookingTour] = useState<Tour | null>(null);
  const [bookings, setBookings] = useState<BookingRecord[]>([]);

  useEffect(() => {
    try {
      const savedWishlist = localStorage.getItem("travel_tour_wishlist");
      if (savedWishlist) setWishlist(JSON.parse(savedWishlist));

      const savedBookings = localStorage.getItem("travel_tour_bookings");
      if (savedBookings) setBookings(JSON.parse(savedBookings));
    } catch {
      // localStorage may fail in private browsing
    }
  }, []);

  const toggleWishlist = (tourId: string) => {
    setWishlist((prev) => {
      const updated = prev.includes(tourId)
        ? prev.filter((id) => id !== tourId)
        : [...prev, tourId];
      try {
        localStorage.setItem("travel_tour_wishlist", JSON.stringify(updated));
      } catch {
        // ignore
      }
      return updated;
    });
  };

  const isWishlisted = (tourId: string) => wishlist.includes(tourId);

  const formatPrice = (amountInUSD: number) => {
    const cur = CURRENCIES[currency];
    const converted = Math.round(amountInUSD * cur.rate);
    return `${cur.symbol}${converted.toLocaleString()}`;
  };

  const openBookingModal = (tour: Tour) => {
    setActiveBookingTour(tour);
  };

  const closeBookingModal = () => {
    setActiveBookingTour(null);
  };

  const addBooking = (bookingData: Omit<BookingRecord, "id" | "createdAt" | "status">) => {
    const newRecord: BookingRecord = {
      ...bookingData,
      id: "BK-" + Math.floor(100000 + Math.random() * 900000),
      createdAt: new Date().toISOString(),
      status: "Confirmed",
    };
    const updated = [newRecord, ...bookings];
    setBookings(updated);
    try {
      localStorage.setItem("travel_tour_bookings", JSON.stringify(updated));
    } catch {
      // ignore
    }
    return newRecord;
  };

  return (
    <BookingContext.Provider
      value={{
        currency,
        setCurrency,
        formatPrice,
        wishlist,
        toggleWishlist,
        isWishlisted,
        activeBookingTour,
        openBookingModal,
        closeBookingModal,
        bookings,
        addBooking,
      }}
    >
      {children}
    </BookingContext.Provider>
  );
}

export function useBooking() {
  const context = useContext(BookingContext);
  if (!context) {
    throw new Error("useBooking must be used within a BookingProvider");
  }
  return context;
}
