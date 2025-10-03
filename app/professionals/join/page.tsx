"use client";

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
import {
  ArrowRight,
  BarChart3,
  Calendar,
  CheckCircle,
  Clock,
  FileText,
  Globe,
  MessageSquare,
  Scale,
  Shield,
  Star,
  TrendingUp,
  Users,
} from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function ProfessionalJoinPage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-background overflow-hidden relative">
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {/* Geometric shapes animations */}
        <div
          className="absolute top-20 right-20 w-32 h-32 bg-primary/5 rounded-full animate-data-flow"
          style={{ animationDelay: "0s" }}
        ></div>
        <div
          className="absolute bottom-40 left-1/4 w-24 h-24 bg-secondary/5 rounded-full animate-data-flow"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-1/2 right-1/3 w-20 h-20 bg-primary/3 rounded-full animate-legal-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-20 right-1/4 w-28 h-28 bg-secondary/3 rounded-full animate-tech-glow"
          style={{ animationDelay: "0.5s" }}
        ></div>

        {/* Circuit-like flowing elements */}
        <div
          className="absolute top-20 left-0 w-2 h-2 bg-primary rounded-full animate-circuit"
          style={{ animationDelay: "0s" }}
        ></div>
        <div
          className="absolute top-40 left-0 w-1 h-1 bg-secondary rounded-full animate-circuit"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-60 left-0 w-1.5 h-1.5 bg-primary rounded-full animate-circuit"
          style={{ animationDelay: "4s" }}
        ></div>

        {/* Matrix-style falling elements */}
        <div
          className="absolute top-0 left-1/4 w-0.5 h-8 bg-gradient-to-b from-primary to-transparent animate-matrix"
          style={{ animationDelay: "0s", animationDuration: "12s" }}
        ></div>
        <div
          className="absolute top-0 left-1/2 w-0.5 h-6 bg-gradient-to-b from-secondary to-transparent animate-matrix"
          style={{ animationDelay: "3s", animationDuration: "10s" }}
        ></div>
        <div
          className="absolute top-0 left-3/4 w-0.5 h-10 bg-gradient-to-b from-primary to-transparent animate-matrix"
          style={{ animationDelay: "6s", animationDuration: "14s" }}
        ></div>

        {/* Floating geometric elements */}
        <div
          className="absolute top-1/3 left-1/4 w-12 h-12 border border-primary/20 rounded-full animate-legal-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-10 h-10 border border-secondary/20 rounded-full animate-tech-glow"
          style={{ animationDelay: "4s" }}
        ></div>
        <div
          className="absolute top-16 right-16 w-8 h-8 border-2 border-primary/30 rotate-45 animate-legal-pulse"
          style={{ animationDelay: "3s" }}
        ></div>
        <div
          className="absolute bottom-32 left-16 w-6 h-6 border-2 border-secondary/30 rotate-12 animate-tech-glow"
          style={{ animationDelay: "4s" }}
        ></div>
      </div>

      <GlobalHeader />

      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="absolute top-10 left-1/4 w-3 h-3 bg-primary rounded-full animate-tech-glow"
            style={{ animationDelay: "0s" }}
          ></div>
          <div
            className="absolute top-32 right-1/4 w-2 h-2 bg-secondary rounded-full animate-legal-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
          <div
            className="absolute bottom-20 left-1/3 w-2.5 h-2.5 bg-primary rounded-full animate-tech-glow"
            style={{ animationDelay: "2s" }}
          ></div>
        </div>

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
              Plateforme Dédiée aux Professionnels du Droit
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-balance mb-6">
              Développez votre <span className="gradient-text">clientèle</span>{" "}
              avec LegalHub
            </h1>
            <p className="text-xl text-muted-foreground text-balance mb-8 max-w-3xl mx-auto animate-slide-in-up">
              Rejoignez la première plateforme juridique du Maroc et augmentez
              votre visibilité, optimisez votre temps et développez votre
              cabinet grâce à nos outils numériques innovants.
            </p>
            <div
              className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-slide-in-up"
              style={{ animationDelay: "0.3s" }}
            >
              <Button size="lg" asChild className="animate-bounce-in">
                <Link href="/professionals/register">
                  Rejoindre LegalHub
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="#benefits">Découvrir les avantages</Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {[
                {
                  value: "500+",
                  label: "Professionnels inscrits",
                  delay: "0s",
                },
                { value: "10K+", label: "Clients actifs", delay: "0.1s" },
                { value: "30%", label: "Gain de temps", delay: "0.2s" },
                { value: "95%", label: "Satisfaction client", delay: "0.3s" },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="text-center startup-card p-6 rounded-lg animate-slide-in-up"
                  style={{ animationDelay: stat.delay }}
                >
                  <div className="text-3xl font-bold gradient-text mb-2">
                    {stat.value}
                  </div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-20 px-4 relative">
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="absolute top-20 right-20 w-24 h-24 bg-primary/5 rounded-full animate-tech-glow"
            style={{ animationDelay: "0s" }}
          ></div>
          <div
            className="absolute bottom-20 left-20 w-20 h-20 bg-secondary/5 rounded-full animate-legal-pulse"
            style={{ animationDelay: "1.5s" }}
          ></div>
        </div>

        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in-scale">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Pourquoi choisir LegalHub pour votre cabinet ?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Découvrez comment notre plateforme transforme la pratique
              juridique moderne
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: TrendingUp,
                title: "Augmentez votre clientèle",
                desc: "Gagnez en visibilité auprès de milliers de clients potentiels recherchant des services juridiques au Maroc",
                delay: "0s",
              },
              {
                icon: Clock,
                title: "Économisez 30% de votre temps",
                desc: "Automatisez la prise de rendez-vous, la gestion des documents et la communication client",
                delay: "0.1s",
              },
              {
                icon: Globe,
                title: "Présence digitale renforcée",
                desc: "Bénéficiez d'un profil professionnel optimisé pour le référencement et les moteurs de recherche",
                delay: "0.2s",
              },
              {
                icon: Calendar,
                title: "Gestion simplifiée des RDV",
                desc: "Calendrier intelligent, rappels automatiques et consultations en ligne ou en présentiel",
                delay: "0.3s",
              },
              {
                icon: Shield,
                title: "Sécurité et conformité",
                desc: "Plateforme sécurisée conforme aux normes juridiques marocaines avec signature électronique certifiée",
                delay: "0.4s",
              },
              {
                icon: BarChart3,
                title: "Gestion de facturation intégrée",
                desc: "Créez, envoyez et suivez vos factures automatiquement avec des rappels de paiement intelligents",
                delay: "0.5s",
              },
            ].map((feature, index) => (
              <Card
                key={index}
                className="startup-card glass-effect group animate-slide-in-up"
                style={{ animationDelay: feature.delay }}
              >
                <CardHeader>
                  <feature.icon className="h-12 w-12 text-primary mb-4 group-hover:animate-bounce transition-all duration-300" />
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

      {/* Features Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Outils professionnels intégrés
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Tout ce dont vous avez besoin pour moderniser votre pratique
              juridique
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Gestion client avancée
                  </h3>
                  <p className="text-muted-foreground">
                    CRM intégré pour suivre vos clients, leurs dossiers et
                    l'historique de vos interactions
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <FileText className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Facturation automatisée
                  </h3>
                  <p className="text-muted-foreground">
                    Générez vos factures automatiquement, suivez les paiements
                    et gérez votre comptabilité
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <MessageSquare className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Consultations à distance
                  </h3>
                  <p className="text-muted-foreground">
                    Visioconférence HD intégrée, partage d'écran et
                    enregistrement sécurisé des consultations
                  </p>
                </div>
              </div>
            </div>

            <Card className="p-8 bg-gradient-to-br from-primary/5 to-secondary/5">
              <div className="text-center">
                <Star className="h-16 w-16 text-secondary mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-4">Témoignage</h3>
                <blockquote className="text-lg italic mb-4">
                  "LegalHub a transformé ma pratique. J'ai augmenté ma clientèle
                  de 40% en 6 mois et je gagne un temps précieux sur les tâches
                  administratives."
                </blockquote>
                <cite className="font-semibold">
                  - Me. Fatima Zahra Alami, Avocate à Casablanca
                </cite>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Tarifs transparents et abordables
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Choisissez l'offre qui correspond à vos besoins
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="border-2">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Essentiel</CardTitle>
                <div className="text-3xl font-bold text-primary">299 DH</div>
                <CardDescription>par mois</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>Profil professionnel</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>Prise de RDV en ligne</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>Messagerie sécurisée</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>Support client</span>
                </div>
                <Button className="w-full bg-transparent" variant="outline">
                  Commencer
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-primary text-primary-foreground">
                  Populaire
                </Badge>
              </div>
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Professionnel</CardTitle>
                <div className="text-3xl font-bold text-primary">599 DH</div>
                <CardDescription>par mois</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>Tout de l'offre Essentiel</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>Tableau de bord analytique</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>Signature électronique</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>Visioconférence illimitée</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>Modèles de documents</span>
                </div>
                <Button className="w-full">Commencer</Button>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Cabinet</CardTitle>
                <div className="text-3xl font-bold text-primary">999 DH</div>
                <CardDescription>par mois</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>Tout de l'offre Professionnel</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>Comptes multiples</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>API et intégrations</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>Support prioritaire</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>Formation personnalisée</span>
                </div>
                <Button className="w-full bg-transparent" variant="outline">
                  Nous contacter
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-primary text-primary-foreground">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Prêt à rejoindre LegalHub ?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Inscrivez-vous dès aujourd'hui et commencez à développer votre
            cabinet avec les outils numériques les plus avancés du secteur
            juridique marocain.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/professionals/register">
                S'inscrire maintenant
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10 bg-transparent"
              asChild
            >
              <Link href="/contact">Demander une démo</Link>
            </Button>
          </div>
        </div>
      </section>

      <footer className="bg-card border-t py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-5 gap-8">
            <div>
              <div className="mb-4">
                <div className="flex items-center space-x-2">
                  <Scale className="h-6 w-6 text-secondary" />
                  <span className="text-xl font-bold">LegalHub</span>
                </div>
              </div>
              <p className="text-muted-foreground mb-6">
                La plateforme qui connecte les justiciables aux professionnels
                du droit au Maroc.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4 text-primary">Services</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <Link
                    href="/under-Construction"
                    className="hover:text-primary transition-colors"
                  >
                    Consultations
                  </Link>
                </li>
                <li>
                  <Link
                    href="/under-Construction"
                    className="hover:text-primary transition-colors"
                  >
                    Rédaction de documents
                  </Link>
                </li>
                <li>
                  <Link
                    href="/under-Construction"
                    className="hover:text-primary transition-colors"
                  >
                    Constats
                  </Link>
                </li>
                <li>
                  <Link
                    href="/under-Construction"
                    className="hover:text-primary transition-colors"
                  >
                    Notifications
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4 text-primary">
                Professionnels
              </h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <Link
                    href="/under-Construction"
                    className="hover:text-primary transition-colors"
                  >
                    Trouver un avocat
                  </Link>
                </li>
                <li>
                  <Link
                    href="/under-Construction"
                    className="hover:text-primary transition-colors"
                  >
                    Trouver un huissier
                  </Link>
                </li>
                <li>
                  <Link
                    href="/under-Construction"
                    className="hover:text-primary transition-colors"
                  >
                    Rejoindre la plateforme
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4 text-primary">Blog</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <Link
                    href="/blog"
                    className="hover:text-primary transition-colors"
                  >
                    Articles juridiques
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blog/guides"
                    className="hover:text-primary transition-colors"
                  >
                    Guides pratiques
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blog/actualites"
                    className="hover:text-primary transition-colors"
                  >
                    Actualités juridiques
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4 text-primary">Support</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <Link
                    href="/under-Construction"
                    className="hover:text-primary transition-colors"
                  >
                    Centre d'aide
                  </Link>
                </li>
                <li>
                  <Link
                    href="/under-Construction"
                    className="hover:text-primary transition-colors"
                  >
                    Nous contacter
                  </Link>
                </li>
                <li>
                  <Link
                    href="/under-Construction"
                    className="hover:text-primary transition-colors"
                  >
                    Conditions d'utilisation
                  </Link>
                </li>
                <li>
                  <Link
                    href="/under-Construction"
                    className="hover:text-primary transition-colors"
                  >
                    Politique de confidentialité
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t mt-8 pt-8 text-center text-muted-foreground">
            <p>&copy; 2025 LegalHub. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
