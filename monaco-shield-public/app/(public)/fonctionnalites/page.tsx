"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { PublicHeader } from "@/components/public/public-header"
import { PublicFooter } from "@/components/public/public-footer"
import { useLanguage } from "@/lib/i18n/use-language"
import { t } from "@/lib/i18n/translations"

export default function FeaturesPage() {
  const { language } = useLanguage()

  return (
    <div className="flex min-h-screen flex-col">
      <PublicHeader />
      <section className="container grid items-center justify-center gap-6 py-8 md:py-10">
        <div className="flex max-w-[980px] flex-col items-start gap-2">
          <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
            {t("features.title", language)}
          </h1>
          <p className="max-w-[700px] text-lg text-muted-foreground">{t("features.subtitle", language)}</p>
        </div>
      </section>
      <section className="container grid items-center justify-center gap-6 py-8 md:py-10">
        <Tabs defaultValue="vigilance" className="w-full max-w-[800px] mx-auto">
          <TabsList className="grid grid-cols-2 md:grid-cols-4 w-full">
            <TabsTrigger value="vigilance">{t("features.tabs.vigilance", language) || "Vigilance"}</TabsTrigger>
            <TabsTrigger value="formation">{t("features.tabs.formation", language) || "Formation"}</TabsTrigger>
            <TabsTrigger value="signature">{t("features.tabs.signature", language) || "eSignature"}</TabsTrigger>
            <TabsTrigger value="reporting">{t("features.tabs.reporting", language) || "Reporting"}</TabsTrigger>
          </TabsList>
          <TabsContent value="vigilance">
            <Card>
              <CardHeader>
                <CardTitle>{t("features.vigilance.title", language) || "Vigilance"}</CardTitle>
              </CardHeader>
              <CardContent className="grid gap-4">
                <div className="relative aspect-video h-[200px] md:h-[300px]">
                  <Image
                    src="/images/compliance-dashboard.png"
                    alt={t("features.vigilance.title", language) || "Vigilance"}
                    fill
                    className="object-cover rounded-md"
                  />
                </div>
                <p>
                  {t("features.vigilance.description", language) ||
                    "Permettre aux utilisateurs de consulter automatiquement les principales bases de données internationales pour connaitre leur client, fournisseur ou partenaire. Et le cas échéant, gérer automatiquement les formulaires nécessaires à cette connaissance."}
                </p>
                <Button asChild>
                  <Link href="/contact">{t("features.learn.more", language) || "En savoir plus"}</Link>
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="formation">
            <Card>
              <CardHeader>
                <CardTitle>{t("features.formation.title", language) || "Formation"}</CardTitle>
              </CardHeader>
              <CardContent className="grid gap-4">
                <div className="relative aspect-video h-[200px] md:h-[300px]">
                  <Image
                    src="/images/beneficial-owners-graph.png"
                    alt={t("features.formation.title", language) || "Formation"}
                    fill
                    className="object-cover rounded-md"
                  />
                </div>
                <p>
                  {t("features.formation.description", language) ||
                    "Permettre d'assurer la formation des collaborateurs en matière d'opposabilité juridique des actes électroniques, en matière de lutte anti-blanchiment et plus généralement sur les bonnes pratiques de vigilance."}
                </p>
                <Button asChild>
                  <Link href="/contact">{t("features.learn.more", language) || "En savoir plus"}</Link>
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="signature">
            <Card>
              <CardHeader>
                <CardTitle>{t("features.signature.title", language) || "eSignature"}</CardTitle>
              </CardHeader>
              <CardContent className="grid gap-4">
                <div className="relative aspect-video h-[200px] md:h-[300px]">
                  <Image
                    src="/images/signature-interface.png"
                    alt={t("features.signature.title", language) || "eSignature"}
                    fill
                    className="object-cover rounded-md"
                  />
                </div>
                <p>
                  {t("features.signature.description", language) ||
                    "Signature électronique avancée ou qualifiée de tout document en quelques clics."}
                </p>
                <Button asChild>
                  <Link href="/contact">{t("features.learn.more", language) || "En savoir plus"}</Link>
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="reporting">
            <Card>
              <CardHeader>
                <CardTitle>{t("features.reporting.title", language) || "Reporting"}</CardTitle>
              </CardHeader>
              <CardContent className="grid gap-4">
                <div className="relative aspect-video h-[200px] md:h-[300px]">
                  <Image
                    src="/images/compliance-dashboard.png"
                    alt={t("features.reporting.title", language) || "Reporting"}
                    fill
                    className="object-cover rounded-md"
                  />
                </div>
                <p>
                  {t("features.reporting.description", language) ||
                    "Gestion intégrée des déclarations de soupçon, suivi en temps des procédures de vigilance/d'eSignature et disponibilité des pistes d'audit pour les autorités de contrôle."}
                </p>
                <Button asChild>
                  <Link href="/contact">{t("features.learn.more", language) || "En savoir plus"}</Link>
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </section>
      <PublicFooter />
    </div>
  )
}
