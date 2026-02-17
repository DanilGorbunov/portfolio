"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { SafeImage } from "@/components/safe-image";
import {
  Download,
  Briefcase,
  GraduationCap,
  Award,
  Code,
  Users,
  ExternalLink
} from "lucide-react";

// Timeline items with dates for sorting
const timelineItems = [
  {
    id: "present",
    type: "work",
    year: "2022",
    date: "2022-05",
    title: "Senior Product Designer",
    subtitle: "B2stack",
    description: "Owned end-to-end AI product lifecycle (discovery → architecture → validation → GTM → revenue). Defined AI roadmap aligned with monetization and scalability strategy.",
    details: [
      "Reduced AI infrastructure costs by 32–60%, improving unit economics and extending runway",
      "Implemented AI-first MVP framework, accelerating product releases by 45–55%",
      "Contributed to go-to-market execution, reaching 1200+ paying customers within 7 months",
      "Increased onboarding completion by 18% and reduced churn through conversational UX optimization",
      "Led cross-functional teams across product, AI engineering, and marketing",
      "Mentored 4 designers, reducing internal prototyping time by ~35%"
    ],
    additionalProjects: [
      {
        title: "Fonitix AI – AI Voice SaaS (Restaurant Industry)",
        description: "Designed AI call system using Telecommunication API + OpenAI API. Built backend logic in Python (FastAPI). Implemented token-level cost optimization (-43% AI API costs). Reduced missed calls to zero (~$3,000/month saved per location). Delivered production-ready solution within 10 weeks.",
        website: "https://fonitix.ai/"
      },
      {
        title: "Xproid – E-commerce AI Chatbot",
        description: "Architected conversational AI using OpenAI API. Led UX and technical architecture (React frontend + backend integrations). Increased checkout conversion by ~15%. Delivered validated product within 12 weeks.",
        website: "https://xproid.com/"
      },
      {
        title: "Twinzo 3D – SaaS Inventory Platform",
        description: "Rapidly onboarded into 3D warehouse domain. Designed real-time inventory visualization workflows. Improved internal adoption and operational efficiency. Delivered MVP within 12 weeks.",
        website: "https://www.twinzo.com/"
      },
      {
        title: "MRIACRM – Predictive CRM System",
        description: "Conducted stakeholder workshops and requirement discovery. Built JIRA-integrated UX/UI/AI First prototype for predictive insights. Reduced development cycle from 5–6 months to ~3 months via early validation.",
        website: "https://mriacrm.com/"
      },
      {
        title: "Educational Literacy Platform (Valor Software, NDA)",
        description: "Designed and implemented scalable design system (200+ components). Enabled multi-role SaaS architecture. Accelerated feature rollout by ~30%. Supported successful enterprise pilot launch.",
        website: "https://valor-software.com/"
      }
    ]
  },
  {
    id: "lectures",
    type: "achievement",
    year: "",
    date: "2023-01",
    title: "Lectures",
    subtitle: "AI Workshops & Mentorship",
    description: "Led AI workshops (2023–Present); mentored designers and developers; guided startup initiatives."
  },
  {
    id: "achievement-2022",
    type: "achievement",
    year: "2022",
    date: "2022-06",
    title: "QA Open Conference",
    subtitle: "Globallogic",
    description: "1st place in PM in team work"
  },
  {
    id: "work-2013",
    type: "work",
    year: "2013",
    date: "2013-05",
    title: "Lead Product Designer",
    subtitle: "Decodexin (Krasiva)",
    description: "Led design and launch of scalable marketplace platform. Secured $30k+ early-stage investment.",
    details: [
      "Increased client sales by 18–20%",
      "Generated ~$70k annual operational savings per client",
      "Improved team productivity by 25–30% via collaborative prototyping"
    ]
  },
  {
    id: "achievement-2018",
    type: "achievement",
    year: "2018",
    date: "2018-01",
    title: "Golden Byte Startup Battle",
    subtitle: "Winner",
    description: "Competed and won in startup battle competition"
  },
  {
    id: "achievement-2017",
    type: "achievement",
    year: "2017",
    date: "2017-01",
    title: "Black Belt Hapkido",
    subtitle: "Martial Arts & Meditation",
    description: "Achieved black belt and began mentoring martial art & meditation, continuing to present"
  },
  {
    id: "work-2010",
    type: "work",
    year: "2010",
    date: "2010-01",
    title: "UX/UI Designer",
    subtitle: "Delen Studio",
    description: "Led brand launches and digital campaigns for international clients. Conducted UX research and conversion optimization. Delivered business-aligned WordPress solutions.",
    details: []
  },
  {
    id: "edu-msc-ux",
    type: "education",
    year: "2010",
    date: "2010-09",
    title: "MSc User Experience Design",
    subtitle: "Caledonian University, Glasgow, Scotland",
    description: "Master's degree in User Experience Design"
  },
  {
    id: "edu-msc-cs",
    type: "education",
    year: "2010",
    date: "2010-09",
    title: "MSc Computer Science",
    subtitle: "Shipbuilding University, Mykolaiv, Ukraine",
    description: "Master's degree in Computer Science"
  },
  {
    id: "edu-step",
    type: "education",
    year: "2008",
    date: "2008-01",
    title: "IT STEP Academy",
    subtitle: "C++, C#",
    description: "Technical training in programming languages"
  },
  {
    id: "edu-beetroot",
    type: "education",
    year: "2007",
    date: "2007-01",
    title: "BeetRoot Academy",
    subtitle: "HTML, CSS, JS, React, PHP Backend",
    description: "Full-stack web development training"
  },
  {
    id: "skills",
    type: "skills",
    year: "",
    date: "2000-01",
    title: "Skills",
    subtitle: "",
    description: "",
    isSkills: true
  },
  {
    id: "languages",
    type: "languages",
    year: "",
    date: "1999-01",
    title: "Languages",
    subtitle: "",
    description: "",
    isLanguages: true
  }
].sort((a, b) => {
  // Define type priority: work first, then education, then achievement, then skills, then languages
  const typePriority: { [key: string]: number } = {
    work: 1,
    education: 2,
    achievement: 3,
    skills: 4,
    languages: 5
  };
  
  // First sort by type priority
  const typeDiff = (typePriority[a.type] || 999) - (typePriority[b.type] || 999);
  if (typeDiff !== 0) {
    return typeDiff;
  }
  
  // Within same type, sort by date descending (newest first)
  return b.date.localeCompare(a.date);
});

