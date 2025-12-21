import Image from "next/image"
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Rss } from "lucide-react"

export function Footer() {
  const servicesLinks = [
    { label: "All Services", href: "#services" },
    { label: "Mold Removal", href: "#services" },
    { label: "Mold Damage", href: "#services" },
    { label: "What Is Mold", href: "#mold-info" },
  ]

  const companyLinks = [
    { label: "About Us", href: "#about" },
    { label: "How It Works", href: "#" },
    { label: "Pricing", href: "#quote" },
    { label: "Contact Us", href: "#contact" },
  ]

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Rss, href: "#", label: "RSS" },
  ]

  return (
    <footer className="bg-[#2D2D2D] text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Column 1 - Contact Info */}
          <div className="space-y-6">
            <h3 className="text-[#FFC107] text-xl font-bold uppercase mb-4">Contact</h3>
            <div className="space-y-4">
              <a
                href="tel:1800-730-3183"
                className="flex items-center gap-3 text-gray-300 hover:text-[#FFC107] transition-colors"
              >
                <Phone className="w-5 h-5" />
                <span>1800-730-3183</span>
              </a>
              <a
                href="mailto:info@moldguardians.com"
                className="flex items-center gap-3 text-gray-300 hover:text-[#FFC107] transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span>info@moldguardians.com</span>
              </a>
              <div className="flex items-start gap-3 text-gray-300">
                <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
                <span>123 Nowhere St.<br />Barrie, ON L4N 7G8</span>
              </div>
            </div>
          </div>

          {/* Column 2 - Services */}
          <div>
            <h3 className="text-[#FFC107] text-xl font-bold uppercase mb-4">Services</h3>
            <ul className="space-y-3">
              {servicesLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-gray-300 hover:text-[#FFC107] transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Company */}
          <div>
            <h3 className="text-[#FFC107] text-xl font-bold uppercase mb-4">Company</h3>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-gray-300 hover:text-[#FFC107] transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 - Logo & Social */}
          <div className="space-y-6">
            <Image
              src="/botom-logo.jpeg"
              alt="MoldGuardians Logo"
              width={200}
              height={70}
              className="h-16 w-auto object-contain"
            />
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-[#1A1A1A] flex items-center justify-center text-[#FFC107] hover:bg-[#FFC107] hover:text-[#1A1A1A] transition-all duration-300"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-600 mt-12 pt-8 text-center">
          <p className="text-gray-400 text-sm">© 2025 MoldGuardians - All Rights Reserved</p>
        </div>
      </div>
    </footer>
  )
}
