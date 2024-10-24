import { PageHeader } from "@/components/page-header"
import { CourseGrid } from "@/components/courses/course-grid"

export default function CoursesPage() {
  return (
    <div className="container py-8">
      <PageHeader
        title="AI Courses"
        description="Explore our comprehensive collection of AI courses, from beginner to advanced levels."
      />
      <div className="mt-8">
        <CourseGrid />
      </div>
    </div>
  )
}