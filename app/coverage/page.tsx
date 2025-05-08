import CoverageMap from "@/components/coverage-map"
import ServiceAreas from "@/components/service-areas"

export default function CoveragePage() {
  return (
    <div className="py-12 md:py-16">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Coverage Areas</h1>
          <p className="text-lg text-muted-foreground">
            SwiftElite provides premium courier services across the globe with specialized coverage in key metropolitan
            areas.
          </p>
        </div>

        <CoverageMap />

        <div className="mt-16">
          <ServiceAreas />
        </div>
      </div>
    </div>
  )
}
