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
  MapPin
} from "lucide-react";

const experience = [
  {
    year: "2022 - Present",
    title: "Senior/Lead Product Designer",
    company: "B2Stack",
    location: "Bratislava, Slovakia",
    description: "Leading design for AI-powered SaaS platforms and e-commerce solutions, focusing on user experience for complex data interfaces and machine learning workflows.",
    achievements: [
      "Designed E-Commerce AI Chatbot increasing checkout conversion by ~15%",
      "Created LinkShop AI hybrid platform combining link-in-bio with full eCommerce",
      "Designed Fonitix AI voice-based SaaS for restaurants",
      "Designed MRIACRM System with integrated AI analytics",
      "Launched Tesla VIP Trip premium service within 5 days"
    ]
  },
  {
    year: "2022",
    title: "Frontend Developer (Flutter)",
    company: "Twinzo 3D",
    location: "Bratislava, Slovakia",
    description: "Developed SaaS-based warehouse inventory management app for Fortune 500 clients, integrating 3D data visualization with user-centric design approach.",
    achievements: [
      "Enhanced usability and adoption rates through user-centric design",
      "Integrated 3D data visualization for warehouse management",
      "Developed for Fortune 500 clients"
    ]
  },
  {
    year: "2013 - 2022",
    title: "Product Designer & Frontend Developer",
    company: "Decodexin",
    location: "Ukraine",
    description: "Created user-centric designs and developed MVPs for SaaS systems, enabling shop owners to efficiently manage products and developed robust marketplace platforms.",
    achievements: [
      "Created MVP for SaaS system as React developer",
      "Improved workflow automation and simplified product management",
      "Developed robust Marketplace platform with seamless API integration",
      "Enabled real-time product synchronization across network"
    ]
  },
  {
    year: "2010 - 2013",
    title: "UX Designer",
    company: "Delen Web Studio",
    location: "Ukraine",
    description: "Conducted e-commerce user research and optimized WordPress interfaces based on feedback, communicating UX solutions to stakeholders.",
    achievements: [
      "Conducted comprehensive e-commerce user research",
      "Optimized WordPress interfaces based on user feedback",
      "Communicated UX solutions to stakeholders ensuring business alignment"
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

        {/* About Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Hi, I'm <span className="text-primary">Danil Gorbunov</span>
            </h2>
            
            <div className="flex items-center text-zinc-400 mb-6">
              <MapPin className="h-5 w-5 mr-2" />
              <span>Based in Bratislava, Slovakia</span>
            </div>

            <div className="space-y-4 text-zinc-300 leading-relaxed">
              <p>
                With 12+ years of experience in product design and frontend development, 
                I specialize in creating user-centered solutions that bridge the gap between 
                design and technology.
              </p>
              <p>
                My journey began in Ukraine, where I started as a UX Designer and gradually 
                evolved into a full-stack product designer. Today, I lead design initiatives 
                for AI-powered SaaS platforms, helping businesses leverage cutting-edge 
                technology to solve real-world problems.
              </p>
              <p>
                I believe in the power of design thinking, user research, and iterative 
                development to create products that not only look great but also deliver 
                measurable business value.
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
            <div className="relative w-full max-w-sm mx-auto">
              <div className="relative bg-zinc-800 rounded-full shadow-2xl overflow-hidden">
                <Image
                  src="/images/my_photo.jpg"
                  alt="Professional portrait of Danil Gorbunov, a senior product designer and developer specializing in AI-powered SaaS solutions, based in Bratislava, Slovakia"
                  width={300}
                  height={300}
                  className="w-full h-auto object-cover aspect-square grayscale"
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Experience - Timeline for Desktop, Cards for Mobile */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-16 text-center">
            Professional <span className="text-primary">Experience</span>
          </h2>
          
          {/* Mobile Version - Cards */}
          <div className="block lg:hidden space-y-8">
            {experience.map((job, index) => (
              <motion.div
                key={job.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-zinc-900/50 rounded-xl p-6 border border-zinc-800/50 hover:border-primary/30 transition-all duration-300"
              >
                <div className="flex flex-col mb-4">
                  <h3 className="text-xl font-bold text-white mb-1">
                    {job.title}
                  </h3>
                  <div className="text-primary font-medium mb-2">{job.company}</div>
                  <div className="flex items-center text-zinc-400 text-sm">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>{job.year}</span>
                  </div>
                </div>
                
                <div className="flex items-center text-zinc-400 text-sm mb-4">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span>{job.location}</span>
                </div>

                <p className="text-zinc-300 mb-6 leading-relaxed">
                  {job.description}
                </p>

                <div>
                  <h4 className="text-sm font-semibold text-white mb-3 flex items-center">
                    <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                    Key Achievements
                  </h4>
                  <ul className="space-y-2">
                    {job.achievements.map((achievement, achievementIndex) => (
                      <li
                        key={achievementIndex}
                        className="text-zinc-400 text-sm flex items-start space-x-3"
                      >
                        <span className="text-primary mt-1 text-lg">•</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Desktop Version - Timeline */}
          <div className="hidden lg:block relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-zinc-600 to-zinc-800"></div>
            
            <div className="space-y-12">
              {experience.map((job, index) => (
                <motion.div
                  key={job.title}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2, type: "spring", stiffness: 100 }}
                  viewport={{ once: true }}
                  className={`relative flex items-start ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} gap-8`}
                >
                  {/* Timeline Dot */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.2 + 0.3, type: "spring", stiffness: 200 }}
                    viewport={{ once: true }}
                    className="relative z-10 flex-shrink-0 w-16 h-16 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center shadow-lg shadow-primary/25"
                  >
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="w-8 h-8 bg-white rounded-full flex items-center justify-center"
                    >
                      <span className="text-xs font-bold text-black">{index + 1}</span>
                    </motion.div>
                    
                    {/* Pulse Animation */}
                    <motion.div
                      animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0, 0.5] }}
                      transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                      className="absolute inset-0 bg-primary rounded-full"
                    />
                  </motion.div>

                  {/* Content Card */}
                  <motion.div
                    whileHover={{ 
                      scale: 1.02, 
                      y: -5,
                      boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3)"
                    }}
                    transition={{ duration: 0.3, type: "spring", stiffness: 300 }}
                    className={`flex-1 max-w-lg bg-gradient-to-br from-zinc-900 to-zinc-800 rounded-2xl p-8 border border-zinc-700/50 hover:border-primary/30 transition-all duration-300 ${
                      index % 2 === 0 ? 'ml-8' : 'mr-8'
                    }`}
                  >
                    {/* Year Badge */}
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.2 + 0.4 }}
                      viewport={{ once: true }}
                      className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4"
                    >
                      <Calendar className="h-3 w-3 mr-1" />
                      {job.year}
                    </motion.div>

                    {/* Title and Company */}
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.2 + 0.5 }}
                      viewport={{ once: true }}
                    >
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                        {job.title}
                      </h3>
                      <div className="text-primary font-medium mb-3">{job.company}</div>
                      
                      <div className="flex items-center text-zinc-400 text-sm mb-4">
                        <MapPin className="h-4 w-4 mr-1" />
                        <span>{job.location}</span>
                      </div>
                    </motion.div>

                    {/* Description */}
                    <motion.p
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.2 + 0.6 }}
                      viewport={{ once: true }}
                      className="text-zinc-300 mb-6 leading-relaxed"
                    >
                      {job.description}
                    </motion.p>

                    {/* Achievements */}
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.2 + 0.7 }}
                      viewport={{ once: true }}
                    >
                      <h4 className="text-sm font-semibold text-white mb-3 flex items-center">
                        <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                        Key Achievements
                      </h4>
                      <ul className="space-y-2">
                        {job.achievements.map((achievement, achievementIndex) => (
                          <motion.li
                            key={achievementIndex}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.4, delay: index * 0.2 + 0.8 + achievementIndex * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ x: 5 }}
                            className="text-zinc-400 text-sm flex items-start space-x-3 group/achievement"
                          >
                            <motion.span
                              whileHover={{ scale: 1.2, rotate: 90 }}
                              className="text-primary mt-1 text-lg group-hover/achievement:text-white transition-colors"
                            >
                              →
                            </motion.span>
                            <span className="group-hover/achievement:text-zinc-300 transition-colors">
                              {achievement}
                            </span>
                          </motion.li>
                        ))}
                      </ul>
                    </motion.div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}