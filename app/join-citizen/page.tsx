import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  BarChart3,
  Clock,
  FileText,
  PenSquare,
  ShieldCheck,
  Video,
} from "lucide-react";

export default function CitizenPage() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-800">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Your Legal Matters, Simplified
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Access expert legal help, handle procedures remotely, and track your
            progress with ease.
          </p>
        </div>

        {/* Two-Column Layout */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column: Features */}
          <div>
            <h2 className="text-3xl font-semibold mb-6">Why Use LegalHub?</h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                {/* Note: Assumes 'primary' color is set to a gold/yellow tone in tailwind.config.js */}
                <Video className="h-7 w-7 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-lg">
                    Online or In-Person Consultation
                  </h3>
                  <p className="text-muted-foreground">
                    Connect with legal experts remotely or schedule a
                    face-to-face meeting.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <FileText className="h-7 w-7 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-lg">
                    Remote Legal Procedures
                  </h3>
                  <p className="text-muted-foreground">
                    Handle demand letters, lease drafting, and more from
                    anywhere.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <BarChart3 className="h-7 w-7 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-lg">Track Your Progress</h3>
                  <p className="text-muted-foreground">
                    Get a clear, real-time overview of your case and procedures
                    online.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <PenSquare className="h-7 w-7 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-lg">
                    Sign Mandates Online
                  </h3>
                  <p className="text-muted-foreground">
                    Securely review and sign legal mandates from your computer
                    or phone.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <ShieldCheck className="h-7 w-7 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-lg">
                    Secure & Confidential
                  </h3>
                  <p className="text-muted-foreground">
                    Your data is protected with industry-leading security
                    measures.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Clock className="h-7 w-7 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-lg">Save Time & Effort</h3>
                  <p className="text-muted-foreground">
                    Our streamlined process avoids unnecessary travel and
                    paperwork.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Signup Form */}
          <div className="bg-white p-8 rounded-lg border border-gray-200 shadow-sm">
            <h2 className="text-2xl font-semibold mb-2">Create Your Account</h2>
            <p className="text-muted-foreground mb-6">
              Sign up to manage your legal needs in one place.
            </p>
            <form className="space-y-4">
              <div>
                <Label htmlFor="fullName">Full Name</Label>
                <Input id="fullName" placeholder="John Doe" className="mt-2" />
              </div>
              <div>
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  className="mt-2"
                />
              </div>
              <div>
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  className="mt-2"
                />
              </div>
              {/* Note: This button styling mimics the gold/yellow button in the screenshot */}
              <Button className="w-full bg-yellow-600 text-white hover:bg-yellow-700 h-11 text-base">
                Sign Up for Free
              </Button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
