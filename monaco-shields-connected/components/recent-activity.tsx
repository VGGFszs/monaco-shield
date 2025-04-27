import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const activities = [
  {
    id: 1,
    user: {
      name: "John Doe",
      avatar: "/elemental-bending.png",
      initials: "JD",
    },
    action: "a créé un nouveau dossier",
    target: "Société XYZ",
    time: "Il y a 10 minutes",
  },
  {
    id: 2,
    user: {
      name: "Alice Martin",
      avatar: "/bioluminescent-forest.png",
      initials: "AM",
    },
    action: "a effectué une vérification d'exposition",
    target: "Jean Dupont",
    time: "Il y a 25 minutes",
  },
  {
    id: 3,
    user: {
      name: "Robert Johnson",
      avatar: "/diverse-group-meeting.png",
      initials: "RJ",
    },
    action: "a envoyé un document pour signature",
    target: "Contrat de prestation",
    time: "Il y a 1 heure",
  },
  {
    id: 4,
    user: {
      name: "Sophie Dubois",
      avatar: "/diverse-group-meeting.png",
      initials: "SD",
    },
    action: "a soumis une déclaration de soupçon",
    target: "Référence #DS-2023-42",
    time: "Il y a 3 heures",
  },
  {
    id: 5,
    user: {
      name: "Thomas Bernard",
      avatar: "/placeholder.svg?height=32&width=32&query=avatar5",
      initials: "TB",
    },
    action: "a complété une formation",
    target: "Règles LAB à Monaco",
    time: "Il y a 5 heures",
  },
]

export function RecentActivity() {
  return (
    <div className="space-y-4">
      {activities.map((activity) => (
        <div key={activity.id} className="flex items-start gap-4">
          <Avatar className="h-8 w-8">
            <AvatarImage src={activity.user.avatar || "/placeholder.svg"} alt={activity.user.name} />
            <AvatarFallback>{activity.user.initials}</AvatarFallback>
          </Avatar>
          <div className="space-y-1">
            <p className="text-sm">
              <span className="font-medium">{activity.user.name}</span> {activity.action}{" "}
              <span className="font-medium">{activity.target}</span>
            </p>
            <p className="text-xs text-muted-foreground">{activity.time}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
