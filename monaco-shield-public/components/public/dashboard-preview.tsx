"use client"

import Image from "next/image"
import { useLanguage } from "@/lib/i18n/use-language"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function DashboardPreview() {
  const { language, t } = useLanguage()

  return (
    <section className="py-16">
      <div className="container px-4 md:px-6">
        <div className="grid gap-12 md:grid-cols-2 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">
              {t("dashboard.preview.title", language) || "Une solution complète pour la conformité"}
            </h2>
            <p className="text-gray-600 mb-6">
              {t("dashboard.preview.description", language) ||
                "MonacoShield offre une interface intuitive et puissante pour gérer tous vos besoins en matière de conformité et de lutte anti-blanchiment."}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild className="bg-red-600 hover:bg-red-700">
                <Link href="/inscription">{t("cta.free.trial", language) || "Essai gratuit"}</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/contact">{t("cta.request.demo", language) || "Demander une démo"}</Link>
              </Button>
            </div>
          </div>
          <div className="relative rounded-lg overflow-hidden shadow-xl">
            <Image
              src="/images/compliance-dashboard.png"
              alt="MonacoShield Dashboard"
              width={800}
              height={500}
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
