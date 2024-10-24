"use client"

import { Card } from "@/components/ui/card"
import { MessageSquare } from "lucide-react"

const topics = [
  {
    id: 1,
    title: "Getting Started with AI",
    description: "New to AI? Start here for introductions and basic concepts.",
    posts: 156,
    lastActive: "2h ago",
  },
  {
    id: 2,
    title: "Machine Learning Discussion",
    description: "Share and discuss machine learning techniques and applications.",
    posts: 324,
    lastActive: "5m ago",
  },
  {
    id: 3,
    title: "Deep Learning & Neural Networks",
    description: "Advanced topics in deep learning and neural network architectures.",
    posts: 243,
    lastActive: "1h ago",
  },
]

export function ForumTopics() {
  return (
    <div className="space-y-4">
      {topics.map((topic) => (
        <Card key={topic.id} className="p-6">
          <div className="flex items-start justify-between">
            <div className="space-y-1">
              <h3 className="font-semibold">{topic.title}</h3>
              <p className="text-sm text-muted-foreground">{topic.description}</p>
            </div>
            <div className="flex items-center space-x-4 text-sm text-muted-foreground">
              <div className="flex items-center space-x-1">
                <MessageSquare className="h-4 w-4" />
                <span>{topic.posts} posts</span>
              </div>
              <div>
                <span>Active {topic.lastActive}</span>
              </div>
            </div>
          </div>
        </Card>
      ))}
    </div>
  )
}