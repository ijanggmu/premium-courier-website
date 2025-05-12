"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function CoverageMap() {
  const [activeTab, setActiveTab] = useState("nepal")

  return (
    <div className="w-full">
      <Tabs defaultValue="nepal" className="w-full" onValueChange={setActiveTab}>
        <div className="flex justify-center mb-8">
          <TabsList>
            <TabsTrigger value="nepal">Nepal</TabsTrigger>
            <TabsTrigger value="asia">Asia</TabsTrigger>
            <TabsTrigger value="global">Global</TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="nepal" className="mt-0">
          <Card>
            <CardHeader>
              <CardTitle>Nepal Coverage</CardTitle>
              <CardDescription>
                Our extensive network covers all 77 districts across Nepal's 7 provinces
              </CardDescription>
            </CardHeader>
            <CardContent className="p-0">
              <div className="aspect-video relative overflow-hidden rounded-b-lg">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/20 z-10"></div>
                <img
                  src="/placeholder.svg?height=600&width=1200"
                  alt="Map of Nepal showing SwiftElite's coverage across all 77 districts"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-4 left-4 right-4 bg-background/80 backdrop-blur p-4 rounded-lg z-20">
                  <h3 className="font-semibold mb-2">Service Levels in Nepal</h3>
                  <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <li className="flex items-center">
                      <span className="w-3 h-3 rounded-full bg-green-500 mr-2"></span>
                      <span>Same-day (Kathmandu Valley)</span>
                    </li>
                    <li className="flex items-center">
                      <span className="w-3 h-3 rounded-full bg-blue-500 mr-2"></span>
                      <span>Next-day (Major Cities)</span>
                    </li>
                    <li className="flex items-center">
                      <span className="w-3 h-3 rounded-full bg-amber-500 mr-2"></span>
                      <span>2-5 days (Remote Areas)</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Province 1</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-2">Major service areas include Biratnagar, Dharan, Itahari, and Ilam.</p>
                <p className="text-sm text-muted-foreground">
                  Next-day delivery to urban centers, 2-3 days for remote areas.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Madhesh Province</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-2">Major service areas include Birgunj, Janakpur, and Rajbiraj.</p>
                <p className="text-sm text-muted-foreground">
                  Next-day delivery to major cities, 2-3 days for rural areas.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Bagmati Province</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-2">Includes Kathmandu Valley, Hetauda, Bharatpur, and Dhulikhel.</p>
                <p className="text-sm text-muted-foreground">
                  Same-day in Kathmandu Valley, next-day to other major areas.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Gandaki Province</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-2">Major service areas include Pokhara, Gorkha, and Damauli.</p>
                <p className="text-sm text-muted-foreground">Next-day to Pokhara, 2-4 days for mountainous regions.</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Lumbini Province</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-2">Major service areas include Butwal, Bhairahawa, and Nepalgunj.</p>
                <p className="text-sm text-muted-foreground">
                  Next-day delivery to urban centers, 2-3 days for remote areas.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Karnali & Sudurpashchim</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-2">Coverage includes Surkhet, Dhangadhi, and Mahendranagar.</p>
                <p className="text-sm text-muted-foreground">
                  2-5 days delivery depending on accessibility and weather.
                </p>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="asia" className="mt-0">
          <Card>
            <CardHeader>
              <CardTitle>Asia Coverage</CardTitle>
              <CardDescription>
                Our Asian network connects Nepal to all major countries and cities across the continent
              </CardDescription>
            </CardHeader>
            <CardContent className="p-0">
              <div className="aspect-video relative overflow-hidden rounded-b-lg">
                <img
                  src="/placeholder.svg?height=600&width=1200"
                  alt="Map of Asia showing SwiftElite's coverage network"
                  className="w-full h-full object-cover"
                />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="global" className="mt-0">
          <Card>
            <CardHeader>
              <CardTitle>Global Coverage</CardTitle>
              <CardDescription>Our worldwide network reaches over 220 countries and territories</CardDescription>
            </CardHeader>
            <CardContent className="p-0">
              <div className="aspect-video relative overflow-hidden rounded-b-lg">
                <img
                  src="/placeholder.svg?height=600&width=1200"
                  alt="World map showing SwiftElite's global coverage network"
                  className="w-full h-full object-cover"
                />
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
