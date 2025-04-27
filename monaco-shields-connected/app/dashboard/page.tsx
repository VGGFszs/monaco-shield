import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { StatCard } from "@/components/stat-card"
import { DashboardChart } from "@/components/dashboard-chart"
import { RecentActivity } from "@/components/recent-activity"
import { ThresholdNotification } from "@/components/threshold-notification"
import Image from "next/image"

export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Tableau de bord</h1>
        <div className="flex items-center gap-2">
          <ThresholdNotification />
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatCard title="Dossiers actifs" value="24" description="+4 ce mois-ci" trend="up" trendValue="20%" />
        <StatCard
          title="Vérifications d'exposition"
          value="42"
          description="12 en attente"
          trend="up"
          trendValue="15%"
        />
        <StatCard
          title="Déclarations de soupçon"
          value="3"
          description="1 en cours de validation"
          trend="down"
          trendValue="5%"
        />
        <StatCard
          title="Documents signés"
          value="18"
          description="5 en attente de signature"
          trend="up"
          trendValue="10%"
        />
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Activité mensuelle</CardTitle>
            <CardDescription>Nombre de dossiers traités par mois</CardDescription>
          </CardHeader>
          <CardContent>
            <DashboardChart />
          </CardContent>
        </Card>
        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>Activité récente</CardTitle>
            <CardDescription>Dernières actions effectuées</CardDescription>
          </CardHeader>
          <CardContent>
            <RecentActivity />
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card className="col-span-2">
          <CardHeader>
            <CardTitle>Modules disponibles</CardTitle>
            <CardDescription>Accès rapide aux fonctionnalités</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="exposure" className="w-full">
              <TabsList className="grid w-full grid-cols-5">
                <TabsTrigger value="exposure">Exposition</TabsTrigger>
                <TabsTrigger value="suspicion">Soupçon</TabsTrigger>
                <TabsTrigger value="training">Formation</TabsTrigger>
                <TabsTrigger value="signature">Signature</TabsTrigger>
                <TabsTrigger value="beneficiary">Bénéficiaire</TabsTrigger>
              </TabsList>
              <TabsContent value="exposure" className="p-4">
                <div className="flex items-center gap-4">
                  <div className="relative h-16 w-16 shrink-0">
                    <Image
                      src="/images/monaco-shield-logo.png"
                      alt="Monaco Shields Logo"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">Contrôle d'exposition</h3>
                    <p className="text-sm text-muted-foreground">
                      Vérifiez si une personne physique est inscrite dans la base OpenSanctions.
                    </p>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="suspicion" className="p-4">
                <div className="flex items-center gap-4">
                  <div className="relative h-16 w-16 shrink-0">
                    <Image
                      src="/images/monaco-shield-logo.png"
                      alt="Monaco Shields Logo"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">Déclaration de soupçon</h3>
                    <p className="text-sm text-muted-foreground">Soumettez des déclarations de soupçon à l'AMSF.</p>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="training" className="p-4">
                <div className="flex items-center gap-4">
                  <div className="relative h-16 w-16 shrink-0">
                    <Image
                      src="/images/monaco-shield-logo.png"
                      alt="Monaco Shields Logo"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">Formation</h3>
                    <p className="text-sm text-muted-foreground">
                      Accédez aux vidéos de formation sur les règles LAB en vigueur à Monaco.
                    </p>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="signature" className="p-4">
                <div className="flex items-center gap-4">
                  <div className="relative h-16 w-16 shrink-0">
                    <Image
                      src="/images/monaco-shield-logo.png"
                      alt="Monaco Shields Logo"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">Signature électronique</h3>
                    <p className="text-sm text-muted-foreground">
                      Envoyez des documents à signer électroniquement via eContrat.
                    </p>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="beneficiary" className="p-4">
                <div className="flex items-center gap-4">
                  <div className="relative h-16 w-16 shrink-0">
                    <Image
                      src="/images/monaco-shield-logo.png"
                      alt="Monaco Shields Logo"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">Bénéficiaire effectif</h3>
                    <p className="text-sm text-muted-foreground">
                      Identifiez les bénéficiaires effectifs d'une personne morale.
                    </p>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Votre abonnement</CardTitle>
            <CardDescription>Plan Business</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-sm">Dossiers utilisés</span>
                <span className="font-medium">24 / 50</span>
              </div>
              <div className="h-2 w-full rounded-full bg-muted">
                <div className="h-2 w-[48%] rounded-full bg-primary"></div>
              </div>
              <div className="flex justify-between">
                <span className="text-sm">Signatures utilisées</span>
                <span className="font-medium">18 / 100</span>
              </div>
              <div className="h-2 w-full rounded-full bg-muted">
                <div className="h-2 w-[18%] rounded-full bg-primary"></div>
              </div>
              <div className="flex justify-between">
                <span className="text-sm">Utilisateurs</span>
                <span className="font-medium">5 / 10</span>
              </div>
              <div className="h-2 w-full rounded-full bg-muted">
                <div className="h-2 w-[50%] rounded-full bg-primary"></div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
