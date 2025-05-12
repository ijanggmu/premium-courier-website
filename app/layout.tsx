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
  title: "Nepal Air Export | #1 Courier & International Shipping Service in Nepal",
  description:
    "Nepal's leading courier service for fast, reliable parcel delivery and international exports. Same-day delivery in Kathmandu and nationwide shipping with real-time tracking.",
  keywords:
    "nepal air export, courier service nepal, send parcel nepal, international shipping nepal, export from nepal, package delivery kathmandu, cargo nepal, courier kathmandu, nepal export service",
  openGraph: {
    title: "Nepal Air Export | #1 Courier & International Shipping Service",
    description:
      "Nepal's trusted courier service for domestic delivery and international exports with real-time tracking.",
    url: "https://nepairexport.com",
    siteName: "Nepal Air Export",
    locale: "en_US",
    type: "website",
  },
  alternates: {
    canonical: "https://nepairexport.com",
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
        <meta name="google-site-verification" content="your-verification-code" />
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
              name: "Nepal Air Export",
              image: "https://nepairexport.com/logo.png",
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
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 27.7172,
                longitude: 85.324,
              },
              openingHoursSpecification: {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                opens: "09:00",
                closes: "18:00",
              },
              sameAs: ["https://www.facebook.com/nepairexport", "https://www.instagram.com/nepairexport"],
              priceRange: "$$",
              servesCuisine: "Courier and Shipping Services",
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
                name: "Nepal Air Export",
              },
              areaServed: {
                "@type": "Country",
                name: "Nepal",
              },
              description:
                "Fast, reliable parcel delivery across Nepal and international export services with real-time tracking.",
              offers: {
                "@type": "Offer",
                price: "150",
                priceCurrency: "NPR",
              },
            }),
          }}
        />
      </body>
    </html>
  )
}
