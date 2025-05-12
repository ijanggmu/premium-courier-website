import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Clock, Mail, MapPin, Phone } from "lucide-react"

export default function ContactInfo() {
  return (
    <div className="space-y-8">
      <Card>
        <CardHeader>
          <CardTitle>Contact Information</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-start gap-4">
            <div className="bg-primary/10 p-3 rounded-full">
              <Phone className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h3 className="font-medium">Phone</h3>
              <p className="text-muted-foreground">Customer Service</p>
              <p className="font-medium mt-1">+977-1-XXXXXXX</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="bg-primary/10 p-3 rounded-full">
              <Mail className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h3 className="font-medium">Email</h3>
              <p className="text-muted-foreground">Customer Support</p>
              <p className="font-medium mt-1">support@nepairexport.com</p>
              <p className="text-muted-foreground mt-3">Sales Inquiries</p>
              <p className="font-medium mt-1">sales@nepairexport.com</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="bg-primary/10 p-3 rounded-full">
              <MapPin className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h3 className="font-medium">Headquarters</h3>
              <p className="text-muted-foreground mt-1">
                Durbar Marg
                <br />
                Kathmandu 44600
                <br />
                Nepal
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="bg-primary/10 p-3 rounded-full">
              <Clock className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h3 className="font-medium">Business Hours</h3>
              <div className="grid grid-cols-2 gap-x-4 gap-y-2 mt-2">
                <p className="text-muted-foreground">Sunday - Friday:</p>
                <p>9:00 AM - 6:00 PM NPT</p>
                <p className="text-muted-foreground">Saturday:</p>
                <p>Closed</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Priority Support</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground mb-4">
            Premium and Corporate customers receive priority support with dedicated account managers and extended hours.
          </p>
          <div className="bg-muted p-4 rounded-lg">
            <p className="font-medium">Priority Support Line</p>
            <p className="text-primary font-bold">+977-1-XXXXXXX (ext. 1)</p>
            <p className="text-sm text-muted-foreground mt-2">Available 7 days a week for Premium customers</p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
