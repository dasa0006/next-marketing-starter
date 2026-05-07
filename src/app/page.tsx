import { SITE_CONFIG } from "@/lib/config/site";
import { redirect } from "next/navigation";

// This page only renders when the app is built statically (output: 'export')
export default function RootPage() {
  redirect(SITE_CONFIG.defaultLocale);
}
