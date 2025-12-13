import { AlertTriangle, Info } from "lucide-react"
import { Button } from "@/components/ui/button"

export function WhatIsMoldSection() {
  return (
    <section id="mold-info" className="py-20 md:py-32 bg-foreground">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Gold Accent Bar */}
          <div className="h-1 w-24 bg-primary rounded-full mb-8" />

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2">
                <Info className="w-4 h-4 text-primary" />
                <span className="text-primary text-sm font-semibold">Educational</span>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-background text-balance">
                What Is Mold & Why Is It Dangerous?
              </h2>

              <p className="text-background/70 leading-relaxed">
                Mold is a type of fungus that grows in moist environments. It reproduces through tiny spores that float
                through the air. When these spores land on damp surfaces, they can begin to grow and spread rapidly.
              </p>

              <p className="text-background/70 leading-relaxed">
                Exposure to mold can cause a variety of health effects, including allergic reactions, respiratory
                problems, and in some cases, more serious health conditions. Certain types of mold produce toxic
                substances called mycotoxins that can be particularly harmful.
              </p>

              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold">
                Learn More About Mold
              </Button>
            </div>

            <div className="bg-background rounded-2xl p-8 border border-border">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <AlertTriangle className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground">Warning Signs</h3>
              </div>

              <ul className="space-y-4">
                {[
                  "Musty or earthy odors in your home",
                  "Visible dark spots on walls or ceilings",
                  "Recent water damage or flooding",
                  "Persistent condensation on windows",
                  "Peeling or bubbling paint or wallpaper",
                ].map((sign, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">{sign}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
