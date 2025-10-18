"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { projects } from "@/lib/projects";

// Featured projects (top 4)
const featuredProjects = projects.slice(0, 4);

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section - ULTRA MINIMAL */}
      <section className="min-h-screen flex items-center justify-center px-6" style={{ position: 'relative', zIndex: 10 }}>
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
            style={{ position: 'relative', zIndex: 10 }}
          >
            <h1 className="text-5xl md:text-6xl font-normal tracking-tight leading-tight">
                  Danil Gorbunov
                </h1>
            <p className="text-xl md:text-2xl font-light opacity-50 mt-4">
              Product Designer / Developer +AI
            </p>
            <p className="text-lg md:text-xl font-light opacity-70 max-w-2xl mx-auto leading-relaxed mt-12">
              Creating digital experiences that merge<br />
              intuitive design with real business impact
            </p>
            <p className="text-sm font-light opacity-30 mt-10">
              Bratislava, Slovakia
            </p>
            <div className="mt-16">
              <Link 
                href="/portfolio"
                className="text-base font-normal underline underline-offset-4 decoration-1 hover:opacity-60 transition-opacity duration-300"
              >
                View work →
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Selected Work Section */}
      <section className="py-40 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h2 className="text-sm uppercase tracking-widest opacity-40 font-normal">
              Selected Work
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 md:gap-32">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <Link href={`/portfolio/${project.slug}`} prefetch={false}>
                  <div className="relative aspect-[16/10] overflow-hidden mb-6">
                    <Image
                      src={project.thumbnail || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:opacity-70 transition-opacity duration-400"
                    />
                  </div>
                  
                  <div className="space-y-3">
                    <h3 className="text-xl md:text-2xl font-normal leading-tight">
                      {project.title}
                    </h3>
                    <p className="text-base md:text-lg font-light opacity-50 leading-relaxed">
                      {project.description.length > 60 
                        ? project.description.substring(0, 60) + "..." 
                        : project.description
                      }
                    </p>
                    <div className="text-base opacity-20">—</div>
                    <p className="text-xs font-light opacity-30">
                      {project.year || '2024'}
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-30"
          >
            <Link 
              href="/portfolio"
              className="text-base font-normal underline underline-offset-4 decoration-1 hover:opacity-60 transition-opacity duration-300"
            >
              View all work →
            </Link>
          </motion.div>
        </div>
      </section>

      {/* About Section - ENHANCED DESIGN */}
      <section className="py-40 px-6 bg-zinc-900/30">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-[60%_40%] gap-25">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Introduction Card */}
              <div className="bg-zinc-800/50 rounded-2xl p-8 border border-zinc-700/50">
                <div className="space-y-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <h2 className="text-xl font-semibold text-white">About Me</h2>
                  </div>
                  
                  <div className="space-y-4 text-base font-light leading-relaxed text-zinc-300">
                    <p>
                      With <span className="text-primary font-medium">30+ commercial projects</span> delivered, I create digital experiences 
                      that merge intuitive design with real business impact across SaaS, B2B, B2C, and eCommerce.
                    </p>
                    <p>
                      My approach combines user research, psychology-driven UI design, and modern 
                      AI-powered workflows to help teams move from concept to launch faster.
                    </p>
                    <p className="text-zinc-400">
                      Based in Bratislava, working with clients globally.
                    </p>
                  </div>
                </div>
              </div>

              {/* Expertise Card */}
              <div className="bg-zinc-800/50 rounded-2xl p-8 border border-zinc-700/50">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <h3 className="text-lg font-semibold text-white">Expertise</h3>
                </div>
                
                <div className="grid grid-cols-2 gap-3">
                  {[
                    "User Research & Testing",
                    "Psychology-driven UI Design", 
                    "Interactive Prototyping",
                    "Design Systems",
                    "Frontend Development",
                    "AI-workflow Integration"
                  ].map((skill, index) => (
                    <div key={index} className="flex items-center space-x-2 text-sm text-zinc-300">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Call to Action */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/about" className="flex-1">
                  <div className="bg-primary hover:bg-primary/90 text-black px-6 py-3 rounded-lg font-medium text-center transition-colors">
                    Full Story →
                  </div>
                </Link>
                <Link href="/contact" className="flex-1">
                  <div className="border border-zinc-700 text-white hover:bg-zinc-800 px-6 py-3 rounded-lg font-medium text-center transition-colors">
                    Get in Touch
                  </div>
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="lg:sticky lg:top-30 flex items-center justify-center lg:justify-start mt-8 lg:mt-0"
            >
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-zinc-600/20 rounded-full blur-xl"></div>
                <div className="relative bg-zinc-800 rounded-full shadow-2xl overflow-hidden p-2">
                  <Image
                    src="/images/my_photo.jpg"
                    alt="Portrait of Danil Gorbunov, a product designer and developer with expertise in AI integration, wearing glasses and a thoughtful expression"
                    width={300}
                    height={300}
                    className="aspect-square overflow-hidden rounded-full object-cover object-center grayscale"
                    priority
                    quality={100}
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section - MINIMAL */}
      <section className="py-25 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <h2 className="text-3xl md:text-4xl font-normal">
              Let's work together
            </h2>
            
            <p className="text-base font-light opacity-70 max-w-md mx-auto leading-relaxed">
              Available for product design projects and design leadership roles
            </p>
            
            <div className="space-y-2 text-base leading-relaxed">
              <div>
                <a 
                  href="mailto:danilgorbunov@gmail.com"
                  className="underline underline-offset-4 decoration-1 hover:opacity-60 transition-opacity duration-300"
                >
                  danilgorbunov@gmail.com
                </a>
                  </div>
              <div>
                <a 
                  href="https://linkedin.com/in/danilgorbunov"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-4 decoration-1 hover:opacity-60 transition-opacity duration-300"
                >
                  LinkedIn →
                </a>
              </div>
          </div>
          </motion.div>
        </div>
      </section>

      {/* Footer - MINIMAL */}
      <footer className="py-15 px-6">
        <div className="max-w-6xl mx-auto text-center">
         
        </div>
      </footer>
    </div>
  );
}