"use client";

import type { BaseUser, UserType } from "@/types/user";
import { create } from "zustand";
import { persist } from "zustand/middleware";
import { authenticateDemo } from "./demo-accounts";

interface AuthState {
  user: BaseUser | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (userData: any) => Promise<void>;
  logout: () => void;
  updateUser: (userData: Partial<BaseUser>) => void;
}

const setCookie = (name: string, value: string, days = 7) => {
  if (typeof document !== "undefined") {
    try {
      const expires = new Date();
      expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
      document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/;SameSite=Lax`;
      console.log("[v0] Cookie set:", name, value);
    } catch (error) {
      console.error("[v0] Error setting cookie:", error);
    }
  }
};

const removeCookie = (name: string) => {
  if (typeof document !== "undefined") {
    try {
      document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/;SameSite=Lax`;
      console.log("[v0] Cookie removed:", name);
    } catch (error) {
      console.error("[v0] Error removing cookie:", error);
    }
  }
};

export const useAuth = create<AuthState>()(
  persist(
    (set, get) => ({
      user: null,
      isAuthenticated: false,
      isLoading: false,

      login: async (email: string, password: string) => {
        set({ isLoading: true });
        try {
          console.log("[v0] Login attempt for:", email);

          const demoAccount: any = authenticateDemo(email, password);

          if (demoAccount) {
            console.log("[v0] Demo account found:", demoAccount.type);

            const mockUser: BaseUser = {
              id: demoAccount.type === "user" ? "demo-user-1" : "demo-pro-1",
              email: demoAccount.email,
              firstName: demoAccount.profile.name.split(" ")[0],
              lastName: demoAccount.profile.name.split(" ").slice(1).join(" "),
              phone: demoAccount.profile?.phone || "+212600000000",
              country: "MA",
              nationality: "Marocaine",
              idNumber: demoAccount.type === "user" ? "AB123456" : "PRO789012",
              address: `123 Rue Mohammed V, ${demoAccount.profile.city}`,
              userType:
                demoAccount.type === "professional"
                  ? "lawyer"
                  : ("individual" as UserType),
              status: "active",
              createdAt: new Date(demoAccount.profile.joinedDate),
              updatedAt: new Date(),
            };

            // Set cookie for middleware
            setCookie("auth-storage", "authenticated");
            set({ user: mockUser, isAuthenticated: true, isLoading: false });
            console.log("[v0] Login successful");
            return;
          }

          // TODO: Replace with actual API call for non-demo accounts
          await new Promise((resolve) => setTimeout(resolve, 1000));

          const mockUser: BaseUser = {
            id: "1",
            email,
            firstName: "Houssam",
            lastName: "ELK",
            phone: "+212600000000",
            country: "MA",
            nationality: "Marocaine",
            idNumber: "AB123456",
            address: "123 Rue Mohammed V, Casablanca",
            userType: "individual" as UserType,
            status: "active",
            createdAt: new Date(),
            updatedAt: new Date(),
          };

          // Set cookie for middleware
          setCookie("auth-storage", "authenticated");
          set({ user: mockUser, isAuthenticated: true, isLoading: false });
          console.log("[v0] Login successful (non-demo)");
        } catch (error) {
          console.error("[v0] Login error:", error);
          set({ isLoading: false });
          throw error;
        }
      },

      register: async (userData: any) => {
        set({ isLoading: true });
        try {
          // TODO: Replace with actual API call
          await new Promise((resolve) => setTimeout(resolve, 1500));

          const newUser: BaseUser = {
            id: Date.now().toString(),
            email: userData.email,
            firstName: userData.firstName,
            lastName: userData.lastName,
            phone: userData.phone,
            country: userData.country,
            nationality: userData.nationality,
            idNumber: userData.idNumber,
            address: userData.address,
            userType: userData.userType || "individual",
            status: "active",
            createdAt: new Date(),
            updatedAt: new Date(),
          };

          // Set cookie for middleware
          setCookie("auth-storage", "authenticated");
          set({ user: newUser, isAuthenticated: true, isLoading: false });
        } catch (error) {
          set({ isLoading: false });
          throw error;
        }
      },

      logout: () => {
        console.log("[v0] Logout initiated");
        // Remove cookie
        removeCookie("auth-storage");
        set({ user: null, isAuthenticated: false });
      },

      updateUser: (userData: Partial<BaseUser>) => {
        const currentUser = get().user;
        if (currentUser) {
          set({ user: { ...currentUser, ...userData } });
        }
      },
    }),
    {
      name: "auth-storage",
      onRehydrateStorage: () => (state) => {
        console.log("[v0] Store rehydrating, state:", state?.isAuthenticated);
        // Sync cookie when store is rehydrated
        if (state?.isAuthenticated) {
          setCookie("auth-storage", "authenticated");
        }
      },
    }
  )
);
