"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Bell, ChevronDown, Globe, Menu, Moon, Search, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { useLanguage } from "@/components/language-provider"

import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { SideNav } from "@/components/side-nav"

export function TopNav() {
  const { setTheme, theme } = useTheme()
  const { language, setLanguage, t } = useLanguage()
  const pathname = usePathname()
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle Menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="pr-0">
          <SideNav />
        </SheetContent>
      </Sheet>
      <Link href="/dashboard" className="flex items-center gap-2 md:gap-3">
        <div className="relative h-8 w-8">
          <Image src="/images/monaco-shield-logo.png" alt="Monaco Shields Logo" fill className="object-contain" />
        </div>
        <span className="hidden font-bold md:inline-block">Monaco Shields</span>
      </Link>
      <div className="relative ml-auto flex-1 md:grow-0">
        {isSearchOpen && (
          <div className="absolute inset-0 flex w-full items-center md:w-[400px]">
            <Input
              type="search"
              placeholder={t("search.placeholder")}
              className="w-full"
              autoFocus
              onBlur={() => setIsSearchOpen(false)}
            />
          </div>
        )}
        <Button variant="outline" size="icon" className="ml-auto" onClick={() => setIsSearchOpen(true)}>
          <Search className="h-5 w-5" />
          <span className="sr-only">{t("search.label")}</span>
        </Button>
      </div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="icon">
            <Globe className="h-5 w-5" />
            <span className="sr-only">{t("language.change")}</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem onClick={() => setLanguage("fr")}>🇫🇷 Français {language === "fr" && "✓"}</DropdownMenuItem>
          <DropdownMenuItem onClick={() => setLanguage("en")}>🇬🇧 English {language === "en" && "✓"}</DropdownMenuItem>
          <DropdownMenuItem onClick={() => setLanguage("it")}>🇮🇹 Italiano {language === "it" && "✓"}</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <Button variant="outline" size="icon" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
        <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
        <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        <span className="sr-only">{t("theme.toggle")}</span>
      </Button>
      <Button variant="outline" size="icon" className="relative">
        <Bell className="h-5 w-5" />
        <span className="sr-only">{t("notifications.label")}</span>
        <span className="absolute right-1 top-1 flex h-2 w-2 rounded-full bg-primary"></span>
      </Button>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="sm" className="gap-2">
            <Avatar className="h-6 w-6">
              <AvatarImage src="/mystical-forest-spirit.png" alt="Avatar" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <span className="hidden md:inline-block">John Doe</span>
            <ChevronDown className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem asChild>
            <Link href="/profile">{t("profile.my")}</Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link href="/settings">{t("settings.label")}</Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link href="/logout">{t("auth.logout")}</Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </header>
  )
}
