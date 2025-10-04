"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useAuth } from "@/lib/auth"; // Assuming an auth hook exists
import {
  Globe,
  HelpCircle,
  LayoutDashboard,
  LogOut,
  Menu,
  Phone,
  Scale,
  User,
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
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();
  const langDropdownRef = useRef<HTMLDivElement>(null);

  // This is a placeholder. Replace with your actual authentication context.
  const { isAuthenticated, user, logout } = useAuth() || {
    isAuthenticated: false,
    user: null,
    logout: () => console.log("logout"),
  };

  const isAuthPage = pathname.startsWith("/auth");

  const languages = [
    { name: "English", flag: <FlagUSA /> },
    { name: "Français", flag: <FlagFrance /> },
    { name: "العربية", flag: <FlagMorocco /> },
  ];

  const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);

  // Prevent hydration errors
  useEffect(() => {
    setMounted(true);
  }, []);

  // Close menus on navigation
  useEffect(() => {
    if (isMenuOpen) setIsMenuOpen(false);
    if (isLangOpen) setIsLangOpen(false);
  }, [pathname]);

  // Close language dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event: any) {
      if (
        langDropdownRef.current &&
        !langDropdownRef.current.contains(event.target)
      ) {
        setIsLangOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [langDropdownRef]);

  const handleLogout = () => {
    logout();
    // Optional: redirect user after logout
    // router.push('/');
  };

  // Define menu items for logged-in users
  const getUserMenuItems = () => {
    // This can be dynamic based on user role
    return [
      {
        href: "//waitlist",
        label: "Dashboard",
        icon: LayoutDashboard,
      },
      { href: "/waitlist", label: "My Profile", icon: User },
    ];
  };

  const mobileNavLinks = [
    {
      href: "/professionals/join",
      label: "Are you a professional?",
      icon: <Scale className="h-5 w-5" />,
    },
    {
      href: "/waitlist",
      label: "Help Center",
      icon: <HelpCircle className="h-5 w-5" />,
    },
    {
      href: "/waitlist",
      label: "Contact",
      icon: <Phone className="h-5 w-5" />,
    },
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

          <div className="flex items-center gap-2">
            <div className="hidden md:flex items-center space-x-3">
              <Button
                variant="outline"
                asChild
                className="bg-transparent border-primary/60 text-foreground hover:bg-secondary hover:text-white hover:border-secondary transition-all duration-200"
              >
                <Link
                  href="/professionals/join"
                  className="flex items-center gap-2"
                >
                  <Scale className="h-4 w-4" />
                  Are you a professional?
                </Link>
              </Button>

              <Button
                variant="outline"
                asChild
                className="bg-transparent border-primary/60 text-foreground hover:bg-primary hover:text-white hover:border-primary transition-all duration-200"
              >
                <Link href="/help" className="flex items-center gap-2">
                  <HelpCircle className="h-4 w-4" />
                  Help Center
                </Link>
              </Button>

              {mounted && isAuthenticated ? (
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="outline"
                      className="flex items-center gap-2 py-2 px-3 bg-primary text-white border-primary hover:bg-primary/90 hover:border-primary/90"
                    >
                      <User className="h-4 w-4" />
                      <span className="hidden sm:inline">
                        {user?.firstName || "My Account"}
                      </span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-56">
                    {getUserMenuItems().map((item) => {
                      const Icon = item.icon;
                      return (
                        <DropdownMenuItem key={item.href} asChild>
                          <Link
                            href={item.href}
                            className="flex items-center gap-2"
                          >
                            <Icon className="h-4 w-4" />
                            {item.label}
                          </Link>
                        </DropdownMenuItem>
                      );
                    })}
                    <DropdownMenuSeparator />
                    <DropdownMenuItem
                      onClick={handleLogout}
                      className="flex items-center gap-2 text-destructive focus:text-destructive focus:bg-destructive/10"
                    >
                      <LogOut className="h-4 w-4" />
                      Logout
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                mounted && (
                  <Button
                    variant="outline"
                    asChild
                    className="flex flex-col items-center gap-1 h-auto py-2 px-3 bg-secondary text-white border-secondary hover:bg-secondary/80 hover:text-white hover:border-secondary/80 transition-all duration-200 shadow-md hover:shadow-lg"
                  >
                    <Link href={isAuthPage ? "/" : "/waitlist"}>
                      <span className="text-sm font-medium">
                        {isAuthPage ? "Home" : "Login"}
                      </span>
                      <span className="text-xs opacity-90">
                        {isAuthPage ? "Go back" : "Manage my appointments"}
                      </span>
                    </Link>
                  </Button>
                )
              )}
            </div>

            {/* Language Dropdown */}
            <div className="relative" ref={langDropdownRef}>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsLangOpen(!isLangOpen)}
                aria-label="Select language"
              >
                <Globe className="h-5 w-5" />
              </Button>
              <div
                className={`absolute right-0 mt-2 w-48 origin-top-right rounded-xl bg-background shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none transition-all duration-200 ease-out transform ${
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
        <div className="fixed top-0 right-0 h-full w-4/5 max-w-sm bg-background p-4 shadow-lg flex flex-col">
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
          <nav className="mt-6 flex flex-col space-y-1 flex-grow">
            {isAuthenticated
              ? getUserMenuItems().map((link) => {
                  const Icon = link.icon;
                  return (
                    <Link
                      key={link.label}
                      href={link.href}
                      onClick={closeMenu}
                      className="flex items-center gap-4 p-3 rounded-md text-lg text-muted-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
                    >
                      <Icon className="h-5 w-5" />
                      <span>{link.label}</span>
                    </Link>
                  );
                })
              : null}

            {mobileNavLinks.map((link) => (
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
          <div className="mt-auto pt-4 border-t">
            {isAuthenticated ? (
              <Button
                onClick={() => {
                  handleLogout();
                  closeMenu();
                }}
                className="w-full flex items-center gap-3 justify-center bg-destructive text-destructive-foreground"
              >
                <LogOut className="h-5 w-5" />
                <span>Logout</span>
              </Button>
            ) : (
              <Button
                asChild
                className="w-full bg-secondary text-secondary-foreground"
              >
                <Link href="/waitlist" onClick={closeMenu}>
                  Login / Sign Up
                </Link>
              </Button>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