const skills = {
  "Core Competencies": ["Product Ownership", "AI-Driven Product Strategy", "Revenue Optimization", "Hypothesis Validation", "Stakeholder Leadership", "Scalable Design Systems"],
  "Technical Skills": ["LLM Integration (OpenAI API, Claude API)", "Prompt Engineering & Cost Optimization", "RAG Systems", "Embeddings", "Python (FastAPI)", "React", "Next.js", "Supabase", "SQL", "Stripe Integration", "Voice AI APIs", "Git", "Cursor IDE"]
};

const languages = [
  { name: "English", level: "Professional working proficiency" },
  { name: "Ukrainian", level: "Native" },
  { name: "Russian", level: "Native" },
  { name: "Slovak", level: "Beginner" }
];

const getIcon = (type: string) => {
  switch (type) {
    case "work":
      return <Briefcase className="w-5 h-5" />;
    case "education":
      return <GraduationCap className="w-5 h-5" />;
    case "achievement":
      return <Award className="w-5 h-5" />;
    case "skills":
      return <Code className="w-5 h-5" />;
    case "languages":
      return <Users className="w-5 h-5" />;
    default:
      return <Code className="w-5 h-5" />;
  }
};

const getTypeColor = (type: string) => {
  switch (type) {
    case "work":
      return "border-[#3B82F6] bg-[#1E3A5F]/20";
    case "education":
      return "border-[#10B981] bg-[#064E3B]/20";
    case "achievement":
      return "border-[#F59E0B] bg-[#78350F]/20";
    case "skills":
      return "border-[#8B5CF6] bg-[#4C1D95]/20";
    case "languages":
      return "border-[#EC4899] bg-[#831843]/20";
    default:
      return "border-[#737373] bg-[#262626]";
  }
};

