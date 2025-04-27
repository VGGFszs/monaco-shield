import Link from "next/link"
import { PublicHeader } from "@/components/public/public-header"
import { PublicFooter } from "@/components/public/public-footer"
import PlanSelector from "./plan-selector"

export default function PlanPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <PublicHeader />

      <main className="flex-1">
        <div className="container flex min-h-[calc(100vh-64px-200px)] flex-col items-center justify-center py-12">
          <div className="flex w-full max-w-[1200px] flex-col items-center gap-8">
            <div className="flex flex-col items-center space-y-2 text-center">
              <div className="flex items-center justify-center rounded-full bg-red-600/10 p-2 text-red-600">
                <span className="text-sm font-medium">Étape 2 sur 3</span>
              </div>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Choisissez votre plan</h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Sélectionnez le plan qui correspond le mieux à vos besoins de sécurité.
              </p>
            </div>

            <PlanSelector />

            <div className="mt-4 text-center text-sm text-muted-foreground">
              Besoin d'aide pour choisir?{" "}
              <Link href="/contact" className="font-medium text-red-600 underline underline-offset-2">
                Contactez notre équipe
              </Link>
            </div>
          </div>
        </div>
      </main>

      <PublicFooter />
    </div>
  )
}
