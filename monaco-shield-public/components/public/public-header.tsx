"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, X } from "lucide-react"
import { useState } from "react"
import { useLanguage } from "@/lib/i18n/use-language"
import { t } from "@/lib/i18n/translations"
import { LanguageSelector } from "@/components/language-selector"

export function PublicHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { language } = useLanguage()

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/images/monaco-shield-logo-new.png" alt="MonacoShield Logo" width={32} height={32} />
            <span className="hidden font-bold text-xl xs:inline-block">MonacoShield</span>
          </Link>
        </div>
        <nav className="hidden lg:flex gap-6">
          <Link href="/" className="text-sm font-medium transition-colors hover:text-primary">
            {t("nav.home", language)}
          </Link>
          <DropdownMenu>
            <DropdownMenuTrigger className="text-sm font-medium transition-colors hover:text-primary">
              {t("nav.features", language)}
            </DropdownMenuTrigger>
            <DropdownMenuContent align="center">
              <DropdownMenuItem asChild>
                <Link href="/fonctionnalites#lab">Conformité LAB</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/fonctionnalites#signature">eSignature</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/fonctionnalites#security">Sécurité</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/fonctionnalites">Toutes les fonctionnalités</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Link href="/tarifs" className="text-sm font-medium transition-colors hover:text-primary">
            {t("nav.pricing", language)}
          </Link>
          <Link href="/a-propos" className="text-sm font-medium transition-colors hover:text-primary">
            {t("nav.about", language)}
          </Link>
          <Link href="/contact" className="text-sm font-medium transition-colors hover:text-primary">
            {t("nav.contact", language)}
          </Link>
        </nav>
        <div className="hidden lg:flex items-center gap-4">
          <LanguageSelector />
          <Button asChild variant="ghost" size="sm">
            <Link href="/connexion">{t("nav.login", language)}</Link>
          </Button>
          <Button asChild size="sm">
            <Link href="/inscription">{t("nav.signup", language)}</Link>
          </Button>
        </div>
        <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
          <SheetTrigger asChild className="lg:hidden">
            <Button variant="outline" size="icon" className="rounded-full">
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-full sm:w-[350px]">
            <nav className="flex flex-col gap-4 mt-8">
              <Link
                href="/"
                className="text-lg font-medium transition-colors hover:text-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                {t("nav.home", language)}
              </Link>
              <Link
                href="/fonctionnalites"
                className="text-lg font-medium transition-colors hover:text-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                {t("nav.features", language)}
              </Link>
              <Link
                href="/tarifs"
                className="text-lg font-medium transition-colors hover:text-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                {t("nav.pricing", language)}
              </Link>
              <Link
                href="/a-propos"
                className="text-lg font-medium transition-colors hover:text-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                {t("nav.about", language)}
              </Link>
              <Link
                href="/contact"
                className="text-lg font-medium transition-colors hover:text-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                {t("nav.contact", language)}
              </Link>
              <div className="flex flex-col gap-2 mt-4">
                <div className="flex justify-center mb-2">
                  <LanguageSelector />
                </div>
                <Button asChild variant="outline" className="w-full">
                  <Link href="/connexion" onClick={() => setIsMenuOpen(false)}>
                    {t("nav.login", language)}
                  </Link>
                </Button>
                <Button asChild className="w-full">
                  <Link href="/inscription" onClick={() => setIsMenuOpen(false)}>
                    {t("nav.signup", language)}
                  </Link>
                </Button>
              </div>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
