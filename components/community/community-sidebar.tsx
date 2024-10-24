import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Flame, Trophy, Users } from "lucide-react"
import Image from "next/image"

const trending = [
  {
    title: "开始使用 GPT-4",
    views: "2.1k次观看",
  },
  {
    title: "机器学习的最佳实践",
    views: "1.8k次观看",
  },
  {
    title: "人工智能原理讨论",
    views: "1.5k次观看",
  },
]

const topContributors = [
  {
    name: "Alex Johnson",
    contributions: 156,
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100",
  },
  {
    name: "Maria Garcia",
    contributions: 142,
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100",
  },
  {
    name: "Tom Wilson",
    contributions: 128,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100",
  },
]

export function CommunitySidebar() {
  return (
    <div className="space-y-6">
      <Card className="p-6">
        <div className="flex items-center gap-2">
          <Flame className="h-5 w-5 text-orange-500" />
          <h3 className="font-semibold">热门话题</h3>
        </div>
        <div className="mt-4 space-y-4">
          {trending.map((topic, index) => (
            <div key={index} className="space-y-1">
              <p className="font-medium">{topic.title}</p>
              <p className="text-sm text-muted-foreground">{topic.views}</p>
            </div>
          ))}
        </div>
      </Card>

      <Card className="p-6">
        <div className="flex items-center gap-2">
          <Trophy className="h-5 w-5 text-yellow-500" />
          <h3 className="font-semibold">Top 贡献者</h3>
        </div>
        <div className="mt-4 space-y-4">
          {topContributors.map((contributor, index) => (
            <div key={index} className="flex items-center gap-3">
              <Image
                src={contributor.avatar}
                alt={contributor.name}
                width={40}
                height={40}
                className="h-8 w-8 rounded-full object-cover"
              />
              <div>
                <p className="font-medium">{contributor.name}</p>
                <p className="text-sm text-muted-foreground">
                  {contributor.contributions} 贡献
                </p>
              </div>
            </div>
          ))}
        </div>
        <Button className="mt-4 w-full" variant="outline">
          <Users className="mr-2 h-4 w-4" />
        查看所有成员 
        </Button>
      </Card>
    </div>
  )
}