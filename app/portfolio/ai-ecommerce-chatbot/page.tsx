"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowLeft, Calendar, User, Briefcase, ExternalLink, ChevronLeft, ChevronRight, Check, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { cn } from "@/lib/utils"

export default function AIEcommerceProject() {
  const [activeSlide, setActiveSlide] = useState(0)
  const [isInView, setIsInView] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setIsInView(true)

    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev === projectImages.length - 1 ? 0 : prev + 1))
    }, 5000)

    return () => clearInterval(timer)
  }, [])

  const projectImages = [
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1_2.jpg-UdnazrNTHeJdDpxCEnAkDBwHXpWlgE.jpeg",
      alt: "NeroType AI Dashboard Interface",
      caption: "NeroType AI Dashboard showing sales metrics and chatbot configuration",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1.jpg-iMKtwLHzYfGvT6nUPv39bHBLDUVogU.jpeg",
      alt: "NeroType AI Landing Page",
      caption: "AI-powered sales assistant chatbot with dashboard integration",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5.jpg-sqfmMfJqbZUSdco0gJZA3XrwUAxk1D.jpeg",
      alt: "Competitor Comparison Table",
      caption: "Feature comparison between NeroType and other chatbot platforms",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/6.jpg-a0FFa6zG9tmH6jSzxlisUxy6FeCGL2.jpeg",
      alt: "NeroType Competitive Advantages",
      caption: "How NeroType outperforms competitors with unique AI features",
    },
  ]

  const handlePrevSlide = () => {
    setActiveSlide((prev) => (prev === 0 ? projectImages.length - 1 : prev - 1))
  }

  const handleNextSlide = () => {
    setActiveSlide((prev) => (prev === projectImages.length - 1 ? 0 : prev + 1))
  }

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  return (
    <div className="container px-4 py-12 md:px-6 md:py-24 bg-black" ref={containerRef}>
      <div className="mb-8 flex items-center">
        <Link href="/portfolio">
          <Button variant="ghost" size="sm" className="text-zinc-400 hover:text-white">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Portfolio
          </Button>
        </Link>
      </div>

      <motion.div
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={staggerContainer}
        className="mb-12"
      >
        <motion.div variants={fadeInUp} className="mb-8 space-y-4">
          <h1 className="text-4xl font-bold tracking-tight text-white">NeroType: AI-Driven E-commerce Chatbot</h1>
          <p className="text-xl text-zinc-400">Revolutionizing Online Store Management Through AI Conversations</p>
          <div className="flex flex-wrap gap-2">
            <Badge variant="secondary" className="bg-zinc-800 text-zinc-200">
              AI
            </Badge>
            <Badge variant="secondary" className="bg-zinc-800 text-zinc-200">
              E-Commerce
            </Badge>
            <Badge variant="secondary" className="bg-zinc-800 text-zinc-200">
              SAAS
            </Badge>
            <Badge variant="secondary" className="bg-zinc-800 text-zinc-200">
              Chatbot
            </Badge>
          </div>
        </motion.div>

        <motion.div variants={fadeInUp} className="relative mb-12 overflow-hidden rounded-lg aspect-video">
          <div className="relative h-full w-full">
            {projectImages.map((image, index) => (
              <div
                key={index}
                className={cn(
                  "absolute inset-0 transition-opacity duration-1000",
                  activeSlide === index ? "opacity-100" : "opacity-0",
                )}
              >
                <img src={image.src || "/placeholder.svg"} alt={image.alt} className="h-full w-full object-cover" />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                  <p className="text-white text-sm md:text-base">{image.caption}</p>
                </div>
              </div>
            ))}

            <button
              onClick={handlePrevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full hover:bg-black/70 transition-colors"
            >
              <ChevronLeft className="h-6 w-6 text-white" />
            </button>
            <button
              onClick={handleNextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full hover:bg-black/70 transition-colors"
            >
              <ChevronRight className="h-6 w-6 text-white" />
            </button>

            <div className="absolute bottom-16 left-0 right-0 flex justify-center gap-2">
              {projectImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveSlide(index)}
                  className={cn(
                    "h-2 w-2 rounded-full transition-all",
                    activeSlide === index ? "bg-white w-4" : "bg-white/50",
                  )}
                />
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div variants={fadeInUp} className="mb-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="space-y-2 bg-zinc-900 p-4 rounded-lg">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4 text-primary" />
              <h3 className="font-medium text-white">Year</h3>
            </div>
            <p className="text-zinc-400">2022-Present</p>
          </div>
          <div className="space-y-2 bg-zinc-900 p-4 rounded-lg">
            <div className="flex items-center gap-2">
              <Briefcase className="h-4 w-4 text-primary" />
              <h3 className="font-medium text-white">Client</h3>
            </div>
            <p className="text-zinc-400">B2Stack</p>
          </div>
          <div className="space-y-2 bg-zinc-900 p-4 rounded-lg">
            <div className="flex items-center gap-2">
              <User className="h-4 w-4 text-primary" />
              <h3 className="font-medium text-white">Role</h3>
            </div>
            <p className="text-zinc-400">UX/UI Designer, Product Designer</p>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={staggerContainer}
        className="mb-16"
      >
        <motion.div variants={fadeInUp} className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">Project Overview</h2>
          <div className="bg-zinc-900 p-6 rounded-lg mb-8">
            <p className="text-zinc-400 leading-relaxed">
              NeroType is an AI-powered chatbot that transforms how e-commerce businesses manage their stores. Unlike
              traditional platforms that rely on manual product uploads and complex dashboards, NeroType allows store
              owners to add products, track inventory, and process sales—all through a natural chat interface.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-zinc-900 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-4">The Problem</h3>
              <p className="text-zinc-400 mb-4">Managing an online store is time-consuming:</p>
              <ul className="space-y-3 text-zinc-400">
                <li className="flex items-start">
                  <X className="h-5 w-5 text-red-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Manually adding and updating products requires multiple steps.</span>
                </li>
                <li className="flex items-start">
                  <X className="h-5 w-5 text-red-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Business owners struggle to analyze sales trends in real time.</span>
                </li>
                <li className="flex items-start">
                  <X className="h-5 w-5 text-red-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Customers drop off when sales rely only on traditional web interfaces.</span>
                </li>
              </ul>
            </div>
            <div className="bg-zinc-900 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-4">The Solution</h3>
              <ul className="space-y-3 text-zinc-400">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-medium text-white">AI-Powered Chatbot</span>
                    <p>Allows users to add and update products via text or voice commands.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-medium text-white">Real-Time Inventory & Sales Insights</span>
                    <p>Smart analytics provide product recommendations and stock alerts.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-medium text-white">Full E-commerce Integration</span>
                    <p>Seamlessly connects with WooCommerce & Shopify.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-medium text-white">Conversational Commerce</span>
                    <p>Customers can browse and purchase products entirely through the chatbot.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>

        <motion.div variants={fadeInUp} className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">User Experience & UI Design</h2>
          <div className="bg-zinc-900 p-6 rounded-lg mb-8">
            <p className="text-zinc-400 mb-4">The UX strategy was built around efficiency and automation:</p>
            <ul className="space-y-4 text-zinc-400">
              <li className="flex items-start">
                <div className="h-8 w-8 rounded-full bg-primary/20 text-primary mr-3 flex items-center justify-center flex-shrink-0">
                  <span className="text-lg">👌</span>
                </div>
                <div>
                  <span className="font-medium text-white">Minimalist, chat-based interface</span>
                  <p>No complex menus, just natural conversation.</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="h-8 w-8 rounded-full bg-primary/20 text-primary mr-3 flex items-center justify-center flex-shrink-0">
                  <span className="text-lg">🔗</span>
                </div>
                <div>
                  <span className="font-medium text-white">Seamless API Integrations</span>
                  <p>Real-time connection with e-commerce platforms.</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="h-8 w-8 rounded-full bg-primary/20 text-primary mr-3 flex items-center justify-center flex-shrink-0">
                  <span className="text-lg">🤖</span>
                </div>
                <div>
                  <span className="font-medium text-white">Adaptive AI Tone</span>
                  <p>The chatbot adapts its sales approach based on the customer's personality (MBTI model).</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1_1.jpg-z42o9n8KCSnaaHeQHwBOkybqGA0I6d.jpeg"
                alt="NeroType Dashboard Interface"
                className="rounded-lg border border-zinc-800 mb-4"
              />
              <p className="text-sm text-zinc-500 text-center">
                NeroType dashboard showing metrics and bot configuration
              </p>
            </div>
            <div>
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/7.jpg-3WX7BWZkqIkymzR8Ib0sFUbNGBidrw.jpeg"
                alt="Competitive Analysis Table"
                className="rounded-lg border border-zinc-800 mb-4"
              />
              <p className="text-sm text-zinc-500 text-center">
                Competitive analysis showing NeroType's unique features
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div variants={fadeInUp} className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-zinc-900 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                <span className="inline-block h-8 w-8 rounded-full bg-primary/20 text-primary mr-3 flex items-center justify-center">
                  <span className="text-lg">✨</span>
                </span>
                AI-driven product management
              </h3>
              <p className="text-zinc-400 leading-relaxed">
                Add, edit, or delete products in seconds through simple chat commands. No more navigating complex admin
                panels.
              </p>
            </div>
            <div className="bg-zinc-900 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                <span className="inline-block h-8 w-8 rounded-full bg-primary/20 text-primary mr-3 flex items-center justify-center">
                  <span className="text-lg">📊</span>
                </span>
                Sales Forecasting
              </h3>
              <p className="text-zinc-400 leading-relaxed">
                Get AI-based recommendations for best-selling products and inventory management based on historical data
                and trends.
              </p>
            </div>
            <div className="bg-zinc-900 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                <span className="inline-block h-8 w-8 rounded-full bg-primary/20 text-primary mr-3 flex items-center justify-center">
                  <span className="text-lg">🛍️</span>
                </span>
                Instant product checkout
              </h3>
              <p className="text-zinc-400 leading-relaxed">
                Customers complete purchases without navigating a website. The entire shopping experience happens within
                the chat interface.
              </p>
            </div>
            <div className="bg-zinc-900 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                <span className="inline-block h-8 w-8 rounded-full bg-primary/20 text-primary mr-3 flex items-center justify-center">
                  <span className="text-lg">🎙️</span>
                </span>
                Voice Control
              </h3>
              <p className="text-zinc-400 leading-relaxed">
                Hands-free store management for busy entrepreneurs. Add products, check inventory, and process orders
                using voice commands.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div variants={fadeInUp} className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">Competitive Advantage</h2>

          <Tabs defaultValue="comparison" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="comparison">Feature Comparison</TabsTrigger>
              <TabsTrigger value="advantages">Key Advantages</TabsTrigger>
            </TabsList>
            <TabsContent value="comparison" className="mt-0">
              <div className="bg-zinc-900 p-6 rounded-lg overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-zinc-800">
                      <th className="text-left py-3 px-4 font-medium text-white">Platform</th>
                      <th className="text-center py-3 px-4 font-medium text-white">AI/ML</th>
                      <th className="text-center py-3 px-4 font-medium text-white">E-commerce Integration</th>
                      <th className="text-center py-3 px-4 font-medium text-white">Live Chat</th>
                      <th className="text-center py-3 px-4 font-medium text-white">Auto-Adding Products</th>
                      <th className="text-center py-3 px-4 font-medium text-white">Sales Analysis</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-zinc-800">
                      <td className="py-3 px-4 text-white">NeroType</td>
                      <td className="py-3 px-4 text-center">
                        <Check className="h-5 w-5 text-green-500 mx-auto" />
                      </td>
                      <td className="py-3 px-4 text-center">WooCommerce, Shopify</td>
                      <td className="py-3 px-4 text-center">
                        <Check className="h-5 w-5 text-green-500 mx-auto" />
                      </td>
                      <td className="py-3 px-4 text-center">
                        <Check className="h-5 w-5 text-green-500 mx-auto" />
                      </td>
                      <td className="py-3 px-4 text-center">
                        <Check className="h-5 w-5 text-green-500 mx-auto" />
                      </td>
                    </tr>
                    <tr className="border-b border-zinc-800">
                      <td className="py-3 px-4 text-white">Tidio</td>
                      <td className="py-3 px-4 text-center">
                        <Check className="h-5 w-5 text-green-500 mx-auto" />
                      </td>
                      <td className="py-3 px-4 text-center">Shopify</td>
                      <td className="py-3 px-4 text-center">
                        <Check className="h-5 w-5 text-green-500 mx-auto" />
                      </td>
                      <td className="py-3 px-4 text-center">
                        <X className="h-5 w-5 text-red-500 mx-auto" />
                      </td>
                      <td className="py-3 px-4 text-center">
                        <X className="h-5 w-5 text-red-500 mx-auto" />
                      </td>
                    </tr>
                    <tr className="border-b border-zinc-800">
                      <td className="py-3 px-4 text-white">ZipChat</td>
                      <td className="py-3 px-4 text-center">
                        <Check className="h-5 w-5 text-green-500 mx-auto" />
                      </td>
                      <td className="py-3 px-4 text-center">Shopify</td>
                      <td className="py-3 px-4 text-center">
                        <Check className="h-5 w-5 text-green-500 mx-auto" />
                      </td>
                      <td className="py-3 px-4 text-center">
                        <X className="h-5 w-5 text-red-500 mx-auto" />
                      </td>
                      <td className="py-3 px-4 text-center">
                        <X className="h-5 w-5 text-red-500 mx-auto" />
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-white">ManyChat</td>
                      <td className="py-3 px-4 text-center">
                        <Check className="h-5 w-5 text-green-500 mx-auto" />
                      </td>
                      <td className="py-3 px-4 text-center">Shopify, Zapier</td>
                      <td className="py-3 px-4 text-center">
                        <X className="h-5 w-5 text-red-500 mx-auto" />
                      </td>
                      <td className="py-3 px-4 text-center">
                        <X className="h-5 w-5 text-red-500 mx-auto" />
                      </td>
                      <td className="py-3 px-4 text-center">
                        <X className="h-5 w-5 text-red-500 mx-auto" />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </TabsContent>
            <TabsContent value="advantages" className="mt-0">
              <div className="bg-zinc-900 p-6 rounded-lg">
                <ul className="space-y-6 text-zinc-400">
                  <li className="flex items-start">
                    <div className="h-8 w-8 rounded-full bg-primary/20 text-primary mr-3 flex items-center justify-center flex-shrink-0">
                      <span className="text-lg">🚀</span>
                    </div>
                    <div>
                      <span className="font-medium text-white">Automated Product Management via Chat</span>
                      <p className="mt-1">
                        None of the popular platforms allow adding products through a chatbot (via voice or text).
                        NeroType is set to revolutionize this feature!
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="h-8 w-8 rounded-full bg-primary/20 text-primary mr-3 flex items-center justify-center flex-shrink-0">
                      <span className="text-lg">📊</span>
                    </div>
                    <div>
                      <span className="font-medium text-white">Smart Sales and Inventory Analysis</span>
                      <p className="mt-1">
                        Most chatbots only answer customer queries. NeroType can proactively recommend which products to
                        promote and which to discount based on real-time sales data.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="h-8 w-8 rounded-full bg-primary/20 text-primary mr-3 flex items-center justify-center flex-shrink-0">
                      <span className="text-lg">💼</span>
                    </div>
                    <div>
                      <span className="font-medium text-white">Full Automation of the Sales Process</span>
                      <p className="mt-1">
                        Competitors like Tidio and ManyChat assist in sales but still rely on traditional interfaces.
                        NeroType enables the entire sales process through chat – from product listing to payment
                        processing.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="h-8 w-8 rounded-full bg-primary/20 text-primary mr-3 flex items-center justify-center flex-shrink-0">
                      <span className="text-lg">🎯</span>
                    </div>
                    <div>
                      <span className="font-medium text-white">
                        Personalized Selling Through Psychological Profiling (MBTI)
                      </span>
                      <p className="mt-1">
                        No competitor analyzes a customer's personality type to adapt the sales approach. NeroType can
                        adjust conversation tone, offers, and communication style based on individual personalities.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </TabsContent>
          </Tabs>
        </motion.div>

        <motion.div variants={fadeInUp}>
          <h2 className="text-3xl font-bold text-white mb-8">Results & Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="bg-zinc-900 p-6 rounded-lg text-center">
              <div className="text-4xl font-bold text-primary mb-2">50%</div>
              <p className="text-zinc-400">Time saved in product management</p>
            </div>
            <div className="bg-zinc-900 p-6 rounded-lg text-center">
              <div className="text-4xl font-bold text-primary mb-2">35%</div>
              <p className="text-zinc-400">Increased conversion rates</p>
            </div>
            <div className="bg-zinc-900 p-6 rounded-lg text-center">
              <div className="text-4xl font-bold text-primary mb-2">40%</div>
              <p className="text-zinc-400">Reduction in support tickets</p>
            </div>
            <div className="bg-zinc-900 p-6 rounded-lg text-center">
              <div className="text-4xl font-bold text-primary mb-2">25%</div>
              <p className="text-zinc-400">Increase in average order value</p>
            </div>
          </div>

          <div className="bg-zinc-900 p-6 rounded-lg mb-8">
            <h3 className="text-xl font-semibold text-white mb-4">Next Steps</h3>
            <ul className="space-y-3 text-zinc-400">
              <li className="flex items-start">
                <div className="h-6 w-6 rounded-full bg-primary/20 text-primary mr-3 flex items-center justify-center flex-shrink-0">
                  <span className="text-sm">🚀</span>
                </div>
                <span>Expand to WhatsApp & Telegram for wider adoption.</span>
              </li>
              <li className="flex items-start">
                <div className="h-6 w-6 rounded-full bg-primary/20 text-primary mr-3 flex items-center justify-center flex-shrink-0">
                  <span className="text-sm">📈</span>
                </div>
                <span>Advanced AI-powered sales strategy suggestions.</span>
              </li>
              <li className="flex items-start">
                <div className="h-6 w-6 rounded-full bg-primary/20 text-primary mr-3 flex items-center justify-center flex-shrink-0">
                  <span className="text-sm">💡</span>
                </div>
                <span>Launch a marketplace model where users can sell via AI-only interfaces.</span>
              </li>
            </ul>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="mt-12 space-y-8"
      >
        <h2 className="text-3xl font-bold text-white mb-4">Project Gallery</h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="overflow-hidden rounded-lg border border-zinc-800 group">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1_2.jpg-UdnazrNTHeJdDpxCEnAkDBwHXpWlgE.jpeg"
              alt="NeroType AI Dashboard"
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          <div className="overflow-hidden rounded-lg border border-zinc-800 group">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2.jpg-euBUhJ588fk2dib5uUuGZ1Kvgy0tDK.jpeg"
              alt="NeroType Overview"
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          <div className="overflow-hidden rounded-lg border border-zinc-800 group">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3.jpg-W8MbYRONfNPYEq7Dq1CAaFaksSnfwv.jpeg"
              alt="NeroType Solution"
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        </div>

        <div className="flex justify-center mt-12">
          <a
            href="https://www.figma.com/design/QrHhVbeJjwMIm5AmiZCw1R/NeroType?node-id=221-8777&m=dev&t=IcKCoN18WMXw2brx-1"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center"
          >
            <Button className="bg-primary hover:bg-primary/90 text-black">
              View Figma Design
              <ExternalLink className="ml-2 h-4 w-4" />
            </Button>
          </a>
        </div>
      </motion.div>
    </div>
  )
}

