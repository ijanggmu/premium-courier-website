import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

const plans = [
  {
    name: "Standard",
    description: "Reliable delivery for regular shipments",
    price: "$9.99",
    features: [
      "2-3 business day delivery",
      "Online tracking",
      "Up to 5kg package weight",
      "Standard insurance coverage",
      "Email notifications",
    ],
    cta: "Choose Standard",
    href: "/contact?plan=standard",
    popular: false,
  },
  {
    name: "Premium",
    description: "Priority service for important deliveries",
    price: "$19.99",
    features: [
      "Next business day delivery",
      "Real-time tracking updates",
      "Up to 10kg package weight",
      "Enhanced insurance coverage",
      "SMS & email notifications",
      "Priority customer support",
    ],
    cta: "Choose Premium",
    href: "/contact?plan=premium",
    popular: true,
  },
  {
    name: "Elite",
    description: "White-glove service for critical shipments",
    price: "$39.99",
    features: [
      "Same-day delivery (select areas)",
      "Dedicated tracking agent",
      "Up to 20kg package weight",
      "Premium insurance coverage",
      "SMS & email notifications",
      "24/7 priority customer support",
      "Specialized handling",
    ],
    cta: "Choose Elite",
    href: "/contact?plan=elite",
    popular: false,
  },
]

export default function PricingPlans() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {plans.map((plan) => (
        <Card key={plan.name} className={`flex flex-col ${plan.popular ? "border-primary shadow-lg relative" : ""}`}>
          {plan.popular && (
            <div className="absolute top-0 right-0 -mt-2 -mr-2">
              <span className="bg-primary text-primary-foreground text-xs font-medium px-2.5 py-1 rounded-full">
                Most Popular
              </span>
            </div>
          )}
          <CardHeader>
            <CardTitle>{plan.name}</CardTitle>
            <CardDescription>{plan.description}</CardDescription>
            <div className="mt-4">
              <span className="text-3xl font-bold">{plan.price}</span>
              <span className="text-muted-foreground ml-1">per shipment</span>
            </div>
          </CardHeader>
          <CardContent className="flex-1">
            <ul className="space-y-3">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </CardContent>
          <CardFooter>
            <Button asChild className={`w-full ${plan.popular ? "bg-primary" : ""}`}>
              <Link href={plan.href}>{plan.cta}</Link>
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}
