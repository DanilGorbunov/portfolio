"use client"

import Link from "next/link"
import { Frame, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-800 bg-black/95 backdrop-blur supports-[backdrop-filter]:bg-black/60">
      <div className="container flex h-16 items-center">
        <Link href="/" className="flex items-center gap-2 mr-4">
          <Frame className="h-6 w-6 text-primary" />
          <span className="font-bold text-white">Danil Gorbunov</span>
        </Link>
        {/* Mobile Menu - Only visible on small screens */}
        <div className="md:hidden ml-auto">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-white">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-zinc-900 border-zinc-800">
              <nav className="flex flex-col gap-4 mt-8">
                <Link href="/" className="text-lg font-medium text-white hover:text-primary transition-colors">
                  Home
                </Link>
                <Link href="/portfolio" className="text-lg font-medium text-white hover:text-primary transition-colors">
                  Portfolio
                </Link>
                <Link href="/about" className="text-lg font-medium text-white hover:text-primary transition-colors">
                  About
                </Link>
                <Link href="/contact" className="text-lg font-medium text-white hover:text-primary transition-colors">
                  Contact
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
        {/* Desktop Menu - Only visible on medium screens and up */}
        <nav className="hidden md:flex items-center gap-6 ml-6">
          <Link href="/" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">
            Home
          </Link>
          <Link href="/portfolio" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">
            Portfolio
          </Link>
          <Link href="/about" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">
            About
          </Link>
          <Link href="/contact" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  )
}

