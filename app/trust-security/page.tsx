import { Footer } from "@/components/layout/footer";
import {
  Building,
  Clock,
  KeyRound,
  MapPin,
  PenSquare,
  Server,
  ShieldCheck,
} from "lucide-react";

export default function SecurityPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            A Foundation of Trust & Security
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We are committed to protecting your data and upholding the highest
            standards of regulatory compliance. Learn about the measures we take
            to ensure your security.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-20">
        {/* Core Security Pillars */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold">
              Our Core Security Pillars
            </h2>
            <p className="text-lg text-muted-foreground mt-2">
              Comprehensive protection at every level of our platform.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Data Hosting Card */}
            <div className="bg-white p-6 rounded-lg border shadow-sm hover:shadow-lg transition-shadow">
              <Server className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">
                Sovereign Data Hosting
              </h3>
              <p className="text-muted-foreground">
                All data is hosted locally in Morocco, ensuring compliance with
                national data residency laws and providing you with sovereign
                control.
              </p>
            </div>

            {/* Compliance Card */}
            <div className="bg-white p-6 rounded-lg border shadow-sm hover:shadow-lg transition-shadow">
              <ShieldCheck className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">
                Regulatory Compliance
              </h3>
              <p className="text-muted-foreground">
                Our platform is fully compliant with GDPR and Moroccan Law
                09-08, guaranteeing the protection of your personal information.
              </p>
            </div>

            {/* E-Signature Card */}
            <div className="bg-white p-6 rounded-lg border shadow-sm hover:shadow-lg transition-shadow">
              <PenSquare className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">
                Compliant E-Signatures
              </h3>
              <p className="text-muted-foreground">
                We provide legally-binding electronic signatures that meet
                rigorous national and international standards for authenticity.
              </p>
            </div>

            {/* Digital Proofs Card */}
            <div className="bg-white p-6 rounded-lg border shadow-sm hover:shadow-lg transition-shadow">
              <Clock className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">
                Timestamping & Digital Proofs
              </h3>
              <p className="text-muted-foreground">
                Every action is secured with cryptographic timestamping to
                create an immutable audit trail and ensure non-repudiation.
              </p>
            </div>

            {/* Authentication Card */}
            <div className="bg-white p-6 rounded-lg border shadow-sm hover:shadow-lg transition-shadow">
              <KeyRound className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">
                Strong Authentication
              </h3>
              <p className="text-muted-foreground">
                We enforce multi-factor authentication (MFA) and other robust
                protocols to protect your account from unauthorized access.
              </p>
            </div>

            {/* Moroccan Solution Card */}
            <div className="bg-white p-6 rounded-lg border shadow-sm hover:shadow-lg transition-shadow">
              <MapPin className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">
                100% Moroccan Solution
              </h3>
              <p className="text-muted-foreground">
                Proudly designed and built in Morocco, our solution is perfectly
                adapted to the national legal and business framework.
              </p>
            </div>
          </div>
        </section>

        {/* Legal Framework Section */}
        <section>
          <div className="bg-white border rounded-lg p-8 lg:p-12">
            <div className="grid lg:grid-cols-3 gap-8 items-center">
              <div className="lg:col-span-1">
                <Building className="h-24 w-24 mx-auto text-primary opacity-80" />
              </div>
              <div className="lg:col-span-2 text-center lg:text-left">
                <h2 className="text-3xl font-semibold mb-4">
                  Built on a Solid Legal Framework
                </h2>
                <p className="text-lg text-muted-foreground mb-4">
                  Our platform's architecture is guided by established legal
                  texts, CNDP notices, and electronic evidence laws. We partner
                  exclusively with certified service providers for critical
                  functions like electronic signatures and digital archiving to
                  guarantee the highest level of legal compliance and
                  irrefutable proof.
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
