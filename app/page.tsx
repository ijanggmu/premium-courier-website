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
  title: "Nepal Air Export | #1 Courier & International Export Service in Nepal",
  description:
    "Nepal's trusted courier service for fast, reliable parcel delivery and international exports. Same-day delivery in Kathmandu, nationwide shipping, and global export solutions.",
  keywords:
    "nepal air export, courier service nepal, send parcel nepal, package delivery kathmandu, international shipping nepal, export from nepal, nepal export service, cargo service nepal",
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Premier Courier & Export Services in Nepal</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              From the bustling streets of Kathmandu to international destinations, we handle your deliveries and
              exports with care and efficiency.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <Card>
              <CardHeader>
                <CardTitle>Kathmandu Valley Delivery</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  <strong>Same-day delivery</strong> throughout Kathmandu, Lalitpur, and Bhaktapur. Our couriers know
                  every street and alley to ensure prompt delivery of your packages and documents.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Nationwide Courier Service</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  <strong>Next-day delivery</strong> to Pokhara, Biratnagar, Birgunj, Dharan, Butwal, Nepalgunj, and
                  other major urban centers across Nepal with reliable tracking.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>International Exports</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  <strong>Specialized export services</strong> from Nepal to global destinations. We handle customs
                  clearance, documentation, and provide competitive rates for businesses and individuals.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Button asChild size="lg">
              <Link href="/services/nepal-delivery">Explore Our Nepal Courier Services</Link>
            </Button>
          </div>
        </div>
      </section>

      <TrustIndicators />

      {/* Export Services Section - New */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">International Export Solutions from Nepal</h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              We make exporting from Nepal simple, reliable, and cost-effective with our comprehensive global shipping
              network
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            <Card>
              <CardHeader>
                <CardTitle>Export Documentation</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Professional assistance with export documentation, customs forms, and regulatory compliance to ensure
                  smooth international shipping.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Handicraft Exports</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Specialized handling for Nepali handicrafts, including proper packaging, insurance, and export permits
                  for these unique items.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Commercial Cargo</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Bulk shipping solutions for commercial exports with competitive rates, customs clearance, and
                  international tracking.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>E-commerce Exports</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Tailored solutions for Nepali online retailers selling internationally, with integration options for
                  major e-commerce platforms.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Button asChild size="lg">
              <Link href="/services/international-exports">Discover Our Export Services</Link>
            </Button>
          </div>
        </div>
      </section>

      <CallToAction />

      {/* FAQ Section with Keywords */}
      <section className="py-16 bg-background">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-muted-foreground">Common questions about our courier and export services in Nepal</p>
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
              <h3 className="text-xl font-semibold mb-2">How can I track my package or export shipment?</h3>
              <p>
                You can track your package or export shipment in real-time using our online tracking system. Simply
                enter your tracking number on our website or mobile app to see the current status, location, and
                estimated delivery time of your shipment.
              </p>
            </div>

            <div className="border rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2">What documents are required for exporting from Nepal?</h3>
              <p>
                For exports from Nepal, you typically need a commercial invoice, packing list, and certificate of
                origin. Depending on the destination country and product type, additional documents like permits or
                certificates may be required. Our export specialists can guide you through the entire documentation
                process.
              </p>
            </div>

            <div className="border rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2">
                Which countries do you offer export services to from Nepal?
              </h3>
              <p>
                Nepal Air Export provides comprehensive export services to over 220 countries worldwide. Our most
                popular destinations include the USA, UK, Australia, Canada, Japan, Germany, and countries across Asia.
                We have specialized expertise in markets with high demand for Nepali products.
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
