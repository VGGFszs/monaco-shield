"use client"

import { useState } from "react"
import { useLanguage } from "@/components/language-provider"
import { BookOpen, Calendar, Check, Clock, FileText, GraduationCap, Play, Search, User } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"

// Données fictives pour les formations
const trainings = [
  {
    id: "1",
    title: "Règles LAB en vigueur à Monaco",
    description: "Formation complète sur les règles de lutte anti-blanchiment en vigueur à Monaco",
    duration: "45 min",
    level: "Débutant",
    category: "LAB",
    thumbnail: "/placeholder.svg?height=200&width=350&query=anti-money laundering training",
    progress: 100,
    completed: true,
    completedDate: "15/04/2023",
  },
  {
    id: "2",
    title: "Signature électronique à Monaco",
    description: "Tout savoir sur la signature électronique et son cadre légal à Monaco",
    duration: "30 min",
    level: "Intermédiaire",
    category: "Signature",
    thumbnail: "/placeholder.svg?height=200&width=350&query=electronic signature training",
    progress: 60,
    completed: false,
    completedDate: null,
  },
  {
    id: "3",
    title: "Fonctionnement du RBE à Monaco",
    description: "Comprendre le Registre des Bénéficiaires Effectifs à Monaco",
    duration: "25 min",
    level: "Débutant",
    category: "RBE",
    thumbnail: "/placeholder.svg?height=200&width=350&query=beneficial ownership register training",
    progress: 0,
    completed: false,
    completedDate: null,
  },
  {
    id: "4",
    title: "Déclarations de soupçon à l'AMSF",
    description: "Guide pratique pour effectuer des déclarations de soupçon à l'AMSF",
    duration: "35 min",
    level: "Avancé",
    category: "LAB",
    thumbnail: "/placeholder.svg?height=200&width=350&query=suspicious transaction reporting training",
    progress: 0,
    completed: false,
    completedDate: null,
  },
  {
    id: "5",
    title: "Évaluation des risques clients",
    description: "Méthodologie pour évaluer les risques liés aux clients",
    duration: "40 min",
    level: "Intermédiaire",
    category: "LAB",
    thumbnail: "/placeholder.svg?height=200&width=350&query=client risk assessment training",
    progress: 25,
    completed: false,
    completedDate: null,
  },
]

