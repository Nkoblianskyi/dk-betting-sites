"use client"
import { Card, CardContent } from "@/components/ui/card"
import { Star, Flame } from "lucide-react"
import Image from "next/image"

interface BettingSite {
  id: number
  name: string
  logo: string
  bonus: string
  rating: number
  reviews: number
  url: string
}

interface RatingListProps {
  sites: BettingSite[]
}

export default function RatingList({ sites }: RatingListProps) {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star key={i} className={`w-5 h-5 ${i < rating ? "text-yellow-400 fill-current" : "text-gray-300"}`} />
    ))
  }

  return (
    <section className="py-12 bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl lg:text-4xl font-black mb-2">
            <span className="text-yellow-400">TOP</span> BETTING SITES
          </h2>
          <p className="text-gray-300">🏆 Ekspert-testede • ⚡ Øjeblikkelige bonusser</p>
        </div>

        <div className="space-y-4 max-w-5xl mx-auto">
          {sites.map((site, index) => (
            <a key={site.id} href={site.url} target="_blank" rel="noopener noreferrer" className="block">
              <Card
                className={`overflow-hidden border-2 border-gray-700 bg-gradient-to-r from-gray-800 to-gray-900 hover:border-yellow-500 transition-all transform hover:scale-[1.02] shadow-2xl animate-slide-in-up hover-lift hover-glow stagger-${index + 1} cursor-pointer`}
              >
                <CardContent className="p-4">
                  <div className="flex flex-row items-center justify-between gap-4 flex-wrap">
                    {/* Logo and name */}
                    <div className="flex items-center gap-4 animate-fade-in-scale">
                      <div className="relative">
                        <Image
                          src={site.logo || "/placeholder.svg"}
                          alt={site.name}
                          width={120}
                          height={60}
                          className="rounded-lg border-2 border-gray-600 hover-scale"
                        />
                        {index === 0 && (
                          <div className="absolute -top-2 -right-2 bg-yellow-500 text-black text-xs font-bold px-1 py-0.5 rounded-full animate-bounce">
                            #1
                          </div>
                        )}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white">{site.name}</h3>
                        <div className="flex items-center gap-1">{renderStars(site.rating)}</div>
                        <div className="text-sm text-gray-400 mt-1">{site.reviews} anmeldelser</div>
                      </div>
                    </div>

                    {/* Bonus */}
                    <div className="flex-1 text-center lg:text-left animate-bounce-in">
                      <div className="bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-3 rounded-lg inline-block shadow-lg border-2 border-green-400 hover-scale">
                        <div className="flex items-center gap-2">
                          <Flame className="w-4 h-4 animate-wiggle" />
                          <span className="font-black text-sm">{site.bonus}</span>
                        </div>
                      </div>
                    </div>

                    {/* CTA Button */}
                    <div
                      className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-black px-6 py-3 text-lg shadow-xl border-2 border-red-400 transform hover:scale-105 transition-all animate-pulse-glow hover-lift rounded"
                      onClick={(e) => e.preventDefault()}
                    >
                      🎯 FÅ BONUS
                    </div>
                  </div>

                  {/* Disclaimer */}
                  <div className="mt-3 pt-3 border-t border-gray-700 text-xs text-gray-400 animate-slide-in-up">
                    <p>
                      18+ | Kun nye kunder | Spil for 100 kr. til odds 1.8 eller højere og få et 100 kr. free bet til
                      brug på sportsspil efter det kvalificerende spil er afgjort | Gyldig i 7 dage | Generelle regler
                      og vilkår er altid gældende | SPIL ANSVARLIGT | STOPSPILLET.DK | ROFUS
                    </p>
                  </div>
                </CardContent>
              </Card>
            </a>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-8">
          <div className="bg-gradient-to-r from-yellow-500 to-orange-500 text-black px-6 py-3 rounded-full inline-block font-black">
            🔥 ALLE SITES ER EKSPERT-TESTEDE OG 100% SIKRE 🔥
          </div>
        </div>
      </div>
    </section>
  )
}
