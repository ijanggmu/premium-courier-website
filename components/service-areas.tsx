import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const serviceAreas = [
  {
    region: "North America",
    description: "Comprehensive coverage across the United States and Canada with same-day service in major cities.",
    areas: [
      {
        country: "United States",
        cities: [
          { name: "New York", services: ["Same-Day", "Next-Day", "Standard"] },
          { name: "Los Angeles", services: ["Same-Day", "Next-Day", "Standard"] },
          { name: "Chicago", services: ["Same-Day", "Next-Day", "Standard"] },
          { name: "Houston", services: ["Next-Day", "Standard"] },
          { name: "Phoenix", services: ["Next-Day", "Standard"] },
          { name: "Philadelphia", services: ["Same-Day", "Next-Day", "Standard"] },
          { name: "San Antonio", services: ["Next-Day", "Standard"] },
          { name: "San Diego", services: ["Next-Day", "Standard"] },
          { name: "Dallas", services: ["Same-Day", "Next-Day", "Standard"] },
          { name: "San Jose", services: ["Next-Day", "Standard"] },
        ],
      },
      {
        country: "Canada",
        cities: [
          { name: "Toronto", services: ["Same-Day", "Next-Day", "Standard"] },
          { name: "Montreal", services: ["Same-Day", "Next-Day", "Standard"] },
          { name: "Vancouver", services: ["Next-Day", "Standard"] },
          { name: "Calgary", services: ["Next-Day", "Standard"] },
          { name: "Edmonton", services: ["Next-Day", "Standard"] },
          { name: "Ottawa", services: ["Next-Day", "Standard"] },
        ],
      },
    ],
  },
  {
    region: "Europe",
    description:
      "Extensive network across European countries with premium service in capital cities and business centers.",
    areas: [
      {
        country: "United Kingdom",
        cities: [
          { name: "London", services: ["Same-Day", "Next-Day", "Standard"] },
          { name: "Manchester", services: ["Next-Day", "Standard"] },
          { name: "Birmingham", services: ["Next-Day", "Standard"] },
          { name: "Glasgow", services: ["Next-Day", "Standard"] },
          { name: "Liverpool", services: ["Next-Day", "Standard"] },
        ],
      },
      {
        country: "Germany",
        cities: [
          { name: "Berlin", services: ["Same-Day", "Next-Day", "Standard"] },
          { name: "Munich", services: ["Same-Day", "Next-Day", "Standard"] },
          { name: "Hamburg", services: ["Next-Day", "Standard"] },
          { name: "Frankfurt", services: ["Same-Day", "Next-Day", "Standard"] },
          { name: "Cologne", services: ["Next-Day", "Standard"] },
        ],
      },
      {
        country: "France",
        cities: [
          { name: "Paris", services: ["Same-Day", "Next-Day", "Standard"] },
          { name: "Lyon", services: ["Next-Day", "Standard"] },
          { name: "Marseille", services: ["Next-Day", "Standard"] },
          { name: "Toulouse", services: ["Next-Day", "Standard"] },
          { name: "Nice", services: ["Next-Day", "Standard"] },
        ],
      },
    ],
  },
  {
    region: "Asia Pacific",
    description:
      "Strategic coverage in major business hubs across Asia with specialized handling for international shipments.",
    areas: [
      {
        country: "Japan",
        cities: [
          { name: "Tokyo", services: ["Same-Day", "Next-Day", "Standard"] },
          { name: "Osaka", services: ["Next-Day", "Standard"] },
          { name: "Yokohama", services: ["Next-Day", "Standard"] },
          { name: "Nagoya", services: ["Next-Day", "Standard"] },
        ],
      },
      {
        country: "Australia",
        cities: [
          { name: "Sydney", services: ["Same-Day", "Next-Day", "Standard"] },
          { name: "Melbourne", services: ["Same-Day", "Next-Day", "Standard"] },
          { name: "Brisbane", services: ["Next-Day", "Standard"] },
          { name: "Perth", services: ["Next-Day", "Standard"] },
          { name: "Adelaide", services: ["Next-Day", "Standard"] },
        ],
      },
      {
        country: "Singapore",
        cities: [{ name: "Singapore", services: ["Same-Day", "Next-Day", "Standard"] }],
      },
    ],
  },
]

export default function ServiceAreas() {
  return (
    <div className="space-y-8">
      <div className="text-center max-w-3xl mx-auto mb-8">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Service Areas & Capabilities</h2>
        <p className="text-muted-foreground">Explore our service areas and available delivery options by region.</p>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {serviceAreas.map((region) => (
          <Card key={region.region}>
            <CardHeader>
              <CardTitle>{region.region}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-6">{region.description}</p>

              <Accordion type="single" collapsible className="w-full">
                {region.areas.map((area) => (
                  <AccordionItem key={area.country} value={area.country}>
                    <AccordionTrigger>{area.country}</AccordionTrigger>
                    <AccordionContent>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
                        {area.cities.map((city) => (
                          <div key={city.name} className="border rounded-md p-3">
                            <h4 className="font-medium mb-2">{city.name}</h4>
                            <div className="flex flex-wrap gap-2">
                              {city.services.includes("Same-Day") && (
                                <Badge variant="default" className="bg-green-600">
                                  Same-Day
                                </Badge>
                              )}
                              {city.services.includes("Next-Day") && (
                                <Badge variant="secondary" className="bg-blue-600 text-white">
                                  Next-Day
                                </Badge>
                              )}
                              {city.services.includes("Standard") && <Badge variant="outline">Standard</Badge>}
                            </div>
                          </div>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
