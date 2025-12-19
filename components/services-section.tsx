'use client'

import { useEffect, useRef, useState } from "react"

export function ServicesSection() {
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

  const services = [
    {
      image: "https://images.pexels.com/photos/5997993/pexels-photo-5997993.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "ATTICS",
      description: "Complete attic mold inspection and remediation services",
    },
    {
      image: "https://images.pexels.com/photos/1893229/pexels-photo-1893229.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "WINDOWS",
      description: "Window moisture and mold damage solutions",
    },
    {
      image: "https://images.pexels.com/photos/11899171/pexels-photo-11899171.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "CRAWL SPACE",
      description: "Comprehensive crawl space mold removal",
    },
    {
      image: "https://images.pexels.com/photos/4092030/pexels-photo-4092030.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "BASEMENTS",
      description: "Basement waterproofing and mold prevention",
    },
  ]

  return (
    <section id="services" className="py-20 md:py-28 bg-white" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <div
          className={`text-center mb-16 max-w-4xl mx-auto transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1A1A1A] mb-6 leading-tight">
            Create a Healthier Home with Our Mold Removal & Remediation Services
          </h2>
          <p className="text-[#2D2D2D] text-lg leading-relaxed">
            With extensive experience and expert teams, MoldGuardians specializes in eliminating harmful mold from your home.
            We restore spore counts to safe levels, ensuring your living space is healthy once more.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group flex flex-col items-center text-center space-y-4 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Circular Image Container */}
              <div
                className="circle-image cursor-pointer hover:animate-pulse"
                style={{
                  backgroundImage: `url(${service.image})`
                }}
              />

              {/* Title */}
              <h3 className="text-2xl font-bold text-[#1A1A1A] uppercase tracking-wide group-hover:text-[#FFC107] transition-colors duration-300">
                {service.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
