import { ShieldCheck, TrendingUp, Home } from "lucide-react"

export function StatisticsSection() {
  const trustElements = [
    {
      icon: ShieldCheck,
      title: "Safe & Effective Removal",
      description: "Industry-leading techniques",
    },
    {
      icon: TrendingUp,
      title: "Prevent Future Growth",
      description: "Long-lasting protection",
    },
    {
      icon: Home,
      title: "Restore Your Home's Integrity",
      description: "Complete restoration services",
    },
  ]

  return (
    <section className="py-20 md:py-32 bg-background relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block bg-primary/10 border border-primary/30 rounded-full px-4 py-2 text-primary text-sm font-semibold mb-6">
            Did You Know?
          </span>

          {/* Main Statistic */}
          <div className="mb-8">
            <p className="text-6xl md:text-8xl lg:text-9xl font-black text-primary leading-none">8 OUT OF 10</p>
            <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mt-4">HOUSEHOLDS HAVE MOLD</p>
          </div>

          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Mold can be hidden in places you'd never expect. Don't wait until it becomes a serious problem.
          </p>
        </div>

        {/* Trust Elements */}
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {trustElements.map((element, index) => (
            <div key={index} className="text-center p-6 bg-charcoal rounded-2xl border border-border">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <element.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-1">{element.title}</h3>
              <p className="text-muted-foreground text-sm">{element.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
