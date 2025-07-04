import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface TablePaginationProps {
  readonly currentPage?: number;
  readonly totalPages?: number;
  readonly onPageChange?: (page: number) => void;
}

function generateVisiblePages(currentPage: number, totalPages: number) {
  const pages: (number | string)[] = [];
  const maxVisiblePages = 7;

  if (totalPages <= maxVisiblePages) {
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }

  // Always show first page
  pages.push(1);

  // Add ellipsis if needed
  if (currentPage > 3) {
    pages.push("...");
  }

  // Add pages around current page
  const start = Math.max(2, currentPage - 1);
  const end = Math.min(totalPages - 1, currentPage + 1);

  for (let i = start; i <= end; i++) {
    if (i !== 1 && i !== totalPages) {
      pages.push(i);
    }
  }

  // Add ellipsis if needed
  if (currentPage < totalPages - 2) {
    pages.push("...");
  }

  // Always show last page
  if (totalPages > 1) {
    pages.push(totalPages);
  }

  return pages;
}

export function TablePagination({
  currentPage = 1,
  totalPages = 1,
  onPageChange,
}: TablePaginationProps) {
  const pages = generateVisiblePages(currentPage, totalPages);

  const handlePageClick = (page: string | number) => {
    if (typeof page === "number" && onPageChange) {
      onPageChange(page);
    }
  };

  if (totalPages <= 1) {
    return null;
  }

  return (
    <div className="m-3 flex items-center justify-between pb-5">
      <Button
        className="bg-secondary text-gray-600"
        disabled={currentPage === 1}
        onClick={() => onPageChange?.(Math.max(currentPage - 1, 1))}
        size="sm"
        variant="ghost"
      >
        <ChevronLeft className="mr-1 h-4 w-4" />
        Previous
      </Button>
      <div className="flex items-center gap-1">
        {pages.map((page, index) => (
          <Button
            className={
              page === currentPage
                ? "h-8 w-8 rounded-full bg-black p-0 text-white"
                : "h-8 w-8 rounded-full bg-secondary p-0 text-gray-600"
            }
            disabled={page === "..."}
            key={`page-${page}-${index}`}
            onClick={() => handlePageClick(page)}
            size="sm"
            variant={page === currentPage ? "default" : "ghost"}
          >
            {page}
          </Button>
        ))}
      </div>
      <Button
        className="bg-secondary text-gray-600"
        disabled={currentPage === totalPages}
        onClick={() => onPageChange?.(Math.min(currentPage + 1, totalPages))}
        size="sm"
        variant="ghost"
      >
        Next
        <ChevronRight className="ml-1 h-4 w-4" />
      </Button>
    </div>
  );
}
