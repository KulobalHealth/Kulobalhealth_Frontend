import { ChevronDown, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";

interface SearchAndFiltersProps {
  readonly searchTerm: string;
  readonly onSearchChange: (value: string) => void;
  readonly onSearch: () => void;
}

export function SearchAndFilters({
  searchTerm,
  onSearchChange,
  onSearch,
}: SearchAndFiltersProps) {
  return (
    <div className="mb-6 flex gap-2">
      <div className="relative max-w-md flex-1">
        <Search className="-translate-y-1/2 absolute top-1/2 left-3 h-4 w-4 transform text-gray-400" />
        <Input
          className="pl-10"
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Search product"
          value={searchTerm}
        />
      </div>
      <Button
        className="bg-primary-500 text-white hover:bg-primary-600"
        onClick={onSearch}
      >
        Search
      </Button>
      <div className="ml-auto">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button className="bg-white" variant="outline">
              5 per page
              <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>5 per page</DropdownMenuItem>
            <DropdownMenuItem>10 per page</DropdownMenuItem>
            <DropdownMenuItem>25 per page</DropdownMenuItem>
            <DropdownMenuItem>50 per page</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}
