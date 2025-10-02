import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowLeft,
  BookOpen,
  Calendar,
  Clock,
  Share2,
  User,
} from "lucide-react";
import Link from "next/link";

// Mock data for the article
const article = {
  id: 1,
  title: "Complete Guide to Real Estate Law in 2024",
  content: `
    <h3>Key Takeaways for 2024</h3>
<ul>
  <li><strong>Stricter EPC Standards:</strong> New energy performance rules are now in effect for all properties.</li>
  <li><strong>Variable Transfer Taxes:</strong> The cost of buying property may have changed depending on the region.</li>
  <li><strong>Professional Guidance is Crucial:</strong> Navigating these updates requires expert legal advice to ensure compliance.</li>
</ul>
<hr>

<h2>Introduction to Real Estate Law</h2>
<p>Real estate law is a branch of law governing the legal relationships concerning real property. The landscape of this field saw several significant developments in 2024.</p>

<h2>The Main Developments in 2024</h2>
<p>This year was marked by important reforms that directly impact all real estate transactions. Two of the most significant changes involve energy diagnostics and transfer taxes.</p>

<h3>1. Energy Performance Certificate (EPC) Reform</h3>
<p>The <strong>Energy Performance Certificate (EPC)</strong> has been reinforced with new, stricter criteria. Property owners must now meet more demanding energy efficiency thresholds, which can affect a property's value and saleability.</p>

<h3>2. Changes in Transfer Taxes</h3>
<p>Transfer taxes have been adjusted in several regions. This directly impacts the <strong>overall cost</strong> of real estate transactions, making it essential to budget accordingly based on the property's location.</p>

<h2>Practical Advice for Success</h2>
<p>To navigate this complex regulatory environment, we strongly recommend the following steps:</p>
<ol>
  <li><strong>Partner with an Expert:</strong> Always consult a real estate law professional. Their guidance is invaluable for navigating the current legal landscape and avoiding costly mistakes.</li>
  <li><strong>Verify All Assessments:</strong> Double-check that all property diagnostics, especially the new EPC, are fully compliant and up-to-date before proceeding with a transaction.</li>
  <li><strong>Stay Proactive and Informed:</strong> The law continues to change. Anticipating future regulatory shifts can help protect your investments and provide a competitive edge.</li>
</ol>

<h2>Conclusion</h2>
<p>The field of real estate law is evolving at a rapid pace. Staying informed of the latest developments isn't just good practice—it's essential for securing your property transactions and protecting your assets in 2024 and beyond.</p>
  `,
  author: "Atty. Sarah Dubois",
  date: "March 15, 2024",
  readTime: "8 min read",
  category: "Real Estate Law",
  image: "/modern-law-office-building.jpg",
};

const relatedArticles = [
  {
    id: 2,
    title: "Divorce by Mutual Consent: A Simplified Procedure",
    category: "Family Law",
    readTime: "6 min read",
  },
  {
    id: 3,
    title: "Personal Data Protection in Business",
    category: "Business Law",
    readTime: "10 min read",
  },
];

export default function BlogArticlePage({
  params,
}: {
  params: { id: string };
}) {
  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-4 py-8">
        {/* Back Button */}
        <Button variant="ghost" asChild className="mb-6">
          <Link href="/blog" className="flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back to blog
          </Link>
        </Button>

        <div className="max-w-4xl mx-auto">
          {/* Article Header */}
          <div className="mb-8">
            <Badge className="mb-4">{article.category}</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
              {article.title}
            </h1>

            <div className="flex items-center gap-6 text-muted-foreground mb-6">
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                {article.author}
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                {article.date}
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                {article.readTime}
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Button variant="outline" size="sm">
                <Share2 className="h-4 w-4 mr-2" />
                Share
              </Button>
              <Button variant="outline" size="sm">
                <BookOpen className="h-4 w-4 mr-2" />
                Save
              </Button>
            </div>
          </div>

          {/* Featured Image */}
          <div className="aspect-video mb-8 overflow-hidden rounded-lg">
            <img
              src={article.image || "/placeholder.svg"}
              alt={article.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none mb-12">
            <div dangerouslySetInnerHTML={{ __html: article.content }} />
          </div>

          {/* Related Articles */}
          <div className="border-t pt-8">
            <h2 className="text-2xl font-bold mb-6">Related Articles</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {relatedArticles.map((relatedArticle) => (
                <Card
                  key={relatedArticle.id}
                  className="hover:shadow-lg transition-shadow"
                >
                  <CardContent className="p-6">
                    <Badge className="mb-3">{relatedArticle.category}</Badge>
                    <h3 className="text-lg font-semibold mb-3 text-balance">
                      {relatedArticle.title}
                    </h3>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">
                        {relatedArticle.readTime}
                      </span>
                      <Button variant="outline" size="sm" asChild>
                        <Link href={`/blog/${relatedArticle.id}`}>Read</Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
