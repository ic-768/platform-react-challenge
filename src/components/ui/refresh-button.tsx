import { ReactNode } from "react";
import { Loader2, RefreshCw } from "lucide-react";

import { Button } from "@/components/ui/button";

interface RefreshButtonArgs {
  refetch: () => void;
  isFetching: boolean;
  content: ReactNode;
}
export default function RefreshButton({
  refetch,
  isFetching,
  content,
}: RefreshButtonArgs) {
  return (
    <div className="text-center">
      <Button onClick={refetch} disabled={isFetching} className="group">
        {isFetching ? (
          <Loader2 className="size-4 animate-spin" />
        ) : (
          <RefreshCw className="size-4 duration-500 group-hover:rotate-180" />
        )}
        {isFetching ? "Loading..." : content}
      </Button>
    </div>
  );
}
