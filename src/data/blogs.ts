export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  date: string;
  author: string;
  authorAvatar: string;
  readTime: string;
  category: string;
  image: string;
  excerpt: string;
  content: string[];
  tags: string[];
}

export const BLOGS: BlogPost[] = [
  {
    id: "blog-1",
    slug: "how-to-travel-with-paper-map",
    title: "How to travel with paper map",
    date: "June 6, 2025",
    author: "John Smith",
    authorAvatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80",
    readTime: "6 min read",
    category: "Travel Tips",
    image: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=800&q=80",
    excerpt: "In an era of ubiquitous GPS and smartphone turn-by-turn guidance, unfolding a large, crisp paper topographical map remains one of travel's most romantic and rewarding arts.",
    content: [
      "There is an irreplaceable thrill when you spread a detailed paper map across a rustic café wooden table in an unfamiliar foreign city. A smartphone screen forces you through a tiny keyhole of your surroundings, zooming in so narrowly that you forfeit the geographic context. A paper map gives you the entire province, the topography, the mountain passes, and the serendipitous backroads.",
      "Navigating with a paper map fosters an intimate sense of orientation. You notice the contour lines rising toward alpine crests, the tiny bends of meandering rivers, and obscure hamlets that algorithms bypass.",
      "Next time you head into the mountains or embark on a European road expedition, pick up a waterproof folding map. Mark your trail in soft pencil, embrace the occasional detour, and reconnect with the genuine spirit of exploration."
    ],
    tags: ["Navigation", "Adventure", "Slow Travel", "Vintage"]
  },
  {
    id: "blog-2",
    slug: "change-your-place-and-get-the-fresh-air",
    title: "Change your place and get the fresh air",
    date: "June 6, 2025",
    author: "John Smith",
    authorAvatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80",
    readTime: "5 min read",
    category: "Wellness & Nature",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80",
    excerpt: "Modern life confines our senses within indoor routines. Stepping onto an alpine ridge or hearing morning waves on a tropical shore resets mental clarity and revitalizes our creative energy.",
    content: [
      "Scientific studies continually corroborate what wanderers have inherently known for centuries: our physiology alters when we immerse ourselves in expansive natural landscapes. The Japanese call it 'Shinrin-yoku' or forest bathing.",
      "The crisp, pine-scented air of the Austrian Salzkammergut or the ocean spray crashing against Hawaii's volcanic coastline triggers deep relaxation. It breaks the chronic fight-or-flight tension that urban living imperceptibly builds.",
      "Plan your escapes not merely as holidays, but as essential recalibration. Disconnect notifications, breathe deeply in open horizons, and come home renewed."
    ],
    tags: ["Mindfulness", "Mountains", "Nature", "Health"]
  },
  {
    id: "blog-3",
    slug: "pityful-a-rethoric-question-ran",
    title: "Pityful a rhetoric question ran",
    date: "June 6, 2025",
    author: "John Smith",
    authorAvatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80",
    readTime: "4 min read",
    category: "Stories & Culture",
    image: "https://images.unsplash.com/photo-1516550893923-42d28e5677af?auto=format&fit=crop&w=800&q=80",
    excerpt: "Reflections on wandering through cobblestone alleys, discovering hidden bakeries, and listening to centuries-old legends recounted by friendly locals in historic town squares.",
    content: [
      "Travel is often measured in monuments ticked off and photographs captured, yet the moments that linger longest are invariably spontaneous encounters. A baker in Hallstatt offering a warm anise pastry fresh from the oven, or a gondolier humming an aria under an archway.",
      "These micro-stories define our worldly perception. When we step beyond scripted itineraries and invite serendipity, each journey becomes uniquely our own."
    ],
    tags: ["Culture", "Europe", "Stories", "Wanderlust"]
  }
];
