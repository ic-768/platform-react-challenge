import { Loader2 } from "lucide-react";

export default function Loading() {
  return (
    <div className="flex justify-center items-center h-64">
      <Loader2 className="size-12 animate-spin text-primary" />
    </div>
  );
}
