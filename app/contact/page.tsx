import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import ContactForm from "@/components/contact-form"
import ContactInfo from "@/components/contact-info"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Contact Nepal Air Export | Customer Support & Locations",
  description:
    "Contact Nepal Air Export for parcel delivery, tracking assistance, or business inquiries. Reach our Kathmandu office or find your nearest branch.",
  keywords:
    "contact courier Nepal, Nepal Air Export contact, courier service Kathmandu contact, parcel delivery contact Nepal",
  openGraph: {
    title: "Contact Nepal Air Export | Customer Support & Locations",
    description: "Contact Nepal Air Export for parcel delivery, tracking assistance, or business inquiries.",
    url: "https://nepairexport.com/contact",
    images: [
      {
        url: "https://nepairexport.com/images/og-contact.jpg",
        width: 1200,
        height: 630,
        alt: "Nepal Air Export - Contact Us",
      },
    ],
  },
}

export default function ContactPage() {
  return (
    <div className="py-12 md:py-16">
      <div className="container">
        {/* Breadcrumbs for SEO */}
        <div className="text-sm text-muted-foreground mb-8">
          <Link href="/" className="hover:underline">
            Home
          </Link>
          <span className="mx-2">/</span>
          <span>Contact</span>
        </div>

        <div className="max-w-4xl mx-auto text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-lg text-muted-foreground">
            Get in touch with our team for premium courier support and service inquiries across Nepal.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <ContactForm />

            {/* Quick Actions */}
            <div className="mt-8">
              <h2 className="text-xl font-bold mb-4">Quick Actions</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Button asChild variant="outline" className="justify-start h-auto py-3">
                  <Link href="/quote" className="flex items-center">
                    <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                      />
                    </svg>
                    <span>Get a Shipping Quote</span>
                  </Link>
                </Button>
                <Button asChild variant="outline" className="justify-start h-auto py-3">
                  <Link href="/track" className="flex items-center">
                    <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    <span>Track a Package</span>
                  </Link>
                </Button>
                <Button asChild variant="outline" className="justify-start h-auto py-3">
                  <Link href="/services/international-exports" className="flex items-center">
                    <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
                      />
                    </svg>
                    <span>Export Services</span>
                  </Link>
                </Button>
                <Button asChild variant="outline" className="justify-start h-auto py-3">
                  <Link href="/faq" className="flex items-center">
                    <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span>FAQs</span>
                  </Link>
                </Button>
              </div>
            </div>
          </div>

          <div>
            <ContactInfo />

            {/* Map */}
            <div className="mt-8">
              <Card>
                <CardHeader>
                  <CardTitle>Our Kathmandu Head Office</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="relative h-[300px] w-full">
                    <Image
                      src="/images/kathmandu-office-map.jpg"
                      alt="Map showing Nepal Air Export head office location in Durbar Marg, Kathmandu"
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Button asChild>
                        <a
                          href="https://maps.google.com/?q=Durbar+Marg+Kathmandu+Nepal"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Open in Google Maps
                        </a>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-6 text-center">Our Branches in Nepal</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="border rounded-lg p-6">
              <div className="relative h-40 mb-4 rounded-md overflow-hidden">
                <Image
                  src="/images/branches/kathmandu.jpg"
                  alt="Nepal Air Export Kathmandu Head Office"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>
              <h3 className="font-semibold mb-2">Kathmandu (Head Office)</h3>
              <p className="text-sm text-muted-foreground mb-2">Durbar Marg, Kathmandu 44600</p>
              <p className="text-sm">Phone: +977-1-XXXXXXX</p>
              <p className="text-sm">Hours: 9:00 AM - 6:00 PM (Sun-Fri)</p>
            </div>

            <div className="border rounded-lg p-6">
              <div className="relative h-40 mb-4 rounded-md overflow-hidden">
                <Image
                  src="/images/branches/pokhara.jpg"
                  alt="Nepal Air Export Pokhara Branch"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>
              <h3 className="font-semibold mb-2">Pokhara Branch</h3>
              <p className="text-sm text-muted-foreground mb-2">Lakeside, Pokhara 33700</p>
              <p className="text-sm">Phone: +977-61-XXXXXX</p>
              <p className="text-sm">Hours: 9:00 AM - 6:00 PM (Sun-Fri)</p>
            </div>

            <div className="border rounded-lg p-6">
              <div className="relative h-40 mb-4 rounded-md overflow-hidden">
                <Image
                  src="/images/branches/biratnagar.jpg"
                  alt="Nepal Air Export Biratnagar Branch"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>
              <h3 className="font-semibold mb-2">Biratnagar Branch</h3>
              <p className="text-sm text-muted-foreground mb-2">Main Road, Biratnagar 56613</p>
              <p className="text-sm">Phone: +977-21-XXXXXX</p>
              <p className="text-sm">Hours: 9:00 AM - 6:00 PM (Sun-Fri)</p>
            </div>

            <div className="border rounded-lg p-6">
              <div className="relative h-40 mb-4 rounded-md overflow-hidden">
                <Image
                  src="/images/branches/birgunj.jpg"
                  alt="Nepal Air Export Birgunj Branch"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>
              <h3 className="font-semibold mb-2">Birgunj Branch</h3>
              <p className="text-sm text-muted-foreground mb-2">Adarshnagar, Birgunj 44300</p>
              <p className="text-sm">Phone: +977-51-XXXXXX</p>
              <p className="text-sm">Hours: 9:00 AM - 6:00 PM (Sun-Fri)</p>
            </div>

            <div className="border rounded-lg p-6">
              <div className="relative h-40 mb-4 rounded-md overflow-hidden">
                <Image
                  src="/images/branches/butwal.jpg"
                  alt="Nepal Air Export Butwal Branch"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>
              <h3 className="font-semibold mb-2">Butwal Branch</h3>
              <p className="text-sm text-muted-foreground mb-2">Milanchowk, Butwal 32900</p>
              <p className="text-sm">Phone: +977-71-XXXXXX</p>
              <p className="text-sm">Hours: 9:00 AM - 6:00 PM (Sun-Fri)</p>
            </div>

            <div className="border rounded-lg p-6">
              <div className="relative h-40 mb-4 rounded-md overflow-hidden">
                <Image
                  src="/images/branches/nepalgunj.jpg"
                  alt="Nepal Air Export Nepalgunj Branch"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>
              <h3 className="font-semibold mb-2">Nepalgunj Branch</h3>
              <p className="text-sm text-muted-foreground mb-2">Dhamboji, Nepalgunj 21900</p>
              <p className="text-sm">Phone: +977-81-XXXXXX</p>
              <p className="text-sm">Hours: 9:00 AM - 6:00 PM (Sun-Fri)</p>
            </div>
          </div>
        </div>

        {/* Business Inquiries Section */}
        <div className="mt-16 max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-6 text-center">Business Inquiries</h2>
          <Card>
            <CardContent className="pt-6">
              <div className="text-center mb-6">
                <p className="mb-4">
                  For business partnerships, corporate accounts, or bulk shipping inquiries, please contact our
                  dedicated business team:
                </p>
                <div className="font-medium">
                  <p>Email: business@nepairexport.com</p>
                  <p>Phone: +977-1-XXXXXXX (ext. 2)</p>
                </div>
              </div>
              <div className="flex justify-center">
                <Button asChild>
                  <Link href="/services/corporate-solutions">Learn About Corporate Solutions</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Schema markup for this page */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ContactPage",
              name: "Contact Nepal Air Export",
              description: "Contact Nepal Air Export for parcel delivery, tracking assistance, or business inquiries.",
              mainEntity: {
                "@type": "Organization",
                "@id": "https://nepairexport.com/#organization",
                name: "Nepal Air Export",
                telephone: "+977-1-XXXXXXX",
                email: "info@nepairexport.com",
                address: {
                  "@type": "PostalAddress",
                  streetAddress: "Durbar Marg",
                  addressLocality: "Kathmandu",
                  postalCode: "44600",
                  addressCountry: "NP",
                },
                location: {
                  "@type": "Place",
                  geo: {
                    "@type": "GeoCoordinates",
                    latitude: 27.7172,
                    longitude: 85.324,
                  },
                },
              },
            }),
          }}
        />
      </div>
    </div>
  )
}
