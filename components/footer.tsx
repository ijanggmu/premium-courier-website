import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Image src="/images/nepal-air-export-logo-white.png" alt="Nepal Air Export Logo" width={40} height={40} />
              <h3 className="text-xl font-bold">Nepal Air Export</h3>
            </div>
            <p className="text-primary-foreground/80 mb-4">
              Nepal's #1 courier service & international export solution. Fast, reliable domestic delivery and global
              shipping with real-time tracking and customs handling.
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://www.facebook.com/nepairexport"
                className="text-primary-foreground/80 hover:text-primary-foreground"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link
                href="https://www.twitter.com/nepairexport"
                className="text-primary-foreground/80 hover:text-primary-foreground"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link
                href="https://www.instagram.com/nepairexport"
                className="text-primary-foreground/80 hover:text-primary-foreground"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link
                href="https://www.linkedin.com/company/nepairexport"
                className="text-primary-foreground/80 hover:text-primary-foreground"
                aria-label="LinkedIn"
              >
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
                  href="/services/international-exports"
                  className="text-primary-foreground/80 hover:text-primary-foreground"
                >
                  International Exports
                </Link>
              </li>
              <li>
                <Link
                  href="/services/kathmandu-delivery"
                  className="text-primary-foreground/80 hover:text-primary-foreground"
                >
                  Same-Day Kathmandu Delivery
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
                <Link href="/coverage" className="text-primary-foreground/80 hover:text-primary-foreground">
                  Coverage Areas
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-primary-foreground/80 hover:text-primary-foreground">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-primary-foreground/80 hover:text-primary-foreground">
                  FAQs
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-primary-foreground/80 hover:text-primary-foreground">
                  Terms & Conditions
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
                  href="mailto:info@nepairexport.com"
                  className="text-primary-foreground/80 hover:text-primary-foreground"
                >
                  info@nepairexport.com
                </a>
              </li>
              <li>
                <Link href="/track" className="text-primary-foreground/80 hover:text-primary-foreground">
                  Track Your Package
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}
