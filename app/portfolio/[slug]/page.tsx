import Link from "next/link";
import { ArrowLeft, Calendar, User, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { projects } from "@/lib/projects";
import { notFound } from "next/navigation";

interface ProjectPageProps {
  params: {
    slug: string;
  };
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="container px-4 py-12 md:px-6 md:py-24 bg-black">
      <div className="mb-8 flex items-center">
        <Link href="/portfolio">
          <Button
            variant="ghost"
            size="sm"
            className="text-zinc-400 hover:text-white"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Portfolio
          </Button>
        </Link>
      </div>
      <div className="mb-8 space-y-4">
        <h1 className="text-4xl font-bold tracking-tight text-white">
          {project.title}
        </h1>
        <p className="text-xl text-zinc-400">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <Badge
              key={tag}
              variant="secondary"
              className="bg-zinc-800 text-zinc-200"
            >
              {tag}
            </Badge>
          ))}
        </div>
      </div>
      <div className="mb-12 overflow-hidden rounded-lg">
        <img
          src={project.fullImage || "/placeholder.svg"}
          alt={project.title}
          className="w-full object-cover"
        />
      </div>
      <div className="mb-12 grid grid-cols-1 gap-6 md:grid-cols-3">
        <div className="space-y-2 bg-zinc-900 p-4 rounded-lg">
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4 text-primary" />
            <h3 className="font-medium text-white">Year</h3>
          </div>
          <p className="text-zinc-400">{project.year}</p>
        </div>
        <div className="space-y-2 bg-zinc-900 p-4 rounded-lg">
          <div className="flex items-center gap-2">
            <Briefcase className="h-4 w-4 text-primary" />
            <h3 className="font-medium text-white">Client</h3>
          </div>
          <p className="text-zinc-400">{project.client}</p>
        </div>
        <div className="space-y-2 bg-zinc-900 p-4 rounded-lg">
          <div className="flex items-center gap-2">
            <User className="h-4 w-4 text-primary" />
            <h3 className="font-medium text-white">Role</h3>
          </div>
          <p className="text-zinc-400">{project.role}</p>
        </div>
      </div>
      <div className="mb-12 space-y-8">
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-white">Overview</h2>
          <p className="leading-relaxed text-zinc-400">
            {project.content.overview}
          </p>
        </div>
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-white">Challenge</h2>
          <p className="leading-relaxed text-zinc-400">
            {project.content.challenge}
          </p>
        </div>
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-white">Solution</h2>
          <p className="leading-relaxed text-zinc-400">
            {project.content.solution}
          </p>
        </div>
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-white">Outcome</h2>
          <p className="leading-relaxed text-zinc-400">
            {project.content.outcome}
          </p>
        </div>
        {project.slug === "invoicing-app-improving" && (
          <div className="space-y-4">
            <div className="overflow-hidden rounded-lg border border-zinc-800">
              <img
                src="/images/1_about_project.jpg"
                alt={`${project.title} - About Project`}
                className="w-full object-cover"
              />
            </div>
            <div className="overflow-hidden rounded-lg border border-zinc-800">
              <img
                src="/images/invoice21.png"
                alt={`${project.title} - About Project`}
                className="w-full object-cover"
              />
            </div>
            <div className="relative mb-12 overflow-hidden rounded-lg aspect-video">
              <div className="overflow-hidden">
                <img
                  src="/images/invoice31.gif"
                  alt={`${project.title} - About Project`}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="relative mb-12 overflow-hidden rounded-lg aspect-video">
              <div className="overflow-hidden">
                <img
                  src="/images/invoice32.gif"
                  alt={`${project.title} - About Project`}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="relative mb-12 overflow-hidden rounded-lg aspect-video">
              <div className="overflow-hidden">
                <img
                  src="/images/invoice33.gif"
                  alt={`${project.title} - About Project`}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="overflow-hidden rounded-lg border border-zinc-800">
              <img
                src="/images/invoice34.jpg"
                alt={`${project.title} - About Project`}
                className="w-full object-cover"
              />
            </div>
            <div className="overflow-hidden rounded-lg border border-zinc-800">
              <img
                src="/images/invoice35.jpg"
                alt={`${project.title} - About Project`}
                className="w-full object-cover"
              />
            </div>
            <div className="overflow-hidden rounded-lg border border-zinc-800">
              <img
                src="/images/invoice36.jpg"
                alt={`${project.title} - About Project`}
                className="w-full object-cover"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
