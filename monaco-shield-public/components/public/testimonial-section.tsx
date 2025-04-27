import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { QuoteIcon } from "lucide-react"

export function TestimonialSection() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Ce que nos clients disent</h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
              Découvrez pourquoi les professionnels font confiance à MonacoShield pour leur conformité
            </p>
          </div>
        </div>

        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-12">
          <Card>
            <CardContent className="p-6">
              <div className="flex flex-col gap-4">
                <QuoteIcon className="h-8 w-8 text-red-500" />
                <p className="text-gray-700">
                  "MonacoShield nous a permis de réduire considérablement le temps consacré aux vérifications de
                  conformité. Un outil indispensable pour notre cabinet."
                </p>
                <div className="flex items-center gap-4">
                  <div className="relative h-10 w-10 overflow-hidden rounded-full">
                    <Image
                      src="/placeholder.svg?height=40&width=40&query=professional man"
                      alt="Photo de profil"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-medium">Jean Martin</p>
                    <p className="text-sm text-gray-500">Directeur, Cabinet Martin & Associés</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex flex-col gap-4">
                <QuoteIcon className="h-8 w-8 text-red-500" />
                <p className="text-gray-700">
                  "La solution de signature électronique est remarquablement simple à utiliser, tout en offrant un
                  niveau de sécurité optimal. Nos clients l'adorent."
                </p>
                <div className="flex items-center gap-4">
                  <div className="relative h-10 w-10 overflow-hidden rounded-full">
                    <Image
                      src="/placeholder.svg?height=40&width=40&query=professional woman"
                      alt="Photo de profil"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-medium">Sophie Blanc</p>
                    <p className="text-sm text-gray-500">Responsable Conformité, Banque de Monaco</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex flex-col gap-4">
                <QuoteIcon className="h-8 w-8 text-red-500" />
                <p className="text-gray-700">
                  "L'hébergement souverain à Monaco était un critère essentiel pour nous. MonacoShield répond
                  parfaitement à nos exigences de confidentialité."
                </p>
                <div className="flex items-center gap-4">
                  <div className="relative h-10 w-10 overflow-hidden rounded-full">
                    <Image
                      src="/placeholder.svg?height=40&width=40&query=professional man suit"
                      alt="Photo de profil"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-medium">Pierre Durand</p>
                    <p className="text-sm text-gray-500">CEO, Monaco Invest</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
