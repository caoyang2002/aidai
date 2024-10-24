import { PageHeader } from "@/components/page-header"
import { DocsSidebar } from "@/components/docs/docs-sidebar"
import { DocsContent } from "@/components/docs/docs-content"

export default function DocsPage() {
  return (
    <div className="container flex gap-6 py-8">
      <aside className="hidden w-64 shrink-0 md:block">
        <DocsSidebar />
      </aside>
      <main className="flex-1">
        <PageHeader
          title="Documentation"
          description="Comprehensive guides and references for AI development."
        />
        <div className="mt-8">
          <DocsContent />
        </div>
      </main>
    </div>
  )
}