"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

interface CookieConsentProps {
  onAccept: () => void
}

export default function CookieConsent({ onAccept }: CookieConsentProps) {
  return (
    <div className="fixed bottom-4 left-4 right-4 z-50 md:left-auto md:right-4 md:max-w-md">
      <Card className="shadow-lg border-2">
        <CardContent className="p-4">
          <h3 className="font-semibold mb-2">Cookie Samtykke</h3>
          <p className="text-sm text-gray-600 mb-4">
            Vi bruger cookies for at forbedre din oplevelse på vores website. Ved at fortsætte accepterer du vores brug
            af cookies.
          </p>
          <div className="flex gap-2">
            <Button onClick={onAccept} className="flex-1">
              Accepter
            </Button>
            <Button variant="outline" className="flex-1">
              Læs mere
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
