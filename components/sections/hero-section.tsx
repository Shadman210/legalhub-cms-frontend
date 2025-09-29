"use client";

import { Badge } from "@/components/ui/badge";
import { SearchBar } from "@/components/search/search-bar";
import { Sparkles } from "lucide-react";
import { useEffect, useState } from "react";

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative py-20 px-4 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
      <div className="container mx-auto text-center">
        <div
          className={`transition-all duration-700 ${
            isVisible ? "animate-slide-up" : "opacity-0"
          }`}
        >
          <Badge
            variant="secondary"
            className="mb-4 bg-primary/10 text-primary border-primary/20"
          >
            <Sparkles className="w-4 h-4 mr-2" />
            Next-Generation Legal Platform
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Revolutionize your{" "}
            <span className="gradient-text">legal processes</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-slide-in-up">
            The future of law is here. Instantly connect with verified
            professionals, manage your documents in real-time, and simplify
            every legal step.
          </p>
          <div
            className="mb-8 animate-slide-in-up"
            style={{ animationDelay: "0.3s" }}
          >
            <SearchBar />
          </div>
        </div>
      </div>
    </section>
  );
}
