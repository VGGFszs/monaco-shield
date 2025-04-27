import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { PublicHeader } from "@/components/public/public-header"
import { PublicFooter } from "@/components/public/public-footer"
import PaymentForm from "./payment-form"

export default function PaymentPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <PublicHeader />

      <main className="flex-1">
        <div className="container flex min-h-[calc(100vh-64px-200px)] flex-col items-center justify-center py-12">
          <div className="flex w-full max-w-[900px] flex-col items-center gap-8">
            <div className="flex flex-col items-center space-y-2 text-center">
              <div className="flex items-center justify-center rounded-full bg-red-600/10 p-2 text-red-600">
                <span className="text-sm font-medium">Étape 3 sur 3</span>
              </div>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Finaliser votre abonnement
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Entrez vos informations de paiement pour activer votre compte MonacoShield.
              </p>
            </div>

            <div className="grid w-full gap-8 md:grid-cols-5">
              <Card className="md:col-span-3">
                <CardHeader>
                  <CardTitle>Informations de paiement</CardTitle>
                  <CardDescription>Vos informations sont sécurisées et cryptées</CardDescription>
                </CardHeader>
                <CardContent>
                  <PaymentForm />
                </CardContent>
              </Card>

              <div className="md:col-span-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Récapitulatif de commande</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex justify-between">
                      <span>Plan Intermédiaire (Annuel)</span>
                      <span>960€</span>
                    </div>
                    <div className="flex justify-between text-muted-foreground">
                      <span>TVA (20%)</span>
                      <span>192€</span>
                    </div>
                    <div className="border-t pt-4">
                      <div className="flex justify-between font-medium">
                        <span>Total aujourd'hui</span>
                        <span>1152€</span>
                      </div>
                      <p className="mt-1 text-sm text-muted-foreground">
                        Votre abonnement sera renouvelé automatiquement le 24/04/2026
                      </p>
                    </div>

                    <div className="rounded-lg bg-muted p-4 text-sm">
                      <p className="font-medium">Garantie satisfait ou remboursé de 30 jours</p>
                      <p className="mt-1 text-muted-foreground">
                        Si vous n'êtes pas satisfait, contactez-nous dans les 30 jours pour un remboursement complet.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </main>

      <PublicFooter />
    </div>
  )
}
