"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Download,
  Calendar, 
  MapPin,
  ExternalLink
} from "lucide-react";

const experience = [
  {
    year: "May 2022 - Present",
    title: "Senior product designer",
    company: "B2stack",
    description: "Led design and delivery of AI products (E-Commerce AI Chatbot, Conversational AI), reducing AI model costs by ~32–60% and delivering measurable business impact.",
    achievements: [
      "Adopted coding-first MVP and AI prototyping, accelerating product launches by 45–55%.",
      "Established an AI development system, preserving ~$1.1M in investments and securing $300k+ in additional contracts.",
      "Achieved go-to-market: 1200+ paying customers in 7 months, generating $0.9M+ in first-year revenue.",
      "Ensured WCAG 2.2 AAA compliance for key SaaS dashboards.",
      "Mentored designers on AI prototyping"
    ],
    additionalProjects: [
      {
        title: "Fonitix AI — AI Voice SaaS (Restaurants)",
        description: "Built AI-voice SaaS, reduced missed calls to zero (~$3,000/month saved), optimized AI infrastructure (-45% API costs)."
      },
      {
        title: "Xproid E-Commerce AI Chatbot",
        description: "Developed main web app in 12 weeks, increased checkout conversion ~15% via automated AI interactions (FAQ, guided search, upsell)."
      },
      {
        title: "Twinzo 3D – SaaS Inventory Platform",
        description: "Built warehouse platform with real-time 3D visualization, improving adoption and efficiency."
      },
      {
        title: "MRIACRM System",
        description: "Implemented rapid prototyping for JIRA-based CRM, delivering predictive insights, reduced dev cycle from 5–6 months to ~3 months."
      },
      {
        title: "Educational Literacy Platform (Valor Software)",
        description: "Created design system (200+ components) for multi-role educational platform, enabling personalized, accessible learning and successful pilot launch."
      }
    ]
  },
  {
    year: "May 2013 - Feb 2022",
    title: "Lead product designer",
    company: "Decodexin (Krasiva)",
    description: "Led team to design and launch a scalable marketplace platform, securing $30k+ early investment.",
    achievements: [
      "Delivered WordPress-MVP SaaS, enabling store owners to update products directly; scaled to hundreds of stores with real-time API sync.",
      "Achieved +18–20% sales and ~$70k annual savings per client.",
      "Optimized workflows with collaborative prototyping & agile practices, boosting team productivity ~25-30%."
    ]
  },
  {
    year: "2010 - 2013",
    title: "UX/UI Designer",
    company: "Delen Studio",
    description: "Led brand launches, website design, and digital marketing campaigns for global clients.",
    achievements: [
      "Conducted UX research, optimized WordPress interfaces, and implemented UX solutions aligned with business goals."
    ]
  }
];

const skills = {
  "Design & Prototyping": ["Figma", "Adobe", "AI Tools"],
  "Methods & Frameworks": ["Design Thinking", "Agile & Scrum", "Lean Design", "Systems Thinking"],
  "UX/UI & Research": ["User Research", "Usability Testing", "Information Architecture"],
  "Technical": ["React", "Flutter", "PHP", "Python", "Wordpress", "Supabase", "Git", "AI/ML tools", "Cursor"],
  "Collaboration": ["Storytelling", "Presentation", "Workshop", "Mentorship", "Ecommerce"]
};

const education = [
  "MSc User Experience Design – Caledonian University, Glasgow, Scotland",
  "MSc Computer Science – Shipbuilding University, Mykolaiv, Ukraine",
  "IT STEP Academy (C++, C#)",
  "BeetRoot (HTML, CSS, JS, React, PHP Backend)"
];

const languages = [
  { name: "English", level: "B2" },
  { name: "Ukrainian", level: "Native" },
  { name: "Russian", level: "Native" },
  { name: "Slovak", level: "Beginner" }
];

