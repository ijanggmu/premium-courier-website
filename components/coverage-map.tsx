import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function CoverageMap() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Global Network</CardTitle>
        <CardDescription>
          Our extensive network covers over 220 countries with specialized service in major metropolitan areas.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="global">
          <TabsList className="grid w-full grid-cols-3 mb-6">
            <TabsTrigger value="global">Global</TabsTrigger>
            <TabsTrigger value="north-america">North America</TabsTrigger>
            <TabsTrigger value="europe">Europe</TabsTrigger>
          </TabsList>

          <TabsContent value="global" className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden border">
            <div className="absolute inset-0 bg-gray-100 flex items-center justify-center">
              <img
                src="/placeholder.svg?height=500&width=800"
                alt="Global coverage map"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="text-lg font-medium bg-background/80 p-2 rounded">Global Coverage Map</p>
              </div>
            </div>
          </TabsContent>

          <TabsContent
            value="north-america"
            className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden border"
          >
            <div className="absolute inset-0 bg-gray-100 flex items-center justify-center">
              <img
                src="/placeholder.svg?height=500&width=800"
                alt="North America coverage map"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="text-lg font-medium bg-background/80 p-2 rounded">North America Coverage Map</p>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="europe" className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden border">
            <div className="absolute inset-0 bg-gray-100 flex items-center justify-center">
              <img
                src="/placeholder.svg?height=500&width=800"
                alt="Europe coverage map"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="text-lg font-medium bg-background/80 p-2 rounded">Europe Coverage Map</p>
              </div>
            </div>
          </TabsContent>
        </Tabs>

        <div className="mt-6 text-sm text-muted-foreground">
          <p>
            Map shows general service areas. Delivery times and service availability may vary by specific location.
            Please contact customer service for detailed information about your specific origin and destination.
          </p>
        </div>
      </CardContent>
    </Card>
  )
}
