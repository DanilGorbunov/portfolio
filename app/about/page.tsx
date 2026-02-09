"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Download,
  Briefcase,
  GraduationCap,
  Award,
  Code,
  Users
} from "lucide-react";

// Timeline items with dates for sorting
const timelineItems = [
  {
    id: "present",
    type: "work",
    year: "2025",
    date: "2025-05",
    title: "Senior Product Designer",
    subtitle: "B2stack",
    description: "Led design and delivery of AI products (E-Commerce AI Chatbot, Conversational AI), reducing AI model costs by ~32–60% and delivering measurable business impact.",
    details: [
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
    id: "mentor-2023",
    type: "achievement",
    year: "2023",
    date: "2023-01",
    title: "Lecturer / Mentor",
    subtitle: "AI Workshops & Startup Guidance",
    description: "Led AI workshops for beginners to lead designers; mentored developers and guided startup projects including onyxcoach.com"
  },
  {
    id: "work-2022",
    type: "work",
    year: "2022",
    date: "2022-05",
    title: "Senior Product Designer",
    subtitle: "B2stack",
    description: "Started role at B2stack, focusing on AI product design and development."
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
    description: "Led team to design and launch a scalable marketplace platform, securing $30k+ early investment.",
    details: [
      "Delivered WordPress-MVP SaaS, enabling store owners to update products directly; scaled to hundreds of stores with real-time API sync.",
      "Achieved +18–20% sales and ~$70k annual savings per client.",
      "Optimized workflows with collaborative prototyping & agile practices, boosting team productivity ~25-30%."
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
    description: "Led brand launches, website design, and digital marketing campaigns for global clients.",
    details: [
      "Conducted UX research, optimized WordPress interfaces, and implemented UX solutions aligned with business goals."
    ]
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
  }
].sort((a, b) => {
  // Sort by date descending (newest first)
  return b.date.localeCompare(a.date);
});

const skills = {
  "Design & Prototyping": ["Figma", "Adobe", "AI Tools"],
  "Methods & Frameworks": ["Design Thinking", "Agile & Scrum", "Lean Design", "Systems Thinking"],
  "UX/UI & Research": ["User Research", "Usability Testing", "Information Architecture"],
  "Technical": ["React", "Flutter", "PHP", "Python", "Wordpress", "Supabase", "Git", "AI/ML tools", "Cursor"],
  "Collaboration": ["Storytelling", "Presentation", "Workshop", "Mentorship", "Ecommerce"]
};

const languages = [
  { name: "English", level: "B2" },
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
    default:
      return "border-[#737373] bg-[#262626]";
  }
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
          <h1 className="text-4xl md:text-5xl font-normal text-[#E5E5E5] mb-4 tracking-tight">
            Danil Gorbunov
          </h1>
          
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

        {/* Timeline Section */}
        <div className="relative max-w-2xl">
          {/* Vertical Timeline Line - Desktop */}
          <div className="hidden md:block absolute left-8 top-0 bottom-0 w-0.5 bg-[#262626]" />
          
          {/* Timeline Items */}
          <div className="space-y-12 md:space-y-16">
            {timelineItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-100px" }}
                className="relative"
              >
                {/* Timeline Node - Desktop */}
                <div className="hidden md:flex absolute left-0 top-6 items-center justify-center w-16 h-16">
                  <div className={`absolute w-4 h-4 rounded-full border-2 ${getTypeColor(item.type).split(' ')[0]} bg-[#0A0A0A] z-10`} />
                  <div className={`absolute w-12 h-12 rounded-full border ${getTypeColor(item.type)} opacity-50`} />
                </div>

                {/* Timeline Node - Mobile */}
                <div className="md:hidden flex items-center mb-4">
                  <div className={`w-3 h-3 rounded-full border-2 ${getTypeColor(item.type).split(' ')[0]} bg-[#0A0A0A] mr-3`} />
                  <span className="text-[#737373] text-sm font-light">{item.year}</span>
                </div>

                {/* Content Card */}
                <div className={`md:ml-24 ${index % 2 === 0 ? 'md:mr-0' : 'md:mr-0'}`}>
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
                        <div className="text-[#737373] text-xs font-light mt-2 md:ml-14">
                          {item.year}
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-[#A3A3A3] text-base leading-relaxed font-light mb-4 md:ml-14">
                      {item.description}
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
                          Additional Projects (Contract / Part-time)
                        </h4>
                        <div className="space-y-4">
                          {item.additionalProjects.map((project, projectIndex) => (
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
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Skills & Languages Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-20 grid md:grid-cols-2 gap-12"
        >
          {/* Skills */}
          <div>
            <h2 className="text-2xl md:text-3xl font-normal text-[#E5E5E5] mb-8 tracking-tight">
              SKILLS
            </h2>
            <div className="space-y-6">
              {Object.entries(skills).map(([category, items], index) => (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-base font-normal text-[#E5E5E5] mb-2">
                    {category}
                  </h3>
                  <p className="text-[#A3A3A3] text-sm font-light leading-relaxed">
                    {items.join(", ")}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Languages */}
          <div>
            <h2 className="text-2xl md:text-3xl font-normal text-[#E5E5E5] mb-8 tracking-tight">
              LANGUAGES
            </h2>
            <div className="space-y-3">
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
          </div>
        </motion.div>
      </div>
    </div>
  );
}
