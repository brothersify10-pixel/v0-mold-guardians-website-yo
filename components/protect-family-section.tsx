import { Facebook, Twitter, Instagram, Rss } from "lucide-react"

export function ProtectFamilySection() {
  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Rss, href: "#", label: "RSS" },
  ]

  return (
    <section className="relative bg-[#FFC107] py-20 md:py-28 overflow-hidden">
      {/* Wave SVG at top */}
      <div className="absolute top-0 left-0 right-0 w-full overflow-hidden leading-none">
        <svg
          className="relative block w-full h-20 md:h-32"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          fill="white"
        >
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10 pt-12">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Main Heading */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1A1A1A] leading-tight">
            Protect Your Family's & Pets Health and Your Home's Value
          </h2>

          {/* Subtext */}
          <p className="text-[#1A1A1A] text-lg md:text-xl font-semibold">
            Eliminate health risks • Prevent future growth • Restore your home's integrity
          </p>

          {/* Connect With Us */}
          <div className="pt-8">
            <p className="text-[#1A1A1A] text-xl font-bold mb-6">Connect With Us</p>

            {/* Social Icons */}
            <div className="flex justify-center gap-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-14 h-14 rounded-full bg-[#1A1A1A] flex items-center justify-center text-[#FFC107] hover:bg-[#2D2D2D] hover:scale-110 transition-all duration-300"
                >
                  <social.icon className="w-7 h-7" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
