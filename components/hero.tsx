"use client"

import { Button } from "@/components/ui/button"
import { TrendingUp, Zap, Trophy } from "lucide-react"

interface HeroProps {
  onAgeModalOpen: () => void
  onTermsModalOpen: () => void
}

export default function Hero({ onAgeModalOpen, onTermsModalOpen }: HeroProps) {
  const currentDate = new Date()
  const monthNames = [
    "Januar",
    "Februar",
    "Marts",
    "April",
    "Maj",
    "Juni",
    "Juli",
    "August",
    "September",
    "Oktober",
    "November",
    "December",
  ]
  const updateDate = `${monthNames[currentDate.getMonth()]} ${currentDate.getFullYear()}`

  return (
    <section className="relative bg-gradient-to-r from-red-600 via-orange-500 to-yellow-500 text-white overflow-hidden max-h-[250px]">
      <div className="container mx-auto px-14 py-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
          {/* Left side - Main content */}
          <div className="flex-1 text-center lg:text-left animate-slide-in-left">
            <div className="flex items-center justify-center lg:justify-start gap-2 mb-2">
              <Trophy className="w-6 h-6 text-yellow-300 animate-bounce" />
              <span className="text-sm font-bold bg-yellow-400 text-black px-2 py-1 rounded-full animate-pulse">
                TOP RATED
              </span>
            </div>

            <h1 className="text-3xl lg:text-4xl font-black mb-2 leading-tight animate-fade-in-scale">
              <span className="text-yellow-300">DANMARKS</span> BEDSTE
              <br />
              <span className="text-white">BETTING SITES</span>
            </h1>

            <div className="flex items-center justify-center lg:justify-start gap-2 mb-3">
              <TrendingUp className="w-4 h-4 text-green-300 animate-pulse" />
              <span className="text-sm font-semibold">Opdateret {updateDate}</span>
            </div>

            <p className="text-sm lg:text-base mb-4 max-w-md mx-auto lg:mx-0 opacity-90 animate-slide-in-up">
              🔥 Eksklusiv bonusser • ⚡ Hurtige udbetalinger • 🛡️ 100% sikre sites
            </p>
          </div>

          {/* Right side - Action buttons */}
          <div className="flex-shrink-0 animate-slide-in-right">
            <div className="bg-black/30 backdrop-blur-sm rounded-xl p-4 border border-white/20 animate-glow">
              <div className="flex items-center gap-2 mb-3">
                <Zap className="w-5 h-5 text-yellow-300 animate-pulse" />
                <span className="font-bold text-sm">SPIL ANSVARLIGT</span>
              </div>

              <div className="flex flex-col sm:flex-row gap-2">
                <Button
                  onClick={onAgeModalOpen}
                  className="bg-red-600 hover:bg-red-700 text-white font-bold px-4 py-2 text-sm border-2 border-red-400 shadow-lg transform hover:scale-105 transition-all animate-glow hover-lift"
                >
                  18+ INFO
                </Button>
                <Button
                  onClick={onTermsModalOpen}
                  className="bg-orange-600 hover:bg-orange-700 text-white font-bold px-4 py-2 text-sm border-2 border-orange-400 shadow-lg transform hover:scale-105 transition-all animate-glow hover-lift"
                >
                  VILKÅR
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-4 left-4 w-16 h-16 bg-white/10 rounded-full animate-float"></div>
        <div className="absolute top-8 right-8 w-12 h-12 bg-white/10 rounded-full animate-bounce"></div>
        <div className="absolute bottom-4 left-1/4 w-8 h-8 bg-white/10 rounded-full animate-ping"></div>
      </div>

      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-400 via-red-500 to-orange-600"></div>
    </section>
  )
}
