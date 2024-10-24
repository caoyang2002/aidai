import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Brain, BookOpen, Users, Code, Newspaper } from "lucide-react"
import Link from "next/link"

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative hero-gradient">
        <div className="container flex flex-col items-center justify-center space-y-4 py-24 text-center md:py-32">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
              Master AI with Aid AI
            </h1>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Your comprehensive platform for learning artificial intelligence. From basics to advanced concepts, we've got you covered.
            </p>
          </div>
          <div className="flex flex-col gap-4 min-[400px]:flex-row">
            <Button size="lg" className="glass-effect hover:bg-white/20" asChild>
              <Link href="/courses">Start Learning</Link>
            </Button>
            <Button variant="outline" size="lg" className="glass-effect hover:bg-white/20" asChild>
              <Link href="/docs">View Documentation</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <h2 className="mb-12 text-center text-3xl font-bold tracking-tight">Why Choose Aid AI?</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card className="glass-card flex flex-col p-6">
              <BookOpen className="mb-4 h-10 w-10 text-primary" />
              <h3 className="mb-2 text-xl font-bold">Comprehensive Courses</h3>
              <p className="text-muted-foreground">
                Structured learning paths covering all aspects of AI, from machine learning to neural networks.
              </p>
            </Card>
            <Card className="glass-card flex flex-col p-6">
              <Users className="mb-4 h-10 w-10 text-primary" />
              <h3 className="mb-2 text-xl font-bold">Active Community</h3>
              <p className="text-muted-foreground">
                Connect with fellow learners, share experiences, and grow together in our vibrant community.
              </p>
            </Card>
            <Card className="glass-card flex flex-col p-6">
              <Code className="mb-4 h-10 w-10 text-primary" />
              <h3 className="mb-2 text-xl font-bold">Hands-on Projects</h3>
              <p className="text-muted-foreground">
                Apply your knowledge with real-world projects and practical exercises.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Latest Updates Section */}
      <section>
        <div className="container py-16 md:py-24">
          <div className="mb-12 flex items-center justify-between">
            <h2 className="text-3xl font-bold tracking-tight">Latest Updates</h2>
            <Button variant="outline" className="glass-effect hover:bg-white/20" asChild>
              <Link href="/blog">View All</Link>
            </Button>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <Card key={i} className="glass-card flex flex-col">
                <div className="aspect-video w-full bg-white/5 backdrop-blur" />
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Newspaper className="h-4 w-4" />
                    <time dateTime="2024-03-20">March 20, 2024</time>
                  </div>
                  <h3 className="mt-4 text-xl font-bold">Understanding Large Language Models</h3>
                  <p className="mt-2 line-clamp-2 flex-1 text-muted-foreground">
                    Dive deep into the architecture and capabilities of large language models like GPT-4.
                  </p>
                  <Button variant="link" className="mt-4 px-0 hover:bg-white/10" asChild>
                    <Link href="/blog/understanding-llms">Read More</Link>
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}