import { Footer } from "@/components/layout/footer";

import { Card, CardContent } from "@/components/ui/card";
import { Award, Globe, Shield, Users } from "lucide-react";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            About LegalHub
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We're revolutionizing how people connect with legal professionals,
            making legal services more accessible, transparent, and efficient
            for everyone.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-semibold mb-6">Our Mission</h2>
            <p className="text-lg text-muted-foreground mb-4">
              LegalHub was founded with a simple yet powerful vision: to bridge
              the gap between those who need legal help and the qualified
              professionals who can provide it.
            </p>
            <p className="text-lg text-muted-foreground mb-4">
              We believe that everyone deserves access to quality legal
              services, regardless of their location or background. Our platform
              combines cutting-edge technology with human expertise to create a
              seamless experience for both clients and legal professionals.
            </p>
            <p className="text-lg text-muted-foreground">
              From appointment booking to secure document sharing and
              e-signatures, we handle the technical complexities so you can
              focus on what matters most - getting the legal help you need or
              growing your practice.
            </p>
          </div>
          <div>
            <img
              src="/modern-office-with-legal-professionals-working.jpg"
              alt="LegalHub team"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <Card className="transition-all duration-300 ease-in-out hover:shadow-xl hover:-translate-y-2 hover:scale-[1.02]">
            <CardContent className="pt-6">
              <Users className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">10,000+</h3>
              <p className="text-muted-foreground">Active Users</p>
            </CardContent>
          </Card>
          <Card className="transition-all duration-300 ease-in-out hover:shadow-xl hover:-translate-y-2 hover:scale-[1.02]">
            <CardContent className="pt-6">
              <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">2,500+</h3>
              <p className="text-muted-foreground">Verified Professionals</p>
            </CardContent>
          </Card>
          <Card className="transition-all duration-300 ease-in-out hover:shadow-xl hover:-translate-y-2 hover:scale-[1.02]">
            <CardContent className="pt-6">
              <Globe className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">50+</h3>
              <p className="text-muted-foreground">Cities Served</p>
            </CardContent>
          </Card>
          <Card className="transition-all duration-300 ease-in-out hover:shadow-xl hover:-translate-y-2 hover:scale-[1.02]">
            <CardContent className="pt-6">
              <Award className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">4.9/5</h3>
              <p className="text-muted-foreground">Average Rating</p>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-semibold mb-6">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-3">Transparency</h3>
              <p className="text-muted-foreground">
                Clear pricing, verified credentials, and honest reviews help you
                make informed decisions.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3">Security</h3>
              <p className="text-muted-foreground">
                Your sensitive legal information is protected with
                enterprise-grade security measures.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3">Accessibility</h3>
              <p className="text-muted-foreground">
                Legal services should be available to everyone, anywhere, at any
                time.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
