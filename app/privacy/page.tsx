import Header from "@/components/header"
import Footer from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, Eye, Lock, Database, UserCheck, AlertTriangle } from "lucide-react"

export default function PrivacyPage() {
  const privacySections = [
    {
      icon: Database,
      title: "Dataindsamling",
      description: "Vi indsamler kun nødvendige oplysninger for at forbedre din oplevelse på vores website.",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: Lock,
      title: "Datasikkerhed",
      description: "Alle dine data er beskyttet med avanceret kryptering og sikkerhedsforanstaltninger.",
      color: "from-green-500 to-green-600",
    },
    {
      icon: Eye,
      title: "Cookies",
      description: "Vi bruger cookies til at forbedre funktionaliteten og analysere trafikken på vores site.",
      color: "from-purple-500 to-purple-600",
    },
    {
      icon: UserCheck,
      title: "Dine rettigheder",
      description: "Du har ret til at få adgang til, rette eller slette dine personlige oplysninger.",
      color: "from-orange-500 to-red-500",
    },
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
                <span className="text-yellow-400">PRIVATLIVS</span>POLITIK
              </h1>
              <p className="text-2xl text-gray-300 max-w-3xl mx-auto font-semibold">
                🔒 Din privatliv er vigtig for os - læs hvordan vi beskytter dine data 🔒
              </p>
            </div>

            {/* Privacy Overview Cards */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {privacySections.map((section, index) => (
                <Card
                  key={index}
                  className={`bg-gray-800 border-2 border-gray-700 hover:border-yellow-500 transition-all transform hover:scale-105 shadow-2xl animate-slide-in-up hover-lift stagger-${index + 1}`}
                >
                  <CardHeader className="text-center">
                    <div
                      className={`mx-auto w-16 h-16 bg-gradient-to-r ${section.color} rounded-full flex items-center justify-center mb-4 shadow-lg animate-float`}
                    >
                      <section.icon className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-lg text-white font-black">{section.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300 text-center font-semibold">{section.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Main Content */}
            <div className="space-y-8">
              {/* Data Collection */}
              <Card className="bg-gray-800 border-2 border-gray-700 shadow-2xl animate-slide-in-left">
                <CardHeader>
                  <CardTitle className="text-2xl font-black text-white flex items-center gap-3">
                    <Database className="w-8 h-8 text-blue-500" />
                    Hvilke data indsamler vi?
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="bg-gray-700 rounded-lg p-6">
                    <h3 className="text-xl font-black mb-4 text-yellow-400">Automatisk indsamlede data:</h3>
                    <ul className="space-y-2 text-gray-300 font-semibold">
                      <li>• IP-adresse og browseroplysninger</li>
                      <li>• Besøgte sider og klikdata</li>
                      <li>• Enhedstype og operativsystem</li>
                      <li>• Referrer URL (hvor du kom fra)</li>
                    </ul>
                  </div>
                  <div className="bg-gray-700 rounded-lg p-6">
                    <h3 className="text-xl font-black mb-4 text-yellow-400">Frivilligt angivne data:</h3>
                    <ul className="space-y-2 text-gray-300 font-semibold">
                      <li>• Email-adresse (hvis du tilmelder dig nyhedsbrev)</li>
                      <li>• Feedback og kommentarer</li>
                      <li>• Kontaktformular oplysninger</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              {/* How We Use Data */}
              <Card className="bg-gray-800 border-2 border-gray-700 shadow-2xl animate-slide-in-right">
                <CardHeader>
                  <CardTitle className="text-2xl font-black text-white flex items-center gap-3">
                    <Eye className="w-8 h-8 text-green-500" />
                    Hvordan bruger vi dine data?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-lg p-6">
                      <h3 className="text-xl font-black mb-4 text-white">Forbedring af service:</h3>
                      <ul className="space-y-2 text-gray-100 font-semibold">
                        <li>• Analysere brugeradfærd</li>
                        <li>• Optimere website ydeevne</li>
                        <li>• Personalisere indhold</li>
                      </ul>
                    </div>
                    <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg p-6">
                      <h3 className="text-xl font-black mb-4 text-white">Kommunikation:</h3>
                      <ul className="space-y-2 text-gray-100 font-semibold">
                        <li>• Sende nyhedsbreve</li>
                        <li>• Besvare henvendelser</li>
                        <li>• Vigtige opdateringer</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Cookies */}
              <Card className="bg-gray-800 border-2 border-gray-700 shadow-2xl animate-slide-in-up">
                <CardHeader>
                  <CardTitle className="text-2xl font-black text-white flex items-center gap-3">
                    <AlertTriangle className="w-8 h-8 text-purple-500" />
                    Cookies og tracking
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="bg-gradient-to-r from-purple-600 to-purple-700 rounded-lg p-6 mb-6">
                    <h3 className="text-xl font-black mb-4 text-white">Vi bruger følgende typer cookies:</h3>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="bg-white/10 rounded-lg p-4">
                        <h4 className="font-black text-yellow-400 mb-2">Nødvendige</h4>
                        <p className="text-gray-100 text-sm font-semibold">Grundlæggende funktionalitet</p>
                      </div>
                      <div className="bg-white/10 rounded-lg p-4">
                        <h4 className="font-black text-yellow-400 mb-2">Analytiske</h4>
                        <p className="text-gray-100 text-sm font-semibold">Google Analytics</p>
                      </div>
                      <div className="bg-white/10 rounded-lg p-4">
                        <h4 className="font-black text-yellow-400 mb-2">Marketing</h4>
                        <p className="text-gray-100 text-sm font-semibold">Affiliate tracking</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Your Rights */}
              <Card className="bg-gradient-to-r from-red-600 to-orange-600 border-2 border-yellow-400 shadow-2xl animate-shake">
                <CardHeader>
                  <CardTitle className="text-2xl font-black text-white flex items-center gap-3">
                    <Shield className="w-8 h-8 text-white" />
                    Dine rettigheder under GDPR
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-xl font-black mb-4 text-white">Du har ret til:</h3>
                      <ul className="space-y-3 text-gray-100 font-semibold">
                        <li className="flex items-center gap-2">
                          <UserCheck className="w-5 h-5 text-yellow-400" />
                          Adgang til dine data
                        </li>
                        <li className="flex items-center gap-2">
                          <Lock className="w-5 h-5 text-yellow-400" />
                          Rettelse af forkerte data
                        </li>
                        <li className="flex items-center gap-2">
                          <AlertTriangle className="w-5 h-5 text-yellow-400" />
                          Sletning af dine data
                        </li>
                        <li className="flex items-center gap-2">
                          <Eye className="w-5 h-5 text-yellow-400" />
                          Dataportabilitet
                        </li>
                      </ul>
                    </div>
                    <div className="bg-white/10 rounded-lg p-6">
                      <h3 className="text-xl font-black mb-4 text-white">Kontakt os:</h3>
                      <p className="text-gray-100 font-semibold mb-2">Email: privacy@dkbettingsites.com</p>
                      <p className="text-gray-100 font-semibold">Vi besvarer alle henvendelser inden for 30 dage</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Updates */}
              <Card className="bg-gray-800 border-2 border-gray-700 shadow-2xl animate-slide-in-up">
                <CardContent className="p-8 text-center">
                  <h3 className="text-2xl font-black mb-4 text-white">Opdateringer til privatlivspolitikken</h3>
                  <p className="text-gray-300 font-semibold mb-4">
                    Vi kan opdatere denne politik fra tid til anden. Væsentlige ændringer vil blive kommunikeret på
                    vores website.
                  </p>
                  <div className="text-sm text-gray-400">Sidst opdateret: {new Date().toLocaleDateString("da-DK")}</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
