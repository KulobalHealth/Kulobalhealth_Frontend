import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface TablePaginationProps {
  currentPage?: number;
  totalPages?: number;
  onPageChange?: (page: number) => void;
}

export function TablePagination({
  currentPage = 1,
  totalPages = 10,
  onPageChange,
}: TablePaginationProps) {
  const pages = [1, 2, 3, '...', 8, 9, 10];

  const handlePageClick = (page: string | number) => {
    if (typeof page === 'number' && onPageChange) {
      onPageChange(page);
    }
  };

  return (
    <div className="m-3 flex items-center justify-between pb-5 ">
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
        {pages.map((page) => (
          <Button
            className={
              page === currentPage
                ? 'h-8 w-8 rounded-full bg-black p-0 text-white'
                : 'h-8 w-8 rounded-full bg-secondary p-0 text-gray-600'
            }
            disabled={page === '...'}
            key={`page-${page}`}
            onClick={() => handlePageClick(page)}
            size="sm"
            variant={page === currentPage ? 'default' : 'ghost'}
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
