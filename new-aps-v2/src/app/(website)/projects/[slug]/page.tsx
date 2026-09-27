import { notFound } from "next/navigation";
import { projects } from "@/data/projects";

import ProjectHero from "@/components/project-details/ProjectHero";
import ProjectOverview from "@/components/project-details/ProjectOverview";
import ProjectGallery from "@/components/project-details/ProjectGallery";
import ProjectFeatures from "@/components/project-details/ProjectFeatures";
import ProjectStats from "@/components/project-details/ProjectStats";
import RelatedProjects from "@/components/project-details/RelatedProjects";
import ProjectCTA from "@/components/project-details/ProjectCTA";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;

  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return {
      title: "Project Not Found | NEW APS INTERIORS",
    };
  }

  return {
    title: `${project.title} | NEW APS INTERIORS`,
    description: project.shortDescription,
  };
}

export default async function ProjectDetailsPage({
  params,
}: PageProps) {
  const { slug } = await params;

  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main>
      <ProjectHero project={project} />

      <ProjectOverview project={project} />

      <ProjectGallery project={project} />

      <ProjectFeatures project={project} />

      <ProjectStats project={project} />

      <RelatedProjects project={project} />

      <ProjectCTA />
    </main>
  );
}