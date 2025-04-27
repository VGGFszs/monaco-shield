"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

const plans = [
  {
    id: "essai",
    name: "Essai",
    price: { monthly: 0, annual: 0 },
    description: "Pour tester notre solution",
    features: [
      "1 utilisateur",
      "1 dossier",
      "1 eSignature",
      "Données intégralement chiffrées",
      "Cloud souverain monégasque",
    ],
  },
  {
    id: "basique",
    name: "Basique",
    price: { monthly: 25, annual: 240 },
    description: "Pour les petites structures",
    features: [
      "3 utilisateurs",
      "20 dossiers",
      "2 eSignatures / mois incluses",
      "Données intégralement chiffrées",
      "Cloud souverain monégasque",
      "Archivage inclus",
    ],
  },
  {
    id: "intermediaire",
    name: "Intermédiaire",
    price: { monthly: 100, annual: 960 },
    description: "Pour les PME et cabinets professionnels",
    features: [
      "10 utilisateurs",
      "50 dossiers",
      "10 eSignatures / mois incluses",
      "Données intégralement chiffrées",
      "Cloud souverain monégasque",
      "Archivage inclus",
    ],
    recommended: true,
  },
  {
    id: "avancee",
    name: "Avancée",
    price: { monthly: 500, annual: 4800 },
    description: "Pour les grandes entreprises et institutions",
    features: [
      "Utilisateurs illimités",
      "Dossiers illimités",
      "eSignatures illimitées",
      "Données intégralement chiffrées",
      "Cloud souverain monégasque",
      "Archivage inclus",
    ],
  },
]

export default function PlanSelector() {
  const router = useRouter()
  const [selectedPlan, setSelectedPlan] = useState("intermediaire")
  const [isAnnual, setIsAnnual] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  function handleContinue() {
    setIsLoading(true)

    // Simuler un délai de traitement
    setTimeout(() => {
      setIsLoading(false)
      router.push(`/signup/payment?plan=${selectedPlan}&billing=${isAnnual ? "annual" : "monthly"}`)
    }, 1000)
  }

  return (
    <div className="w-full space-y-8">
      <div className="flex justify-center">
        <div className="flex items-center space-x-4">
          <span className={`text-sm font-medium ${!isAnnual ? "text-red-600" : "text-gray-500"}`}>Mensuel</span>
          <button
            onClick={() => setIsAnnual(!isAnnual)}
            className="relative inline-flex h-6 w-11 items-center rounded-full bg-gray-200 transition-colors focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2"
            role="switch"
            aria-checked={isAnnual}
          >
            <span
              className={`inline-block h-4 w-4 rounded-full bg-white transition-transform ${
                isAnnual ? "translate-x-6" : "translate-x-1"
              }`}
            />
          </button>
          <span className={`text-sm font-medium ${isAnnual ? "text-red-600" : "text-gray-500"}`}>Annuel</span>
        </div>
      </div>
      {isAnnual && (
        <div className="text-center text-sm font-medium text-green-600">
          Économisez 20% avec la facturation annuelle
        </div>
      )}

      <div className="grid gap-6 md:grid-cols-4">
        {plans.map((plan) => (
          <Card
            key={plan.id}
            className={`relative flex flex-col ${selectedPlan === plan.id ? "border-red-600" : ""} ${plan.recommended ? "shadow-lg" : ""}`}
          >
            {plan.recommended && (
              <div className="absolute -top-3 left-0 right-0 mx-auto w-fit rounded-full bg-red-600 px-3 py-1 text-xs font-medium text-white">
                Recommandé
              </div>
            )}
            <CardHeader>
              <CardTitle>{plan.name}</CardTitle>
              <CardDescription>{plan.description}</CardDescription>
              <div className="mt-4">
                <span className="text-3xl font-bold">
                  {plan.price[isAnnual ? "annual" : "monthly"] === 0
                    ? "Gratuit"
                    : `${plan.price[isAnnual ? "annual" : "monthly"]}€`}
                </span>
                {plan.price[isAnnual ? "annual" : "monthly"] !== 0 && (
                  <span className="text-muted-foreground"> {isAnnual ? "/ an" : "/ mois"}</span>
                )}
                {isAnnual && plan.id !== "essai" && (
                  <div className="text-sm text-green-600 mt-1">
                    Économisez {Math.round(plan.price.monthly * 12 * 0.2)}€
                  </div>
                )}
              </div>
            </CardHeader>
            <CardContent className="flex-1">
              <ul className="space-y-2">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-green-600" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button
                variant={selectedPlan === plan.id ? "default" : "outline"}
                className={`w-full ${selectedPlan === plan.id && plan.recommended ? "bg-red-600 hover:bg-red-700" : ""}`}
                onClick={() => setSelectedPlan(plan.id)}
              >
                {selectedPlan === plan.id ? "Sélectionné" : "Sélectionner"}
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      <div className="flex justify-center pt-6">
        <Button size="lg" onClick={handleContinue} disabled={isLoading} className="bg-red-600 hover:bg-red-700">
          {isLoading ? (
            <span className="flex items-center justify-center gap-2">
              <span className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
              Chargement...
            </span>
          ) : (
            "Continuer vers le paiement"
          )}
        </Button>
      </div>
    </div>
  )
}
