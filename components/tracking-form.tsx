"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Search } from "lucide-react"

interface TrackingFormProps {
  initialValue?: string
}

export default function TrackingForm({ initialValue = "" }: TrackingFormProps) {
  const router = useRouter()
  const [trackingNumber, setTrackingNumber] = useState(initialValue)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!trackingNumber) return

    setIsSubmitting(true)
    // Navigate to the same page with the tracking number as a query parameter
    router.push(`/track?number=${trackingNumber}`)

    // Reset submitting state after a short delay
    setTimeout(() => {
      setIsSubmitting(false)
    }, 500)
  }

  return (
    <Card className="mb-8">
      <CardContent className="pt-6">
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Enter tracking number"
              className="pl-10"
              value={trackingNumber}
              onChange={(e) => setTrackingNumber(e.target.value)}
            />
          </div>
          <Button type="submit" disabled={isSubmitting || !trackingNumber}>
            {isSubmitting ? "Tracking..." : "Track"}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
