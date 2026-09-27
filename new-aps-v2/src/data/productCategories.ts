export interface ProductCategory {
  id: number;
  slug: string;
  title: string;
  description: string;
  image: string;
}

export const productCategories: ProductCategory[] = [
  {
    id: 1,
    slug: "executive-desks",
    title: "Executive Desks",
    description:
      "Premium wooden executive desks crafted with elegant finishes for leadership spaces and modern corporate offices.",
    image: "/images/products/executive-desks.png",
  },
  {
    id: 2,
    slug: "modular-workstations",
    title: "Modular Workstations",
    description:
      "Smart workstation systems designed to maximize collaboration, comfort, and workplace productivity.",
    image: "/images/products/modular-workstations.png",
  },
  {
    id: 3,
    slug: "conference-tables",
    title: "Conference Tables",
    description:
      "Contemporary meeting and boardroom tables built for productive discussions and executive presentations.",
    image: "/images/products/conference-tables.png",
  },
  {
    id: 4,
    slug: "reception-desks",
    title: "Reception Desks",
    description:
      "Elegant reception counters that create a lasting first impression while reflecting your brand identity.",
    image: "/images/products/reception-desks.png",
  },
  {
    id: 5,
    slug: "storage-solutions",
    title: "Storage Solutions",
    description:
      "Functional storage cabinets, pedestals, and credenzas that keep workspaces organized and clutter-free.",
    image: "/images/products/storage-solutions.png",
  },
  {
    id: 6,
    slug: "director-cabins",
    title: "Director Cabins",
    description:
      "Complete executive cabin furniture solutions combining luxury, functionality, and timeless craftsmanship.",
    image: "/images/products/director-cabins.png",
  },
];