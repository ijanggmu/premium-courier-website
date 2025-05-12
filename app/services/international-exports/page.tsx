import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Check } from "lucide-react"

export const metadata: Metadata = {
  title: "International Export Services from Nepal | Nepal Air Export",
  description:
    "Premium export services from Nepal to worldwide destinations. Fast, secure shipping for handicrafts, commercial goods, and e-commerce with customs handling.",
  keywords:
    "export from nepal, nepal export service, international shipping nepal, global shipping nepal, cargo export nepal, handicraft export, nepal products export",
  openGraph: {
    title: "International Export Services from Nepal | Nepal Air Export",
    description:
      "Premium export services from Nepal to worldwide destinations with customs handling and documentation support.",
    url: "https://nepairexport.com/services/international-exports",
    images: [
      {
        url: "https://nepairexport.com/images/og-international-exports.jpg",
        width: 1200,
        height: 630,
        alt: "Nepal Air Export - International Export Services",
      },
    ],
  },
}

export default function InternationalExportsPage() {
  return (
    <div className="py-12 md:py-16">
      <div className="container">
        {/* Breadcrumbs for SEO */}
        <div className="text-sm text-muted-foreground mb-8">
          <Link href="/" className="hover:underline">
            Home
          </Link>
          <span className="mx-2">/</span>
          <Link href="/services" className="hover:underline">
            Services
          </Link>
          <span className="mx-2">/</span>
          <span>International Exports</span>
        </div>

        <div className="max-w-4xl mx-auto text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">International Export Services from Nepal</h1>
          <p className="text-lg text-muted-foreground">
            Professional export solutions from Nepal to over 220 countries worldwide with end-to-end tracking, customs
            clearance, and specialized handling.
          </p>
        </div>

        {/* Hero image for the service page */}
        <div className="relative h-[400px] rounded-lg overflow-hidden mb-16">
          <Image
            src="/images/international-exports-hero.jpg"
            alt="International export services from Nepal - packages being prepared for global shipping"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 1024px"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent flex items-center">
            <div className="text-white max-w-md p-8">
              <h2 className="text-3xl font-bold mb-4">Global Reach, Local Expertise</h2>
              <p className="mb-6">
                We make exporting from Nepal simple and reliable with our comprehensive documentation support, customs
                clearance expertise, and global shipping network.
              </p>
              <Button asChild size="lg" className="bg-amber-500 hover:bg-amber-600 text-primary">
                <Link href="/quote?service=export">Get Export Quote</Link>
              </Button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <Card>
            <CardHeader>
              <CardTitle>Handicraft & Artisan Exports</CardTitle>
              <CardDescription>Specialized handling for Nepal's unique handcrafted items</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-4 relative h-48 rounded-md overflow-hidden">
                <Image
                  src="/images/handicraft-export-service.jpg"
                  alt="Nepali handicraft export services - pashmina shawls and handmade crafts"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>
              <p className="mb-4">
                We provide expert handling and packaging for delicate Nepali handicrafts, ensuring they reach
                international customers in perfect condition.
              </p>
              <ul className="list-disc pl-5 mb-4 space-y-1">
                <li>Specialized packaging for fragile items</li>
                <li>Documentation assistance for cultural goods</li>
                <li>Insurance options for high-value crafts</li>
                <li>Partnerships with major handicraft associations</li>
              </ul>
              <Button asChild className="w-full mt-2">
                <Link href="/quote?service=handicraft">Get Export Quote</Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Commercial Cargo Exports</CardTitle>
              <CardDescription>Bulk shipping solutions for businesses</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-4 relative h-48 rounded-md overflow-hidden">
                <Image
                  src="/images/commercial-cargo-export.jpg"
                  alt="Commercial cargo export services from Nepal - bulk shipping and logistics"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>
              <p className="mb-4">
                Comprehensive export services for Nepali businesses shipping commercial quantities, with volume
                discounts and dedicated account management.
              </p>
              <ul className="list-disc pl-5 mb-4 space-y-1">
                <li>Volume-based pricing</li>
                <li>Customs documentation handling</li>
                <li>Container and palletized shipping</li>
                <li>Business account benefits</li>
              </ul>
              <Button asChild className="w-full mt-2">
                <Link href="/quote?service=commercial">Get Export Quote</Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>E-commerce Export Solutions</CardTitle>
              <CardDescription>Tailored for online sellers shipping internationally</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-4 relative h-48 rounded-md overflow-hidden">
                <Image
                  src="/images/ecommerce-export-service.jpg"
                  alt="E-commerce export solutions from Nepal - online business shipping services"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>
              <p className="mb-4">
                Specialized services for Nepal-based e-commerce businesses selling globally, with integration options
                for major platforms.
              </p>
              <ul className="list-disc pl-5 mb-4 space-y-1">
                <li>API integration with e-commerce platforms</li>
                <li>Automated label generation</li>
                <li>Bulk shipping discounts</li>
                <li>Returns management</li>
              </ul>
              <Button asChild className="w-full mt-2">
                <Link href="/quote?service=ecommerce">Get Export Quote</Link>
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="bg-muted rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold mb-4">Why Choose Nepal Air Export for Your International Shipping?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-semibold mb-2">Export Documentation Expertise</h3>
              <p>
                Our team specializes in export documentation requirements for Nepali goods, ensuring compliance with
                both Nepal's regulations and destination country import rules.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Global Network & Partnerships</h3>
              <p>
                We've established strong partnerships with international carriers and customs agents to provide seamless
                export services from Nepal to any global destination.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Competitive Export Rates</h3>
              <p>
                Our volume-based relationships with global carriers allow us to offer some of the most competitive
                export rates from Nepal, with transparent pricing.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">End-to-End Tracking</h3>
              <p>
                Track your exports from pickup in Nepal to final international delivery with our comprehensive tracking
                system and regular status updates.
              </p>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-center">Our Export Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-2">
                  <span className="text-xl font-bold text-primary">1</span>
                </div>
                <CardTitle>Collection</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  We collect your items from your location in Kathmandu or anywhere in Nepal, or you can drop them at
                  our export centers.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-2">
                  <span className="text-xl font-bold text-primary">2</span>
                </div>
                <CardTitle>Documentation</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Our export specialists handle all required documentation, customs forms, and compliance requirements.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-2">
                  <span className="text-xl font-bold text-primary">3</span>
                </div>
                <CardTitle>Customs Clearance</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  We manage the export customs clearance process in Nepal and coordinate with destination customs
                  authorities.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-2">
                  <span className="text-xl font-bold text-primary">4</span>
                </div>
                <CardTitle>International Delivery</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Your exports are shipped to their international destination with full tracking and delivery
                  confirmation.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="bg-primary/5 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold mb-6 text-center">Popular Export Destinations from Nepal</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center p-4 bg-white rounded-lg shadow-sm">
              <div className="relative h-24 mb-3">
                <Image
                  src="/images/destinations/usa.jpg"
                  alt="Export from Nepal to USA"
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover rounded-md"
                />
              </div>
              <h3 className="font-semibold">United States</h3>
              <p className="text-sm text-muted-foreground">3-5 business days</p>
            </div>
            <div className="text-center p-4 bg-white rounded-lg shadow-sm">
              <div className="relative h-24 mb-3">
                <Image
                  src="/images/destinations/uk.jpg"
                  alt="Export from Nepal to United Kingdom"
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover rounded-md"
                />
              </div>
              <h3 className="font-semibold">United Kingdom</h3>
              <p className="text-sm text-muted-foreground">3-4 business days</p>
            </div>
            <div className="text-center p-4 bg-white rounded-lg shadow-sm">
              <div className="relative h-24 mb-3">
                <Image
                  src="/images/destinations/australia.jpg"
                  alt="Export from Nepal to Australia"
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover rounded-md"
                />
              </div>
              <h3 className="font-semibold">Australia</h3>
              <p className="text-sm text-muted-foreground">4-6 business days</p>
            </div>
            <div className="text-center p-4 bg-white rounded-lg shadow-sm">
              <div className="relative h-24 mb-3">
                <Image
                  src="/images/destinations/canada.jpg"
                  alt="Export from Nepal to Canada"
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover rounded-md"
                />
              </div>
              <h3 className="font-semibold">Canada</h3>
              <p className="text-sm text-muted-foreground">4-5 business days</p>
            </div>
            <div className="text-center p-4 bg-white rounded-lg shadow-sm">
              <div className="relative h-24 mb-3">
                <Image
                  src="/images/destinations/japan.jpg"
                  alt="Export from Nepal to Japan"
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover rounded-md"
                />
              </div>
              <h3 className="font-semibold">Japan</h3>
              <p className="text-sm text-muted-foreground">2-3 business days</p>
            </div>
            <div className="text-center p-4 bg-white rounded-lg shadow-sm">
              <div className="relative h-24 mb-3">
                <Image
                  src="/images/destinations/germany.jpg"
                  alt="Export from Nepal to Germany"
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover rounded-md"
                />
              </div>
              <h3 className="font-semibold">Germany</h3>
              <p className="text-sm text-muted-foreground">3-4 business days</p>
            </div>
            <div className="text-center p-4 bg-white rounded-lg shadow-sm">
              <div className="relative h-24 mb-3">
                <Image
                  src="/images/destinations/singapore.jpg"
                  alt="Export from Nepal to Singapore"
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover rounded-md"
                />
              </div>
              <h3 className="font-semibold">Singapore</h3>
              <p className="text-sm text-muted-foreground">2-3 business days</p>
            </div>
            <div className="text-center p-4 bg-white rounded-lg shadow-sm">
              <div className="relative h-24 mb-3">
                <Image
                  src="/images/destinations/uae.jpg"
                  alt="Export from Nepal to UAE"
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover rounded-md"
                />
              </div>
              <h3 className="font-semibold">UAE</h3>
              <p className="text-sm text-muted-foreground">2-3 business days</p>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-center">Commonly Exported Items from Nepal</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card>
              <CardHeader>
                <CardTitle>Handicrafts & Art</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="mb-4 relative h-48 rounded-md overflow-hidden">
                  <Image
                    src="/images/products/handicrafts.jpg"
                    alt="Nepali handicrafts for export - handmade crafts and art"
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                  />
                </div>
                <ul className="space-y-2">
                  {[
                    "Handmade Pashmina Shawls",
                    "Thangka Paintings",
                    "Hand-knotted Carpets",
                    "Metal Statues",
                    "Handcrafted Jewelry",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Food & Agriculture</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="mb-4 relative h-48 rounded-md overflow-hidden">
                  <Image
                    src="/images/products/food-agriculture.jpg"
                    alt="Nepali food and agricultural products for export - tea, coffee, and spices"
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                  />
                </div>
                <ul className="space-y-2">
                  {["Orthodox Tea", "Himalayan Coffee", "Spices & Herbs", "Honey", "Dried Fruits & Nuts"].map(
                    (item) => (
                      <li key={item} className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ),
                  )}
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Textiles & Garments</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="mb-4 relative h-48 rounded-md overflow-hidden">
                  <Image
                    src="/images/products/textiles.jpg"
                    alt="Nepali textiles and garments for export - woolen products and clothing"
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                  />
                </div>
                <ul className="space-y-2">
                  {["Woolen Products", "Hemp Clothing", "Cotton Garments", "Felt Products", "Traditional Clothing"].map(
                    (item) => (
                      <li key={item} className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ),
                  )}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-bold mb-6">Ready to Export from Nepal?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Whether you're an individual sending a gift abroad, an artisan shipping handicrafts, or a business with
            commercial export needs, Nepal Air Export has the right solution for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link href="/quote">Get Export Quote</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/contact">Speak to Export Specialist</Link>
            </Button>
          </div>
        </div>

        {/* FAQ Section for SEO */}
        <div className="mt-16 max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-6 text-center">Frequently Asked Questions About Exporting from Nepal</h2>

          <div className="space-y-6">
            <div className="border rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2">What documents do I need to export from Nepal?</h3>
              <p>
                The basic documents required for exporting from Nepal include a commercial invoice, packing list,
                certificate of origin, and customs declaration form. Depending on the product and destination country,
                you may also need specific permits, certificates, or licenses. Our export specialists can guide you
                through the exact documentation needed for your shipment.
              </p>
            </div>

            <div className="border rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2">
                How long does it take to export from Nepal to other countries?
              </h3>
              <p>
                Export times vary by destination. Shipments to neighboring countries like India typically take 1-3
                business days, while exports to Asia take 2-4 days, Europe 3-5 days, and North America 4-7 days. These
                timeframes include customs clearance at both origin and destination. Express options are available for
                urgent shipments.
              </p>
            </div>

            <div className="border rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2">What are the costs involved in exporting from Nepal?</h3>
              <p>
                Export costs include shipping charges (based on weight, dimensions, and destination), customs clearance
                fees, documentation charges, and any applicable duties or taxes in the destination country. We provide
                transparent, all-inclusive quotes with no hidden fees. Volume discounts are available for regular
                exporters.
              </p>
            </div>

            <div className="border rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2">Can I track my export shipment from Nepal?</h3>
              <p>
                Yes, all our export shipments include end-to-end tracking. You'll receive a tracking number that allows
                you to monitor your shipment's progress from pickup in Nepal through customs clearance and to final
                delivery at the international destination. Email and SMS notifications are also available at key
                milestones.
              </p>
            </div>
          </div>
        </div>

        {/* Schema markup for this page */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              name: "International Export Services from Nepal",
              serviceType: "Export Services",
              provider: {
                "@type": "LocalBusiness",
                "@id": "https://nepairexport.com/#organization",
              },
              description:
                "Professional export solutions from Nepal to over 220 countries worldwide with end-to-end tracking, customs clearance, and specialized handling.",
              areaServed: {
                "@type": "Country",
                name: "Nepal",
              },
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Export Services Catalog",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Handicraft & Artisan Exports",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Commercial Cargo Exports",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "E-commerce Export Solutions",
                    },
                  },
                ],
              },
            }),
          }}
        />

        {/* FAQ Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "What documents do I need to export from Nepal?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The basic documents required for exporting from Nepal include a commercial invoice, packing list, certificate of origin, and customs declaration form. Depending on the product and destination country, you may also need specific permits, certificates, or licenses.",
                  },
                },
                {
                  "@type": "Question",
                  name: "How long does it take to export from Nepal to other countries?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Export times vary by destination. Shipments to neighboring countries like India typically take 1-3 business days, while exports to Asia take 2-4 days, Europe 3-5 days, and North America 4-7 days. These timeframes include customs clearance at both origin and destination.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What are the costs involved in exporting from Nepal?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Export costs include shipping charges (based on weight, dimensions, and destination), customs clearance fees, documentation charges, and any applicable duties or taxes in the destination country. We provide transparent, all-inclusive quotes with no hidden fees.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Can I track my export shipment from Nepal?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, all our export shipments include end-to-end tracking. You'll receive a tracking number that allows you to monitor your shipment's progress from pickup in Nepal through customs clearance and to final delivery at the international destination.",
                  },
                },
              ],
            }),
          }}
        />
      </div>
    </div>
  )
}
