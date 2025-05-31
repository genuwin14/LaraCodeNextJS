import { redirect } from "next/navigation"

export default function WebDevelopmentPage() {
  // This will redirect to the 404 page
  redirect("/not-found")
}
