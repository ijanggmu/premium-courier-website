import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Best Courier Services in Nepal | Nepal Air Export",
  description:
    "Fastest courier and parcel delivery services across Nepal. Same-day delivery in Kathmandu and next-day delivery to all major cities with real-time tracking.",
  keywords:
    "courier service nepal, best courier nepal, parcel delivery nepal, same day delivery kathmandu, send parcel nepal, package delivery kathmandu, nepal courier company",
  openGraph: {
    title: "Best Courier Services in Nepal | Nepal Air Export",
    description: "Fastest courier and parcel delivery services across Nepal with same-day delivery in Kathmandu.",
    url: "https://nepairexport.com/services/nepal-delivery",
    images: [
      {
        url: "https://nepairexport.com/images/og-nepal-delivery.jpg",
        width: 1200,
        height: 630,
        alt: "Nepal Air Export - Domestic Courier Services",
      },
    ],
  },
}

export default function NepalDeliveryPage() {
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
          <span>Nepal Delivery</span>
        </div>

        <div className="max-w-4xl mx-auto text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Best Courier Services Across Nepal</h1>
          <p className="text-lg text-muted-foreground">
            Fast, reliable, and affordable parcel delivery services throughout Nepal, from Kathmandu to Pokhara,
            Biratnagar, Chitwan, and all 77 districts.
          </p>
        </div>

        {/* Hero image for the service page */}
        <div className="relative h-[400px] rounded-lg overflow-hidden mb-16">
          <Image
            src="/images/nepal-delivery-hero.jpg"
            alt="Courier services across Nepal - delivery personnel with motorcycle in Kathmandu"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 1024px"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent flex items-center">
            <div className="text-white max-w-md p-8">
              <h2 className="text-3xl font-bold mb-4">Nationwide Delivery Network</h2>
              <p className="mb-6">
                From urban centers to remote villages, we deliver your parcels safely and on time across all of Nepal.
              </p>
              <Button asChild size="lg" className="bg-amber-500 hover:bg-amber-600 text-primary">
                <Link href="/quote?service=domestic">Schedule a Pickup</Link>
              </Button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <Card>
            <CardHeader>
              <CardTitle>Same-Day Kathmandu Delivery</CardTitle>
              <CardDescription>For urgent deliveries within the Kathmandu Valley</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-4 relative h-48 rounded-md overflow-hidden">
                <Image
                  src="/images/kathmandu-same-day.jpg"
                  alt="Same-day courier delivery in Kathmandu Valley"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>
              <p className="mb-4">
                Our premium same-day delivery service ensures your parcels reach any location within Kathmandu Valley
                within hours.
              </p>
              <ul className="list-disc pl-5 mb-4 space-y-1">
                <li>Pickup within 1 hour of booking</li>
                <li>Delivery confirmation with proof of delivery</li>
                <li>Real-time tracking</li>
                <li>Serves all areas of Kathmandu, Lalitpur, and Bhaktapur</li>
              </ul>
              <Button asChild className="w-full mt-2">
                <Link href="/quote?service=same-day">Get a Quote</Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Next-Day Nepal Delivery</CardTitle>
              <CardDescription>Fast delivery to major cities across Nepal</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-4 relative h-48 rounded-md overflow-hidden">
                <Image
                  src="/images/next-day-delivery.jpg"
                  alt="Next-day courier service to major cities in Nepal"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>
              <p className="mb-4">
                Reliable next-day delivery to major cities including Pokhara, Biratnagar, Birgunj, Dharan, and
                Nepalgunj.
              </p>
              <ul className="list-disc pl-5 mb-4 space-y-1">
                <li>Guaranteed next-day delivery</li>
                <li>Secure handling of packages</li>
                <li>SMS notifications at every delivery stage</li>
                <li>Competitive rates for businesses</li>
              </ul>
              <Button asChild className="w-full mt-2">
                <Link href="/quote?service=next-day">Get a Quote</Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Remote Area Delivery</CardTitle>
              <CardDescription>Reaching every corner of Nepal</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-4 relative h-48 rounded-md overflow-hidden">
                <Image
                  src="/images/remote-delivery.jpg"
                  alt="Remote area courier service in Nepal - mountain region delivery"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>
              <p className="mb-4">
                We deliver to remote and mountainous regions of Nepal, ensuring no location is too difficult to reach.
              </p>
              <ul className="list-disc pl-5 mb-4 space-y-1">
                <li>Specialized mountain region delivery network</li>
                <li>Partnerships with local transport providers</li>
                <li>Delivery to trekking regions including Everest and Annapurna</li>
                <li>Reliable service to all 77 districts</li>
              </ul>
              <Button asChild className="w-full mt-2">
                <Link href="/quote?service=remote">Get a Quote</Link>
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="bg-muted rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold mb-4">Why Choose Nepal Air Export for Delivery in Nepal?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex gap-4">
              <div className="bg-primary/10 p-3 rounded-full h-12 w-12 flex items-center justify-center flex-shrink-0">
                <Image src="/images/icons/local-knowledge.png" alt="Local knowledge icon" width={24} height={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Extensive Local Knowledge</h3>
                <p>
                  Our team has unparalleled knowledge of Nepal's geography, traffic patterns, and addressing systems,
                  ensuring efficient deliveries even to locations without formal addresses.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="bg-primary/10 p-3 rounded-full h-12 w-12 flex items-center justify-center flex-shrink-0">
                <Image src="/images/icons/reliability.png" alt="Reliability icon" width={24} height={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Reliable During Challenges</h3>
                <p>
                  We maintain service even during challenging conditions like monsoon season, festivals, or road
                  closures, with alternative routes and contingency plans.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="bg-primary/10 p-3 rounded-full h-12 w-12 flex items-center justify-center flex-shrink-0">
                <Image src="/images/icons/pricing.png" alt="Pricing icon" width={24} height={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Competitive Local Pricing</h3>
                <p>
                  Our pricing is transparent and competitive, with special rates for regular customers and businesses
                  with high shipping volumes.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="bg-primary/10 p-3 rounded-full h-12 w-12 flex items-center justify-center flex-shrink-0">
                <Image src="/images/icons/support.png" alt="Support icon" width={24} height={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Dedicated Customer Support</h3>
                <p>
                  Our Nepali-speaking customer service team is available 7 days a week to assist with inquiries, provide
                  updates, and resolve any issues promptly.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mb-16">
          <h2 className="text-2xl font-bold mb-4">Service Coverage in Nepal</h2>
          <p className="text-lg text-muted-foreground mb-6">
            We deliver to all 77 districts across Nepal's 7 provinces, with specialized services for major urban
            centers.
          </p>

          <div className="mb-8">
            <div className="relative h-[400px] rounded-lg overflow-hidden mb-8">
              <Image
                src="/images/nepal-coverage-map.jpg"
                alt="Nepal courier service coverage map showing all 77 districts"
                fill
                sizes="(max-width: 1024px) 100vw, 1024px"
                className="object-cover"
              />
            </div>
            <h3 className="text-xl font-semibold mb-3">Major Service Areas</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-background p-4 rounded shadow">
                <h4 className="font-medium">Kathmandu Valley</h4>
                <p className="text-sm text-muted-foreground">Same-day service</p>
              </div>
              <div className="bg-background p-4 rounded shadow">
                <h4 className="font-medium">Pokhara</h4>
                <p className="text-sm text-muted-foreground">Next-day service</p>
              </div>
              <div className="bg-background p-4 rounded shadow">
                <h4 className="font-medium">Biratnagar</h4>
                <p className="text-sm text-muted-foreground">Next-day service</p>
              </div>
              <div className="bg-background p-4 rounded shadow">
                <h4 className="font-medium">Birgunj</h4>
                <p className="text-sm text-muted-foreground">Next-day service</p>
              </div>
              <div className="bg-background p-4 rounded shadow">
                <h4 className="font-medium">Chitwan</h4>
                <p className="text-sm text-muted-foreground">Next-day service</p>
              </div>
              <div className="bg-background p-4 rounded shadow">
                <h4 className="font-medium">Butwal</h4>
                <p className="text-sm text-muted-foreground">Next-day service</p>
              </div>
              <div className="bg-background p-4 rounded shadow">
                <h4 className="font-medium">Dharan</h4>
                <p className="text-sm text-muted-foreground">Next-day service</p>
              </div>
              <div className="bg-background p-4 rounded shadow">
                <h4 className="font-medium">Nepalgunj</h4>
                <p className="text-sm text-muted-foreground">Next-day service</p>
              </div>
            </div>
          </div>

          <Button asChild size="lg" className="mt-4">
            <Link href="/coverage">View Full Coverage Map</Link>
          </Button>
        </div>

        {/* Pricing section */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-center">Transparent Pricing</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader className="text-center">
                <CardTitle>Kathmandu Valley</CardTitle>
                <div className="mt-4">
                  <span className="text-3xl font-bold">NPR 150</span>
                  <span className="text-muted-foreground ml-1">starting price</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Standard delivery (same day)
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Up to 1kg package
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Online tracking
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Delivery confirmation
                  </li>
                </ul>
                <Button asChild className="w-full mt-6">
                  <Link href="/quote?service=kathmandu">Get Exact Quote</Link>
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="text-center">
                <CardTitle>Major Cities</CardTitle>
                <div className="mt-4">
                  <span className="text-3xl font-bold">NPR 250</span>
                  <span className="text-muted-foreground ml-1">starting price</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Next-day delivery
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Up to 1kg package
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Online tracking
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    SMS notifications
                  </li>
                </ul>
                <Button asChild className="w-full mt-6">
                  <Link href="/quote?service=major-cities">Get Exact Quote</Link>
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="text-center">
                <CardTitle>Remote Areas</CardTitle>
                <div className="mt-4">
                  <span className="text-3xl font-bold">NPR 350</span>
                  <span className="text-muted-foreground ml-1">starting price</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    2-5 day delivery
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Up to 1kg package
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Online tracking
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Specialized handling
                  </li>
                </ul>
                <Button asChild className="w-full mt-6">
                  <Link href="/quote?service=remote-areas">Get Exact Quote</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
          <p className="text-center text-sm text-muted-foreground mt-6">
            Prices vary based on weight, dimensions, and exact locations. Use our quote calculator for precise pricing.
          </p>
        </div>

        {/* Testimonials */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-center">What Our Customers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  <div className="mr-4">
                    <Image
                      src="/images/testimonials/customer1.jpg"
                      alt="Anita Shrestha - Online Store Owner"
                      width={60}
                      height={60}
                      className="rounded-full"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold">Anita Shrestha</h3>
                    <p className="text-sm text-muted-foreground">Online Store Owner, Kathmandu</p>
                  </div>
                </div>
                <p className="italic">
                  "Nepal Air Export has been crucial for my online business. Their same-day delivery in Kathmandu and
                  reliable nationwide service has helped me grow my customer base across Nepal. Highly recommended!"
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  <div className="mr-4">
                    <Image
                      src="/images/testimonials/customer2.jpg"
                      alt="Rajesh Tamang - Business Owner"
                      width={60}
                      height={60}
                      className="rounded-full"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold">Rajesh Tamang</h3>
                    <p className="text-sm text-muted-foreground">Business Owner, Pokhara</p>
                  </div>
                </div>
                <p className="italic">
                  "I've been using Nepal Air Export for my business shipments between Pokhara and Kathmandu for over a
                  year. Their next-day service is consistently reliable, and their tracking system keeps me informed
                  every step of the way."
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-3xl mx-auto mb-16">
          <h2 className="text-2xl font-bold mb-6 text-center">Frequently Asked Questions</h2>

          <div className="space-y-6">
            <div className="border rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2">How do I schedule a pickup in Nepal?</h3>
              <p>
                You can schedule a pickup through our website, mobile app, or by calling our customer service. For
                Kathmandu Valley, we offer pickups within 1 hour of booking during business hours. For other locations
                in Nepal, pickups are typically scheduled for the next business day.
              </p>
            </div>

            <div className="border rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2">What are your delivery times across Nepal?</h3>
              <p>
                We offer same-day delivery within Kathmandu Valley for orders placed before 2 PM. For major cities like
                Pokhara, Biratnagar, and Birgunj, we provide next-day delivery. Remote areas typically take 2-5 business
                days depending on location and accessibility.
              </p>
            </div>

            <div className="border rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2">How can I track my package in Nepal?</h3>
              <p>
                All shipments include real-time tracking. You can track your package on our website or mobile app using
                your tracking number. We also provide SMS notifications at key stages of delivery. For premium services,
                you can opt for detailed tracking with live location updates.
              </p>
            </div>

            <div className="border rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2">What is the maximum weight you can deliver?</h3>
              <p>
                For standard courier services, we accept packages up to 30kg. For heavier items, we offer specialized
                cargo services that can handle shipments up to 1000kg. Please contact our customer service for custom
                quotes on heavy or oversized items.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-bold mb-6">Ready to Send a Package?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Whether you're sending documents, parcels, or larger shipments across Nepal, we have the right solution for
            you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link href="/quote">Get a Quote</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>

        {/* Schema markup for this page */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              name: "Nepal Courier Services",
              serviceType: "Courier and Delivery Services",
              provider: {
                "@type": "LocalBusiness",
                "@id": "https://nepairexport.com/#organization",
              },
              description:
                "Fast, reliable, and affordable parcel delivery services throughout Nepal, from Kathmandu to Pokhara, Biratnagar, Chitwan, and all 77 districts.",
              areaServed: {
                "@type": "Country",
                name: "Nepal",
              },
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Courier Services Catalog",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Same-Day Kathmandu Delivery",
                    },
                    price: "150",
                    priceCurrency: "NPR",
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Next-Day Nepal Delivery",
                    },
                    price: "250",
                    priceCurrency: "NPR",
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Remote Area Delivery",
                    },
                    price: "350",
                    priceCurrency: "NPR",
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
                  name: "How do I schedule a pickup in Nepal?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "You can schedule a pickup through our website, mobile app, or by calling our customer service. For Kathmandu Valley, we offer pickups within 1 hour of booking during business hours. For other locations in Nepal, pickups are typically scheduled for the next business day.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What are your delivery times across Nepal?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "We offer same-day delivery within Kathmandu Valley for orders placed before 2 PM. For major cities like Pokhara, Biratnagar, and Birgunj, we provide next-day delivery. Remote areas typically take 2-5 business days depending on location and accessibility.",
                  },
                },
                {
                  "@type": "Question",
                  name: "How can I track my package in Nepal?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "All shipments include real-time tracking. You can track your package on our website or mobile app using your tracking number. We also provide SMS notifications at key stages of delivery. For premium services, you can opt for detailed tracking with live location updates.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What is the maximum weight you can deliver?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "For standard courier services, we accept packages up to 30kg. For heavier items, we offer specialized cargo services that can handle shipments up to 1000kg. Please contact our customer service for custom quotes on heavy or oversized items.",
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
