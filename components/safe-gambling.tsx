import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { AlertTriangle, Clock, DollarSign, Users } from "lucide-react"

export default function SafeGambling() {
  const tips = [
    {
      icon: DollarSign,
      title: "Sæt et budget",
      description: "Beslut på forhånd hvor meget du har råd til at miste og hold dig til det budget.",
    },
    {
      icon: Clock,
      title: "Begræns din tid",
      description: "Sæt tidsgrænser for hvor længe du spiller og tag regelmæssige pauser.",
    },
    {
      icon: AlertTriangle,
      title: "Genkend advarselstegn",
      description: "Vær opmærksom på tegn på problematisk spilleadfærd og søg hjælp hvis nødvendigt.",
    },
    {
      icon: Users,
      title: "Søg støtte",
      description: "Der er hjælp tilgængelig hvis gambling bliver et problem. Du er ikke alene.",
    },
  ]

  return (
    <section className="py-16 bg-gradient-to-b from-gray-800 to-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-black mb-4 text-white">
            <span className="text-red-400">ANSVARLIGT</span> SPIL
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-semibold">
            🛡️ Gambling skal være sjovt og underholdende - ikke et problem! 🛡️
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {tips.map((tip, index) => (
            <Card
              key={index}
              className="border-red-500 bg-gray-800 hover:border-red-400 transition-all transform hover:scale-105 shadow-2xl"
            >
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-red-600 rounded-lg flex items-center justify-center mb-4">
                  <tip.icon className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-red-400 font-black">{tip.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 font-semibold">{tip.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-lg p-8 border-2 border-red-400 shadow-2xl">
          <h3 className="text-2xl font-black mb-6 text-center text-white">Få Hjælp Nu</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-xl font-black mb-4 text-white">Danske Ressourcer</h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href="https://ludomani.dk/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-100 hover:underline font-semibold"
                  >
                    Ludomani.dk - Hjælp til spilleproblemer
                  </a>
                </li>
                <li>
                  <a
                    href="https://stopspillet.dk/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-100 hover:underline font-semibold"
                  >
                    StopSpillet.dk - Selvudelukkelse
                  </a>
                </li>
                <li>
                  <span className="font-semibold text-gray-100">Ludomani Hotline: </span>
                  <a href="tel:70222825" className="text-gray-100 hover:underline font-semibold">
                    70 22 28 25
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-black mb-4 text-white">Internationale Ressourcer</h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href="https://www.gambleaware.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-100 hover:underline font-semibold"
                  >
                    GambleAware.org
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.gamecare.org.uk/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-100 hover:underline font-semibold"
                  >
                    GameCare.org.uk
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
