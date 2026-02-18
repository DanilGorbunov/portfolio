"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const blogPosts = [
  {
    id: "designer-with-ai-full-cycle",
    slug: "designer-with-ai-full-cycle",
    title: "Що може робити дизайнер, який використовує AI — від ідеї до живого продукту",
    excerpt: "Як один дизайнер з AI-інструментами проходить весь шлях від концепції до задеплоєного SaaS з реальним клієнтом.",
    date: "2025-01-30",
    readTime: "10 min read"
  },
  {
    id: "5-things-to-build-saas",
    slug: "5-things-to-build-saas",
    title: "5 речей, які дозволили мені як дизайнеру збудувати повноцінний SaaS",
    excerpt: "З чого починати? 5 практичних кроків для дизайнера, який хоче побудувати SaaS продукт.",
    date: "2025-01-30",
    readTime: "5 min read"
  },
  {
    id: "ai-idea-stress-tests",
    slug: "ai-idea-stress-tests",
    title: "AI Idea Stress Tests: 10 Prompts to Validate Before You Build",
    excerpt: "The AI market isn't the problem. Poor validation is. Before writing code or building an MVP, run every AI idea through these stress tests.",
    date: "2025-01-29",
    readTime: "6 min read"
  },
  {
    id: "how-to-add-ai-skills-to-resume",
    slug: "how-to-add-ai-skills-to-resume",
    title: "How to Add AI Skills to Your Resume to Look Like Senior/Lead (Not Like Middle with Midjourney in CV)",
    excerpt: "Most designers add AI incorrectly. Learn how to position AI skills as business impact, not just tool usage.",
    date: "2025-01-28",
    readTime: "8 min read"
  }
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] pt-20">
      <div className="container mx-auto px-6 py-16 md:py-24 max-w-4xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-normal tracking-tight text-[#E5E5E5] mb-4">
            Blog
          </h1>
          <p className="text-lg text-[#A3A3A3] leading-relaxed font-light">
            Insights on product design, AI integration, and career development
          </p>
        </motion.div>

        {/* Blog Posts */}
        <div className="space-y-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Link
                href={`/blog/${post.slug}`}
                className="block group"
              >
                <div className="bg-[#0F0F0F] border border-[#262626] rounded-lg p-6 md:p-8 hover:border-[#404040] transition-colors duration-300">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h2 className="text-2xl md:text-3xl font-normal text-[#E5E5E5] mb-3 group-hover:text-[#F5F5F5] transition-colors duration-200">
                        {post.title}
                      </h2>
                      <p className="text-[#A3A3A3] text-base leading-relaxed font-light mb-4">
                        {post.excerpt}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-[#737373] font-light">
                    <span>{post.readTime}</span>
                  </div>
                  <div className="mt-4 inline-flex items-center gap-2 text-[#737373] group-hover:text-[#A3A3A3] transition-colors duration-200 text-sm font-light">
                    Read more
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
}

