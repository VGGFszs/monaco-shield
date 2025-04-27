"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { useLanguage } from "@/components/language-provider"
import {
  BarChart3,
  FileCheck,
  FileSignature,
  Fingerprint,
  GraduationCap,
  Home,
  Settings,
  Shield,
  Users,
} from "lucide-react"

const navItems = [
  {
    title: "nav.dashboard",
    href: "/dashboard",
    icon: Home,
  },
  {
    title: "nav.exposure",
    href: "/exposure",
    icon: Shield,
  },
  {
    title: "nav.suspicion",
    href: "/suspicion",
    icon: Fingerprint,
  },
  {
    title: "nav.training",
    href: "/training",
    icon: GraduationCap,
  },
  {
    title: "nav.signature",
    href: "/signature",
    icon: FileSignature,
  },
  {
    title: "nav.beneficiary",
    href: "/beneficiary",
    icon: FileCheck,
  },
  {
    title: "nav.users",
    href: "/users",
    icon: Users,
  },
  {
    title: "nav.reports",
    href: "/reports",
    icon: BarChart3,
  },
  {
    title: "nav.settings",
    href: "/settings",
    icon: Settings,
  },
]

export function SideNav() {
  const pathname = usePathname()
  const { t } = useLanguage()

  return (
    <nav className="hidden w-64 flex-col border-r bg-muted/40 md:flex">
      <div className="flex flex-col gap-2 p-4">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium hover:bg-muted",
              pathname === item.href ? "bg-muted" : "transparent",
            )}
          >
            <item.icon className="h-5 w-5" />
            {t(item.title)}
          </Link>
        ))}
      </div>
    </nav>
  )
}
