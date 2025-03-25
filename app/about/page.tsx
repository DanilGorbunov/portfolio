import Link from "next/link"
import { ArrowLeft, Download, Mail, Linkedin, Phone, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function AboutPage() {
  return (
    <div className="container px-4 py-12 md:px-6 md:py-24 bg-black">
      <div className="mb-8 flex items-center">
        <Link href="/">
          <Button variant="ghost" size="sm" className="text-zinc-400 hover:text-white">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
        </Link>
      </div>
      <div className="grid gap-12 md:grid-cols-[2fr_3fr]">
        <div className="space-y-6">
          <div className="overflow-hidden rounded-lg border border-zinc-800">
            <img
              alt="Danil Gorbunov"
              className="aspect-square h-full w-full object-cover"
              height="400"
              src="/images/about.png"
              width="400"
            />
          </div>
          <div className="space-y-4 bg-zinc-900 p-6 rounded-lg">
            <h2 className="text-2xl font-bold text-white">Contact</h2>
            <div className="flex flex-col space-y-2">
              <a
                href="mailto:danilgorbunov@gmail.com"
                className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors"
              >
                <Mail className="h-4 w-4 text-primary" />
                danilgorbunov@gmail.com
              </a>
              <a
                href="tel:+421907077202"
                className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors"
              >
                <Phone className="h-4 w-4 text-primary" />
                +421 90 70 77 202
              </a>
              <a
                href="https://www.behance.net/danil_gorbunov"
                className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors"
              >
                <svg
                  className="h-4 w-4 text-primary"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M22 7h-7V5h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14H15.97c.13 3.211 3.483 3.312 4.588 2.029h3.168zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zm-9.574 6.988H0V5.021h6.953c5.476.081 5.58 5.444 2.72 6.906 3.461 1.26 3.577 8.061-3.207 8.061zM3 11h3.584c2.508 0 2.906-3-.312-3H3v3zm3.391 3H3v3.016h3.341c3.055 0 2.868-3.016.05-3.016z" />
                </svg>
                behance.net/danil_gorbunov
              </a>
              <a
                href="https://linkedin.com"
                className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors"
              >
                <Linkedin className="h-4 w-4 text-primary" />
                linkedin.com/in/danilgorbunov
              </a>
              <a
                href="https://dangorbunov.vercel.app"
                className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors"
              >
                <Globe className="h-4 w-4 text-primary" />
                dangorbunov.vercel.app
              </a>
            </div>
          </div>
          <div>
            <a href="/Resume_Product_Designer.pdf" download className="w-full">
              <Button className="w-full bg-primary hover:bg-primary/90 text-black">
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </Button>
            </a>
          </div>
        </div>
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tight text-white">About Me</h1>
            <p className="text-xl text-zinc-400">
              Product designer with 12 years of experience in UX/UI design and frontend development, specializing in
              AI-driven and data-based solutions across SaaS, B2B, B2C, eCommerce.
            </p>
          </div>
          <div className="space-y-4">
            <p className="leading-relaxed text-zinc-400">
              I'm a product designer based in Bratislava, Slovakia with a focus on creating intuitive user experiences,
              AI automation, and scalable digital products. My approach combines user-centered design principles with
              technical expertise in frontend development to deliver solutions that are both beautiful and functional.
            </p>
            <p className="leading-relaxed text-zinc-400">
              Throughout my career, I've worked with a diverse range of clients and industries, from startups to Fortune
              500 companies. This experience has given me a unique perspective on how to adapt design solutions to
              different business contexts and user needs.
            </p>
            <p className="leading-relaxed text-zinc-400">
              I believe that great design goes beyond aesthetics—it's about understanding user needs, business goals,
              and technological constraints to create solutions that work for everyone involved. My process emphasizes
              collaboration, iteration, and data-informed decision making.
            </p>
          </div>
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-white">Skills</h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              <div className="space-y-2 bg-zinc-900 p-4 rounded-lg">
                <h3 className="font-medium text-white">Design</h3>
                <ul className="space-y-1 text-sm text-zinc-400">
                  <li>UX/UI Design</li>
                  <li>Strategy Presentations</li>
                  <li>User Flows</li>
                  <li>Concept Sketches</li>
                  <li>Wireframes & Mockups</li>
                  <li>Figma, AdobeXS, CreativeAI</li>
                  <li>Atomic Design</li>
                  <li>Style Guides</li>
                  <li>User-Centered Design</li>
                </ul>
              </div>
              <div className="space-y-2 bg-zinc-900 p-4 rounded-lg">
                <h3 className="font-medium text-white">Prototyping</h3>
                <ul className="space-y-1 text-sm text-zinc-400">
                  <li>Rapid prototyping using Figma</li>
                  <li>Framer</li>
                  <li>Interactive flow with HTML/CSS/JS</li>
                  <li>Frameworks (React, Flutter)</li>
                  <li>APIs</li>
                  <li>AI processing</li>
                  <li>LLM training for bots/ecommerce</li>
                </ul>
              </div>
              <div className="space-y-2 bg-zinc-900 p-4 rounded-lg">
                <h3 className="font-medium text-white">Collaboration</h3>
                <ul className="space-y-1 text-sm text-zinc-400">
                  <li>Data analysis</li>
                  <li>Competitors analysis</li>
                  <li>A/B Testing & Experiment</li>
                  <li>User testing</li>
                  <li>Cognitive walkthrough</li>
                  <li>Common Sense</li>
                  <li>Detail oriented</li>
                  <li>Flexible</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-white">Experience</h2>
            <div className="space-y-6">
              <div className="space-y-2 bg-zinc-900 p-4 rounded-lg">
                <div className="flex items-center justify-between">
                  <h3 className="font-medium text-white">UX/UI Designer, Product Designer</h3>
                  <span className="text-sm text-zinc-500">November 2022 - Present</span>
                </div>
                <p className="text-primary">B2Stack, Bratislava, Slovakia</p>
                <p className="text-sm text-zinc-400">
                  Created a SAAS project with an AI e-commerce chatbot, automating business processes and engagement.
                  Designed AI-driven checkout flows and interfaces, increasing conversions by 15% and retention. Built
                  smart navigation, cutting support requests.
                </p>
              </div>
              <div className="space-y-2 bg-zinc-900 p-4 rounded-lg">
                <div className="flex items-center justify-between">
                  <h3 className="font-medium text-white">Frontend Developer (Flutter), UX/UI Designer</h3>
                  <span className="text-sm text-zinc-500">May 2022 - September 2022</span>
                </div>
                <p className="text-primary">Twinzo 3D, Bratislava, Slovakia</p>
                <p className="text-sm text-zinc-400">
                  Developed a SaaS-based warehouse inventory management app for Fortune 500 clients, integrating 3D data
                  visualization. Applied user-centric design, enhancing usability and adoption rates.
                </p>
              </div>
              <div className="space-y-2 bg-zinc-900 p-4 rounded-lg">
                <div className="flex items-center justify-between">
                  <h3 className="font-medium text-white">Lead Product Designer, Frontend Engineer (React)</h3>
                  <span className="text-sm text-zinc-500">May 2013 - February 2022</span>
                </div>
                <p className="text-primary">Decodexin (Krasiva), Ukraine</p>
                <p className="text-sm text-zinc-400">
                  Created user-centric designs and developed an MVP for a SAAS system as a React developer, enabling
                  shop owners to efficiently add and update products from the app directly to their WordPress website.
                  This solution improved workflow automation and simplified product management.
                </p>
              </div>
              <div className="space-y-2 bg-zinc-900 p-4 rounded-lg">
                <div className="flex items-center justify-between">
                  <h3 className="font-medium text-white">UX/UI Designer</h3>
                  <span className="text-sm text-zinc-500">May 2013 - February 2022</span>
                </div>
                <p className="text-primary">Decodexin (Krasiva), Ukraine</p>
                <p className="text-sm text-zinc-400">
                  Developed a robust Marketplace platform with seamless API integration, connecting multiple shops for
                  real-time product synchronization, order management, and sales tracking, ensuring a smooth and
                  scalable operation across the network.
                </p>
              </div>
              <div className="space-y-2 bg-zinc-900 p-4 rounded-lg">
                <div className="flex items-center justify-between">
                  <h3 className="font-medium text-white">UX Designer</h3>
                  <span className="text-sm text-zinc-500">October 2010 - March 2013</span>
                </div>
                <p className="text-primary">Delen Studio, Ukraine</p>
                <p className="text-sm text-zinc-400">
                  Conducted e-commerce user research, optimizing WordPress interfaces based on feedback. Communicated UX
                  solutions to stakeholders, ensuring alignment with business needs.
                </p>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-white">Education</h2>
            <div className="space-y-6">
              <div className="space-y-2 bg-zinc-900 p-4 rounded-lg">
                <div className="flex items-center justify-between">
                  <h3 className="font-medium text-white">MSc in User Experience Design</h3>
                  <span className="text-sm text-zinc-500">2022 - 2023</span>
                </div>
                <p className="text-primary">Caledonian University, Glasgow</p>
              </div>
              <div className="space-y-2 bg-zinc-900 p-4 rounded-lg">
                <div className="flex items-center justify-between">
                  <h3 className="font-medium text-white">Javascript, HTML, CSS, React, PHP BackEnd</h3>
                  <span className="text-sm text-zinc-500">2015 - 2018</span>
                </div>
                <p className="text-primary">BeetRoot | IT STEP Academy, UA</p>
              </div>
              <div className="space-y-2 bg-zinc-900 p-4 rounded-lg">
                <div className="flex items-center justify-between">
                  <h3 className="font-medium text-white">BA Computer Science</h3>
                  <span className="text-sm text-zinc-500">2005 - 2010</span>
                </div>
                <p className="text-primary">University of Shipbuilding, UA</p>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-white">Achievements</h2>
            <div className="space-y-6">
              <div className="space-y-2 bg-zinc-900 p-4 rounded-lg">
                <div className="flex items-center justify-between">
                  <h3 className="font-medium text-white">QA OPEN CONFERENCE, Globallogic</h3>
                  <span className="text-sm text-zinc-500">2022</span>
                </div>
                <p className="text-zinc-400">1st place in PM in team work, qaopen.org</p>
              </div>
              <div className="space-y-2 bg-zinc-900 p-4 rounded-lg">
                <div className="flex items-center justify-between">
                  <h3 className="font-medium text-white">Golden Byte — Startup battle</h3>
                  <span className="text-sm text-zinc-500">2018</span>
                </div>
                <p className="text-zinc-400">Premium participant</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

