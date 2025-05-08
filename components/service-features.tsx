import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CheckCircle } from "lucide-react"

export default function ServiceFeatures() {
  return (
    <Card>
      <CardHeader className="text-center">
        <CardTitle>Service Features</CardTitle>
        <CardDescription>Compare the features available with each service level</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="express">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="express">Express Delivery</TabsTrigger>
            <TabsTrigger value="international">International</TabsTrigger>
            <TabsTrigger value="specialized">Specialized</TabsTrigger>
          </TabsList>

          <TabsContent value="express">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Express Delivery Features</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium">Same-Day Delivery</p>
                      <p className="text-sm text-muted-foreground">
                        Available in major metropolitan areas with pickup by 10 AM
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium">Next-Day Delivery</p>
                      <p className="text-sm text-muted-foreground">
                        Nationwide service with guaranteed delivery by end of next business day
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium">Time-Definite Options</p>
                      <p className="text-sm text-muted-foreground">
                        Choose specific delivery windows: morning, afternoon, or evening
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium">Real-Time Tracking</p>
                      <p className="text-sm text-muted-foreground">
                        Track your package with GPS precision and receive automated updates
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium">Signature Confirmation</p>
                      <p className="text-sm text-muted-foreground">
                        Proof of delivery with recipient signature capture
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="relative h-[300px] md:h-full rounded-lg overflow-hidden">
                <img
                  src="/placeholder.svg?height=400&width=600"
                  alt="Express delivery courier with package"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </TabsContent>

          <TabsContent value="international">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">International Shipping Features</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium">Global Network</p>
                      <p className="text-sm text-muted-foreground">
                        Service to over 220 countries and territories worldwide
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium">Customs Clearance</p>
                      <p className="text-sm text-muted-foreground">
                        Expert handling of customs documentation and clearance procedures
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium">Import/Export Expertise</p>
                      <p className="text-sm text-muted-foreground">
                        Guidance on international shipping regulations and requirements
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium">Multi-Language Support</p>
                      <p className="text-sm text-muted-foreground">Customer service available in multiple languages</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium">International Insurance</p>
                      <p className="text-sm text-muted-foreground">
                        Comprehensive coverage options for international shipments
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="relative h-[300px] md:h-full rounded-lg overflow-hidden">
                <img
                  src="/placeholder.svg?height=400&width=600"
                  alt="International shipping and logistics"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </TabsContent>

          <TabsContent value="specialized">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Specialized Handling Features</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium">White-Glove Service</p>
                      <p className="text-sm text-muted-foreground">
                        Premium handling with specialized care for valuable items
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium">Temperature Control</p>
                      <p className="text-sm text-muted-foreground">
                        Climate-controlled vehicles and storage for sensitive items
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium">High-Value Protection</p>
                      <p className="text-sm text-muted-foreground">
                        Enhanced security measures for high-value shipments
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium">Custom Packaging</p>
                      <p className="text-sm text-muted-foreground">
                        Specialized packaging solutions for fragile or unique items
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium">Dedicated Handling</p>
                      <p className="text-sm text-muted-foreground">One-on-one attention from specialized couriers</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="relative h-[300px] md:h-full rounded-lg overflow-hidden">
                <img
                  src="/placeholder.svg?height=400&width=600"
                  alt="Specialized handling of fragile items"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}
