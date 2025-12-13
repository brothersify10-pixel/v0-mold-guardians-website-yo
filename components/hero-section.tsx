import { Shield, Award, Clock, Users } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  const features = [
    { icon: Clock, label: "Fast Response" },
    { icon: Award, label: "Certified" },
    { icon: Users, label: "Family-Owned" },
    { icon: Shield, label: "30+ Years" },
  ]

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-charcoal to-background" />
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 rounded-full px-4 py-2">
              <Shield className="w-4 h-4 text-primary" />
              <span className="text-primary text-sm font-medium">Licensed, Insured & Certified</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance">
              Create a Healthier Home with <span className="text-primary">Professional Mold Removal</span> & Remediation
            </h1>

            <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
              Protect your family's health and your home's value with our comprehensive mold inspection and removal
              services. Serving the Barrie area for over 30 years.
            </p>

            {/* Feature Pills */}
            <div className="flex flex-wrap gap-3">
              {features.map((feature) => (
                <div key={feature.label} className="flex items-center gap-2 bg-charcoal-light rounded-full px-4 py-2">
                  <feature.icon className="w-4 h-4 text-primary" />
                  <span className="text-foreground text-sm font-medium">{feature.label}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold text-lg px-8 py-6"
              >
                Book Inspection
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold text-lg px-8 py-6 bg-transparent"
              >
                Call 1-800-555-5555
              </Button>
            </div>
          </div>

          {/* Right Content - Promo Badge */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-primary/30 rounded-3xl blur-2xl scale-110" />

              {/* Badge */}
              <div className="relative bg-gradient-to-br from-primary via-primary to-gold-dark rounded-3xl p-8 md:p-12 border-4 border-primary/50 shadow-2xl">
                <div className="text-center space-y-4">
                  <p className="text-primary-foreground/80 font-semibold text-lg uppercase tracking-wider">
                    Limited Time Offer
                  </p>
                  <div className="space-y-1">
                    <p className="text-primary-foreground font-bold text-2xl">GET</p>
                    <p className="text-primary-foreground font-black text-7xl md:text-8xl leading-none">50%</p>
                    <p className="text-primary-foreground font-bold text-2xl">OFF</p>
                  </div>
                  <div className="pt-4 border-t border-primary-foreground/20">
                    <p className="text-primary-foreground font-bold text-xl">AN INSPECTION</p>
                    <p className="text-primary-foreground/80 font-semibold">TODAY!</p>
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
