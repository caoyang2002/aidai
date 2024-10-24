import { Brain } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container py-8 md:py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="flex flex-col space-y-4">
            <div className="flex items-center space-x-2">
              <Brain className="h-6 w-6" />
              <span className="font-bold">Aid AI</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Your gateway to understanding and mastering artificial intelligence.
            </p>
          </div>
          
          <div>
            <h3 className="mb-4 text-sm font-semibold">Learn</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/courses" className="text-muted-foreground hover:text-foreground">
                  Courses
                </a>
              </li>
              <li>
                <a href="/docs" className="text-muted-foreground hover:text-foreground">
                  Documentation
                </a>
              </li>
              <li>
                <a href="/resources" className="text-muted-foreground hover:text-foreground">
                  Resources
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="mb-4 text-sm font-semibold">Community</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/forum" className="text-muted-foreground hover:text-foreground">
                  Forum
                </a>
              </li>
              <li>
                <a href="/projects" className="text-muted-foreground hover:text-foreground">
                  Projects
                </a>
              </li>
              <li>
                <a href="/blog" className="text-muted-foreground hover:text-foreground">
                  Blog
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="mb-4 text-sm font-semibold">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/privacy" className="text-muted-foreground hover:text-foreground">
                  Privacy
                </a>
              </li>
              <li>
                <a href="/terms" className="text-muted-foreground hover:text-foreground">
                  Terms
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Aid AI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}