"use client";
import { useAuth } from "@/lib/auth";
import { cn } from "@/lib/utils";
import {
  Calendar,
  FileText,
  Home,
  LogIn,
  LogOut,
  MessageCircle,
  User,
} from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const menuItems = [
  {
    href: "/",
    icon: Home,
    label: "Home",
    id: "home",
  },
  {
    href: "/dashboard/appointments",
    icon: Calendar,
    label: "Appointments",
    id: "appointments",
  },
  {
    href: "/dashboard/documents",
    icon: FileText,
    label: "Documents",
    id: "documents",
  },
  {
    href: "/dashboard/messages",
    icon: MessageCircle,
    label: "Messages",
    id: "messages",
  },
];

export function FloatingMenu() {
  const pathname = usePathname();
  const router = useRouter();
  const { isAuthenticated, user, logout } = useAuth();
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    console.log("[v0] FloatingMenu - isAuthenticated:", isAuthenticated);
    console.log("[v0] FloatingMenu - user:", user);
  }, [isAuthenticated, user]);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down - hide menu
        setIsVisible(false);
      } else {
        // Scrolling up - show menu
        setIsVisible(true);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogout = () => {
    logout();
    router.push("/");
  };

  const handleProfileClick = () => {
    if (user?.userType === "lawyer" || user?.userType === "bailiff") {
      router.push("/dashboard/profile");
    } else {
      router.push("/dashboard");
    }
  };

  return (
    <>
      {/* Mobile floating menu - bottom */}
      <div
        className={cn(
          "fixed bottom-4 left-4 right-4 z-50 md:hidden transition-transform duration-300",
          !isVisible && "translate-y-20"
        )}
      >
        <div className="bg-white/95 backdrop-blur-sm border border-border rounded-2xl shadow-lg p-2">
          <div className="grid grid-cols-5 gap-1">
            {menuItems.map((item) => {
              const Icon = item.icon;
              const isActive =
                pathname === item.href ||
                (item.href !== "/" && pathname.startsWith(item.href));

              if (!isAuthenticated && item.href.startsWith("/dashboard")) {
                return (
                  <button
                    key={item.id}
                    onClick={() => router.push("/auth/login")}
                    className="flex flex-col items-center gap-1 p-2 rounded-xl transition-colors text-muted-foreground hover:bg-muted hover:text-foreground"
                  >
                    <Icon className="h-4 w-4 flex-shrink-0" />
                    <span className="text-xs truncate">{item.label}</span>
                  </button>
                );
              }

              return (
                <Link
                  key={item.id}
                  href={item.href}
                  className={cn(
                    "flex flex-col items-center gap-1 p-2 rounded-xl transition-colors",
                    isActive
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:bg-muted hover:text-foreground"
                  )}
                >
                  <Icon className="h-4 w-4 flex-shrink-0" />
                  <span className="text-xs truncate">{item.label}</span>
                </Link>
              );
            })}

            {isAuthenticated ? (
              <button
                onClick={handleLogout}
                className="flex flex-col items-center gap-1 p-2 rounded-xl transition-colors hover:bg-muted"
              >
                <LogOut className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                <span className="text-xs text-muted-foreground truncate">
                  Logout
                </span>
              </button>
            ) : (
              <Link
                href="/auth/login"
                className="flex flex-col items-center gap-1 p-2 rounded-xl transition-colors text-muted-foreground hover:bg-muted hover:text-foreground"
              >
                <LogIn className="h-4 w-4 flex-shrink-0" />
                <span className="text-xs truncate">Login</span>
              </Link>
            )}
          </div>
        </div>
      </div>

      {/* Desktop floating menu - right side */}
      <div
        className={cn(
          "fixed right-4 top-1/2 -translate-y-1/2 z-50 hidden md:block group transition-all duration-300",
          !isVisible && "translate-x-20 opacity-50",
          isCollapsed && "translate-x-12"
        )}
      >
        <div
          className={cn(
            "bg-white/95 backdrop-blur-sm border border-border rounded-2xl shadow-lg p-2 transition-all duration-300 ease-in-out",
            isCollapsed ? "w-14" : "w-14 group-hover:w-48"
          )}
          onMouseEnter={() => setIsCollapsed(false)}
          onMouseLeave={() => setIsCollapsed(true)}
        >
          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="w-full flex items-center justify-center p-2 mb-2 rounded-xl hover:bg-muted transition-colors"
            title={isCollapsed ? "Expand menu" : "Collapse menu"}
          >
            <div
              className={cn(
                "w-6 h-0.5 bg-muted-foreground transition-all duration-300",
                isCollapsed && "rotate-90"
              )}
            />
          </button>

          <div className="flex flex-col items-start gap-2">
            {menuItems.map((item) => {
              const Icon = item.icon;
              const isActive =
                pathname === item.href ||
                (item.href !== "/" && pathname.startsWith(item.href));

              if (!isAuthenticated && item.href.startsWith("/dashboard")) {
                return (
                  <button
                    key={item.id}
                    onClick={() => router.push("/auth/login")}
                    className="flex items-center gap-3 p-3 rounded-xl transition-all duration-300 group/item text-muted-foreground hover:bg-muted hover:text-foreground w-full"
                    title={`${item.label} (Login required)`}
                  >
                    <Icon className="h-5 w-5 flex-shrink-0" />
                    <span
                      className={cn(
                        "transition-opacity duration-300 whitespace-nowrap text-sm font-medium",
                        isCollapsed
                          ? "opacity-0 w-0"
                          : "opacity-0 group-hover:opacity-100"
                      )}
                    >
                      {item.label}
                    </span>
                  </button>
                );
              }

              return (
                <Link
                  key={item.id}
                  href={item.href}
                  className={cn(
                    "flex items-center gap-3 p-3 rounded-xl transition-all duration-300 group/item w-full",
                    isActive
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:bg-muted hover:text-foreground"
                  )}
                  title={item.label}
                >
                  <Icon className="h-5 w-5 flex-shrink-0" />
                  <span
                    className={cn(
                      "transition-opacity duration-300 whitespace-nowrap text-sm font-medium",
                      isCollapsed
                        ? "opacity-0 w-0"
                        : "opacity-0 group-hover:opacity-100"
                    )}
                  >
                    {item.label}
                  </span>
                </Link>
              );
            })}

            {isAuthenticated ? (
              <>
                <button
                  onClick={handleProfileClick}
                  className="flex items-center gap-3 p-3 rounded-xl transition-all duration-300 hover:bg-muted group/item w-full"
                  title="Profile"
                >
                  <User className="h-5 w-5 text-muted-foreground flex-shrink-0" />
                  <span
                    className={cn(
                      "transition-opacity duration-300 whitespace-nowrap text-sm font-medium text-muted-foreground",
                      isCollapsed
                        ? "opacity-0 w-0"
                        : "opacity-0 group-hover:opacity-100"
                    )}
                  >
                    Profile
                  </span>
                </button>
                <button
                  onClick={handleLogout}
                  className="flex items-center gap-3 p-3 rounded-xl transition-all duration-300 hover:bg-muted group/item w-full"
                  title="Logout"
                >
                  <LogOut className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                  <span
                    className={cn(
                      "transition-opacity duration-300 whitespace-nowrap text-sm font-medium text-muted-foreground",
                      isCollapsed
                        ? "opacity-0 w-0"
                        : "opacity-0 group-hover:opacity-100"
                    )}
                  >
                    Logout
                  </span>
                </button>
              </>
            ) : (
              <Link
                href="/auth/login"
                className="flex items-center gap-3 p-3 rounded-xl transition-all duration-300 group/item text-muted-foreground hover:bg-muted hover:text-foreground w-full"
                title="Login"
              >
                <LogIn className="h-5 w-5 flex-shrink-0" />
                <span
                  className={cn(
                    "transition-opacity duration-300 whitespace-nowrap text-sm font-medium",
                    isCollapsed
                      ? "opacity-0 w-0"
                      : "opacity-0 group-hover:opacity-100"
                  )}
                >
                  Login
                </span>
              </Link>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
