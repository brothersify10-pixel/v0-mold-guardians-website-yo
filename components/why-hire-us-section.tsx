import { Check } from "lucide-react"

export function WhyHireUsSection() {
  const reasons = [
    "Family owned",
    "30+ Years experience",
    "Realtors love us",
    "We are local",
    "Quick response times",
    "Licensed, insured & certified",
  ]

  return (
    <section id="about" className="py-20 md:py-28 bg-[#F5F5F5]">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Left - Large Image */}
          <div
            className="h-[400px] md:h-[500px] rounded-2xl bg-cover bg-center shadow-2xl"
            style={{
              backgroundImage: "url('https://images.pexels.com/photos/5998697/pexels-photo-5998697.jpeg?auto=compress&cs=tinysrgb&w=1280')",
            }}
          />

          {/* Right - Content */}
          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1A1A1A] leading-tight">
              Protecting Families & Pets Since 1994
            </h2>

            <div className="space-y-4">
              {reasons.map((reason, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#FFC107] flex items-center justify-center">
                    <Check className="w-5 h-5 text-[#1A1A1A]" />
                  </div>
                  <span className="text-[#2D2D2D] text-lg font-semibold">{reason}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
