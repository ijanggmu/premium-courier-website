import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, CheckCircle } from "lucide-react"

export const metadata: Metadata = {
  title: "Same-Day Courier Service in Kathmandu | Nepal Air Export",
  description:
    "Fastest same-day courier and parcel delivery service in Kathmandu Valley. Reliable delivery across Kathmandu, Lalitpur, and Bhaktapur within hours.",
  keywords:
    "same day delivery kathmandu, courier service kathmandu, parcel delivery kathmandu valley, fast courier kathmandu, send package kathmandu",
}

export default function KathmanduDeliveryPage() {
  return (
    <div className="py-12 md:py-16">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Same-Day Courier Service in Kathmandu Valley</h1>
          <p className="text-lg text-muted-foreground">
            The fastest and most reliable same-day parcel delivery service across Kathmandu, Lalitpur, and Bhaktapur
            with real-time tracking.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-16">
          <div>
            <h2 className="text-2xl font-bold mb-4">Kathmandu's Most Trusted Courier Service</h2>
            <p className="mb-4">
              When you need something delivered within Kathmandu Valley today, Nepal Air Export provides the fastest and
              most reliable same-day courier service for documents, parcels, and packages of all sizes.
            </p>
            <p className="mb-4">
              Our local couriers know every street, alley, and landmark in Kathmandu, ensuring your deliveries always
              arrive on time, even to addresses without formal numbering systems.
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium">Delivery Within Hours</p>
                  <p className="text-sm text-muted-foreground">Most parcels delivered within 2-4 hours of pickup</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium">Real-Time GPS Tracking</p>
                  <p className="text-sm text-muted-foreground">
                    Track your parcel's journey through Kathmandu in real time
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium">Delivery Confirmation</p>
                  <p className="text-sm text-muted-foreground">Get photo proof and signature upon delivery</p>
                </div>
              </li>
            </ul>
            <Button asChild size="lg">
              <Link href="/quote?area=kathmandu">Schedule a Pickup</Link>
            </Button>
          </div>
          <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
            <img
              src="/placeholder.svg?height=400&width=600"
              alt="Same-day courier service in Kathmandu Nepal with motorcycle delivery"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-center">Our Kathmandu Delivery Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Express 2-Hour Delivery</CardTitle>
                <CardDescription>For urgent documents and parcels</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-3">
                  Our premium service guarantees delivery within 2 hours in Kathmandu Valley (traffic and weather
                  permitting).
                </p>
                <p className="font-medium">Starting at NPR 250</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Same-Day Standard</CardTitle>
                <CardDescription>For regular deliveries within Kathmandu</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-3">
                  Parcels picked up before 2 PM will be delivered the same day, typically within 4-6 hours.
                </p>
                <p className="font-medium">Starting at NPR 150</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Scheduled Deliveries</CardTitle>
                <CardDescription>For businesses with regular needs</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-3">
                  Set up regular pickup and delivery schedules for your business with volume discounts.
                </p>
                <p className="font-medium">Custom pricing based on volume</p>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="bg-muted rounded-lg p-8 mb-16">
          <h2 className="text-2xl font-bold mb-6 text-center">Areas We Serve in Kathmandu Valley</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <MapPin className="h-5 w-5 text-primary mr-2" /> Kathmandu
              </h3>
              <ul className="space-y-2">
                <li>Thamel</li>
                <li>New Road</li>
                <li>Durbar Marg</li>
                <li>Baluwatar</li>
                <li>Lazimpat</li>
                <li>Chabahil</li>
                <li>Bouddha</li>
                <li>Maharajgunj</li>
                <li>And all other areas</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <MapPin className="h-5 w-5 text-primary mr-2" /> Lalitpur
              </h3>
              <ul className="space-y-2">
                <li>Patan</li>
                <li>Jawalakhel</li>
                <li>Kupondole</li>
                <li>Pulchowk</li>
                <li>Jhamsikhel</li>
                <li>Sanepa</li>
                <li>Mangalbazar</li>
                <li>Satdobato</li>
                <li>And all other areas</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <MapPin className="h-5 w-5 text-primary mr-2" /> Bhaktapur
              </h3>
              <ul className="space-y-2">
                <li>Bhaktapur Durbar Square</li>
                <li>Suryabinayak</li>
                <li>Sallaghari</li>
                <li>Lokanthali</li>
                <li>Katunje</li>
                <li>Thimi</li>
                <li>Madhyapur</li>
                <li>Kamalvinayak</li>
                <li>And all other areas</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-center">How Our Kathmandu Delivery Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card className="text-center">
              <CardHeader>
                <CardTitle>1. Schedule</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Book your delivery online, via our app, or by calling our Kathmandu office.</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <CardTitle>2. Pickup</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Our courier arrives at your location to collect your package or document.</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <CardTitle>3. Transport</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Your item is transported securely through Kathmandu's fastest routes.</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <CardTitle>4. Delivery</CardTitle>
              </CardHeader>
              <CardContent>
                <p>We deliver to the recipient and provide you with delivery confirmation.</p>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-bold mb-6">Ready for Same-Day Delivery in Kathmandu?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Whether you're sending urgent documents, business packages, or personal items, our Kathmandu courier service
            ensures your deliveries reach their destination today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link href="/quote?area=kathmandu">Schedule a Pickup</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/contact">Contact Our Kathmandu Office</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
