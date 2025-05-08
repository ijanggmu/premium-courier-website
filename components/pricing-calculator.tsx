"use client"

import Link from "next/link"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function PricingCalculator() {
  const [isCalculating, setIsCalculating] = useState(false)
  const [quote, setQuote] = useState<number | null>(null)
  const [serviceLevel, setServiceLevel] = useState("standard")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsCalculating(true)

    // Simulate API call for pricing calculation
    setTimeout(() => {
      // Generate a random price based on service level
      let basePrice = 0
      switch (serviceLevel) {
        case "standard":
          basePrice = 9.99
          break
        case "premium":
          basePrice = 19.99
          break
        case "elite":
          basePrice = 39.99
          break
      }

      // Add some randomness to the price
      const randomFactor = Math.random() * 10 + 5
      setQuote(Number.parseFloat((basePrice + randomFactor).toFixed(2)))
      setIsCalculating(false)
    }, 1500)
  }

  return (
    <Card className="max-w-3xl mx-auto">
      <CardContent className="pt-6">
        <Tabs defaultValue="domestic" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-6">
            <TabsTrigger value="domestic">Domestic</TabsTrigger>
            <TabsTrigger value="international">International</TabsTrigger>
          </TabsList>

          <TabsContent value="domestic">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="origin">Origin</Label>
                  <Select defaultValue="ny">
                    <SelectTrigger id="origin">
                      <SelectValue placeholder="Select origin" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="ny">New York, NY</SelectItem>
                      <SelectItem value="la">Los Angeles, CA</SelectItem>
                      <SelectItem value="ch">Chicago, IL</SelectItem>
                      <SelectItem value="ho">Houston, TX</SelectItem>
                      <SelectItem value="mi">Miami, FL</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="destination">Destination</Label>
                  <Select defaultValue="la">
                    <SelectTrigger id="destination">
                      <SelectValue placeholder="Select destination" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="ny">New York, NY</SelectItem>
                      <SelectItem value="la">Los Angeles, CA</SelectItem>
                      <SelectItem value="ch">Chicago, IL</SelectItem>
                      <SelectItem value="ho">Houston, TX</SelectItem>
                      <SelectItem value="mi">Miami, FL</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="weight">Weight (kg)</Label>
                  <Input id="weight" type="number" min="0.1" step="0.1" defaultValue="1" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="dimensions">Dimensions (cm)</Label>
                  <div className="grid grid-cols-3 gap-2">
                    <Input placeholder="Length" type="number" min="1" defaultValue="20" />
                    <Input placeholder="Width" type="number" min="1" defaultValue="15" />
                    <Input placeholder="Height" type="number" min="1" defaultValue="10" />
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <Label>Service Level</Label>
                <RadioGroup
                  defaultValue="standard"
                  onValueChange={setServiceLevel}
                  className="grid grid-cols-1 md:grid-cols-3 gap-4"
                >
                  <div className="flex items-center space-x-2 border rounded-md p-3 cursor-pointer hover:bg-accent">
                    <RadioGroupItem value="standard" id="standard" />
                    <Label htmlFor="standard" className="cursor-pointer flex-1">
                      Standard (2-3 days)
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2 border rounded-md p-3 cursor-pointer hover:bg-accent">
                    <RadioGroupItem value="premium" id="premium" />
                    <Label htmlFor="premium" className="cursor-pointer flex-1">
                      Premium (Next day)
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2 border rounded-md p-3 cursor-pointer hover:bg-accent">
                    <RadioGroupItem value="elite" id="elite" />
                    <Label htmlFor="elite" className="cursor-pointer flex-1">
                      Elite (Same day)
                    </Label>
                  </div>
                </RadioGroup>
              </div>

              <div className="flex justify-center pt-4">
                <Button type="submit" size="lg" disabled={isCalculating}>
                  {isCalculating ? "Calculating..." : "Calculate Price"}
                </Button>
              </div>

              {quote !== null && (
                <div className="mt-6 text-center p-4 bg-muted rounded-lg">
                  <p className="text-sm text-muted-foreground mb-1">Estimated Price</p>
                  <p className="text-3xl font-bold">${quote}</p>
                  <p className="text-sm text-muted-foreground mt-2">
                    Prices are estimates and may vary based on actual dimensions and weight
                  </p>
                  <Button asChild className="mt-4">
                    <Link href={`/quote?price=${quote}&service=${serviceLevel}`}>Book This Shipment</Link>
                  </Button>
                </div>
              )}
            </form>
          </TabsContent>

          <TabsContent value="international">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="origin-country">Origin Country</Label>
                  <Select defaultValue="us">
                    <SelectTrigger id="origin-country">
                      <SelectValue placeholder="Select origin country" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="us">United States</SelectItem>
                      <SelectItem value="ca">Canada</SelectItem>
                      <SelectItem value="uk">United Kingdom</SelectItem>
                      <SelectItem value="au">Australia</SelectItem>
                      <SelectItem value="de">Germany</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="destination-country">Destination Country</Label>
                  <Select defaultValue="uk">
                    <SelectTrigger id="destination-country">
                      <SelectValue placeholder="Select destination country" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="us">United States</SelectItem>
                      <SelectItem value="ca">Canada</SelectItem>
                      <SelectItem value="uk">United Kingdom</SelectItem>
                      <SelectItem value="au">Australia</SelectItem>
                      <SelectItem value="de">Germany</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="weight-int">Weight (kg)</Label>
                  <Input id="weight-int" type="number" min="0.1" step="0.1" defaultValue="1" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="dimensions-int">Dimensions (cm)</Label>
                  <div className="grid grid-cols-3 gap-2">
                    <Input placeholder="Length" type="number" min="1" defaultValue="20" />
                    <Input placeholder="Width" type="number" min="1" defaultValue="15" />
                    <Input placeholder="Height" type="number" min="1" defaultValue="10" />
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <Label>Service Level</Label>
                <RadioGroup
                  defaultValue="standard"
                  onValueChange={setServiceLevel}
                  className="grid grid-cols-1 md:grid-cols-3 gap-4"
                >
                  <div className="flex items-center space-x-2 border rounded-md p-3 cursor-pointer hover:bg-accent">
                    <RadioGroupItem value="standard" id="standard-int" />
                    <Label htmlFor="standard-int" className="cursor-pointer flex-1">
                      Standard (5-7 days)
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2 border rounded-md p-3 cursor-pointer hover:bg-accent">
                    <RadioGroupItem value="premium" id="premium-int" />
                    <Label htmlFor="premium-int" className="cursor-pointer flex-1">
                      Premium (3-4 days)
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2 border rounded-md p-3 cursor-pointer hover:bg-accent">
                    <RadioGroupItem value="elite" id="elite-int" />
                    <Label htmlFor="elite-int" className="cursor-pointer flex-1">
                      Elite (1-2 days)
                    </Label>
                  </div>
                </RadioGroup>
              </div>

              <div className="flex justify-center pt-4">
                <Button type="submit" size="lg" disabled={isCalculating}>
                  {isCalculating ? "Calculating..." : "Calculate Price"}
                </Button>
              </div>

              {quote !== null && (
                <div className="mt-6 text-center p-4 bg-muted rounded-lg">
                  <p className="text-sm text-muted-foreground mb-1">Estimated Price</p>
                  <p className="text-3xl font-bold">${(quote * 2.5).toFixed(2)}</p>
                  <p className="text-sm text-muted-foreground mt-2">
                    International prices are estimates and may vary based on customs and duties
                  </p>
                  <Button asChild className="mt-4">
                    <Link href={`/quote?price=${(quote * 2.5).toFixed(2)}&service=${serviceLevel}&international=true`}>
                      Book This Shipment
                    </Link>
                  </Button>
                </div>
              )}
            </form>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}
