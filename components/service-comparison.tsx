import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { CheckCircle, XCircle } from "lucide-react"

export default function ServiceComparison() {
  return (
    <div className="space-y-6">
      <div className="text-center max-w-3xl mx-auto mb-8">
        <h2 className="text-2xl font-bold mb-4">Service Level Comparison</h2>
        <p className="text-muted-foreground">
          Compare our different service levels to find the right option for your needs.
        </p>
      </div>

      <div className="rounded-lg border overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[250px]">Feature</TableHead>
              <TableHead className="text-center">Standard</TableHead>
              <TableHead className="text-center">Premium</TableHead>
              <TableHead className="text-center">Elite</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium">Delivery Time</TableCell>
              <TableCell className="text-center">2-3 Business Days</TableCell>
              <TableCell className="text-center">Next Business Day</TableCell>
              <TableCell className="text-center">Same Day</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Real-time Tracking</TableCell>
              <TableCell className="text-center">
                <CheckCircle className="h-5 w-5 text-green-500 mx-auto" />
              </TableCell>
              <TableCell className="text-center">
                <CheckCircle className="h-5 w-5 text-green-500 mx-auto" />
              </TableCell>
              <TableCell className="text-center">
                <CheckCircle className="h-5 w-5 text-green-500 mx-auto" />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Signature Confirmation</TableCell>
              <TableCell className="text-center">Optional</TableCell>
              <TableCell className="text-center">
                <CheckCircle className="h-5 w-5 text-green-500 mx-auto" />
              </TableCell>
              <TableCell className="text-center">
                <CheckCircle className="h-5 w-5 text-green-500 mx-auto" />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Insurance Coverage</TableCell>
              <TableCell className="text-center">Up to $100</TableCell>
              <TableCell className="text-center">Up to $1,000</TableCell>
              <TableCell className="text-center">Up to $10,000</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">SMS Notifications</TableCell>
              <TableCell className="text-center">
                <XCircle className="h-5 w-5 text-red-500 mx-auto" />
              </TableCell>
              <TableCell className="text-center">
                <CheckCircle className="h-5 w-5 text-green-500 mx-auto" />
              </TableCell>
              <TableCell className="text-center">
                <CheckCircle className="h-5 w-5 text-green-500 mx-auto" />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Priority Support</TableCell>
              <TableCell className="text-center">
                <XCircle className="h-5 w-5 text-red-500 mx-auto" />
              </TableCell>
              <TableCell className="text-center">
                <CheckCircle className="h-5 w-5 text-green-500 mx-auto" />
              </TableCell>
              <TableCell className="text-center">
                <CheckCircle className="h-5 w-5 text-green-500 mx-auto" />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Dedicated Agent</TableCell>
              <TableCell className="text-center">
                <XCircle className="h-5 w-5 text-red-500 mx-auto" />
              </TableCell>
              <TableCell className="text-center">
                <XCircle className="h-5 w-5 text-red-500 mx-auto" />
              </TableCell>
              <TableCell className="text-center">
                <CheckCircle className="h-5 w-5 text-green-500 mx-auto" />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Specialized Handling</TableCell>
              <TableCell className="text-center">
                <XCircle className="h-5 w-5 text-red-500 mx-auto" />
              </TableCell>
              <TableCell className="text-center">Optional</TableCell>
              <TableCell className="text-center">
                <CheckCircle className="h-5 w-5 text-green-500 mx-auto" />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">24/7 Customer Service</TableCell>
              <TableCell className="text-center">
                <XCircle className="h-5 w-5 text-red-500 mx-auto" />
              </TableCell>
              <TableCell className="text-center">
                <XCircle className="h-5 w-5 text-red-500 mx-auto" />
              </TableCell>
              <TableCell className="text-center">
                <CheckCircle className="h-5 w-5 text-green-500 mx-auto" />
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>

      <p className="text-sm text-muted-foreground text-center">
        Service availability may vary by location. Contact customer service for detailed information.
      </p>
    </div>
  )
}
