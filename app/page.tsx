import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Brain, BookOpen, Users, Code, Newspaper } from "lucide-react"
import Link from "next/link"

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center">
      {/* Hero Section */}
      <section className="relative ">
        <div className="container flex flex-col items-center justify-center space-y-4 py-24 text-center md:py-32">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
            即刻开启 AI 探索之旅
            </h1>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
             从初学者到高级应用的 AI 学习旅程，AI Trail 带你领略 AI 的无限可能。
            </p>
          </div>
          <div className="flex flex-col gap-4 min-[400px]:flex-row">
            <Button variant="outline" size="lg" className="bg-gradient-to-r from-teal-400 to-blue-500 hover:from-pink-500 hover:to-orange-500  hover:bg-white/20" asChild>
              <Link href="/courses" >开始学习</Link>
            </Button>
            <Button variant="ghost" size="lg" className="glass-effect hover:bg-white/20" asChild>
              <Link href="/docs" >查看文档</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <h2 className="mb-12 text-center text-3xl font-bold tracking-tight">为什么选择 AI Trail?</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card className="glass-card flex flex-col p-6">
              <BookOpen className="mb-4 h-10 w-10 text-primary" />
              <h3 className="mb-2 text-xl font-bold">高级课程</h3>
              <p className="text-muted-foreground">
              结构化的学习路径涵盖了人工智能的各个方面，从机器学习到神经网络。
              </p>
            </Card>
            <Card className="glass-card flex flex-col p-6">
              <Users className="mb-4 h-10 w-10 text-primary" />
              <h3 className="mb-2 text-xl font-bold">活跃的社区</h3>
              <p className="text-muted-foreground">
              与其他学习者交流、分享经验，并在我们充满活力的社区中共同成长。
              </p>
            </Card>
            <Card className="glass-card flex flex-col p-6">
              <Code className="mb-4 h-10 w-10 text-primary" />
              <h3 className="mb-2 text-xl font-bold">实践项目</h3>
              <p className="text-muted-foreground">
              将你的知识应用到现实世界的项目和实践练习中。
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