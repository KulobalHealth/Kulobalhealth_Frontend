'use client';

import { Plus, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

interface SupplierSearchBarProps {
  readonly searchTerm: string;
  readonly statusFilter: string;
  readonly itemsPerPage: number;
  readonly isSearching: boolean;
  readonly onSearchTermChange: (term: string) => void;
  readonly onStatusFilterChange: (status: string) => void;
  readonly onItemsPerPageChange: (count: number) => void;
  readonly onSearch: () => void;
  readonly onAddSupplier: () => void;
}

export function SupplierSearchBar({
  searchTerm,
  statusFilter,
  itemsPerPage,
  isSearching,
  onSearchTermChange,
  onStatusFilterChange,
  onItemsPerPageChange,
  onSearch,
  onAddSupplier,
}: SupplierSearchBarProps) {
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      onSearch();
    }
  };

  return (
    <div className="space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="mb-1 font-bold text-2xl">Suppliers</h1>
          <p className="text-gray-600">View and manage all suppliers</p>
        </div>
        <Button
          className="bg-primary-500 text-white hover:bg-primary-600"
          onClick={onAddSupplier}
        >
          <Plus className="mr-2 h-4 w-4" />
          Add New Supplier
        </Button>
      </div>

      {/* Search and Filters */}
      <div className="flex flex-col gap-4 sm:flex-row">
        {/* Search Input */}
        <div className="relative flex-1">
          <Search className="-translate-y-1/2 absolute top-1/2 left-3 h-4 w-4 transform text-gray-400" />
          <Input
            className="pl-10"
            disabled={isSearching}
            onChange={(e) => onSearchTermChange(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Search by company name, email, or agent..."
            value={searchTerm}
          />
        </div>

        {/* Status Filter */}
        <Select onValueChange={onStatusFilterChange} value={statusFilter}>
          <SelectTrigger className="w-full sm:w-[180px]">
            <SelectValue placeholder="Filter by status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="All">All Statuses</SelectItem>
            <SelectItem value="Active">Active</SelectItem>
            <SelectItem value="Inactive">Inactive</SelectItem>
            <SelectItem value="Suspended">Suspended</SelectItem>
          </SelectContent>
        </Select>

        {/* Items Per Page */}
        <Select
          onValueChange={(value) => onItemsPerPageChange(Number(value))}
          value={itemsPerPage.toString()}
        >
          <SelectTrigger className="w-full sm:w-[130px]">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="5">5 per page</SelectItem>
            <SelectItem value="10">10 per page</SelectItem>
            <SelectItem value="25">25 per page</SelectItem>
            <SelectItem value="50">50 per page</SelectItem>
          </SelectContent>
        </Select>

        {/* Search Button */}
        <Button
          className="w-full bg-primary-500 text-white hover:bg-primary-600 sm:w-auto"
          disabled={isSearching}
          onClick={onSearch}
        >
          {isSearching ? 'Searching...' : 'Search'}
        </Button>
      </div>
    </div>
  );
}
