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
      <section className="min-h-screen flex items-center justify-center px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
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

      {/* About Section - WITH PHOTO */}
      <section className="py-40 px-6 bg-zinc-900/30">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-[55%_45%] gap-25">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-12"
            >
              <div className="text-base opacity-20">—</div>
              
              <div className="space-y-6 text-base font-light leading-relaxed opacity-80">
                <p>
                  With 30+ commercial projects delivered, I create digital experiences 
                  that merge intuitive design with real business impact across SaaS, B2B, B2C, and eCommerce.
                </p>
                <p>
                  My approach combines user research, psychology-driven UI design, and modern 
                  AI-powered workflows to help teams move from concept to launch faster.
                </p>
                <p>
                  Based in Bratislava, working with clients globally.
                </p>
              </div>

              <div className="text-base opacity-20">—</div>

              <div>
                <h3 className="text-sm opacity-40 mb-6">Expertise</h3>
                <div className="space-y-2 text-base font-light opacity-70">
                  <div>User Research & Testing</div>
                  <div>Psychology-driven UI Design</div>
                  <div>Interactive Prototyping</div>
                  <div>Design Systems</div>
                  <div>Frontend Development</div>
                  <div>AI-workflow Integration</div>
                </div>
              </div>

              <div className="text-base opacity-20">—</div>

              <Link 
                href="/about"
                className="text-base font-normal underline underline-offset-4 decoration-1 hover:opacity-60 transition-opacity duration-300"
              >
                Full story →
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="lg:sticky lg:top-30"
            >
              <div className="relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/50 to-primary/30 rounded-full blur-sm"></div>
                <Image
                  src="/images/my_photo.jpg"
                  alt="Danil Gorbunov - Product Designer / Developer +AI"
                  width={300}
                  height={300}
                  className="relative aspect-square overflow-hidden rounded-full object-cover object-center border-4 border-zinc-800"
                  priority
                  quality={100}
                />
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