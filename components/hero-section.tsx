import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Shield, Users, Clock, Scale } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-balance leading-tight">
                Connect with <span className="text-secondary">Trusted Legal Experts</span>
              </h1>
              <p className="text-xl text-muted-foreground text-pretty max-w-2xl">
                Your legal needs met with expertise and security. Find verified legal professionals, book consultations,
                and manage your legal matters all in one secure platform.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-lg px-8" asChild>
                <Link href="/find-lawyers">
                  Find Legal Help
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 bg-transparent" asChild>
                <Link href="/join-professionals">Join as Professional</Link>
              </Button>
            </div>

            <div className="flex items-center gap-8 pt-8">
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-secondary" />
                <span className="text-sm font-medium">Verified Professionals</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5 text-secondary" />
                <span className="text-sm font-medium">10,000+ Clients Served</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-secondary" />
                <span className="text-sm font-medium">24/7 Support</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-secondary/10 to-accent/10 p-8">
              <img
                src="/modern-office-with-legal-professionals-working.jpg"
                alt="Legal consultation"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-card border rounded-xl p-4 shadow-lg">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center">
                  <Scale className="h-6 w-6 text-secondary" />
                </div>
                <div>
                  <p className="font-semibold">Secure & Confidential</p>
                  <p className="text-sm text-muted-foreground">End-to-end encryption</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
