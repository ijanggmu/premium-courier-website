import Hero from "@/components/hero"
import Features from "@/components/features"
import TrackingSection from "@/components/tracking-section"
import TrustIndicators from "@/components/trust-indicators"
import CallToAction from "@/components/call-to-action"

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <Features />
      <TrackingSection />
      <TrustIndicators />
      <CallToAction />
    </div>
  )
}
