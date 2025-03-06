import { Loader2, RefreshCw } from "lucide-react";

import { Button } from "@/components/ui/button";

interface RefreshButtonArgs {
  refetch: () => void;
  isFetching: boolean;
}
export default function RefreshButton({
  refetch,
  isFetching,
}: RefreshButtonArgs) {
  return (
    <div className="text-center">
      <Button onClick={refetch} disabled={isFetching} className="group">
        {isFetching ? (
          <Loader2 className="size-4 animate-spin" />
        ) : (
          <RefreshCw className="size-4 transition-transform duration-500 group-hover:rotate-180" />
        )}

        {isFetching ? "Loading..." : "New Cats"}
      </Button>
    </div>
  );
}
