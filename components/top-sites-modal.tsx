"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Star, X, Flame } from "lucide-react"
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

interface TopSitesModalProps {
  sites: BettingSite[]
  isOpen: boolean
  onClose: () => void
}

export default function TopSitesModal({ sites, isOpen, onClose }: TopSitesModalProps) {
  const [selectedSites, setSelectedSites] = useState<BettingSite[]>([])

  useEffect(() => {
    if (isOpen && sites.length > 0) {
      // Get top 3 sites (or less if not enough sites)
      const topSites = sites.slice(0, Math.min(3, sites.length))
      setSelectedSites(topSites)
    }
  }, [isOpen, sites])

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-3 h-3 sm:w-4 sm:h-4 ${i < rating ? "text-yellow-400 fill-current" : "text-gray-300"}`}
      />
    ))
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-2 sm:p-4">
      <div className="bg-gradient-to-b from-gray-800 to-gray-900 rounded-lg w-full max-w-sm sm:max-w-md md:max-w-2xl lg:max-w-4xl border-2 border-yellow-500 shadow-2xl animate-fade-in-scale">
        {/* Header */}
        <div className="bg-gradient-to-r from-red-600 to-orange-600 p-3 sm:p-4 rounded-t-lg border-b-2 border-yellow-400">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-lg sm:text-xl md:text-2xl font-black text-white mb-1">
                🏆 <span className="text-yellow-300">TOP SITES</span>
              </h2>
              <p className="text-xs sm:text-sm text-gray-100 font-semibold">Eksklusiv adgang til bonusser!</p>
            </div>
            <button
              onClick={onClose}
              className="bg-white/20 hover:bg-white/30 rounded-full p-1.5 sm:p-2 transition-all hover:scale-110 flex-shrink-0"
            >
              <X className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-3 sm:p-4">
          <div className="space-y-3">
            {selectedSites.map((site, index) => (
              <a
                key={site.id}
                href={site.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block transform hover:scale-[1.02] transition-all"
              >
                <Card className="overflow-hidden border border-gray-600 bg-gradient-to-r from-gray-700 to-gray-800 hover:border-yellow-400 shadow-lg hover-lift">
                  <CardContent className="p-2 sm:p-3">
                    <div className="flex flex-col gap-2">
                      {/* Top row - Rank, Logo, Info, CTA */}
                      <div className="flex items-center gap-2 sm:gap-3">
                        {/* Rank Badge */}
                        <div className="flex-shrink-0">
                          <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center shadow-lg">
                            <span className="text-black font-black text-sm sm:text-base">#{index + 1}</span>
                          </div>
                        </div>

                        {/* Logo */}
                        <div className="flex-shrink-0 bg-white">
                          <Image
                            src={site.logo || "/placeholder.svg"}
                            alt={site.name}
                            width={80}
                            height={40}
                            className="w-20 h-10 sm:w-24 sm:h-12 md:w-28 md:h-14 rounded border border-gray-500 object-contain"
                          />
                        </div>

                        {/* Info */}
                        <div className="flex-1 min-w-0">
                          <h3 className="text-sm sm:text-base font-black text-white">{site.name}</h3>
                          <div className="flex items-center gap-1 mb-1">{renderStars(site.rating)}</div>
                          <div className="text-xs text-gray-400">{site.reviews} anmeldelser</div>
                        </div>

                        {/* CTA */}
                        <div className="flex-shrink-0">
                          <div className="bg-gradient-to-r from-red-600 to-red-700 text-white font-black px-2 py-1 sm:px-4 sm:py-2 text-xs sm:text-sm shadow-lg border border-red-400 rounded">
                            🎯 BONUS
                          </div>
                        </div>
                      </div>

                      {/* Bottom row - Bonus */}
                      <div className="mt-1">
                        <div className="bg-gradient-to-r from-green-500 to-green-600 text-white px-2 py-1 sm:px-3 sm:py-2 rounded shadow-lg border border-green-400 text-center">
                          <div className="flex items-center justify-center gap-1">
                            <Flame className="w-3 h-3 sm:w-4 sm:h-4" />
                            <span className="font-black text-xs sm:text-sm">{site.bonus}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
