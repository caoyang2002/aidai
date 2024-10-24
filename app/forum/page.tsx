import { Card } from "@/components/ui/card"
import { PageHeader } from "@/components/page-header"
import { ForumTopics } from "@/components/forum/forum-topics"

export default function ForumPage() {
  return (
    <div className="container py-8">
      <PageHeader
        title="Community Forum"
        description="Join discussions, ask questions, and share your knowledge with fellow AI enthusiasts."
      />
      <div className="mt-8">
        <ForumTopics />
      </div>
    </div>
  )
}