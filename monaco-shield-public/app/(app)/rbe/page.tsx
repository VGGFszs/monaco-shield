import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { ArrowUpRight, FileText, Filter, Plus, Search, Users } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function RbePage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Registre des Bénéficiaires Effectifs</h1>
          <p className="text-muted-foreground">Gérez et visualisez les structures de propriété</p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Nouvelle structure
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Recherche de bénéficiaires</CardTitle>
          <CardDescription>Recherchez des bénéficiaires effectifs par nom ou entité</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input type="search" placeholder="Rechercher un bénéficiaire ou une entité..." className="pl-8" />
            </div>
            <Select defaultValue="all">
              <SelectTrigger className="w-full sm:w-[180px]">
                <SelectValue placeholder="Type d'entité" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Tous les types</SelectItem>
                <SelectItem value="company">Société</SelectItem>
                <SelectItem value="trust">Trust</SelectItem>
                <SelectItem value="foundation">Fondation</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline">
              <Filter className="mr-2 h-4 w-4" />
              Filtres avancés
            </Button>
            <Button type="submit">
              <Search className="mr-2 h-4 w-4" />
              Rechercher
            </Button>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="entities" className="space-y-4">
        <TabsList>
          <TabsTrigger value="entities">Entités</TabsTrigger>
          <TabsTrigger value="beneficiaries">Bénéficiaires</TabsTrigger>
          <TabsTrigger value="structures">Structures</TabsTrigger>
        </TabsList>
        <TabsContent value="entities" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Entités enregistrées</CardTitle>
              <CardDescription>Liste des entités avec leurs bénéficiaires effectifs</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-4 rounded-lg border p-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100">
                  <FileText className="h-5 w-5 text-blue-600" />
                </div>
                <div className="flex-1 space-y-1">
                  <p className="text-sm font-medium leading-none">Société ABC SARL</p>
                  <p className="text-sm text-muted-foreground">3 bénéficiaires effectifs</p>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant="outline" className="bg-green-100 text-green-700">
                    À jour
                  </Badge>
                  <Button variant="ghost" size="icon">
                    <ArrowUpRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <div className="flex items-center gap-4 rounded-lg border p-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100">
                  <FileText className="h-5 w-5 text-blue-600" />
                </div>
                <div className="flex-1 space-y-1">
                  <p className="text-sm font-medium leading-none">XYZ Holding SA</p>
                  <p className="text-sm text-muted-foreground">5 bénéficiaires effectifs</p>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant="outline" className="bg-amber-100 text-amber-700">
                    Mise à jour requise
                  </Badge>
                  <Button variant="ghost" size="icon">
                    <ArrowUpRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <div className="flex items-center gap-4 rounded-lg border p-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100">
                  <FileText className="h-5 w-5 text-blue-600" />
                </div>
                <div className="flex-1 space-y-1">
                  <p className="text-sm font-medium leading-none">Fondation DEF</p>
                  <p className="text-sm text-muted-foreground">2 bénéficiaires effectifs</p>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant="outline" className="bg-green-100 text-green-700">
                    À jour
                  </Badge>
                  <Button variant="ghost" size="icon">
                    <ArrowUpRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="beneficiaries" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Bénéficiaires effectifs</CardTitle>
              <CardDescription>Liste des personnes physiques bénéficiaires effectifs</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-4 rounded-lg border p-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100">
                  <Users className="h-5 w-5 text-blue-600" />
                </div>
                <div className="flex-1 space-y-1">
                  <p className="text-sm font-medium leading-none">Jean Dupont</p>
                  <p className="text-sm text-muted-foreground">Bénéficiaire de 2 entités</p>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant="outline">Vérification PPE: Négatif</Badge>
                  <Button variant="ghost" size="icon">
                    <ArrowUpRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <div className="flex items-center gap-4 rounded-lg border p-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100">
                  <Users className="h-5 w-5 text-blue-600" />
                </div>
                <div className="flex-1 space-y-1">
                  <p className="text-sm font-medium leading-none">Marie Martin</p>
                  <p className="text-sm text-muted-foreground">Bénéficiaire de 3 entités</p>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant="destructive">Vérification PPE: Positif</Badge>
                  <Button variant="ghost" size="icon">
                    <ArrowUpRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <div className="flex items-center gap-4 rounded-lg border p-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100">
                  <Users className="h-5 w-5 text-blue-600" />
                </div>
                <div className="flex-1 space-y-1">
                  <p className="text-sm font-medium leading-none">Pierre Durand</p>
                  <p className="text-sm text-muted-foreground">Bénéficiaire de 1 entité</p>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant="outline">Vérification PPE: Négatif</Badge>
                  <Button variant="ghost" size="icon">
                    <ArrowUpRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="structures" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Structures de propriété</CardTitle>
              <CardDescription>Visualisez les structures de propriété complexes</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex justify-center">
                <div className="h-[400px] w-full bg-gray-100 rounded-lg flex items-center justify-center">
                  <p className="text-gray-500">Diagramme de structure de propriété</p>
                </div>
              </div>
              <div className="mt-4 flex justify-end">
                <Button variant="outline">Exporter le diagramme</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
