import { redirect } from "next/navigation"

export default function ApiDevelopmentPage() {
  // This will redirect to the 404 page
  redirect("/not-found")
}
