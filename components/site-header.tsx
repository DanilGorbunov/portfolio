"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Frame, Menu } from "lucide-react"
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
      return pathname === "/"
    }
    return pathname.startsWith(path)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-800 bg-black/95 backdrop-blur supports-[backdrop-filter]:bg-black/60">
      <div className="container flex h-16 items-center">
        <Link href="/" className="flex items-center gap-2 mr-4">
          <Frame className="h-6 w-6 text-primary" />
          <span className="font-bold text-white">Danil Gorbunov</span>
        </Link>
        {/* Mobile Menu - Only visible on small screens */}
        <div className="md:hidden ml-auto">
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
                    Home
                  </Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link 
                    href="/portfolio" 
                    className={`text-lg font-medium transition-colors ${
                      isActive("/portfolio") 
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
        {/* Desktop Menu - Only visible on medium screens and up */}
        <nav className="hidden md:flex items-center gap-6 ml-6" role="navigation" aria-label="Main navigation">
          <Link 
            href="/" 
            className={`text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-black rounded px-2 py-1 ${
              isActive("/") 
                ? "text-primary" 
                : "text-zinc-400 hover:text-white"
            }`}
            aria-current={isActive("/") ? "page" : undefined}
          >
            Home
          </Link>
          <Link 
            href="/portfolio" 
            className={`text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-black rounded px-2 py-1 ${
              isActive("/portfolio") 
                ? "text-primary" 
                : "text-zinc-400 hover:text-white"
            }`}
            aria-current={isActive("/portfolio") ? "page" : undefined}
          >
            Portfolio
          </Link>
          <Link 
            href="/about" 
            className={`text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-black rounded px-2 py-1 ${
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
            className={`text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-black rounded px-2 py-1 ${
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
    </header>
  )
}

