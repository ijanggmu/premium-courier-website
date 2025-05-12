"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"

const services = [
  {
    title: "Domestic Courier Services",
    href: "/services/nepal-delivery",
    description: "Fast, reliable delivery across Kathmandu and all of Nepal",
  },
  {
    title: "International Exports",
    href: "/services/international-exports",
    description: "Reliable export services from Nepal to worldwide destinations",
  },
  {
    title: "Same-Day Kathmandu Delivery",
    href: "/services/kathmandu-delivery",
    description: "Express same-day delivery within Kathmandu Valley",
  },
  {
    title: "International Shipping",
    href: "/services/international-shipping",
    description: "Global delivery solutions with customs handling and tracking",
  },
  {
    title: "Specialized Handling",
    href: "/services/specialized-handling",
    description: "White-glove service for fragile, valuable, or sensitive items",
  },
  {
    title: "Corporate Solutions",
    href: "/services/corporate-solutions",
    description: "Tailored logistics solutions for businesses of all sizes",
  },
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between py-4">
        <div className="flex items-center gap-6 md:gap-10">
          <Link href="/" className="flex items-center space-x-2" aria-label="Nepal Air Export Home">
            <Image
              src="/images/nepal-air-export-logo.png"
              alt="Nepal Air Export Logo"
              width={40}
              height={40}
              className="h-10 w-auto"
            />
            <span className="text-xl font-bold text-primary">Nepal Air Export</span>
          </Link>
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Services</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    {services.map((service) => (
                      <li key={service.title}>
                        <NavigationMenuLink asChild>
                          <Link
                            href={service.href}
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">{service.title}</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              {service.description}
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/pricing" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>Pricing</NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/track" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>Track & Trace</NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/coverage" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>Coverage</NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/contact" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>Contact</NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <div className="flex items-center gap-4">
          <Link href="/contact" className="hidden md:block">
            <Button>Send a Parcel</Button>
          </Link>
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="outline" size="icon" aria-label="Open menu">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="flex flex-col gap-4 mt-8">
                <Link href="/" onClick={() => setIsOpen(false)} className="text-lg font-medium">
                  Home
                </Link>
                <Link href="/services" onClick={() => setIsOpen(false)} className="text-lg font-medium">
                  Services
                </Link>
                <Link href="/pricing" onClick={() => setIsOpen(false)} className="text-lg font-medium">
                  Pricing
                </Link>
                <Link href="/track" onClick={() => setIsOpen(false)} className="text-lg font-medium">
                  Track & Trace
                </Link>
                <Link href="/coverage" onClick={() => setIsOpen(false)} className="text-lg font-medium">
                  Coverage
                </Link>
                <Link href="/contact" onClick={() => setIsOpen(false)} className="text-lg font-medium">
                  Contact
                </Link>
                <Link href="/quote" onClick={() => setIsOpen(false)}>
                  <Button className="w-full mt-4">Send a Parcel</Button>
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
