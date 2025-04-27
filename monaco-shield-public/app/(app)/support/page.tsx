import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { ArrowUpRight, BookOpen, FileQuestion, HelpCircle, MessageSquare, Search, Send } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Textarea } from "@/components/ui/textarea"

export default function SupportPage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Aide et support</h1>
          <p className="text-muted-foreground">Trouvez des réponses à vos questions et obtenez de l'aide</p>
        </div>
        <div className="relative w-full md:w-64">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input type="search" placeholder="Rechercher dans l'aide..." className="pl-8" />
        </div>
      </div>

      <Tabs defaultValue="faq" className="space-y-4">
        <TabsList>
          <TabsTrigger value="faq">FAQ</TabsTrigger>
          <TabsTrigger value="guides">Guides</TabsTrigger>
          <TabsTrigger value="tickets">Mes tickets</TabsTrigger>
          <TabsTrigger value="contact">Contacter le support</TabsTrigger>
        </TabsList>
        <TabsContent value="faq" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Questions fréquemment posées</CardTitle>
              <CardDescription>Trouvez rapidement des réponses aux questions les plus courantes</CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>Comment vérifier si une personne est politiquement exposée ?</AccordionTrigger>
                  <AccordionContent>
                    Pour vérifier si une personne est politiquement exposée, accédez à la section "Exposition
                    personnelle" dans le menu principal. Remplissez le formulaire avec les informations de la personne à
                    vérifier (nom, prénom, date de naissance, nationalité) et cliquez sur "Vérifier". Le système
                    interrogera automatiquement notre base de données et vous fournira un résultat instantané.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>Comment envoyer un document pour signature électronique ?</AccordionTrigger>
                  <AccordionContent>
                    Pour envoyer un document pour signature électronique, accédez à la section "Signatures" dans le menu
                    principal. Cliquez sur "Nouvelle signature", puis importez votre document. Vous pourrez ensuite
                    définir les zones de signature, ajouter les signataires et personnaliser le message d'invitation.
                    Une fois configuré, cliquez sur "Envoyer" pour initier le processus de signature.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>Comment créer une déclaration de soupçon ?</AccordionTrigger>
                  <AccordionContent>
                    Pour créer une déclaration de soupçon, accédez à la section "Déclarations" dans le menu principal.
                    Cliquez sur "Nouvelle déclaration", puis remplissez le formulaire avec les informations requises
                    concernant la transaction ou l'activité suspecte. Vous pouvez joindre des documents justificatifs si
                    nécessaire. Une fois complétée, la déclaration peut être soumise directement aux autorités
                    compétentes via la plateforme.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger>Comment ajouter un utilisateur à mon compte ?</AccordionTrigger>
                  <AccordionContent>
                    Pour ajouter un utilisateur à votre compte, accédez à la section "Paramètres" puis "Utilisateurs".
                    Cliquez sur "Ajouter un utilisateur" et renseignez l'adresse email de la personne à inviter ainsi
                    que son rôle dans l'organisation. Un email d'invitation sera automatiquement envoyé à l'utilisateur
                    avec les instructions pour créer son compte. Notez que le nombre d'utilisateurs dépend de votre
                    forfait actuel.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5">
                  <AccordionTrigger>Comment exporter mes données pour un audit ?</AccordionTrigger>
                  <AccordionContent>
                    Pour exporter vos données pour un audit, accédez à la section "Piste d'audit" dans le menu
                    principal. Utilisez les filtres pour sélectionner la période et les types d'actions qui vous
                    intéressent, puis cliquez sur "Exporter". Vous pouvez choisir le format d'exportation (PDF, Excel,
                    CSV) selon vos besoins. L'export inclura toutes les actions horodatées, conformément aux exigences
                    réglementaires.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="guides" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Guides et tutoriels</CardTitle>
              <CardDescription>Guides détaillés pour vous aider à utiliser MonacoShield</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-4 rounded-lg border p-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100">
                  <BookOpen className="h-5 w-5 text-blue-600" />
                </div>
                <div className="flex-1 space-y-1">
                  <p className="text-sm font-medium leading-none">Guide de démarrage rapide</p>
                  <p className="text-sm text-muted-foreground">Apprenez les bases de MonacoShield</p>
                </div>
                <div className="flex items-center gap-2">
                  <Button variant="ghost" size="icon">
                    <ArrowUpRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <div className="flex items-center gap-4 rounded-lg border p-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100">
                  <BookOpen className="h-5 w-5 text-blue-600" />
                </div>
                <div className="flex-1 space-y-1">
                  <p className="text-sm font-medium leading-none">Guide de vérification PPE</p>
                  <p className="text-sm text-muted-foreground">
                    Comment effectuer des vérifications d'exposition politique
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <Button variant="ghost" size="icon">
                    <ArrowUpRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <div className="flex items-center gap-4 rounded-lg border p-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100">
                  <BookOpen className="h-5 w-5 text-blue-600" />
                </div>
                <div className="flex-1 space-y-1">
                  <p className="text-sm font-medium leading-none">Guide de signature électronique</p>
                  <p className="text-sm text-muted-foreground">
                    Comment utiliser les fonctionnalités de signature électronique
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <Button variant="ghost" size="icon">
                    <ArrowUpRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <div className="flex items-center gap-4 rounded-lg border p-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100">
                  <BookOpen className="h-5 w-5 text-blue-600" />
                </div>
                <div className="flex-1 space-y-1">
                  <p className="text-sm font-medium leading-none">Guide des déclarations de soupçon</p>
                  <p className="text-sm text-muted-foreground">
                    Comment créer et soumettre des déclarations de soupçon
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <Button variant="ghost" size="icon">
                    <ArrowUpRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="tickets" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Mes tickets de support</CardTitle>
              <CardDescription>Suivez l'état de vos demandes de support</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-4 rounded-lg border p-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-100">
                  <FileQuestion className="h-5 w-5 text-amber-600" />
                </div>
                <div className="flex-1 space-y-1">
                  <p className="text-sm font-medium leading-none">Ticket #1234 - Problème de signature électronique</p>
                  <p className="text-sm text-muted-foreground">Ouvert le 20/04/2025</p>
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

              <div className="flex items-center gap-4 rounded-lg border p-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100">
                  <FileQuestion className="h-5 w-5 text-green-600" />
                </div>
                <div className="flex-1 space-y-1">
                  <p className="text-sm font-medium leading-none">
                    Ticket #1122 - Question sur l'exportation de données
                  </p>
                  <p className="text-sm text-muted-foreground">Ouvert le 15/04/2025</p>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant="outline" className="bg-green-100 text-green-700">
                    Résolu
                  </Badge>
                  <Button variant="ghost" size="icon">
                    <ArrowUpRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="contact" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Contacter le support</CardTitle>
              <CardDescription>Envoyez un message à notre équipe de support</CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Sujet</label>
                  <Input placeholder="Sujet de votre demande" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Catégorie</label>
                  <select className="w-full rounded-md border border-input bg-background px-3 py-2">
                    <option value="">Sélectionnez une catégorie</option>
                    <option value="technical">Problème technique</option>
                    <option value="billing">Facturation</option>
                    <option value="account">Gestion de compte</option>
                    <option value="feature">Demande de fonctionnalité</option>
                    <option value="other">Autre</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Message</label>
                  <Textarea
                    placeholder="Décrivez votre problème ou votre question en détail..."
                    className="min-h-[150px]"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Pièces jointes (optionnel)</label>
                  <Input type="file" />
                </div>
                <Button type="submit" className="w-full">
                  <Send className="mr-2 h-4 w-4" />
                  Envoyer
                </Button>
              </form>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Autres moyens de contact</CardTitle>
              <CardDescription>Contactez-nous par téléphone ou par email</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-4 rounded-lg border p-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100">
                  <MessageSquare className="h-5 w-5 text-blue-600" />
                </div>
                <div className="flex-1 space-y-1">
                  <p className="text-sm font-medium leading-none">Chat en direct</p>
                  <p className="text-sm text-muted-foreground">Disponible du lundi au vendredi, de 9h à 18h</p>
                </div>
                <div className="flex items-center gap-2">
                  <Button size="sm">
                    <MessageSquare className="mr-2 h-4 w-4" />
                    Démarrer un chat
                  </Button>
                </div>
              </div>

              <div className="flex items-center gap-4 rounded-lg border p-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100">
                  <HelpCircle className="h-5 w-5 text-blue-600" />
                </div>
                <div className="flex-1 space-y-1">
                  <p className="text-sm font-medium leading-none">Support téléphonique</p>
                  <p className="text-sm text-muted-foreground">+377 12 34 56 78</p>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant="outline">Lun-Ven, 9h-18h</Badge>
                </div>
              </div>

              <div className="flex items-center gap-4 rounded-lg border p-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100">
                  <MessageSquare className="h-5 w-5 text-blue-600" />
                </div>
                <div className="flex-1 space-y-1">
                  <p className="text-sm font-medium leading-none">Email</p>
                  <p className="text-sm text-muted-foreground">support@monacoshield.com</p>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant="outline">Réponse sous 24h</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
