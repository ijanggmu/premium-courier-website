import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Clock, Globe, Package, Shield } from "lucide-react"

const services = [
  {
    icon: Clock,
    title: "Express Delivery",
    description: "Same-day and next-day delivery options for time-critical shipments with guaranteed delivery windows.",
    features: [
      "Same-day delivery in select metropolitan areas",
      "Next-day delivery nationwide",
      "Real-time tracking and notifications",
      "Signature confirmation",
      "Priority handling",
    ],
    href: "/services/express-delivery",
  },
  {
    icon: Globe,
    title: "International Shipping",
    description: "Global shipping solutions with customs clearance, documentation handling, and end-to-end tracking.",
    features: [
      "Service to over 220 countries and territories",
      "Customs clearance assistance",
      "Documentation preparation",
      "Import/export expertise",
      "Multi-language support",
    ],
    href: "/services/international-shipping",
  },
  {
    icon: Shield,
    title: "Specialized Handling",
    description: "White-glove service for fragile, valuable, or sensitive items requiring special care and handling.",
    features: [
      "Temperature-controlled shipping",
      "High-value item protection",
      "Fragile item packaging",
      "Enhanced security measures",
      "Specialized vehicles and equipment",
    ],
    href: "/services/specialized-handling",
  },
  {
    icon: Package,
    title: "Corporate Solutions",
    description: "Tailored logistics solutions for businesses with dedicated account management and custom reporting.",
    features: [
      "Dedicated account manager",
      "Custom shipping schedules",
      "Volume discounts",
      "Integration with your systems",
      "Detailed analytics and reporting",
    ],
    href: "/services/corporate-solutions",
  },
]

export default function ServicesList() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {services.map((service) => (
        <Card key={service.title} className="flex flex-col">
          <CardHeader>
            <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <service.icon className="h-6 w-6 text-primary" />
            </div>
            <CardTitle>{service.title}</CardTitle>
            <CardDescription>{service.description}</CardDescription>
          </CardHeader>
          <CardContent className="flex-1">
            <ul className="space-y-2">
              {service.features.map((feature, index) => (
                <li key={index} className="flex items-start gap-2">
                  <div className="rounded-full bg-primary/10 p-1 mt-0.5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-3 w-3 text-primary"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </CardContent>
          <CardFooter>
            <Button asChild variant="outline" className="w-full">
              <Link href={service.href} className="flex items-center justify-center gap-2">
                Learn More <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}
