"use client";

import { Button } from "@/components/ui/button";
import {
  Briefcase,
  ChevronDown,
  Globe,
  Home,
  Info,
  Menu,
  Phone,
  Scale,
  ShieldCheck,
  Users,
  X,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

// Flag components (as self-contained SVGs)
const FlagUSA = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 32 24"
    className="h-6 w-6 rounded-full"
  >
    <path fill="#002868" d="M0 0h32v24H0z" />
    <path fill="#fff" d="M0 4h32v4H0zm0 8h32v4H0zm0 8h32v4H0zm0-20h16v12H0z" />
    <path fill="#bf0a30" d="M0 0h32v4H0zm0 8h32v4H0zm0 8h32v4H0z" />
    <path fill="#fff" d="M0 0h16v12H0z" />
    <path fill="#002868" d="M0 0h16v12H0z" />
    {/* Simplified stars for representation */}
    <g fill="#fff">
      <path d="m3.2 2- .4 1.2h-1.2l1 .8-.4 1.2.8-.8.8.8-.4-1.2 1-.8h-1.2zm4.8 0- .4 1.2h-1.2l1 .8-.4 1.2.8-.8.8.8-.4-1.2 1-.8h-1.2zm4.8 0- .4 1.2h-1.2l1 .8-.4 1.2.8-.8.8.8-.4-1.2 1-.8h-1.2zM5.6 4.4l- .4 1.2h-1.2l1 .8-.4 1.2.8-.8.8.8-.4-1.2 1-.8h-1.2zm4.8 0- .4 1.2h-1.2l1 .8-.4 1.2.8-.8.8.8-.4-1.2 1-.8h-1.2zM3.2 6.8l- .4 1.2h-1.2l1 .8-.4 1.2.8-.8.8.8-.4-1.2 1-.8h-1.2zm4.8 0- .4 1.2h-1.2l1 .8-.4 1.2.8-.8.8.8-.4-1.2 1-.8h-1.2zm4.8 0- .4 1.2h-1.2l1 .8-.4 1.2.8-.8.8.8-.4-1.2 1-.8h-1.2zM5.6 9.2l- .4 1.2h-1.2l1 .8-.4 1.2.8-.8.8.8-.4-1.2 1-.8h-1.2zm4.8 0- .4 1.2h-1.2l1 .8-.4 1.2.8-.8.8.8-.4-1.2 1-.8h-1.2z" />
    </g>
  </svg>
);

const FlagFrance = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    className="h-6 w-6 rounded-full"
  >
    <path fill="#fff" d="M0 0h512v512H0z" />
    <path fill="#002395" d="M0 0h170.67v512H0z" />
    <path fill="#ed2939" d="M341.33 0H512v512H341.33z" />
  </svg>
);

const FlagMorocco = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 32 24"
    className="h-6 w-6 rounded-full"
  >
    <path fill="#c1272d" d="M0 0h32v24H0z" />
    <path
      fill="none"
      stroke="#006233"
      strokeWidth="1.5"
      d="m16 7-2.35 4.5L18.35 9H13.65l4.7 2.5L11.65 16Z"
    />
  </svg>
);

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const pathname = usePathname();
  const langDropdownRef = useRef<HTMLDivElement>(null);

  const languages = [
    { name: "English", flag: <FlagUSA /> },
    { name: "Français", flag: <FlagFrance /> },
    { name: "العربية", flag: <FlagMorocco /> },
  ];

  const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);

  // Close menus on navigation
  useEffect(() => {
    if (isMenuOpen) setIsMenuOpen(false);
    if (isLangOpen) setIsLangOpen(false);
  }, [pathname]);

  // Close language dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        langDropdownRef.current &&
        !langDropdownRef.current.contains(event.target as Node)
      ) {
        setIsLangOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [langDropdownRef]);

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
      href: "/trust-security",
      label: "Trust & Security",
      icon: <ShieldCheck className="h-5 w-5" />,
    },
    {
      href: "/partners",
      label: "Partners",
      icon: <ShieldCheck className="h-5 w-5" />,
    },
    { href: "/contact", label: "Contact", icon: <Phone className="h-5 w-5" /> },
  ];

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <div className="flex items-center space-x-2">
            <Scale className="h-8 w-8 text-primary" />
            <Link
              href="/"
              className="text-2xl font-bold text-primary hover:text-secondary transition-colors"
            >
              LegalHub
            </Link>
          </div>

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

          <div className="flex items-center gap-2">
            {/* Language Dropdown */}
            <div className="relative" ref={langDropdownRef}>
              {/* Desktop Button */}
              <Button
                variant="outline"
                className="hidden md:flex items-center gap-2 px-3 py-2 h-10 rounded-full"
                onClick={() => setIsLangOpen(!isLangOpen)}
                aria-label="Select language"
              >
                {selectedLanguage.flag}
                <span className="text-sm font-medium">
                  {selectedLanguage.name}
                </span>
                <ChevronDown
                  className={`h-4 w-4 text-muted-foreground transition-transform duration-200 ${
                    isLangOpen ? "rotate-180" : ""
                  }`}
                />
              </Button>

              {/* Mobile Button */}
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden"
                onClick={() => setIsLangOpen(!isLangOpen)}
                aria-label="Select language"
              >
                <Globe className="h-5 w-5" />
              </Button>

              {/* Dropdown Panel */}
              <div
                className={`absolute right-0 mt-2 w-48 origin-top-right rounded-xl bg-background shadow-lg ring-1 ring-amber-200 ring-opacity-5 focus:outline-none transition-all duration-200 ease-out transform ${
                  isLangOpen
                    ? "opacity-100 scale-100"
                    : "opacity-0 scale-95 pointer-events-none"
                }`}
              >
                <div className="py-1">
                  {languages.map((lang) => (
                    <a
                      key={lang.name}
                      href="#"
                      className="flex items-center gap-3 px-4 py-2 text-sm text-foreground hover:bg-accent"
                      onClick={(e) => {
                        e.preventDefault();
                        setSelectedLanguage(lang);
                        setIsLangOpen(false);
                      }}
                    >
                      {lang.flag}
                      <span>{lang.name}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Mobile Menu Button */}
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

      {/* Mobile Menu Panel */}
      <div
        className={`fixed inset-0 z-50 transition-transform duration-300 ease-in-out md:hidden ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div
          className={`fixed inset-0 bg-black/50 transition-opacity ${
            isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
          onClick={closeMenu}
        />
        <div className="fixed top-0 right-0 h-full w-4/5 max-w-sm bg-background p-4 shadow-lg">
          <div className="flex items-center justify-between pb-4 border-b">
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
