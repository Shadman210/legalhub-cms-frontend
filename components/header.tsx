"use client";

import { Button } from "@/components/ui/button";
import {
  BookOpen,
  Briefcase,
  DollarSign,
  Home,
  Info,
  Menu,
  Phone,
  Scale,
  Users,
  X,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  // This closes the mobile menu automatically when the user navigates to a new page.
  useEffect(() => {
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  }, [pathname]);

  // The navLinks array now includes an icon for each link.
  const navLinks = [
    { href: "/", label: "Home", icon: <Home className="h-5 w-5" /> },
    { href: "/about", label: "About", icon: <Info className="h-5 w-5" /> },
    {
      href: "/join-professionals",
      label: "For Professionals",
      icon: <Briefcase className="h-5 w-5" />,
    },
    {
      href: "/join-citizen",
      label: "For Citizens",
      icon: <Users className="h-5 w-5" />,
    },
    {
      href: "/pricing",
      label: "Pricing",
      icon: <DollarSign className="h-5 w-5" />,
    },
    { href: "/blog", label: "Blog", icon: <BookOpen className="h-5 w-5" /> },
    { href: "/contact", label: "Contact", icon: <Phone className="h-5 w-5" /> },
  ];

  // A helper function to close the menu.
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          {/* Logo - Pushed to the left */}
          <div className="flex items-center space-x-2">
            <Scale className="h-8 w-8 text-primary" />
            <Link
              href="/"
              className="text-2xl font-bold text-primary hover:text-secondary transition-colors"
            >
              LegalHub
            </Link>
          </div>

          {/* Desktop Navigation - Hidden on mobile */}
          <nav className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button - Pushed to the right, hidden on desktop */}
          <div className="flex items-center">
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMenuOpen(true)}
            >
              <Menu className="h-5 w-5" />
              <span className="sr-only">Open menu</span>
            </Button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Panel - Slides in from the right */}
      <div
        className={`fixed inset-0 z-50 transition-transform duration-300 ease-in-out md:hidden ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Overlay */}
        <div
          className={`fixed inset-0 bg-black/50 transition-opacity ${
            isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
          onClick={closeMenu}
        />

        {/* Menu Content */}
        <div className="fixed top-0 right-0 h-full w-4/5 max-w-sm bg-background p-4 shadow-lg">
          <div className="flex items-center justify-between pb-4 border-b">
            {/* Logo in Mobile Menu */}
            <div className="flex items-center space-x-2">
              <Scale className="h-7 w-7 text-primary" />
              <span className="text-xl font-bold text-primary">LegalHub</span>
            </div>
            <Button variant="ghost" size="icon" onClick={closeMenu}>
              <X className="h-5 w-5" />
              <span className="sr-only">Close menu</span>
            </Button>
          </div>

          <nav className="mt-6 flex flex-col space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={closeMenu}
                className="flex items-center gap-4 p-3 rounded-md text-lg text-muted-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
              >
                {link.icon}
                <span>{link.label}</span>
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </>
  );
}
