import ServicesList from "@/components/services-list"
import ServiceFeatures from "@/components/service-features"
import ServiceComparison from "@/components/service-comparison"

export default function ServicesPage() {
  return (
    <div className="py-12 md:py-16">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Our Premium Services</h1>
          <p className="text-lg text-muted-foreground">
            Discover our range of premium courier services designed to meet your specific delivery needs.
          </p>
        </div>

        <ServicesList />

        <div className="my-16">
          <ServiceFeatures />
        </div>

        <div className="my-16">
          <ServiceComparison />
        </div>
      </div>
    </div>
  )
}
