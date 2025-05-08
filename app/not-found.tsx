import { Button } from "@/components/ui/button"
import { FileQuestion } from "lucide-react"

export default function NotFound() {
  return (
    <div className="container flex flex-col items-center justify-center min-h-[70vh] py-16 text-center">
      <div className="flex flex-col items-center max-w-md mx-auto">
        <div className="bg-primary/10 p-4 rounded-full mb-6">
          <FileQuestion className="h-16 w-16 text-primary" />
        </div>
        <h1 className="text-4xl font-bold mb-4">Page Not Found</h1>
        <p className="text-xl text-muted-foreground mb-4">
          We couldn't find the page you were looking for. It might be under development or may have been moved.
        </p>
        <p className="text-muted-foreground mb-8">
          Please navigate to our homepage or contact our support team for assistance.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button asChild size="lg">
            <a href="/">Return Home</a>
          </Button>
          <Button asChild variant="outline" size="lg">
            <a href="/contact">Contact Support</a>
          </Button>
        </div>
      </div>
    </div>
  )
}
