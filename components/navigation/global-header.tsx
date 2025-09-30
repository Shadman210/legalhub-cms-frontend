"use client";

import { Button } from "@/components/ui/button";
import { Logo } from "@/components/ui/logo";
import { useAuth } from "@/lib/auth";
import {
  BookOpen,
  Calendar,
  FileText,
  Info,
  LogOut,
  MessageCircle,
  Phone,
  Settings,
  User,
  Users,
  X,
} from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

interface GlobalHeaderProps {
  showNavigation?: boolean;
  showUserMenu?: boolean;
}

export function GlobalHeader({
  showNavigation = true,
  showUserMenu = true,
}: GlobalHeaderProps) {
  const { isAuthenticated, user, logout } = useAuth();
  const router = useRouter();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    console.log("[v0] GlobalHeader - isAuthenticated:", isAuthenticated);
    console.log("[v0] GlobalHeader - user:", user);
  }, [isAuthenticated, user]);

  const handleLogout = () => {
    logout();
    router.push("/");
    setIsMobileMenuOpen(false);
  };

  const getUserMenuItems = () => {
    if (!user) return [];

    if (user.userType === "lawyer" || user.userType === "bailiff") {
      return [
        { href: "/dashboard/profile", label: "Mon profil", icon: User },
        { href: "/dashboard/calendar", label: "Calendrier", icon: Calendar },
        { href: "/dashboard/documents", label: "Documents", icon: FileText },
        { href: "/dashboard/messages", label: "Messages", icon: MessageCircle },
        { href: "/dashboard/settings", label: "Paramètres", icon: Settings },
      ];
    }

    return [
      { href: "/dashboard", label: "Tableau de bord", icon: User },
      { href: "/dashboard/appointments", label: "Rendez-vous", icon: Calendar },
      { href: "/dashboard/documents", label: "Documents", icon: FileText },
      { href: "/dashboard/messages", label: "Messages", icon: MessageCircle },
      { href: "/dashboard/settings", label: "Paramètres", icon: Settings },
    ];
  };

  const getNavigationItems = () => {
    return [
      { href: "/professionals", label: "Professionnels", icon: Users },
      { href: "/services", label: "Services", icon: FileText },
      { href: "/blog", label: "Blog", icon: BookOpen },
      { href: "/about", label: "À propos", icon: Info },
      { href: "/contact", label: "Contact", icon: Phone },
    ];
  };

  if (!mounted) {
    return (
      <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <Logo size="md" />
            </Link>
            <div className="flex items-center space-x-3">
              <div className="w-20 h-9 bg-muted animate-pulse rounded" />
              <div className="w-20 h-9 bg-muted animate-pulse rounded" />
            </div>
          </div>
        </div>
      </header>
    );
  }

  return (
    <>
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div
            className="fixed inset-0 bg-black/20 backdrop-blur-sm"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          <div className="fixed right-0 top-0 h-full w-80 max-w-[85vw] bg-background border-l shadow-xl">
            <div className="flex items-center justify-between p-4 border-b">
              <Logo size="sm" />
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <X className="h-5 w-5" />
              </Button>
            </div>

            <div className="p-4 space-y-1">
              {getNavigationItems().map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="flex items-center gap-3 px-3 py-3 rounded-lg text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <Icon className="h-5 w-5" />
                    {item.label}
                  </Link>
                );
              })}

              {mounted && !isAuthenticated && (
                <>
                  <div className="border-t my-4 visibility: hidden;" />
                  <Link
                    href="/auth/login"
                    className="flex items-center gap-3 px-3 py-3 rounded-lg text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <User className="h-5 w-5" />
                    Connexion
                  </Link>
                  <Link
                    href="/auth/register"
                    className="flex items-center gap-3 px-3 py-3 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <User className="h-5 w-5" />
                    S'inscrire
                  </Link>
                </>
              )}

              {mounted && isAuthenticated && (
                <>
                  <div className="border-t my-4" />
                  {getUserMenuItems().map((item) => {
                    const Icon = item.icon;
                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="flex items-center gap-3 px-3 py-3 rounded-lg text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        <Icon className="h-5 w-5" />
                        {item.label}
                      </Link>
                    );
                  })}
                  <button
                    onClick={handleLogout}
                    className="flex items-center gap-3 px-3 py-3 rounded-lg text-destructive hover:bg-destructive/10 transition-colors w-full text-left"
                  >
                    <LogOut className="h-5 w-5" />
                    Déconnexion
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
