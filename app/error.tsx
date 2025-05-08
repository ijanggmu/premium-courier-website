"use client"

import { useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { AlertTriangle } from "lucide-react"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error("Application error:", error)
  }, [error])

  return (
    <div className="container flex flex-col items-center justify-center min-h-[70vh] py-16 text-center">
      <div className="flex flex-col items-center max-w-md mx-auto">
        <div className="bg-destructive/10 p-4 rounded-full mb-6">
          <AlertTriangle className="h-16 w-16 text-destructive" />
        </div>
        <h1 className="text-4xl font-bold mb-4">Something Went Wrong</h1>
        <p className="text-xl text-muted-foreground mb-4">
          We apologize for the inconvenience. An unexpected error has occurred.
        </p>
        <p className="text-muted-foreground mb-8">
          Our team has been notified and is working to resolve the issue. Please try again later or contact our support
          team if the problem persists.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button onClick={reset} size="lg">
            Try Again
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/">Return Home</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/contact">Contact Support</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
