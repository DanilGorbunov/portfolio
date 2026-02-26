import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { projects } from "@/lib/projects";
import { notFound } from "next/navigation";
import { SafeImage } from "@/components/safe-image";

interface ProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[#0A0A0A]">
      {/* Sticky Back Button */}
      <div className="sticky top-16 z-50 bg-[#0A0A0A]/95 backdrop-blur supports-[backdrop-filter]:bg-[#0A0A0A]/80 border-b border-[#171717]">
        <div className="container mx-auto px-6 py-4">
          <Link href="/" prefetch={false} className="inline-flex items-center text-sm text-[#737373] hover:text-[#A3A3A3] transition-colors duration-200 font-light">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Cases
          </Link>
        </div>
      </div>

      <div className={`container px-6 py-16 md:py-24 ${project.slug === "invoicing-app-improving" ? "max-w-5xl" : "max-w-4xl"}`}>
      {/* Header */}
      <div className="mb-12 space-y-4">
        <h1 className="text-4xl md:text-5xl font-normal tracking-tight text-[#E5E5E5]">
          {project.title}
        </h1>
        <p className="text-lg text-[#A3A3A3] leading-relaxed font-light">
          {project.description}
        </p>
        <div className="flex flex-wrap items-center gap-4 pt-2 text-sm text-[#737373] font-light">
          <span>{project.year}</span>
          <span>•</span>
          <span>{project.client}</span>
          <span>•</span>
          <span>{project.role}</span>
          {project.website && (
            <>
              <span>•</span>
              <a
                href={project.website}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#737373] hover:text-[#E5E5E5] transition-colors duration-200 inline-flex items-center gap-1"
              >
                Visit Site
                <ExternalLink className="w-3 h-3" />
              </a>
            </>
          )}
        </div>
      </div>

      {/* Main Image */}
      <div className="mb-16 overflow-hidden rounded-lg border border-[#171717] bg-[#0A0A0A]">
        <SafeImage
          src={project.fullImage || "/placeholder.svg"}
          alt={project.title}
          className="w-full h-auto min-h-0 object-contain object-top"
          loading="lazy"
        />
      </div>

      {/* Video Section - Only for Invoicing App */}
      {project.slug === "invoicing-app-improving" && (
        <div className="mb-16">
          <h2 className="text-2xl md:text-3xl font-normal text-[#E5E5E5] mb-6 tracking-tight">
            Project Video
          </h2>
          <div className="relative rounded-lg overflow-hidden border border-[#262626] bg-[#0A0A0A] aspect-video">
            <iframe
              src="https://www.youtube.com/embed/XVkP2R5aBvA"
              title="Invoicing App Improving Project Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
          </div>
          <div className="mt-4">
            <a
              href="https://www.youtube.com/watch?v=XVkP2R5aBvA&feature=youtu.be"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[#737373] hover:text-[#A3A3A3] transition-colors duration-200 text-sm font-light"
            >
              Watch on YouTube
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      )}

      {/* Content */}
      <div className="mb-16 space-y-12">
        <div>
          <h2 className="text-xl font-normal text-[#E5E5E5] mb-3 tracking-tight">Overview</h2>
          <p className="leading-relaxed text-[#A3A3A3] text-base font-light">
            {project.content.overview}
          </p>
        </div>
        <div>
          <h2 className="text-xl font-normal text-[#E5E5E5] mb-3 tracking-tight">Challenge</h2>
          <p className="leading-relaxed text-[#A3A3A3] text-base font-light">
            {project.content.challenge}
          </p>
        </div>
        <div>
          <h2 className="text-xl font-normal text-[#E5E5E5] mb-3 tracking-tight">Solution</h2>
          <p className="leading-relaxed text-[#A3A3A3] text-base font-light">
            {project.content.solution}
          </p>
        </div>
        <div className="border-t border-[#171717] pt-8">
          <h2 className="text-xl font-normal text-[#E5E5E5] mb-3 tracking-tight">Outcome</h2>
          <p className="leading-relaxed text-[#E5E5E5] text-base font-light">
            {project.content.outcome}
          </p>
        </div>
        
        {project.slug === "invoicing-app-improving" && (
          <div className="space-y-6">
            <div className="overflow-hidden rounded-lg border border-[#171717] bg-[#0A0A0A]">
              <SafeImage
                src="/images/1_about_project.jpg"
                alt={`${project.title} - About Project`}
                className="w-full h-auto object-contain object-top"
                loading="lazy"
              />
            </div>
            <div className="overflow-hidden rounded-lg border border-[#171717] bg-[#0A0A0A]">
              <SafeImage
                src="/images/invoice21.png"
                alt={`${project.title} - Invoice`}
                className="w-full h-auto object-contain object-top"
                loading="lazy"
              />
            </div>
            <div className="overflow-hidden rounded-lg border border-[#171717] bg-[#0A0A0A]">
              <SafeImage
                src="/images/invoice31.gif"
                alt={`${project.title} - Animation 1`}
                className="w-full h-auto object-contain object-top"
                loading="lazy"
              />
            </div>
            <div className="overflow-hidden rounded-lg border border-[#171717] bg-[#0A0A0A]">
              <SafeImage
                src="/images/invoice32.gif"
                alt={`${project.title} - Animation 2`}
                className="w-full h-auto object-contain object-top"
                loading="lazy"
              />
            </div>
            <div className="overflow-hidden rounded-lg border border-[#171717] bg-[#0A0A0A]">
              <SafeImage
                src="/images/invoice33.gif"
                alt={`${project.title} - Animation 3`}
                className="w-full h-auto object-contain object-top"
                loading="lazy"
              />
            </div>
            <div className="overflow-hidden rounded-lg border border-[#171717] bg-[#0A0A0A]">
              <SafeImage
                src="/images/invoice34.jpg"
                alt={`${project.title} - Screenshot 1`}
                className="w-full h-auto object-contain object-top"
                loading="lazy"
              />
            </div>
            <div className="overflow-hidden rounded-lg border border-[#171717] bg-[#0A0A0A]">
              <SafeImage
                src="/images/invoice35.jpg"
                alt={`${project.title} - Screenshot 2`}
                className="w-full h-auto object-contain object-top"
                loading="lazy"
              />
            </div>
            <div className="overflow-hidden rounded-lg border border-[#171717] bg-[#0A0A0A]">
              <SafeImage
                src="/images/invoice36.jpg"
                alt={`${project.title} - Screenshot 3`}
                className="w-full h-auto object-contain object-top"
                loading="lazy"
              />
            </div>
          </div>
        )}

        {project.slug === "hotel-aggregator-booking-app" && project.images && (
          <div className="space-y-6">
            {project.images.slice(1).map((image, index) => (
              <div key={index}>
                <div className="overflow-hidden rounded border border-[#171717] bg-[#0A0A0A]">
                  <SafeImage
                    src={image}
                    alt={`${project.title} - Image ${index + 1}`}
                    className="w-full h-auto object-cover"
                    loading="lazy"
                  />
                </div>
                {image === "/images/hotteller/research.jpg" && (
                  <div className="mt-6">
                    <h2 className="text-2xl md:text-3xl font-normal text-[#E5E5E5] mb-6 tracking-tight">
                      User Testing / Competitors pain points
                    </h2>
                    <div className="relative rounded-lg overflow-hidden border border-[#262626] bg-[#0A0A0A] aspect-video">
                      <iframe
                        src="https://www.youtube.com/embed/CtftJSHK7HU"
                        title="Hotel Booking App Project Video"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="w-full h-full"
                      />
                    </div>
                    <div className="mt-4">
                      <a
                        href="https://www.youtube.com/watch?v=CtftJSHK7HU"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-[#737373] hover:text-[#A3A3A3] transition-colors duration-200 text-sm font-light"
                      >
                        Watch on YouTube
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  </div>
                )}
                {image === "/images/hotteller/page_17.jpg" && (
                  <div className="mt-6">
                    <div className="relative rounded-lg overflow-hidden border border-[#262626] bg-[#0A0A0A] aspect-video">
                      <iframe
                        src="https://www.youtube.com/embed/B-MG6c-tmmU"
                        title="Hotel Booking App Video"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="w-full h-full"
                      />
                    </div>
                    <div className="mt-4">
                      <a
                        href="https://www.youtube.com/shorts/B-MG6c-tmmU"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-[#737373] hover:text-[#A3A3A3] transition-colors duration-200 text-sm font-light"
                      >
                        Watch on YouTube
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
      </div>
    </div>
  );
}
