"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"

const sections = [
  {
    title: "快速开始",
    items: [
      { title: "介绍", href: "/docs/introduction" },
      { title: "安装", href: "/docs/installation" },
      { title: "快速入门", href: "/docs/quick-start" },
    ],
  },
  {
    title: "核心概念",
    items: [
      { title: "机器学习", href: "/docs/machine-learning" },
      { title: "神经网络", href: "/docs/neural-networks" },
      { title: "深度学习", href: "/docs/deep-learning" },
    ],
  },
]

export function DocsSidebar() {
  return (
    <div className="space-y-6 mx-auto max-w-6xl px-8 ">
      {sections.map((section) => (
        <div key={section.title}>
          <h4 className="mb-2 text-sm font-semibold">{section.title}</h4>
          <div className="space-y-1">
            {section.items.map((item) => (
              <Button
                key={item.href}
                variant="ghost"
                className="w-full justify-start"
                asChild
              >
                <Link href={item.href}>{item.title}</Link>
              </Button>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}