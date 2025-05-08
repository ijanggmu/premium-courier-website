import { Card, CardContent } from "@/components/ui/card"

export default function GlobalCoverageMap() {
  return (
    <Card className="overflow-hidden">
      <CardContent className="p-0">
        <div className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden">
          <div className="absolute inset-0 bg-gray-100 flex items-center justify-center">
            <img
              src="/placeholder.svg?height=500&width=1000&text=Global+Coverage+Map"
              alt="Global coverage map"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/5">
              <div className="bg-background/90 p-4 rounded-lg shadow-lg max-w-md text-center">
                <h3 className="text-xl font-semibold mb-2">Premium Global Network</h3>
                <p className="text-sm text-muted-foreground">
                  Our extensive network covers over 220 countries with specialized service in major metropolitan areas.
                  Same-day delivery available in select cities marked in blue.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="p-4 text-sm text-muted-foreground">
          <div className="flex items-center justify-center gap-8 mb-2">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-blue-500"></div>
              <span>Same-Day Service</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <span>Next-Day Service</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-gray-400"></div>
              <span>Standard Service</span>
            </div>
          </div>
          <p className="text-center text-xs">
            Service availability and delivery times may vary. Contact customer service for detailed information about
            your specific location.
          </p>
        </div>
      </CardContent>
    </Card>
  )
}
