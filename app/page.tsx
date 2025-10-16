import Link from "next/link";
import Image from "next/image";
import { Mail, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { projects } from "@/lib/projects";

// Static metadata
export const metadata = {
  title: "Danil Gorbunov - Product Designer & Developer",
  description:
    "Portfolio of Danil Gorbunov - Product Designer, Code Crafter & AI Innovator",
};

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <section className="min-h-[80vh] flex items-center justify-center pt-20">
        <div className="container px-6 md:px-12 max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[1fr_1fr] items-center">
            <div className="space-y-6">
              <div className="space-y-2">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-white">
                  Danil Gorbunov
                </h1>
                <p className="text-xl md:text-2xl text-primary">
                  Product Designer, UX/UI + AI Design, Classic & AI Prototyping and Development
                </p>
                <p className="max-w-[600px] text-zinc-400 text-lg md:text-xl">
                  Intuitive user experiences, AI automation, and scalable
                  digital products across SaaS, B2B, B2C, and eCommerce.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/about">
                  <Button className="w-full min-[400px]:w-auto bg-primary hover:bg-primary/90 text-black">
                    About Me
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button
                    className="w-full min-[400px]:w-auto"
                    variant="outline"
                  >
                    <Mail className="mr-2 h-4 w-4" />
                    Contact
                  </Button>
                </Link>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative">
                <Image
                  alt="Danil Gorbunov portrait"
                  className="relative aspect-square overflow-hidden rounded-full object-cover object-center border-4 border-zinc-800 grayscale hover:grayscale-0 transition-all duration-300"
                  height={400}
                  width={400}
                  src="/images/my_photo.jpg"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container px-6 md:px-12 max-w-7xl">
          <div className="space-y-16">
            {projects.map((project) => (
              <div
                key={project.id}
                className="grid gap-6 md:gap-10 md:grid-cols-[1fr_2fr]"
              >
                <div className="space-y-4">
                  <h3 className="text-xl md:text-2xl font-bold text-white">
                    {project.title}
                  </h3>
                  <p className="text-zinc-400 text-sm md:text-base">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 text-xs bg-zinc-800 text-zinc-300 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Link href={`/portfolio/${project.slug}`}>
                    <Button
                      variant="outline"
                      className="mt-2.5 border-zinc-700 text-white hover:bg-zinc-800"
                    >
                      View Project <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>

                <div className="overflow-hidden rounded-lg">
                  <Link href={`/portfolio/${project.slug}`}>
                    <Image
                      src={project.thumbnail || "/placeholder.svg"}
                      alt={project.title}
                      width={800}
                      height={450}
                      className="h-full w-full object-cover"
                      loading="lazy"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px"
                    />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
