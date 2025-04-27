"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Shield, FileSignature, Users, Award, Globe, BookOpen } from "lucide-react"
import { PublicHeader } from "@/components/public/public-header"
import { PublicFooter } from "@/components/public/public-footer"
import { useLanguage } from "@/lib/i18n/use-language"
import { t } from "@/lib/i18n/translations"

export default function AboutPage() {
  const { language } = useLanguage()

  return (
    <div className="flex min-h-screen flex-col">
      <PublicHeader />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gray-50 py-20">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  {t("about.mission.title", language)}
                </h1>
                <p className="text-gray-500 md:text-xl">{t("about.mission.description", language)}</p>
              </div>
              <div className="flex justify-center">
                <div className="relative h-[300px] w-[400px] overflow-hidden rounded-lg">
                  <Image src="/monaco-office-modern.png" alt="Bureaux de MonacoShield" fill className="object-cover" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Notre histoire */}
        <section className="py-20">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-3xl space-y-6 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">{t("about.history.title", language)}</h2>
              <p className="text-gray-500 md:text-lg">{t("about.history.p1", language)}</p>
              <p className="text-gray-500 md:text-lg">{t("about.history.p2", language)}</p>
              <p className="text-gray-500 md:text-lg">{t("about.history.p3", language)}</p>
            </div>
          </div>
        </section>

        {/* Nos valeurs */}
        <section className="bg-gray-50 py-20">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-3xl space-y-6 text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">{t("about.values.title", language)}</h2>
              <p className="text-gray-500 md:text-lg">{t("about.values.subtitle", language)}</p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <Card className="bg-white">
                <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-100">
                    <Shield className="h-6 w-6 text-red-600" />
                  </div>
                  <h3 className="text-xl font-bold">{t("about.values.security.title", language)}</h3>
                  <p className="text-gray-500">{t("about.values.security.description", language)}</p>
                </CardContent>
              </Card>

              <Card className="bg-white">
                <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-100">
                    <Award className="h-6 w-6 text-red-600" />
                  </div>
                  <h3 className="text-xl font-bold">{t("about.values.excellence.title", language)}</h3>
                  <p className="text-gray-500">{t("about.values.excellence.description", language)}</p>
                </CardContent>
              </Card>

              <Card className="bg-white">
                <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-100">
                    <Globe className="h-6 w-6 text-red-600" />
                  </div>
                  <h3 className="text-xl font-bold">{t("about.values.sovereignty.title", language)}</h3>
                  <p className="text-gray-500">{t("about.values.sovereignty.description", language)}</p>
                </CardContent>
              </Card>

              <Card className="bg-white">
                <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-100">
                    <Users className="h-6 w-6 text-red-600" />
                  </div>
                  <h3 className="text-xl font-bold">{t("about.values.collaboration.title", language)}</h3>
                  <p className="text-gray-500">{t("about.values.collaboration.description", language)}</p>
                </CardContent>
              </Card>

              <Card className="bg-white">
                <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-100">
                    <FileSignature className="h-6 w-6 text-red-600" />
                  </div>
                  <h3 className="text-xl font-bold">{t("about.values.compliance.title", language)}</h3>
                  <p className="text-gray-500">{t("about.values.compliance.description", language)}</p>
                </CardContent>
              </Card>

              <Card className="bg-white">
                <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-100">
                    <BookOpen className="h-6 w-6 text-red-600" />
                  </div>
                  <h3 className="text-xl font-bold">{t("about.values.innovation.title", language)}</h3>
                  <p className="text-gray-500">{t("about.values.innovation.description", language)}</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Notre équipe */}
        <section className="py-20">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-3xl space-y-6 text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">{t("about.team.title", language)}</h2>
              <p className="text-gray-500 md:text-lg">{t("about.team.subtitle", language)}</p>
            </div>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="relative h-40 w-40 overflow-hidden rounded-full">
                  <Image
                    src="/confident-leader.png"
                    alt={t("about.team.sophie.name", language)}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold">{t("about.team.sophie.name", language)}</h3>
                  <p className="text-gray-500">{t("about.team.sophie.role", language)}</p>
                </div>
                <p className="text-sm text-gray-500">{t("about.team.sophie.bio", language)}</p>
              </div>

              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="relative h-40 w-40 overflow-hidden rounded-full">
                  <Image
                    src="/confident-tech-leader.png"
                    alt={t("about.team.marc.name", language)}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold">{t("about.team.marc.name", language)}</h3>
                  <p className="text-gray-500">{t("about.team.marc.role", language)}</p>
                </div>
                <p className="text-sm text-gray-500">{t("about.team.marc.bio", language)}</p>
              </div>

              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="relative h-40 w-40 overflow-hidden rounded-full">
                  <Image
                    src="/confident-legal-professional.png"
                    alt={t("about.team.pierre.name", language)}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold">{t("about.team.pierre.name", language)}</h3>
                  <p className="text-gray-500">{t("about.team.pierre.role", language)}</p>
                </div>
                <p className="text-sm text-gray-500">{t("about.team.pierre.bio", language)}</p>
              </div>

              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="relative h-40 w-40 overflow-hidden rounded-full">
                  <Image
                    src="/confident-professional-presentation.png"
                    alt={t("about.team.isabelle.name", language)}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold">{t("about.team.isabelle.name", language)}</h3>
                  <p className="text-gray-500">{t("about.team.isabelle.role", language)}</p>
                </div>
                <p className="text-sm text-gray-500">{t("about.team.isabelle.bio", language)}</p>
              </div>

              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="relative h-40 w-40 overflow-hidden rounded-full">
                  <Image
                    src="/confident-sales-professional.png"
                    alt={t("about.team.thomas.name", language)}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold">{t("about.team.thomas.name", language)}</h3>
                  <p className="text-gray-500">{t("about.team.thomas.role", language)}</p>
                </div>
                <p className="text-sm text-gray-500">{t("about.team.thomas.bio", language)}</p>
              </div>

              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="relative h-40 w-40 overflow-hidden rounded-full">
                  <Image
                    src="/empathetic-support-specialist.png"
                    alt={t("about.team.marie.name", language)}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold">{t("about.team.marie.name", language)}</h3>
                  <p className="text-gray-500">{t("about.team.marie.role", language)}</p>
                </div>
                <p className="text-sm text-gray-500">{t("about.team.marie.bio", language)}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Nos partenaires */}
        <section className="bg-gray-50 py-20">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-3xl space-y-6 text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">{t("about.partners.title", language)}</h2>
              <p className="text-gray-500 md:text-lg">{t("about.partners.subtitle", language)}</p>
            </div>

            <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-6">
              <div className="flex items-center justify-center p-4">
                <div className="h-12 w-24 bg-gray-200 rounded"></div>
              </div>
              <div className="flex items-center justify-center p-4">
                <div className="h-12 w-24 bg-gray-200 rounded"></div>
              </div>
              <div className="flex items-center justify-center p-4">
                <div className="h-12 w-24 bg-gray-200 rounded"></div>
              </div>
              <div className="flex items-center justify-center p-4">
                <div className="h-12 w-24 bg-gray-200 rounded"></div>
              </div>
              <div className="flex items-center justify-center p-4">
                <div className="h-12 w-24 bg-gray-200 rounded"></div>
              </div>
              <div className="flex items-center justify-center p-4">
                <div className="h-12 w-24 bg-gray-200 rounded"></div>
              </div>
              <div className="flex items-center justify-center p-4">
                <div className="h-12 w-24 bg-gray-200 rounded"></div>
              </div>
              <div className="flex items-center justify-center p-4">
                <div className="h-12 w-24 bg-gray-200 rounded"></div>
              </div>
              <div className="flex items-center justify-center p-4">
                <div className="h-12 w-24 bg-gray-200 rounded"></div>
              </div>
              <div className="flex items-center justify-center p-4">
                <div className="h-12 w-24 bg-gray-200 rounded"></div>
              </div>
              <div className="flex items-center justify-center p-4">
                <div className="h-12 w-24 bg-gray-200 rounded"></div>
              </div>
              <div className="flex items-center justify-center p-4">
                <div className="h-12 w-24 bg-gray-200 rounded"></div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-red-600 py-20 text-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  {t("about.cta.title", language)}
                </h2>
                <p className="mx-auto max-w-[700px] text-red-100 md:text-xl">{t("about.cta.subtitle", language)}</p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button asChild size="lg" variant="secondary" className="rounded-full">
                  <Link href="/contact">{t("about.cta.contact", language)}</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="rounded-full text-white border-white hover:bg-red-700"
                >
                  <Link href="/tarifs">{t("about.cta.pricing", language)}</Link>
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
