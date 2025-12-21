'use client'

import { useEffect, useRef, useState } from "react"
import { ShieldCheck, TrendingUp, Home } from "lucide-react"

export function StatisticsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [count, setCount] = useState(0)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isVisible) {
            setIsVisible(true)
          }
        })
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [isVisible])

  // Animated counter
  useEffect(() => {
    if (isVisible && count < 8) {
      const timer = setTimeout(() => setCount(count + 1), 100)
      return () => clearTimeout(timer)
    }
  }, [isVisible, count])

  const trustElements = [
    {
      icon: ShieldCheck,
      title: "Safe & Effective Removal",
      description: "Industry-leading techniques",
    },
    {
      icon: TrendingUp,
      title: "Prevent Future Growth",
      description: "Long-lasting protection",
    },
    {
      icon: Home,
      title: "Restore Your Home's Integrity",
      description: "Complete restoration services",
    },
  ]

  return (
    <section className="py-24 md:py-32 relative overflow-hidden bg-gradient-to-br from-[#1A1A1A] via-[#2D2D2D] to-[#1A1A1A]" ref={sectionRef}>
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-2 h-2 bg-[#FFC107] rounded-full animate-float"></div>
        <div className="absolute top-40 right-20 w-3 h-3 bg-[#FFC107]/50 rounded-full animate-float-slow"></div>
        <div className="absolute bottom-20 left-1/4 w-2 h-2 bg-[#FFC107]/30 rounded-full animate-float"></div>
        <div className="absolute bottom-40 right-1/3 w-2 h-2 bg-[#FFC107] rounded-full animate-float-slow"></div>
        <div className="absolute top-1/2 left-1/3 w-3 h-3 bg-[#FFC107]/40 rounded-full animate-float blur-sm"></div>
        <div className="absolute bottom-1/3 right-1/4 w-2 h-2 bg-[#FFC107]/35 rounded-full animate-float-slow"></div>

        {/* Gradient orbs for ambient glow */}
        <div className="absolute top-1/4 -left-32 w-64 h-64 bg-[#FFC107]/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-[#FFC107]/5 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className={`inline-block bg-primary/10 border border-primary/30 rounded-full px-4 py-2 text-primary text-sm font-semibold mb-6 transition-all duration-700 ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
          }`}>
            Did You Know?
          </span>

          {/* Main Statistic */}
          <div className={`mb-8 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <p className="text-6xl md:text-8xl lg:text-9xl font-black text-primary leading-none animate-shimmer">
              {count} OUT OF 10
            </p>
            <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mt-4">HOUSEHOLDS HAVE MOLD</p>
          </div>

          <p className={`text-white/80 text-lg max-w-2xl mx-auto transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            Mold can be hidden in places you'd never expect. Don't wait until it becomes a serious problem.
          </p>
        </div>

        {/* Trust Elements */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {trustElements.map((element, index) => (
            <div
              key={index}
              className={`group text-center p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-[#FFC107]/50 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#FFC107]/50 hover:scale-105 transition-all duration-500 cursor-pointer ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${(index + 2) * 150}ms` }}
            >
              <div className="relative">
                {/* Glow effect */}
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 rounded-xl blur-xl transition-all duration-500" />

                <div className="relative w-14 h-14 rounded-xl bg-primary/10 group-hover:bg-primary/20 flex items-center justify-center mx-auto mb-4 group-hover:rotate-12 group-hover:scale-125 transition-all duration-300">
                  <element.icon className="w-7 h-7 text-primary group-hover:animate-pulse-slow" />
                </div>
              </div>
              <h3 className="text-lg font-bold text-white mb-1 group-hover:text-primary transition-colors duration-300">{element.title}</h3>
              <p className="text-white/90 text-sm">{element.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
