"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";

export function Footer() {
  const pathname = usePathname()

  const isActive = (path: string) => {
    if (path === "/") {
      return pathname === "/"
    }
    return pathname.startsWith(path)
  }
  return (
    <footer className="border-t border-zinc-800 bg-black">
      <div className="container px-4 py-8 md:px-6">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          {/* Navigation Menu */}
          <nav className="flex flex-wrap gap-6 text-sm">
            <Link
              href="/"
              className={`transition-colors ${
                isActive("/") 
                  ? "text-primary" 
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              Home
            </Link>
            <Link
              href="/portfolio"
              className={`transition-colors ${
                isActive("/portfolio") 
                  ? "text-primary" 
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              Portfolio
            </Link>
            <Link
              href="/about"
              className={`transition-colors ${
                isActive("/about") 
                  ? "text-primary" 
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              About
            </Link>
            <Link
              href="/contact"
              className={`transition-colors ${
                isActive("/contact") 
                  ? "text-primary" 
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* Copyright */}
          <div className="text-sm text-zinc-400">
            © 2025 Danil Gorbunov. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
} 