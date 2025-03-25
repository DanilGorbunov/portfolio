import Link from "next/link"
import { ArrowLeft, Mail, MapPin, Phone, Globe, Linkedin, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ContactPage() {
  return (
    <div className="container px-4 py-12 md:px-6 md:py-24 bg-black min-h-screen">
      <div className="mb-8 flex items-center">
        <Link href="/">
          <Button variant="ghost" size="sm" className="text-zinc-400 hover:text-white">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
        </Link>
      </div>
      
      <div className="max-w-4xl mx-auto">
        <div className="mb-12 space-y-4">
          <h1 className="text-4xl font-bold tracking-tight text-white">Let's Connect</h1>
          <p className="max-w-[700px] text-xl text-zinc-400">
            I'm always excited to collaborate on innovative projects and discuss creative opportunities.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {/* Direct Contact */}
          <div className="space-y-6 bg-zinc-900/50 p-8 rounded-xl border border-zinc-800/50 backdrop-blur-sm">
            <h2 className="text-2xl font-bold text-white">Direct Contact</h2>
            <div className="space-y-6">
              <a href="mailto:danilgorbunov@gmail.com" 
                className="flex items-center gap-4 p-4 bg-zinc-800/50 rounded-lg hover:bg-zinc-800 transition-all">
                <Mail className="h-6 w-6 text-primary" />
                <div>
                  <h3 className="font-medium text-white">Email</h3>
                  <p className="text-zinc-400">danilgorbunov@gmail.com</p>
                </div>
              </a>
              <a href="tel:+421907077202" 
                className="flex items-center gap-4 p-4 bg-zinc-800/50 rounded-lg hover:bg-zinc-800 transition-all">
                <Phone className="h-6 w-6 text-primary" />
                <div>
                  <h3 className="font-medium text-white">Phone</h3>
                  <p className="text-zinc-400">+421 90 70 77 202</p>
                </div>
              </a>
            </div>
          </div>

          {/* Location & Social */}
          <div className="space-y-6 bg-zinc-900/50 p-8 rounded-xl border border-zinc-800/50 backdrop-blur-sm">
            <h2 className="text-2xl font-bold text-white">Location & Social</h2>
            <div className="space-y-6">
              <div className="flex items-center gap-4 p-4 bg-zinc-800/50 rounded-lg">
                <MapPin className="h-6 w-6 text-primary" />
                <div>
                  <h3 className="font-medium text-white">Based in</h3>
                  <p className="text-zinc-400">Bratislava, Slovakia</p>
                </div>
              </div>
              <a href="https://linkedin.com/in/danilgorbunov" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-zinc-800/50 rounded-lg hover:bg-zinc-800 transition-all">
                <Linkedin className="h-6 w-6 text-primary" />
                <div>
                  <h3 className="font-medium text-white">LinkedIn</h3>
                  <p className="text-zinc-400">linkedin.com/in/danilgorbunov</p>
                </div>
                <ExternalLink className="h-4 w-4 text-zinc-500 ml-auto" />
              </a>
              <a href="https://dangorbunov.vercel.app" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-zinc-800/50 rounded-lg hover:bg-zinc-800 transition-all">
                <Globe className="h-6 w-6 text-primary" />
                <div>
                  <h3 className="font-medium text-white">Portfolio</h3>
                  <p className="text-zinc-400">dangorbunov.vercel.app</p>
                </div>
                <ExternalLink className="h-4 w-4 text-zinc-500 ml-auto" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center text-zinc-400">
          <p>Available for freelance projects and full-time opportunities</p>
        </div>
      </div>
    </div>
  )
}

