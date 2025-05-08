import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Clock, Globe, Shield, Target, Users } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="py-12 md:py-16">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">About SwiftElite</h1>
          <p className="text-lg text-muted-foreground">
            Delivering excellence through premium courier services since 2008.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Our Story</h2>
            <div className="space-y-4">
              <p>
                SwiftElite was founded in 2008 with a simple mission: to provide premium courier services that
                businesses and individuals could truly rely on. What began as a small operation in New York has grown
                into a global network serving over 220 countries.
              </p>
              <p>
                Our founder, Michael Reynolds, experienced firsthand the frustration of unreliable delivery services
                while running his previous business. He envisioned a courier service that would prioritize reliability,
                transparency, and exceptional customer care above all else.
              </p>
              <p>
                Today, SwiftElite has become the preferred courier partner for thousands of businesses worldwide, from
                Fortune 500 companies to boutique firms that value our commitment to excellence and personalized
                service.
              </p>
            </div>
          </div>
          <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden shadow-xl">
            <img
              src="/placeholder.svg?height=400&width=600"
              alt="SwiftElite headquarters building"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="mb-16">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Our Mission & Values</h2>
            <p className="text-muted-foreground">
              At SwiftElite, our mission and values guide everything we do, from how we handle packages to how we
              interact with our customers.
            </p>
          </div>

          <Card>
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="flex flex-col items-center text-center">
                  <div className="bg-primary/10 p-4 rounded-full mb-4">
                    <Target className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
                  <p className="text-muted-foreground">
                    To deliver exceptional courier services that exceed expectations through reliability, speed, and
                    personalized care.
                  </p>
                </div>

                <div className="flex flex-col items-center text-center">
                  <div className="bg-primary/10 p-4 rounded-full mb-4">
                    <Users className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Our Vision</h3>
                  <p className="text-muted-foreground">
                    To be the global standard for premium courier services, recognized for our unwavering commitment to
                    excellence.
                  </p>
                </div>

                <div className="flex flex-col items-center text-center md:col-span-2 lg:col-span-1">
                  <div className="bg-primary/10 p-4 rounded-full mb-4">
                    <Shield className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Our Promise</h3>
                  <p className="text-muted-foreground">
                    We promise to treat every package as if it were our own, with the utmost care, security, and
                    attention to detail.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium">Reliability</p>
                    <p className="text-sm text-muted-foreground">We deliver on our promises, every time.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium">Excellence</p>
                    <p className="text-sm text-muted-foreground">We strive for perfection in every delivery.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium">Integrity</p>
                    <p className="text-sm text-muted-foreground">We operate with honesty and transparency.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium">Innovation</p>
                    <p className="text-sm text-muted-foreground">We continuously improve our services.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium">Sustainability</p>
                    <p className="text-sm text-muted-foreground">
                      We're committed to reducing our environmental impact.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium">Customer Focus</p>
                    <p className="text-sm text-muted-foreground">
                      We put our customers at the center of everything we do.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mb-16">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Our Global Network</h2>
            <p className="text-muted-foreground">
              With operations in over 220 countries and territories, SwiftElite delivers premium courier services
              worldwide.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-primary/5 p-6 rounded-lg text-center">
              <div className="bg-primary/10 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-2">220+</h3>
              <p className="text-muted-foreground">Countries & Territories</p>
            </div>

            <div className="bg-primary/5 p-6 rounded-lg text-center">
              <div className="bg-primary/10 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-2">5,000+</h3>
              <p className="text-muted-foreground">Employees Worldwide</p>
            </div>

            <div className="bg-primary/5 p-6 rounded-lg text-center">
              <div className="bg-primary/10 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-2">15+</h3>
              <p className="text-muted-foreground">Years of Excellence</p>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Leadership Team</h2>
            <p className="text-muted-foreground">
              Meet the experienced professionals who lead SwiftElite's global operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Michael Reynolds",
                title: "Founder & CEO",
                bio: "Founded SwiftElite in 2008 with a vision to transform the courier industry.",
              },
              {
                name: "Sarah Chen",
                title: "Chief Operations Officer",
                bio: "Oversees global operations and ensures service excellence across all regions.",
              },
              {
                name: "David Okafor",
                title: "Chief Technology Officer",
                bio: "Leads innovation in tracking systems and logistics technology.",
              },
              {
                name: "Elena Rodriguez",
                title: "Chief Customer Officer",
                bio: "Champions customer experience and service quality initiatives.",
              },
            ].map((leader, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="h-32 w-32 rounded-full bg-gray-200 mb-4 overflow-hidden">
                  <img
                    src={`/placeholder.svg?height=128&width=128&text=${leader.name.split(" ")[0][0]}${
                      leader.name.split(" ")[1][0]
                    }`}
                    alt={leader.name}
                    className="h-full w-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-1">{leader.name}</h3>
                <p className="text-primary font-medium mb-2">{leader.title}</p>
                <p className="text-muted-foreground">{leader.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
