export interface ItineraryItem {
  day: number;
  title: string;
  description: string;
  meals?: string;
  hotel?: string;
}

export interface Review {
  id: string;
  author: string;
  avatar: string;
  rating: number;
  date: string;
  title: string;
  content: string;
  travelerType: string;
}

export interface Tour {
  id: string;
  slug: string;
  title: string;
  destination: string;
  country: string;
  region: 'Asia' | 'Europe' | 'Middle East' | 'Island & Domestic' | 'Africa' | 'North America';
  category: 'International' | 'Domestic' | 'Honeymoon' | 'Family Vacation' | 'Luxury & Island' | 'Adventure';
  duration: string;
  durationDays: number;
  durationNights: number;
  price: number;
  originalPrice?: number;
  discountBadge?: string;
  badgeColor?: string;
  rating: number;
  reviewsCount: number;
  heroImage: string;
  gallery: string[];
  overview: string;
  highlights: string[];
  itinerary: ItineraryItem[];
  included: string[];
  excluded: string[];
  faqs: { question: string; answer: string }[];
  meetingPoint: string;
  cancellationPolicy: string;
  maxGroupSize: number;
  languages: string[];
  featured?: boolean;
  recommended?: boolean;
  reviews: Review[];
}

export const TOURS: Tour[] = [
  {
    id: "pkg-malaysia",
    slug: "malaysia-tour-package-5-days-4-nights",
    title: "Malaysia Tour Package",
    destination: "Kuala Lumpur & Genting",
    country: "Malaysia",
    region: "Asia",
    category: "International",
    duration: "5 Days / 4 Nights",
    durationDays: 5,
    durationNights: 4,
    price: 34999,
    originalPrice: 42999,
    discountBadge: "Best Seller",
    badgeColor: "#f97150",
    rating: 4.9,
    reviewsCount: 184,
    heroImage: "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1541093113199-a2e9d94943f9?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1508873696983-2df5293cb395?auto=format&fit=crop&w=1200&q=80"
    ],
    overview: "Explore Malaysia's perfect blend of modern cities, tropical islands, lush rainforests, and cultural heritage. Marvel at the Petronas Twin Towers, ride the scenic Genting cable car, visit Batu Caves, and experience vibrant street culinary wonders.",
    highlights: [
      "Petronas Twin Towers observation deck & KLCC Park",
      "Batu Caves rainbow staircase & Murugan Temple",
      "Genting Highlands cable car ride & indoor theme park",
      "Putrajaya administrative city tour & Pink Mosque",
      "Bulan culinary tasting in Jalan Alor street food market"
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Kuala Lumpur & Night City Tour",
        description: "Arrive at KLIA airport. Meet and greet by our tour representative. Transfer to hotel. In the evening, enjoy Kuala Lumpur city orientation with photo stop at Petronas Towers.",
        meals: "Dinner",
        hotel: "Sunway Putra Hotel (4-Star)"
      },
      {
        day: 2,
        title: "Batu Caves & Genting Highlands Full Day",
        description: "Visit the iconic Batu Caves with its massive golden Lord Murugan statue. Ascend to Genting Highlands via the Awana SkyWay cable car with scenic mountain rainforest panoramas.",
        meals: "Breakfast, Lunch",
        hotel: "Sunway Putra Hotel"
      },
      {
        day: 3,
        title: "Putrajaya Tour & Kuala Lumpur Heritage Walk",
        description: "Explore Putrajaya, the federal administrative center. Visit Putra Mosque (Pink Mosque) and cruise on Putrajaya Lake. Afternoon shopping at Bukit Bintang.",
        meals: "Breakfast",
        hotel: "Sunway Putra Hotel"
      },
      {
        day: 4,
        title: "Sunway Lagoon Theme Park (Optional) or Melaka Heritage Day Trip",
        description: "Enjoy a day trip to the historic UNESCO World Heritage city of Melaka, including Jonker Street, Dutch Square, and St. Paul's Church.",
        meals: "Breakfast, Lunch",
        hotel: "Sunway Putra Hotel"
      },
      {
        day: 5,
        title: "Souvenir Shopping & Departure",
        description: "Breakfast at hotel. Free time for last-minute shopping at Central Market before transfer to KLIA for your return flight home.",
        meals: "Breakfast"
      }
    ],
    included: [
      "4 Nights accommodation in 4-Star hotel in Kuala Lumpur",
      "Daily international breakfast and 2 culinary dinners",
      "All airport transfers in private AC vehicle",
      "Awana SkyWay Genting cable car return tickets",
      "Batu Caves and Putrajaya city tours",
      "24/7 dedicated Tamil/English tour concierge"
    ],
    excluded: [
      "International flights (available on request)",
      "Malaysia Tourism Tax (MYR 10/room/night payable at hotel)",
      "Travel insurance and personal shopping"
    ],
    faqs: [
      {
        question: "Is Malaysia visa-free for Indian passport holders?",
        answer: "Yes, currently Indian tourists enjoy 30-day visa-free entry to Malaysia. Our team assists with MDAC arrival card submission."
      }
    ],
    meetingPoint: "Kuala Lumpur International Airport (KLIA/KLIA2)",
    cancellationPolicy: "Free cancellation up to 15 days before departure.",
    maxGroupSize: 20,
    languages: ["Tamil", "English", "Malay", "Hindi"],
    featured: true,
    recommended: true,
    reviews: [
      {
        id: "rev-my-1",
        author: "Karthik Raja (Chennai)",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
        rating: 5,
        date: "January 2026",
        title: "Awesome trip organized by Trip Makers!",
        content: "We traveled from Chennai with family. Driver was very punctual, Genting cable car was amazing, and Indian meals were arranged properly. Super recommended!",
        travelerType: "Family Vacation"
      }
    ]
  },
  {
    id: "pkg-dubai",
    slug: "dubai-tour-package-6-days-5-nights",
    title: "Dubai Tour Package",
    destination: "Dubai & Abu Dhabi",
    country: "United Arab Emirates",
    region: "Middle East",
    category: "Luxury & Island",
    duration: "6 Days / 5 Nights",
    durationDays: 6,
    durationNights: 5,
    price: 49999,
    originalPrice: 58000,
    discountBadge: "Special Offer",
    badgeColor: "#f97150",
    rating: 5.0,
    reviewsCount: 240,
    heroImage: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1546412414-e1885259563a?auto=format&fit=crop&w=1200&q=80"
    ],
    overview: "Experience the ultimate luxury of Dubai with iconic skyscrapers, thrilling Red Dune desert safari with BBQ, luxury Marina Dhow cruise, Dubai Mall, Burj Khalifa 124th floor, and Abu Dhabi BAPS Temple.",
    highlights: [
      "Burj Khalifa 124th & 125th floor At The Top observation tickets",
      "Desert Safari 4x4 dune bashing, camel riding & Tanoura dance BBQ dinner",
      "Dubai Marina luxury glass Dhow cruise with international buffet",
      "Abu Dhabi day trip with Sheikh Zayed Grand Mosque & BAPS Hindu Mandir",
      "Miracle Garden & Global Village seasonal pavilions"
    ],
    itinerary: [
      {
        day: 1,
        title: "Welcome to Dubai & Marina Dhow Cruise Dinner",
        description: "Arrive at Dubai International Airport. Meet and assist, transfer to hotel. In the evening, board a luxury illuminated Dhow cruise in Dubai Marina with international buffet dinner.",
        meals: "Dinner",
        hotel: "Citymax Hotel Bur Dubai (4-Star)"
      },
      {
        day: 2,
        title: "Dubai City Tour & Burj Khalifa At The Top",
        description: "Half-day guided city tour: Dubai Frame photo stop, Jumeirah Beach, Burj Al Arab, Atlantis The Palm. Afternoon visit to Dubai Mall and ascend to the 124th floor of Burj Khalifa.",
        meals: "Breakfast",
        hotel: "Citymax Hotel"
      },
      {
        day: 3,
        title: "Red Dunes Desert Safari & BBQ Feast",
        description: "Morning at leisure. Afternoon pick up in 4x4 Land Cruisers for thrilling desert dune bashing. Enjoy sandboarding, sunset photo stop, camel riding, belly dance show, and BBQ dinner.",
        meals: "Breakfast, Dinner",
        hotel: "Citymax Hotel"
      },
      {
        day: 4,
        title: "Abu Dhabi Grand Mosque & BAPS Mandir Tour",
        description: "Full day excursion to Abu Dhabi. Visit the architectural wonder Sheikh Zayed Grand Mosque, Ferrari World photo stop, and the magnificent BAPS Hindu Mandir.",
        meals: "Breakfast, Lunch",
        hotel: "Citymax Hotel"
      },
      {
        day: 5,
        title: "Dubai Miracle Garden & Global Village",
        description: "Visit the world's largest natural flower garden (Miracle Garden) followed by an evening exploring the cultural pavilions and shopping at Global Village.",
        meals: "Breakfast",
        hotel: "Citymax Hotel"
      },
      {
        day: 6,
        title: "Gold Souk Shopping & Airport Drop",
        description: "Visit Deira Gold and Spice Souk for traditional perfume and gold shopping before transfer to Dubai Airport for departure.",
        meals: "Breakfast"
      }
    ],
    included: [
      "5 Nights accommodation with daily buffet breakfast",
      "Desert Safari with 4x4 dune bashing and BBQ dinner",
      "Burj Khalifa 124th floor tickets with Dubai Mall fountain show",
      "Dubai Marina Dhow cruise with buffet dinner",
      "Full day Abu Dhabi tour with Grand Mosque entry",
      "Dubai airport pickup and drop-off"
    ],
    excluded: [
      "Airfare and UAE Tourist Visa (we provide fast visa assistance)",
      "Tourism Dirham fee paid directly to hotel"
    ],
    faqs: [
      {
        question: "Does Trip Makers assist with UAE Tourist Visa?",
        answer: "Yes, we process express UAE tourist visas within 24-48 hours with minimal documents."
      }
    ],
    meetingPoint: "Dubai International Airport (DXB) Terminal 1/2/3",
    cancellationPolicy: "Flexible cancellation up to 10 days before departure.",
    maxGroupSize: 25,
    languages: ["Tamil", "English", "Hindi", "Arabic"],
    featured: true,
    recommended: true,
    reviews: [
      {
        id: "rev-db-1",
        author: "Senthil Kumar (Madurai)",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80",
        rating: 5,
        date: "December 2025",
        title: "Memorable Dubai holiday for our 10th anniversary!",
        content: "Trip Makers Tourizms planned everything from Chennai. The Desert Safari and Burj Khalifa tickets were arranged seamlessly. No confusion at all.",
        travelerType: "Couples"
      }
    ]
  },
  {
    id: "pkg-thailand",
    slug: "thailand-tour-package-6-days-5-nights",
    title: "Thailand Tour Package",
    destination: "Bangkok & Pattaya",
    country: "Thailand",
    region: "Asia",
    category: "International",
    duration: "6 Days / 5 Nights",
    durationDays: 6,
    durationNights: 5,
    price: 28999,
    originalPrice: 35000,
    discountBadge: "Popular",
    badgeColor: "#f97150",
    rating: 4.8,
    reviewsCount: 215,
    heroImage: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1506665531195-3566af2b4dfa?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1528181304800-259b08848526?auto=format&fit=crop&w=1200&q=80"
    ],
    overview: "Enjoy Thailand's beautiful beaches, exciting nightlife, magnificent temples, and island adventures. Speedboat to Coral Island, experience Alcazar Cabaret, and marvel at Bangkok's Golden Buddha.",
    highlights: [
      "Coral Island (Koh Larn) speedboat tour with Indian buffet lunch",
      "VIP seats for the world-famous Alcazar Cabaret show in Pattaya",
      "Bangkok City & Temple Tour (Wat Traimit Golden Buddha & Wat Pho)",
      "Chao Phraya River luxury dinner cruise with live musical entertainment",
      "Safari World & Marine Park with dolphin shows and open zoo safari"
    ],
    itinerary: [
      {
        day: 1,
        title: "Bangkok Arrival & Transfer to Pattaya",
        description: "Arrive at Suvarnabhumi Airport. Private transfer to beach town Pattaya. Check in to hotel. Evening Alcazar Cabaret show.",
        meals: "Dinner",
        hotel: "Golden Beach Hotel Pattaya (4-Star)"
      },
      {
        day: 2,
        title: "Coral Island Speedboat Tour & Water Sports",
        description: "Take a thrilling speedboat to Coral Island. Relax on powdery white beaches. Optional parasailing, sea walking, and banana boat. Indian buffet lunch included.",
        meals: "Breakfast, Lunch",
        hotel: "Golden Beach Hotel Pattaya"
      },
      {
        day: 3,
        title: "Pattaya to Bangkok & Temple Wonders",
        description: "Transfer to Bangkok. Enroute visit Gems Gallery. City tour featuring Wat Traimit (Golden Buddha) and Wat Benchamabophit (Marble Temple).",
        meals: "Breakfast",
        hotel: "Prince Palace Hotel Bangkok"
      },
      {
        day: 4,
        title: "Safari World & Marine Park",
        description: "Full day at Thailand's greatest open zoo and leisure park. Drive through the African wilderness safari and watch sensational dolphin, sea lion, and stunt shows.",
        meals: "Breakfast, Lunch",
        hotel: "Prince Palace Hotel Bangkok"
      },
      {
        day: 5,
        title: "Shopping at Pratunam & Chao Phraya Dinner Cruise",
        description: "Free day for duty-free shopping at MBK, Platinum Fashion Mall, and Pratunam. Evening luxury Chao Phraya Princess river dinner cruise.",
        meals: "Breakfast, Dinner",
        hotel: "Prince Palace Hotel Bangkok"
      },
      {
        day: 6,
        title: "Bangkok Departure",
        description: "Breakfast at hotel, free time before transfer to airport for your flight back.",
        meals: "Breakfast"
      }
    ],
    included: [
      "2 Nights Pattaya + 3 Nights Bangkok accommodation",
      "Daily breakfast, 2 Indian lunches, and 2 dinners",
      "Coral Island speedboat tour with transfers",
      "Alcazar Cabaret show tickets",
      "Bangkok temples and city tour",
      "All transfers in private air-conditioned coach"
    ],
    excluded: [
      "Airfare",
      "Water sports activities on Coral Island",
      "Tips and personal expenses"
    ],
    faqs: [
      {
        question: "Is visa required for Thailand?",
        answer: "Thailand currently offers visa exemption for Indian passport holders. Easy entry with valid passport!"
      }
    ],
    meetingPoint: "Bangkok Suvarnabhumi Airport (BKK) / Don Mueang (DMK)",
    cancellationPolicy: "Free cancellation up to 14 days before travel.",
    maxGroupSize: 30,
    languages: ["Tamil", "English", "Hindi"],
    featured: true,
    recommended: true,
    reviews: [
      {
        id: "rev-th-1",
        author: "Vignesh & Priya (Coimbatore)",
        avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80",
        rating: 5,
        date: "February 2026",
        title: "Best honeymoon tour experience!",
        content: "Coral Island and Chao Phraya cruise were unforgettable. Trip Makers handled every cab and hotel without any hassle.",
        travelerType: "Honeymoon"
      }
    ]
  },
  {
    id: "pkg-srilanka",
    slug: "sri-lanka-tour-package-7-days-6-nights",
    title: "Sri Lanka Tour Package",
    destination: "Colombo, Kandy, Nuwara Eliya & Bentota",
    country: "Sri Lanka",
    region: "Asia",
    category: "Family Vacation",
    duration: "7 Days / 6 Nights",
    durationDays: 7,
    durationNights: 6,
    price: 36500,
    originalPrice: 44000,
    discountBadge: "Island Wonder",
    badgeColor: "#059669",
    rating: 4.9,
    reviewsCount: 160,
    heroImage: "https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1546708973-b339540b5162?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1200&q=80"
    ],
    overview: "Experience Sri Lanka's breathtaking beaches, tea plantations, wildlife, waterfalls, and ancient temples. Explore Sigiriya Rock, Kandy Temple of the Tooth, tea estates of Nuwara Eliya, and golden beaches of Bentota.",
    highlights: [
      "Sigiriya Lion Rock UNESCO fortress climb",
      "Temple of the Sacred Tooth Relic & Royal Botanical Gardens in Kandy",
      "Nuwara Eliya misty tea plantations & Ramboda waterfalls",
      "Scenic hill-country blue train journey experience",
      "Madu River mangrove boat safari & sea turtle conservation hatchery in Bentota"
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Colombo & Transfer to Sigiriya / Dambulla",
        description: "Arrive at Bandaranaike International Airport in Colombo. Transfer to Dambulla. Visit Pinnawala Elephant Orphanage enroute. Check in at resort.",
        meals: "Dinner",
        hotel: "Amaya Lake Sigiriya"
      },
      {
        day: 2,
        title: "Sigiriya Lion Rock Fortress & Dambulla Cave Temple",
        description: "Morning climb up the UNESCO Sigiriya Lion Rock citadel with ancient frescoes. Afternoon explore Dambulla Golden Rock Cave Temples.",
        meals: "Breakfast, Dinner",
        hotel: "Amaya Lake Sigiriya"
      },
      {
        day: 3,
        title: "Kandy Cultural Capital & Temple of the Tooth",
        description: "Drive to Kandy. Visit spice gardens in Matale. Tour the Temple of the Sacred Tooth Relic and watch traditional Kandyan cultural dance.",
        meals: "Breakfast, Dinner",
        hotel: "Earl's Regency Kandy (5-Star)"
      },
      {
        day: 4,
        title: "Nuwara Eliya – Little England & Tea Gardens",
        description: "Scenic climb to Nuwara Eliya passing roaring waterfalls. Tour an authentic Ceylon tea factory, Gregory Lake, and colonial cottages.",
        meals: "Breakfast, Dinner",
        hotel: "Grand Hotel Nuwara Eliya"
      },
      {
        day: 5,
        title: "Bentota Coastal Beach Paradise",
        description: "Descend to the tropical southwestern coast of Bentota. Relax on the golden sandy beach and watch the ocean sunset.",
        meals: "Breakfast, Dinner",
        hotel: "Taj Bentota Resort & Spa"
      },
      {
        day: 6,
        title: "Madu River Safari & Turtle Hatchery",
        description: "Take a scenic boat safari through Madu River mangrove islands. Visit cinnamon island and see baby sea turtles at Kosgoda hatchery.",
        meals: "Breakfast, Dinner",
        hotel: "Taj Bentota Resort & Spa"
      },
      {
        day: 7,
        title: "Colombo City Tour & Departure",
        description: "Transfer to Colombo. Orientation tour including Galle Face Green, Independence Square, and Gangaramaya Temple before airport drop.",
        meals: "Breakfast"
      }
    ],
    included: [
      "6 Nights accommodation in premium 4 & 5-Star resorts",
      "Daily breakfast and sumptuous buffet dinners",
      "Private AC tourist car with English/Tamil-speaking chauffeur guide",
      "Sigiriya, Kandy Temple, and Pinnawala entry permits",
      "Madu River boat safari and turtle hatchery tickets",
      "All airport transfers and highway tolls"
    ],
    excluded: [
      "Airfare (Chennai to Colombo is just 1 hour flight)",
      "Sri Lanka ETA tourist visa fee",
      "Personal items"
    ],
    faqs: [
      {
        question: "Can meals be customized for South Indian / Jain preferences?",
        answer: "Yes, South Indian, vegetarian, and Jain food are widely available across our selected hotels."
      }
    ],
    meetingPoint: "Colombo Bandaranaike International Airport (CMB)",
    cancellationPolicy: "Free cancellation up to 14 days before arrival.",
    maxGroupSize: 16,
    languages: ["Tamil", "English", "Sinhala"],
    featured: true,
    recommended: true,
    reviews: [
      {
        id: "rev-sl-1",
        author: "Meenakshi Sundaram (Chennai)",
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80",
        rating: 5,
        date: "January 2026",
        title: "Incredible hospitality and scenic beauty!",
        content: "Nuwara Eliya and Bentota were heaven. Chauffeur was like family, drove safely and took care of my parents so well.",
        travelerType: "Family Vacation"
      }
    ]
  },
  {
    id: "pkg-vietnam",
    slug: "vietnam-tour-package-6-days-5-nights",
    title: "Vietnam Tour Package",
    destination: "Hanoi, Ha Long Bay & Da Nang",
    country: "Vietnam",
    region: "Asia",
    category: "International",
    duration: "6 Days / 5 Nights",
    durationDays: 6,
    durationNights: 5,
    price: 39999,
    originalPrice: 48000,
    discountBadge: "Trending Now",
    badgeColor: "#8b5cf6",
    rating: 4.9,
    reviewsCount: 142,
    heroImage: "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=1200&q=80"
    ],
    overview: "Discover Vietnam's rich culture, limestone islands, vibrant cities, floating villages, and delicious cuisine. Sail across Ha Long Bay's emerald waters and walk on the Golden Hand Bridge in Ba Na Hills.",
    highlights: [
      "Ha Long Bay overnight or day luxury cruise through limestone karsts",
      "Ba Na Hills cable car & walk on the iconic Golden Giant Hands Bridge",
      "Hanoi Old Quarter rickshaw cyclo ride & Hoan Kiem Lake",
      "Lantern-lit evening walking tour in UNESCO Hoi An Ancient Town",
      "Kayaking inside Luon Cave and swimming at Titop Island"
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Hanoi – The Thousand-Year Capital",
        description: "Arrive at Noi Bai International Airport in Hanoi. Transfer to hotel. Afternoon walking tour of the vibrant French Quarter and Train Street.",
        meals: "Dinner",
        hotel: "May de Ville Luxury Hotel Hanoi"
      },
      {
        day: 2,
        title: "Ha Long Bay Emerald Cruise",
        description: "Scenic drive to Ha Long Bay. Board luxury cruise. Sail past fighting cocks islet, visit Sung Sot (Surprise) Cave, and kayak through emerald lagoons.",
        meals: "Breakfast, Lunch, Dinner",
        hotel: "Ha Long Bay Cruise / Hotel"
      },
      {
        day: 3,
        title: "Flight to Da Nang & Hoi An Ancient Town",
        description: "Morning flight to Da Nang. Transfer to the fairytale lantern town of Hoi An. Stroll through Japanese Covered Bridge and take a boat on the Thu Bon river.",
        meals: "Breakfast, Dinner",
        hotel: "Hoi An Historic Hotel"
      },
      {
        day: 4,
        title: "Ba Na Hills & Golden Bridge",
        description: "Take the world's longest cable car up Ba Na Hills. Walk on the world-famous Golden Bridge held by giant stone hands. Enjoy Fantasy Park.",
        meals: "Breakfast, Lunch",
        hotel: "Hoi An Historic Hotel"
      },
      {
        day: 5,
        title: "Da Nang Marble Mountains & Dragon Bridge",
        description: "Explore Marble Mountains, Linh Ung Pagoda, and My Khe Beach. Evening view of the fire-breathing Dragon Bridge in Da Nang.",
        meals: "Breakfast",
        hotel: "TMS Hotel Da Nang Beach"
      },
      {
        day: 6,
        title: "Departure from Da Nang / Hanoi",
        description: "Breakfast at hotel, free time for coffee and souvenir shopping before transfer to airport.",
        meals: "Breakfast"
      }
    ],
    included: [
      "5 Nights 4-Star boutique hotel and cruise stays",
      "All domestic flights inside Vietnam included",
      "Ha Long Bay cruise with seafood/vegetarian lunch",
      "Ba Na Hills cable car and Golden Bridge ticket",
      "English-speaking licensed Vietnamese guide",
      "All private airport transfers"
    ],
    excluded: [
      "International flights to/from Vietnam",
      "Vietnam eVisa fee ($25)"
    ],
    faqs: [
      {
        question: "How easy is it to get a Vietnam eVisa?",
        answer: "Very easy! E-visa is processed online in 3 working days. Trip Makers team assists with approval."
      }
    ],
    meetingPoint: "Hanoi Noi Bai International Airport (HAN)",
    cancellationPolicy: "Free cancellation up to 15 days prior.",
    maxGroupSize: 18,
    languages: ["English", "Tamil", "Vietnamese"],
    featured: true,
    recommended: true,
    reviews: [
      {
        id: "rev-vn-1",
        author: "Anand & Divya",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
        rating: 5,
        date: "February 2026",
        title: "Golden Bridge was mind-blowing!",
        content: "Vietnam exceeded all expectations. Trip Makers Tourizms gave the best package price compared to other operators in Chennai.",
        travelerType: "Couples"
      }
    ]
  },
  {
    id: "pkg-andaman",
    slug: "andaman-tour-package-6-days-5-nights",
    title: "Andaman Tour Package",
    destination: "Port Blair & Havelock Island",
    country: "India",
    region: "Island & Domestic",
    category: "Domestic",
    duration: "6 Days / 5 Nights",
    durationDays: 6,
    durationNights: 5,
    price: 24999,
    originalPrice: 32000,
    discountBadge: "Domestic Favorite",
    badgeColor: "#0284c7",
    rating: 4.9,
    reviewsCount: 198,
    heroImage: "https://images.unsplash.com/photo-1589308078059-be1415eab4c3?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1589308078059-be1415eab4c3?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80"
    ],
    overview: "Relax on pristine white beaches with turquoise waters and experience thrilling water sports in the Andaman Islands. Visit Cellular Jail, cruise on Makruzz ferry to Havelock, and walk along Radhanagar Beach (Asia's #1 beach).",
    highlights: [
      "Radhanagar Beach sunset – rated Asia's Best Beach by Time Magazine",
      "Cellular Jail National Memorial & dramatic Light and Sound Show",
      "High-speed luxury Makruzz catamaran cruise between islands",
      "Elephant Beach boat ride with complimentary snorkeling",
      "Chidiya Tapu bird island and sunset point in Port Blair"
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Port Blair & Cellular Jail Light & Sound Show",
        description: "Arrive at Veer Savarkar Airport in Port Blair. Transfer to hotel. Afternoon visit to the historic Cellular Jail followed by the stirring Light and Sound evening show.",
        meals: "Dinner",
        hotel: "Symphony Samudra Port Blair"
      },
      {
        day: 2,
        title: "Cruise to Havelock Island & Radhanagar Beach",
        description: "Board luxury AC cruise to Havelock Island. Check in to beachfront resort. Spend the afternoon swimming and watching the sunset at the world-renowned Radhanagar Beach.",
        meals: "Breakfast, Dinner",
        hotel: "Symphony Palms Beach Resort Havelock"
      },
      {
        day: 3,
        title: "Elephant Beach Snorkeling & Coral Reefs",
        description: "Speedboat ride to Elephant Beach. Complimentary snorkeling to view live corals. Opportunities for scuba diving, sea walking, and jet skiing.",
        meals: "Breakfast",
        hotel: "Symphony Palms Beach Resort Havelock"
      },
      {
        day: 4,
        title: "Neil Island (Shaheed Dweep) Exploration",
        description: "Cruise to tranquil Neil Island. Visit Bharatpur beach, Laxmanpur beach for sunset, and the natural rock formation bridge (Howrah Bridge).",
        meals: "Breakfast, Dinner",
        hotel: "Symphony Summer Sands Neil Island"
      },
      {
        day: 5,
        title: "Return to Port Blair & Sagarika Shopping",
        description: "Cruise back to Port Blair. Visit Sagarika Emporium for authentic sea shell handicrafts and pearl jewelry.",
        meals: "Breakfast",
        hotel: "Symphony Samudra Port Blair"
      },
      {
        day: 6,
        title: "Port Blair Departure",
        description: "Breakfast at hotel and private transfer to airport with cherished island memories.",
        meals: "Breakfast"
      }
    ],
    included: [
      "5 Nights accommodation in beach resorts",
      "Daily breakfast and 3 dinners",
      "Makruzz / Green Ocean luxury AC ferry tickets",
      "All transfers and sightseeing in dedicated private AC vehicle",
      "Cellular Jail tickets and sound & light passes",
      "Elephant Beach boat ride and snorkeling"
    ],
    excluded: [
      "Flights to Port Blair (direct flights from Chennai available)",
      "Optional scuba diving ($40) or sea walk ($35)",
      "Personal expenses"
    ],
    faqs: [
      {
        question: "Do Indians need a passport for Andaman?",
        answer: "No passport or visa needed! Any valid Government ID (Aadhaar, Voter ID, Passport) is sufficient."
      }
    ],
    meetingPoint: "Port Blair Veer Savarkar International Airport (IXZ)",
    cancellationPolicy: "Free cancellation up to 10 days before travel.",
    maxGroupSize: 20,
    languages: ["Tamil", "English", "Hindi"],
    featured: true,
    recommended: true,
    reviews: [
      {
        id: "rev-ad-1",
        author: "Manoj & Team",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
        rating: 5,
        date: "January 2026",
        title: "Water was crystal clear!",
        content: "Radhanagar beach is unbelievable. Scuba diving in Havelock was arranged very safely. Thank you Trip Makers Tourizms!",
        travelerType: "Group Tours"
      }
    ]
  },
  {
    id: "pkg-lakshadweep",
    slug: "lakshadweep-tour-package-6-days-5-nights",
    title: "Lakshadweep Tour Package",
    destination: "Agatti, Bangaram & Thinnakara Islands",
    country: "India",
    region: "Island & Domestic",
    category: "Luxury & Island",
    duration: "6 Days / 5 Nights",
    durationDays: 6,
    durationNights: 5,
    price: 38500,
    originalPrice: 46000,
    discountBadge: "Trending Paradise",
    badgeColor: "#0d9488",
    rating: 5.0,
    reviewsCount: 130,
    heroImage: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80"
    ],
    overview: "Escape to India's pristine coral paradise filled with turquoise lagoons, sea turtles, shipwrecks, and peaceful uninhabited islands. Includes official entry permits and speedboats to Bangaram & Thinnakara.",
    highlights: [
      "Pristine turquoise lagoons and sandbanks of Bangaram Island",
      "Shipwreck snorkeling and sea turtle encounters in Thinnakara",
      "Glass bottom boat rides over colorful coral gardens",
      "Complete Lakshadweep e-Permit clearance and documentation",
      "Kayaking, paddle boarding, and dolphin spotting cruise"
    ],
    itinerary: [
      {
        day: 1,
        title: "Agatti Airport Arrival & Beach Welcome",
        description: "Fly into Agatti airstrip (surrounded by ocean). Traditional tender coconut welcome. Transfer to beach cottages. Sunset stroll along Agatti beach.",
        meals: "Lunch, Dinner",
        hotel: "Agatti Island Beach Resort"
      },
      {
        day: 2,
        title: "Glass Bottom Boat & Coral Snorkeling",
        description: "Board a glass-bottom boat into the crystal-clear lagoon. Snorkel with marine naturalists to spot clownfish, manta rays, and sea turtles.",
        meals: "Breakfast, Lunch, Dinner",
        hotel: "Agatti Island Beach Resort"
      },
      {
        day: 3,
        title: "Speedboat Day Excursion to Bangaram Island",
        description: "Cruise 45 minutes across the deep ocean to the jewel of Lakshadweep: Bangaram Island. Walk on sandbanks and swim in warm blue waters.",
        meals: "Breakfast, Lunch, Dinner",
        hotel: "Agatti Island Beach Resort"
      },
      {
        day: 4,
        title: "Thinnakara Island & Shipwreck Snorkeling",
        description: "Visit uninhabited Thinnakara Island with swaying coconut groves. Snorkel around an ancient sunken ship covered in vibrant corals.",
        meals: "Breakfast, Lunch, Dinner",
        hotel: "Agatti Island Beach Resort"
      },
      {
        day: 5,
        title: "Kalpitti Island & Lagoon Water Sports",
        description: "Boat ride to southern Kalpitti island. Try kayaking, scuba diving, and lagoon photography. Farewell candlelight dinner on the beach.",
        meals: "Breakfast, Lunch, Dinner",
        hotel: "Agatti Island Beach Resort"
      },
      {
        day: 6,
        title: "Departure from Agatti",
        description: "Breakfast and transfer across the runway for your flight back to Kochi with surreal memories.",
        meals: "Breakfast"
      }
    ],
    included: [
      "5 Nights accommodation in beach cottage",
      "All meals included (Breakfast, Lunch, Evening Snacks & Dinner)",
      "Official Lakshadweep entry permit documentation and verification",
      "Speedboat transfers to Bangaram and Thinnakara Islands",
      "Lagoon snorkeling and glass bottom boat ride",
      "Agatti airport pickup and drop"
    ],
    excluded: [
      "Flights to/from Agatti (AGX via Kochi)",
      "Scuba diving charges",
      "Heritage fee payable on island"
    ],
    faqs: [
      {
        question: "How are Lakshadweep entry permits handled?",
        answer: "Trip Makers Tourizms handles the complete entry permit application with Lakshadweep administration on your behalf."
      }
    ],
    meetingPoint: "Agatti Island Airport (AGX)",
    cancellationPolicy: "Free cancellation up to 21 days before departure.",
    maxGroupSize: 12,
    languages: ["Tamil", "Malayalam", "English", "Hindi"],
    featured: true,
    recommended: true,
    reviews: [
      {
        id: "rev-lk-1",
        author: "Dr. Rajesh & Fam",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80",
        rating: 5,
        date: "March 2026",
        title: "Better than Maldives!",
        content: "The water color is unbelievable. Bangaram sandbank was like a dream. Thank you Trip Makers for getting our permits so smoothly.",
        travelerType: "Family Vacation"
      }
    ]
  },
  {
    id: "pkg-europe",
    slug: "europe-tour-package-10-days-9-nights",
    title: "Europe Tour Package",
    destination: "France, Switzerland, Italy & Austria",
    country: "Europe Grand Tour",
    region: "Europe",
    category: "International",
    duration: "10 Days / 9 Nights",
    durationDays: 10,
    durationNights: 9,
    price: 145000,
    originalPrice: 175000,
    discountBadge: "Grand Vacation",
    badgeColor: "#ea580c",
    rating: 5.0,
    reviewsCount: 165,
    heroImage: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1516550893923-42d28e5677af?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1200&q=80"
    ],
    overview: "Experience the ultimate beauty of Europe with breathtaking Swiss alpine peaks, romantic Paris Eiffel Tower, Venice gondola ride, Rome Colosseum, and Vienna palaces with dedicated Indian tour managers.",
    highlights: [
      "Eiffel Tower 2nd level access & romantic River Seine cruise in Paris",
      "Mt. Titlis cable car & world's first revolving Rotair in Switzerland",
      "Private gondola ride through historic Venice canals",
      "Rome guided walking tour with Colosseum & Trevi Fountain",
      "Hot Indian dinners arranged every night with Jain options"
    ],
    itinerary: [
      {
        day: 1,
        title: "Welcome to Paris – The City of Lights",
        description: "Arrive at Paris Charles de Gaulle Airport. Transfer to hotel. Evening illuminated Seine river cruise.",
        meals: "Dinner",
        hotel: "Novotel Paris (4-Star)"
      },
      {
        day: 2,
        title: "Eiffel Tower & Paris City Tour",
        description: "Ascend to the 2nd level of Eiffel Tower. Panoramic tour: Champs-Élysées, Arc de Triomphe, and Louvre glass pyramid.",
        meals: "Breakfast, Dinner",
        hotel: "Novotel Paris"
      },
      {
        day: 3,
        title: "Scenic Drive to Switzerland",
        description: "Travel through picturesque French vineyards into the heart of Switzerland. Check in near Lake Lucerne.",
        meals: "Breakfast, Dinner",
        hotel: "Radisson Blu Hotel Lucerne"
      },
      {
        day: 4,
        title: "Mt. Titlis Snow Glacier & Cliff Walk",
        description: "Rotair revolving cable car up Mt. Titlis (10,000 ft). Experience Ice Flyer chairlift and walk across Europe's highest suspension bridge.",
        meals: "Breakfast, Dinner",
        hotel: "Radisson Blu Hotel Lucerne"
      },
      {
        day: 5,
        title: "Jungfraujoch – Top of Europe (Optional) & Interlaken",
        description: "Visit Interlaken nestled between twin lakes. Stroll through Swiss watch boutiques and scenic alpine meadows.",
        meals: "Breakfast, Dinner",
        hotel: "Radisson Blu Hotel Lucerne"
      },
      {
        day: 6,
        title: "Journey to Venice – The Floating City",
        description: "Scenic coach drive through Italian Alps to Venice. Vaporetto boat transfer to St. Mark's Square. Private romantic gondola ride.",
        meals: "Breakfast, Dinner",
        hotel: "Hotel Antony Venice"
      },
      {
        day: 7,
        title: "Pisa Leaning Tower to Florence",
        description: "Drive to Pisa to take the iconic photo holding up the Leaning Tower of Pisa. Continue to Florence, cradle of Renaissance art.",
        meals: "Breakfast, Dinner",
        hotel: "Hilton Garden Inn Florence"
      },
      {
        day: 8,
        title: "Eternal City of Rome & Vatican",
        description: "Travel to Rome. Guided tour of Vatican City, St. Peter's Basilica, Colosseum, and toss a coin into the Trevi Fountain.",
        meals: "Breakfast, Dinner",
        hotel: "Crowne Plaza Rome"
      },
      {
        day: 9,
        title: "Rome at Leisure & Farewell Italian Feast",
        description: "Explore the Spanish Steps, Pantheon, and shopping streets at leisure. Evening celebration dinner.",
        meals: "Breakfast, Dinner",
        hotel: "Crowne Plaza Rome"
      },
      {
        day: 10,
        title: "Departure from Rome Fiumicino",
        description: "Breakfast and private transfer to Rome Fiumicino Airport for your flight back home.",
        meals: "Breakfast"
      }
    ],
    included: [
      "9 Nights in 4-Star premier hotels across Europe",
      "Daily buffet breakfasts & hot Indian culinary dinners",
      "Eiffel Tower 2nd Level tickets & Seine Cruise",
      "Mt. Titlis cable car & Ice Flyer passes",
      "Venice private gondola ride & boat transfers",
      "Full Schengen visa documentation and appointment guidance"
    ],
    excluded: [
      "Airfare",
      "Schengen Visa consular fees",
      "City tourist taxes (approx €3-5/night)"
    ],
    faqs: [
      {
        question: "Does Trip Makers assist with Schengen visa appointments from Chennai/India?",
        answer: "Yes, our dedicated visa desk prepares cover letters, itineraries, flight itineraries, and books your VFS biometric appointments."
      }
    ],
    meetingPoint: "Paris Charles de Gaulle Airport (CDG)",
    cancellationPolicy: "Free cancellation up to 30 days prior to departure.",
    maxGroupSize: 35,
    languages: ["Tamil", "English", "Hindi"],
    featured: true,
    recommended: true,
    reviews: [
      {
        id: "rev-eu-1",
        author: "Murugesan & Family (Chennai)",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
        rating: 5,
        date: "September 2025",
        title: "Dream Europe vacation came true!",
        content: "Hot Indian food was arranged every single night, which was a blessing for my elderly parents. Switzerland was out of this world.",
        travelerType: "Family Vacation"
      }
    ]
  }
];

export const CATEGORIES = [
  { name: "International", slug: "international", count: 28, image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=600&q=80" },
  { name: "Domestic", slug: "domestic", count: 32, image: "https://images.unsplash.com/photo-1589308078059-be1415eab4c3?auto=format&fit=crop&w=600&q=80" },
  { name: "Honeymoon", slug: "honeymoon", count: 18, image: "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=600&q=80" },
  { name: "Family Vacation", slug: "family-vacation", count: 24, image: "https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=600&q=80" },
  { name: "Luxury & Island", slug: "luxury-island", count: 16, image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=600&q=80" },
  { name: "Adventure", slug: "adventure", count: 21, image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=600&q=80" }
];
