import { Button } from "@/components/ui/button";
import { Menu, Scale } from "lucide-react";
import Link from "next/link";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center space-x-2">
          <Scale className="h-8 w-8 text-secondary" />
          <Link
            href="/"
            className="text-2xl font-bold text-primary hover:text-secondary transition-colors"
          >
            LegalHub
          </Link>
        </div>

        <nav className="hidden md:flex items-center space-x-8">
          <Link
            href="/find-lawyers"
            className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
          >
            Find Lawyers
          </Link>
          <Link
            href="/about"
            className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
          >
            About
          </Link>
          <Link
            href="/join-professionals"
            className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
          >
            For Professionals
          </Link>
          <Link
            href="#"
            className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
          >
            Blog
          </Link>
          <Link
            href="/pricing"
            className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
          >
            Pricing
          </Link>
          <Link
            href="/contact"
            className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
          >
            Contact
          </Link>
        </nav>

        <div className="flex items-center space-x-4">
          <Button className="bg-secondary hover:bg-secondary/90" asChild>
            <Link href="/find-lawyers">Get Started</Link>
          </Button>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
}
