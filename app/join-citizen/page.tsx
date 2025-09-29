import { Footer } from "@/components/footer";
import { Header } from "@/components/header";

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-background flex flex-col">
      <Header />
      <div className="flex-grow flex items-center justify-center">
        <h1 className="text-2xl font-semibold text-muted-foreground">
          This module is in progress
        </h1>
      </div>
      <Footer />
    </main>
  );
}
