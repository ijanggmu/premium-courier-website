import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowRight, FileText, HelpCircle, Mail, MessageSquare, Phone } from "lucide-react"

export default function HelpCenter() {
  return (
    <div className="py-12 md:py-16">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Help Center</h1>
          <p className="text-lg text-muted-foreground">
            Find answers to common questions or get in touch with our support team.
          </p>
        </div>

        <Tabs defaultValue="faq" className="max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="faq">FAQs</TabsTrigger>
            <TabsTrigger value="guides">Shipping Guides</TabsTrigger>
            <TabsTrigger value="contact">Contact Support</TabsTrigger>
          </TabsList>

          <TabsContent value="faq">
            <div className="grid gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Frequently Asked Questions</CardTitle>
                  <CardDescription>Quick answers to common questions about our services.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-6">
                    <div>
                      <h3 className="font-semibold text-lg mb-2">How do I track my package?</h3>
                      <p className="text-muted-foreground">
                        You can track your package by entering your tracking number on our Track & Trace page or by
                        clicking the tracking link in your confirmation email.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">What are your delivery hours?</h3>
                      <p className="text-muted-foreground">
                        Standard deliveries are made between 9:00 AM and 7:00 PM local time, Monday through Friday.
                        Premium and Elite services offer extended delivery hours and weekend options.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">How do I change my delivery address?</h3>
                      <p className="text-muted-foreground">
                        To change your delivery address, please contact our customer service team as soon as possible
                        with your tracking number. Address changes may be subject to additional fees and delivery
                        delays.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">What if I'm not available to receive my package?</h3>
                      <p className="text-muted-foreground">
                        If you're not available, our courier will leave a delivery attempt notice with instructions for
                        rescheduling or pickup. Premium and Elite customers can set delivery preferences in advance.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">How do I file a claim for a damaged package?</h3>
                      <p className="text-muted-foreground">
                        To file a claim, please contact our customer service team within 5 business days of delivery.
                        You'll need your tracking number and photos of the damaged items and packaging.
                      </p>
                    </div>
                  </div>
                  <div className="pt-4">
                    <Button asChild variant="outline" className="w-full">
                      <Link href="/faq" className="flex items-center justify-center gap-2">
                        View All FAQs <ArrowRight className="h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="guides">
            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Packaging Guidelines</CardTitle>
                  <CardDescription>Learn how to properly package your items for safe delivery.</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <FileText className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>General Packaging Guidelines</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <FileText className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Fragile Item Packaging</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <FileText className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Electronics Shipping Guide</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <FileText className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Artwork & Antiques Handling</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>International Shipping</CardTitle>
                  <CardDescription>Important information for international shipments.</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <FileText className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Customs Documentation Guide</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <FileText className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Prohibited Items by Country</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <FileText className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Import Duties & Taxes</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <FileText className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>International Transit Times</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Service Guides</CardTitle>
                  <CardDescription>Detailed information about our service offerings.</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <FileText className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Express Delivery Guide</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <FileText className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Specialized Handling Services</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <FileText className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Insurance Coverage Options</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <FileText className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Corporate Account Benefits</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Troubleshooting</CardTitle>
                  <CardDescription>Solutions for common shipping issues.</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <FileText className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Delivery Delays Guide</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <FileText className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Missing Package Procedures</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <FileText className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Damage Claim Process</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <FileText className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Refund & Billing Issues</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="contact">
            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Contact Support</CardTitle>
                  <CardDescription>Get in touch with our customer service team.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium">Phone Support</h3>
                      <p className="text-muted-foreground">Available Monday-Friday, 8AM-8PM</p>
                      <p className="font-medium mt-1">+1 (800) 123-4567</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium">Email Support</h3>
                      <p className="text-muted-foreground">Response within 24 hours</p>
                      <p className="font-medium mt-1">support@swiftelite.com</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <MessageSquare className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium">Live Chat</h3>
                      <p className="text-muted-foreground">Available 24/7 for Premium & Elite customers</p>
                      <Button variant="outline" className="mt-2">
                        Start Chat
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Self-Service Options</CardTitle>
                  <CardDescription>Quick links to common support tasks.</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4">
                    <Button variant="outline" className="justify-start">
                      <HelpCircle className="mr-2 h-4 w-4" /> Track a Package
                    </Button>
                    <Button variant="outline" className="justify-start">
                      <HelpCircle className="mr-2 h-4 w-4" /> Schedule a Pickup
                    </Button>
                    <Button variant="outline" className="justify-start">
                      <HelpCircle className="mr-2 h-4 w-4" /> Request a Delivery Change
                    </Button>
                    <Button variant="outline" className="justify-start">
                      <HelpCircle className="mr-2 h-4 w-4" /> File a Claim
                    </Button>
                    <Button variant="outline" className="justify-start">
                      <HelpCircle className="mr-2 h-4 w-4" /> Request a Refund
                    </Button>
                    <Button variant="outline" className="justify-start">
                      <HelpCircle className="mr-2 h-4 w-4" /> Get a Price Quote
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
