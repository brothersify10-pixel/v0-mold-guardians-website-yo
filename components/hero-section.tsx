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
      {/* Animated background particles - More particles for better motion */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-[#FFC107]/30 rounded-full animate-float" style={{ animationDelay: '0s' }}></div>
        <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-[#FFC107]/20 rounded-full animate-float-slow" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-[#FFC107]/40 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-1/3 right-1/4 w-3 h-3 bg-[#FFC107]/25 rounded-full animate-float-slow" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute top-1/2 left-1/6 w-2 h-2 bg-[#FFC107]/35 rounded-full animate-float" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute top-2/3 right-1/5 w-2 h-2 bg-[#FFC107]/30 rounded-full animate-float-slow" style={{ animationDelay: '2.5s' }}></div>
        <div className="absolute bottom-1/2 left-2/3 w-3 h-3 bg-[#FFC107]/25 rounded-full animate-float" style={{ animationDelay: '3s' }}></div>
        <div className="absolute top-3/4 right-2/3 w-2 h-2 bg-[#FFC107]/20 rounded-full animate-float-slow" style={{ animationDelay: '1.8s' }}></div>

        {/* Larger floating elements */}
        <div className="absolute top-1/5 right-1/6 w-4 h-4 bg-[#FFC107]/15 rounded-full animate-float-slow blur-sm" style={{ animationDelay: '0.3s' }}></div>
        <div className="absolute bottom-1/5 left-1/5 w-5 h-5 bg-[#FFC107]/10 rounded-full animate-float blur-sm" style={{ animationDelay: '2.2s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left space-y-6 max-w-2xl">
            <div className="inline-block animate-fade-in-down" style={{ animationDelay: '0.2s', opacity: 0 }}>
              <p className="text-[#FFC107] text-sm font-semibold uppercase tracking-widest">
                Residential Services
              </p>
              <div className="w-full h-1 bg-[#FFC107] mt-1"></div>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-foreground leading-tight animate-fade-in-up" style={{ animationDelay: '0.4s', opacity: 0 }}>
              Mold Removal and Remediation
            </h1>

            <div className="animate-fade-in-up" style={{ animationDelay: '0.6s', opacity: 0 }}>
              <Button
                onClick={onBookInspection}
                size="lg"
                className="bg-[#FFC107] text-[#1A1A1A] hover:bg-[#FFC107]/90 hover:scale-105 font-bold text-lg px-10 py-7 group transition-all duration-300 hover:shadow-2xl hover:shadow-[#FFC107]/50"
              >
                BOOK INSPECTION
                <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>

          {/* Right Content - Starburst Badge */}
          <div className="flex-shrink-0 animate-scale-in" style={{ animationDelay: '0.8s', opacity: 0 }}>
            <div className="relative">
              {/* Starburst Background */}
              <div className="relative w-72 h-72 md:w-80 md:h-80 animate-float-slow">
                {/* Star burst effect */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-64 h-64 md:w-72 md:h-72">
                    {/* Pulsing outer glow rings */}
                    <div className="absolute inset-0 bg-[#FFC107]/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '0s' }} />
                    <div className="absolute inset-0 bg-[#FFC107]/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s', transform: 'scale(1.2)' }} />

                    {/* Black circle with border */}
                    <div className="absolute inset-0 bg-[#1A1A1A] rounded-full border-8 border-[#FFC107] shadow-2xl flex items-center justify-center p-8 hover:scale-110 hover:rotate-3 transition-all duration-500 animate-glow cursor-pointer">
                      <div className="text-center space-y-2">
                        <p className="text-[#FFC107] font-black text-3xl md:text-4xl leading-tight animate-pulse-slow">
                          GET 50% OFF
                        </p>
                        <p className="text-white font-bold text-xl md:text-2xl leading-tight">
                          AN INSPECTION
                        </p>
                        <p className="text-[#FFC107] font-extrabold text-2xl md:text-3xl animate-bounce-slow">
                          TODAY!
                        </p>
                      </div>
                    </div>

                    {/* Rotating glow effect */}
                    <div className="absolute inset-0 bg-[#FFC107]/20 rounded-full blur-2xl animate-pulse" />

                    {/* Multiple rotating rings */}
                    <div className="absolute inset-0 rounded-full border-2 border-[#FFC107]/30 animate-rotate" style={{ borderStyle: 'dashed', animationDuration: '20s' }} />
                    <div className="absolute inset-0 rounded-full border-2 border-[#FFC107]/20 animate-rotate" style={{ borderStyle: 'dotted', animationDuration: '15s', animationDirection: 'reverse' }} />
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
