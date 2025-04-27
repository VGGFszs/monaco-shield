import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { AlertCircle, ArrowUpRight, CheckCircle2, FileSearch, Plus, Search, XCircle } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export default function ExpositionPage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">Exposition personnelle</h1>
        <p className="text-muted-foreground">Vérification automatique auprès des principales bases internationales</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Nouvelle vérification</CardTitle>
          <CardDescription>Vérifiez l'exposition politique ou médiatique d'une personne</CardDescription>
        </CardHeader>
        <CardContent>
          <form className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="firstName">Prénom</Label>
                <Input id="firstName" placeholder="Prénom" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Nom</Label>
                <Input id="lastName" placeholder="Nom" />
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="birthDate">Date de naissance</Label>
                <Input id="birthDate" type="date" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="nationality">Nationalité</Label>
                <Input id="nationality" placeholder="Nationalité" />
              </div>
            </div>

            <Button type="submit" className="w-full md:w-auto">
              <Search className="mr-2 h-4 w-4" />
              Vérifier
            </Button>
          </form>
        </CardContent>
      </Card>

      <Tabs defaultValue="recent" className="space-y-4">
        <TabsList>
          <TabsTrigger value="recent">Vérifications récentes</TabsTrigger>
          <TabsTrigger value="alerts">Alertes</TabsTrigger>
        </TabsList>
        <TabsContent value="recent" className="space-y-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>Vérifications récentes</CardTitle>
                <CardDescription>Historique de vos dernières vérifications</CardDescription>
              </div>
              <Button size="sm">
                <Plus className="mr-2 h-4 w-4" />
                Nouvelle vérification
              </Button>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-4 rounded-lg border p-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100">
                  <CheckCircle2 className="h-5 w-5 text-green-600" />
                </div>
                <div className="flex-1 space-y-1">
                  <p className="text-sm font-medium leading-none">Jean Dupont</p>
                  <p className="text-sm text-muted-foreground">Aucune exposition détectée</p>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant="outline" className="bg-green-100 text-green-700">
                    Validé
                  </Badge>
                  <Button variant="ghost" size="icon">
                    <ArrowUpRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <div className="flex items-center gap-4 rounded-lg border p-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-100">
                  <AlertCircle className="h-5 w-5 text-red-600" />
                </div>
                <div className="flex-1 space-y-1">
                  <p className="text-sm font-medium leading-none">Marie Martin</p>
                  <p className="text-sm text-muted-foreground">Personne politiquement exposée détectée</p>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant="destructive">Alerte</Badge>
                  <Button variant="ghost" size="icon">
                    <ArrowUpRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <div className="flex items-center gap-4 rounded-lg border p-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-100">
                  <FileSearch className="h-5 w-5 text-amber-600" />
                </div>
                <div className="flex-1 space-y-1">
                  <p className="text-sm font-medium leading-none">Pierre Durand</p>
                  <p className="text-sm text-muted-foreground">Vérification en cours...</p>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant="outline" className="bg-amber-100 text-amber-700">
                    En cours
                  </Badge>
                  <Button variant="ghost" size="icon">
                    <ArrowUpRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="alerts" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Alertes d'exposition</CardTitle>
              <CardDescription>Personnes avec des alertes d'exposition politique ou médiatique</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-4 rounded-lg border p-4 bg-red-50">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-100">
                  <XCircle className="h-5 w-5 text-red-600" />
                </div>
                <div className="flex-1 space-y-1">
                  <p className="text-sm font-medium leading-none">Marie Martin</p>
                  <p className="text-sm text-muted-foreground">
                    Personne politiquement exposée - Ministre des Finances
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant="destructive">Critique</Badge>
                  <Button variant="ghost" size="icon">
                    <ArrowUpRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <div className="flex items-center gap-4 rounded-lg border p-4 bg-amber-50">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-100">
                  <AlertCircle className="h-5 w-5 text-amber-600" />
                </div>
                <div className="flex-1 space-y-1">
                  <p className="text-sm font-medium leading-none">Sophie Bernard</p>
                  <p className="text-sm text-muted-foreground">Exposition médiatique - Affaire judiciaire en cours</p>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant="outline" className="bg-amber-100 text-amber-700">
                    Moyen
                  </Badge>
                  <Button variant="ghost" size="icon">
                    <ArrowUpRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
