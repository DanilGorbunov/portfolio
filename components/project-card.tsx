import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import type { Project } from "@/lib/projects"

interface ProjectCardProps {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link href={`/portfolio/${project.slug}`} className="block h-full">
      <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 bg-zinc-800 border-zinc-700 h-full cursor-pointer group hover:border-primary/50">
        <div className="aspect-video w-full overflow-hidden">
          <img
            src={project.thumbnail || "/placeholder.svg"}
            alt={project.title}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <CardContent className="p-4">
          <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors duration-300">{project.title}</h3>
          <p className="mt-2 line-clamp-2 text-zinc-400 group-hover:text-zinc-300 transition-colors duration-300">{project.description}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="bg-zinc-700 text-zinc-200 group-hover:bg-zinc-600 transition-colors duration-300">
                {tag}
              </Badge>
            ))}
          </div>
        </CardContent>
        <CardFooter className="p-4 pt-0 flex justify-between items-center">
          <span className="text-sm text-zinc-500 group-hover:text-zinc-400 transition-colors duration-300">{project.year}</span>
          <ArrowUpRight className="h-4 w-4 text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
        </CardFooter>
      </Card>
    </Link>
  )
}

