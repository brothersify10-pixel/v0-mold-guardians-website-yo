'use client'

import { useEffect, useRef, useState } from "react"
import { AlertCircle } from "lucide-react"

export function SymptomsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
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
  }, [])

  const symptoms = [
    "1. Stuffy nose or sinus pressure",
    "2. Itchy or watery eyes",
    "3. Coughing and wheezing",
    "4. Excessive sneezing",
    "5. Throat irritation",
    "6. Skin irritation or rashes",
    "7. Chronic headaches",
    "8. Fatigue and weakness",
    "9. Cognitive or mood changes",
    "10. Muscle and joint pain",
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
        <div className="max-w-7xl mx-auto">
          {/* Centered Header */}
          <div className="text-center mb-12">
            <h2 className={`text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
            }`}>
              TOP 10 MOLD EXPOSURE SYMPTOMS
            </h2>
            <div className={`w-24 h-1 bg-gradient-to-r from-transparent via-[#FFC107] to-transparent mx-auto mb-8 transition-all duration-700 ${
              isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
            }`}></div>
          </div>

          {/* Centered symptoms grid */}
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {symptoms.map((symptom, index) => (
              <div
                key={index}
                className={`flex items-center gap-3 text-white/90 text-lg font-medium p-4 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 hover:border-[#FFC107]/50 hover:-translate-y-2 hover:shadow-xl hover:shadow-[#FFC107]/30 transition-all duration-500 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 80}ms` }}
              >
                <AlertCircle className="w-5 h-5 text-[#FFC107] flex-shrink-0" />
                {symptom}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
