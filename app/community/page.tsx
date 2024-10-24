import { CommunityHeader } from "@/components/community/community-header"
import { CommunityFeed } from "@/components/community/community-feed"
import { CommunitySidebar } from "@/components/community/community-sidebar"

export default function CommunityPage() {
  return (
    <div className="container py-8">
      <CommunityHeader />
      <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_300px]">
        <CommunityFeed />
        <CommunitySidebar />
      </div>
    </div>
  )
}