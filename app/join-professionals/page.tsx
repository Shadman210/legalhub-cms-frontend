import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Calendar, CheckCircle, CreditCard, Shield, Users } from "lucide-react";

export default function JoinProfessionalsPage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Join LegalHub as a Professional
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Expand your practice and connect with clients who need your
            expertise
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-2xl font-semibold mb-6">Why Join LegalHub?</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-primary mt-1" />
                <div>
                  <h3 className="font-semibold">Expand Your Client Base</h3>
                  <p className="text-muted-foreground">
                    Connect with clients actively seeking legal services
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Users className="h-6 w-6 text-primary mt-1" />
                <div>
                  <h3 className="font-semibold">Manage Your Practice</h3>
                  <p className="text-muted-foreground">
                    Tools for scheduling, client communication, and case
                    management
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Calendar className="h-6 w-6 text-primary mt-1" />
                <div>
                  <h3 className="font-semibold">Flexible Scheduling</h3>
                  <p className="text-muted-foreground">
                    Set your availability and let clients book appointments
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CreditCard className="h-6 w-6 text-primary mt-1" />
                <div>
                  <h3 className="font-semibold">Secure Payments</h3>
                  <p className="text-muted-foreground">
                    Get paid securely with automated invoicing and payouts
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Shield className="h-6 w-6 text-primary mt-1" />
                <div>
                  <h3 className="font-semibold">Professional Verification</h3>
                  <p className="text-muted-foreground">
                    Build trust with verified credentials and client reviews
                  </p>
                </div>
              </div>
            </div>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Professional Registration</CardTitle>
              <CardDescription>
                Fill out the form below to start your application process
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label className="mb-2" htmlFor="firstName">
                    First Name
                  </Label>
                  <Input id="firstName" placeholder="John" />
                </div>
                <div>
                  <Label className="mb-2" htmlFor="lastName">
                    Last Name
                  </Label>
                  <Input id="lastName" placeholder="Doe" />
                </div>
              </div>
              <div>
                <Label className="mb-2" htmlFor="email">
                  Professional Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="john.doe@lawfirm.com"
                />
              </div>
              <div>
                <Label className="mb-2" htmlFor="phone">
                  Phone Number
                </Label>
                <Input id="phone" type="tel" placeholder="+1 (555) 123-4567" />
              </div>
              <div>
                <Label className="mb-2" htmlFor="barNumber">
                  Bar Registration Number
                </Label>
                <Input id="barNumber" placeholder="Enter your bar number" />
              </div>
              <div>
                <Label className="mb-2" htmlFor="specialty">
                  Legal Specialization
                </Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select your specialty" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="corporate">Corporate Law</SelectItem>
                    <SelectItem value="criminal">Criminal Defense</SelectItem>
                    <SelectItem value="family">Family Law</SelectItem>
                    <SelectItem value="personal-injury">
                      Personal Injury
                    </SelectItem>
                    <SelectItem value="real-estate">Real Estate</SelectItem>
                    <SelectItem value="immigration">Immigration</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label className="mb-2" htmlFor="experience">
                  Years of Experience
                </Label>
                <Input id="experience" type="number" placeholder="10" />
              </div>
              <div>
                <Label className="mb-2" htmlFor="bio">
                  Professional Bio
                </Label>
                <Textarea
                  id="bio"
                  placeholder="Tell us about your experience and expertise..."
                />
              </div>
              <Button className="w-full">Submit Application</Button>
            </CardContent>
          </Card>
        </div>
      </div>
      <Footer />
    </main>
  );
}
