import { Brain } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t bg-background flex flex-auto justify-center items-center">
      <div className="container py-8 md:py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="flex flex-col space-y-4">
            <div className="flex items-center space-x-2">
              <Brain className="h-6 w-6" />
              <span className="font-bold">AI Trail</span>
            </div>
            <p className="text-sm text-muted-foreground">
             开始你的 AI 之旅 
            </p>
          </div>
          
          <div>
            <h3 className="mb-4 text-sm font-semibold">学习</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/courses" className="text-muted-foreground hover:text-foreground">
                  教程
                </a>
              </li>
              <li>
                <a href="/docs" className="text-muted-foreground hover:text-foreground">
                  文档
                </a>
              </li>
              <li>
                <a href="/resources" className="text-muted-foreground hover:text-foreground">
                  资源
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="mb-4 text-sm font-semibold">社区</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/forum" className="text-muted-foreground hover:text-foreground">
                  论坛
                </a>
              </li>
              <li>
                <a href="/projects" className="text-muted-foreground hover:text-foreground">
                  项目
                </a>
              </li>
              <li>
                <a href="/blog" className="text-muted-foreground hover:text-foreground">
                  博客
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="mb-4 text-sm font-semibold">法律</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/privacy" className="text-muted-foreground hover:text-foreground">
                  隐私
                </a>
              </li>
              <li>
                <a href="/terms" className="text-muted-foreground hover:text-foreground">
                  条款
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} AITrail. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}