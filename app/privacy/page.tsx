import { Footer } from "@/components/layout/footer";

export default function LegalNoticePage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <h1 className="text-4xl font-bold text-foreground mb-8">
          Legal Notice & Terms of Service
        </h1>
        <div className="prose prose-lg max-w-none">
          <p className="text-muted-foreground mb-6">
            Last updated: October 2, 2025
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">
              1. Acceptance of Terms
            </h2>
            <p className="text-muted-foreground mb-4">
              By accessing or using the LegalHub platform ("Service"), you agree
              to be bound by these Terms of Service ("Terms"). If you disagree
              with any part of the terms, you may not access the Service.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">
              2. Description of Service
            </h2>
            <p className="text-muted-foreground mb-4">
              LegalHub is a technology platform that connects individuals
              seeking legal services ("Clients") with independent legal
              professionals ("Professionals"). The Service facilitates
              communication, scheduling, and payment for legal services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">
              3. No Attorney-Client Relationship
            </h2>
            <p className="text-muted-foreground mb-4">
              LegalHub is not a law firm and does not provide legal advice.
              Using the Service does not create an attorney-client relationship
              between you and LegalHub. Any attorney-client relationship formed
              is strictly between a Client and a Professional. We are not a
              party to any such agreement.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">
              4. User Responsibilities
            </h2>
            <p className="text-muted-foreground mb-4">
              You are responsible for maintaining the confidentiality of your
              account and password. You agree to provide accurate and complete
              information when registering and to keep that information updated.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">
              5. Limitation of Liability
            </h2>
            <p className="text-muted-foreground mb-4">
              In no event shall LegalHub, nor its directors, employees, or
              partners, be liable for any indirect, incidental, special,
              consequential or punitive damages, including without limitation,
              loss of profits, data, or other intangible losses, resulting from
              your access to or use of the Service.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">6. Governing Law</h2>
            <p className="text-muted-foreground mb-4">
              These Terms shall be governed and construed in accordance with the
              laws of [Your Jurisdiction, e.g., State of Delaware], without
              regard to its conflict of law provisions.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">7. Contact Us</h2>
            <p className="text-muted-foreground">
              If you have any questions about these Terms, please contact us at
              legal@legalhub.com.
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </main>
  );
}
