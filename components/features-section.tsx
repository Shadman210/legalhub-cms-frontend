"use client";

import React from "react";

// --- Type Definitions for Component Props ---
interface ComponentProps {
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
}

interface IconProps {
  className?: string;
}

// --- UI Component Mocks ---
const Card: React.FC<ComponentProps> = ({ className, style, children }) => (
  <div className={className} style={style}>
    {children}
  </div>
);

const CardHeader: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="p-6 text-center">{children}</div>
);

const CardTitle: React.FC<ComponentProps> = ({ className, children }) => (
  <h3 className={`text-lg font-semibold ${className}`}>{children}</h3>
);

const CardDescription: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => <p className="text-sm text-muted-foreground">{children}</p>;

// --- Icon Mocks (from lucide-react) ---
const Calendar: React.FC<IconProps> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M8 2v4" />
    <path d="M16 2v4" />
    <rect width="18" height="18" x="3" y="4" rx="2" />
    <path d="M3 10h18" />
  </svg>
);
const FileText: React.FC<IconProps> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
    <path d="M14 2v4a2 2 0 0 0 2 2h4" />
    <path d="M10 9H8" />
    <path d="M16 13H8" />
    <path d="M16 17H8" />
  </svg>
);
const Shield: React.FC<IconProps> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
);
const Users: React.FC<IconProps> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);
const MessageSquare: React.FC<IconProps> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
  </svg>
);
const Scale: React.FC<IconProps> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" />
    <path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" />
    <path d="M7 21h10" />
    <path d="M12 3v18" />
    <path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2" />
  </svg>
);

// --- English Content ---
const englishContent = {
  mainTitle: "An",
  mainTitleSpan: "intelligent",
  mainTitleAfter: "platform for your legal needs",
  subtitle:
    "Discover our revolutionary features designed to transform your legal experience",
  features: [
    {
      icon: Calendar,
      title: "Appointment Booking",
      desc: "Easily book in-person or video conference consultations",
    },
    {
      icon: FileText,
      title: "Legal Services",
      desc: "Request specific services: lease drafting, findings, notifications",
    },
    {
      icon: Shield,
      title: "Electronic Signature",
      desc: "Sign your documents online with legally binding value",
    },
    {
      icon: Users,
      title: "Verified Professionals",
      desc: "Access a network of certified and experienced lawyers and bailiffs",
    },
    {
      icon: MessageSquare,
      title: "Secure Communication",
      desc: "Communicate securely with your professionals via our messaging service",
    },
    {
      icon: Scale,
      title: "Complete Follow-up",
      desc: "Track the progress of your cases from your dashboard",
    },
  ],
};

// --- The Extracted Features Section Component ---
export default function FeaturesSection() {
  const { mainTitle, mainTitleSpan, mainTitleAfter, subtitle, features } =
    englishContent;
  const featureDelays = ["0s", "0.1s", "0.2s", "0.3s", "0.4s", "0.5s"];

  return (
    <section className="py-20 px-4 relative">
      {/* The background decorative elements are kept for context */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div
          className="absolute top-20 right-20 w-24 h-24 bg-primary/5 rounded-full animate-tech-glow"
          style={{ animationDelay: "0s" }}
        ></div>
        <div
          className="absolute bottom-20 left-20 w-20 h-20 bg-secondary/5 rounded-full animate-data-flow"
          style={{ animationDelay: "1.5s" }}
        ></div>
        <div
          className="absolute top-1/3 right-1/3 w-16 h-16 bg-primary/3 rounded-full animate-slide-in-up"
          style={{ animationDelay: "3s" }}
        ></div>
      </div>

      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in-scale">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {mainTitle} <span className="gradient-text">{mainTitleSpan}</span>{" "}
            {mainTitleAfter}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="startup-card glass-effect group"
              style={{ animationDelay: featureDelays[index] }}
            >
              <CardHeader>
                <feature.icon className="h-12 w-12 text-primary mb-4 mx-auto group-hover:animate-bounce transition-all duration-300" />
                <CardTitle className="group-hover:text-primary transition-colors duration-300">
                  {feature.title}
                </CardTitle>
                <CardDescription>{feature.desc}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
