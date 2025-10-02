import { BackgroundAnimations } from "@/components/animations/background-animations";
import { Header } from "@/components/header";
import { FloatingMenu } from "@/components/navigation/floating-menu";
import { Analytics } from "@vercel/analytics/next";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import type { Metadata } from "next";
import type React from "react";
import { Suspense } from "react";
import "./globals.css";

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
      <BackgroundAnimations />
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <Header />
        <FloatingMenu />
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  );
}
