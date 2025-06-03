import Header from "@/components/header"
import Footer from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { AlertTriangle, Clock, DollarSign, Users, Phone, Heart, HelpCircle } from "lucide-react"

export default function ResponsibleGamblingPage() {
  const warningSignsData = [
    {
      icon: Clock,
      title: "Tidsforbrug",
      description: "Spiller længere end planlagt eller mister tidsfornemmelsen",
      color: "from-red-500 to-red-600",
    },
    {
      icon: DollarSign,
      title: "Økonomiske problemer",
      description: "Spiller med penge du ikke har råd til at miste",
      color: "from-orange-500 to-red-500",
    },
    {
      icon: Users,
      title: "Sociale problemer",
      description: "Forsømmer familie, venner eller arbejde på grund af gambling",
      color: "from-purple-500 to-purple-600",
    },
    {
      icon: Heart,
      title: "Følelsesmæssige tegn",
      description: "Føler stress, angst eller depression relateret til gambling",
      color: "from-blue-500 to-blue-600",
    },
  ]

  const helpResources = [
    {
      name: "Ludomani",
      phone: "70 22 28 25",
      website: "ludomani.dk",
      description: "Danmarks førende organisation for hjælp til spilleproblemer",
      available: "24/7 hotline",
    },
    {
      name: "StopSpillet",
      phone: "N/A",
      website: "stopspillet.dk",
      description: "Selvudelukkelse fra alle danske gambling sites",
      available: "Online selvudelukkelse",
    },
    {
      name: "ROFUS",
      phone: "N/A",
      website: "rofus.nu",
      description: "Register over frivillig udelukkelse fra spil",
      available: "Online registrering",
    },
  ]

  const selfHelpTips = [
    "Sæt et fast budget før du begynder at spille",
    "Brug kun penge du har råd til at miste",
    "Tag regelmæssige pauser fra gambling",
    "Spil aldrig når du er påvirket af alkohol",
    "Brug ikke gambling som en måde at løse økonomiske problemer",
    "Søg hjælp hvis gambling påvirker dit liv negativt",
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
                <span className="text-red-400">ANSVARLIGT</span> SPIL
              </h1>
              <p className="text-2xl text-gray-300 max-w-3xl mx-auto font-semibold">
                🛡️ Gambling skal være sjovt og underholdende - ikke et problem 🛡️
              </p>
            </div>

            {/* Warning Signs */}
            <div className="mb-16">
              <h2 className="text-4xl font-black mb-12 text-center text-white">
                ⚠️ <span className="text-red-400">ADVARSELSTEGN</span> AT VÆRE OPMÆRKSOM PÅ
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {warningSignsData.map((sign, index) => (
                  <Card
                    key={index}
                    className={`bg-gray-800 border-2 border-red-500 hover:border-red-400 transition-all transform hover:scale-105 shadow-2xl animate-slide-in-up hover-lift stagger-${index + 1}`}
                  >
                    <CardHeader className="text-center">
                      <div
                        className={`mx-auto w-16 h-16 bg-gradient-to-r ${sign.color} rounded-full flex items-center justify-center mb-4 shadow-lg animate-float`}
                      >
                        <sign.icon className="w-8 h-8 text-white" />
                      </div>
                      <CardTitle className="text-lg text-red-400 font-black">{sign.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-300 text-center font-semibold">{sign.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Self-Help Tips */}
            <Card className="bg-gray-800 border-2 border-gray-700 shadow-2xl mb-16 animate-slide-in-left">
              <CardHeader>
                <CardTitle className="text-3xl font-black text-white flex items-center gap-3">
                  <HelpCircle className="w-8 h-8 text-green-500" />💡 TIPS TIL ANSVARLIGT SPIL
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  {selfHelpTips.map((tip, index) => (
                    <div
                      key={index}
                      className={`bg-gradient-to-r from-green-600 to-green-700 rounded-lg p-4 flex items-center gap-3 animate-bounce-in stagger-${index + 1}`}
                    >
                      <div className="w-8 h-8 bg-yellow-500 text-black rounded-full flex items-center justify-center font-black text-sm">
                        {index + 1}
                      </div>
                      <p className="text-white font-semibold">{tip}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Help Resources */}
            <div className="mb-16">
              <h2 className="text-4xl font-black mb-12 text-center text-white">
                🆘 <span className="text-yellow-400">FÅ HJÆLP</span> NU
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                {helpResources.map((resource, index) => (
                  <Card
                    key={index}
                    className={`bg-gradient-to-b from-red-600 to-red-700 border-2 border-red-400 shadow-2xl animate-slide-in-up hover-lift stagger-${index + 1}`}
                  >
                    <CardHeader className="text-center">
                      <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
                        <Phone className="w-8 h-8 text-red-600" />
                      </div>
                      <CardTitle className="text-2xl text-white font-black">{resource.name}</CardTitle>
                    </CardHeader>
                    <CardContent className="text-center space-y-4">
                      {resource.phone !== "N/A" && (
                        <div className="bg-white/20 rounded-lg p-3">
                          <p className="text-yellow-400 font-black">Telefon:</p>
                          <a
                            href={`tel:${resource.phone.replace(/\s/g, "")}`}
                            className="text-white font-bold text-lg hover:underline"
                          >
                            {resource.phone}
                          </a>
                        </div>
                      )}
                      <div className="bg-white/20 rounded-lg p-3">
                        <p className="text-yellow-400 font-black">Website:</p>
                        <a
                          href={`https://${resource.website}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-white font-bold hover:underline"
                        >
                          {resource.website}
                        </a>
                      </div>
                      <p className="text-gray-100 font-semibold">{resource.description}</p>
                      <div className="bg-green-600 rounded-lg p-2">
                        <p className="text-white font-black text-sm">{resource.available}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Emergency Section */}
            <Card className="bg-gradient-to-r from-red-600 to-red-700 border-4 border-yellow-400 shadow-2xl animate-shake">
              <CardContent className="p-8 text-center">
                <div className="flex items-center justify-center gap-4 mb-6">
                  <AlertTriangle className="w-12 h-12 text-yellow-400 animate-pulse" />
                  <h2 className="text-3xl font-black text-white">AKUT HJÆLP NØDVENDIG?</h2>
                  <AlertTriangle className="w-12 h-12 text-yellow-400 animate-pulse" />
                </div>
                <p className="text-xl text-gray-100 mb-6 font-semibold">
                  Hvis du har akutte problemer med gambling, tøv ikke med at søge hjælp
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white/20 rounded-xl p-6">
                    <h3 className="text-2xl font-black text-yellow-400 mb-4">📞 RING NU</h3>
                    <a
                      href="tel:70222825"
                      className="text-3xl font-black text-white hover:text-yellow-400 transition-colors"
                    >
                      70 22 28 25
                    </a>
                    <p className="text-gray-100 mt-2 font-semibold">Ludomani Hotline - 24/7</p>
                  </div>
                  <div className="bg-white/20 rounded-xl p-6">
                    <h3 className="text-2xl font-black text-yellow-400 mb-4">🌐 ONLINE HJÆLP</h3>
                    <a
                      href="https://stopspillet.dk"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xl font-black text-white hover:text-yellow-400 transition-colors"
                    >
                      StopSpillet.dk
                    </a>
                    <p className="text-gray-100 mt-2 font-semibold">Selvudelukkelse øjeblikkeligt</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
