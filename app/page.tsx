"use client";

import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { projects } from "@/lib/projects";
import { SafeImage } from "@/components/safe-image";

export default function Portfolio() {
  // Sort projects by newest first by default
  const sortedProjects = [...projects].sort((a, b) => (b.year || 2024) - (a.year || 2024));

  // Restore scroll position on mount
  useEffect(() => {
    const savedScrollPosition = sessionStorage.getItem('casesScrollPosition');
    if (savedScrollPosition) {
      // Use setTimeout to ensure the page is fully rendered
      setTimeout(() => {
        window.scrollTo(0, parseInt(savedScrollPosition, 10));
        sessionStorage.removeItem('casesScrollPosition');
      }, 100);
    }
  }, []);

  // Save scroll position before navigation
  const handleLinkClick = () => {
    sessionStorage.setItem('casesScrollPosition', window.scrollY.toString());
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A]">
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Hero Section - Product-focused introduction */}
        <section className="pt-16 pb-12 md:pt-20 md:pb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="max-w-3xl"
          >
            <h1 className="text-2xl md:text-3xl font-normal text-[#E5E5E5] leading-normal tracking-tight">
              <div className="h-8 md:h-9">Product Designer (UX/UI)</div>
              <div className="h-8 md:h-9">Developer (AI)</div>
              <div className="h-8 md:h-9">Mentor</div>
            </h1>
          </motion.div>
        </section>

        {/* Case Studies Section */}
        <section className="pb-24">
          {/* Projects List */}
          <div className="space-y-0">
            {sortedProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.3 + index * 0.05, ease: "easeOut" }}
              >
                <Link 
                  href={`/portfolio/${project.slug}`}
                  className="block group"
                  onClick={handleLinkClick}
                >
                  <div className="py-8 border-b border-[#171717] hover:border-[#262626] transition-colors duration-200">
                    <div className="grid grid-cols-1 md:grid-cols-[300px_1fr] gap-6 items-start">
                      <div className="relative overflow-hidden rounded border border-[#171717] bg-[#0A0A0A] aspect-video md:aspect-auto md:h-48 group-hover:border-[#262626] transition-colors duration-200">
                        <SafeImage
                          src={project.thumbnail || project.fullImage || "/placeholder.svg"}
                          alt={project.title}
                          className="w-full h-full object-cover group-hover:opacity-90 transition-opacity duration-200"
                          loading="lazy"
                        />
                      </div>
                      <div className="flex-1">
                        <div className="text-xs uppercase tracking-wider text-[#737373] font-light mb-2 flex items-center gap-2">
                          <span>{project.tags.slice(0, 2).join(" • ").toUpperCase()}</span>
                          <svg 
                            className="h-3 w-3 text-[#737373] group-hover:text-[#A3A3A3] transition-colors duration-200" 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                        <h3 className="text-2xl md:text-3xl font-normal text-[#E5E5E5] mb-3 group-hover:text-[#F5F5F5] transition-colors duration-200 tracking-tight">
                          {project.title}
                        </h3>
                        <p className="text-base text-[#A3A3A3] leading-relaxed font-light max-w-[448px]">
                          {project.description}
                        </p>
                      </div>
                    </div>
                    <div className="flex justify-end mt-4">
                      <svg 
                        className="h-5 w-5 text-[#737373] group-hover:text-[#A3A3A3] group-hover:translate-y-1 transition-all duration-200" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}