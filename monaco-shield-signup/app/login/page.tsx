import Link from "next/link"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { PublicHeader } from "@/components/public/public-header"
import { PublicFooter } from "@/components/public/public-footer"
import LoginForm from "./login-form"

export default function LoginPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <PublicHeader />

      <main className="flex-1">
        <div className="container flex py-12 items-center justify-center">
          <div className="flex w-full max-w-[900px] flex-col items-center gap-8">
            <div className="flex flex-col items-center space-y-2 text-center">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Connexion</h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">Accédez à votre compte MonacoShield</p>
            </div>

            <Card className="w-full max-w-md">
              <CardHeader>
                <CardTitle>Se connecter</CardTitle>
                <CardDescription>Entrez vos identifiants pour accéder à votre compte</CardDescription>
              </CardHeader>
              <CardContent>
                <LoginForm />
              </CardContent>
              <CardFooter className="flex flex-col space-y-4">
                <div className="text-sm text-muted-foreground">
                  Vous n'avez pas encore de compte?{" "}
                  <Link href="/signup" className="font-medium text-red-600 underline underline-offset-2">
                    Créer un compte
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
