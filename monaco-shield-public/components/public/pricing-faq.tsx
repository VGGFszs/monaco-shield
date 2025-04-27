import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function PricingFaq() {
  return (
    <section className="py-20">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Questions fréquentes sur les tarifs</h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
              Tout ce que vous devez savoir sur nos forfaits et nos conditions
            </p>
          </div>
        </div>

        <div className="mx-auto max-w-3xl mt-12">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>Puis-je changer de forfait à tout moment ?</AccordionTrigger>
              <AccordionContent>
                Oui, vous pouvez passer à un forfait supérieur à tout moment. Le changement prend effet immédiatement et
                la différence de prix est calculée au prorata. Si vous souhaitez réduire votre forfait, le changement
                prendra effet à la fin de votre période de facturation en cours.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Y a-t-il des frais de mise en place ?</AccordionTrigger>
              <AccordionContent>
                Non, il n'y a aucun frais de mise en place pour nos forfaits Essai, Basique et Intermédiaire. Pour le
                forfait Avancée, des frais peuvent s'appliquer en fonction de vos besoins spécifiques d'intégration et
                de personnalisation.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Comment fonctionne l'essai gratuit ?</AccordionTrigger>
              <AccordionContent>
                L'essai gratuit vous donne accès à toutes les fonctionnalités de base avec les limitations indiquées (1
                utilisateur, 1 dossier, 1 signature électronique), sans engagement et sans limite de durée. Aucune carte
                de crédit n'est requise pour commencer l'essai. Vous pouvez passer à un forfait payant à tout moment
                pour bénéficier de plus de fonctionnalités.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>Quels moyens de paiement acceptez-vous ?</AccordionTrigger>
              <AccordionContent>
                Nous acceptons les cartes de crédit (Visa, Mastercard, American Express) et les prélèvements SEPA. Pour
                le forfait Avancée, nous pouvons également accepter les virements bancaires.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger>Puis-je obtenir une facture pour mon entreprise ?</AccordionTrigger>
              <AccordionContent>
                Oui, toutes les factures sont automatiquement générées et disponibles dans votre espace client. Elles
                contiennent toutes les informations nécessaires pour votre comptabilité, y compris votre numéro de TVA
                si vous l'avez fourni.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-6">
              <AccordionTrigger>Quelle est votre politique de remboursement ?</AccordionTrigger>
              <AccordionContent>
                Si vous n'êtes pas satisfait de nos services, vous pouvez demander un remboursement dans les 30 jours
                suivant votre premier paiement. Contactez notre service client pour plus d'informations.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-7">
              <AccordionTrigger>Que se passe-t-il si je dépasse mon quota mensuel ?</AccordionTrigger>
              <AccordionContent>
                Si vous approchez de votre limite mensuelle, vous recevrez une notification. Si vous dépassez votre
                quota, vous pouvez soit passer à un forfait supérieur, soit payer des frais supplémentaires pour les
                utilisations excédentaires. Ces frais sont clairement indiqués dans votre espace client.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-8">
              <AccordionTrigger>
                Proposez-vous des tarifs spéciaux pour les associations ou les startups ?
              </AccordionTrigger>
              <AccordionContent>
                Oui, nous proposons des tarifs préférentiels pour les associations à but non lucratif, les startups et
                les établissements d'enseignement. Contactez notre équipe commerciale pour en savoir plus sur nos
                programmes Contactez notre équipe commerciale pour en savoir plus sur nos programmes spéciaux.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  )
}
