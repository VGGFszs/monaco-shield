import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { ArrowUpRight, CheckCircle2, Clock, Download, FileSignature, Plus, Send, Upload } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"

export default function SignaturesPage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Signatures électroniques</h1>
          <p className="text-muted-foreground">Consentir en ligne et horodater des documents</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-2">
          <Button>
            <Upload className="mr-2 h-4 w-4" />
            Importer un document
          </Button>
          <Button variant="outline">
            <Plus className="mr-2 h-4 w-4" />
            Nouvelle signature
          </Button>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Utilisation des signatures</CardTitle>
          <CardDescription>Votre utilisation mensuelle de signatures électroniques</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium">Signatures utilisées</p>
                <p className="text-2xl font-bold">8/10</p>
              </div>
              <div className="text-right">
                <p className="text-sm font-medium">Plan actuel</p>
                <p className="text-sm font-medium">Basique</p>
              </div>
            </div>
            <Progress value={80} className="h-2" />
            <div className="flex justify-between text-xs text-muted-foreground">
              <p>0</p>
              <p>5</p>
              <p>10</p>
            </div>
            <div className="flex justify-end">
              <Button variant="link" className="h-auto p-0">
                Augmenter mon forfait
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="pending" className="space-y-4">
        <TabsList>
          <TabsTrigger value="pending">En attente</TabsTrigger>
          <TabsTrigger value="completed">Complétées</TabsTrigger>
          <TabsTrigger value="drafts">Brouillons</TabsTrigger>
        </TabsList>
        <TabsContent value="pending" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Signatures en attente</CardTitle>
              <CardDescription>Documents nécessitant une signature</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-4 rounded-lg border p-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-100">
                  <Clock className="h-5 w-5 text-amber-600" />
                </div>
                <div className="flex-1 space-y-1">
                  <p className="text-sm font-medium leading-none">Contrat de service - Client A</p>
                  <p className="text-sm text-muted-foreground">En attente de votre signature</p>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant="outline" className="bg-amber-100 text-amber-700">
                    Action requise
                  </Badge>
                  <Button variant="outline" size="sm">
                    <FileSignature className="mr-2 h-4 w-4" />
                    Signer
                  </Button>
                </div>
              </div>

              <div className="flex items-center gap-4 rounded-lg border p-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100">
                  <Send className="h-5 w-5 text-blue-600" />
                </div>
                <div className="flex-1 space-y-1">
                  <p className="text-sm font-medium leading-none">Accord de confidentialité - Fournisseur B</p>
                  <p className="text-sm text-muted-foreground">Envoyé pour signature (1/3)</p>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant="outline" className="bg-blue-100 text-blue-700">
                    En cours
                  </Badge>
                  <Button variant="ghost" size="icon">
                    <ArrowUpRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <div className="flex items-center gap-4 rounded-lg border p-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100">
                  <Send className="h-5 w-5 text-blue-600" />
                </div>
                <div className="flex-1 space-y-1">
                  <p className="text-sm font-medium leading-none">Déclaration de conformité - Partenaire C</p>
                  <p className="text-sm text-muted-foreground">Envoyé pour signature (2/2)</p>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant="outline" className="bg-blue-100 text-blue-700">
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
        <TabsContent value="completed" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Signatures complétées</CardTitle>
              <CardDescription>Documents signés par toutes les parties</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-4 rounded-lg border p-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100">
                  <CheckCircle2 className="h-5 w-5 text-green-600" />
                </div>
                <div className="flex-1 space-y-1">
                  <p className="text-sm font-medium leading-none">Contrat de prestation - Client D</p>
                  <p className="text-sm text-muted-foreground">Signé le 15/04/2025</p>
                </div>
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm">
                    <Download className="mr-2 h-4 w-4" />
                    Télécharger
                  </Button>
                </div>
              </div>

              <div className="flex items-center gap-4 rounded-lg border p-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100">
                  <CheckCircle2 className="h-5 w-5 text-green-600" />
                </div>
                <div className="flex-1 space-y-1">
                  <p className="text-sm font-medium leading-none">Accord de partenariat - Partenaire E</p>
                  <p className="text-sm text-muted-foreground">Signé le 10/04/2025</p>
                </div>
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm">
                    <Download className="mr-2 h-4 w-4" />
                    Télécharger
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="drafts" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Brouillons</CardTitle>
              <CardDescription>Documents en préparation</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-4 rounded-lg border p-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100">
                  <FileSignature className="h-5 w-5 text-gray-600" />
                </div>
                <div className="flex-1 space-y-1">
                  <p className="text-sm font-medium leading-none">Contrat de service - Nouveau client</p>
                  <p className="text-sm text-muted-foreground">Créé le 20/04/2025</p>
                </div>
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm">
                    <Send className="mr-2 h-4 w-4" />
                    Envoyer
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
