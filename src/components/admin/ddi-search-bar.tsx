import { ChevronDown, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Input } from '@/components/ui/input';

interface DDISearchBarProps {
  readonly searchTerm: string;
  readonly statusFilter: 'All' | 'Active' | 'Suspended';
  readonly isSearching: boolean;
  readonly onSearchTermChange: (term: string) => void;
  readonly onStatusFilterChange: (
    status: 'All' | 'Active' | 'Suspended'
  ) => void;
  readonly onSearch: () => void;
}

export function DDISearchBar({
  searchTerm,
  statusFilter,
  isSearching,
  onSearchTermChange,
  onStatusFilterChange,
  onSearch,
}: DDISearchBarProps) {
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
          placeholder="Search company"
          value={searchTerm}
        />
      </div>
      <Button disabled={isSearching} onClick={onSearch}>
        Search
      </Button>
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
