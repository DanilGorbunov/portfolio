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
              <div className="h-8 md:h-9">Product Designer</div>
              <div className="h-8 md:h-9">Full-Stack Builder (AI)</div>
              <div className="h-8 md:h-9">Mentor</div>
            </h1>
            <p className="mt-6 text-base md:text-lg text-[#A3A3A3] leading-relaxed font-light max-w-[448px]">
              Specialized in e-commerce, rapid prototyping, and building AI products
            </p>
          </motion.div>
        </section>

        {/* Case Studies Section */}
        <section className="pt-8 md:pt-16 pb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {sortedProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.3 + index * 0.05, ease: "easeOut" }}
              >
                <Link 
                  href={`/portfolio/${project.slug}`}
                  className="block group h-full"
                  onClick={handleLinkClick}
                >
                  <div className="h-full flex flex-col border border-[#171717] rounded-lg overflow-hidden bg-[#0A0A0A] hover:border-[#262626] transition-colors duration-200">
                    <div className="relative overflow-hidden aspect-video bg-[#0F0F0F]">
                      <SafeImage
                        src={project.thumbnail || project.fullImage || "/placeholder.svg"}
                        alt={project.title}
                        className={`w-full h-full group-hover:opacity-90 transition-opacity duration-200 ${
                          project.slug === "b2c-b2b-delivery-app"
                            ? "object-cover object-top"
                            : "object-cover object-center"
                        }`}
                        loading="lazy"
                      />
                      {/* Overlay to reduce visual clutter on dense thumbnails (e.g. dashboard, multi-screen mockups) */}
                      <div
                        className="absolute inset-0 pointer-events-none"
                        aria-hidden
                        style={{
                          background: "linear-gradient(to top, rgba(10,10,10,0.85) 0%, rgba(10,10,10,0.25) 45%, rgba(10,10,10,0.15) 100%)",
                        }}
                      />
                    </div>
                    <div className="p-6 flex-1 flex flex-col">
                      <h3 className="text-xl md:text-2xl font-normal text-[#E5E5E5] mb-3 group-hover:text-[#F5F5F5] transition-colors duration-200 tracking-tight">
                        {project.title}
                      </h3>
                      <p className="text-sm text-[#A3A3A3] leading-relaxed font-light line-clamp-3 flex-1">
                        {project.description}
                      </p>
                      <div className="flex justify-end mt-4 pt-4 border-t border-[#171717]">
                        <svg 
                          className="h-5 w-5 text-[#737373] group-hover:text-[#A3A3A3] group-hover:translate-y-0.5 transition-all duration-200" 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
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