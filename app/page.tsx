import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Smartphone, Palette, Bell, Sparkles, Star, Download, Play } from "lucide-react"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"

export default function WalllistLanding() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <CheckCircle className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold text-foreground">Walllist</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">
                Features
              </a>
              <a href="#gallery" className="text-muted-foreground hover:text-foreground transition-colors">
                Gallery
              </a>
              <a href="#download" className="text-muted-foreground hover:text-foreground transition-colors">
                Download
              </a>
              <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 lg:py-32 overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-12">
            {/* Hero Text */}
            <div className="space-y-8">
              <div className="space-y-6">
                <h1 className="text-5xl lg:text-7xl font-bold text-foreground text-balance leading-tight">
                  Boost Your Productivity
                </h1>
                <p className="text-xl lg:text-2xl text-muted-foreground text-pretty max-w-3xl mx-auto leading-relaxed">
                  Transform your home screen into a productivity powerhouse. Keep your tasks visible, stay focused, and
                  never miss what matters most.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-shadow">
                  <Download className="w-5 h-5 mr-2" />
                  Download Now
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="text-lg px-8 py-6 bg-transparent border-2 hover:bg-muted/50 transition-colors"
                >
                  <Play className="w-5 h-5 mr-2" />
                  Watch Demo
                </Button>
              </div>
            </div>

            {/* App Preview - Half Visible */}
            <div className="relative">
              <div className="relative mx-auto w-80 h-[400px] bg-card rounded-t-[3rem] border-8 border-b-0 border-border shadow-2xl overflow-hidden transform hover:scale-105 transition-transform duration-500">
                <img
                  src="/smartphone-mockup-showing-wallpaper-with-task-list.png"
                  alt="Walllist app preview showing tasks on wallpaper"
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent" />
              </div>
              {/* Subtle shadow to encourage scrolling */}
              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-64 h-16 bg-gradient-to-b from-transparent to-muted/30 rounded-full blur-xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground text-balance">
              Everything you need to stay productive
            </h2>
            <p className="text-xl text-muted-foreground text-pretty max-w-2xl mx-auto">
              Walllist combines the convenience of your home screen with powerful task management features.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8 text-center space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto">
                  <Smartphone className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">Home Screen Integration</h3>
                <p className="text-muted-foreground text-pretty">
                  Your tasks appear directly on your wallpaper, keeping your priorities visible at all times without
                  opening any apps.
                </p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8 text-center space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto">
                  <Palette className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">Complete Customization</h3>
                <p className="text-muted-foreground text-pretty">
                  Choose from our gallery or use your own photos. Customize colors, fonts, position, and style to match
                  your aesthetic.
                </p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8 text-center space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto">
                  <Bell className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">Smart Reminders</h3>
                <p className="text-muted-foreground text-pretty">
                  Get intelligent notifications that help you stay on track without being overwhelming or disruptive.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section id="gallery" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground text-balance">Make it yours</h2>
            <p className="text-xl text-muted-foreground text-pretty max-w-2xl mx-auto">
              Explore different styles and see how your tasks can look on various wallpapers.
            </p>
          </div>
          <ScrollArea className="w-full whitespace-nowrap rounded-2xl border border-border bg-card">
            <div className="flex w-max gap-4 p-4">
              {[...Array(10)].map((_, i) => (
                <div
                  key={i}
                  className="relative h-[400px] w-[225px] shrink-0 overflow-hidden rounded-xl shadow-lg transition-transform duration-300 hover:scale-[1.02]"
                >
                  <img
                    src={`/wallpaper-style-.png?key=aypmj&height=400&width=225&query=wallpaper style ${i + 1} with task overlay`}
                    alt={`Wallpaper style ${i + 1}`}
                    className="h-full w-full object-cover"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 transition-opacity duration-300 hover:opacity-100" />
                </div>
              ))}
            </div>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
        </div>
      </section>

      {/* AI Coming Soon */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-6">
            <Badge variant="secondary" className="text-sm px-4 py-2">
              <Sparkles className="w-4 h-4 mr-2" />
              Coming Soon
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground text-balance">
              AI-Powered Priority Suggestions
            </h2>
            <p className="text-xl text-muted-foreground text-pretty max-w-2xl mx-auto">
              Inspired by "Eat That Frog!" methodology, our AI will help you identify and focus on your most important
              tasks first, maximizing your productivity.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground text-balance">Loved by productive people</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Chen",
                role: "Product Manager",
                content:
                  "Walllist has completely changed how I manage my daily tasks. Having them right on my home screen means I never forget what's important.",
                rating: 5,
              },
              {
                name: "Marcus Rodriguez",
                role: "Freelance Designer",
                content:
                  "The customization options are incredible. I can make my task list match my aesthetic while staying productive. It's perfect.",
                rating: 5,
              },
              {
                name: "Emily Watson",
                role: "Student",
                content:
                  "As someone with ADHD, having my tasks visible at all times has been a game-changer for my focus and productivity.",
                rating: 5,
              },
            ].map((testimonial, i) => (
              <Card key={i} className="border-0 shadow-lg">
                <CardContent className="p-8 space-y-4">
                  <div className="flex space-x-1">
                    {[...Array(testimonial.rating)].map((_, j) => (
                      <Star key={j} className="w-5 h-5 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground text-pretty">"{testimonial.content}"</p>
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section id="download" className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance">Ready to transform your productivity?</h2>
            <p className="text-xl text-primary-foreground/80 text-pretty max-w-2xl mx-auto">
              Join thousands of users who have made their home screens work harder for them.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
                <Download className="w-5 h-5 mr-2" />
                Download for Android
              </Button>
              <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
                <Download className="w-5 h-5 mr-2" />
                Download for iOS
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="py-12 border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <CheckCircle className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold text-foreground">Walllist</span>
            </div>
            <div className="flex items-center space-x-6">
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                Privacy
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                Terms
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                Support
              </a>
            </div>
            <p className="text-sm text-muted-foreground">© 2024 Walllist. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
