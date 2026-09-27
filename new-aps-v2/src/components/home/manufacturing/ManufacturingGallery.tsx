"use client";

import { galleryItems } from "./data";
import GalleryCard from "./GalleryCard";

export default function ManufacturingGallery() {
  const [
    productionFloor,
    panelSaw,
    edgeBander,
    dustCollector,
    compressor,
    rawMaterial,
    finishedProduct,
  ] = galleryItems;

  return (
    <div className="mt-10 space-y-5">
      {/* Top Layout */}
      <div className="grid gap-5 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <GalleryCard item={productionFloor} />
        </div>

        <div className="space-y-5">
          <GalleryCard item={panelSaw} />
          <GalleryCard item={edgeBander} />
        </div>
      </div>

      {/* Middle Row */}
      <div className="grid gap-5 md:grid-cols-3">
        <GalleryCard item={dustCollector} />
        <GalleryCard item={compressor} />
        <GalleryCard item={rawMaterial} />
      </div>

      {/* Bottom Featured Image */}
      <GalleryCard item={finishedProduct} />
    </div>
  );
}