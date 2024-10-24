import { Button } from "@/components/ui/button"
import { Users, TrendingUp, MessageSquare } from "lucide-react"

export function CommunityHeader() {
  return (
    <div className="space-y-4 ">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">社区</h1>
          <p className="text-muted-foreground">
          与其他AI爱好者交流并分享您的旅程
          </p>
        </div>
        <Button>创建文章</Button>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <div className="flex items-center gap-2 rounded-lg border p-4">
          <Users className="h-5 w-5 text-muted-foreground" />
          <div>
            <p className="text-2xl font-bold">2.3k</p>
            <p className="text-sm text-muted-foreground">成员</p>
          </div>
        </div>
        <div className="flex items-center gap-2 rounded-lg border p-4">
          <MessageSquare className="h-5 w-5 text-muted-foreground" />
          <div>
            <p className="text-2xl font-bold">456</p>
            <p className="text-sm text-muted-foreground">所有分享</p>
          </div>
        </div>
        <div className="flex items-center gap-2 rounded-lg border p-4">
          <TrendingUp className="h-5 w-5 text-muted-foreground" />
          <div>
            <p className="text-2xl font-bold">89%</p>
            <p className="text-sm text-muted-foreground">增长</p>
          </div>
        </div>
      </div>
    </div>
  )
}