const renderDescriptionWithLinks = (text: string) => {
  // Pattern to match URLs (including domains like onyxcoach.com)
  const urlPattern = /(\b(?:https?:\/\/)?(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*))/g;
  
  const parts = [];
  let lastIndex = 0;
  let match;
  
  while ((match = urlPattern.exec(text)) !== null) {
    // Add text before the URL
    if (match.index > lastIndex) {
      parts.push(text.substring(lastIndex, match.index));
    }
    
    // Add the URL as a link
    const url = match[0];
    const href = url.startsWith('http') ? url : `https://${url}`;
    parts.push(
      <a
        key={match.index}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-[#E5E5E5] hover:text-[#F5F5F5] underline transition-colors duration-200"
      >
        {url}
      </a>
    );
    
    lastIndex = match.index + match[0].length;
  }
  
  // Add remaining text
  if (lastIndex < text.length) {
    parts.push(text.substring(lastIndex));
  }
  
  return parts.length > 0 ? parts : text;
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] pt-20">
      <div className="container mx-auto px-6 pb-20">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex flex-col md:flex-row gap-8 items-start mb-8">
            <div className="flex-shrink-0">
              <div className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border border-[#262626] bg-[#0F0F0F]">
                <SafeImage
                  src="/images/Frame 5.png"
                  alt="Danil Gorbunov"
                  className="w-full h-full object-cover"
                  loading="eager"
                />
              </div>
            </div>
            <div className="flex-1 max-w-2xl">
              <h1 className="text-3xl md:text-4xl font-normal text-[#E5E5E5] mb-4 tracking-tight">
                Danil Gorbunov
              </h1>
              <h2 className="text-lg md:text-xl font-normal text-[#E5E5E5] mb-4 tracking-tight">
                Senior Product Designer | AI-Driven Product & Systems Builder
              </h2>
              <p className="text-[#A3A3A3] text-base leading-relaxed font-light">
                Product leader with 10+ years of experience building SaaS & AI-powered SaaS products from concept to revenue. Specialize in fast validation, AI-first MVP strategy, and scalable product systems that improve unit economics and accelerate go-to-market. Reduced AI infrastructure costs by 32–60%, accelerated releases by 45–55%, and contributed to reaching 1200+ paying customers within 7 months.
              </p>
            </div>
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

        {/* Timeline Section */}
        <div className="relative max-w-6xl mx-auto">
          {/* Vertical Timeline Line - Desktop - Centered */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-[#262626] transform -translate-x-1/2" />
          
          {/* Timeline Items */}
          <div className="space-y-12 md:space-y-16">
            {timelineItems.map((item, index) => {
              const isEven = index % 2 === 0;
              const isSkills = (item as any).isSkills;
              const isLanguages = (item as any).isLanguages;
              
              // Special rendering for Languages
              if (isLanguages) {
                return (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="relative"
                  >
                    {/* Timeline Node - Desktop - Centered */}
                    <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 top-6 items-center justify-center w-16 h-16 z-10">
                      <div className={`absolute w-4 h-4 rounded-full border-2 ${getTypeColor(item.type).split(' ')[0]} bg-[#0A0A0A] z-10`} />
                      <div className={`absolute w-12 h-12 rounded-full border ${getTypeColor(item.type)} opacity-50`} />
                    </div>

                    {/* Timeline Node - Mobile */}
                    <div className="md:hidden flex items-center mb-4">
                      <div className={`w-3 h-3 rounded-full border-2 ${getTypeColor(item.type).split(' ')[0]} bg-[#0A0A0A] mr-3`} />
                    </div>

                    {/* Full-width centered content for Languages */}
                    <div className="md:mx-auto md:w-full max-w-4xl">
                      <div className="bg-[#0F0F0F] border border-[#262626] rounded-lg p-6 md:p-8 hover:border-[#404040] transition-colors duration-300">
                        <div className="flex items-center gap-3 mb-6">
                          <div className={`p-2 rounded-lg ${getTypeColor(item.type)}`}>
                            {getIcon(item.type)}
                          </div>
                          <h3 className="text-xl md:text-2xl font-normal text-[#E5E5E5]">
                            {item.title}
                          </h3>
                        </div>
                        
                        <div className="space-y-3">
                          {languages.map((lang, langIndex) => (
                            <motion.p
                              key={langIndex}
                              initial={{ opacity: 0, y: 10 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.4, delay: langIndex * 0.05 }}
                              viewport={{ once: true }}
                              className="text-[#A3A3A3] text-base font-light"
                            >
                              {lang.name} - {lang.level}
                            </motion.p>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              }
              
              // Special rendering for Skills
              if (isSkills) {
                return (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="relative"
                  >
                    {/* Timeline Node - Desktop - Centered */}
                    <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 top-6 items-center justify-center w-16 h-16 z-10">
                      <div className={`absolute w-4 h-4 rounded-full border-2 ${getTypeColor(item.type).split(' ')[0]} bg-[#0A0A0A] z-10`} />
                      <div className={`absolute w-12 h-12 rounded-full border ${getTypeColor(item.type)} opacity-50`} />
                    </div>

                    {/* Timeline Node - Mobile */}
                    <div className="md:hidden flex items-center mb-4">
                      <div className={`w-3 h-3 rounded-full border-2 ${getTypeColor(item.type).split(' ')[0]} bg-[#0A0A0A] mr-3`} />
                    </div>

                    {/* Full-width centered content for Skills */}
                    <div className="md:mx-auto md:w-full max-w-4xl">
                      <div className="bg-[#0F0F0F] border border-[#262626] rounded-lg p-6 md:p-8 hover:border-[#404040] transition-colors duration-300">
                        <div className="flex items-center gap-3 mb-6">
                          <div className={`p-2 rounded-lg ${getTypeColor(item.type)}`}>
                            {getIcon(item.type)}
                          </div>
                          <h3 className="text-xl md:text-2xl font-normal text-[#E5E5E5]">
                            {item.title}
                          </h3>
                        </div>
                        
                        <div className="space-y-6">
                          {Object.entries(skills).map(([category, items], skillIndex) => (
                            <motion.div
                              key={category}
                              initial={{ opacity: 0, y: 20 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.4, delay: skillIndex * 0.05 }}
                              viewport={{ once: true }}
                            >
                              <h4 className="text-base font-normal text-[#E5E5E5] mb-2">
                                {category}
                              </h4>
                              <p className="text-[#A3A3A3] text-sm font-light leading-relaxed">
                                {items.join(", ")}
                              </p>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              }
              
              return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: isEven ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-100px" }}
                className="relative"
              >
                {/* Timeline Node - Desktop - Centered */}
                <div className={`hidden md:flex absolute ${isEven ? 'left-1/2 -translate-x-1/2' : 'left-1/2 -translate-x-1/2'} top-6 items-center justify-center w-16 h-16 z-10`}>
                  <div className={`absolute w-4 h-4 rounded-full border-2 ${getTypeColor(item.type).split(' ')[0]} bg-[#0A0A0A] z-10`} />
                  <div className={`absolute w-12 h-12 rounded-full border ${getTypeColor(item.type)} opacity-50`} />
                </div>

                {/* Timeline Node - Mobile */}
                <div className="md:hidden flex items-center mb-4">
                  <div className={`w-3 h-3 rounded-full border-2 ${getTypeColor(item.type).split(' ')[0]} bg-[#0A0A0A] mr-3`} />
                  {!["lectures", "achievement-2022", "achievement-2018", "achievement-2017", "edu-msc-ux", "edu-msc-cs", "edu-step", "edu-beetroot", "skills", "languages"].includes(item.id) && (
                    <span className="text-[#737373] text-sm font-light">{item.year}</span>
                  )}
                </div>

                {/* Content Card - Alternating Left/Right */}
                <div className={`${isEven ? 'md:mr-[calc(50%+2rem)] md:ml-0' : 'md:ml-[calc(50%+2rem)] md:mr-0'} md:w-[calc(50%-2rem)]`}>
                  <div className="bg-[#0F0F0F] border border-[#262626] rounded-lg p-6 md:p-6 hover:border-[#404040] transition-colors duration-300">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <div className={`p-2 rounded-lg ${getTypeColor(item.type)}`}>
                            {getIcon(item.type)}
                          </div>
                          <div>
                            <h3 className="text-xl md:text-2xl font-normal text-[#E5E5E5] mb-1">
                              {item.title}
                            </h3>
                            <p className="text-[#A3A3A3] text-sm font-light">
                              {item.subtitle}
                            </p>
                          </div>
                        </div>
                        {!["lectures", "achievement-2022", "achievement-2018", "achievement-2017", "edu-msc-ux", "edu-msc-cs", "edu-step", "edu-beetroot", "skills", "languages"].includes(item.id) && (
                          <div className="text-[#737373] text-xs font-light mt-2 md:ml-14">
                            {item.year}
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-[#A3A3A3] text-base leading-relaxed font-light mb-4 md:ml-14">
                      {renderDescriptionWithLinks(item.description)}
                    </p>

                    {/* Details List */}
                    {item.details && (
                      <ul className="space-y-2 mt-4 md:ml-14">
                        {item.details.map((detail, detailIndex) => (
                          <li
                            key={detailIndex}
                            className="text-[#A3A3A3] text-sm flex items-start space-x-3 font-light"
                          >
                            <span className="text-[#525252] mt-1.5 text-xs">•</span>
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {/* Additional Projects */}
                    {item.additionalProjects && (
                      <div className="mt-6 pt-6 border-t border-[#262626] md:ml-14">
                        <h4 className="text-xs font-light text-[#737373] uppercase tracking-wider mb-4">
                          Last Projects
                        </h4>
                        <div className="space-y-4">
                          {item.additionalProjects.map((project, projectIndex) => (
                            <div key={projectIndex} className="mb-4">
                              <h5 className="text-base font-normal text-[#E5E5E5] mb-2">
                                {project.website ? (
                                  <a
                                    href={project.website}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 hover:text-[#F5F5F5] transition-colors duration-200"
                                  >
                                    {project.title}
                                    <ExternalLink className="w-3 h-3 text-[#737373]" />
                                  </a>
                                ) : (
                                  project.title
                                )}
                              </h5>
                              <p className="text-[#A3A3A3] text-sm leading-relaxed font-light">
                                {project.description}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
