import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { BookingProvider } from "@/context/BookingContext";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BookingModal from "@/components/BookingModal";
import LeadPopup from "@/components/LeadPopup";
import FloatingActions from "@/components/FloatingActions";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Trip Makers Tourizms - Best Tour Packages, Flight Booking & Visa Assistance",
  description: "Chennai's leading travel agency offering customized domestic & international tour packages, flight bookings, visa assistance, hotel reservations, and 24x7 customer support.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${poppins.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-[#fdfdfd] text-[#1c273c] font-sans">
        <BookingProvider>
          <TopBar />
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
          <BookingModal />
          <LeadPopup />
          <FloatingActions />
        </BookingProvider>
      </body>
    </html>
  );
}
