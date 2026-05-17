import { LoaderCircle } from "lucide-react";

export default function Loading() {
  return (
    <div className="flex min-h-[50vh] items-center justify-center">
      <LoaderCircle className="size-8 animate-spin text-text-muted" />
      <span className="sr-only">Loading</span>
    </div>
  );
}
