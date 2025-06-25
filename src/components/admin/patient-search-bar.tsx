import { Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface PatientSearchBarProps {
  readonly searchTerm: string;
  readonly isSearching: boolean;
  readonly onSearchTermChange: (term: string) => void;
  readonly onSearch: () => void;
}

export function PatientSearchBar({
  searchTerm,
  isSearching,
  onSearchTermChange,
  onSearch,
}: PatientSearchBarProps) {
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
          placeholder="Search patient by name, contact, or pharmacy"
          value={searchTerm}
        />
      </div>
      <Button disabled={isSearching} onClick={onSearch}>
        Search
      </Button>
    </div>
  );
}
