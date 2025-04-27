import Link from "next/link"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { PublicHeader } from "@/components/public/public-header"
import { PublicFooter } from "@/components/public/public-footer"
import SignupForm from "./signup-form"

export default function SignupPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <PublicHeader />

      <main className="flex-1">
        <div className="container flex py-12 items-center justify-center">
          <div className="flex w-full max-w-[900px] flex-col items-center gap-8">
            <div className="flex flex-col items-center space-y-2 text-center">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Rejoignez MonacoShield</h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Créez votre compte et commencez à sécuriser vos actifs dès aujourd'hui.
              </p>
            </div>

            <Card className="w-full max-w-md">
              <CardHeader>
                <CardTitle>Créer un compte</CardTitle>
                <CardDescription>Entrez vos informations pour créer votre compte MonacoShield</CardDescription>
              </CardHeader>
              <CardContent>
                <SignupForm />
              </CardContent>
              <CardFooter className="flex flex-col space-y-4">
                <div className="text-sm text-muted-foreground">
                  En créant un compte, vous acceptez nos{" "}
                  <Link href="/terms" className="underline underline-offset-2">
                    Conditions d'utilisation
                  </Link>{" "}
                  et notre{" "}
                  <Link href="/privacy" className="underline underline-offset-2">
                    Politique de confidentialité
                  </Link>
                  .
                </div>
                <div className="text-sm text-muted-foreground">
                  Vous avez déjà un compte?{" "}
                  <Link href="/login" className="font-medium text-red-600 underline underline-offset-2">
                    Connectez-vous
                  </Link>
                </div>
              </CardFooter>
            </Card>
          </div>
        </div>
      </main>

      <PublicFooter />
    </div>
  )
}