const achievements = [
  "Marathon finisher · 42km, 2025",
  "QA Open Conference · Globallogic, 1st place in PM in team work, 2022",
  "Golden Byte Startup battle, 2018",
  "Black belt Hapkido: mentoring of martial art & meditation, 2017 - Present",
  "Lecturer / Mentor: Led AI workshops for beginners to lead designers; mentored developers and guided startup projects including onyxcoach.com, 2023 - Present"
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] pt-20">
      <div className="container mx-auto px-6">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-normal text-[#E5E5E5] mb-4 tracking-tight">
            Danil Gorbunov
          </h1>
          <div className="text-[#A3A3A3] text-base font-light mb-6 space-y-1">
            <p>+380 93 448 6559 • danilgorbunov@gmail.com • linkedin.com/in/danilgorbunov/ • Portfolio</p>
          </div>
          
          <div className="mb-8">
            <h2 className="text-2xl md:text-3xl font-normal text-[#E5E5E5] mb-4 tracking-tight">
              SENIOR PRODUCT DESIGNER, FULLSTACK AI DEVELOPER
            </h2>
            <p className="text-[#A3A3A3] text-base leading-relaxed font-light max-w-3xl">
              Product Designer with 10+ years in digital products and intelligent systems. Skilled in strategic design, agile methods, and accessibility. Delivers full-stack products from prototype to production using AI tools, with proven, real-world results. Mentor and community builder, creating user-focused, high-impact experiences
            </p>
          </div>

          <Button
            size="lg"
            className="bg-[#0A0A0A] hover:bg-[#171717] text-[#E5E5E5] border border-[#262626] px-8 py-4 font-normal transition-colors duration-200"
            onClick={() => {
              const link = document.createElement('a');
              link.href = '/Prod_Design_Danil Gorbunov.pdf';
              link.download = 'Prod_Design_Danil Gorbunov.pdf';
              document.body.appendChild(link);
              link.click();
              document.body.removeChild(link);
            }}
          >
            <Download className="mr-2 h-5 w-5 text-white" />
            Download CV
          </Button>
        </motion.div>

        {/* Experience Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-normal text-[#E5E5E5] mb-12 tracking-tight">
            EXPERIENCE
          </h2>
          
          <div className="space-y-12">
            {experience.map((job, index) => (
              <motion.div
                key={job.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="border-b border-[#262626] pb-12 last:border-b-0 last:pb-0"
              >
                <div className="mb-4">
                  <h3 className="text-xl md:text-2xl font-normal text-[#E5E5E5] mb-1">
                    {job.title} at {job.company}
                  </h3>
                  <div className="text-[#737373] text-sm font-light mb-4">
                    {job.year}
                  </div>
                </div>
                
                <p className="text-[#A3A3A3] mb-6 leading-relaxed text-base font-light">
                  {job.description}
                </p>

                <ul className="space-y-3 mb-6">
                  {job.achievements.map((achievement, achievementIndex) => (
                    <li
                      key={achievementIndex}
                      className="text-[#A3A3A3] text-base flex items-start space-x-3 font-light"
                    >
                      <span className="text-[#525252] mt-1 text-sm">•</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>

                {job.additionalProjects && (
                  <div className="mt-8 pt-8 border-t border-[#262626]">
                    <h4 className="text-sm font-light text-[#737373] uppercase tracking-wider mb-4">
                      Additional Projects (Contract / Part-time)
                    </h4>
                    <div className="space-y-6">
                      {job.additionalProjects.map((project, projectIndex) => (
                        <div key={projectIndex} className="mb-4">
                          <h5 className="text-base font-normal text-[#E5E5E5] mb-2">
                            {project.title}
                          </h5>
                          <p className="text-[#A3A3A3] text-sm leading-relaxed font-light">
                            {project.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-normal text-[#E5E5E5] mb-12 tracking-tight">
            SKILLS
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {Object.entries(skills).map(([category, items], index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="mb-6"
              >
                <h3 className="text-base font-normal text-[#E5E5E5] mb-3">
                  {category}:
                </h3>
                <p className="text-[#A3A3A3] text-sm font-light leading-relaxed">
                  {items.join(", ")}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Education Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-normal text-[#E5E5E5] mb-12 tracking-tight">
            EDUCATION
          </h2>
          
          <div className="space-y-3">
            {education.map((edu, index) => (
              <motion.p
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="text-[#A3A3A3] text-base font-light"
              >
                {edu}
              </motion.p>
            ))}
          </div>
        </motion.div>

        {/* Languages Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-normal text-[#E5E5E5] mb-12 tracking-tight">
            LANGUAGES
          </h2>
          
          <div className="space-y-2">
            {languages.map((lang, index) => (
              <motion.p
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="text-[#A3A3A3] text-base font-light"
              >
                {lang.name} - {lang.level}
              </motion.p>
            ))}
          </div>
        </motion.div>

        {/* Achievements & Lectures Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-normal text-[#E5E5E5] mb-12 tracking-tight">
            ACHIEVEMENTS & LECTURES
          </h2>
          
          <div className="space-y-3">
            {achievements.map((achievement, index) => (
              <motion.p
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="text-[#A3A3A3] text-base font-light"
              >
                {achievement}
              </motion.p>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
