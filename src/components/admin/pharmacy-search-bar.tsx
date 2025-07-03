import { ChevronDown, Loader2, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Input } from '@/components/ui/input';
import type { StatusFilter } from '@/store/pharmacies';

interface PharmacySearchBarProps {
  readonly searchTerm: string;
  readonly statusFilter: StatusFilter;
  readonly isSearching: boolean;
  readonly onSearchTermChange: (term: string) => void;
  readonly onStatusFilterChange: (status: StatusFilter) => void;
  readonly onSearch: () => void;
}

export function PharmacySearchBar({
  searchTerm,
  statusFilter,
  isSearching,
  onSearchTermChange,
  onStatusFilterChange,
  onSearch,
}: PharmacySearchBarProps) {
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
          placeholder="Search pharmacy by name, location, or pharmacist"
          value={searchTerm}
        />
      </div>
      <Button disabled={isSearching} onClick={onSearch}>
        {isSearching ? (
          <div className="flex items-center gap-2">
            <Loader2 className="h-4 w-4 animate-spin" />
            <span>Searching...</span>
          </div>
        ) : (
          'Search'
        )}
      </Button>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button className="bg-white" variant="outline">
            {statusFilter === 'All' ? 'Select Status' : statusFilter}
            <ChevronDown className="ml-2 h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem onClick={() => onStatusFilterChange('All')}>
            All Status
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => onStatusFilterChange('Active')}>
            Active
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => onStatusFilterChange('Suspended')}>
            Suspended
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
