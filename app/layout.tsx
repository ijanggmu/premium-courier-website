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
  title: "SwiftElite Courier Nepal | Premium Delivery & Parcel Services in Nepal",
  description:
    "Nepal's leading courier service for fast, reliable parcel delivery across Kathmandu and nationwide. International shipping, express delivery, and specialized handling services.",
  keywords:
    "courier service Nepal, send parcel Nepal, package delivery Kathmandu, international shipping Nepal, express courier Nepal",
  openGraph: {
    title: "SwiftElite Courier Nepal | Premium Delivery & Parcel Services",
    description: "Nepal's trusted courier service for fast, reliable parcel delivery across Kathmandu and nationwide.",
    url: "https://swiftelite.np",
    siteName: "SwiftElite Courier Nepal",
    locale: "en_US",
    type: "website",
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
        <link rel="canonical" href="https://swiftelite.np" />
        <meta name="geo.region" content="NP" />
        <meta name="geo.placename" content="Kathmandu" />
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
              name: "SwiftElite Courier Nepal",
              image: "https://swiftelite.np/logo.png",
              url: "https://swiftelite.np",
              telephone: "+977-1-4XXXXXX",
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
              sameAs: ["https://www.facebook.com/swiftelitenepal", "https://www.instagram.com/swiftelitenepal"],
            }),
          }}
        />
      </body>
    </html>
  )
}
