export interface Project {
  id: number;
  slug: string;
  title: string;
  category: string;
  heroImage: string;
  gallery: string[];
  shortDescription: string;
  description: string;
  location: string;
  client: string;
  duration: string;
  area: string;
  completion: string;
  features: string[];
}

export const projects: Project[] = [
  {
    id: 1,
    slug: "premium-reception",
    title: "Premium Reception",
    category: "Reception & Lobby",
    heroImage: "/images/projects/portfolio-1.png",
    gallery: [
      "/images/projects/portfolio-1.png",
      "/images/projects/portfolio-2.png",
      "/images/projects/portfolio-3.png",
    ],
    shortDescription:
      "A sophisticated reception area designed to create a memorable first impression for visitors.",
    description:
      "This reception project combines premium finishes, elegant lighting, and functional planning to create a welcoming and professional entrance space. Every detail was carefully designed to reflect the client's brand identity while ensuring comfort and efficiency.",
    location: "Gurugram, Haryana",
    client: "Corporate Office",
    duration: "6 Weeks",
    area: "1,500 sq.ft.",
    completion: "2025",
    features: [
      "Premium marble reception desk",
      "Designer ceiling lighting",
      "Branding wall",
      "Luxury seating area",
    ],
  },
  {
    id: 2,
    slug: "modern-corporate-office",
    title: "Modern Corporate Office",
    category: "Corporate Office",
    heroImage: "/images/projects/portfolio-2.png",
    gallery: [
      "/images/projects/portfolio-2.png",
      "/images/projects/portfolio-1.png",
      "/images/projects/portfolio-4.png",
    ],
    shortDescription:
      "A modern office focused on productivity, collaboration, and aesthetics.",
    description:
      "Designed with open workstations, natural lighting, and ergonomic furniture to maximize employee comfort while maintaining a premium corporate identity.",
    location: "Noida",
    client: "IT Company",
    duration: "8 Weeks",
    area: "4,000 sq.ft.",
    completion: "2025",
    features: [
      "Open workspace",
      "Meeting rooms",
      "Acoustic ceiling",
      "Smart lighting",
    ],
  },
  {
    id: 3,
    slug: "glass-cabin-office",
    title: "Glass Cabin Office",
    category: "Executive Cabin",
    heroImage: "/images/projects/portfolio-3.png",
    gallery: [
      "/images/projects/portfolio-3.png",
      "/images/projects/portfolio-2.png",
      "/images/projects/portfolio-6.png",
    ],
    shortDescription:
      "Elegant glass cabins offering privacy while maintaining openness.",
    description:
      "A premium executive workspace featuring frameless glass partitions, acoustic solutions, and refined finishes for modern business environments.",
    location: "Delhi",
    client: "Finance Firm",
    duration: "5 Weeks",
    area: "1,200 sq.ft.",
    completion: "2025",
    features: [
      "Glass partitions",
      "Sound insulation",
      "Executive furniture",
      "Premium lighting",
    ],
  },
  {
    id: 4,
    slug: "collaborative-workspace",
    title: "Collaborative Workspace",
    category: "Innovation Hub",
    heroImage: "/images/projects/portfolio-4.png",
    gallery: [
      "/images/projects/portfolio-4.png",
      "/images/projects/portfolio-2.png",
      "/images/projects/portfolio-5.png",
    ],
    shortDescription:
      "An open collaborative workspace encouraging teamwork and innovation.",
    description:
      "Flexible seating, breakout areas, and vibrant interiors create an inspiring environment where teams can collaborate efficiently.",
    location: "Gurugram",
    client: "Startup",
    duration: "7 Weeks",
    area: "3,000 sq.ft.",
    completion: "2025",
    features: [
      "Collaborative zones",
      "Breakout spaces",
      "Flexible furniture",
      "Natural lighting",
    ],
  },
  {
    id: 5,
    slug: "executive-conference-room",
    title: "Executive Conference Room",
    category: "Meeting Room",
    heroImage: "/images/projects/portfolio-5.png",
    gallery: [
      "/images/projects/portfolio-5.png",
      "/images/projects/portfolio-2.png",
      "/images/projects/portfolio-6.png",
    ],
    shortDescription:
      "A premium conference room designed for executive meetings and presentations.",
    description:
      "Equipped with advanced AV integration, elegant finishes, and acoustic optimization to deliver a professional meeting experience.",
    location: "Delhi NCR",
    client: "Corporate Headquarters",
    duration: "4 Weeks",
    area: "900 sq.ft.",
    completion: "2025",
    features: [
      "AV integration",
      "Acoustic treatment",
      "Conference table",
      "Ambient lighting",
    ],
  },
  {
    id: 6,
    slug: "executive-cabin",
    title: "Executive Cabin",
    category: "Private Office",
    heroImage: "/images/projects/portfolio-6.png",
    gallery: [
      "/images/projects/portfolio-6.png",
      "/images/projects/portfolio-3.png",
      "/images/projects/portfolio-5.png",
    ],
    shortDescription:
      "A luxurious executive cabin designed for leadership and productivity.",
    description:
      "This executive cabin blends elegance with functionality through premium materials, custom storage, and sophisticated lighting.",
    location: "Noida",
    client: "Managing Director",
    duration: "4 Weeks",
    area: "750 sq.ft.",
    completion: "2025",
    features: [
      "Custom cabinetry",
      "Executive desk",
      "Premium finishes",
      "Ambient lighting",
    ],
  },
];