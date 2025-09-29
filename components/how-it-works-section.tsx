import { Card, CardContent } from "@/components/ui/card"
import { Search, Calendar, FileCheck, Star } from "lucide-react"

const steps = [
  {
    icon: Search,
    title: "Find Your Legal Expert",
    description:
      "Browse our directory of verified legal professionals. Filter by specialization, location, and client reviews.",
  },
  {
    icon: Calendar,
    title: "Book Consultation",
    description: "Schedule a consultation at your convenience. Choose from in-person, video, or phone consultations.",
  },
  {
    icon: FileCheck,
    title: "Get Legal Help",
    description: "Work with your chosen professional. Manage documents, track progress, and communicate securely.",
  },
  {
    icon: Star,
    title: "Rate & Review",
    description: "Share your experience to help other clients make informed decisions about legal professionals.",
  },
]

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-balance">How LegalHub Works</h2>
          <p className="text-xl text-muted-foreground text-pretty max-w-3xl mx-auto">
            Getting legal help has never been easier. Follow these simple steps to connect with the right legal
            professional for your needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <Card className="border-0 shadow-sm text-center h-full">
                <CardContent className="pt-8 pb-6">
                  <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <step.icon className="h-8 w-8 text-secondary" />
                  </div>
                  <div className="absolute -top-3 -left-3 w-8 h-8 bg-secondary text-secondary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                </CardContent>
              </Card>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-border transform -translate-y-1/2" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
