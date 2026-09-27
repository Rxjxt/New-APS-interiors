import {
  FeaturedProjects,
  ProjectCategories,
  ProjectGallery,
  ProjectsHero,
} from "@/components/projects";

import CTA from "@/components/home/cta/CTA";

export default function ProjectsPage() {
  return (
    <main className="overflow-hidden">
      <ProjectsHero />

      <FeaturedProjects />

      <ProjectCategories />

      <ProjectGallery />

      <CTA
  overlap
  badge="LET'S CREATE YOUR NEXT PROJECT"
  title={`Ready To Transform
Your Workspace?`}
  description="Whether it's a corporate office, commercial workspace, educational institution, or custom furniture requirement, NEW APS INTERIORS delivers premium solutions tailored to your business."
  primaryButton="Get a Free Consultation"
  secondaryButton="Explore Products"
  primaryHref="/contact"
  secondaryHref="/products"
/>
    </main>
  );
}