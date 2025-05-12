import type { Metadata } from "next"
import Link from "next/link"
import Hero from "@/components/hero"
import Features from "@/components/features"
import TrackingSection from "@/components/tracking-section"
import TrustIndicators from "@/components/trust-indicators"
import CallToAction from "@/components/call-to-action"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "SwiftElite Courier Nepal | Premium Parcel & Delivery Services in Nepal",
  description:
    "Nepal's trusted courier service for fast, reliable parcel delivery across Kathmandu and nationwide. Send packages locally or internationally with real-time tracking.",
  keywords: "courier service Nepal, send parcel Nepal, package delivery Kathmandu, courier Kathmandu, Nepal shipping",
}

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <Features />
      <TrackingSection />

      {/* Nepal-specific section */}
      <section className="py-16 bg-muted">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Courier Services Across Nepal</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              From the bustling streets of Kathmandu to remote mountain villages, we deliver your parcels safely and on
              time.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <Card>
              <CardHeader>
                <CardTitle>Kathmandu Valley</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Same-day delivery throughout Kathmandu, Lalitpur, and Bhaktapur. Our couriers know every street and
                  alley to ensure prompt delivery.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Major Cities</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Next-day delivery to Pokhara, Biratnagar, Birgunj, Dharan, Butwal, Nepalgunj, and other major urban
                  centers across Nepal.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Remote Areas</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Reliable delivery to all 77 districts of Nepal, including mountainous regions and remote villages with
                  our specialized network.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Button asChild size="lg">
              <Link href="/services/nepal-delivery">Learn More About Our Nepal Services</Link>
            </Button>
          </div>
        </div>
      </section>

      <TrustIndicators />
      <CallToAction />

      {/* FAQ Section with Keywords */}
      <section className="py-16 bg-background">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-muted-foreground">Common questions about our courier services in Nepal</p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            <div className="border rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2">How much does it cost to send a parcel within Kathmandu?</h3>
              <p>
                Our pricing for parcels within Kathmandu starts at NPR 150 for standard delivery, with additional
                options for express and same-day delivery. The final cost depends on weight, dimensions, and delivery
                urgency.
              </p>
            </div>

            <div className="border rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2">How can I track my package in Nepal?</h3>
              <p>
                You can track your package in real-time using our online tracking system. Simply enter your tracking
                number on our website or mobile app to see the current status and location of your shipment.
              </p>
            </div>

            <div className="border rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2">Do you offer international shipping from Nepal?</h3>
              <p>
                Yes, we offer reliable international shipping from Nepal to over 200 countries worldwide. We handle all
                customs documentation and provide competitive rates for both documents and packages.
              </p>
            </div>

            <div className="border rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2">How long does delivery take to remote areas of Nepal?</h3>
              <p>
                Delivery to remote areas typically takes 2-5 business days depending on the specific location, weather
                conditions, and accessibility. We have specialized networks to reach even the most challenging
                locations.
              </p>
            </div>
          </div>

          <div className="text-center mt-8">
            <Button asChild variant="outline">
              <Link href="/faq">View All FAQs</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
