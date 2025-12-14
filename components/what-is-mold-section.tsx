import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"

export function WhatIsMoldSection() {
  return (
    <section
      id="mold-info"
      className="py-20 md:py-32 relative overflow-hidden parallax"
      style={{
        backgroundImage: 'linear-gradient(rgba(26,26,26,0.85), rgba(26,26,26,0.85)), url(https://images.pexels.com/photos/209230/pexels-photo-209230.jpeg?auto=compress&cs=tinysrgb&w=1920)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Yellow accent line */}
          <div className="w-1 h-24 bg-[#FFC107] mb-8" />

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Identify Mold with MoldGuardian's Residential Mold Damage Services
          </h2>

          <p className="text-white/90 text-lg md:text-xl leading-relaxed max-w-3xl">
            To effectively prevent mold damage, it's important to understand what mold is, how it can affect your home,
            and how to spot the early warning signs.
          </p>

          <Button
            size="lg"
            className="bg-[#FFC107] text-[#1A1A1A] hover:bg-[#FFC107]/90 font-bold text-lg px-10 py-7 group"
          >
            MORE ABOUT WHAT IS MOLD
            <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>

          {/* Floating Stat Box */}
          <div className="mt-16 inline-block bg-[#FFC107] rounded-2xl p-8 shadow-2xl">
            <p className="text-[#1A1A1A] font-black text-2xl md:text-3xl text-center leading-tight">
              DID YOU KNOW?<br />
              <span className="text-3xl md:text-4xl">8 OUT OF 10</span><br />
              HOUSEHOLDS HAVE MOLD
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
