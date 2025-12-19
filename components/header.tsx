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
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center">
            <Image
              src="/logo.jpeg"
              alt="MoldGuardians Logo"
              width={180}
              height={60}
              className="h-12 md:h-14 w-auto object-contain"
              priority
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link, index) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[#2D2D2D] hover:text-[#FFC107] transition-all duration-300 font-semibold hover:scale-110 relative group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#FFC107] group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
            <button
              className="text-[#2D2D2D] hover:text-[#FFC107] transition-all duration-300 hover:scale-110 hover:rotate-12"
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>
          </nav>

          {/* CTA & Phone */}
          <div className="hidden md:flex items-center gap-4">
            <a href="tel:1-800-555-5555" className="flex items-center gap-2 text-primary font-semibold hover:text-primary/80 transition-all duration-300 hover:scale-105">
              <Phone className="w-4 h-4 animate-bounce-slow" />
              1-800-555-5555
            </a>
            <Button
              onClick={onBookInspection}
              className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold hover:scale-105 hover:shadow-lg hover:shadow-primary/50 transition-all duration-300"
            >
              Book Inspection
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-[#1A1A1A]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-[#2D2D2D] hover:text-[#FFC107] transition-colors font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <a href="tel:1-800-555-5555" className="flex items-center gap-2 text-primary font-semibold py-2">
                <Phone className="w-4 h-4" />
                1-800-555-5555
              </a>
              <Button
                onClick={() => {
                  onBookInspection()
                  setIsMenuOpen(false)
                }}
                className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold w-full"
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
