"use client";

import { Footer } from "@/components/layout/footer";
import { GlobalHeader } from "@/components/navigation/global-header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  ArrowLeft,
  ArrowRight,
  Award,
  Calendar,
  CheckCircle2,
  Clock,
  FileText,
  Mail,
  MessageSquare,
  Scale,
  Send,
  Shield,
  Sparkles,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";
import { useEffect, useState } from "react";

const services = [
  {
    id: "consultation",
    name: "Legal Consultations",
    description: "In-person or video conference appointments",
    icon: Calendar,
  },
  {
    id: "documents",
    name: "Document Drafting",
    description: "Contracts, leases, legal documents",
    icon: FileText,
  },
  {
    id: "constats",
    name: "Bailiff's Reports",
    description: "Official and legal findings",
    icon: Shield,
  },
  {
    id: "notifications",
    name: "Legal Notifications",
    description: "Summons and notifications",
    icon: MessageSquare,
  },
  {
    id: "signature",
    name: "Electronic Signature",
    description: "Sign documents online",
    icon: Scale,
  },
  {
    id: "suivi",
    name: "Case Tracking",
    description: "Dashboard and complete tracking",
    icon: Users,
  },
];

export default function WaitlistPage() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    selectedServices: [] as string[],
    captchaAnswer: "",
  });
  const [captcha, setCaptcha] = useState(generateCaptcha());
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [showConfetti, setShowConfetti] = useState(false);

  function generateCaptcha() {
    const captchaTypes = [
      // Math operations
      () => {
        const num1 = Math.floor(Math.random() * 15) + 5;
        const num2 = Math.floor(Math.random() * 15) + 5;
        const operators = [
          { symbol: "+", calc: (a: number, b: number) => a + b },
          { symbol: "-", calc: (a: number, b: number) => a - b },
          { symbol: "×", calc: (a: number, b: number) => a * b },
        ];
        const operator =
          operators[Math.floor(Math.random() * operators.length)];
        return {
          question: `What is ${num1} ${operator.symbol} ${num2}?`,
          answer: operator.calc(num1, num2),
        };
      },
      // Text-based questions
      () => {
        const questions = [
          { question: "How many letters in the word 'LEGAL'?", answer: 5 },
          { question: "How many days in a week?", answer: 7 },
          { question: "How many months in a year?", answer: 12 },
          {
            question:
              "What is the first letter of the alphabet? (numerical position)",
            answer: 1,
          },
          { question: "What is ten minus three?", answer: 7 },
          { question: "How many sides does a triangle have?", answer: 3 },
        ];
        return questions[Math.floor(Math.random() * questions.length)];
      },
      // Sequential patterns
      () => {
        const start = Math.floor(Math.random() * 5) + 1;
        const step = Math.floor(Math.random() * 3) + 2;
        const sequence = [start, start + step, start + step * 2];
        return {
          question: `Complete the sequence: ${sequence[0]}, ${sequence[1]}, ${sequence[2]}, ?`,
          answer: start + step * 3,
        };
      },
    ];

    const selectedType =
      captchaTypes[Math.floor(Math.random() * captchaTypes.length)];
    return selectedType();
  }

  const handleSelectAll = () => {
    setFormData((prev) => ({
      ...prev,
      selectedServices: services.map((s) => s.id),
    }));
  };

  const handleDeselectAll = () => {
    setFormData((prev) => ({
      ...prev,
      selectedServices: [],
    }));
  };

  const handleServiceToggle = (serviceId: string) => {
    setFormData((prev) => ({
      ...prev,
      selectedServices: prev.selectedServices.includes(serviceId)
        ? prev.selectedServices.filter((id) => id !== serviceId)
        : [...prev.selectedServices, serviceId],
    }));
  };

  const handleNext = () => {
    setError("");
    if (step === 1) {
      if (!formData.name || !formData.email) {
        setError("Please fill in all required fields");
        return;
      }
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
        setError("Please enter a valid email address");
        return;
      }
    }
    if (step === 2 && formData.selectedServices.length === 0) {
      setError("Please select at least one service");
      return;
    }
    setStep(step + 1);
  };

  const handleBack = () => {
    setError("");
    setStep(step - 1);
  };

  const handleSubmit = async () => {
    setError("");
    if (Number.parseInt(formData.captchaAnswer) !== captcha.answer) {
      setError("Incorrect answer. Please try again.");
      setCaptcha(generateCaptcha());
      setFormData((prev) => ({ ...prev, captchaAnswer: "" }));
      return;
    }

    setIsSubmitting(true);

    try {
      const selectedServiceNames = formData.selectedServices
        .map((id) => services.find((s) => s.id === id)?.name)
        .join(", ");

      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          services: selectedServiceNames,
        }),
      });

      if (!response.ok) throw new Error("Error during submission");

      setIsSubmitted(true);
      setTimeout(() => setShowConfetti(true), 100);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (err) {
      setError("An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleWhatsAppShare = () => {
    const message = `Hello LegalHub! I just signed up for your waitlist.\n\nName: ${
      formData.name
    }\nEmail: ${formData.email}\nPhone: ${
      formData.phone || "Not provided"
    }\nServices: ${formData.selectedServices
      .map((id) => services.find((s) => s.id === id)?.name)
      .join(", ")}`;
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  const Confetti = () => {
    const confettiPieces = Array.from({ length: 200 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 0.5,
      duration: 3 + Math.random() * 2,
      color: [
        "#d7942c",
        "#cc5600",
        "#f59e0b",
        "#fbbf24",
        "#fcd34d",
        "#22c55e",
        "#3b82f6",
        "#a855f7",
        "#ec4899",
      ][Math.floor(Math.random() * 9)],
      size: Math.random() * 10 + 6,
      rotation: Math.random() * 360,
      rotationSpeed: (Math.random() - 0.5) * 720,
      shape: ["square", "circle", "triangle"][Math.floor(Math.random() * 3)],
      wobble: Math.random() * 100,
    }));

    return (
      <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
        {confettiPieces.map((piece) => (
          <div
            key={piece.id}
            className={`absolute ${
              piece.shape === "circle"
                ? "rounded-full"
                : piece.shape === "triangle"
                ? "triangle-shape"
                : ""
            }`}
            style={{
              left: `${piece.left}%`,
              top: "-20px",
              width: `${piece.size}px`,
              height: `${piece.size}px`,
              backgroundColor: piece.color,
              animation: `confetti-fall ${
                piece.duration
              }s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards, 
                         confetti-wobble ${
                           piece.duration * 0.4
                         }s ease-in-out infinite,
                         confetti-rotate ${piece.duration}s linear infinite`,
              animationDelay: `${piece.delay}s`,
              transform: `rotate(${piece.rotation}deg)`,
              opacity: 0,
            }}
          />
        ))}
      </div>
    );
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [step]);

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-primary/10 via-background to-secondary/10 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float" />
          <div
            className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-float"
            style={{ animationDelay: "1s" }}
          />
        </div>

        {showConfetti && <Confetti />}

        <GlobalHeader />
        <div className="container mx-auto px-4 py-20 relative z-10">
          <Card className="max-w-2xl mx-auto text-center glass-card animate-fade-in-scale">
            <CardContent className="p-12">
              <div className="mb-6 flex justify-center">
                <div className="relative w-24 h-24 flex items-center justify-center animate-bounce-in">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-xl animate-pulse" />
                  <div className="relative w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center shadow-2xl shadow-primary/50">
                    <CheckCircle2
                      className="w-12 h-12 text-white animate-pulse-glow"
                      strokeWidth={2.5}
                    />
                  </div>
                </div>
              </div>
              <h2 className="text-3xl font-bold mb-4 gradient-text animate-slide-up">
                Thank you for your interest!
              </h2>
              <p
                className="text-lg text-muted-foreground mb-8 animate-slide-up"
                style={{ animationDelay: "0.1s" }}
              >
                Your registration has been successfully recorded. We will
                contact you as soon as the selected features are available.
              </p>
              <div
                className="space-y-4 animate-slide-up"
                style={{ animationDelay: "0.2s" }}
              >
                <Button
                  onClick={handleWhatsAppShare}
                  size="lg"
                  className="w-full glass-button hover:scale-105 transition-transform bg-transparent"
                  variant="outline"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Also send via WhatsApp
                </Button>
                <Button
                  asChild
                  size="lg"
                  className="w-full hover:scale-105 transition-transform"
                >
                  <a href="/">Back to Home</a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/10 via-background to-secondary/10 relative overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float" />
        <div
          className="absolute top-40 right-20 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute bottom-20 left-1/3 w-80 h-80 bg-primary/15 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        />
      </div>

      <GlobalHeader />
      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8 animate-slide-up">
            <Badge
              variant="secondary"
              className="mb-4 bg-primary/10 text-primary border-primary/20 animate-pulse-glow"
            >
              <Sparkles className="w-4 h-4 mr-2" />
              Exclusive Early Access
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
              Join the <span className="gradient-text">legal revolution</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 text-pretty">
              Be among the first to discover LegalHub and enjoy exclusive
              benefits reserved for founding members
            </p>

            <div className="grid md:grid-cols-3 gap-4 mb-8">
              <div className="glass-card p-4 text-left hover:scale-105 transition-all duration-300 hover:shadow-xl">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-3 animate-pulse-glow">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-semibold mb-1">Priority Access</h3>
                <p className="text-sm text-muted-foreground">
                  Be the first to know about the launch and access the platform
                  before anyone else
                </p>
              </div>
              <div
                className="glass-card p-4 text-left hover:scale-105 transition-all duration-300 hover:shadow-xl"
                style={{ animationDelay: "0.1s" }}
              >
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-3 animate-pulse-glow">
                  <Award className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-semibold mb-1">Preferential Rates</h3>
                <p className="text-sm text-muted-foreground">
                  Enjoy exclusive lifetime discounts reserved for founding
                  members
                </p>
              </div>
              <div
                className="glass-card p-4 text-left hover:scale-105 transition-all duration-300 hover:shadow-xl"
                style={{ animationDelay: "0.2s" }}
              >
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-3 animate-pulse-glow">
                  <Zap className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-semibold mb-1">Direct Influence</h3>
                <p className="text-sm text-muted-foreground">
                  Participate in development and suggest the features you want
                </p>
              </div>
            </div>

            <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground mb-8">
              <div className="flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-primary" />
                <span>
                  <strong className="text-foreground">500+</strong> signed up
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-primary" />
                <span>
                  <strong className="text-foreground">50+</strong> professionals
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-primary" />
                <span>Launch planned for Q2 2026</span>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <div className="relative flex items-center justify-between max-w-2xl mx-auto">
              <div className="flex flex-col items-center flex-1 relative z-10">
                <div
                  className={`w-16 h-16 rounded-2xl flex items-center justify-center font-bold text-lg transition-all duration-500 ${
                    step >= 1
                      ? "bg-gradient-to-br from-primary to-secondary text-white shadow-2xl shadow-primary/50 scale-110"
                      : "bg-muted text-muted-foreground scale-100"
                  }`}
                >
                  {step > 1 ? <CheckCircle2 className="w-7 h-7" /> : "1"}
                </div>
                <div className="mt-3 text-center">
                  <p
                    className={`text-sm font-semibold transition-all duration-300 ${
                      step >= 1 ? "text-primary" : "text-muted-foreground"
                    }`}
                  >
                    Information
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    Your details
                  </p>
                </div>
              </div>

              <div className="flex-1 h-1 mx-4 bg-muted rounded-full overflow-hidden relative -mt-12">
                <div
                  className={`h-full bg-gradient-to-r from-primary via-secondary to-primary transition-all duration-700 ease-out ${
                    step > 1 ? "w-full" : "w-0"
                  }`}
                  style={{
                    backgroundSize: "200% 100%",
                    animation: step > 1 ? "shimmer 2s linear infinite" : "none",
                  }}
                />
              </div>

              <div className="flex flex-col items-center flex-1 relative z-10">
                <div
                  className={`w-16 h-16 rounded-2xl flex items-center justify-center font-bold text-lg transition-all duration-500 ${
                    step >= 2
                      ? "bg-gradient-to-br from-primary to-secondary text-white shadow-2xl shadow-primary/50 scale-110"
                      : "bg-muted text-muted-foreground scale-100"
                  }`}
                >
                  {step > 2 ? <CheckCircle2 className="w-7 h-7" /> : "2"}
                </div>
                <div className="mt-3 text-center">
                  <p
                    className={`text-sm font-semibold transition-all duration-300 ${
                      step >= 2 ? "text-primary" : "text-muted-foreground"
                    }`}
                  >
                    Services
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    Your needs
                  </p>
                </div>
              </div>

              <div className="flex-1 h-1 mx-4 bg-muted rounded-full overflow-hidden relative -mt-12">
                <div
                  className={`h-full bg-gradient-to-r from-primary via-secondary to-primary transition-all duration-700 ease-out ${
                    step > 2 ? "w-full" : "w-0"
                  }`}
                  style={{
                    backgroundSize: "200% 100%",
                    animation: step > 2 ? "shimmer 2s linear infinite" : "none",
                  }}
                />
              </div>

              <div className="flex flex-col items-center flex-1 relative z-10">
                <div
                  className={`w-16 h-16 rounded-2xl flex items-center justify-center font-bold text-lg transition-all duration-500 ${
                    step >= 3
                      ? "bg-gradient-to-br from-primary to-secondary text-white shadow-2xl shadow-primary/50 scale-110"
                      : "bg-muted text-muted-foreground scale-100"
                  }`}
                >
                  {step > 3 ? <CheckCircle2 className="w-7 h-7" /> : "3"}
                </div>
                <div className="mt-3 text-center">
                  <p
                    className={`text-sm font-semibold transition-all duration-300 ${
                      step >= 3 ? "text-primary" : "text-muted-foreground"
                    }`}
                  >
                    Confirmation
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    Verification
                  </p>
                </div>
              </div>
            </div>
          </div>

          <Card className="glass-card border-primary/20 shadow-2xl shadow-primary/10 animate-fade-in-scale">
            <CardHeader>
              <CardTitle className="text-2xl">
                {step === 1 && "Your Information"}
                {step === 2 && "Services That Interest You"}
                {step === 3 && "Security Check"}
              </CardTitle>
              <CardDescription>
                {step === 1 && "Share your contact details to stay informed"}
                {step === 2 && "Select the features you would like to use"}
                {step === 3 && "Confirm you are not a robot"}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {step === 1 && (
                <div className="space-y-4 animate-slide-in-up">
                  <div className="space-y-2">
                    <Label htmlFor="name">
                      Full Name <span className="text-destructive">*</span>
                    </Label>
                    <Input
                      id="name"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="transition-all duration-300 focus:scale-[1.02]"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">
                      Email <span className="text-destructive">*</span>
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="transition-all duration-300 focus:scale-[1.02]"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone (optional)</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+1 (555) 123-4567"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="transition-all duration-300 focus:scale-[1.02]"
                    />
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="space-y-4 animate-slide-in-up">
                  <div className="flex gap-2 mb-4">
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      onClick={handleSelectAll}
                      className="flex-1 glass-button hover:scale-105 transition-all duration-300 bg-transparent"
                    >
                      <CheckCircle2 className="w-4 h-4 mr-2" />
                      Select All
                    </Button>
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      onClick={handleDeselectAll}
                      className="flex-1 glass-button hover:scale-105 transition-all duration-300 bg-transparent"
                    >
                      Deselect All
                    </Button>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    {services.map((service, index) => (
                      <div
                        key={service.id}
                        onClick={() => handleServiceToggle(service.id)}
                        className={`p-4 border-2 rounded-lg cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl ${
                          formData.selectedServices.includes(service.id)
                            ? "border-primary bg-primary/5 shadow-lg shadow-primary/20"
                            : "border-border hover:border-primary/50 glass-card"
                        }`}
                        style={{ animationDelay: `${index * 0.05}s` }}
                      >
                        <div className="flex items-start space-x-3">
                          <Checkbox
                            checked={formData.selectedServices.includes(
                              service.id
                            )}
                            onCheckedChange={() =>
                              handleServiceToggle(service.id)
                            }
                            className="mt-1"
                          />
                          <div className="flex-1">
                            <div className="flex items-center space-x-2 mb-1">
                              <service.icon className="w-5 h-5 text-primary" />
                              <h3 className="font-semibold">{service.name}</h3>
                            </div>
                            <p className="text-sm text-muted-foreground">
                              {service.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {step === 3 && (
                <div className="space-y-6 animate-slide-in-up">
                  <div className="glass-card p-6 rounded-lg text-center border border-primary/20">
                    <p className="text-sm text-muted-foreground mb-4">
                      Solve this question to continue
                    </p>
                    <div className="text-2xl font-bold mb-4 gradient-text animate-pulse-glow">
                      {captcha.question}
                    </div>
                    <Input
                      type="number"
                      placeholder="Your answer"
                      value={formData.captchaAnswer}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          captchaAnswer: e.target.value,
                        })
                      }
                      className="max-w-xs mx-auto text-center text-lg transition-all duration-300 focus:scale-110"
                    />
                  </div>

                  <div className="glass-card border border-primary/20 rounded-lg p-4">
                    <h4 className="font-semibold mb-2 flex items-center">
                      <Mail className="w-4 h-4 mr-2 text-primary" />
                      Summary
                    </h4>
                    <div className="space-y-1 text-sm">
                      <p>
                        <span className="text-muted-foreground">Name:</span>{" "}
                        {formData.name}
                      </p>
                      <p>
                        <span className="text-muted-foreground">Email:</span>{" "}
                        {formData.email}
                      </p>
                      {formData.phone && (
                        <p>
                          <span className="text-muted-foreground">Phone:</span>{" "}
                          {formData.phone}
                        </p>
                      )}
                      <p>
                        <span className="text-muted-foreground">Services:</span>{" "}
                        {formData.selectedServices.length} selected
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {error && (
                <div className="bg-destructive/10 border border-destructive/20 text-destructive p-3 rounded-lg text-sm animate-slide-in-up">
                  {error}
                </div>
              )}

              <div className="flex gap-3 pt-4">
                {step > 1 && (
                  <Button
                    onClick={handleBack}
                    variant="outline"
                    className="flex-1 glass-button hover:scale-105 transition-all duration-300 bg-transparent"
                  >
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back
                  </Button>
                )}
                {step < 3 ? (
                  <Button
                    onClick={handleNext}
                    className="flex-1 hover:scale-105 transition-all duration-300"
                  >
                    Next
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                ) : (
                  <Button
                    onClick={handleSubmit}
                    disabled={isSubmitting}
                    className="flex-1 hover:scale-105 transition-all duration-300 disabled:scale-100"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                        Submitting...
                      </>
                    ) : (
                      <>
                        Confirm Registration
                        <CheckCircle2 className="w-4 h-4 ml-2" />
                      </>
                    )}
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>

          <div className="mt-8 text-center text-sm text-muted-foreground animate-slide-up">
            <p className="flex items-center justify-center gap-2">
              <Shield className="w-4 h-4" />
              Your data is secure and will never be shared
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
