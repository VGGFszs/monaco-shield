import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { AlertCircle, ArrowUpRight, CheckCircle2, FileWarning, Plus, Send } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function DeclarationsPage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Déclarations de soupçon</h1>
          <p className="text-muted-foreground">Reporting des activités suspectes auprès de l'AMSF</p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Nouvelle déclaration
        </Button>
      </div>

      <Tabs defaultValue="pending" className="space-y-4">
        <TabsList>
          <TabsTrigger value="pending">À traiter</TabsTrigger>
          <TabsTrigger value="submitted">Soumises</TabsTrigger>
          <TabsTrigger value="archived">Archivées</TabsTrigger>
        </TabsList>
        <TabsContent value="pending" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Déclarations à traiter</CardTitle>
              <CardDescription>Déclarations nécessitant votre attention</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-4 rounded-lg border p-4 bg-red-50">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-100">
                  <AlertCircle className="h-5 w-5 text-red-600" />
                </div>
                <div className="flex-1 space-y-1">
                  <p className="text-sm font-medium leading-none">Transaction suspecte - Client #1234</p>
                  <p className="text-sm text-muted-foreground">Montant inhabituel détecté</p>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant="destructive">Urgent</Badge>
                  <Button variant="outline" size="sm">
                    <FileWarning className="mr-2 h-4 w-4" />
                    Examiner
                  </Button>
                </div>
              </div>

              <div className="flex items-center gap-4 rounded-lg border p-4 bg-amber-50">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-100">
                  <FileWarning className="h-5 w-5 text-amber-600" />
                </div>
                <div className="flex-1 space-y-1">
                  <p className="text-sm font-medium leading-none">Activité inhabituelle - Client #5678</p>
                  <p className="text-sm text-muted-foreground">Schéma de transactions suspect</p>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant="outline" className="bg-amber-100 text-amber-700">
                    Moyen
                  </Badge>
                  <Button variant="outline" size="sm">
                    <FileWarning className="mr-2 h-4 w-4" />
                    Examiner
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="submitted" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Déclarations soumises</CardTitle>
              <CardDescription>Déclarations envoyées à l'AMSF</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-4 rounded-lg border p-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100">
                  <Send className="h-5 w-5 text-blue-600" />
                </div>
                <div className="flex-1 space-y-1">
                  <p className="text-sm font-medium leading-none">Déclaration #DS-2025-001</p>
                  <p className="text-sm text-muted-foreground">Soumise le 15/04/2025</p>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant="outline" className="bg-blue-100 text-blue-700">
                    En traitement
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
                  <p className="text-sm font-medium leading-none">Déclaration #DS-2025-002</p>
                  <p className="text-sm text-muted-foreground">Soumise le 10/04/2025</p>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant="outline" className="bg-blue-100 text-blue-700">
                    En traitement
                  </Badge>
                  <Button variant="ghost" size="icon">
                    <ArrowUpRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="archived" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Déclarations archivées</CardTitle>
              <CardDescription>Déclarations traitées et archivées</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-4 rounded-lg border p-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100">
                  <CheckCircle2 className="h-5 w-5 text-green-600" />
                </div>
                <div className="flex-1 space-y-1">
                  <p className="text-sm font-medium leading-none">Déclaration #DS-2025-003</p>
                  <p className="text-sm text-muted-foreground">Traitée le 05/04/2025</p>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant="outline" className="bg-green-100 text-green-700">
                    Complétée
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
