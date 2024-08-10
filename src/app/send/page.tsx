import {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent,
    CardFooter,
  } from "@/components/ui/card";
  import { Label } from "@/components/ui/label";
  import { Input } from "@/components/ui/input";
  import { Textarea } from "@/components/ui/textarea";
  import { Button } from "@/components/ui/button";
  import MaxWidthWrapper from "@/components/ui/MaxWidthWrapper";
  
  export default function Component() {
    return (
      <MaxWidthWrapper className="flex items-center justify-center mt-6 mb-6">
        <Card className="w-full max-w-xl">
          <CardHeader>
            <CardTitle>Send Bitcoin</CardTitle>
            <CardDescription>
              Transfer BTC to a recipient's wallet.
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="recipient">Recipient Address</Label>
              <Input
                id="recipient"
                placeholder="Enter the recipient's Bitcoin address"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="amount">Amount (BTC)</Label>
              <Input id="amount" type="number" placeholder="0.00" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="message">Custom Message</Label>
              <Textarea
                id="message"
                placeholder="This transaction will be processed soon..."
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="invoice">Invoice File</Label>
              <Input id="invoice" type="file" />
            </div>
            <Button type="submit">Send Bitcoin</Button>
          </CardContent>
          <CardFooter>
            <div className="grid gap-4">
              <div>
                <p className="text-sm font-medium">Transaction Details</p>
                <div className="grid grid-cols-2 gap-2 text-sm text-muted-foreground">
                  <p>Transaction Hash:</p>
                  <p className="font-medium">0x123abc...xyz</p>
                  <p>Confirmation Status:</p>
                  <p className="font-medium">Pending</p>
                </div>
              </div>
            </div>
          </CardFooter>
        </Card>
      </MaxWidthWrapper>
    );
  }
  