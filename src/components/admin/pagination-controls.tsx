import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function PaginationControls() {
  return (
    <div className="flex items-center justify-between border-gray-200 border-t p-4">
      <Button className="text-gray-600" size="sm" variant="ghost">
        <ChevronLeft className="mr-1 h-4 w-4" />
        Previous
      </Button>
      <div className="flex items-center gap-1">
        {[1, 2, 3, "...", 8, 9, 10].map((page) => (
          <Button
            className={page === 1 ? "bg-black text-white" : "text-gray-600"}
            key={`page-${page}`}
            size="sm"
            variant={page === 1 ? "default" : "ghost"}
          >
            {page}
          </Button>
        ))}
      </div>
      <Button className="text-gray-600" size="sm" variant="ghost">
        Next
        <ChevronRight className="ml-1 h-4 w-4" />
      </Button>
    </div>
  );
}
