import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Nepal Delivery Services | SwiftElite Courier Nepal",
  description:
    "Reliable courier and parcel delivery services across Nepal. Same-day delivery in Kathmandu and next-day delivery to major cities.",
  keywords: "Nepal delivery service, Kathmandu courier, parcel delivery Nepal, same day delivery Kathmandu",
}

export default function NepalDeliveryPage() {
  return (
    <div className="py-12 md:py-16">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Courier Services Across Nepal</h1>
          <p className="text-lg text-muted-foreground">
            Fast, reliable, and secure parcel delivery services throughout Nepal, from Kathmandu to Pokhara, Chitwan,
            and beyond.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <Card>
            <CardHeader>
              <CardTitle>Same-Day Kathmandu Delivery</CardTitle>
              <CardDescription>For urgent deliveries within the Kathmandu Valley</CardDescription>
            </CardHeader>
            <CardContent>
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
                <Link href="/quote">Get a Quote</Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Next-Day Nepal Delivery</CardTitle>
              <CardDescription>Fast delivery to major cities across Nepal</CardDescription>
            </CardHeader>
            <CardContent>
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
                <Link href="/quote">Get a Quote</Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Remote Area Delivery</CardTitle>
              <CardDescription>Reaching every corner of Nepal</CardDescription>
            </CardHeader>
            <CardContent>
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
                <Link href="/quote">Get a Quote</Link>
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="bg-muted rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold mb-4">Why Choose SwiftElite for Delivery in Nepal?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-semibold mb-2">Extensive Local Knowledge</h3>
              <p>
                Our team has unparalleled knowledge of Nepal's geography, traffic patterns, and addressing systems,
                ensuring efficient deliveries even to locations without formal addresses.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Reliable During Challenges</h3>
              <p>
                We maintain service even during challenging conditions like monsoon season, festivals, or road closures,
                with alternative routes and contingency plans.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Competitive Local Pricing</h3>
              <p>
                Our pricing is transparent and competitive, with special rates for regular customers and businesses with
                high shipping volumes.
              </p>
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

        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Service Coverage in Nepal</h2>
          <p className="text-lg text-muted-foreground mb-6">
            We deliver to all 77 districts across Nepal's 7 provinces, with specialized services for major urban
            centers.
          </p>

          <div className="mb-8">
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
      </div>
    </div>
  )
}
