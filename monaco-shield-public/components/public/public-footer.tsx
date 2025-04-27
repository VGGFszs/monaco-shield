"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useLanguage } from "@/lib/i18n/use-language"
import { t } from "@/lib/i18n/translations"

export function PublicFooter() {
  const { language } = useLanguage()

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container px-4 py-12 md:px-6 md:py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Image src="/images/monaco-shield-logo-new.png" alt="MonacoShield Logo" width={40} height={40} />
              <span className="font-bold text-xl text-white">MonacoShield</span>
            </div>
            <p className="text-sm">Solution souveraine de vigilance et de signature électronique</p>
            <p className="text-sm">
              5bis avenue Saint Roman
              <br />
              98000 Monaco
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-white">{t("footer.product", language)}</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/fonctionnalites" className="hover:text-white">
                  {t("nav.features", language)}
                </Link>
              </li>
              <li>
                <Link href="/tarifs" className="hover:text-white">
                  {t("nav.pricing", language)}
                </Link>
              </li>
              <li>
                <Link href="/demo" className="hover:text-white">
                  {t("footer.demo", language)}
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-white">{t("footer.company", language)}</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/a-propos" className="hover:text-white">
                  {t("nav.about", language)}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white">
                  {t("nav.contact", language)}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white">
                  {t("footer.careers", language)}
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-white">{t("footer.newsletter", language)}</h3>
            <p className="text-sm">{t("footer.newsletter.description", language)}</p>
            <div className="flex gap-2">
              <Input
                type="email"
                placeholder={t("footer.email.placeholder", language)}
                className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-400"
              />
              <Button>{t("footer.subscribe", language)}</Button>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-800 pt-8 text-sm">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <p>{t("footer.rights", language)}</p>
            <div className="flex gap-4">
              <Link href="/conditions" className="hover:text-white">
                {t("footer.terms", language)}
              </Link>
              <Link href="/confidentialite" className="hover:text-white">
                {t("footer.privacy", language)}
              </Link>
              <Link href="/cookies" className="hover:text-white">
                {t("footer.cookies", language)}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
