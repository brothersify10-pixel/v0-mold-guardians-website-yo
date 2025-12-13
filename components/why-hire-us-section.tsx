import { Users, Award, Heart, MapPin, Clock, ShieldCheck } from "lucide-react"
import { Button } from "@/components/ui/button"

export function WhyHireUsSection() {
  const reasons = [
    {
      icon: Users,
      title: "Family Owned",
      description: "A trusted family business dedicated to your home's safety",
    },
    {
      icon: Award,
      title: "30+ Years Experience",
      description: "Decades of expertise in mold remediation and prevention",
    },
    {
      icon: Heart,
      title: "Realtors Love Us",
      description: "The go-to choice for real estate professionals",
    },
    {
      icon: MapPin,
      title: "Local Experts",
      description: "We know the unique challenges of homes in our area",
    },
    {
      icon: Clock,
      title: "Fast Response Time",
      description: "Quick assessment and immediate action when you need it",
    },
    {
      icon: ShieldCheck,
      title: "Licensed & Certified",
      description: "Fully licensed, insured, and professionally certified",
    },
  ]

  return (
    <section id="about" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block bg-primary/10 border border-primary/30 rounded-full px-4 py-2 text-primary text-sm font-semibold mb-6">
            Why Choose Us
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Why Hire <span className="text-primary">Mold Guardians?</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Trust your home to the experts who have been protecting families for over three decades.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="group bg-charcoal rounded-2xl p-6 border border-border hover:border-primary/50 transition-all duration-300 hover:scale-[1.02]"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <reason.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">{reason.title}</h3>
              <p className="text-muted-foreground">{reason.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold text-lg px-8">
            Request Inspection
          </Button>
        </div>
      </div>
    </section>
  )
}
