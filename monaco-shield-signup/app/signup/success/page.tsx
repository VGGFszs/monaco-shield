import Link from "next/link"
import { CheckCircle, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { PublicHeader } from "@/components/public/public-header"
import { PublicFooter } from "@/components/public/public-footer"

export default function SuccessPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <PublicHeader />

      <main className="flex-1">
        <div className="container flex min-h-[calc(100vh-64px-200px)] flex-col items-center justify-center py-12">
          <div className="flex w-full max-w-[600px] flex-col items-center gap-8">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-red-600/10">
                <CheckCircle className="h-10 w-10 text-red-600" />
              </div>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Bienvenue chez MonacoShield!
              </h1>
              <p className="max-w-[500px] text-muted-foreground md:text-xl">
                Votre compte a été créé avec succès et votre abonnement est maintenant actif.
              </p>
            </div>

            <Card className="w-full">
              <CardHeader>
                <CardTitle>Prochaines étapes</CardTitle>
                <CardDescription>Voici quelques étapes pour commencer avec MonacoShield</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-red-600 text-white">
                    1
                  </div>
                  <div>
                    <h3 className="font-medium">Configurez votre tableau de bord</h3>
                    <p className="text-sm text-muted-foreground">
                      Personnalisez votre tableau de bord pour surveiller les métriques qui comptent pour vous.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-red-600 text-white">
                    2
                  </div>
                  <div>
                    <h3 className="font-medium">Créez votre premier dossier</h3>
                    <p className="text-sm text-muted-foreground">
                      Ajoutez un client, fournisseur ou partenaire et commencez à gérer vos procédures.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-red-600 text-white">
                    3
                  </div>
                  <div>
                    <h3 className="font-medium">Invitez votre équipe</h3>
                    <p className="text-sm text-muted-foreground">
                      Ajoutez des membres de votre équipe pour collaborer sur vos dossiers.
                    </p>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full bg-red-600 hover:bg-red-700">
                  <Link href="/dashboard">
                    <span className="flex items-center justify-center gap-2">
                      Accéder à votre tableau de bord
                      <ArrowRight className="h-4 w-4" />
                    </span>
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            <div className="text-center text-sm text-muted-foreground">
              Besoin d'aide?{" "}
              <Link href="/support" className="font-medium text-red-600 underline underline-offset-2">
                Contactez notre équipe de support
              </Link>
            </div>
          </div>
        </div>
      </main>

      <PublicFooter />
    </div>
  )
}
