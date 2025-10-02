import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Clock, DollarSign, MapPin, Star } from "lucide-react";

export default function FindLawyersPage() {
  const lawyers = [
    {
      name: "Sarah Johnson",
      specialty: "Corporate Law",
      rating: 4.9,
      reviews: 127,
      location: "New York, NY",
      hourlyRate: "$450",
      experience: "15 years",
      image: "/professional-woman-lawyer.png",
    },
    {
      name: "Michael Chen",
      specialty: "Criminal Defense",
      rating: 4.8,
      reviews: 89,
      location: "Los Angeles, CA",
      hourlyRate: "$380",
      experience: "12 years",
      image: "/professional-lawyer.png",
    },
    {
      name: "Emily Rodriguez",
      specialty: "Family Law",
      rating: 4.9,
      reviews: 156,
      location: "Chicago, IL",
      hourlyRate: "$320",
      experience: "10 years",
      image: "/professional-woman-lawyer-hispanic.jpg",
    },
  ];

  return (
    <main className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Find Legal Professionals
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Connect with verified lawyers and legal experts in your area
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {lawyers.map((lawyer, index) => (
            <Card
              key={index}
              className="transition-all duration-300 ease-in-out hover:shadow-xl hover:-translate-y-2 hover:scale-[1.02]"
            >
              <CardHeader className="text-center">
                <img
                  src={lawyer.image || "/placeholder.svg"}
                  alt={lawyer.name}
                  className="w-20 h-20 rounded-full mx-auto mb-4"
                />
                <CardTitle className="text-xl">{lawyer.name}</CardTitle>
                <CardDescription>
                  <Badge variant="secondary" className="mb-2">
                    {lawyer.specialty}
                  </Badge>
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="font-semibold">{lawyer.rating}</span>
                    <span className="text-muted-foreground">
                      ({lawyer.reviews} reviews)
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  <span>{lawyer.location}</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Clock className="h-4 w-4" />
                  <span>{lawyer.experience} experience</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <DollarSign className="h-4 w-4" />
                  <span>{lawyer.hourlyRate}/hour</span>
                </div>
                <Button className="w-full mt-4">View Profile & Book</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      <Footer />
    </main>
  );
}
