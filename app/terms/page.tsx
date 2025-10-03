import { Footer } from "@/components/layout/footer";

export default function PrivacyAndTermsPage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <h1 className="text-4xl font-bold text-foreground mb-8">
          Privacy Policy (GDPR Compliant) & Terms of Service
        </h1>
        <div className="prose prose-lg max-w-none">
          <p className="text-muted-foreground mb-6">
            Last updated: October 2, 2025
          </p>

          <section className="mb-8">
            <h2 className="text-3xl font-semibold mb-6 border-b pb-2">
              Terms of Service
            </h2>
            <h3 className="text-2xl font-semibold mb-4">
              1. Acceptance of Terms
            </h3>
            <p className="text-muted-foreground mb-4">
              By accessing and using the LegalHub platform ("Service"), you
              accept and agree to be bound by the terms and provision of this
              agreement. If you do not agree to abide by these terms, please do
              not use this Service.
            </p>

            <h3 className="text-2xl font-semibold mb-4 mt-6">
              2. Description of Service
            </h3>
            <p className="text-muted-foreground mb-4">
              LegalHub is a technology platform that connects individuals
              seeking legal services ("Clients") with independent legal
              professionals ("Professionals"). LegalHub is not a law firm and
              does not provide legal advice. Any attorney-client relationship is
              strictly between a Client and a Professional.
            </p>

            <h3 className="text-2xl font-semibold mb-4 mt-6">
              3. User Responsibilities
            </h3>
            <p className="text-muted-foreground mb-4">
              You are responsible for maintaining the confidentiality of your
              account information and for all activities that occur under your
              account. You agree to provide accurate and complete information.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-semibold mb-6 border-b pb-2">
              Privacy Policy (GDPR)
            </h2>
            <h3 className="text-2xl font-semibold mb-4">1. Data Controller</h3>
            <p className="text-muted-foreground mb-4">
              LegalHub Inc. is the data controller responsible for your personal
              data. For any questions, you can reach us at the contact
              information provided at the end of this policy.
            </p>

            <h3 className="text-2xl font-semibold mb-4 mt-6">
              2. Information We Collect
            </h3>
            <p className="text-muted-foreground mb-4">
              We collect information necessary to provide our service,
              including:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>
                <b>Identity Data:</b> Name, username, or similar identifier.
              </li>
              <li>
                <b>Contact Data:</b> Email address, telephone numbers, billing
                address.
              </li>
              <li>
                <b>Technical Data:</b> IP address, browser type, and location
                data.
              </li>
              <li>
                <b>Usage Data:</b> Information about how you use our website and
                services.
              </li>
            </ul>

            <h3 className="text-2xl font-semibold mb-4 mt-6">
              3. Lawful Basis for Processing
            </h3>
            <p className="text-muted-foreground mb-4">
              We process your personal data only when we have a lawful basis to
              do so, including your consent, for the performance of a contract
              with you, or for the legitimate interests of our business.
            </p>

            <h3 className="text-2xl font-semibold mb-4 mt-6">
              4. Your GDPR Rights
            </h3>
            <p className="text-muted-foreground mb-4">
              Under GDPR, you have the right to:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Request access to your personal data.</li>
              <li>Request correction of your personal data.</li>
              <li>Request erasure of your personal data.</li>
              <li>Object to processing of your personal data.</li>
              <li>Request restriction of processing your personal data.</li>
              <li>Request the transfer of your personal data.</li>
              <li>Right to withdraw consent.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-semibold mb-6 border-b pb-2">
              General Provisions
            </h2>
            <h3 className="text-2xl font-semibold mb-4">
              1. Limitation of Liability
            </h3>
            <p className="text-muted-foreground mb-4">
              LegalHub shall not be liable for any indirect, incidental,
              special, consequential or punitive damages resulting from your
              access to or use of, or inability to access or use, the Service.
            </p>
            <h3 className="text-2xl font-semibold mb-4 mt-6">2. Contact Us</h3>
            <p className="text-muted-foreground">
              If you have any questions about these Terms or our Privacy Policy,
              please contact us at legal@legalhub.com.
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </main>
  );
}
