import TrackingForm from "@/components/tracking-form"
import TrackingResult from "@/components/tracking-result"
import GlobalCoverageMap from "@/components/global-coverage-map"

export default function TrackPage({ searchParams }: { searchParams: { number?: string } }) {
  const trackingNumber = searchParams.number

  return (
    <div className="py-12 md:py-16">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center">Track & Trace</h1>
          <p className="text-lg text-muted-foreground text-center mb-8">
            Enter your tracking number to get real-time updates on your shipment.
          </p>

          <TrackingForm initialValue={trackingNumber} />

          {trackingNumber && <TrackingResult trackingNumber={trackingNumber} />}

          {!trackingNumber && (
            <div className="mt-12">
              <h2 className="text-2xl font-bold mb-6 text-center">Our Global Coverage</h2>
              <p className="text-muted-foreground text-center mb-8">
                SwiftElite delivers to over 220 countries and territories worldwide with premium service in major
                metropolitan areas.
              </p>
              <GlobalCoverageMap />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
