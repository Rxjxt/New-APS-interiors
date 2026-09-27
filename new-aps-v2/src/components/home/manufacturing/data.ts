export interface GalleryItem {
  id: number;
  title: string;
  subtitle: string;
  image: string;
  size: "large" | "small";
}

export const galleryItems: GalleryItem[] = [
  {
    id: 1,
    title: "Production Floor",
    subtitle: "Advanced woodworking setup",
    image: "/images/manufacturing/production-floor.png",
    size: "large",
  },
  {
    id: 2,
    title: "Panel Saw",
    subtitle: "Precision cutting with industrial-grade machinery",
    image: "/images/manufacturing/panel-saw.png",
    size: "small",
  },
  {
    id: 3,
    title: "Edge Banding",
    subtitle: "Flawless edge finishing for premium furniture",
    image: "/images/manufacturing/edge-banding.png",
    size: "small",
  },
  {
    id: 4,
    title: "Dust Collection",
    subtitle: "Clean and efficient manufacturing environment",
    image: "/images/manufacturing/dust-collector.png",
    size: "small",
  },
  {
    id: 5,
    title: "Air Compressor",
    subtitle: "Reliable pneumatic support systems",
    image: "/images/manufacturing/compressor.png",
    size: "small",
  },
  {
    id: 6,
    title: "Felder Machine",
    subtitle: "High-precision woodworking technology",
    image: "/images/manufacturing/felderr.png",
    size: "small",
  },
  {
    id: 7,
    title: "Felder Machine",
    subtitle: "Professional-grade machining and finishing",
    image: "/images/manufacturing/felder.png",
    size: "large",
  },
];