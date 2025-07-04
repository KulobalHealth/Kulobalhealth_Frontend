import { Search, Filter } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ViewType } from "@/store/analytics";

interface AnalyticsSearchProps {
  readonly searchTerm: string;
  readonly onSearchChange: (value: string) => void;
  readonly currentView: ViewType;
  readonly selectedStatus?: string;
  readonly onStatusChange: (status: string) => void;
  readonly selectedLocation?: string;
  readonly onLocationChange: (location: string) => void;
  readonly isLoading?: boolean;
}

export function AnalyticsSearch({
  searchTerm,
  onSearchChange,
  currentView,
  selectedStatus,
  onStatusChange,
  selectedLocation,
  onLocationChange,
  isLoading = false,
}: AnalyticsSearchProps) {
  const getSearchPlaceholder = () => {
    switch (currentView) {
      case "patients":
        return "Search patients by name, contact, or pharmacy...";
      case "pharmacies":
        return "Search pharmacies by name, email, or type...";
      case "suppliers":
        return "Search suppliers by name, email, or product...";
      default:
        return "Search...";
    }
  };

  const showStatusFilter = currentView === "pharmacies";
  const showLocationFilter =
    currentView === "pharmacies" || currentView === "suppliers";

  return (
    <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
      {/* Search Input */}
      <div className="relative flex-1 max-w-md">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
        <Input
          placeholder={getSearchPlaceholder()}
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          disabled={isLoading}
          className="pl-10"
        />
      </div>

      {/* Filters */}
      <div className="flex items-center gap-2">
        {showStatusFilter && (
          <Select
            value={selectedStatus}
            onValueChange={onStatusChange}
            disabled={isLoading}
          >
            <SelectTrigger className="w-32">
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Status</SelectItem>
              <SelectItem value="active">Active</SelectItem>
              <SelectItem value="rejected">Rejected</SelectItem>
              <SelectItem value="pending">Pending</SelectItem>
            </SelectContent>
          </Select>
        )}

        {showLocationFilter && (
          <Select
            value={selectedLocation}
            onValueChange={onLocationChange}
            disabled={isLoading}
          >
            <SelectTrigger className="w-32">
              <SelectValue placeholder="Location" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Locations</SelectItem>
              <SelectItem value="GD">GD</SelectItem>
              <SelectItem value="AS">AS</SelectItem>
              <SelectItem value="BA">BA</SelectItem>
            </SelectContent>
          </Select>
        )}

        <Button variant="outline" size="sm" disabled={isLoading}>
          <Filter className="h-4 w-4 mr-2" />
          Filters
        </Button>
      </div>
    </div>
  );
}
