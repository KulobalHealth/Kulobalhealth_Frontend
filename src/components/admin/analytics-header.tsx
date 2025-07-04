import { Calendar, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ViewType } from "@/store/analytics";

interface AnalyticsHeaderProps {
  readonly currentView: ViewType;
  readonly onViewChange: (view: ViewType) => void;
  readonly onExport: () => void;
  readonly onDateSelect: () => void;
  readonly isLoading?: boolean;
}

export function AnalyticsHeader({
  currentView,
  onViewChange,
  onExport,
  onDateSelect,
  isLoading = false,
}: AnalyticsHeaderProps) {
  return (
    <>
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-semibold text-foreground">
            Analytics & Report
          </h1>
          <p className="text-sm text-muted-foreground">
            View and manage analytics data across different entities
          </p>
        </div>
        <Button
          onClick={onExport}
          disabled={isLoading}
          className="bg-primary hover:bg-primary/90"
        >
          <Download className="mr-2 h-4 w-4" />
          Export Report
        </Button>
      </div>

      {/* Controls */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-4">
          <Select
            value={currentView}
            onValueChange={onViewChange}
            disabled={isLoading}
          >
            <SelectTrigger className="w-40">
              <SelectValue placeholder="Select view" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="patients">Patients</SelectItem>
              <SelectItem value="pharmacies">Pharmacies</SelectItem>
              <SelectItem value="suppliers">Suppliers</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="flex items-center space-x-4">
          <span className="text-sm text-muted-foreground">
            Filter by date range
          </span>
          <Button
            variant="outline"
            size="sm"
            onClick={onDateSelect}
            disabled={isLoading}
            className="flex items-center space-x-2"
          >
            <Calendar className="h-4 w-4" />
            <span>Select Dates</span>
          </Button>
        </div>
      </div>
    </>
  );
}
