import { CheckCircle } from "lucide-react"

const clients = ["Acme Corp", "TechGiant", "GlobalRetail", "MegaFinance", "InnovateCo"]

const certifications = ["ISO 9001:2015", "ISO 14001", "C-TPAT Certified", "IATA Accredited"]

export default function TrustIndicators() {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Trusted by Industry Leaders</h2>
          <p className="text-lg text-muted-foreground">
            For over 15 years, we've delivered premium courier services to the world's most demanding businesses.
          </p>
        </div>

        <div className="mb-16">
          <h3 className="text-xl font-semibold text-center mb-8">Our Clients</h3>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            {clients.map((client, index) => (
              <div
                key={index}
                className="flex items-center justify-center h-16 opacity-70 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300"
              >
                <span className="text-2xl font-bold text-gray-500">{client}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-6">Industry Certifications</h3>
            <ul className="space-y-4">
              {certifications.map((cert, index) => (
                <li key={index} className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span>{cert}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-6">Our Track Record</h3>
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <p className="text-4xl font-bold text-primary mb-2">99.8%</p>
                <p className="text-sm text-muted-foreground">On-time Delivery</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-bold text-primary mb-2">15+</p>
                <p className="text-sm text-muted-foreground">Years in Business</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-bold text-primary mb-2">220+</p>
                <p className="text-sm text-muted-foreground">Countries Served</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-bold text-primary mb-2">5M+</p>
                <p className="text-sm text-muted-foreground">Packages Delivered</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
