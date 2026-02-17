"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet"
import { useState } from "react"

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const handleLinkClick = () => {
    setIsOpen(false)
  }

  const isActive = (path: string) => {
    if (path === "/") {
      return pathname === "/" || pathname === "/portfolio"
    }
    return pathname.startsWith(path)
  }

  return (
    <header className="sticky top-0 z-50 w-full bg-[#0A0A0A]/95 backdrop-blur supports-[backdrop-filter]:bg-[#0A0A0A]/80 border-b border-[#171717]">
      <div className="container flex h-16 items-center justify-between relative">
        {/* Mobile Menu - Only visible on small screens */}
        <div className="md:hidden absolute right-0">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-white">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-[#0A0A0A] border-[#171717] [&>button]:hidden">
              {/* Custom close button without green border */}
              <button
                onClick={() => setIsOpen(false)}
                className="absolute right-4 top-4 rounded-sm opacity-70 transition-opacity hover:opacity-100 focus:outline-none disabled:pointer-events-none"
              >
                <svg
                  className="h-4 w-4 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
                <span className="sr-only">Close</span>
              </button>
              
              <nav className="flex flex-col gap-4 mt-8">
                <SheetClose asChild>
                  <Link 
                    href="/" 
                    className={`text-lg font-normal transition-colors duration-200 ${
                      isActive("/") 
                        ? "text-[#E5E5E5]" 
                        : "text-[#A3A3A3] hover:text-[#E5E5E5]"
                    }`} 
                    onClick={handleLinkClick}
                  >
                    Cases
                  </Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link 
                    href="/about" 
                    className={`text-lg font-normal transition-colors duration-200 ${
                      isActive("/about") 
                        ? "text-[#E5E5E5]" 
                        : "text-[#A3A3A3] hover:text-[#E5E5E5]"
                    }`} 
                    onClick={handleLinkClick}
                  >
                    About
                  </Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link 
                    href="/blog" 
                    className={`text-lg font-normal transition-colors duration-200 ${
                      isActive("/blog") 
                        ? "text-[#E5E5E5]" 
                        : "text-[#A3A3A3] hover:text-[#E5E5E5]"
                    }`} 
                    onClick={handleLinkClick}
                  >
                    Blog
                  </Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link 
                    href="/contact" 
                    className={`text-lg font-normal transition-colors duration-200 ${
                      isActive("/contact") 
                        ? "text-[#E5E5E5]" 
                        : "text-[#A3A3A3] hover:text-[#E5E5E5]"
                    }`} 
                    onClick={handleLinkClick}
                  >
                    Contact
                  </Link>
                </SheetClose>
                <SheetClose asChild>
                  <a 
                    href="https://docs.google.com/document/d/1WwxpZTSp-hC8xkBv4D9ibtW9oBvNtgGF87YHIqPSgEE/edit?usp=sharing" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg font-normal transition-colors duration-200 text-[#A3A3A3] hover:text-[#E5E5E5]"
                    onClick={handleLinkClick}
                  >
                    CV
                  </a>
                </SheetClose>
                <SheetClose asChild>
                  <a 
                    href="https://t.me/+380934486559" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-lg font-normal transition-colors duration-200 text-[#E5E5E5] hover:text-[#F5F5F5] bg-[#262626] hover:bg-[#404040] px-4 py-2 rounded-lg"
                    onClick={handleLinkClick}
                  >
                    Schedule a Call
                  </a>
                </SheetClose>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
        
        {/* Left Side: Logo and Desktop Menu */}
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center gap-2">
            <svg 
              className="h-6 w-6" 
              viewBox="0 0 24 16" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="24" height="8" fill="#0057B7" />
              <rect y="8" width="24" height="8" fill="#FFD700" />
            </svg>
            <span className="font-normal text-[#E5E5E5]">Danil Gorbunov</span>
          </Link>
          {/* Desktop Menu - Only visible on medium screens and up */}
          <nav className="hidden md:flex items-center gap-6" role="navigation" aria-label="Main navigation">
            <Link
              href="/"
              className={`text-sm font-normal transition-colors duration-200 ${
                isActive("/")
                  ? "text-[#E5E5E5]"
                  : "text-[#737373] hover:text-[#A3A3A3]"
              }`}
              aria-current={isActive("/") ? "page" : undefined}
            >
              Cases
            </Link>
            <Link
              href="/about"
              className={`text-sm font-normal transition-colors duration-200 ${
                isActive("/about")
                  ? "text-[#E5E5E5]"
                  : "text-[#737373] hover:text-[#A3A3A3]"
              }`}
              aria-current={isActive("/about") ? "page" : undefined}
            >
              About
            </Link>
            <Link
              href="/blog"
              className={`text-sm font-normal transition-colors duration-200 ${
                isActive("/blog")
                  ? "text-[#E5E5E5]"
                  : "text-[#737373] hover:text-[#A3A3A3]"
              }`}
              aria-current={isActive("/blog") ? "page" : undefined}
            >
              Blog
            </Link>
            <Link
              href="/contact"
              className={`text-sm font-normal transition-colors duration-200 ${
                isActive("/contact")
                  ? "text-[#E5E5E5]"
                  : "text-[#737373] hover:text-[#A3A3A3]"
              }`}
              aria-current={isActive("/contact") ? "page" : undefined}
            >
              Contact
            </Link>
            <a
              href="https://docs.google.com/document/d/1WwxpZTSp-hC8xkBv4D9ibtW9oBvNtgGF87YHIqPSgEE/edit?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-normal transition-colors duration-200 text-[#737373] hover:text-[#A3A3A3]"
            >
              CV
            </a>
            <a
              href="https://t.me/+380934486559"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-normal transition-colors duration-200 text-[#E5E5E5] hover:text-[#F5F5F5] bg-[#262626] hover:bg-[#404040] px-4 py-2 rounded-lg"
            >
              Schedule a Call
            </a>
          </nav>
        </div>
      </div>
    </header>
  )
}

