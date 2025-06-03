import Link from "next/link"
import Image from "next/image"
import RugbyBallLogo from "./rugby-ball-logo"

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-gray-900 to-gray-800 shadow-lg border-b border-gray-700">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link href="/" className="flex items-center space-x-2">
              <RugbyBallLogo />
              <span className="text-xl font-black text-white">DKBettingSites</span>
            </Link>
          </div>

          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/" className="text-gray-300 hover:text-yellow-400 font-medium">
              Hjem
            </Link>
            <Link href="/about" className="text-gray-300 hover:text-yellow-400 font-medium">
              Om os
            </Link>
            <Link href="/ansvarligt-spil" className="text-gray-300 hover:text-yellow-400 font-medium">
              Ansvarligt spil
            </Link>
            <Link href="/privacy" className="text-gray-300 hover:text-yellow-400 font-medium">
              Privatlivspolitik
            </Link>
            <a
              href="https://ludomani.dk/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-gray-300 hover:text-yellow-400 font-semibold"
            >
              <Image src="/ludomani.png" alt="Ludomani" width={60} height={60} />
            </a>
          </nav>
        </div>
      </div>
    </header>
  )
}
