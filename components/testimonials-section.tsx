import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Small Business Owner",
    content:
      "LegalHub made finding the right lawyer for my business incredibly easy. The platform is intuitive, and the document management features saved me so much time.",
    rating: 5,
    avatar: "/professional-woman-headshot.png",
  },
  {
    name: "Michael Chen",
    role: "Individual Client",
    content:
      "I was nervous about finding legal help, but LegalHub connected me with an amazing attorney who guided me through everything. The secure messaging was perfect.",
    rating: 5,
    avatar: "/professional-man-client-headshot.jpg",
  },
  {
    name: "Emily Rodriguez",
    role: "Corporate Legal Manager",
    content:
      "As a legal manager, I appreciate how LegalHub streamlines our external counsel relationships. The payment system and document sharing are top-notch.",
    rating: 5,
    avatar: "/professional-woman-legal-manager-headshot.jpg",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-balance">What Our Clients Say</h2>
          <p className="text-xl text-muted-foreground text-pretty max-w-3xl mx-auto">
            Join thousands of satisfied clients who have found the legal help they needed through LegalHub.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-0 shadow-sm">
              <CardContent className="pt-6">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <Quote className="h-8 w-8 text-secondary/20 mb-4" />
                <p className="text-muted-foreground leading-relaxed mb-6">"{testimonial.content}"</p>
                <div className="flex items-center gap-3">
                  <img
                    src={testimonial.avatar || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
