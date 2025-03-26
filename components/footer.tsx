import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-zinc-800 bg-black">
      <div className="container px-4 py-8 md:px-6">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          {/* Navigation Menu */}
          <nav className="flex flex-wrap gap-6 text-sm">
            <Link
              href="/"
              className="text-zinc-400 hover:text-white transition-colors"
            >
              Home
            </Link>
            <Link
              href="/portfolio"
              className="text-zinc-400 hover:text-white transition-colors"
            >
              Portfolio
            </Link>
            <Link
              href="/about"
              className="text-zinc-400 hover:text-white transition-colors"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-zinc-400 hover:text-white transition-colors"
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