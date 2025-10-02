import { Footer } from "@/components/footer";
import { Header } from "@/components/header";

export default function UnderConstructionPage() {
  return (
    <main className="min-h-screen bg-background flex flex-col">
      <div className="flex-grow container mx-auto px-4 py-16 flex items-center justify-center">
        <h1 className="text-2xl font-bold text-foreground text-center">
          This module is under construction.
        </h1>
      </div>
      <Footer />
    </main>
  );
}
