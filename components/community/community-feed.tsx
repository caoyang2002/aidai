"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ThumbsUp, MessageSquare, Share2 } from "lucide-react"

const posts = [
  {
    id: 1,
    author: "Sarah Chen",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100",
    title: "How I Built My First Neural Network",
    content: "Today I want to share my experience building my first neural network using PyTorch...",
    likes: 234,
    comments: 45,
    timeAgo: "2 hours ago",
  },
  {
    id: 2,
    author: "David Kumar",
    avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=100",
    title: "Understanding Transformer Architecture",
    content: "Let's dive deep into the transformer architecture that revolutionized NLP...",
    likes: 189,
    comments: 32,
    timeAgo: "4 hours ago",
  },
]

export function CommunityFeed() {
  return (
    <div className="space-y-4">
      {posts.map((post) => (
        <Card key={post.id} className="p-6">
          <div className="flex gap-4">
            <img
              src={post.avatar}
              alt={post.author}
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