import type React from "react"
import type { Metadata } from "next"
import { Mona_Sans as FontSans } from "next/font/google"
import "./globals.css"
import { cn } from "@/lib/utils"
import { ThemeProvider } from "@/components/theme-provider"
import Header from "@/components/header"
import Footer from "@/components/footer"

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://nepairexport.com"),
  title: {
    default: "Nepal Air Export | #1 Courier & International Shipping Service in Nepal",
    template: "%s | Nepal Air Export",
  },
  description:
    "Nepal's leading courier service for fast, reliable parcel delivery and international exports. Same-day delivery in Kathmandu, nationwide shipping, and global export solutions.",
  keywords:
    "nepal air export, courier service nepal, send parcel nepal, package delivery kathmandu, international shipping nepal, export from nepal, nepal export service, cargo service nepal, courier kathmandu, shipping nepal",
  openGraph: {
    title: "Nepal Air Export | #1 Courier & International Shipping Service",
    description:
      "Nepal's trusted courier service for domestic delivery and international exports with real-time tracking.",
    url: "https://nepairexport.com",
    siteName: "Nepal Air Export",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://nepairexport.com/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Nepal Air Export - Courier and International Shipping Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nepal Air Export | #1 Courier & International Shipping Service in Nepal",
    description: "Nepal's leading courier service for fast, reliable parcel delivery and international exports.",
    images: ["https://nepairexport.com/images/twitter-image.jpg"],
  },
  alternates: {
    canonical: "https://nepairexport.com",
    languages: {
      "en-US": "https://nepairexport.com",
      "ne-NP": "https://nepairexport.com/ne",
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="canonical" href="https://nepairexport.com" />
        <meta name="geo.region" content="NP" />
        <meta name="geo.placename" content="Kathmandu" />
        <meta name="geo.position" content="27.7172;85.324" />
        <meta name="ICBM" content="27.7172, 85.324" />
      </head>
      <body className={cn("min-h-screen bg-background font-sans antialiased", fontSans.variable)}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <div className="relative flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>

        {/* Local Business Schema Markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "@id": "https://nepairexport.com/#organization",
              name: "Nepal Air Export",
              image: "https://nepairexport.com/images/nepal-air-export-logo.jpg",
              logo: "https://nepairexport.com/images/nepal-air-export-logo.jpg",
              url: "https://nepairexport.com",
              telephone: "+977-1-4XXXXXX",
              description:
                "Nepal's premier courier service for domestic delivery and international exports with real-time tracking and specialized handling.",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Durbar Marg",
                addressLocality: "Kathmandu",
                postalCode: "44600",
                addressCountry: "NP",
                addressRegion: "Bagmati",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 27.7172,
                longitude: 85.324,
              },
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                  opens: "09:00",
                  closes: "18:00",
                },
              ],
              sameAs: [
                "https://www.facebook.com/nepairexport",
                "https://www.instagram.com/nepairexport",
                "https://twitter.com/nepairexport",
                "https://www.linkedin.com/company/nepairexport",
              ],
              priceRange: "$$",
              areaServed: {
                "@type": "Country",
                name: "Nepal",
              },
            }),
          }}
        />

        {/* Service Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              serviceType: "Courier and International Export Service",
              provider: {
                "@type": "LocalBusiness",
                "@id": "https://nepairexport.com/#organization",
              },
              areaServed: {
                "@type": "Country",
                name: "Nepal",
              },
              description:
                "Fast, reliable parcel delivery across Nepal and international export services with real-time tracking.",
              offers: {
                "@type": "AggregateOffer",
                highPrice: "5000",
                lowPrice: "150",
                priceCurrency: "NPR",
                offerCount: "5",
              },
              serviceOutput: "Package Delivery and Export Services",
              termsOfService: "https://nepairexport.com/terms",
            }),
          }}
        />

        {/* BreadcrumbList Schema - Will be overridden by page-specific breadcrumbs */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Home",
                  item: "https://nepairexport.com",
                },
              ],
            }),
          }}
        />
      </body>
    </html>
  )
}
