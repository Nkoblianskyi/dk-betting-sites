import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Shield, CreditCard, Headphones, Star, Users } from "lucide-react"

export default function SelectionCriteria() {
  const criteria = [
    {
      icon: Shield,
      title: "Licens og sikkerhed",
      description:
        "Vi kontrollerer at alle sites har gyldige licenser fra anerkendte myndigheder og bruger SSL-kryptering.",
    },
    {
      icon: CreditCard,
      title: "Betalingsmetoder",
      description: "Evaluerer tilgængelighed af sikre og hurtige betalingsmetoder populære i Danmark.",
    },
    {
      icon: Headphones,
      title: "Kundeservice",
      description: "Tester kvaliteten af kundeservice, responstider og tilgængelighed på dansk.",
    },
    {
      icon: Star,
      title: "Brugeroplevelse",
      description: "Vurderer website design, mobilvenlig interface og generel brugervenlighed.",
    },
    {
      icon: Users,
      title: "Omdømme",
      description: "Analyserer brugeranmeldelser, brancheomdømme og historik for pålidelig drift.",
    },
    {
      icon: CheckCircle,
      title: "Ansvarligt spil",
      description: "Kontrollerer tilgængelighed af værktøjer til ansvarligt spil og selvudelukkelse.",
    },
  ]

  return (
    <section className="py-16 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-black mb-4 text-white">
            <span className="text-yellow-400">HVORDAN VI</span> VÆLGER DE BEDSTE
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-semibold">
            🔥 Vores eksperter bruger EKSTREME kriterier for at sikre kun de mest pålidelige sites! 🔥
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {criteria.map((criterion, index) => (
            <Card
              key={index}
              className="bg-gray-800 border-2 border-gray-700 hover:border-yellow-500 transition-all transform hover:scale-105 shadow-2xl"
            >
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-orange-500 rounded-lg flex items-center justify-center mb-4 shadow-lg">
                  <criterion.icon className="w-6 h-6 text-blue-600" />
                </div>
                <CardTitle className="text-xl text-white font-black">{criterion.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 font-semibold">{criterion.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 bg-gradient-to-r from-red-600 to-orange-600 rounded-lg p-8 border-2 border-yellow-400 shadow-2xl">
          <h3 className="text-2xl font-black mb-4 text-center text-white">⚡ VORES EKSTREME TESTPROCES ⚡</h3>
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="w-12 h-12 bg-yellow-500 text-black rounded-full flex items-center justify-center mx-auto mb-3 font-black text-lg shadow-lg">
                1
              </div>
              <h4 className="font-black mb-2 text-white text-lg">Registrering</h4>
              <p className="text-sm text-gray-100 font-semibold">Vi opretter konti og tester registreringsprocessen</p>
            </div>
            <div>
              <div className="w-12 h-12 bg-yellow-500 text-black rounded-full flex items-center justify-center mx-auto mb-3 font-black text-lg shadow-lg">
                2
              </div>
              <h4 className="font-black mb-2 text-white text-lg">Indbetaling</h4>
              <p className="text-sm text-gray-100 font-semibold">Tester forskellige betalingsmetoder og hastigheder</p>
            </div>
            <div>
              <div className="w-12 h-12 bg-yellow-500 text-black rounded-full flex items-center justify-center mx-auto mb-3 font-black text-lg shadow-lg">
                3
              </div>
              <h4 className="font-black mb-2 text-white text-lg">Betting</h4>
              <p className="text-sm text-gray-100 font-semibold">Evaluerer odds, markeder og betting oplevelse</p>
            </div>
            <div>
              <div className="w-12 h-12 bg-yellow-500 text-black rounded-full flex items-center justify-center mx-auto mb-3 font-black text-lg shadow-lg">
                4
              </div>
              <h4 className="font-black mb-2 text-white text-lg">Udbetaling</h4>
              <p className="text-sm text-gray-100 font-semibold">Tester udbetalingsprocesser og hastigheder</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
