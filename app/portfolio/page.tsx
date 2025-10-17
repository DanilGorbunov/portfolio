"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Calendar } from "lucide-react";
import { projects } from "@/lib/projects";

export default function PortfolioPage() {
  // Sort projects by newest first by default
  const sortedProjects = [...projects].sort((a, b) => (b.year || 2024) - (a.year || 2024));

  return (
    <div className="min-h-screen bg-black pt-20">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            My <span className="text-primary">Portfolio</span>
          </h1>
          <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
            A comprehensive collection of my design work, showcasing expertise in 
            AI integration, user experience design, and technical innovation.
          </p>
        </motion.div>


        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {sortedProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="group relative bg-zinc-900 rounded-2xl overflow-hidden hover:bg-zinc-800 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={project.thumbnail || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors duration-200">
                      {project.title}
                    </h3>
                    <div className="flex items-center text-zinc-400 text-sm">
                      <Calendar className="h-4 w-4 mr-1" />
                      {project.year || '2024'}
                    </div>
                  </div>
                  
                  <p className="text-zinc-400 mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.slice(0, 4).map((tag) => (
                      <Badge
                        key={tag}
                        variant="secondary"
                        className="bg-zinc-800 text-zinc-300 hover:bg-zinc-700 text-xs"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  
                  <Link href={`/portfolio/${project.slug}`} prefetch={false}>
                    <Button
                      variant="ghost"
                      className="w-full text-primary hover:text-white hover:bg-primary/10"
                    >
                      View Case Study
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </motion.div>
            ))}
        </motion.div>

        {/* Back to Home */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <Link href="/" prefetch={false}>
            <Button
              variant="outline"
              className="border-zinc-700 text-zinc-300 hover:bg-zinc-800"
            >
              ← Back to Home
            </Button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}