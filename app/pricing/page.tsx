import { Footer } from "@/components/layout/footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Check, X } from "lucide-react";

export default function PricingPage() {
  const plans = [
    {
      name: "Basic",
      price: "Free",
      description: "Perfect for individuals seeking occasional legal help",
      features: [
        "Search and browse lawyers",
        "View professional profiles",
        "Basic messaging",
        "Document upload (up to 5 files)",
        "Email support",
      ],
      limitations: [
        "No priority booking",
        "Limited video consultations",
        "No advanced search filters",
      ],
      cta: "Get Started Free",
      popular: false,
    },
    {
      name: "Professional",
      price: "$29",
      period: "/month",
      description: "Ideal for businesses and frequent legal service users",
      features: [
        "Everything in Basic",
        "Priority booking",
        "Unlimited video consultations",
        "Advanced search filters",
        "Document storage (up to 100 files)",
        "Priority support",
        "Case management tools",
      ],
      limitations: ["No dedicated account manager"],
      cta: "Start Professional",
      popular: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "For large organizations with complex legal needs",
      features: [
        "Everything in Professional",
        "Dedicated account manager",
        "Custom integrations",
        "Unlimited document storage",
        "Advanced analytics",
        "24/7 phone support",
        "Team management tools",
        "Custom contracts",
      ],
      limitations: [],
      cta: "Contact Sales",
      popular: false,
    },
  ];

  const professionalPricing = [
    {
      feature: "Profile listing",
      cost: "Free",
    },
    {
      feature: "Commission per booking",
      cost: "5% of transaction",
    },
    {
      feature: "Premium profile features",
      cost: "$49/month",
    },
    {
      feature: "Advanced analytics",
      cost: "$99/month",
    },
  ];

  return (
    <main className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Simple, Transparent Pricing
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose the plan that works best for you. No hidden fees, no
            surprises.
          </p>
        </div>

        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-center mb-8">
            For Clients
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <Card
                key={index}
                className={`relative transition-all duration-300 ease-in-out hover:shadow-xl hover:-translate-y-2 hover:scale-[1.02] ${
                  plan.popular ? "border-primary shadow-lg" : ""
                }`}
              >
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    Most Popular
                  </Badge>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <div className="text-2xl md:text-3xl lg:text-4xl font-bold">
                    {plan.price}
                    {plan.period && (
                      <span className="text-base md:text-lg lg:text-xl font-normal text-muted-foreground">
                        {plan.period}
                      </span>
                    )}
                  </div>
                  <CardDescription>{plan.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    {plan.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-center gap-2"
                      >
                        <Check className="h-4 w-4 text-primary" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                    {plan.limitations.map((limitation, limitIndex) => (
                      <div key={limitIndex} className="flex items-center gap-2">
                        <X className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">
                          {limitation}
                        </span>
                      </div>
                    ))}
                  </div>
                  <Button
                    className="w-full"
                    variant={plan.popular ? "default" : "outline"}
                  >
                    {plan.cta}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-center mb-8">
            For Legal Professionals
          </h2>
          <Card className="max-w-2xl mx-auto transition-all duration-300 ease-in-out hover:shadow-xl hover:-translate-y-2 hover:scale-[1.02]">
            <CardHeader className="text-center">
              <CardTitle>Flexible Pricing for Professionals</CardTitle>
              <CardDescription>
                Start for free and only pay when you earn. No upfront costs.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {professionalPricing.map((item, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center py-2 border-b last:border-b-0"
                  >
                    <span>{item.feature}</span>
                    <span className="font-semibold text-primary">
                      {item.cost}
                    </span>
                  </div>
                ))}
              </div>
              <div className="mt-6 text-center">
                <Button size="lg">Join as Professional</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      <Footer />
    </main>
  );
}
