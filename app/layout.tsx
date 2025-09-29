import type React from "react";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Analytics } from "@vercel/analytics/next";
import { Suspense } from "react";
import "./globals.css";
import { BackgroundAnimations } from "@/components/animations/background-animations";

export const metadata: Metadata = {
  title: "LegalHub - Connect with Trusted Legal Experts",
  description:
    "Professional legal marketplace connecting clients with verified legal professionals. Book appointments, manage documents, and get expert legal help.",
  generator: "LegalHub Platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <BackgroundAnimations />
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  );
}
