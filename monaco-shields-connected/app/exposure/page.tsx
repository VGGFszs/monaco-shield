import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { PersonSearch } from "@/components/person-search"
import Image from "next/image"

export default function ExposurePage() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Contrôle d'exposition des personnes physiques</h1>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center gap-4">
            <div className="relative h-12 w-12 shrink-0">
              <Image src="/images/monaco-shield-logo.png" alt="Monaco Shields Logo" fill className="object-contain" />
            </div>
            <div>
              <CardTitle>Vérification d'exposition</CardTitle>
              <CardDescription>
                Vérifiez si une personne physique est inscrite dans la base OpenSanctions
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="search" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="search">Nouvelle recherche</TabsTrigger>
              <TabsTrigger value="history">Historique des recherches</TabsTrigger>
            </TabsList>
            <TabsContent value="search" className="p-4">
              <PersonSearch />
            </TabsContent>
            <TabsContent value="history" className="p-4">
              <div className="rounded-md border">
                <div className="relative w-full overflow-auto">
                  <table className="w-full caption-bottom text-sm">
                    <thead>
                      <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                        <th className="h-12 px-4 text-left align-middle font-medium">Nom</th>
                        <th className="h-12 px-4 text-left align-middle font-medium">Date de vérification</th>
                        <th className="h-12 px-4 text-left align-middle font-medium">Résultat</th>
                        <th className="h-12 px-4 text-left align-middle font-medium">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                        <td className="p-4 align-middle">Jean Dupont</td>
                        <td className="p-4 align-middle">15/04/2023</td>
                        <td className="p-4 align-middle">
                          <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800 dark:bg-green-900 dark:text-green-100">
                            Aucune exposition
                          </span>
                        </td>
                        <td className="p-4 align-middle">
                          <div className="flex gap-2">
                            <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 px-3">
                              Voir
                            </button>
                            <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 px-3">
                              Télécharger
                            </button>
                          </div>
                        </td>
                      </tr>
                      <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                        <td className="p-4 align-middle">Marie Martin</td>
                        <td className="p-4 align-middle">22/03/2023</td>
                        <td className="p-4 align-middle">
                          <span className="inline-flex items-center rounded-full bg-amber-100 px-2.5 py-0.5 text-xs font-medium text-amber-800 dark:bg-amber-900 dark:text-amber-100">
                            Exposition faible
                          </span>
                        </td>
                        <td className="p-4 align-middle">
                          <div className="flex gap-2">
                            <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 px-3">
                              Voir
                            </button>
                            <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 px-3">
                              Télécharger
                            </button>
                          </div>
                        </td>
                      </tr>
                      <tr className="transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                        <td className="p-4 align-middle">Pierre Durand</td>
                        <td className="p-4 align-middle">10/02/2023</td>
                        <td className="p-4 align-middle">
                          <span className="inline-flex items-center rounded-full bg-red-100 px-2.5 py-0.5 text-xs font-medium text-red-800 dark:bg-red-900 dark:text-red-100">
                            Exposition élevée
                          </span>
                        </td>
                        <td className="p-4 align-middle">
                          <div className="flex gap-2">
                            <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 px-3">
                              Voir
                            </button>
                            <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 px-3">
                              Télécharger
                            </button>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Bases de données consultées</CardTitle>
          <CardDescription>
            Les vérifications d'exposition sont effectuées sur les bases de données suivantes
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
            <div className="flex flex-col items-center gap-2 rounded-lg border p-4">
              <div className="h-12 w-12">
                <img
                  src="/placeholder.svg?height=48&width=48&query=UN"
                  alt="Nations Unies"
                  className="h-full w-full object-contain"
                />
              </div>
              <span className="text-sm font-medium">Nations Unies</span>
            </div>
            <div className="flex flex-col items-center gap-2 rounded-lg border p-4">
              <div className="h-12 w-12">
                <img
                  src="/placeholder.svg?height=48&width=48&query=EU"
                  alt="Union Européenne"
                  className="h-full w-full object-contain"
                />
              </div>
              <span className="text-sm font-medium">Union Européenne</span>
            </div>
            <div className="flex flex-col items-center gap-2 rounded-lg border p-4">
              <div className="h-12 w-12">
                <img
                  src="/placeholder.svg?height=48&width=48&query=OFAC"
                  alt="OFAC"
                  className="h-full w-full object-contain"
                />
              </div>
              <span className="text-sm font-medium">OFAC</span>
            </div>
            <div className="flex flex-col items-center gap-2 rounded-lg border p-4">
              <div className="h-12 w-12">
                <img
                  src="/placeholder.svg?height=48&width=48&query=UK"
                  alt="Royaume-Uni"
                  className="h-full w-full object-contain"
                />
              </div>
              <span className="text-sm font-medium">Royaume-Uni</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
