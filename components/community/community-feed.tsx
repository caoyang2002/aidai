"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ThumbsUp, MessageSquare, Share2 } from "lucide-react"
import Image from "next/image"

const posts = [
  {
    id: 1,
    author: "陈莎拉",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100",
    title: "我如何构建了我的第一个神经网络",
    content: "今天我想分享我使用PyTorch构建第一个神经网络的经验...",
    likes: 234,
    comments: 45,
    timeAgo: "2小时前",
  },
  {
    id: 2,
    author: "大卫·库马尔",
    avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=100",
    title: "理解Transformer架构",
    content: "让我们深入探讨改变了自然语言处理的Transformer架构...",
    likes: 189,
    comments: 32,
    timeAgo: "4小时前",
  },
]

export function CommunityFeed() {
  return (
    <div className="space-y-4">
      {posts.map((post) => (
        <Card key={post.id} className="p-6">
          <div className="flex gap-4">
            <Image
              src={post.avatar}
              alt={post.author}
              width={40}
              height={40}
              className="h-10 w-10 rounded-full object-cover"
            />
            <div className="flex-1 space-y-2">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold">{post.author}</p>
                  <p className="text-sm text-muted-foreground">{post.timeAgo}</p>
                </div>
              </div>
              <h3 className="text-xl font-semibold">{post.title}</h3>
              <p className="text-muted-foreground">{post.content}</p>
              <div className="flex gap-4">
                <Button variant="ghost" size="sm">
                  <ThumbsUp className="mr-2 h-4 w-4" />
                  {post.likes}
                </Button>
                <Button variant="ghost" size="sm">
                  <MessageSquare className="mr-2 h-4 w-4" />
                  {post.comments}
                </Button>
                <Button variant="ghost" size="sm">
                  <Share2 className="mr-2 h-4 w-4" />
                  Share
                </Button>
              </div>
            </div>
          </div>
        </Card>
      ))}
    </div>
  )
}