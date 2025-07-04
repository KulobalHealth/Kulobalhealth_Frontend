"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Search, Plus, ChevronDown } from "lucide-react";

interface ProductSearchBarProps {
  readonly searchTerm: string;
  readonly categoryFilter: string;
  readonly statusFilter: string;
  readonly itemsPerPage: number;
  readonly isSearching: boolean;
  readonly onSearchTermChange: (term: string) => void;
  readonly onCategoryFilterChange: (category: string) => void;
  readonly onStatusFilterChange: (status: string) => void;
  readonly onItemsPerPageChange: (count: number) => void;
  readonly onSearch: () => void;
  readonly onAddProduct: () => void;
}

export function ProductSearchBar({
  searchTerm,
  categoryFilter,
  statusFilter,
  itemsPerPage,
  isSearching,
  onSearchTermChange,
  onCategoryFilterChange,
  onStatusFilterChange,
  onItemsPerPageChange,
  onSearch,
  onAddProduct,
}: ProductSearchBarProps) {
  const categories = [
    "All",
    "Pain Relief",
    "Vitamins",
    "Antibiotics",
    "Gastric",
    "Antihistamines",
    "Diabetes",
    "Cardiovascular",
  ];

  const statuses = ["All", "Active", "Inactive", "Out of Stock"];

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Products</h1>
          <p className="text-gray-600">
            View and manage all registered products
          </p>
        </div>
        <Button
          onClick={onAddProduct}
          className="bg-blue-600 hover:bg-blue-700 text-white"
        >
          <Plus className="w-4 h-4 mr-2" />
          Add New Product
        </Button>
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <Input
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => onSearchTermChange(e.target.value)}
            className="pl-10"
          />
        </div>

        <Select value={categoryFilter} onValueChange={onCategoryFilterChange}>
          <SelectTrigger className="w-full sm:w-48">
            <SelectValue placeholder="Category" />
          </SelectTrigger>
          <SelectContent>
            {categories.map((category) => (
              <SelectItem key={category} value={category}>
                {category}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select value={statusFilter} onValueChange={onStatusFilterChange}>
          <SelectTrigger className="w-full sm:w-48">
            <SelectValue placeholder="Status" />
          </SelectTrigger>
          <SelectContent>
            {statuses.map((status) => (
              <SelectItem key={status} value={status}>
                {status}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Button
          onClick={onSearch}
          disabled={isSearching}
          className="bg-blue-600 hover:bg-blue-700 text-white"
        >
          {isSearching ? (
            <div className="w-4 h-4 mr-2 animate-spin rounded-full border-2 border-white border-t-transparent" />
          ) : (
            <Search className="w-4 h-4 mr-2" />
          )}
          Search
        </Button>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="w-full sm:w-auto">
              {itemsPerPage} per page
              <ChevronDown className="w-4 h-4 ml-2" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {[5, 10, 25, 50].map((count) => (
              <DropdownMenuItem
                key={count}
                onClick={() => onItemsPerPageChange(count)}
              >
                {count} per page
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}
