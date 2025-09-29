import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, MapPin, Phone, Scale } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Scale className="h-8 w-8" />
              <span className="text-2xl font-bold">LegalHub</span>
            </div>
            <p className="text-primary-foreground/80 leading-relaxed">
              Connecting clients with trusted legal professionals through a
              secure, comprehensive platform designed for modern legal services.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span className="text-sm">support@legalhub.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span className="text-sm">1-800-LEGAL-HUB</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span className="text-sm">New York, NY</span>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">For Clients</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/find-lawyers"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors scalable-text"
                >
                  Find Lawyers
                </Link>
              </li>
              <li>
                <Link
                  href="/legal-services"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors scalable-text"
                >
                  Legal Services
                </Link>
              </li>
              <li>
                <Link
                  href="/how-it-works"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors scalable-text"
                >
                  How It Works
                </Link>
              </li>
              <li>
                <Link
                  href="/pricing"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors scalable-text"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  href="/client-portal"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors scalable-text"
                >
                  Client Portal
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">For Professionals</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/join-professionals"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors scalable-text"
                >
                  Join LegalHub
                </Link>
              </li>
              <li>
                <Link
                  href="/professional-portal"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors scalable-text"
                >
                  Professional Portal
                </Link>
              </li>
              <li>
                <Link
                  href="/practice-management"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors scalable-text"
                >
                  Practice Management
                </Link>
              </li>
              <li>
                <Link
                  href="/resources"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors scalable-text"
                >
                  Resources
                </Link>
              </li>
              <li>
                <Link
                  href="/support"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors scalable-text"
                >
                  Support
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Stay Updated</h3>
            <p className="text-primary-foreground/80 text-sm">
              Get the latest updates on legal technology and platform features.
            </p>
            <div className="flex gap-2">
              <Input
                placeholder="Enter your email"
                className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60"
              />
              <Button variant="secondary" size="sm">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-primary-foreground/80 text-sm">
              © 2025 LegalHub Platform. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link
                href="/privacy"
                className="text-primary-foreground/80 hover:text-primary-foreground text-sm transition-colors scalable-text"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-primary-foreground/80 hover:text-primary-foreground text-sm transition-colors scalable-text"
              >
                Terms of Service
              </Link>
              <Link
                href="/cookies"
                className="text-primary-foreground/80 hover:text-primary-foreground text-sm transition-colors scalable-text"
              >
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
