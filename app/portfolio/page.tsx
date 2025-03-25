import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ProjectCard } from "@/components/project-card"
import { projects } from "@/lib/projects"

export default function PortfolioPage() {
  return (
    <div className="container px-4 py-12 md:px-6 md:py-24 bg-black">
      <div className="mb-8 flex items-center">
        <Link href="/">
          <Button variant="ghost" size="sm" className="text-zinc-400 hover:text-white">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
        </Link>
      </div>
      <div className="mb-12 space-y-4">
        <h1 className="text-4xl font-bold tracking-tight text-white">Portfolio</h1>
        <p className="max-w-[700px] text-zinc-400">
          A collection of my work across various industries and platforms. Each project represents a unique challenge
          and solution.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  )
}

