import { Button } from "@/components/ui/button"
import { Phone } from "lucide-react"

interface CTABannerProps {
  onBookInspection: () => void
}

export function CTABanner({ onBookInspection }: CTABannerProps) {
  return (
    <section
      className="py-24 md:py-32 relative parallax"
      style={{
        backgroundImage: 'linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8)), url(https://images.pexels.com/photos/5353875/pexels-photo-5353875.jpeg?auto=compress&cs=tinysrgb&w=1920)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Large Phone Number */}
          <a
            href="tel:1800-730-3183"
            className="block group transition-transform hover:scale-105"
          >
            <div className="flex items-center justify-center gap-4 mb-4">
              <Phone className="w-16 h-16 md:w-20 md:h-20 text-[#FFC107]" />
              <p className="text-5xl md:text-6xl lg:text-7xl font-black text-[#FFC107] tracking-tight">
                1800-730-3183
              </p>
            </div>
          </a>

          {/* Call to Action Text */}
          <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight">
            Call Today for a FREE Consultation!
          </p>

          {/* Button */}
          <Button
            onClick={onBookInspection}
            size="lg"
            className="bg-[#FFC107] text-[#1A1A1A] hover:bg-[#E5AC00] font-bold text-lg px-12 py-8 text-xl mt-8"
          >
            SCHEDULE INSPECTION
          </Button>
        </div>
      </div>
    </section>
  )
}
