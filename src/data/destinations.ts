export interface Destination {
  id: string;
  slug: string;
  name: string;
  region: string;
  image: string;
  tourCount: number;
  startingPrice: number;
  description: string;
  popularSpots: string[];
}

export const DESTINATIONS: Destination[] = [
  {
    id: "dest-srilanka",
    slug: "sri-lanka",
    name: "Sri Lanka",
    region: "Asia",
    image: "https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?auto=format&fit=crop&w=800&q=80",
    tourCount: 6,
    startingPrice: 38999,
    description: "The Pearl of the Indian Ocean: ancient Sigiriya rock fortress, tea plantations in Nuwara Eliya, golden beaches of Bentota, and sacred temples of Kandy.",
    popularSpots: ["Colombo", "Kandy", "Nuwara Eliya", "Sigiriya", "Bentota"]
  },
  {
    id: "dest-thailand",
    slug: "thailand",
    name: "Thailand",
    region: "Asia",
    image: "https://images.unsplash.com/photo-1528181304800-259b08848526?auto=format&fit=crop&w=800&q=80",
    tourCount: 8,
    startingPrice: 32999,
    description: "Land of Smiles: bustling Bangkok temples, exhilarating coral island speedboats in Pattaya, floating markets, and tropical Phi Phi waters.",
    popularSpots: ["Bangkok", "Pattaya", "Coral Island", "Phuket", "Krabi"]
  },
  {
    id: "dest-vietnam",
    slug: "vietnam",
    name: "Vietnam",
    region: "Asia",
    image: "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=800&q=80",
    tourCount: 5,
    startingPrice: 42999,
    description: "Timeless landscapes: emerald waters of Halong Bay, ancient French quarter of Hanoi, lantern-lit streets of Hoi An, and Golden Bridge in Ba Na Hills.",
    popularSpots: ["Hanoi", "Halong Bay", "Da Nang", "Hoi An", "Ba Na Hills"]
  },
  {
    id: "dest-andaman",
    slug: "andaman",
    name: "Andaman Islands",
    region: "Island & Domestic",
    image: "https://images.unsplash.com/photo-1589308078059-be1415eab4c3?auto=format&fit=crop&w=800&q=80",
    tourCount: 6,
    startingPrice: 28999,
    description: "India's tropical archipelago paradise: Radhanagar Beach sunsets, Cellular Jail light and sound show, scuba diving in Havelock, and Neil Island corals.",
    popularSpots: ["Port Blair", "Havelock Island", "Radhanagar Beach", "Neil Island", "Ross Island"]
  },
  {
    id: "dest-dubai",
    slug: "dubai",
    name: "Dubai",
    region: "Middle East",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80",
    tourCount: 7,
    startingPrice: 49999,
    description: "The city of gold and wonders: Burj Khalifa 124th floor vistas, desert safari dune bashing with BBQ, Dubai Mall aquarium, and luxury marina cruises.",
    popularSpots: ["Burj Khalifa", "Desert Safari", "Marina Dhow Cruise", "Dubai Mall", "Palm Jumeirah"]
  },
  {
    id: "dest-europe",
    slug: "europe",
    name: "Europe",
    region: "Europe",
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=800&q=80",
    tourCount: 10,
    startingPrice: 149999,
    description: "Iconic continental wonders: Eiffel Tower in Paris, Swiss Alpine summits of Mount Titlis, Rhine River cruises, Venetian gondolas, and Roman antiquity.",
    popularSpots: ["Paris", "Swiss Alps", "Titlis", "Venice", "Rome", "Amsterdam"]
  },
  {
    id: "dest-lakshadweep",
    slug: "lakshadweep",
    name: "Lakshadweep",
    region: "Island & Domestic",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
    tourCount: 4,
    startingPrice: 29999,
    description: "India's pristine coral paradise: turquoise lagoons, Agatti and Bangaram islands, kayaking, snorkeling, and virgin palm-fringed sandbanks.",
    popularSpots: ["Agatti Island", "Bangaram Island", "Thinnakara", "Kavaratti"]
  },
  {
    id: "dest-malaysia",
    slug: "malaysia",
    name: "Malaysia",
    region: "Asia",
    image: "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?auto=format&fit=crop&w=800&q=80",
    tourCount: 7,
    startingPrice: 34999,
    description: "Truly Asia: Petronas Twin Towers in Kuala Lumpur, Batu Caves rainbow stairs, Genting Highlands cable car, and lush tropical islands.",
    popularSpots: ["Kuala Lumpur", "Genting Highlands", "Batu Caves", "Putrajaya", "Langkawi"]
  },
  {
    id: "dest-singapore",
    slug: "singapore",
    name: "Singapore",
    region: "Asia",
    image: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=800&q=80",
    tourCount: 6,
    startingPrice: 39999,
    description: "The Lion City: Gardens by the Bay futuristic Supertrees, Marina Bay Sands SkyPark, Sentosa Island cable car, and Universal Studios.",
    popularSpots: ["Marina Bay Sands", "Gardens by the Bay", "Sentosa Island", "Universal Studios", "Night Safari"]
  }
];
