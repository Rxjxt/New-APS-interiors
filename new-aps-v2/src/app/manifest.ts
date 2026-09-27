import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "NEW APS INTERIORS",
    short_name: "APS",
    description:
      "Premium Printer Cabinets & Customized Office Furniture",

    start_url: "/",

    display: "standalone",

    background_color: "#F8F6F2",

    theme_color: "#B6945F",

    icons: [
      {
        src: "/favicon.ico",
        sizes: "48x48",
        type: "image/x-icon",
      },
    ],
  };
}