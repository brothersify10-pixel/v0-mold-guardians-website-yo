"use client"

import { useState } from "react"
import { Phone, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navLinks = [
    { href: "#services", label: "Services" },
    { href: "#about", label: "Why Us" },
    { href: "#mold-info", label: "What Is Mold" },
    { href: "#contact", label: "Contact" },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">MG</span>
            </div>
            <span className="text-xl font-bold text-foreground">
              Mold<span className="text-primary">Guardians</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-muted-foreground hover:text-primary transition-colors font-medium"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA & Phone */}
          <div className="hidden md:flex items-center gap-4">
            <a href="tel:1-800-555-5555" className="flex items-center gap-2 text-primary font-semibold">
              <Phone className="w-4 h-4" />
              1-800-555-5555
            </a>
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold">
              Book Inspection
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-muted-foreground hover:text-primary transition-colors font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <a href="tel:1-800-555-5555" className="flex items-center gap-2 text-primary font-semibold py-2">
                <Phone className="w-4 h-4" />
                1-800-555-5555
              </a>
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold w-full">
                Book Inspection
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
