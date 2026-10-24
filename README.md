# Travel Tour - Full Next.js Travel & Tour Booking Application

Inspired by the **Goodlayers Travel Tour (Main 4)** premium template, recreated from scratch with modern **Next.js (App Router)**, **TypeScript**, and **Tailwind CSS**.

---

## 🌟 Key Features

1. **Homepage (Main 4 Style)**
   - TopBar with direct contact (`1.820.3345.33`), email, social links, currency selector (`USD`, `EUR`, `GBP`, `INR`), and Wishlist counter.
   - Sticky Header with navigation dropdowns, search trigger modal, and "Book A Tour" CTA.
   - Cinematic Hero Banner with verified stats ("1,200+ Handpicked Tours", "150+ Destinations", "98% Satisfaction").
   - Multi-field Booking Search Bar (Keyword, Destination, Activity Category, Duration, Date).
   - Popular Tours grid with ribbons ("Special Offer", "15% Off", "Best Seller"), ratings, duration, and dynamic pricing.
   - Summer Deals Promo Banner ("Up to 40% Discount!").
   - Our Recommended Tours section.
   - Traveling Highlights Video Section with modal video player popup.
   - 4-Column Why Choose Us guarantee (Best Price, Safe & Trustworthy, Handpicked Itineraries, 24/7 Concierge).
   - Real Customer Reviews / Testimonials with star ratings and traveler types.
   - Browse Tour By Category + Newsletter Box.
   - Recent Travel Articles blog grid.
   - Media partner press logos (National Geographic, Lonely Planet, Forbes Travel, etc.).

2. **Dynamic Tour Details Page (`/tour/[slug]`)**
   - High-resolution interactive photo gallery with full-screen lightbox preview.
   - Quick facts strip (Duration, Group Size, Languages, Cancellation Policy).
   - Rich overview and key highlights checklist.
   - Interactive Day-by-Day Itinerary Accordion with meals and hotel tags.
   - What's Included vs. Excluded checklist.
   - Meeting point & cancellation policies.
   - Frequently Asked Questions (FAQ) Accordion.
   - Verified Guest Reviews with rating breakdown bars.
   - **Interactive Dynamic Booking Card**:
     - Live Departure Date selector
     - Adults & Children count selector with live subtotal calculation
     - Optional add-ons (Airport Transfer +$45, Medical Insurance +$35, Private Guide +$120)
     - Live currency formatting across USD, EUR, GBP, and INR
     - "Book This Tour Now" button triggering instant booking modal!

3. **Instant Booking Modal & Voucher System**
   - Step 1: Trip configuration (travelers, date, add-ons).
   - Step 2: Passenger details (Name, email, phone, special dietary requests).
   - Step 3: Instant confirmed booking with generated reference ID (`BK-XXXXXX`).
   - One-click official booking voucher download (`.txt` ticket receipt).
   - Storage in `localStorage` and viewable under `/booking-confirmation`.

4. **Tour Directory & Search (`/tours`)**
   - Live filters sidebar:
     - Keyword search
     - Destination region selector
     - Tour category / activity filter
     - Duration filter (1-3 days, 4-7 days, 8+ days)
     - Price budget slider ($100 - $5,000)
     - Star rating filter
     - "Only My Saved Tours" Wishlist filter
   - Live Sorting (Most Popular, Highest Rated, Price Low to High, Price High to Low, Longest Duration).

5. **Destinations Explorer (`/destinations`)**
   - Global regional showcase: Europe, North America, Africa, Asia, South America, Oceania.
   - Tour counts, starting prices, and click-through filtering.

6. **Blog & Travel Articles (`/blog` & `/blog/[slug]`)**
   - Full article reading with author info, read times, tags, interactive comments, and recommended trips.

7. **Contact Us (`/contact`)**
   - Global office details, phone, email, and interactive inquiry form.

---

## 🚀 How to Run the Project

### 1. Install Dependencies
```bash
npm install
```

### 2. Run the Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Production Build
```bash
npm run build
npm run start
```

---

## 📁 Project Structure

```
d:\Murali_bro\
├── src/
│   ├── app/
│   │   ├── layout.tsx             # Root layout with TopBar, Navbar, Footer & BookingModal
│   │   ├── page.tsx               # Homepage (Travel Tour Main 4 clone)
│   │   ├── globals.css            # Custom CSS and Tailwind utilities
│   │   ├── tours/page.tsx         # Tour directory & search page with live sidebar filters
│   │   ├── tour/[slug]/page.tsx   # Dynamic tour details & booking page
│   │   ├── destinations/page.tsx  # World destinations page
│   │   ├── blog/page.tsx          # Travel blog listing
│   │   ├── blog/[slug]/page.tsx   # Single blog article reader
│   │   ├── contact/page.tsx       # Contact us page
│   │   └── booking-confirmation/page.tsx # My Bookings & voucher manager
│   ├── components/
│   │   ├── TopBar.tsx             # Top header bar with currency & auth
│   │   ├── Navbar.tsx             # Main sticky navigation with search modal
│   │   ├── TourCard.tsx           # Reusable tour card with ribbon & wishlist
│   │   ├── HeroSearch.tsx         # Multi-field booking search bar
│   │   ├── BookingModal.tsx       # Complete dynamic booking engine & receipt generator
│   │   ├── VideoModal.tsx         # Traveling highlights video popup modal
│   │   └── Footer.tsx             # 4-column Goodlayers footer
│   ├── context/
│   │   └── BookingContext.tsx     # Global currency converter, wishlist & bookings state
│   └── data/
│       ├── tours.ts               # Complete tour packages dataset
│       ├── destinations.ts        # Destination regions dataset
│       └── blogs.ts               # Travel stories & articles dataset
├── package.json
├── tsconfig.json
└── next.config.ts
```
