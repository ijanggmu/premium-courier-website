"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Skeleton } from "@/components/ui/skeleton"
import { Clock, Package, Truck } from "lucide-react"

interface TrackingResultProps {
  trackingNumber: string
}

// Mock tracking data
const mockTrackingData = {
  status: "In Transit",
  estimatedDelivery: "May 10, 2025, 12:00-16:00",
  origin: "New York, NY",
  destination: "Los Angeles, CA",
  service: "Premium Express",
  weight: "2.5 kg",
  dimensions: "30 x 20 x 15 cm",
  events: [
    {
      date: "May 8, 2025, 09:15",
      location: "Los Angeles Distribution Center, CA",
      status: "Out for delivery",
      description: "Package is out for delivery",
    },
    {
      date: "May 7, 2025, 18:30",
      location: "Los Angeles Distribution Center, CA",
      status: "Arrived at facility",
      description: "Package has arrived at delivery facility",
    },
    {
      date: "May 6, 2025, 14:45",
      location: "Chicago Sorting Facility, IL",
      status: "In transit",
      description: "Package is in transit to the next facility",
    },
    {
      date: "May 5, 2025, 10:20",
      location: "New York Distribution Center, NY",
      status: "Processed",
      description: "Package has been processed at origin facility",
    },
    {
      date: "May 4, 2025, 16:35",
      location: "New York, NY",
      status: "Picked up",
      description: "Package has been picked up by courier",
    },
  ],
}

export default function TrackingResult({ trackingNumber }: TrackingResultProps) {
  const [isLoading, setIsLoading] = useState(true)
  const [trackingData, setTrackingData] = useState<any>(null)

  useEffect(() => {
    // Simulate API call to fetch tracking data
    const fetchData = async () => {
      setIsLoading(true)
      // In a real app, you would fetch data from an API
      await new Promise((resolve) => setTimeout(resolve, 1500))
      setTrackingData(mockTrackingData)
      setIsLoading(false)
    }

    fetchData()
  }, [trackingNumber])

  if (isLoading) {
    return <TrackingResultSkeleton />
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader className="pb-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <CardTitle>Tracking Number: {trackingNumber}</CardTitle>
              <p className="text-sm text-muted-foreground mt-1">Service: {trackingData.service}</p>
            </div>
            <Badge className="w-fit text-sm py-1.5 px-3" variant={getStatusVariant(trackingData.status)}>
              {trackingData.status}
            </Badge>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-sm font-medium text-muted-foreground mb-2">Estimated Delivery</h3>
              <p className="font-medium">{trackingData.estimatedDelivery}</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-muted-foreground mb-2">Current Location</h3>
              <p className="font-medium">{trackingData.events[0].location}</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-muted-foreground mb-2">From</h3>
              <p className="font-medium">{trackingData.origin}</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-muted-foreground mb-2">To</h3>
              <p className="font-medium">{trackingData.destination}</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="timeline">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="timeline">Timeline</TabsTrigger>
          <TabsTrigger value="details">Shipment Details</TabsTrigger>
        </TabsList>
        <TabsContent value="timeline" className="mt-6">
          <Card>
            <CardContent className="pt-6">
              <div className="space-y-8">
                {trackingData.events.map((event: any, index: number) => (
                  <div key={index} className="relative pl-8 pb-8">
                    {index !== trackingData.events.length - 1 && (
                      <div className="absolute top-0 left-3 h-full w-px bg-muted"></div>
                    )}
                    <div className="absolute top-0 left-0 h-6 w-6 rounded-full bg-primary flex items-center justify-center">
                      {index === 0 ? (
                        <Truck className="h-3 w-3 text-primary-foreground" />
                      ) : index === trackingData.events.length - 1 ? (
                        <Package className="h-3 w-3 text-primary-foreground" />
                      ) : (
                        <Clock className="h-3 w-3 text-primary-foreground" />
                      )}
                    </div>
                    <div>
                      <p className="font-medium">{event.status}</p>
                      <p className="text-sm text-muted-foreground">{event.description}</p>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 mt-2 text-sm">
                        <span className="text-muted-foreground">{event.date}</span>
                        <span className="hidden sm:inline text-muted-foreground">•</span>
                        <span className="text-muted-foreground">{event.location}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="details" className="mt-6">
          <Card>
            <CardContent className="pt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground mb-2">Service Type</h3>
                  <p className="font-medium">{trackingData.service}</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground mb-2">Weight</h3>
                  <p className="font-medium">{trackingData.weight}</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground mb-2">Dimensions</h3>
                  <p className="font-medium">{trackingData.dimensions}</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground mb-2">Tracking Number</h3>
                  <p className="font-medium">{trackingNumber}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

function TrackingResultSkeleton() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader className="pb-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="space-y-2">
              <Skeleton className="h-6 w-64" />
              <Skeleton className="h-4 w-40" />
            </div>
            <Skeleton className="h-8 w-28" />
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {Array(4)
              .fill(0)
              .map((_, i) => (
                <div key={i}>
                  <Skeleton className="h-4 w-32 mb-2" />
                  <Skeleton className="h-5 w-48" />
                </div>
              ))}
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="timeline">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="timeline">Timeline</TabsTrigger>
          <TabsTrigger value="details">Shipment Details</TabsTrigger>
        </TabsList>
        <TabsContent value="timeline" className="mt-6">
          <Card>
            <CardContent className="pt-6">
              <div className="space-y-8">
                {Array(4)
                  .fill(0)
                  .map((_, i) => (
                    <div key={i} className="relative pl-8 pb-8">
                      {i !== 3 && <div className="absolute top-0 left-3 h-full w-px bg-muted"></div>}
                      <Skeleton className="absolute top-0 left-0 h-6 w-6 rounded-full" />
                      <div>
                        <Skeleton className="h-5 w-32 mb-1" />
                        <Skeleton className="h-4 w-64 mb-2" />
                        <div className="flex flex-col sm:flex-row gap-2">
                          <Skeleton className="h-4 w-32" />
                          <Skeleton className="h-4 w-48" />
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="details" className="mt-6">
          <Card>
            <CardContent className="pt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {Array(4)
                  .fill(0)
                  .map((_, i) => (
                    <div key={i}>
                      <Skeleton className="h-4 w-32 mb-2" />
                      <Skeleton className="h-5 w-48" />
                    </div>
                  ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

function getStatusVariant(status: string) {
  switch (status.toLowerCase()) {
    case "delivered":
      return "success"
    case "in transit":
      return "default"
    case "out for delivery":
      return "default"
    case "delayed":
      return "warning"
    case "exception":
      return "destructive"
    default:
      return "secondary"
  }
}
