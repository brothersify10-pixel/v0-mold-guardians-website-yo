"use client"

import { useState, useEffect, useRef } from "react"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import Image from "next/image"

export function TestimonialsSection() {
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

  const testimonials = [
    {
      name: "John D.",
      photo: "https://images.pexels.com/photos/12437056/pexels-photo-12437056.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 5,
      text: "MoldGuardians saved our home! Professional service from start to finish.",
    },
    {
      name: "Sarah M.",
      photo: "https://images.pexels.com/photos/3807517/pexels-photo-3807517.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 5,
      text: "Fast response time and thorough work. Our basement has never been cleaner.",
    },
    {
      name: "Emily R.",
      photo: "https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 5,
      text: "The team was knowledgeable and made us feel at ease. Great experience!",
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section
      className="py-24 md:py-32 relative bg-gradient-to-br from-[#1A1A1A] via-[#2D2D2D] to-[#1A1A1A] overflow-hidden"
      ref={sectionRef}
    >
      {/* Background particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-[#FFC107]/20 rounded-full animate-float blur-sm" style={{ animationDelay: '0s' }}></div>
        <div className="absolute top-1/2 right-1/4 w-2 h-2 bg-[#FFC107]/30 rounded-full animate-float-slow" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/4 left-1/3 w-4 h-4 bg-[#FFC107]/15 rounded-full animate-float blur-sm" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className={`text-center mb-16 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 uppercase tracking-wide">
            HAPPY CUSTOMERS
          </h2>
          <div className="w-32 h-1 bg-[#FFC107] mx-auto" />
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Testimonial Card */}
          <div className={`bg-white/5 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-xl border border-white/10 hover:border-[#FFC107]/50 hover:shadow-2xl hover:shadow-[#FFC107]/20 hover:scale-105 transition-all duration-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            {/* Photo */}
            <div className="flex justify-center mb-6">
              <img
                key={currentIndex}
                src={testimonials[currentIndex].photo}
                alt={testimonials[currentIndex].name}
                className="testimonial-photo animate-scale-in"
              />
            </div>

            {/* Stars */}
            <div className="flex justify-center gap-1 mb-6">
              {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                <Star
                  key={i}
                  className="w-6 h-6 fill-[#FFC107] text-[#FFC107] hover:scale-125 transition-transform duration-300"
                  style={{ animationDelay: `${i * 100}ms` }}
                />
              ))}
            </div>

            {/* Testimonial Text */}
            <p key={`text-${currentIndex}`} className="text-white/90 text-lg md:text-xl leading-relaxed text-center mb-8 italic animate-fade-in-up">
              "{testimonials[currentIndex].text}"
            </p>

            {/* Customer Info */}
            <div key={`name-${currentIndex}`} className="text-center animate-fade-in-up" style={{ animationDelay: '200ms' }}>
              <p className="text-[#FFC107] font-bold text-xl">- {testimonials[currentIndex].name}</p>
            </div>
          </div>

          {/* Navigation Arrows */}
          <div className={`flex justify-center gap-4 mt-8 transition-all duration-700 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <button
              onClick={prevTestimonial}
              className="w-12 h-12 rounded-full bg-gradient-to-br from-[#FFC107] to-[#E5AC00] text-[#1A1A1A] hover:scale-125 hover:rotate-12 transition-all duration-300 flex items-center justify-center shadow-lg shadow-[#FFC107]/50"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextTestimonial}
              className="w-12 h-12 rounded-full bg-gradient-to-br from-[#FFC107] to-[#E5AC00] text-[#1A1A1A] hover:scale-125 hover:rotate-12 transition-all duration-300 flex items-center justify-center shadow-lg shadow-[#FFC107]/50"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className={`flex justify-center gap-2 mt-6 transition-all duration-700 delay-400 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 hover:scale-125 ${
                  index === currentIndex ? "bg-[#FFC107] w-8" : "bg-gray-300"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
