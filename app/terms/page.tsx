import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <h1 className="text-4xl font-bold text-foreground mb-8">Terms of Service</h1>
        <div className="prose prose-lg max-w-none">
          <p className="text-muted-foreground mb-6">Last updated: January 2025</p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
            <p className="text-muted-foreground mb-4">
              By accessing and using LegalHub, you accept and agree to be bound by the terms and provision of this
              agreement.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">2. Use License</h2>
            <p className="text-muted-foreground mb-4">
              Permission is granted to temporarily use LegalHub for personal, non-commercial transitory viewing only.
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>This is the grant of a license, not a transfer of title</li>
              <li>You may not modify or copy the materials</li>
              <li>You may not use the materials for commercial purposes</li>
              <li>You may not attempt to reverse engineer any software</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">3. User Responsibilities</h2>
            <p className="text-muted-foreground mb-4">
              Users are responsible for maintaining the confidentiality of their account information.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">4. Professional Services</h2>
            <p className="text-muted-foreground mb-4">
              LegalHub is a platform that connects clients with legal professionals. We do not provide legal advice or
              services directly.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">5. Contact Information</h2>
            <p className="text-muted-foreground">
              If you have any questions about these Terms of Service, please contact us at legal@legalhub.com.
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </main>
  )
}
