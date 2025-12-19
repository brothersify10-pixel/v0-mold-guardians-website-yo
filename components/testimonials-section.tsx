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
      className="py-20 md:py-28 relative bg-[#F5F5F5]"
      ref={sectionRef}
    >
      <div className="container mx-auto px-4">
        <div className={`text-center mb-16 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-4 uppercase tracking-wide">
            HAPPY CUSTOMERS
          </h2>
          <div className="w-32 h-1 bg-[#FFC107] mx-auto" />
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Testimonial Card */}
          <div className={`bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 md:p-12 shadow-xl border border-gray-100 hover:shadow-2xl hover:scale-105 transition-all duration-500 ${
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
            <p key={`text-${currentIndex}`} className="text-[#2D2D2D] text-lg md:text-xl leading-relaxed text-center mb-8 italic animate-fade-in-up">
              "{testimonials[currentIndex].text}"
            </p>

            {/* Customer Info */}
            <div key={`name-${currentIndex}`} className="text-center animate-fade-in-up" style={{ animationDelay: '200ms' }}>
              <p className="text-[#1A1A1A] font-bold text-xl">- {testimonials[currentIndex].name}</p>
            </div>
          </div>

          {/* Navigation Arrows */}
          <div className={`flex justify-center gap-4 mt-8 transition-all duration-700 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <button
              onClick={prevTestimonial}
              className="w-12 h-12 rounded-full bg-[#1A1A1A] text-white hover:bg-[#FFC107] hover:text-[#1A1A1A] hover:scale-110 transition-all duration-300 flex items-center justify-center"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextTestimonial}
              className="w-12 h-12 rounded-full bg-[#1A1A1A] text-white hover:bg-[#FFC107] hover:text-[#1A1A1A] hover:scale-110 transition-all duration-300 flex items-center justify-center"
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
