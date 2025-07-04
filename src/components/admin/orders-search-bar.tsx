import { ChevronDown, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Input } from '@/components/ui/input';

interface OrdersSearchBarProps {
  readonly searchTerm: string;
  readonly statusFilter: string;
  readonly dateFilter: string;
  readonly itemsPerPage: number;
  readonly isSearching: boolean;
  readonly onSearchTermChange: (term: string) => void;
  readonly onStatusFilterChange: (
    status:
      | 'All'
      | 'Delivered'
      | 'New Order'
      | 'In Transit'
      | 'Confirmed'
      | 'Cancelled'
  ) => void;
  readonly onDateFilterChange: (
    filter: 'All' | 'Today' | 'This Week' | 'This Month' | 'Custom Range'
  ) => void;
  readonly onItemsPerPageChange: (count: number) => void;
  readonly onSearch: () => void;
}

export function OrdersSearchBar({
  searchTerm,
  statusFilter,
  dateFilter,
  itemsPerPage,
  isSearching,
  onSearchTermChange,
  onStatusFilterChange,
  onDateFilterChange,
  onItemsPerPageChange,
  onSearch,
}: OrdersSearchBarProps) {
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      onSearch();
    }
  };

  return (
    <div className="mb-6 flex gap-2">
      <div className="relative max-w-md flex-1">
        <Search className="-translate-y-1/2 absolute top-1/2 left-3 h-4 w-4 transform text-gray-400" />
        <Input
          className="pl-10"
          disabled={isSearching}
          onChange={(e) => onSearchTermChange(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Search order"
          value={searchTerm}
        />
      </div>
      <Button disabled={isSearching} onClick={onSearch}>
        Search
      </Button>

      {/* Status Filter */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button className="bg-white" disabled={isSearching} variant="outline">
            {statusFilter === 'All' ? 'Select Status' : statusFilter}
            <ChevronDown className="ml-2 h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem onClick={() => onStatusFilterChange('All')}>
            All Status
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => onStatusFilterChange('Delivered')}>
            Delivered
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => onStatusFilterChange('In Transit')}>
            In Transit
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => onStatusFilterChange('Confirmed')}>
            Confirmed
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => onStatusFilterChange('New Order')}>
            New Order
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => onStatusFilterChange('Cancelled')}>
            Cancelled
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      {/* Date Filter */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button className="bg-white" disabled={isSearching} variant="outline">
            {dateFilter === 'All' ? 'Select Dates' : dateFilter}
            <ChevronDown className="ml-2 h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem onClick={() => onDateFilterChange('All')}>
            All Dates
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => onDateFilterChange('Today')}>
            Today
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => onDateFilterChange('This Week')}>
            This Week
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => onDateFilterChange('This Month')}>
            This Month
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => onDateFilterChange('Custom Range')}>
            Custom Range
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      {/* Items Per Page Filter */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button className="bg-white" disabled={isSearching} variant="outline">
            {itemsPerPage} per page
            <ChevronDown className="ml-2 h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem onClick={() => onItemsPerPageChange(5)}>
            5 per page
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => onItemsPerPageChange(10)}>
            10 per page
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => onItemsPerPageChange(25)}>
            25 per page
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => onItemsPerPageChange(50)}>
            50 per page
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
