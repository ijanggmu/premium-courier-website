import { Clock, Globe, Shield, Truck } from "lucide-react"

const features = [
  {
    icon: Clock,
    title: "Express Delivery",
    description: "Same-day and next-day options for time-critical shipments with guaranteed delivery windows.",
  },
  {
    icon: Globe,
    title: "Global Network",
    description: "International shipping to over 220 countries with customs clearance and real-time tracking.",
  },
  {
    icon: Shield,
    title: "Premium Protection",
    description: "Enhanced security and insurance for high-value items with signature confirmation.",
  },
  {
    icon: Truck,
    title: "Specialized Handling",
    description: "White-glove service for fragile, sensitive, or unique items requiring special care.",
  },
]

export default function Features() {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Premium Service Features</h2>
          <p className="text-lg text-muted-foreground">
            Our elite courier services combine speed, security, and specialized handling to deliver exceptional results.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md border border-gray-100 transition-all duration-300 hover:shadow-lg"
            >
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
