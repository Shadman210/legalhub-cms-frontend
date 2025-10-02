import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Search,
  UserCheck,
  Calendar,
  CreditCard,
  MessageSquare,
  FileCheck,
} from "lucide-react";

export default function HowItWorksPage() {
  const steps = [
    {
      icon: Search,
      title: "Search & Browse",
      description:
        "Use our advanced search to find legal professionals by location, specialty, rating, and price range.",
      details: [
        "Filter by practice area",
        "View verified profiles",
        "Read client reviews",
        "Compare pricing",
      ],
    },
    {
      icon: UserCheck,
      title: "Review Profiles",
      description:
        "Examine detailed professional profiles including credentials, experience, and client testimonials.",
      details: [
        "Bar registration verified",
        "Years of experience",
        "Specialization areas",
        "Client success stories",
      ],
    },
    {
      icon: Calendar,
      title: "Book Consultation",
      description:
        "Schedule a consultation at your convenience using our integrated booking system.",
      details: [
        "Real-time availability",
        "Video or in-person options",
        "Flexible scheduling",
        "Automatic reminders",
      ],
    },
    {
      icon: CreditCard,
      title: "Secure Payment",
      description:
        "Pay securely through our platform with transparent pricing and no hidden fees.",
      details: [
        "Multiple payment methods",
        "Secure transactions",
        "Transparent pricing",
        "Automatic invoicing",
      ],
    },
    {
      icon: MessageSquare,
      title: "Communicate",
      description:
        "Stay connected with your legal professional through our secure messaging system.",
      details: [
        "Encrypted messaging",
        "Document sharing",
        "Video consultations",
        "Case updates",
      ],
    },
    {
      icon: FileCheck,
      title: "Complete Service",
      description:
        "Receive your legal documents and services with e-signature capabilities.",
      details: [
        "Digital document delivery",
        "E-signature integration",
        "Secure storage",
        "Easy access anytime",
      ],
    },
  ];

  return (
    <main className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            How LegalHub Works
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Getting legal help has never been easier. Follow these simple steps
            to connect with the right legal professional.
          </p>
        </div>

        <div className="grid gap-8 max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <Card key={index} className="relative">
              <CardContent className="p-8">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-xl">
                      {index + 1}
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <step.icon className="h-6 w-6 text-primary" />
                      <h3 className="text-2xl font-semibold">{step.title}</h3>
                    </div>
                    <p className="text-muted-foreground mb-4 text-lg">
                      {step.description}
                    </p>
                    <ul className="grid md:grid-cols-2 gap-2">
                      {step.details.map((detail, detailIndex) => (
                        <li
                          key={detailIndex}
                          className="flex items-center gap-2 text-sm"
                        >
                          <div className="w-2 h-2 bg-primary rounded-full"></div>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
              {index < steps.length - 1 && (
                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2">
                  <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                  </div>
                </div>
              )}
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <h2 className="text-2xl font-semibold mb-4">Ready to Get Started?</h2>
          <p className="text-muted-foreground mb-6">
            Join thousands of satisfied clients who have found the legal help
            they need through LegalHub.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <a href="/find-lawyers">Find Legal Help</a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="/join-professionals">Join as Professional</a>
            </Button>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
