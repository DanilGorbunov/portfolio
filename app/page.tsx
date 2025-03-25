"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { Mail, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { projects } from "@/lib/projects";

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);

  return (
    <div className="min-h-screen bg-black" ref={containerRef}>
      <section className="min-h-[80vh] flex items-center justify-center relative pt-20">
        <motion.div 
          className="absolute inset-0 z-0" 
          style={{ opacity, scale }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="h-full w-full flex items-center justify-center">
            <div className="relative h-[64vh] w-[80vw] max-w-5xl">
              <div 
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[32vw] h-[32vw] max-w-xl max-h-xl rounded-full bg-primary/20 blur-3xl"
                style={{ willChange: 'transform' }}
              />
              <div 
                className="absolute top-1/4 right-1/4 w-[16vw] h-[16vw] max-w-xs max-h-xs rounded-full bg-primary/10 blur-2xl"
                style={{ willChange: 'transform' }}
              />
            </div>
          </div>
        </motion.div>

        <div className="container px-6 md:px-12 z-10 max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[1fr_1fr] items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <div className="space-y-2">
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-white"
                >
                  Danil Gorbunov
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                  className="text-xl md:text-2xl text-primary"
                >
                  Product Designer, Code Crafter & AI Innovator
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.2 }}
                  className="max-w-[600px] text-zinc-400 text-lg md:text-xl"
                >
                  Intuitive user experiences, AI automation, and scalable
                  digital products across SaaS, B2B, B2C, and eCommerce.
                </motion.p>
              </div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.3 }}
                className="flex flex-col gap-2 min-[400px]:flex-row"
              >
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
              </motion.div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="flex items-center justify-center"
            >
              <div className="relative">
                <div 
                  className="absolute -inset-0.5 bg-gradient-to-r from-primary/50 to-primary/30 rounded-full blur-sm"
                  style={{ willChange: 'filter' }}
                />
                <Image
                  alt="Danil Gorbunov portrait"
                  className="relative aspect-square overflow-hidden rounded-full object-cover object-center border-4 border-zinc-800"
                  height={400}
                  width={400}
                  src="/images/my_photo.jpg"
                  priority
                  quality={90}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="container px-6 md:px-12 max-w-7xl">
          <div className="space-y-24">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="grid gap-6 md:gap-10 md:grid-cols-[1fr_2fr]"
              >
                {/* Опис (зліва) */}
                <div className="space-y-4">
                  <h3 className="text-xl md:text-2xl font-bold text-white">
                    {project.title}
                  </h3>
                  <p className="text-zinc-400 text-sm md:text-base">
                    {project.description}
                  </p>
                  <Link href={`/portfolio/${project.slug}`}>
                    <Button
                      variant="outline"
                      className="border-zinc-700 text-white hover:bg-zinc-800"
                    >
                      View Project <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>

                {/* Картинка (праворуч) */}
                <div className="overflow-hidden rounded-lg group">
                  <Link href={`/portfolio/${project.slug}`}>
                    <img
                      src={project.thumbnail || "/placeholder.svg"}
                      alt={project.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
