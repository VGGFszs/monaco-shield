import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function FaqSection() {
  return (
    <section className="py-20">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Questions fréquentes</h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
              Retrouvez les réponses aux questions les plus courantes sur MonacoShield
            </p>
          </div>
        </div>

        <div className="mx-auto max-w-3xl mt-12">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>Qu'est-ce que MonacoShield ?</AccordionTrigger>
              <AccordionContent>
                MonacoShield est une solution souveraine de gestion de conformité en matière de lutte anti-blanchiment
                (LAB) et de signature électronique. Notre plateforme permet aux professionnels de simplifier leurs
                obligations réglementaires tout en sécurisant leurs processus de signature.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Comment fonctionne la vérification d'exposition politique ?</AccordionTrigger>
              <AccordionContent>
                Notre système vérifie automatiquement si vos clients ou partenaires sont des personnes politiquement
                exposées (PPE) en interrogeant notre base de données constamment mise à jour. Vous recevez
                instantanément les résultats et pouvez générer des rapports pour vos dossiers de conformité.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Les signatures électroniques sont-elles légalement valides ?</AccordionTrigger>
              <AccordionContent>
                Oui, les signatures électroniques générées par MonacoShield sont conformes au règlement eIDAS et ont une
                valeur juridique équivalente à une signature manuscrite. Elles sont accompagnées d'un certificat
                qualifié et d'un horodatage certifié, garantissant leur validité juridique dans toute l'Union Européenne
                et à Monaco.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>Où sont hébergées mes données ?</AccordionTrigger>
              <AccordionContent>
                Toutes vos données sont exclusivement hébergées à Monaco dans des centres de données sécurisés et
                certifiés. Cet hébergement souverain garantit que vos données sont protégées par les lois monégasques
                sur la protection des données et ne sont pas soumises aux législations étrangères.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger>Comment puis-je essayer MonacoShield ?</AccordionTrigger>
              <AccordionContent>
                Vous pouvez vous inscrire pour un essai gratuit de 14 jours sans engagement. Pendant cette période, vous
                aurez accès à toutes les fonctionnalités de la plateforme et pourrez évaluer si elle répond à vos
                besoins. Notre équipe est également disponible pour vous proposer une démonstration personnalisée.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-6">
              <AccordionTrigger>Combien de temps faut-il pour mettre en place MonacoShield ?</AccordionTrigger>
              <AccordionContent>
                La mise en place de MonacoShield est rapide et simple. Vous pouvez commencer à utiliser la plateforme
                immédiatement après votre inscription. Pour les entreprises ayant des besoins spécifiques, notre équipe
                d'onboarding vous accompagne dans la configuration, généralement en moins d'une journée.
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <div className="mt-8 text-center">
            <p className="mb-4 text-gray-500">Vous avez d'autres questions ?</p>
            <Button asChild>
              <Link href="/contact">Contactez-nous</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
