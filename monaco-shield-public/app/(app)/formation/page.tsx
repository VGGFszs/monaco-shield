import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowUpRight, BookOpen, CheckCircle2, Clock, FileText, Play, Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Progress } from "@/components/ui/progress"

export default function FormationPage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Formation</h1>
          <p className="text-muted-foreground">
            Modules de formation sur la conformité LAB et la signature électronique
          </p>
        </div>
        <div className="relative w-full md:w-64">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input type="search" placeholder="Rechercher une formation..." className="pl-8" />
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card className="flex flex-col">
          <CardHeader>
            <div className="flex justify-between items-start">
              <CardTitle>Fondamentaux LAB</CardTitle>
              <Badge>Obligatoire</Badge>
            </div>
            <CardDescription>Les bases de la lutte anti-blanchiment</CardDescription>
          </CardHeader>
          <CardContent className="flex-1">
            <div className="aspect-video bg-gray-100 rounded-md flex items-center justify-center mb-4">
              <Play className="h-10 w-10 text-gray-400" />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Progression</span>
                <span>75%</span>
              </div>
              <Progress value={75} className="h-2" />
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full">Continuer</Button>
          </CardFooter>
        </Card>

        <Card className="flex flex-col">
          <CardHeader>
            <div className="flex justify-between items-start">
              <CardTitle>Vérification PPE</CardTitle>
              <Badge variant="outline">Recommandé</Badge>
            </div>
            <CardDescription>Comment identifier les personnes politiquement exposées</CardDescription>
          </CardHeader>
          <CardContent className="flex-1">
            <div className="aspect-video bg-gray-100 rounded-md flex items-center justify-center mb-4">
              <Play className="h-10 w-10 text-gray-400" />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Progression</span>
                <span>0%</span>
              </div>
              <Progress value={0} className="h-2" />
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full">Commencer</Button>
          </CardFooter>
        </Card>

        <Card className="flex flex-col">
          <CardHeader>
            <div className="flex justify-between items-start">
              <CardTitle>eSignature avancée</CardTitle>
              <Badge variant="outline">Optionnel</Badge>
            </div>
            <CardDescription>Maîtriser les fonctionnalités avancées de signature électronique</CardDescription>
          </CardHeader>
          <CardContent className="flex-1">
            <div className="aspect-video bg-gray-100 rounded-md flex items-center justify-center mb-4">
              <Play className="h-10 w-10 text-gray-400" />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Progression</span>
                <span>100%</span>
              </div>
              <Progress value={100} className="h-2" />
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full" variant="outline">
              Revoir
            </Button>
          </CardFooter>
        </Card>
      </div>

      <Tabs defaultValue="in-progress" className="space-y-4">
        <TabsList>
          <TabsTrigger value="in-progress">En cours</TabsTrigger>
          <TabsTrigger value="completed">Complétés</TabsTrigger>
          <TabsTrigger value="certificates">Certificats</TabsTrigger>
        </TabsList>
        <TabsContent value="in-progress" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Formations en cours</CardTitle>
              <CardDescription>Modules de formation que vous avez commencés</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-4 rounded-lg border p-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100">
                  <BookOpen className="h-5 w-5 text-blue-600" />
                </div>
                <div className="flex-1 space-y-1">
                  <p className="text-sm font-medium leading-none">Fondamentaux LAB</p>
                  <div className="flex items-center gap-2">
                    <Progress value={75} className="h-2 w-24" />
                    <span className="text-xs text-muted-foreground">75%</span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant="outline" className="bg-amber-100 text-amber-700">
                    En cours
                  </Badge>
                  <Button variant="outline" size="sm">
                    <Play className="mr-2 h-4 w-4" />
                    Continuer
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="completed" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Formations complétées</CardTitle>
              <CardDescription>Modules de formation que vous avez terminés</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-4 rounded-lg border p-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100">
                  <CheckCircle2 className="h-5 w-5 text-green-600" />
                </div>
                <div className="flex-1 space-y-1">
                  <p className="text-sm font-medium leading-none">eSignature avancée</p>
                  <p className="text-sm text-muted-foreground">Complété le 10/04/2025</p>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant="outline" className="bg-green-100 text-green-700">
                    Complété
                  </Badge>
                  <Button variant="ghost" size="icon">
                    <ArrowUpRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="certificates" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Certificats</CardTitle>
              <CardDescription>Vos certificats de formation</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-4 rounded-lg border p-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100">
                  <FileText className="h-5 w-5 text-blue-600" />
                </div>
                <div className="flex-1 space-y-1">
                  <p className="text-sm font-medium leading-none">Certificat eSignature avancée</p>
                  <p className="text-sm text-muted-foreground">Délivré le 10/04/2025</p>
                </div>
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm">
                    Télécharger
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <Card>
        <CardHeader>
          <CardTitle>Calendrier des formations</CardTitle>
          <CardDescription>Prochaines sessions de formation en direct</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center gap-4 rounded-lg border p-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-100">
              <Clock className="h-5 w-5 text-amber-600" />
            </div>
            <div className="flex-1 space-y-1">
              <p className="text-sm font-medium leading-none">Webinaire: Nouvelles réglementations LAB 2025</p>
              <p className="text-sm text-muted-foreground">30/04/2025 - 14:00</p>
            </div>
            <div className="flex items-center gap-2">
              <Button size="sm">S'inscrire</Button>
            </div>
          </div>

          <div className="flex items-center gap-4 rounded-lg border p-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-100">
              <Clock className="h-5 w-5 text-amber-600" />
            </div>
            <div className="flex-1 space-y-1">
              <p className="text-sm font-medium leading-none">Atelier pratique: Vérification PPE approfondie</p>
              <p className="text-sm text-muted-foreground">15/05/2025 - 10:00</p>
            </div>
            <div className="flex items-center gap-2">
              <Button size="sm">S'inscrire</Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
