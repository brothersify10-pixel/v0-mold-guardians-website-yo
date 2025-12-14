export function SymptomsSection() {
  const symptoms = [
    "1. Stuffy nose or sinus pressure",
    "2. Itchy or watery eyes",
    "3. Coughing and wheezing",
    "4. Excessive sneezing",
    "5. Throat irritation",
    "6. Skin irritation or rashes",
    "7. Chronic headaches",
    "8. Fatigue and weakness",
    "9. Cognitive or mood changes",
    "10. Muscle and joint pain",
  ]

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Left Content */}
          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1A1A1A] leading-tight">
              TOP 10 MOLD EXPOSURE SYMPTOMS
            </h2>

            <div className="space-y-4">
              {symptoms.map((symptom, index) => (
                <div key={index} className="text-[#2D2D2D] text-lg font-medium">
                  {symptom}
                </div>
              ))}
            </div>
          </div>

          {/* Right Image */}
          <div
            className="h-[400px] md:h-[500px] rounded-2xl bg-cover bg-center border-[5px] border-[#FFC107] shadow-xl"
            style={{
              backgroundImage: "url('https://images.pexels.com/photos/1893229/pexels-photo-1893229.jpeg?auto=compress&cs=tinysrgb&w=800')",
            }}
          />
        </div>
      </div>
    </section>
  )
}
