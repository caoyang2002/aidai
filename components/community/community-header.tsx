import { Button } from "@/components/ui/button"
import { Users, TrendingUp, MessageSquare } from "lucide-react"

export function CommunityHeader() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Community</h1>
          <p className="text-muted-foreground">
            Connect with fellow AI enthusiasts and share your journey
          </p>
        </div>
        <Button>Create Post</Button>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <div className="flex items-center gap-2 rounded-lg border p-4">
          <Users className="h-5 w-5 text-muted-foreground" />
          <div>
            <p className="text-2xl font-bold">2.3k</p>
            <p className="text-sm text-muted-foreground">Members</p>
          </div>
        </div>
        <div className="flex items-center gap-2 rounded-lg border p-4">
          <MessageSquare className="h-5 w-5 text-muted-foreground" />
          <div>
            <p className="text-2xl font-bold">456</p>
            <p className="text-sm text-muted-foreground">Daily Posts</p>
          </div>
        </div>
        <div className="flex items-center gap-2 rounded-lg border p-4">
          <TrendingUp className="h-5 w-5 text-muted-foreground" />
          <div>
            <p className="text-2xl font-bold">89%</p>
            <p className="text-sm text-muted-foreground">Growth</p>
          </div>
        </div>
      </div>
    </div>
  )
}