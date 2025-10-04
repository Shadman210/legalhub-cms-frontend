"use client";

import { Logo } from "@/components/ui/logo";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-card border-t py-12 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-5 gap-8">
          {/* Logo + About */}
          <div>
            <div className="mb-4">
              <Logo size="md" />
            </div>
            <p className="text-muted-foreground mb-6">
              The platform connecting litigants with legal professionals in
              Morocco.
            </p>
            <div className="flex space-x-4">
              <Link
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4 text-primary">Services</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <Link
                  href="/waitlist"
                  className="hover:text-primary transition-colors"
                >
                  Consultations
                </Link>
              </li>
              <li>
                <Link
                  href="/waitlist"
                  className="hover:text-primary transition-colors"
                >
                  Document Drafting
                </Link>
              </li>
              <li>
                <Link
                  href="/waitlist"
                  className="hover:text-primary transition-colors"
                >
                  Reports
                </Link>
              </li>
              <li>
                <Link
                  href="/waitlist"
                  className="hover:text-primary transition-colors"
                >
                  Notifications
                </Link>
              </li>
            </ul>
          </div>

          {/* Professionals */}
          <div>
            <h3 className="font-semibold mb-4 text-primary">Professionals</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <Link
                  href="/waitlist"
                  className="hover:text-primary transition-colors"
                >
                  Find a Lawyer
                </Link>
              </li>
              <li>
                <Link
                  href="/waitlist"
                  className="hover:text-primary transition-colors"
                >
                  Find a Bailiff
                </Link>
              </li>
              <li>
                <Link
                  href="/waitlist"
                  className="hover:text-primary transition-colors"
                >
                  Join the Platform
                </Link>
              </li>
            </ul>
          </div>

          {/* Blog */}
          <div>
            <h3 className="font-semibold mb-4 text-primary">Blog</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <Link
                  href="/blog"
                  className="hover:text-primary transition-colors"
                >
                  Legal Articles
                </Link>
              </li>
              <li>
                <Link
                  href="/blog/guides"
                  className="hover:text-primary transition-colors"
                >
                  Practical Guides
                </Link>
              </li>
              <li>
                <Link
                  href="/blog/news"
                  className="hover:text-primary transition-colors"
                >
                  Legal News
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold mb-4 text-primary">Support</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <Link
                  href="/waitlist"
                  className="hover:text-primary transition-colors"
                >
                  Help Center
                </Link>
              </li>
              <li>
                <Link
                  href="/waitlist"
                  className="hover:text-primary transition-colors"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href="/waitlist"
                  className="hover:text-primary transition-colors"
                >
                  Terms of Use
                </Link>
              </li>
              <li>
                <Link
                  href="/waitlist"
                  className="hover:text-primary transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t mt-8 pt-8 text-center text-muted-foreground">
          <p>&copy; 2025 LegalHub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
