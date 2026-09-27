"use client";

import { Button } from "@/components/ui/Button";

export default function HeroActions() {
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <div className="mt-8 flex flex-col gap-4 sm:mt-10 sm:flex-row sm:flex-wrap sm:justify-center lg:mt-12 lg:justify-start lg:gap-5">
      <Button
        variant="primary"
        size="hero"
        className="w-full sm:w-auto"
        onClick={() => scrollToSection("products")}
      >
        Explore Products
      </Button>

      <Button
        variant="secondary"
        size="hero"
        className="w-full sm:w-auto"
        onClick={() => scrollToSection("contact")}
      >
        Contact Us
      </Button>
    </div>
  );
}