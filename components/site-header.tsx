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
    <header className="sticky top-0 z-50 w-full bg-black/95 backdrop-blur supports-[backdrop-filter]:bg-black/60">
      <div className="container flex h-16 items-center justify-center relative">
        {/* Mobile Menu - Only visible on small screens */}
        <div className="md:hidden absolute right-0">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-white">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-zinc-900 border-zinc-800 [&>button]:hidden">
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
                    className={`text-lg font-medium transition-colors ${
                      isActive("/") 
                        ? "text-primary" 
                        : "text-white hover:text-primary"
                    }`} 
                    onClick={handleLinkClick}
                  >
                    Portfolio
                  </Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link 
                    href="/about" 
                    className={`text-lg font-medium transition-colors ${
                      isActive("/about") 
                        ? "text-primary" 
                        : "text-white hover:text-primary"
                    }`} 
                    onClick={handleLinkClick}
                  >
                    About
                  </Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link 
                    href="/contact" 
                    className={`text-lg font-medium transition-colors ${
                      isActive("/contact") 
                        ? "text-primary" 
                        : "text-white hover:text-primary"
                    }`} 
                    onClick={handleLinkClick}
                  >
                    Contact
                  </Link>
                </SheetClose>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
        
        {/* Centered Content: Logo and Desktop Menu */}
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
            <span className="font-bold text-white">Danil Gorbunov</span>
          </Link>
          {/* Desktop Menu - Only visible on medium screens and up */}
          <nav className="hidden md:flex items-center gap-6" role="navigation" aria-label="Main navigation">
            <Link
              href="/"
              className={`text-sm font-medium transition-colors ${
                isActive("/")
                  ? "text-primary"
                  : "text-zinc-400 hover:text-white"
              }`}
              aria-current={isActive("/") ? "page" : undefined}
            >
              Portfolio
            </Link>
            <Link
              href="/about"
              className={`text-sm font-medium transition-colors ${
                isActive("/about")
                  ? "text-primary"
                  : "text-zinc-400 hover:text-white"
              }`}
              aria-current={isActive("/about") ? "page" : undefined}
            >
              About
            </Link>
            <Link
              href="/contact"
              className={`text-sm font-medium transition-colors ${
                isActive("/contact")
                  ? "text-primary"
                  : "text-zinc-400 hover:text-white"
              }`}
              aria-current={isActive("/contact") ? "page" : undefined}
            >
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}

