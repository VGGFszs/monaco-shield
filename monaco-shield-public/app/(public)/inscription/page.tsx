import { PublicHeader } from "@/components/public/public-header"
import { PublicFooter } from "@/components/public/public-footer"

export default function SignupPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <PublicHeader />
      {/* Reste du contenu inchangé */}
      <PublicFooter />
    </div>
  )
}
