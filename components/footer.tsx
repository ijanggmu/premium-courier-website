import Link from "next/link"
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="text-xl font-bold mb-4">SwiftElite Nepal</h3>
            <p className="text-primary-foreground/80 mb-4">
              Nepal's leading courier service with nationwide coverage. Fast, reliable, and secure delivery solutions
              across Nepal and worldwide.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-primary-foreground/80 hover:text-primary-foreground">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-primary-foreground/80 hover:text-primary-foreground">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-primary-foreground/80 hover:text-primary-foreground">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-primary-foreground/80 hover:text-primary-foreground">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/services/nepal-delivery"
                  className="text-primary-foreground/80 hover:text-primary-foreground"
                >
                  Nepal Delivery Services
                </Link>
              </li>
              <li>
                <Link
                  href="/services/international-shipping"
                  className="text-primary-foreground/80 hover:text-primary-foreground"
                >
                  International Shipping
                </Link>
              </li>
              <li>
                <Link
                  href="/services/specialized-handling"
                  className="text-primary-foreground/80 hover:text-primary-foreground"
                >
                  Specialized Handling
                </Link>
              </li>
              <li>
                <Link
                  href="/services/corporate-solutions"
                  className="text-primary-foreground/80 hover:text-primary-foreground"
                >
                  Corporate Solutions
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-primary-foreground/80 hover:text-primary-foreground">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-primary-foreground/80 hover:text-primary-foreground">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/news" className="text-primary-foreground/80 hover:text-primary-foreground">
                  News
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-primary-foreground/80 hover:text-primary-foreground">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="text-primary-foreground/80">Durbar Marg, Kathmandu 44600, Nepal</li>
              <li>
                <a href="tel:+9771XXXXXXX" className="text-primary-foreground/80 hover:text-primary-foreground">
                  +977-1-XXXXXXX
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@swiftelite.np"
                  className="text-primary-foreground/80 hover:text-primary-foreground"
                >
                  info@swiftelite.np
                </a>
              </li>
              <li>
                <Link href="/track" className="text-primary-foreground/80 hover:text-primary-foreground">
                  Track & Trace
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-primary-foreground/20">
          <p className="text-primary-foreground/60 text-sm">
            © {new Date().getFullYear()} SwiftElite Courier Nepal. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
