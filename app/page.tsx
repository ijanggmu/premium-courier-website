import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
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
              <CardContent className="pt-0">
                <div className="mb-4 relative h-48 rounded-md overflow-hidden">
                  <Image
                    src="/images/kathmandu-delivery.jpg"
                    alt="Same-day courier delivery in Kathmandu Valley"
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                  />
                </div>
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
              <CardContent className="pt-0">
                <div className="mb-4 relative h-48 rounded-md overflow-hidden">
                  <Image
                    src="/images/nationwide-delivery.jpg"
                    alt="Nationwide courier service across Nepal"
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                  />
                </div>
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
              <CardContent className="pt-0">
                <div className="mb-4 relative h-48 rounded-md overflow-hidden">
                  <Image
                    src="/images/international-exports.jpg"
                    alt="International export services from Nepal"
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                  />
                </div>
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

      {/* Export Services Section */}
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
              <CardContent className="pt-0">
                <div className="mb-4 relative h-40 rounded-md overflow-hidden">
                  <Image
                    src="/images/export-documentation.jpg"
                    alt="Export documentation services for Nepal businesses"
                    fill
                    sizes="(max-width: 768px) 100vw, 25vw"
                    className="object-cover"
                  />
                </div>
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
              <CardContent className="pt-0">
                <div className="mb-4 relative h-40 rounded-md overflow-hidden">
                  <Image
                    src="/images/handicraft-exports.jpg"
                    alt="Nepali handicraft export services"
                    fill
                    sizes="(max-width: 768px) 100vw, 25vw"
                    className="object-cover"
                  />
                </div>
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
              <CardContent className="pt-0">
                <div className="mb-4 relative h-40 rounded-md overflow-hidden">
                  <Image
                    src="/images/commercial-cargo.jpg"
                    alt="Commercial cargo export from Nepal"
                    fill
                    sizes="(max-width: 768px) 100vw, 25vw"
                    className="object-cover"
                  />
                </div>
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
              <CardContent className="pt-0">
                <div className="mb-4 relative h-40 rounded-md overflow-hidden">
                  <Image
                    src="/images/ecommerce-exports.jpg"
                    alt="E-commerce export solutions from Nepal"
                    fill
                    sizes="(max-width: 768px) 100vw, 25vw"
                    className="object-cover"
                  />
                </div>
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

      {/* Testimonials Section */}
      <section className="py-16 bg-muted">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">What Our Customers Say</h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Trusted by businesses and individuals across Nepal for reliable courier and export services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-white">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  <div className="mr-4">
                    <Image
                      src="/images/testimonial-1.jpg"
                      alt="Ramesh Sharma - Handicraft Exporter"
                      width={60}
                      height={60}
                      className="rounded-full"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold">Ramesh Sharma</h3>
                    <p className="text-sm text-muted-foreground">Handicraft Exporter, Kathmandu</p>
                  </div>
                </div>
                <p className="italic">
                  "Nepal Air Export has transformed our international shipping process. Their documentation assistance
                  and customs handling expertise have helped us expand to new markets with confidence."
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  <div className="mr-4">
                    <Image
                      src="/images/testimonial-2.jpg"
                      alt="Sunita Rai - Online Business Owner"
                      width={60}
                      height={60}
                      className="rounded-full"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold">Sunita Rai</h3>
                    <p className="text-sm text-muted-foreground">Online Business Owner, Pokhara</p>
                  </div>
                </div>
                <p className="italic">
                  "The same-day delivery service in Kathmandu has been a game-changer for my e-commerce business. My
                  customers love the fast delivery and real-time tracking."
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  <div className="mr-4">
                    <Image
                      src="/images/testimonial-3.jpg"
                      alt="Bijay Thapa - Tea Exporter"
                      width={60}
                      height={60}
                      className="rounded-full"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold">Bijay Thapa</h3>
                    <p className="text-sm text-muted-foreground">Tea Exporter, Ilam</p>
                  </div>
                </div>
                <p className="italic">
                  "We've been exporting Nepali tea to international markets for years, and Nepal Air Export provides the
                  most reliable service with competitive rates. Highly recommended!"
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* SEO-optimized footer section with locations */}
      <section className="py-12 bg-gray-50">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Courier Services in Kathmandu</h3>
              <ul className="space-y-2 text-sm">
                <li>Same-day delivery in Kathmandu</li>
                <li>Document delivery Kathmandu</li>
                <li>Package pickup Thamel</li>
                <li>Express courier Lalitpur</li>
                <li>Parcel delivery Bhaktapur</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Nationwide Delivery</h3>
              <ul className="space-y-2 text-sm">
                <li>Next-day delivery to Pokhara</li>
                <li>Courier service Biratnagar</li>
                <li>Package delivery Birgunj</li>
                <li>Parcel service Chitwan</li>
                <li>Courier to Nepalgunj</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Export Services</h3>
              <ul className="space-y-2 text-sm">
                <li>Handicraft exports from Nepal</li>
                <li>Tea and coffee exports</li>
                <li>Textile export services</li>
                <li>Commercial cargo exports</li>
                <li>E-commerce international shipping</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Popular Destinations</h3>
              <ul className="space-y-2 text-sm">
                <li>USA shipping from Nepal</li>
                <li>UK parcel delivery</li>
                <li>Australia export services</li>
                <li>Canada shipping</li>
                <li>Japan export solutions</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
