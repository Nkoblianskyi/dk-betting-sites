"use client"

import { useState, useEffect } from "react"
import Header from "@/components/header"
import Hero from "@/components/hero"
import RatingList from "@/components/rating-list"
import BonusInfo from "@/components/bonus-info"
import SelectionCriteria from "@/components/selection-criteria"
import SafeGambling from "@/components/safe-gambling"
import Footer from "@/components/footer"
import CookieConsent from "@/components/cookie-consent"
import Modal from "@/components/modal"
import { bettingSites } from "@/data/betting-sites"
import TopSitesModal from "@/components/top-sites-modal"

export default function HomePage() {
  const [showCookieConsent, setShowCookieConsent] = useState(false)
  const [showAgeModal, setShowAgeModal] = useState(false)
  const [showTermsModal, setShowTermsModal] = useState(false)
  const [showTopSitesModal, setShowTopSitesModal] = useState(false)

  useEffect(() => {
    const hasAcceptedCookies = localStorage.getItem("cookiesAccepted")
    if (!hasAcceptedCookies) {
      setShowCookieConsent(true)
    }
  }, [])

  useEffect(() => {
    // Show top sites modal after a short delay when page loads
    const timer = setTimeout(() => {
      setShowTopSitesModal(true)
    }, 1500)

    return () => clearTimeout(timer)
  }, [])

  const handleCookieAccept = () => {
    localStorage.setItem("cookiesAccepted", "true")
    setShowCookieConsent(false)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <Hero onAgeModalOpen={() => setShowAgeModal(true)} onTermsModalOpen={() => setShowTermsModal(true)} />
        <RatingList sites={bettingSites} />
        <BonusInfo />
        <SelectionCriteria />
        <SafeGambling />
      </main>
      <Footer />

      {showCookieConsent && <CookieConsent onAccept={handleCookieAccept} />}

      <Modal isOpen={showAgeModal} onClose={() => setShowAgeModal(false)} title="18+ | Spil ansvarligt!">
        <div className="space-y-4">
          <p>Dette website er kun for personer over 18 år.</p>
          <p>Gambling kan være vanedannende. Spil ansvarligt og kun med midler, du har råd til at miste.</p>
          <div className="flex gap-4">
            <a
              href="https://ludomani.dk/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Ludomani.dk
            </a>
            <a
              href="https://www.gambleaware.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              GambleAware
            </a>
          </div>
        </div>
      </Modal>

      <Modal isOpen={showTermsModal} onClose={() => setShowTermsModal(false)} title="Regler og vilkår gælder">
        <div className="space-y-4">
          <h3 className="font-semibold">Generelle vilkår</h3>
          <p>
            Alle bonusser og tilbud er underlagt specifikke vilkår og betingelser fra de respektive betting udbydere.
          </p>
          <h3 className="font-semibold">Ansvarligt spil</h3>
          <p>Vi opfordrer til ansvarligt spil og anbefaler kun at spille med midler, du har råd til at miste.</p>
          <h3 className="font-semibold">Aldersgrænse</h3>
          <p>Du skal være mindst 18 år for at deltage i gambling aktiviteter.</p>
        </div>
      </Modal>

      <TopSitesModal sites={bettingSites} isOpen={showTopSitesModal} onClose={() => setShowTopSitesModal(false)} />
    </div>
  )
}
