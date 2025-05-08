import PricingCalculator from "@/components/pricing-calculator"
import PricingPlans from "@/components/pricing-plans"

export default function PricingPage() {
  return (
    <div className="py-12 md:py-16">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Transparent Pricing</h1>
          <p className="text-lg text-muted-foreground">
            Choose the right service level for your shipping needs with our flexible pricing options.
          </p>
        </div>

        <PricingPlans />

        <div className="my-16 border-t pt-16">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Calculate Your Shipping Cost</h2>
            <p className="text-lg text-muted-foreground">
              Get an instant quote for your shipment based on weight, dimensions, and destination.
            </p>
          </div>

          <PricingCalculator />
        </div>
      </div>
    </div>
  )
}
