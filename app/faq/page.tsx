import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function FAQPage() {
  return (
    <div className="py-12 md:py-16">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h1>
          <p className="text-lg text-muted-foreground">Find answers to the most common questions about our services.</p>
        </div>

        <Tabs defaultValue="general" className="max-w-3xl mx-auto">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="general">General</TabsTrigger>
            <TabsTrigger value="shipping">Shipping</TabsTrigger>
            <TabsTrigger value="tracking">Tracking</TabsTrigger>
            <TabsTrigger value="billing">Billing</TabsTrigger>
          </TabsList>

          <TabsContent value="general" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>General Questions</CardTitle>
                <CardDescription>Common questions about SwiftElite and our services</CardDescription>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>What areas do you service?</AccordionTrigger>
                    <AccordionContent>
                      SwiftElite provides courier services to over 220 countries and territories worldwide. We offer
                      same-day delivery in major metropolitan areas and next-day delivery to most domestic locations.
                      Please check our Coverage page for specific service availability in your area.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger>What are your business hours?</AccordionTrigger>
                    <AccordionContent>
                      Our standard customer service hours are Monday through Friday, 8:00 AM to 8:00 PM EST, and
                      Saturday from 9:00 AM to 5:00 PM EST. We are closed on Sundays and major holidays. However, our
                      Elite service customers have access to 24/7 support.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3">
                    <AccordionTrigger>How do I get a quote for shipping?</AccordionTrigger>
                    <AccordionContent>
                      You can get a shipping quote by using our online pricing calculator, calling our customer service
                      team, or visiting one of our service centers. For corporate accounts or high-volume shipping, we
                      offer customized pricing - please contact our sales team.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-4">
                    <AccordionTrigger>What makes SwiftElite different from other courier services?</AccordionTrigger>
                    <AccordionContent>
                      SwiftElite specializes in premium courier services with a focus on reliability, speed, and
                      exceptional customer care. We offer specialized handling for high-value and sensitive items,
                      guaranteed delivery windows, and personalized service options not typically available with
                      standard courier companies.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-5">
                    <AccordionTrigger>Do you offer corporate accounts?</AccordionTrigger>
                    <AccordionContent>
                      Yes, we offer corporate accounts with volume discounts, dedicated account managers, customized
                      reporting, and specialized services tailored to your business needs. Please contact our sales team
                      to set up a corporate account.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="shipping" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Shipping Questions</CardTitle>
                <CardDescription>Information about our shipping services and processes</CardDescription>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>What are your different service levels?</AccordionTrigger>
                    <AccordionContent>
                      We offer three main service levels: Standard (2-3 business days), Premium (next business day), and
                      Elite (same-day in select areas). Each service level includes different features and benefits.
                      Please visit our Services page for detailed information.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger>How do I schedule a pickup?</AccordionTrigger>
                    <AccordionContent>
                      You can schedule a pickup through our website, mobile app, or by calling our customer service
                      team. For regular pickups, we offer scheduled pickup services that can be customized to your
                      needs.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3">
                    <AccordionTrigger>What items are prohibited for shipping?</AccordionTrigger>
                    <AccordionContent>
                      Prohibited items include hazardous materials, illegal substances, firearms, live animals, and
                      perishable goods without proper packaging. International shipments may have additional
                      restrictions based on destination country regulations. Please contact us if you're unsure about a
                      specific item.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-4">
                    <AccordionTrigger>How should I package my items?</AccordionTrigger>
                    <AccordionContent>
                      Items should be packaged in sturdy boxes with appropriate cushioning material. Fragile items
                      require additional protection. We offer packaging guidelines on our website and premium packaging
                      services at our service centers. For valuable or sensitive items, we recommend our specialized
                      handling service.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-5">
                    <AccordionTrigger>What documentation is needed for international shipping?</AccordionTrigger>
                    <AccordionContent>
                      International shipments require a commercial invoice, customs declaration form, and possibly
                      additional documentation depending on the destination country and package contents. Our
                      international shipping experts can assist you with preparing the correct documentation.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="tracking" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Tracking Questions</CardTitle>
                <CardDescription>Information about tracking your shipments</CardDescription>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>How do I track my package?</AccordionTrigger>
                    <AccordionContent>
                      You can track your package by entering your tracking number on our Track & Trace page, through our
                      mobile app, or by contacting customer service. Premium and Elite service customers also receive
                      proactive status updates via email and SMS.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger>How often is tracking information updated?</AccordionTrigger>
                    <AccordionContent>
                      Tracking information is updated in real-time as your package moves through our network. Standard
                      service tracking is updated at major milestones, while Premium and Elite services offer more
                      detailed tracking with GPS precision in many areas.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3">
                    <AccordionTrigger>What if my tracking information isn't updating?</AccordionTrigger>
                    <AccordionContent>
                      If your tracking information hasn't updated for more than 24 hours, please contact our customer
                      service team. Occasional delays in tracking updates can occur due to system processing or during
                      customs clearance for international shipments.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-4">
                    <AccordionTrigger>Can I track multiple packages at once?</AccordionTrigger>
                    <AccordionContent>
                      Yes, corporate account customers can track multiple packages simultaneously through our customer
                      portal. Individual customers can track up to 10 packages at once on our website or mobile app.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-5">
                    <AccordionTrigger>How long is tracking information available?</AccordionTrigger>
                    <AccordionContent>
                      Tracking information remains available in our system for 90 days after delivery for Standard
                      service, and 180 days for Premium and Elite services. Corporate accounts have access to extended
                      tracking history.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="billing" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Billing Questions</CardTitle>
                <CardDescription>Information about payments, invoices, and refunds</CardDescription>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>What payment methods do you accept?</AccordionTrigger>
                    <AccordionContent>
                      We accept all major credit cards, PayPal, bank transfers, and corporate accounts with approved
                      credit. Cash payment is available at our service centers. For international shipments, we can bill
                      the sender, recipient, or a third party.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger>How can I get a copy of my invoice?</AccordionTrigger>
                    <AccordionContent>
                      Invoices are automatically emailed to the address provided at the time of shipping. You can also
                      access your invoices through our customer portal or by contacting our billing department.
                      Corporate accounts receive consolidated invoices according to their billing cycle.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3">
                    <AccordionTrigger>What is your refund policy?</AccordionTrigger>
                    <AccordionContent>
                      We offer refunds for service failures based on our money-back guarantee. If we fail to deliver
                      within our guaranteed timeframe, you may be eligible for a full or partial refund. Claims must be
                      filed within 15 days of the scheduled delivery date.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-4">
                    <AccordionTrigger>Are there any additional fees I should be aware of?</AccordionTrigger>
                    <AccordionContent>
                      Potential additional fees include fuel surcharges, remote area delivery fees, address correction
                      fees, and special handling fees. For international shipments, customs duties and taxes may apply.
                      We strive to be transparent about all fees at the time of shipping.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-5">
                    <AccordionTrigger>How do I dispute a charge on my invoice?</AccordionTrigger>
                    <AccordionContent>
                      To dispute a charge, please contact our billing department within 30 days of receiving your
                      invoice. Provide your invoice number, the specific charge in question, and the reason for the
                      dispute. We will investigate and respond within 5 business days.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
