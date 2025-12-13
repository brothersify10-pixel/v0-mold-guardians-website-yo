import { Check } from "lucide-react"

export function SymptomsSection() {
  const symptoms = [
    "Stuffy nose or sinus pressure",
    "Itchy or watery eyes",
    "Coughing and wheezing",
    "Excessive sneezing",
    "Throat irritation",
    "Skin irritation or rashes",
    "Chronic headaches",
    "Fatigue and weakness",
    "Cognitive or mood changes",
    "Muscle and joint pain",
  ]

  return (
    <section className="py-20 md:py-32 bg-charcoal">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block bg-primary/10 border border-primary/30 rounded-full px-4 py-2 text-primary text-sm font-semibold mb-6">
            Health Warning
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Are You Suffering From Any of <span className="text-primary">These Symptoms?</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            These symptoms can indicate mold exposure inside your home. Don't ignore the warning signs.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 max-w-6xl mx-auto">
          {symptoms.map((symptom, index) => (
            <div
              key={index}
              className="flex items-center gap-3 bg-charcoal-light rounded-xl p-4 border border-border hover:border-primary/50 transition-colors"
            >
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
                <Check className="w-4 h-4 text-primary" />
              </div>
              <span className="text-foreground font-medium text-sm">{symptom}</span>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-6">
            If you're experiencing any of these symptoms, your home may have a mold problem.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-semibold transition-colors"
          >
            Get a Professional Inspection →
          </a>
        </div>
      </div>
    </section>
  )
}
