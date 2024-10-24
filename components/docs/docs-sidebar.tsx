"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"

const sections = [
  {
    title: "Getting Started",
    items: [
      { title: "Introduction", href: "/docs/introduction" },
      { title: "Installation", href: "/docs/installation" },
      { title: "Quick Start", href: "/docs/quick-start" },
    ],
  },
  {
    title: "Core Concepts",
    items: [
      { title: "Machine Learning", href: "/docs/machine-learning" },
      { title: "Neural Networks", href: "/docs/neural-networks" },
      { title: "Deep Learning", href: "/docs/deep-learning" },
    ],
  },
]

export function DocsSidebar() {
  return (
    <div className="space-y-6">
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