"use client"

import { useState } from "react"
import { Phone, Menu, X, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

interface HeaderProps {
  onBookInspection: () => void
}

export function Header({ onBookInspection }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navLinks = [
    { href: "#", label: "Home" },
    { href: "#services", label: "Services" },
    { href: "#quote", label: "Quote" },
    { href: "#about", label: "About" },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-[#1A1A1A] via-[#2D2D2D] to-[#1A1A1A] backdrop-blur-sm border-b border-[#FFC107]/20 shadow-2xl shadow-[#FFC107]/10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo with Brand Name */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="relative">
              {/* Glow effect behind logo */}
              <div className="absolute inset-0 bg-[#FFC107]/0 group-hover:bg-[#FFC107]/20 rounded-lg blur-xl transition-all duration-500" />

              <Image
                src="/logo.jpeg"
                alt="MoldGuardians Logo"
                width={180}
                height={60}
                className="h-12 md:h-14 w-auto object-contain relative z-10 group-hover:scale-105 transition-all duration-300 rounded-lg"
                priority
              />
            </div>

            {/* Brand Name */}
            <div className="hidden sm:block">
              <h1 className="text-2xl md:text-3xl font-black bg-gradient-to-r from-[#FFC107] via-[#E5AC00] to-[#FFC107] bg-clip-text text-transparent group-hover:scale-105 transition-all duration-300">
                MoldGuardians
              </h1>
              <div className="h-0.5 bg-gradient-to-r from-transparent via-[#FFC107] to-transparent group-hover:via-[#FFC107]/50 transition-all duration-300"></div>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link, index) => (
              <a
                key={link.href}
                href={link.href}
                className="text-white hover:text-[#FFC107] transition-all duration-300 font-semibold hover:scale-110 relative group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#FFC107] group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
            <button
              className="text-white hover:text-[#FFC107] transition-all duration-300 hover:scale-110 hover:rotate-12"
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>
          </nav>

          {/* CTA & Phone */}
          <div className="hidden md:flex items-center gap-4">
            <a href="tel:1800-730-3183" className="flex items-center gap-2 text-[#FFC107] font-bold hover:text-[#E5AC00] transition-all duration-300 hover:scale-105">
              <Phone className="w-4 h-4 animate-bounce-slow" />
              1800-730-3183
            </a>
            <Button
              onClick={onBookInspection}
              className="bg-[#FFC107] text-[#1A1A1A] hover:bg-[#E5AC00] hover:scale-110 hover:shadow-2xl hover:shadow-[#FFC107]/50 font-bold transition-all duration-500"
            >
              Book Inspection
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-white hover:text-[#FFC107] transition-colors duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-[#FFC107]/20">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-white hover:text-[#FFC107] transition-colors font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <a href="tel:1800-730-3183" className="flex items-center gap-2 text-[#FFC107] font-bold py-2">
                <Phone className="w-4 h-4" />
                1800-730-3183
              </a>
              <Button
                onClick={() => {
                  onBookInspection()
                  setIsMenuOpen(false)
                }}
                className="bg-[#FFC107] text-[#1A1A1A] hover:bg-[#E5AC00] font-bold w-full"
              >
                Book Inspection
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
