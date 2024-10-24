"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BookOpen, Clock, Award } from "lucide-react"

const courses = [
  {
    id: 1,
    title: "人工智能入门",
    description: "学习人工智能和机器学习的基础。",
    duration: "6周",
    level: "初学者",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&auto=format&fit=crop&q=60",
  },
  {
    id: 2,
    title: "机器学习基础",
    description: "理解机器学习的核心概念和算法。",
    duration: "8周",
    level: "中级",
    image: "https://images.unsplash.com/photo-1676277791608-ac54525aa94d?w=800&auto=format&fit=crop&q=60",
  },
  {
    id: 3,
    title: "深度学习基础",
    description: "探索神经网络和深度学习架构。",
    duration: "10周",
    level: "高级",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&auto=format&fit=crop&q=60",
  },
]

export function CourseGrid() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {courses.map((course) => (
        <Card key={course.id} className="overflow-hidden">
          <div
            className="aspect-video w-full bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${course.image})` }}
          />
          <div className="p-6">
            <h3 className="mb-2 text-xl font-semibold">{course.title}</h3>
            <p className="mb-4 text-sm text-muted-foreground">{course.description}</p>
            <div className="mb-4 flex items-center space-x-4 text-sm text-muted-foreground">
              <div className="flex items-center space-x-1">
                <Clock className="h-4 w-4" />
                <span>{course.duration}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Award className="h-4 w-4" />
                <span>{course.level}</span>
              </div>
            </div>
            <Button className="w-full">Enroll Now</Button>
          </div>
        </Card>
      ))}
    </div>
  )
}