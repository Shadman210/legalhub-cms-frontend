import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { TrendingUp, Users, DollarSign, ArrowRight } from "lucide-react"

const benefits = [
  {
    icon: Users,
    title: "Expand Your Client Base",
    description: "Connect with clients actively seeking legal services in your area of expertise.",
  },
  {
    icon: TrendingUp,
    title: "Grow Your Practice",
    description: "Access powerful tools to manage your practice, track performance, and increase efficiency.",
  },
  {
    icon: DollarSign,
    title: "Secure Payments",
    description: "Get paid faster with our integrated payment system and transparent fee structure.",
  },
]

export function ProfessionalCTASection() {
  return (
    <section id="professionals" className="py-20 bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl lg:text-4xl font-bold text-balance">Join LegalHub as a Legal Professional</h2>
              <p className="text-xl text-secondary-foreground/80 text-pretty">
                Expand your practice, connect with more clients, and streamline your legal services with our
                comprehensive platform designed for legal professionals.
              </p>
            </div>

            <div className="grid gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-secondary-foreground/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <benefit.icon className="h-6 w-6 text-secondary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                    <p className="text-secondary-foreground/80">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                variant="secondary"
                className="bg-secondary-foreground text-secondary hover:bg-secondary-foreground/90"
                asChild
              >
                <Link href="/join-professionals">
                  Join as Professional
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-secondary-foreground/20 text-secondary-foreground hover:bg-secondary-foreground/10 bg-transparent"
                asChild
              >
                <Link href="/about">Learn More</Link>
              </Button>
            </div>
          </div>

          <div className="space-y-6">
            <Card className="bg-secondary-foreground/10 border-secondary-foreground/20">
              <CardContent className="p-6">
                <div className="text-center space-y-4">
                  <div className="text-4xl font-bold">500+</div>
                  <p className="text-secondary-foreground/80">Verified Legal Professionals</p>
                </div>
              </CardContent>
            </Card>
            <div className="grid grid-cols-2 gap-4">
              <Card className="bg-secondary-foreground/10 border-secondary-foreground/20">
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold mb-2">95%</div>
                  <p className="text-sm text-secondary-foreground/80">Client Satisfaction</p>
                </CardContent>
              </Card>
              <Card className="bg-secondary-foreground/10 border-secondary-foreground/20">
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold mb-2">24/7</div>
                  <p className="text-sm text-secondary-foreground/80">Platform Support</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