export default function TrainingPage() {
  const { t } = useLanguage()
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedTraining, setSelectedTraining] = useState(null)
  const [videoDialogOpen, setVideoDialogOpen] = useState(false)

  const filteredTrainings = trainings.filter(
    (training) =>
      training.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      training.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      training.category.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const completedTrainings = filteredTrainings.filter((training) => training.completed)
  const inProgressTrainings = filteredTrainings.filter((training) => !training.completed && training.progress > 0)
  const notStartedTrainings = filteredTrainings.filter((training) => !training.completed && training.progress === 0)

  const handleTrainingClick = (training) => {
    setSelectedTraining(training)
    setVideoDialogOpen(true)
  }

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">{t("training.title")}</h1>
        <p className="text-muted-foreground">
          Formations sur les règles LAB, la signature électronique et le RBE à Monaco
        </p>
      </div>

      <div className="flex items-center justify-between">
        <div className="relative w-full max-w-sm">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Rechercher une formation..."
            className="w-full pl-8"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 rounded-full bg-green-500"></div>
            <span className="text-sm">Terminé</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
            <span className="text-sm">En cours</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 rounded-full bg-gray-300 dark:bg-gray-600"></div>
            <span className="text-sm">Non commencé</span>
          </div>
        </div>
      </div>

      <Tabs defaultValue="all" className="space-y-4">
        <TabsList>
          <TabsTrigger value="all">Toutes ({filteredTrainings.length})</TabsTrigger>
          <TabsTrigger value="completed">Terminées ({completedTrainings.length})</TabsTrigger>
          <TabsTrigger value="in-progress">En cours ({inProgressTrainings.length})</TabsTrigger>
          <TabsTrigger value="not-started">Non commencées ({notStartedTrainings.length})</TabsTrigger>
        </TabsList>
        <TabsContent value="all" className="space-y-4">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {filteredTrainings.map((training) => (
              <Card key={training.id} className="overflow-hidden">
                <div className="relative">
                  <img
                    src={training.thumbnail || "/placeholder.svg"}
                    alt={training.title}
                    className="h-48 w-full object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                    <Button
                      variant="secondary"
                      size="icon"
                      className="h-12 w-12 rounded-full"
                      onClick={() => handleTrainingClick(training)}
                    >
                      <Play className="h-6 w-6" />
                    </Button>
                  </div>
                  <Badge className="absolute right-2 top-2" variant="secondary">
                    {training.category}
                  </Badge>
                </div>
                <CardHeader>
                  <CardTitle className="line-clamp-1">{training.title}</CardTitle>
                  <CardDescription className="line-clamp-2">{training.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>{training.duration}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <GraduationCap className="h-4 w-4" />
                      <span>{training.level}</span>
                    </div>
                  </div>
                  <div className="mt-4 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Progression</span>
                      <span className="text-sm font-medium">{training.progress}%</span>
                    </div>
                    <Progress value={training.progress} className="h-2" />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button
                    variant={training.completed ? "outline" : "default"}
                    className="w-full"
                    onClick={() => handleTrainingClick(training)}
                  >
                    {training.completed ? (
                      <>
                        <Check className="mr-2 h-4 w-4" />
                        Revoir
                      </>
                    ) : training.progress > 0 ? (
                      "Continuer"
                    ) : (
                      "Commencer"
                    )}
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="completed" className="space-y-4">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {completedTrainings.map((training) => (
              <Card key={training.id} className="overflow-hidden">
                <div className="relative">
                  <img
                    src={training.thumbnail || "/placeholder.svg"}
                    alt={training.title}
                    className="h-48 w-full object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                    <Button
                      variant="secondary"
                      size="icon"
                      className="h-12 w-12 rounded-full"
                      onClick={() => handleTrainingClick(training)}
                    >
                      <Play className="h-6 w-6" />
                    </Button>
                  </div>
                  <Badge className="absolute right-2 top-2" variant="secondary">
                    {training.category}
                  </Badge>
                </div>
                <CardHeader>
                  <CardTitle className="line-clamp-1">{training.title}</CardTitle>
                  <CardDescription className="line-clamp-2">{training.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>{training.duration}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <GraduationCap className="h-4 w-4" />
                      <span>{training.level}</span>
                    </div>
                  </div>
                  <div className="mt-4 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Progression</span>
                      <span className="text-sm font-medium">{training.progress}%</span>
                    </div>
                    <Progress value={training.progress} className="h-2" />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full" onClick={() => handleTrainingClick(training)}>
                    <Check className="mr-2 h-4 w-4" />
                    Revoir
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="in-progress" className="space-y-4">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {inProgressTrainings.map((training) => (
              <Card key={training.id} className="overflow-hidden">
                <div className="relative">
                  <img
                    src={training.thumbnail || "/placeholder.svg"}
                    alt={training.title}
                    className="h-48 w-full object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                    <Button
                      variant="secondary"
                      size="icon"
                      className="h-12 w-12 rounded-full"
                      onClick={() => handleTrainingClick(training)}
                    >
                      <Play className="h-6 w-6" />
                    </Button>
                  </div>
                  <Badge className="absolute right-2 top-2" variant="secondary">
                    {training.category}
                  </Badge>
                </div>
                <CardHeader>
                  <CardTitle className="line-clamp-1">{training.title}</CardTitle>
                  <CardDescription className="line-clamp-2">{training.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>{training.duration}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <GraduationCap className="h-4 w-4" />
                      <span>{training.level}</span>
                    </div>
                  </div>
                  <div className="mt-4 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Progression</span>
                      <span className="text-sm font-medium">{training.progress}%</span>
                    </div>
                    <Progress value={training.progress} className="h-2" />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="default" className="w-full" onClick={() => handleTrainingClick(training)}>
                    Continuer
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="not-started" className="space-y-4">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {notStartedTrainings.map((training) => (
              <Card key={training.id} className="overflow-hidden">
                <div className="relative">
                  <img
                    src={training.thumbnail || "/placeholder.svg"}
                    alt={training.title}
                    className="h-48 w-full object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                    <Button
                      variant="secondary"
                      size="icon"
                      className="h-12 w-12 rounded-full"
                      onClick={() => handleTrainingClick(training)}
                    >
                      <Play className="h-6 w-6" />
                    </Button>
                  </div>
                  <Badge className="absolute right-2 top-2" variant="secondary">
                    {training.category}
                  </Badge>
                </div>
                <CardHeader>
                  <CardTitle className="line-clamp-1">{training.title}</CardTitle>
                  <CardDescription className="line-clamp-2">{training.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>{training.duration}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <GraduationCap className="h-4 w-4" />
                      <span>{training.level}</span>
                    </div>
                  </div>
                  <div className="mt-4 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Progression</span>
                      <span className="text-sm font-medium">{training.progress}%</span>
                    </div>
                    <Progress value={training.progress} className="h-2" />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="default" className="w-full" onClick={() => handleTrainingClick(training)}>
                    Commencer
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>

      <Dialog open={videoDialogOpen} onOpenChange={setVideoDialogOpen}>
        <DialogContent className="max-w-4xl">
          {selectedTraining && (
            <>
              <DialogHeader>
                <DialogTitle>{selectedTraining.title}</DialogTitle>
                <DialogDescription>{selectedTraining.description}</DialogDescription>
              </DialogHeader>
              <div className="aspect-video overflow-hidden rounded-md bg-muted">
                <div className="flex h-full items-center justify-center">
                  <div className="text-center">
                    <BookOpen className="mx-auto h-12 w-12 text-muted-foreground" />
                    <p className="mt-2 text-sm text-muted-foreground">Vidéo de formation à intégrer ici</p>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <User className="h-4 w-4" />
                    <span>Formateur: Jean Martin</span>
                  </div>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span>Mis à jour: 01/03/2023</span>
                  </div>
                </div>
                <Button variant="outline" size="sm">
                  <FileText className="mr-2 h-4 w-4" />
                  Télécharger le support
                </Button>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}
