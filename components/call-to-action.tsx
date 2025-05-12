import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function CallToAction() {
  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <div className="bg-primary rounded-2xl p-8 md:p-12 text-primary-foreground relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-blue-800/80"></div>
          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready for Premium Courier & Export Services?</h2>
            <p className="text-xl text-primary-foreground/90 mb-8">
              Experience Nepal's #1 delivery and export service. Fast, secure, and reliable solutions for domestic
              parcels and international exports.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-amber-500 hover:bg-amber-600 text-primary">
                <Link href="/quote">Get a Quote</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-primary-foreground text-black hover:bg-primary-foreground/10"
              >
                <Link href="/contact">Contact Us Today</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
