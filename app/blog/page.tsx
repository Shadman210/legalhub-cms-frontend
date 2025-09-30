import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ArrowRight, Calendar, Clock, User } from "lucide-react";
import Link from "next/link";

const blogPosts = [
  {
    id: 1,
    title: "Complete Guide to Real Estate Law in 2024",
    excerpt:
      "Discover the latest developments in real estate law and their impact on your transactions.",
    author: "Atty. Sarah Dubois",
    date: "March 15, 2024",
    readTime: "8 min read",
    category: "Real Estate Law",
    image: "/modern-law-office-building.jpg",
    featured: true,
  },
  {
    id: 2,
    title: "Divorce by Mutual Consent: A Simplified Procedure",
    excerpt:
      "Everything you need to know about the new divorce procedure by mutual consent.",
    author: "Atty. Pierre Martin",
    date: "March 12, 2024",
    readTime: "6 min read",
    category: "Family Law",
    image: "/family-law-consultation.jpg",
  },
  {
    id: 3,
    title: "Personal Data Protection in Business",
    excerpt: "GDPR obligations for companies and penalties for non-compliance.",
    author: "Atty. Claire Rousseau",
    date: "March 10, 2024",
    readTime: "10 min read",
    category: "Business Law",
    image: "/data-protection-privacy-law.jpg",
  },
  {
    id: 4,
    title: "Inheritance: Optimizing the Transfer of Your Assets",
    excerpt:
      "Legal strategies to optimize the transfer of your assets to your heirs.",
    author: "Atty. Antoine Leroy",
    date: "March 8, 2024",
    readTime: "12 min read",
    category: "Inheritance Law",
    image: "/inheritance-estate-planning.jpg",
  },
  {
    id: 5,
    title: "Employment Contracts: The Essential Clauses",
    excerpt:
      "Analysis of the essential clauses in an employment contract and their implications.",
    author: "Atty. Isabelle Moreau",
    date: "March 5, 2024",
    readTime: "7 min read",
    category: "Labor Law",
    image: "/employment-contract-signing.jpg",
  },
  {
    id: 6,
    title: "Starting a Business: Choosing the Right Legal Status",
    excerpt:
      "A comparison of the different legal statuses to create your business with peace of mind.",
    author: "Atty. Thomas Blanc",
    date: "March 3, 2024",
    readTime: "9 min read",
    category: "Business Law",
    image: "/business-startup-legal-documents.jpg",
  },
];

const categories = [
  "All",
  "Real Estate Law",
  "Family Law",
  "Business Law",
  "Inheritance Law",
  "Labor Law",
];

export default function BlogPage() {
  const featuredPost = blogPosts.find((post) => post.featured);
  const regularPosts = blogPosts.filter((post) => !post.featured);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            LegalHub Law Blog
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Legal news, practical advice, and expert analysis to guide you in
            your legal endeavors.
          </p>
        </div>

        {/* Categories Filter */}
        <div className="flex flex-wrap gap-2 justify-center mb-8">
          {categories.map((category) => (
            <Badge
              key={category}
              variant={category === "All" ? "default" : "secondary"}
              className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              {category}
            </Badge>
          ))}
        </div>

        {/* Featured Article */}
        {featuredPost && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Featured Article</h2>
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <img
                    src={featuredPost.image || "/placeholder.svg"}
                    alt={featuredPost.title}
                    className="w-full h-64 md:h-full object-cover"
                  />
                </div>
                <div className="md:w-1/2 p-6">
                  <Badge className="mb-3">{featuredPost.category}</Badge>
                  <h3 className="text-2xl font-bold mb-3 text-balance">
                    {featuredPost.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 text-pretty">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <User className="h-4 w-4" />
                      {featuredPost.author}
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {featuredPost.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {featuredPost.readTime}
                    </div>
                  </div>
                  <Button asChild>
                    <Link
                      href={`/blog/${featuredPost.id}`}
                      className="flex items-center gap-2"
                    >
                      Read Article
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        )}

        {/* Articles Grid */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-6">Latest Articles</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regularPosts.map((post) => (
              <Card
                key={post.id}
                className="overflow-hidden hover:shadow-lg transition-shadow group"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader className="pb-3">
                  <Badge className="w-fit mb-2">{post.category}</Badge>
                  <h3 className="text-lg font-semibold line-clamp-2 text-balance">
                    {post.title}
                  </h3>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-3 text-pretty">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-3 text-xs text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <User className="h-3 w-3" />
                      {post.author}
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {post.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {post.readTime}
                    </div>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    asChild
                    className="w-full bg-transparent"
                  >
                    <Link
                      href={`/blog/${post.id}`}
                      className="flex items-center gap-2"
                    >
                      Read More
                      <ArrowRight className="h-3 w-3" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Load More Button */}
        <div className="text-center">
          <Button variant="outline" size="lg">
            Load More Articles
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  );
}
