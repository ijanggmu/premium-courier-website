import type { Metadata } from "next"
import ContactForm from "@/components/contact-form"
import ContactInfo from "@/components/contact-info"

export const metadata: Metadata = {
  title: "Contact SwiftElite Courier Nepal | Customer Support & Locations",
  description:
    "Contact SwiftElite Courier Nepal for parcel delivery, tracking assistance, or business inquiries. Reach our Kathmandu office or find your nearest branch.",
  keywords:
    "contact courier Nepal, SwiftElite contact, courier service Kathmandu contact, parcel delivery contact Nepal",
}

export default function ContactPage() {
  return (
    <div className="py-12 md:py-16">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-lg text-muted-foreground">
            Get in touch with our team for premium courier support and service inquiries across Nepal.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <ContactForm />
          <ContactInfo />
        </div>

        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-6 text-center">Our Branches in Nepal</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="border rounded-lg p-6">
              <h3 className="font-semibold mb-2">Kathmandu (Head Office)</h3>
              <p className="text-sm text-muted-foreground mb-2">Durbar Marg, Kathmandu 44600</p>
              <p className="text-sm">Phone: +977-1-XXXXXXX</p>
              <p className="text-sm">Hours: 9:00 AM - 6:00 PM (Sun-Fri)</p>
            </div>

            <div className="border rounded-lg p-6">
              <h3 className="font-semibold mb-2">Pokhara Branch</h3>
              <p className="text-sm text-muted-foreground mb-2">Lakeside, Pokhara 33700</p>
              <p className="text-sm">Phone: +977-61-XXXXXX</p>
              <p className="text-sm">Hours: 9:00 AM - 6:00 PM (Sun-Fri)</p>
            </div>

            <div className="border rounded-lg p-6">
              <h3 className="font-semibold mb-2">Biratnagar Branch</h3>
              <p className="text-sm text-muted-foreground mb-2">Main Road, Biratnagar 56613</p>
              <p className="text-sm">Phone: +977-21-XXXXXX</p>
              <p className="text-sm">Hours: 9:00 AM - 6:00 PM (Sun-Fri)</p>
            </div>

            <div className="border rounded-lg p-6">
              <h3 className="font-semibold mb-2">Birgunj Branch</h3>
              <p className="text-sm text-muted-foreground mb-2">Adarshnagar, Birgunj 44300</p>
              <p className="text-sm">Phone: +977-51-XXXXXX</p>
              <p className="text-sm">Hours: 9:00 AM - 6:00 PM (Sun-Fri)</p>
            </div>

            <div className="border rounded-lg p-6">
              <h3 className="font-semibold mb-2">Butwal Branch</h3>
              <p className="text-sm text-muted-foreground mb-2">Milanchowk, Butwal 32900</p>
              <p className="text-sm">Phone: +977-71-XXXXXX</p>
              <p className="text-sm">Hours: 9:00 AM - 6:00 PM (Sun-Fri)</p>
            </div>

            <div className="border rounded-lg p-6">
              <h3 className="font-semibold mb-2">Nepalgunj Branch</h3>
              <p className="text-sm text-muted-foreground mb-2">Dhamboji, Nepalgunj 21900</p>
              <p className="text-sm">Phone: +977-81-XXXXXX</p>
              <p className="text-sm">Hours: 9:00 AM - 6:00 PM (Sun-Fri)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
