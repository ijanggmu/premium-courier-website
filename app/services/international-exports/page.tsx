import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Check } from "lucide-react"

export const metadata: Metadata = {
  title: "International Export Services from Nepal | Nepal Air Export",
  description:
    "Premium export services from Nepal to worldwide destinations. Fast, secure shipping for handicrafts, commercial goods, and e-commerce with customs handling.",
  keywords:
    "export from nepal, nepal export service, international shipping nepal, global shipping nepal, cargo export nepal, handicraft export, nepal products export",
}

export default function InternationalExportsPage() {
  return (
    <div className="py-12 md:py-16">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">International Export Services from Nepal</h1>
          <p className="text-lg text-muted-foreground">
            Professional export solutions from Nepal to over 220 countries worldwide with end-to-end tracking, customs
            clearance, and specialized handling.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <Card>
            <CardHeader>
              <CardTitle>Handicraft & Artisan Exports</CardTitle>
              <CardDescription>Specialized handling for Nepal's unique handcrafted items</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                We provide expert handling and packaging for delicate Nepali handicrafts, ensuring they reach
                international customers in perfect condition.
              </p>
              <ul className="list-disc pl-5 mb-4 space-y-1">
                <li>Specialized packaging for fragile items</li>
                <li>Documentation assistance for cultural goods</li>
                <li>Insurance options for high-value crafts</li>
                <li>Partnerships with major handicraft associations</li>
              </ul>
              <Button asChild className="w-full mt-2">
                <Link href="/quote?service=handicraft">Get Export Quote</Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Commercial Cargo Exports</CardTitle>
              <CardDescription>Bulk shipping solutions for businesses</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                Comprehensive export services for Nepali businesses shipping commercial quantities, with volume
                discounts and dedicated account management.
              </p>
              <ul className="list-disc pl-5 mb-4 space-y-1">
                <li>Volume-based pricing</li>
                <li>Customs documentation handling</li>
                <li>Container and palletized shipping</li>
                <li>Business account benefits</li>
              </ul>
              <Button asChild className="w-full mt-2">
                <Link href="/quote?service=commercial">Get Export Quote</Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>E-commerce Export Solutions</CardTitle>
              <CardDescription>Tailored for online sellers shipping internationally</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                Specialized services for Nepal-based e-commerce businesses selling globally, with integration options
                for major platforms.
              </p>
              <ul className="list-disc pl-5 mb-4 space-y-1">
                <li>API integration with e-commerce platforms</li>
                <li>Automated label generation</li>
                <li>Bulk shipping discounts</li>
                <li>Returns management</li>
              </ul>
              <Button asChild className="w-full mt-2">
                <Link href="/quote?service=ecommerce">Get Export Quote</Link>
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="bg-muted rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold mb-4">Why Choose Nepal Air Export for Your International Shipping?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-semibold mb-2">Export Documentation Expertise</h3>
              <p>
                Our team specializes in export documentation requirements for Nepali goods, ensuring compliance with
                both Nepal's regulations and destination country import rules.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Global Network & Partnerships</h3>
              <p>
                We've established strong partnerships with international carriers and customs agents to provide seamless
                export services from Nepal to any global destination.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Competitive Export Rates</h3>
              <p>
                Our volume-based relationships with global carriers allow us to offer some of the most competitive
                export rates from Nepal, with transparent pricing.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">End-to-End Tracking</h3>
              <p>
                Track your exports from pickup in Nepal to final international delivery with our comprehensive tracking
                system and regular status updates.
              </p>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-center">Our Export Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card className="text-center">
              <CardHeader>
                <CardTitle>1. Collection</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  We collect your items from your location in Kathmandu or anywhere in Nepal, or you can drop them at
                  our export centers.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <CardTitle>2. Documentation</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Our export specialists handle all required documentation, customs forms, and compliance requirements.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <CardTitle>3. Customs Clearance</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  We manage the export customs clearance process in Nepal and coordinate with destination customs
                  authorities.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <CardTitle>4. International Delivery</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Your exports are shipped to their international destination with full tracking and delivery
                  confirmation.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="bg-primary/5 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold mb-6 text-center">Popular Export Destinations from Nepal</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center p-4 bg-white rounded-lg shadow-sm">
              <h3 className="font-semibold">United States</h3>
              <p className="text-sm text-muted-foreground">3-5 business days</p>
            </div>
            <div className="text-center p-4 bg-white rounded-lg shadow-sm">
              <h3 className="font-semibold">United Kingdom</h3>
              <p className="text-sm text-muted-foreground">3-4 business days</p>
            </div>
            <div className="text-center p-4 bg-white rounded-lg shadow-sm">
              <h3 className="font-semibold">Australia</h3>
              <p className="text-sm text-muted-foreground">4-6 business days</p>
            </div>
            <div className="text-center p-4 bg-white rounded-lg shadow-sm">
              <h3 className="font-semibold">Canada</h3>
              <p className="text-sm text-muted-foreground">4-5 business days</p>
            </div>
            <div className="text-center p-4 bg-white rounded-lg shadow-sm">
              <h3 className="font-semibold">Japan</h3>
              <p className="text-sm text-muted-foreground">2-3 business days</p>
            </div>
            <div className="text-center p-4 bg-white rounded-lg shadow-sm">
              <h3 className="font-semibold">Germany</h3>
              <p className="text-sm text-muted-foreground">3-4 business days</p>
            </div>
            <div className="text-center p-4 bg-white rounded-lg shadow-sm">
              <h3 className="font-semibold">Singapore</h3>
              <p className="text-sm text-muted-foreground">2-3 business days</p>
            </div>
            <div className="text-center p-4 bg-white rounded-lg shadow-sm">
              <h3 className="font-semibold">UAE</h3>
              <p className="text-sm text-muted-foreground">2-3 business days</p>
            </div>
          </div>
        </div>

        <div className="text-center mb-16">
          <h2 className="text-2xl font-bold mb-4">Commonly Exported Items from Nepal</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card>
              <CardHeader>
                <CardTitle>Handicrafts & Art</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {[
                    "Handmade Pashmina Shawls",
                    "Thangka Paintings",
                    "Hand-knotted Carpets",
                    "Metal Statues",
                    "Handcrafted Jewelry",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Food & Agriculture</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {["Orthodox Tea", "Himalayan Coffee", "Spices & Herbs", "Honey", "Dried Fruits & Nuts"].map(
                    (item) => (
                      <li key={item} className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ),
                  )}
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Textiles & Garments</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {["Woolen Products", "Hemp Clothing", "Cotton Garments", "Felt Products", "Traditional Clothing"].map(
                    (item) => (
                      <li key={item} className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ),
                  )}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-bold mb-6">Ready to Export from Nepal?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Whether you're an individual sending a gift abroad, an artisan shipping handicrafts, or a business with
            commercial export needs, Nepal Air Export has the right solution for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link href="/quote">Get Export Quote</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/contact">Speak to Export Specialist</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
