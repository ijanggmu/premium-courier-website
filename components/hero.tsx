import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section className="relative py-20 md:py-28 lg:py-36 overflow-hidden bg-gradient-to-r from-primary to-primary/80 text-primary-foreground">
      <div className="container relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Nepal's #1 <span className="text-amber-300">Courier & Export</span> Service
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-md">
              Fast, reliable parcel delivery across Kathmandu and all of Nepal, with international export services to
              220+ countries.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button asChild size="lg" className="bg-amber-500 hover:bg-amber-600 text-primary">
                <Link href="/quote">Send Parcel or Export</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-primary-foreground text-black hover:bg-primary-foreground/10"
              >
                <Link href="/track">Track Your Package</Link>
              </Button>
            </div>
          </div>
          <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-tr from-black/40 to-transparent z-10"></div>
            <img
              src="/placeholder.svg?height=400&width=600"
              alt="Nepal Air Export - #1 courier service in Kathmandu with international export solutions"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  )
}
