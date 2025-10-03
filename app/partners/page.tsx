import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Gift, Handshake, Users } from "lucide-react";

export default function PartnersPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Become a LegalHub Ambassador
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Join our exclusive program for legal professionals and earn rewards
            by helping us grow the future of legal services in Morocco.
          </p>
          <Button className="mt-8 px-8 py-6 text-lg">
            Apply to Join <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>

      <div className="container mx-auto px-4 py-20">
        {/* Why Join Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold">
              Why Partner With LegalHub?
            </h2>
            <p className="text-lg text-muted-foreground mt-2">
              Our Ambassador Program is designed to reward your influence and
              expertise.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="bg-white p-8 rounded-lg border shadow-sm hover:shadow-xl transition-shadow">
              <Handshake className="h-12 w-12 text-primary mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-2">
                Expand Your Network
              </h3>
              <p className="text-muted-foreground">
                Connect with a growing community of forward-thinking legal
                professionals and build valuable relationships.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg border shadow-sm hover:shadow-xl transition-shadow">
              <Gift className="h-12 w-12 text-primary mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-2">
                Earn Generous Rewards
              </h3>
              <p className="text-muted-foreground">
                Receive commissions and exclusive benefits for every new
                professional you refer to the LegalHub platform.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg border shadow-sm hover:shadow-xl transition-shadow">
              <Users className="h-12 w-12 text-primary mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-2">Shape the Industry</h3>
              <p className="text-muted-foreground">
                Play a key role in modernizing the legal landscape by promoting
                a platform built on efficiency and trust.
              </p>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section>
          <div className="bg-white border rounded-lg p-8 lg:p-12">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-semibold">
                A Simple Path to Rewards
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8 text-center max-w-5xl mx-auto">
              <div>
                <div className="flex items-center justify-center h-16 w-16 bg-primary/10 text-primary rounded-full mx-auto mb-4 font-bold text-2xl">
                  1
                </div>
                <h3 className="text-xl font-semibold mb-2">Apply</h3>
                <p className="text-muted-foreground">
                  Submit a simple application to join our Ambassador Program.
                </p>
              </div>
              <div className="mt-8 md:mt-0">
                <div className="flex items-center justify-center h-16 w-16 bg-primary/10 text-primary rounded-full mx-auto mb-4 font-bold text-2xl">
                  2
                </div>
                <h3 className="text-xl font-semibold mb-2">Refer</h3>
                <p className="text-muted-foreground">
                  Share your unique referral link with colleagues and peers in
                  your network.
                </p>
              </div>
              <div className="mt-8 md:mt-0">
                <div className="flex items-center justify-center h-16 w-16 bg-primary/10 text-primary rounded-full mx-auto mb-4 font-bold text-2xl">
                  3
                </div>
                <h3 className="text-xl font-semibold mb-2">Earn</h3>
                <p className="text-muted-foreground">
                  Get rewarded for every successful sign-up that comes through
                  your link.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
}
