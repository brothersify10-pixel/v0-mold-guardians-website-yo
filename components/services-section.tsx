import { Droplets, Shield, Home } from "lucide-react"

export function ServicesSection() {
  const services = [
    {
      icon: Shield,
      title: "Mold Removal & Remediation",
      description:
        "Complete mold removal using industry-leading techniques. We eliminate mold at its source and prevent future growth.",
      areas: ["Basement", "Attic", "Crawl Space"],
    },
    {
      icon: Droplets,
      title: "Moisture Control & Prevention",
      description:
        "Identify and eliminate moisture sources that cause mold growth. Comprehensive solutions for lasting protection.",
      areas: ["Waterproofing", "Ventilation", "Dehumidification"],
    },
    {
      icon: Home,
      title: "Water Damage Restoration",
      description: "Fast response to water damage emergencies. We restore your home and prevent mold from taking hold.",
      areas: ["Flood Cleanup", "Leak Repair", "Structural Drying"],
    },
  ]

  return (
    <section id="services" className="py-20 md:py-32 bg-charcoal">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block bg-primary/10 border border-primary/30 rounded-full px-4 py-2 text-primary text-sm font-semibold mb-6">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Professional <span className="text-primary">Mold Solutions</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Comprehensive services to protect your home and family from the dangers of mold.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-background rounded-2xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-300"
            >
              {/* Service Header */}
              <div className="bg-gradient-to-r from-primary to-gold-dark p-6">
                <div className="w-12 h-12 rounded-xl bg-primary-foreground/20 flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold text-primary-foreground">{service.title}</h3>
              </div>

              {/* Service Content */}
              <div className="p-6 space-y-4">
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>

                <div className="pt-4 border-t border-border">
                  <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-3">Service Areas</p>
                  <div className="flex flex-wrap gap-2">
                    {service.areas.map((area, areaIndex) => (
                      <span
                        key={areaIndex}
                        className="bg-charcoal text-foreground text-xs font-medium px-3 py-1.5 rounded-full border border-border"
                      >
                        {area}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
