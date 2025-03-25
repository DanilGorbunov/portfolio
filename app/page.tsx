import Link from "next/link";
import Image from "next/image";
import { Mail, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { projects } from "@/lib/projects";

// Static metadata
export const metadata = {
  title: 'Danil Gorbunov - Product Designer & Developer',
  description: 'Portfolio of Danil Gorbunov - Product Designer, Code Crafter & AI Innovator'
};

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <section className="min-h-[80vh] flex items-center justify-center relative pt-20 hero-section">
        {/* Optimized background gradient */}
        <div className="absolute inset-0 z-0 blur-gradient">
          <div className="h-full w-full flex items-center justify-center">
            <div className="relative h-[64vh] w-[80vw] max-w-5xl">
              <div 
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[32vw] h-[32vw] max-w-xl max-h-xl rounded-full bg-gradient-radial from-primary/20 to-transparent"
                style={{ transform: 'translate(-50%, -50%)' }}
              />
            </div>
          </div>
        </div>

        <div className="container px-6 md:px-12 z-10 max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[1fr_1fr] items-center">
            <div className="space-y-6">
              <div className="space-y-2">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-white animate-fade-in">
                  Danil Gorbunov
                </h1>
                <p className="text-xl md:text-2xl text-primary animate-fade-in-delay-1">
                  Product Designer, Code Crafter & AI Innovator
                </p>
                <p className="max-w-[600px] text-zinc-400 text-lg md:text-xl animate-fade-in-delay-2">
                  Intuitive user experiences, AI automation, and scalable
                  digital products across SaaS, B2B, B2C, and eCommerce.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row animate-fade-in-delay-3">
                <Link href="/about" prefetch>
                  <Button className="w-full min-[400px]:w-auto bg-primary hover:bg-primary/90 text-black">
                    About Me
                  </Button>
                </Link>
                <Link href="/contact" prefetch>
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
            <div className="flex items-center justify-center hero-image">
              <div className="relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/50 to-primary/30 rounded-full blur-sm" />
                <Image
                  alt="Danil Gorbunov portrait"
                  className="relative aspect-square overflow-hidden rounded-full object-cover object-center border-4 border-zinc-800"
                  height={400}
                  width={400}
                  src="/images/my_photo.jpg"
                  priority
                  quality={75}
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4eHRoaHSQtJSEkMjU1LS0yMi4qQEBALkE6Iys+Pj5BQUFBQUFBQUFBQUFBQUFBQUH/2wBDAR4eHh4eHiMeHiNFMy8zRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUX/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="container px-6 md:px-12 max-w-7xl">
          <div className="space-y-24">
            {projects.slice(0, 3).map((project, index) => (
              <div
                key={project.id}
                className="grid gap-6 md:gap-10 md:grid-cols-[1fr_2fr] opacity-0 animate-fade-in-up"
                style={{ 
                  animationDelay: `${index * 0.2}s`,
                  viewTransitionName: `project-${project.id}`
                }}
              >
                <div className="space-y-4">
                  <h3 className="text-xl md:text-2xl font-bold text-white">
                    {project.title}
                  </h3>
                  <p className="text-zinc-400 text-sm md:text-base">
                    {project.description}
                  </p>
                  <Link href={`/portfolio/${project.slug}`} prefetch>
                    <Button
                      variant="outline"
                      className="border-zinc-700 text-white hover:bg-zinc-800"
                    >
                      View Project <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>

                <div className="overflow-hidden rounded-lg group">
                  <Link href={`/portfolio/${project.slug}`} prefetch>
                    <Image
                      src={project.thumbnail || "/placeholder.svg"}
                      alt={project.title}
                      width={800}
                      height={450}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
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
