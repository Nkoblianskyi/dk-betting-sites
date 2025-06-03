import Image from "next/image"
import Link from "next/link"
import RugbyBallLogo from "./rugby-ball-logo"

export default function Footer() {
  const organizations = [
    { name: "Spillemyndigheden", url: "https://spillemyndigheden.dk/", logo: "/placeholder.svg?height=40&width=120" },
    { name: "StopSpillet", url: "https://stopspillet.dk/", logo: "/placeholder.svg?height=40&width=120" },
    { name: "ROFUS", url: "https://rofus.nu/", logo: "/placeholder.svg?height=40&width=120" },
    { name: "GambleAware", url: "https://www.gambleaware.org/", logo: "/placeholder.svg?height=40&width=120" },
    { name: "GameCare", url: "https://www.gamecare.org.uk/", logo: "/placeholder.svg?height=40&width=120" },
  ]

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <RugbyBallLogo />
              <span className="text-xl font-bold">DKBettingSites</span>
            </div>
            <p className="text-gray-400 mb-4">
              Danmarks førende guide til sikre og pålidelige betting sites. Vi hjælper dig med at finde de bedste
              bonusser og mest troværdige udbydere.
            </p>
            <div className="flex items-center">
              <span className="bg-red-600 text-white px-2 py-1 rounded text-sm font-semibold">18+</span>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Hurtige Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white">
                  Hjem
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white">
                  Om os
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-400 hover:text-white">
                  Cookies & Privatliv
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-400 hover:text-white">
                  Privatlivspolitik
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Kontakt</h3>
            <p className="text-gray-400 mb-2">Email: info@dkbettingsites.com</p>
            <p className="text-gray-400">Kun for personer over 18 år</p>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 mb-8">
          <h3 className="text-lg font-semibold mb-6 text-center">Anerkendte Organisationer</h3>
          <div className="flex flex-wrap justify-center items-center gap-6">
            <a
              href="https://www.stopspillet.dk/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
            >
              <Image
                src="/stopsillet.svg"
                alt="StopSpillet"
                width={80}
                height={80}
                className=" rounded p-1"
              />
            </a>
            <a
              href="https://www.spillemyndigheden.dk/rofus"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
            >
              <Image
                src="/rofus.png"
                alt="ROFUS"
                width={80}
                height={80}
                className="rounded p-1"
              />
            </a>
            <a
              href="https://ludomani.dk/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
            >
              <Image
                src="/ludomani.png"
                alt="Ludomani"
                width={80}
                height={80}
                className="rounded p-1"
              />
            </a>
            <a
              href="https://www.gamcare.org.uk/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
            >
              <Image
                src="/gamecare.svg"
                alt="GameCare"
                width={120}
                height={90}
                className="rounded p-1"
              />
            </a>
            <a
              href="https://www.gambleaware.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
            >
              <Image
                src="/gamble-aware-logo.svg"
                alt="GamebleAware"
                width={80}
                height={80}
                className="rounded p-1"
              />
            </a>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="bg-gray-800 rounded-lg p-6 mb-6">
            <h4 className="text-lg font-semibold mb-4">Ansvarsfraskrivelse</h4>
            <p className="text-gray-300 text-sm leading-relaxed mb-4">
              dkbettingsites.com kan modtage kompensation når du klikker på links og tilmelder dig hos vores partnere.
              Dette påvirker ikke vores uafhængige vurderinger, som er baseret på grundige tests og omfattende research.
            </p>
            <p className="text-gray-300 text-sm leading-relaxed">
              Gambling kan være vanedannende og medføre økonomiske tab. Spil altid ansvarligt og kun med midler, du har
              råd til at miste. Hvis du oplever problemer med gambling, søg venligst professionel hjælp hos
              <a
                href="https://stopspillet.dk/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline ml-1"
              >
                StopSpillet
              </a>
              .
            </p>
          </div>

          <div className="text-center text-gray-400 text-sm">
            <p>&copy; {new Date().getFullYear()} DKBettingSites.com. Alle rettigheder forbeholdes.</p>
            <p className="mt-2">Kun for personer over 18 år. Spil ansvarligt.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
