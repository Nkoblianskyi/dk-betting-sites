import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Gift, Award, Zap, Target } from "lucide-react"

export default function BonusInfo() {
  const bonusTypes = [
    {
      icon: Gift,
      title: "💰 MEGA VELKOMSTBONUS",
      description: "Op til 5.000 kr + gratis spins når du tilmelder dig NU!",
      color: "from-green-500 to-green-600",
    },
    {
      icon: Zap,
      title: "⚡ RISIKOFRI POWER BET",
      description: "Få dine penge tilbage hvis din første indsats ikke vinder - GARANTERET!",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: Target,
      title: "🎯 RELOAD BONUSSER",
      description: "Ugentlige bonusser op til 2.000 kr for eksisterende spillere!",
      color: "from-purple-500 to-purple-600",
    },
    {
      icon: Award,
      title: "👑 VIP ELITE PROGRAM",
      description: "Eksklusive fordele, personlig manager og premium bonusser!",
      color: "from-yellow-500 to-orange-500",
    },
  ]

  return (
    <section className="py-16 bg-gradient-to-b from-gray-800 to-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-black mb-4 text-white">
            <span className="text-yellow-400">EKSPLOSIVE</span> BONUSSER
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            🚀 Boost din bankroll med de mest generøse bonusser i Danmark!
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {bonusTypes.map((bonus, index) => (
            <Card
              key={index}
              className={`bg-gray-800 border-2 border-gray-700 hover:border-yellow-500 transition-all transform hover:scale-105 shadow-2xl animate-slide-in-up hover-lift stagger-${index + 1}`}
            >
              <CardHeader className="text-center">
                <div
                  className={`mx-auto w-16 h-16 bg-gradient-to-r ${bonus.color} rounded-full flex items-center justify-center mb-4 shadow-lg animate-float hover-glow`}
                >
                  <bonus.icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-lg text-white font-black animate-fade-in-scale">{bonus.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 text-center font-semibold animate-slide-in-up">{bonus.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 bg-gradient-to-r from-red-600 to-orange-600 border-2 border-yellow-400 rounded-xl p-6 shadow-2xl animate-shake hover-glow">
          <h3 className="text-2xl font-black mb-4 text-white text-center animate-bounce">
            ⚠️ VIGTIGE BONUS REGLER - LÆS DETTE! ⚠️
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            <ul className="space-y-2 text-white font-semibold animate-slide-in-left">
              <li>🔥 Læs ALTID bonusvilkårene før accept</li>
              <li>⚡ Check omsætningskrav - vær smart!</li>
            </ul>
            <ul className="space-y-2 text-white font-semibold animate-slide-in-right">
              <li>⏰ Bonusser udløber - brug dem HURTIGT!</li>
              <li>💎 Forstå min/max indsatser for optimal spil</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
