"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Sparkles } from "lucide-react";
import Link from "next/link";

export function CTASection() {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <Card className="bg-gradient-to-r from-primary to-secondary text-white relative overflow-hidden animate-fade-in-scale">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-secondary/90"></div>
          <CardContent className="p-12 text-center relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-slide-in-up">
              Ready to revolutionize your legal processes?
            </h2>
            <p className="text-xl mb-8 opacity-90 animate-fade-in-scale">
              Join the legal ecosystem of tomorrow with thousands of innovative
              users
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                variant="outline"
                className="bg-white text-primary hover:bg-gray-100 border-white animate-bounce-in font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                asChild
              >
                <Link href="/waitlist">
                  <Sparkles className="w-5 h-5 mr-2" />
                  Create an account
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
