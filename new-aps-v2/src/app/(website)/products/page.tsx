import ProductsHero from "@/components/products/ProductsHero";
import FeaturedCategories from "@/components/products/FeaturedCategories";
import WhyChooseUs from "@/components/products/WhyChooseUs";
import ManufacturingProcess from "@/components/products/ManufacturingProcess";
import ProductsCTA from "@/components/products/ProductsCTA";

export default function ProductsPage() {
  return (
    <main>
      <ProductsHero />
      <FeaturedCategories />
      <WhyChooseUs />
      <ManufacturingProcess />
      <ProductsCTA />
    </main>
  );
}