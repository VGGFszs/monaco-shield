"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle2 } from "lucide-react"
import { PublicHeader } from "@/components/public/public-header"
import { PublicFooter } from "@/components/public/public-footer"
import { PricingFaq } from "@/components/public/pricing-faq"
import { useLanguage } from "@/lib/i18n/use-language"
import { t } from "@/lib/i18n/translations"
import { useState } from "react"

export default function TarifsPage() {
  const { language } = useLanguage()
  const [vigilanceProcedures, setVigilanceProcedures] = useState(5)
  const [signatureProcedures, setSignatureProcedures] = useState(5)
  const [isAnnual, setIsAnnual] = useState(false)

  // Calcul du ROI
  const vigilanceSavings = vigilanceProcedures * 7 // 7h économisées par procédure de vigilance
  const signatureSavings = signatureProcedures * 1 // 1h économisée par procédure de signature
  const totalHoursSaved = vigilanceSavings + signatureSavings
  const monthlySavings = totalHoursSaved * 50 // 50€ par heure (salaire horaire chargé)
  const annualSavings = monthlySavings * 12

  // Prix mensuels de base
  const basePrices = {
    basique: 25,
    intermediaire: 100,
    avancee: 500,
  }

  // Calculer les prix en fonction du mode de facturation (20% de réduction pour annuel)
  const getPriceDisplay = (basePrice) => {
    if (isAnnual) {
      const annualPrice = Math.round(basePrice * 12 * 0.8)
      return `${annualPrice}€ / an`
    } else {
      return `${basePrice}€ / mois`
    }
  }

  return (
    <div className="flex min-h-screen flex-col">
      <PublicHeader />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gray-50 py-20">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  {t("pricing.title", language)}
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">{t("pricing.subtitle", language)}</p>
              </div>
              <div className="flex items-center space-x-4">
                <span className={`text-sm font-medium ${!isAnnual ? "text-red-600" : "text-gray-500"}`}>
                  {t("pricing.billing.monthly", language)}
                </span>
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
                <span className={`text-sm font-medium ${isAnnual ? "text-red-600" : "text-gray-500"}`}>
                  {t("pricing.billing.annual", language)}
                </span>
              </div>
              {isAnnual && (
                <div className="mt-2 text-sm font-medium text-green-600">
                  Économisez 20% avec la facturation annuelle
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="py-20">
          <div className="container px-4 md:px-6">
            <div className="grid gap-8 md:grid-cols-4">
              {/* Plan Essai */}
              <Card className="flex flex-col">
                <CardHeader>
                  <CardTitle>Essai</CardTitle>
                  <CardDescription>Pour tester notre solution</CardDescription>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-red-600">Gratuit</span>
                  </div>
                </CardHeader>
                <CardContent className="flex-1">
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-green-600" />
                      <span>1 utilisateur</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-green-600" />
                      <span>
                        1 dossier
                        <br />
                        <span className="text-xs text-gray-500">Client, fournisseur ou partenaire</span>
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-green-600" />
                      <span>1 eSignature</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-green-600" />
                      <span>Données intégralement chiffrées</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-green-600" />
                      <span>Cloud souverain monégasque</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button asChild className="w-full">
                    <Link href="/inscription?plan=essai">Commencer</Link>
                  </Button>
                </CardFooter>
              </Card>

              {/* Plan Basique */}
              <Card className="flex flex-col">
                <CardHeader>
                  <CardTitle>Basique</CardTitle>
                  <CardDescription>Pour les petites structures</CardDescription>
                  <div className="mt-4">
                    <span className="text-4xl font-bold">{isAnnual ? "240€" : "25€"}</span>
                    <span className="text-gray-500"> {isAnnual ? "/ an" : "/ mois"}</span>
                    {isAnnual && <div className="text-sm text-green-600 mt-1">Économisez 60€</div>}
                  </div>
                </CardHeader>
                <CardContent className="flex-1">
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-green-600" />
                      <span>3 utilisateurs</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-green-600" />
                      <span>
                        20 dossiers
                        <br />
                        <span className="text-xs text-gray-500">Clients, fournisseurs ou partenaires</span>
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-green-600" />
                      <span>2 eSignatures / mois incluses</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-green-600" />
                      <span>Données intégralement chiffrées</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-green-600" />
                      <span>Cloud souverain monégasque</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-green-600" />
                      <span>Archivage inclus</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button asChild className="w-full">
                    <Link href={`/inscription?plan=basique&billing=${isAnnual ? "annual" : "monthly"}`}>Commencer</Link>
                  </Button>
                </CardFooter>
              </Card>

              {/* Plan Intermédiaire */}
              <Card className="flex flex-col relative border-red-600 shadow-lg">
                <div className="absolute -top-4 left-0 right-0 flex justify-center">
                  <span className="bg-red-600 text-white px-3 py-1 text-sm font-medium rounded-full">
                    {t("pricing.recommended", language)}
                  </span>
                </div>
                <CardHeader>
                  <CardTitle>Intermédiaire</CardTitle>
                  <CardDescription>Pour les PME et cabinets professionnels</CardDescription>
                  <div className="mt-4">
                    <span className="text-4xl font-bold">{isAnnual ? "960€" : "100€"}</span>
                    <span className="text-gray-500"> {isAnnual ? "/ an" : "/ mois"}</span>
                    {isAnnual && <div className="text-sm text-green-600 mt-1">Économisez 240€</div>}
                  </div>
                </CardHeader>
                <CardContent className="flex-1">
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-green-600" />
                      <span>10 utilisateurs</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-green-600" />
                      <span>
                        50 dossiers
                        <br />
                        <span className="text-xs text-gray-500">Clients, fournisseurs ou partenaires</span>
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-green-600" />
                      <span>10 eSignatures / mois incluses</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-green-600" />
                      <span>Données intégralement chiffrées</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-green-600" />
                      <span>Cloud souverain monégasque</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-green-600" />
                      <span>Archivage inclus</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button asChild className="w-full bg-red-600 hover:bg-red-700">
                    <Link href={`/inscription?plan=intermediaire&billing=${isAnnual ? "annual" : "monthly"}`}>
                      Commencer
                    </Link>
                  </Button>
                </CardFooter>
              </Card>

              {/* Plan Avancée */}
              <Card className="flex flex-col">
                <CardHeader>
                  <CardTitle>Avancée</CardTitle>
                  <CardDescription>Pour les grandes entreprises et institutions</CardDescription>
                  <div className="mt-4">
                    <span className="text-4xl font-bold">{isAnnual ? "4800€" : "500€"}</span>
                    <span className="text-gray-500"> {isAnnual ? "/ an" : "/ mois"}</span>
                    {isAnnual && <div className="text-sm text-green-600 mt-1">Économisez 1200€</div>}
                  </div>
                </CardHeader>
                <CardContent className="flex-1">
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-green-600" />
                      <span>Utilisateurs illimités</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-green-600" />
                      <span>
                        Dossiers illimités
                        <br />
                        <span className="text-xs text-gray-500">Clients, fournisseurs ou partenaires</span>
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-green-600" />
                      <span>eSignatures illimitées</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-green-600" />
                      <span>Données intégralement chiffrées</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-green-600" />
                      <span>Cloud souverain monégasque</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-green-600" />
                      <span>Archivage inclus</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="outline" className="w-full">
                    <Link href="/contact">Nous contacter</Link>
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="bg-gray-50 py-20">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  {t("pricing.comparison.title", language)}
                </h2>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
                  {t("pricing.comparison.subtitle", language)}
                </p>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b">
                    <th className="py-4 px-6 text-left font-medium">Fonctionnalité</th>
                    <th className="py-4 px-6 text-center font-medium">Essai</th>
                    <th className="py-4 px-6 text-center font-medium">Basique</th>
                    <th className="py-4 px-6 text-center font-medium">Intermédiaire</th>
                    <th className="py-4 px-6 text-center font-medium">Avancée</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="py-4 px-6 font-medium">Utilisateurs</td>
                    <td className="py-4 px-6 text-center">1</td>
                    <td className="py-4 px-6 text-center">3</td>
                    <td className="py-4 px-6 text-center">10</td>
                    <td className="py-4 px-6 text-center">Illimités</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-4 px-6 font-medium">Dossiers</td>
                    <td className="py-4 px-6 text-center">1</td>
                    <td className="py-4 px-6 text-center">20</td>
                    <td className="py-4 px-6 text-center">50</td>
                    <td className="py-4 px-6 text-center">Illimités</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-4 px-6 font-medium">eSignatures</td>
                    <td className="py-4 px-6 text-center">1</td>
                    <td className="py-4 px-6 text-center">2/mois</td>
                    <td className="py-4 px-6 text-center">10/mois</td>
                    <td className="py-4 px-6 text-center">Illimitées</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-4 px-6 font-medium">Données chiffrées</td>
                    <td className="py-4 px-6 text-center">✓</td>
                    <td className="py-4 px-6 text-center">✓</td>
                    <td className="py-4 px-6 text-center">✓</td>
                    <td className="py-4 px-6 text-center">✓</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-4 px-6 font-medium">Cloud souverain</td>
                    <td className="py-4 px-6 text-center">✓</td>
                    <td className="py-4 px-6 text-center">✓</td>
                    <td className="py-4 px-6 text-center">✓</td>
                    <td className="py-4 px-6 text-center">✓</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-4 px-6 font-medium">Archivage</td>
                    <td className="py-4 px-6 text-center">-</td>
                    <td className="py-4 px-6 text-center">✓</td>
                    <td className="py-4 px-6 text-center">✓</td>
                    <td className="py-4 px-6 text-center">✓</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-4 px-6 font-medium">Support</td>
                    <td className="py-4 px-6 text-center">Email</td>
                    <td className="py-4 px-6 text-center">Email</td>
                    <td className="py-4 px-6 text-center">Email & Téléphone</td>
                    <td className="py-4 px-6 text-center">Dédié</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ROI Calculator */}
        <section className="py-20">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  Calculez votre retour sur investissement
                </h2>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
                  Estimez les économies réalisées grâce à MonacoShield
                </p>
              </div>
            </div>

            <div className="mx-auto max-w-3xl rounded-lg border bg-white p-6 shadow-sm">
              <div className="space-y-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    Nombre mensuel de procédures de vigilance
                  </label>
                  <input
                    type="range"
                    min="1"
                    max="20"
                    value={vigilanceProcedures}
                    onChange={(e) => setVigilanceProcedures(Number.parseInt(e.target.value))}
                    className="w-full"
                  />
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-500">1</span>
                    <span className="text-sm font-medium">{vigilanceProcedures}</span>
                    <span className="text-sm text-gray-500">20</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    Nombre mensuel de documents envoyés en signature
                  </label>
                  <input
                    type="range"
                    min="1"
                    max="30"
                    value={signatureProcedures}
                    onChange={(e) => setSignatureProcedures(Number.parseInt(e.target.value))}
                    className="w-full"
                  />
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-500">1</span>
                    <span className="text-sm font-medium">{signatureProcedures}</span>
                    <span className="text-sm text-gray-500">30</span>
                  </div>
                </div>

                <div className="rounded-lg bg-gray-50 p-4">
                  <div className="grid gap-4 md:grid-cols-3">
                    <div>
                      <p className="text-sm font-medium">Temps économisé par mois</p>
                      <p className="text-2xl font-bold">{totalHoursSaved} heures</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium">Économie mensuelle</p>
                      <p className="text-2xl font-bold">{monthlySavings} €</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium">Économie annuelle</p>
                      <p className="text-2xl font-bold text-green-600">{annualSavings} €</p>
                    </div>
                  </div>
                </div>

                <div className="text-sm text-gray-500 italic">
                  <p>Calcul basé sur :</p>
                  <ul className="list-disc pl-5 mt-1">
                    <li>7h économisées par procédure de vigilance</li>
                    <li>1h économisée par procédure de signature</li>
                    <li>Salaire horaire chargé de 50€ en Principauté</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <PricingFaq />

        {/* CTA Section */}
        <section className="bg-red-600 py-20 text-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Prêt à simplifier votre conformité ?
                </h2>
                <p className="mx-auto max-w-[700px] text-red-100 md:text-xl">
                  Commencez dès aujourd'hui avec un essai gratuit sans engagement
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button asChild size="lg" variant="secondary" className="rounded-full">
                  <Link href="/inscription">Essai gratuit</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="rounded-full bg-white text-red-600 border-white hover:bg-gray-100 hover:text-red-700"
                >
                  <Link href="/contact">Nous contacter</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <PublicFooter />
    </div>
  )
}
