import { redirect } from "next/navigation";

// Редизайн переехал на главную — /v2 ведёт на корень
export default function V2Redirect() {
  redirect("/");
}
