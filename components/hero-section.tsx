import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"

interface HeroSectionProps {
  onBookInspection: () => void
}

export function HeroSection({ onBookInspection }: HeroSectionProps) {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden parallax"
      style={{
        backgroundImage: 'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(https://images.pexels.com/photos/4099260/pexels-photo-4099260.jpeg?auto=compress&cs=tinysrgb&w=1920)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left space-y-6 max-w-2xl">
            <div className="inline-block">
              <p className="text-[#FFC107] text-sm font-semibold uppercase tracking-widest">
                Residential Services
              </p>
              <div className="w-full h-1 bg-[#FFC107] mt-1"></div>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-foreground leading-tight">
              Mold Removal and Remediation
            </h1>

            <Button
              onClick={onBookInspection}
              size="lg"
              className="bg-[#FFC107] text-[#1A1A1A] hover:bg-[#FFC107]/90 font-bold text-lg px-10 py-7 group"
            >
              BOOK INSPECTION
              <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Right Content - Starburst Badge */}
          <div className="flex-shrink-0">
            <div className="relative">
              {/* Starburst Background */}
              <div className="relative w-72 h-72 md:w-80 md:h-80">
                {/* Star burst effect */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-64 h-64 md:w-72 md:h-72">
                    {/* Black circle with border */}
                    <div className="absolute inset-0 bg-[#1A1A1A] rounded-full border-8 border-[#FFC107] shadow-2xl flex items-center justify-center p-8">
                      <div className="text-center space-y-2">
                        <p className="text-[#FFC107] font-black text-3xl md:text-4xl leading-tight">
                          GET 50% OFF
                        </p>
                        <p className="text-white font-bold text-xl md:text-2xl leading-tight">
                          AN INSPECTION
                        </p>
                        <p className="text-[#FFC107] font-extrabold text-2xl md:text-3xl">
                          TODAY!
                        </p>
                      </div>
                    </div>

                    {/* Rotating glow effect */}
                    <div className="absolute inset-0 bg-[#FFC107]/20 rounded-full blur-2xl animate-pulse" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
