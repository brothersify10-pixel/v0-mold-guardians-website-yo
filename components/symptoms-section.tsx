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
    <section className="py-20 md:py-28 bg-gradient-to-br from-[#1A1A1A] via-[#2D2D2D] to-[#1A1A1A] relative overflow-hidden" ref={sectionRef}>
      {/* Background particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-[#FFC107]/20 rounded-full animate-float blur-sm" style={{ animationDelay: '0s' }}></div>
        <div className="absolute top-1/2 right-1/4 w-2 h-2 bg-[#FFC107]/30 rounded-full animate-float-slow" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/4 left-1/3 w-4 h-4 bg-[#FFC107]/15 rounded-full animate-float blur-sm" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Left Content */}
          <div className="space-y-8">
            <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}>
              TOP 10 MOLD EXPOSURE SYMPTOMS
            </h2>

            <div className="space-y-4">
              {symptoms.map((symptom, index) => (
                <div
                  key={index}
                  className={`flex items-center gap-3 text-white/90 text-lg font-medium p-3 rounded-lg bg-white/5 border border-white/10 hover:bg-[#FFC107]/20 hover:border-[#FFC107]/50 hover:translate-x-2 transition-all duration-300 ${
                    isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
                  }`}
                  style={{ transitionDelay: `${index * 80 + 200}ms` }}
                >
                  <AlertCircle className="w-5 h-5 text-[#FFC107] flex-shrink-0" />
                  {symptom}
                </div>
              ))}
            </div>
          </div>

          {/* Right Image */}
          <div
            className={`h-[400px] md:h-[500px] rounded-2xl bg-cover bg-center border-[5px] border-[#FFC107] shadow-xl shadow-[#FFC107]/20 hover:shadow-2xl hover:shadow-[#FFC107]/40 hover:scale-105 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
            style={{
              backgroundImage: "url('https://images.pexels.com/photos/1893229/pexels-photo-1893229.jpeg?auto=compress&cs=tinysrgb&w=800')",
            }}
          />
        </div>
      </div>
    </section>
  )
}
