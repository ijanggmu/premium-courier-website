import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function TermsPage() {
  return (
    <div className="py-12 md:py-16">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Terms & Conditions</h1>
          <p className="text-lg text-muted-foreground">
            Please review our terms and conditions carefully before using our services.
          </p>
        </div>

        <Tabs defaultValue="terms" className="max-w-3xl mx-auto">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="terms">Terms of Service</TabsTrigger>
            <TabsTrigger value="privacy">Privacy Policy</TabsTrigger>
            <TabsTrigger value="shipping">Shipping Terms</TabsTrigger>
          </TabsList>

          <TabsContent value="terms" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Terms of Service</CardTitle>
              </CardHeader>
              <CardContent className="prose max-w-none">
                <p className="text-sm text-muted-foreground mb-4">Last updated: May 8, 2025</p>

                <h3 className="text-lg font-semibold mt-6 mb-2">1. Acceptance of Terms</h3>
                <p>
                  By accessing or using SwiftElite's services, you agree to be bound by these Terms of Service. If you
                  do not agree to all the terms and conditions, you may not use our services.
                </p>

                <h3 className="text-lg font-semibold mt-6 mb-2">2. Service Description</h3>
                <p>
                  SwiftElite provides premium courier services including but not limited to express delivery,
                  international shipping, and specialized handling. We reserve the right to modify, suspend, or
                  discontinue any aspect of our services at any time.
                </p>

                <h3 className="text-lg font-semibold mt-6 mb-2">3. User Accounts</h3>
                <p>
                  When you create an account with us, you must provide accurate and complete information. You are
                  responsible for maintaining the confidentiality of your account credentials and for all activities
                  that occur under your account.
                </p>

                <h3 className="text-lg font-semibold mt-6 mb-2">4. Service Limitations</h3>
                <p>
                  SwiftElite strives to provide reliable and timely delivery services, but we cannot guarantee delivery
                  times in all circumstances. Factors beyond our control, such as weather conditions, customs delays, or
                  force majeure events may affect delivery schedules.
                </p>

                <h3 className="text-lg font-semibold mt-6 mb-2">5. Prohibited Items</h3>
                <p>
                  Users may not ship prohibited items, including but not limited to hazardous materials, illegal
                  substances, firearms, live animals, and perishable goods without proper packaging. SwiftElite reserves
                  the right to refuse, hold, or return any package containing prohibited items.
                </p>

                <h3 className="text-lg font-semibold mt-6 mb-2">6. Liability Limitations</h3>
                <p>
                  SwiftElite's liability for any loss or damage to a shipment is limited to the declared value of the
                  shipment or the maximum liability set forth in applicable international conventions, whichever is
                  lower. Additional insurance coverage is available for purchase.
                </p>

                <h3 className="text-lg font-semibold mt-6 mb-2">7. Claims Process</h3>
                <p>
                  Claims for loss or damage must be filed within 15 days of the scheduled delivery date. Claims must
                  include the tracking number, description of the loss or damage, and supporting documentation.
                </p>

                <h3 className="text-lg font-semibold mt-6 mb-2">8. Governing Law</h3>
                <p>
                  These Terms of Service shall be governed by and construed in accordance with the laws of the State of
                  New York, without regard to its conflict of law provisions.
                </p>

                <h3 className="text-lg font-semibold mt-6 mb-2">9. Changes to Terms</h3>
                <p>
                  SwiftElite reserves the right to modify these Terms of Service at any time. We will provide notice of
                  significant changes through our website or by email. Your continued use of our services after such
                  modifications constitutes your acceptance of the updated terms.
                </p>

                <h3 className="text-lg font-semibold mt-6 mb-2">10. Contact Information</h3>
                <p>
                  If you have any questions about these Terms of Service, please contact us at legal@swiftelite.com or
                  call our customer service at +1 (800) 123-4567.
                </p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="privacy" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Privacy Policy</CardTitle>
              </CardHeader>
              <CardContent className="prose max-w-none">
                <p className="text-sm text-muted-foreground mb-4">Last updated: May 8, 2025</p>

                <h3 className="text-lg font-semibold mt-6 mb-2">1. Information We Collect</h3>
                <p>
                  SwiftElite collects personal information such as name, address, email, phone number, and payment
                  information when you use our services. We also collect information about your shipments, including
                  origin, destination, package details, and tracking data.
                </p>

                <h3 className="text-lg font-semibold mt-6 mb-2">2. How We Use Your Information</h3>
                <p>We use your information to:</p>
                <ul className="list-disc pl-6 mb-4">
                  <li>Provide and improve our courier services</li>
                  <li>Process and track shipments</li>
                  <li>Communicate with you about your shipments and account</li>
                  <li>Process payments and billing</li>
                  <li>Comply with legal obligations</li>
                  <li>Prevent fraud and enhance security</li>
                </ul>

                <h3 className="text-lg font-semibold mt-6 mb-2">3. Information Sharing</h3>
                <p>
                  We may share your information with third parties who help us provide our services, such as payment
                  processors, delivery partners, and customs authorities. We do not sell your personal information to
                  third parties for marketing purposes.
                </p>

                <h3 className="text-lg font-semibold mt-6 mb-2">4. Data Security</h3>
                <p>
                  SwiftElite implements appropriate technical and organizational measures to protect your personal
                  information against unauthorized access, alteration, disclosure, or destruction.
                </p>

                <h3 className="text-lg font-semibold mt-6 mb-2">5. Your Rights</h3>
                <p>
                  Depending on your location, you may have rights regarding your personal information, including the
                  right to access, correct, delete, or restrict processing of your data. To exercise these rights,
                  please contact our Privacy Office.
                </p>

                <h3 className="text-lg font-semibold mt-6 mb-2">6. Cookies and Tracking</h3>
                <p>
                  Our website uses cookies and similar technologies to enhance your experience, analyze usage, and
                  assist in our marketing efforts. You can manage your cookie preferences through your browser settings.
                </p>

                <h3 className="text-lg font-semibold mt-6 mb-2">7. International Data Transfers</h3>
                <p>
                  As a global courier service, we may transfer your information to countries outside your country of
                  residence. We ensure appropriate safeguards are in place to protect your information during such
                  transfers.
                </p>

                <h3 className="text-lg font-semibold mt-6 mb-2">8. Changes to Privacy Policy</h3>
                <p>
                  We may update this Privacy Policy periodically to reflect changes in our practices or legal
                  requirements. We will notify you of significant changes through our website or by email.
                </p>

                <h3 className="text-lg font-semibold mt-6 mb-2">9. Contact Information</h3>
                <p>
                  If you have questions or concerns about our Privacy Policy or data practices, please contact our
                  Privacy Office at privacy@swiftelite.com or call +1 (800) 123-4567.
                </p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="shipping" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Shipping Terms</CardTitle>
              </CardHeader>
              <CardContent className="prose max-w-none">
                <p className="text-sm text-muted-foreground mb-4">Last updated: May 8, 2025</p>

                <h3 className="text-lg font-semibold mt-6 mb-2">1. Service Levels and Delivery Times</h3>
                <p>
                  SwiftElite offers various service levels with different delivery timeframes. Delivery times are
                  estimates and not guaranteed unless explicitly stated for specific premium services. Factors beyond
                  our control may affect actual delivery times.
                </p>

                <h3 className="text-lg font-semibold mt-6 mb-2">2. Packaging Requirements</h3>
                <p>
                  Customers are responsible for properly packaging items to ensure safe transit. SwiftElite reserves the
                  right to refuse inadequately packaged items or to repackage them at an additional cost. Specialized
                  packaging services are available for fragile or valuable items.
                </p>

                <h3 className="text-lg font-semibold mt-6 mb-2">3. Weight and Dimensions</h3>
                <p>
                  Shipments must comply with weight and dimension restrictions for the selected service level.
                  SwiftElite may reweigh and remeasure packages and adjust charges accordingly if discrepancies are
                  found.
                </p>

                <h3 className="text-lg font-semibold mt-6 mb-2">4. Customs and International Shipping</h3>
                <p>
                  For international shipments, customers are responsible for providing accurate customs documentation.
                  SwiftElite is not responsible for delays, confiscation, or additional charges resulting from customs
                  inspection or incomplete documentation.
                </p>

                <h3 className="text-lg font-semibold mt-6 mb-2">5. Liability and Insurance</h3>
                <p>
                  SwiftElite's liability for loss or damage is limited to the declared value of the shipment or the
                  maximum liability set by applicable laws and conventions. Additional insurance coverage is available
                  for purchase and is recommended for valuable items.
                </p>

                <h3 className="text-lg font-semibold mt-6 mb-2">6. Delivery Attempts and Holding Periods</h3>
                <p>
                  SwiftElite will make up to three delivery attempts. If delivery cannot be completed, packages will be
                  held at a local service center for up to 7 days before being returned to the sender. Additional fees
                  may apply for redelivery or return shipping.
                </p>

                <h3 className="text-lg font-semibold mt-6 mb-2">7. Prohibited Items</h3>
                <p>
                  Certain items are prohibited from shipping, including but not limited to hazardous materials, illegal
                  substances, firearms, live animals, and perishable goods without proper packaging. A complete list of
                  prohibited items is available on our website.
                </p>

                <h3 className="text-lg font-semibold mt-6 mb-2">8. Claims Process</h3>
                <p>
                  Claims for loss or damage must be submitted within 15 days of the scheduled delivery date. Claims must
                  include the tracking number, description of the loss or damage, and supporting documentation such as
                  photos and value verification.
                </p>

                <h3 className="text-lg font-semibold mt-6 mb-2">9. Payment Terms</h3>
                <p>
                  Payment is required at the time of shipping unless you have an approved corporate account. For
                  corporate accounts, payment terms are net 30 days unless otherwise specified in your contract. Late
                  payments may incur additional fees.
                </p>

                <h3 className="text-lg font-semibold mt-6 mb-2">10. Service Modifications</h3>
                <p>
                  Requests for service modifications, such as address changes or delivery holds, must be submitted
                  through our customer service or online portal. Additional fees may apply, and not all modifications
                  can be accommodated once a shipment is in transit.
                </p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
