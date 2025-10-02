import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Scale,
  Users,
  FileText,
  Shield,
  Clock,
  CheckCircle,
} from "lucide-react";

export default function LegalServicesPage() {
  const services = [
    {
      icon: Scale,
      title: "Corporate Law",
      description:
        "Business formation, contracts, mergers & acquisitions, compliance",
      features: [
        "Contract Review",
        "Business Formation",
        "M&A Support",
        "Compliance Consulting",
      ],
      startingPrice: "$300/hour",
    },
    {
      icon: Users,
      title: "Family Law",
      description: "Divorce, custody, adoption, prenuptial agreements",
      features: [
        "Divorce Proceedings",
        "Child Custody",
        "Adoption Services",
        "Prenuptial Agreements",
      ],
      startingPrice: "$250/hour",
    },
    {
      icon: FileText,
      title: "Real Estate Law",
      description:
        "Property transactions, disputes, zoning, commercial real estate",
      features: [
        "Property Transactions",
        "Title Review",
        "Zoning Issues",
        "Commercial Leases",
      ],
      startingPrice: "$275/hour",
    },
    {
      icon: Shield,
      title: "Criminal Defense",
      description: "Criminal charges, DUI defense, appeals, expungements",
      features: [
        "Criminal Defense",
        "DUI Cases",
        "Appeals",
        "Record Expungement",
      ],
      startingPrice: "$350/hour",
    },
    {
      icon: Clock,
      title: "Personal Injury",
      description: "Accident claims, medical malpractice, wrongful death",
      features: [
        "Accident Claims",
        "Medical Malpractice",
        "Wrongful Death",
        "Insurance Disputes",
      ],
      startingPrice: "Contingency Fee",
    },
    {
      icon: CheckCircle,
      title: "Immigration Law",
      description: "Visa applications, citizenship, deportation defense",
      features: [
        "Visa Applications",
        "Citizenship Process",
        "Deportation Defense",
        "Family Reunification",
      ],
      startingPrice: "$200/hour",
    },
  ];

  return (
    <main className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Legal Services
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive legal services from verified professionals across all
            practice areas
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                    <Badge variant="secondary" className="mt-1">
                      {service.startingPrice}
                    </Badge>
                  </div>
                </div>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Services Include:</h4>
                  <ul className="space-y-1">
                    {service.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-center gap-2 text-sm"
                      >
                        <CheckCircle className="h-4 w-4 text-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <Button className="w-full">Find {service.title} Lawyers</Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-2xl font-semibold mb-4">Need Help Choosing?</h2>
          <p className="text-muted-foreground mb-6">
            Not sure which legal service you need? Our team can help you find
            the right professional for your situation.
          </p>
          <Button size="lg" asChild>
            <a href="/contact">Get Free Consultation</a>
          </Button>
        </div>
      </div>
      <Footer />
    </main>
  );
}
