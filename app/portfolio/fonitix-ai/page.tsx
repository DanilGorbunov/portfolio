"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Calendar, User, Building2, Target, Zap, DollarSign, Users, Phone, Brain, Database, Globe, Code } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function FonitixAIProjectPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Sticky Back Button */}
      <div className="sticky top-0 z-50 bg-black/80 backdrop-blur-sm border-b border-zinc-800">
        <div className="container mx-auto px-6 py-4">
          <Link href="/portfolio" prefetch={false}>
            <Button
              variant="ghost"
              className="text-white hover:bg-zinc-800"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Portfolio
            </Button>
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-12">
        <div className="container mx-auto px-6 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
              Fonitix AI
            </h1>
            <p className="text-xl text-zinc-300 mb-4 max-w-3xl mx-auto">
              AI-powered voice agent platform for restaurants - automated phone ordering system with real-time menu management
            </p>
            <p className="text-lg text-zinc-400 mb-8 max-w-4xl mx-auto">
              SaaS solution that transforms restaurants' phone operations with intelligent voice assistants, reducing costs by 87% while improving customer experience
            </p>
            
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              <Badge variant="secondary" className="bg-zinc-800 text-white">
                <Brain className="w-3 h-3 mr-1" />
                AI Voice Technology
              </Badge>
              <Badge variant="secondary" className="bg-zinc-800 text-white">
                <Users className="w-3 h-3 mr-1" />
                SaaS Platform
              </Badge>
              <Badge variant="secondary" className="bg-zinc-800 text-white">
                <Code className="w-3 h-3 mr-1" />
                Next.js & TypeScript
              </Badge>
              <Badge variant="secondary" className="bg-zinc-800 text-white">
                <Database className="w-3 h-3 mr-1" />
                Real-time Database
              </Badge>
            </div>

            <div className="flex flex-wrap justify-center gap-6 text-sm text-zinc-400">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>September - October 2025</span>
              </div>
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>Full-Stack Developer & Product Designer</span>
              </div>
              <div className="flex items-center gap-2">
                <Building2 className="w-4 h-4" />
                <span>Fonitix AI</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-16"
          >
            <div className="relative rounded-2xl overflow-hidden">
              <Image
                src="/images/fonitix_cover.jpg"
                alt="Fonitix AI Dashboard"
                width={1200}
                height={800}
                className="w-full h-auto object-contain"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Project Overview */}
      <section className="py-16 bg-zinc-900/50">
        <div className="container mx-auto px-6 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <div>
              <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
                Project Overview
              </h2>
              <p className="text-lg text-zinc-300 mb-6">
                <strong>Fonitix AI</strong> (formerly Xanomo AI) is a revolutionary SaaS platform that allows restaurants to create AI-powered phone assistants for automated order taking. Built with modern technologies including Next.js, Convex, and OpenAI GPT-4.
              </p>
              <p className="text-zinc-400 mb-6">
                The platform addresses critical pain points in the restaurant industry: missed calls during peak hours, high labor costs, human errors, and limited operating hours. Our solution reduces operational costs by 87% compared to existing alternatives.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-zinc-800 rounded-lg">
                  <div className="text-2xl font-bold text-red-500">87%</div>
                  <div className="text-sm text-zinc-400">Cost Reduction</div>
                </div>
                <div className="text-center p-4 bg-zinc-800 rounded-lg">
                  <div className="text-2xl font-bold text-orange-500">$125K</div>
                  <div className="text-sm text-zinc-400">Projected MRR</div>
                </div>
              </div>
            </div>
            <div className="grid gap-4">
              <Card className="bg-zinc-800 border-zinc-700">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2 flex items-center gap-2">
                    <Target className="w-4 h-4 text-red-500" />
                    Problem Statement
                  </h3>
                  <ul className="text-sm text-zinc-300 space-y-2">
                    <li>• 30-40% of calls go unanswered during peak hours</li>
                    <li>• $15-20/hour labor costs for phone staff</li>
                    <li>• Human errors in order processing</li>
                    <li>• Limited operating hours</li>
                    <li>• Language barriers with customers</li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="bg-zinc-800 border-zinc-700">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2 flex items-center gap-2">
                    <Zap className="w-4 h-4 text-orange-500" />
                    Solution Features
                  </h3>
                  <ul className="text-sm text-zinc-300 space-y-2">
                    <li>• 24/7 automated phone answering</li>
                    <li>• Natural conversation ordering</li>
                    <li>• Real-time menu management</li>
                    <li>• Multi-call handling</li>
                    <li>• POS system integration</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Technical Architecture */}
      <section className="py-16">
        <div className="container mx-auto px-6 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-12 text-center bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
              Technical Architecture
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              <Card className="bg-zinc-800 border-zinc-700">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-4 flex items-center gap-2">
                    <Code className="w-5 h-5 text-blue-500" />
                    Frontend Stack
                  </h3>
                  <ul className="text-sm text-zinc-300 space-y-2">
                    <li>• Next.js 14 (App Router)</li>
                    <li>• TypeScript</li>
                    <li>• Tailwind CSS</li>
                    <li>• shadcn/ui Components</li>
                    <li>• React Hooks</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-zinc-800 border-zinc-700">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-4 flex items-center gap-2">
                    <Database className="w-5 h-5 text-green-500" />
                    Backend Stack
                  </h3>
                  <ul className="text-sm text-zinc-300 space-y-2">
                    <li>• Convex (Real-time DB)</li>
                    <li>• Clerk (Authentication)</li>
                    <li>• OpenAI GPT-4</li>
                    <li>• ElevenLabs (Voice)</li>
                    <li>• Telnyx API</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-zinc-800 border-zinc-700">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-4 flex items-center gap-2">
                    <Globe className="w-5 h-5 text-purple-500" />
                    Integrations
                  </h3>
                  <ul className="text-sm text-zinc-300 space-y-2">
                    <li>• POS Systems (Square, Toast)</li>
                    <li>• Stripe (Payments)</li>
                    <li>• Real-time Analytics</li>
                    <li>• Multi-language Support</li>
                    <li>• Webhook Handling</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 bg-zinc-900/50">
        <div className="container mx-auto px-6 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-12 text-center bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
              Core Features Implemented
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <Card className="bg-zinc-800 border-zinc-700">
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-4 flex items-center gap-2">
                      <Users className="w-5 h-5 text-blue-500" />
                      Restaurant Dashboard
                    </h3>
                    <ul className="text-sm text-zinc-300 space-y-2">
                      <li>• Sidebar navigation with all features</li>
                      <li>• Real-time metrics cards</li>
                      <li>• Order management table</li>
                      <li>• AI agent toggle controls</li>
                      <li>• Phone number display</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="bg-zinc-800 border-zinc-700">
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-4 flex items-center gap-2">
                      <Brain className="w-5 h-5 text-green-500" />
                      Menu Management System
                    </h3>
                    <ul className="text-sm text-zinc-300 space-y-2">
                      <li>• Add/edit/delete menu items</li>
                      <li>• Category organization</li>
                      <li>• Stock management</li>
                      <li>• Price and image upload</li>
                      <li>• Visual card-based display</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-6">
                <Card className="bg-zinc-800 border-zinc-700">
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-4 flex items-center gap-2">
                      <Phone className="w-5 h-5 text-red-500" />
                      Voice AI Integration
                    </h3>
                    <ul className="text-sm text-zinc-300 space-y-2">
                      <li>• Telnyx call handling</li>
                      <li>• OpenAI conversation processing</li>
                      <li>• ElevenLabs voice synthesis</li>
                      <li>• Real-time order creation</li>
                      <li>• Restaurant notifications</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="bg-zinc-800 border-zinc-700">
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-4 flex items-center gap-2">
                      <DollarSign className="w-5 h-5 text-yellow-500" />
                      Cost Optimization
                    </h3>
                    <ul className="text-sm text-zinc-300 space-y-2">
                      <li>• Telnyx vs Twilio (60% savings)</li>
                      <li>• Optimized API usage</li>
                      <li>• Efficient voice processing</li>
                      <li>• Scalable infrastructure</li>
                      <li>• Competitive pricing model</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Business Impact */}
      <section className="py-16">
        <div className="container mx-auto px-6 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-12 text-center bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
              Business Impact & Results
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card className="bg-zinc-800 border-zinc-700">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-4 text-green-400">For Restaurants</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium text-white mb-2">💰 Cost Savings</h4>
                      <ul className="text-sm text-zinc-300 space-y-1">
                        <li>• Labor: $2,000-3,000/month saved</li>
                        <li>• Missed orders: $1,500/month recovered</li>
                        <li>• Total: $3,500-4,500/month savings</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-white mb-2">📞 Operational Improvements</h4>
                      <ul className="text-sm text-zinc-300 space-y-1">
                        <li>• 100% call answer rate</li>
                        <li>• 0 wait time for customers</li>
                        <li>• 24/7 availability</li>
                        <li>• 15% increase in order value</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-zinc-800 border-zinc-700">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-4 text-blue-400">For Business</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium text-white mb-2">📊 MVP Metrics (Target)</h4>
                      <ul className="text-sm text-zinc-300 space-y-1">
                        <li>• 50 restaurants onboarded</li>
                        <li>• $12,000 MRR at launch</li>
                        <li>• 4,000+ calls handled monthly</li>
                        <li>• 90% customer retention</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-white mb-2">💵 Financial Projections</h4>
                      <ul className="text-sm text-zinc-300 space-y-1">
                        <li>• Q1: $12K MRR (50 restaurants)</li>
                        <li>• Q2: $36K MRR (150 restaurants)</li>
                        <li>• Q3: $75K MRR (300 restaurants)</li>
                        <li>• Q4: $125K MRR (500 restaurants)</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-gradient-to-br from-red-500/20 to-orange-500/20 rounded-lg border border-red-500/30">
                <div className="text-3xl font-bold text-red-500 mb-2">87%</div>
                <div className="text-sm text-zinc-300">Cost Reduction vs Competitors</div>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg border border-blue-500/30">
                <div className="text-3xl font-bold text-blue-500 mb-2">4 Weeks</div>
                <div className="text-sm text-zinc-300">MVP Development Time</div>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-green-500/20 to-teal-500/20 rounded-lg border border-green-500/30">
                <div className="text-3xl font-bold text-green-500 mb-2">1000+</div>
                <div className="text-sm text-zinc-300">Restaurants Supported</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Development Process */}
      <section className="py-16 bg-zinc-900/50">
        <div className="container mx-auto px-6 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-12 text-center bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
              Development Process
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="bg-zinc-800 border-zinc-700">
                <CardContent className="p-6">
                  <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center text-white font-bold mb-4">1</div>
                  <h3 className="font-semibold mb-3">Research & Planning</h3>
                  <ul className="text-sm text-zinc-300 space-y-1">
                    <li>• Market research</li>
                    <li>• Technology evaluation</li>
                    <li>• User flow mapping</li>
                    <li>• Database schema design</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-zinc-800 border-zinc-700">
                <CardContent className="p-6">
                  <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold mb-4">2</div>
                  <h3 className="font-semibold mb-3">MVP Core</h3>
                  <ul className="text-sm text-zinc-300 space-y-1">
                    <li>• Next.js setup</li>
                    <li>• Authentication integration</li>
                    <li>• Dashboard UI</li>
                    <li>• Menu management</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-zinc-800 border-zinc-700">
                <CardContent className="p-6">
                  <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center text-white font-bold mb-4">3</div>
                  <h3 className="font-semibold mb-3">Voice Integration</h3>
                  <ul className="text-sm text-zinc-300 space-y-1">
                    <li>• Telnyx API integration</li>
                    <li>• OpenAI conversation flow</li>
                    <li>• ElevenLabs voice synthesis</li>
                    <li>• Real-time processing</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-zinc-800 border-zinc-700">
                <CardContent className="p-6">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold mb-4">4</div>
                  <h3 className="font-semibold mb-3">Testing & Launch</h3>
                  <ul className="text-sm text-zinc-300 space-y-1">
                    <li>• Beta testing</li>
                    <li>• Bug fixes</li>
                    <li>• Documentation</li>
                    <li>• Public launch</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Key Learnings */}
      <section className="py-16">
        <div className="container mx-auto px-6 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-12 text-center bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
              Key Learnings & Challenges
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-zinc-800 border-zinc-700">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-4 text-red-400">Technical Challenges</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium text-white mb-2">Voice AI Latency</h4>
                      <p className="text-sm text-zinc-300">Initial latency was 2-3 seconds. Switched to WebSocket connections and optimized API calls to reduce latency to &lt;1 second.</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-white mb-2">Menu Context Management</h4>
                      <p className="text-sm text-zinc-300">AI struggled with complex menus. Implemented category-based context and RAG to achieve 95% accuracy in order taking.</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-white mb-2">Cost Optimization</h4>
                      <p className="text-sm text-zinc-300">Evaluated 5+ telephony providers and chose Telnyx, reducing costs by 87% compared to initial estimates.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-zinc-800 border-zinc-700">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-4 text-blue-400">Design Challenges</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium text-white mb-2">Empty State UX</h4>
                      <p className="text-sm text-zinc-300">Created guided onboarding with themed empty states to achieve 80% completion rate for menu setup.</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-white mb-2">Real-time Updates</h4>
                      <p className="text-sm text-zinc-300">Leveraged Convex's real-time subscriptions to achieve zero-delay order notifications in the dashboard.</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-white mb-2">Dark Theme Design</h4>
                      <p className="text-sm text-zinc-300">Designed professional dark theme dashboard inspired by modern SaaS products (Vercel, Linear, Stripe).</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Future Roadmap */}
      <section className="py-16 bg-zinc-900/50">
        <div className="container mx-auto px-6 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-12 text-center bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
              Future Roadmap
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-zinc-800 border-zinc-700">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-4 text-green-400">Short-term (3-6 months)</h3>
                  <ul className="text-sm text-zinc-300 space-y-2">
                    <li>• Multi-language support (Spanish, French, Mandarin)</li>
                    <li>• Advanced analytics dashboard</li>
                    <li>• WhatsApp/SMS ordering integration</li>
                    <li>• Voice customization (accent, tone, personality)</li>
                    <li>• CRM integration (HubSpot, Salesforce)</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-zinc-800 border-zinc-700">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-4 text-blue-400">Long-term (6-12 months)</h3>
                  <ul className="text-sm text-zinc-300 space-y-2">
                    <li>• Mobile app for restaurant managers</li>
                    <li>• AI-powered menu recommendations</li>
                    <li>• Expand to other industries (clinics, salons, hotels)</li>
                    <li>• White-label solution for POS providers</li>
                    <li>• Voice biometrics for order verification</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Conclusion */}
      <section className="py-16">
        <div className="container mx-auto px-6 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
              Conclusion
            </h2>
            <p className="text-lg text-zinc-300 mb-8">
              <strong>Fonitix AI</strong> represents a modern approach to solving real problems in the restaurant industry. By combining cutting-edge AI technology with a user-friendly SaaS interface, we're enabling small businesses to compete with enterprise-level automation.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <Card className="bg-zinc-800 border-zinc-700">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-4 text-green-400">Key Achievements</h3>
                  <ul className="text-sm text-zinc-300 space-y-2 text-left">
                    <li>✅ Built full-stack MVP in 4 weeks</li>
                    <li>✅ Reduced operational costs by 87% vs competitors</li>
                    <li>✅ Created scalable architecture supporting 1000+ restaurants</li>
                    <li>✅ Designed intuitive dark-theme dashboard</li>
                    <li>✅ Implemented real-time order processing</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-zinc-800 border-zinc-700">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-4 text-blue-400">Skills Demonstrated</h3>
                  <ul className="text-sm text-zinc-300 space-y-2 text-left">
                    <li>• Full-stack development (Next.js, TypeScript)</li>
                    <li>• Real-time database architecture (Convex)</li>
                    <li>• API integration (Telnyx, OpenAI, ElevenLabs)</li>
                    <li>• UI/UX design (Tailwind CSS, dark theme)</li>
                    <li>• Cost optimization and business analysis</li>
                    <li>• Product strategy and pivoting</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <Button 
                variant="outline" 
                className="border-zinc-600 text-white hover:bg-zinc-800"
                onClick={() => window.open('https://fonitix.ai', '_blank')}
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                View Live Demo
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
