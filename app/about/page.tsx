import Header from "@/components/header"
import Footer from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Target, Shield, Award, Trophy, Zap, CheckCircle } from "lucide-react"

export default function AboutPage() {
  const values = [
    {
      icon: Shield,
      title: "Sikkerhed først",
      description: "Vi prioriterer altid spillernes sikkerhed og anbefaler kun licenserede og regulerede sites.",
      color: "from-red-500 to-red-600",
    },
    {
      icon: Target,
      title: "Uafhængige anmeldelser",
      description: "Vores anmeldelser er baseret på grundige tests og er ikke påvirket af kommercielle interesser.",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: Users,
      title: "Brugercentreret",
      description: "Alt hvad vi gør er designet til at hjælpe danske spillere med at træffe informerede beslutninger.",
      color: "from-green-500 to-green-600",
    },
    {
      icon: Award,
      title: "Ekspertise",
      description: "Vores team har mange års erfaring inden for online gambling og den danske marked.",
      color: "from-yellow-500 to-orange-500",
    },
  ]

  const teamStats = [
    { number: "5+", label: "År erfaring", icon: Trophy },
    { number: "100+", label: "Sites testet", icon: CheckCircle },
    { number: "50K+", label: "Brugere hjulpet", icon: Users },
    { number: "24/7", label: "Support", icon: Zap },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
      <Header />

      <main className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Hero Section */}
            <div className="text-center mb-16 animate-slide-in-up">
              <h1 className="text-5xl font-black mb-6 text-white">
                <span className="text-yellow-400">OM</span> DKBETTINGSITES
              </h1>
              <p className="text-2xl text-gray-300 max-w-3xl mx-auto font-semibold">
                🏆 Danmarks mest pålidelige guide til online betting sites 🏆
              </p>
            </div>

            {/* Stats Section */}
            <div className="grid md:grid-cols-4 gap-6 mb-16">
              {teamStats.map((stat, index) => (
                <Card
                  key={index}
                  className={`bg-gray-800 border-2 border-gray-700 hover:border-yellow-500 transition-all transform hover:scale-105 shadow-2xl animate-bounce-in stagger-${index + 1}`}
                >
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4 animate-float">
                      <stat.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-3xl font-black text-yellow-400 mb-2">{stat.number}</div>
                    <div className="text-gray-300 font-semibold">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Mission Section */}
            <div className="bg-gradient-to-r from-red-600 to-orange-600 rounded-xl p-8 mb-16 border-2 border-yellow-400 shadow-2xl animate-slide-in-left">
              <h2 className="text-3xl font-black mb-6 text-white text-center">🎯 VORES MISSION</h2>
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <p className="text-lg text-gray-100 mb-6 font-semibold">
                    Hos DKBettingSites er vores mission at hjælpe danske spillere med at finde de bedste, mest sikre og
                    pålidelige online betting sites. Vi forstår, at der er mange muligheder derude, og det kan være
                    svært at vide, hvilke sites der er værd at stole på.
                  </p>
                  <p className="text-lg text-gray-100 font-semibold">
                    Derfor har vi dedikeret os til at teste, anmelde og rangere betting sites baseret på strenge
                    kriterier, der prioriterer spillernes sikkerhed, fair play og ansvarligt gambling.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-32 h-32 bg-yellow-500 rounded-full flex items-center justify-center mx-auto animate-pulse-glow">
                    <Trophy className="w-16 h-16 text-black" />
                  </div>
                </div>
              </div>
            </div>

            {/* Values Section */}
            <div className="mb-16">
              <h2 className="text-4xl font-black mb-12 text-center text-white">
                <span className="text-yellow-400">VORES</span> VÆRDIER
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                {values.map((value, index) => (
                  <Card
                    key={index}
                    className={`bg-gray-800 border-2 border-gray-700 hover:border-yellow-500 transition-all transform hover:scale-105 shadow-2xl animate-slide-in-up hover-lift stagger-${index + 1}`}
                  >
                    <CardHeader>
                      <div
                        className={`w-16 h-16 bg-gradient-to-r ${value.color} rounded-lg flex items-center justify-center mb-4 shadow-lg animate-float`}
                      >
                        <value.icon className="w-8 h-8 text-white" />
                      </div>
                      <CardTitle className="text-2xl text-white font-black">{value.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-300 font-semibold text-lg">{value.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Process Section */}
            <div className="bg-gray-800 rounded-xl p-8 mb-16 border-2 border-gray-700 animate-slide-in-right">
              <h2 className="text-3xl font-black mb-8 text-center text-white">
                ⚡ VORES <span className="text-yellow-400">TILGANG</span>
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center animate-bounce-in stagger-1">
                  <div className="w-20 h-20 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-3xl font-black shadow-lg animate-pulse">
                    1
                  </div>
                  <h3 className="text-xl font-black mb-4 text-yellow-400">Grundig Testing</h3>
                  <p className="text-gray-300 font-semibold">
                    Vi tester hver eneste aspekt af betting sites, fra registrering til udbetaling.
                  </p>
                </div>
                <div className="text-center animate-bounce-in stagger-2">
                  <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-3xl font-black shadow-lg animate-pulse">
                    2
                  </div>
                  <h3 className="text-xl font-black mb-4 text-yellow-400">Uafhængig Vurdering</h3>
                  <p className="text-gray-300 font-semibold">
                    Vores anmeldelser er baseret på objektive kriterier, ikke kommercielle interesser.
                  </p>
                </div>
                <div className="text-center animate-bounce-in stagger-3">
                  <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-3xl font-black shadow-lg animate-pulse">
                    3
                  </div>
                  <h3 className="text-xl font-black mb-4 text-yellow-400">Løbende Opdateringer</h3>
                  <p className="text-gray-300 font-semibold">
                    Vi opdaterer regelmæssigt vores anmeldelser for at sikre aktuelle informationer.
                  </p>
                </div>
              </div>
            </div>

            {/* Responsible Gambling Section */}
            <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-xl p-8 border-2 border-red-400 shadow-2xl animate-shake">
              <h2 className="text-3xl font-black mb-6 text-center text-white">🛡️ ANSVARLIGT GAMBLING</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <p className="text-lg text-gray-100 mb-4 font-semibold">
                    Vi tager ansvarligt gambling meget seriøst. Gambling skal være underholdning, ikke en måde at løse
                    økonomiske problemer på. Vi opfordrer alle vores brugere til:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-100 font-semibold">
                    <li>Kun at spille med penge, de har råd til at miste</li>
                    <li>At sætte grænser for tid og penge brugt på gambling</li>
                    <li>At søge hjælp hvis gambling bliver et problem</li>
                    <li>At huske at gambling aldrig skal bruges som en indkomstkilde</li>
                  </ul>
                </div>
                <div className="text-center">
                  <div className="w-32 h-32 bg-white/20 rounded-full flex items-center justify-center mx-auto animate-glow">
                    <Shield className="w-16 h-16 text-white" />
                  </div>
                  <p className="text-lg text-gray-100 mt-4 font-semibold">
                    Hvis du eller nogen du kender har problemer med gambling, er der hjælp tilgængelig. Kontakt Ludomani
                    på 70 22 28 25 eller besøg ludomani.dk for støtte og vejledning.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
