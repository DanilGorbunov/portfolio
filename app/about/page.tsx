"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Download,
  Calendar, 
  MapPin, 
  Code,
  Palette,
  MessageCircle
} from "lucide-react";

const experience = [
  {
    year: "2023 - Present",
    title: "Senior Product Designer",
    company: "AI Innovation Lab",
    location: "Bratislava, Slovakia",
    description: "Leading design for AI-powered SaaS platforms, focusing on user experience for complex data interfaces and machine learning workflows.",
    achievements: ["Increased user engagement by 40%", "Reduced support tickets by 60%", "Led design system implementation"]
  },
  {
    year: "2021 - 2023",
    title: "Product Designer",
    company: "TechStart Solutions",
    location: "Remote",
    description: "Designed mobile and web applications for B2B clients, specializing in dashboard interfaces and data visualization.",
    achievements: ["Designed 15+ successful products", "Improved conversion rates by 25%", "Mentored junior designers"]
  },
  {
    year: "2019 - 2021",
    title: "UX Designer",
    company: "Digital Agency Pro",
    location: "Bratislava, Slovakia",
    description: "Created user-centered designs for e-commerce and corporate websites, focusing on conversion optimization.",
    achievements: ["Increased conversion rates by 35%", "Reduced bounce rate by 50%", "Established UX processes"]
  }
];

const skillCategories = [
  {
    title: "Design",
    icon: Palette,
    skills: [
      { name: "UX/UI Design", level: 95 },
      { name: "User Research", level: 90 },
      { name: "Prototyping", level: 88 },
      { name: "Design Systems", level: 85 },
      { name: "Figma", level: 95 },
      { name: "Adobe Creative Suite", level: 80 }
    ]
  },
  {
    title: "Development",
    icon: Code,
    skills: [
      { name: "React", level: 85 },
      { name: "TypeScript", level: 80 },
      { name: "Next.js", level: 82 },
      { name: "Node.js", level: 75 },
      { name: "Python", level: 70 },
      { name: "Git", level: 90 }
    ]
  },
  {
    title: "Collaboration",
    icon: MessageCircle,
    skills: [
      { name: "Product Strategy", level: 88 },
      { name: "Team Leadership", level: 85 },
      { name: "Client Communication", level: 92 },
      { name: "Agile Methodologies", level: 90 },
      { name: "Mentoring", level: 80 },
      { name: "Stakeholder Management", level: 87 }
    ]
  }
];


export default function AboutPage() {
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
            About <span className="text-primary">Me</span>
          </h1>
          <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
            Passionate about creating exceptional digital experiences through design, 
            technology, and AI innovation.
          </p>
        </motion.div>

        {/* Hero Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Hi, I'm Danil Gorbunov
              </h2>
              <div className="flex items-center space-x-2 text-zinc-400">
                <MapPin className="h-5 w-5" />
                <span>Based in Bratislava, Slovakia</span>
              </div>
      </div>

            <div className="space-y-4 text-zinc-300 leading-relaxed">
              <p>
                I'm a passionate Product Designer with over 12 years of experience creating 
                digital experiences that users love. My journey combines design thinking, 
                technical expertise, and AI innovation to solve complex problems.
              </p>
              <p>
                I specialize in creating intuitive interfaces for AI-powered applications, 
                data-driven dashboards, and scalable SaaS platforms. My approach focuses 
                on understanding user needs and translating them into elegant solutions.
              </p>
              <p>
                When I'm not designing, you can find me exploring new AI tools, contributing 
                to open-source projects, or sharing knowledge with the design community.
              </p>
          </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-black px-8 py-4"
              >
                <Download className="mr-2 h-5 w-5" />
                Download CV
              </Button>
              <Link href="/contact" prefetch={false}>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-zinc-700 text-white hover:bg-zinc-800 px-8 py-4"
                >
                  Get in Touch
                </Button>
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-full max-w-md mx-auto">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-zinc-600/20 rounded-full blur-xl"></div>
              <div className="relative bg-zinc-800 rounded-2xl shadow-2xl overflow-hidden">
                <Image
                  src="/images/my_photo.jpg"
                  alt="Danil Gorbunov - Product Designer"
                  width={400}
                  height={500}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </motion.div>
          </div>


        {/* Experience Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
            Professional <span className="text-primary">Experience</span>
          </h2>
          
          <div className="space-y-8">
            {experience.map((job, index) => (
              <motion.div
                key={job.title}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative bg-zinc-900 rounded-2xl p-8 hover:bg-zinc-800 transition-colors duration-300"
              >
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{job.title}</h3>
                    <div className="text-primary font-medium mb-1">{job.company}</div>
                    <div className="flex items-center space-x-4 text-zinc-400 text-sm">
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4" />
                        <span>{job.year}</span>
                </div>
                      <div className="flex items-center space-x-1">
                        <MapPin className="h-4 w-4" />
                        <span>{job.location}</span>
              </div>
                </div>
              </div>
                </div>
                
                <p className="text-zinc-300 mb-4 leading-relaxed">
                  {job.description}
                </p>
                
                <div>
                  <h4 className="text-sm font-semibold text-white mb-2">Key Achievements:</h4>
                  <ul className="space-y-1">
                    {job.achievements.map((achievement, achievementIndex) => (
                      <li key={achievementIndex} className="text-zinc-400 text-sm flex items-start space-x-2">
                        <span className="text-primary mt-1">•</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Skills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
            Skills & <span className="text-primary">Expertise</span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
                viewport={{ once: true }}
                className="bg-zinc-900 rounded-2xl p-8"
              >
                <div className="flex items-center space-x-3 mb-6">
                  <category.icon className="h-6 w-6 text-primary" />
                  <h3 className="text-xl font-bold text-white">{category.title}</h3>
                </div>
                
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: categoryIndex * 0.2 + skillIndex * 0.05 }}
                      viewport={{ once: true }}
                      className="space-y-2"
                    >
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-zinc-300">{skill.name}</span>
                        <span className="text-sm text-zinc-500">{skill.level}%</span>
              </div>
                      <div className="w-full bg-zinc-800 rounded-full h-2">
                        <motion.div
                          className="bg-primary h-2 rounded-full"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: categoryIndex * 0.2 + skillIndex * 0.05 + 0.3 }}
                          viewport={{ once: true }}
                        />
                </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center bg-zinc-900 rounded-2xl p-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Let's <span className="text-primary">Work Together</span>
          </h2>
          <p className="text-xl text-zinc-400 mb-8 max-w-2xl mx-auto">
            Ready to bring your ideas to life? Let's discuss your next project and create something amazing together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" prefetch={false}>
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-black px-8 py-4"
              >
                Get in Touch
              </Button>
            </Link>
            <Link href="/portfolio" prefetch={false}>
              <Button
                size="lg"
                variant="outline"
                className="border-zinc-700 text-white hover:bg-zinc-800 px-8 py-4"
              >
                View My Work
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}