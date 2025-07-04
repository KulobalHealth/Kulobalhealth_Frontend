import { useState, useCallback, useMemo } from "react";
import {
  ViewType,
  mockPatients,
  mockPharmacies,
  mockSuppliers,
  patientColumns,
  pharmacyColumns,
  supplierColumns,
} from "@/store/analytics";
import {
  SearchFilters,
  getFilteredData,
  calculateAnalyticsStats,
  paginateData,
  getTotalPages,
} from "@/lib/analytics-utils";

// Types for component compatibility
type TableColumn = {
  key: string;
  label: string;
  width?: string;
};

type TableRow = {
  id: string;
  [key: string]: unknown;
};

export function useAnalytics() {
  const [currentView, setCurrentView] = useState<ViewType>("patients");
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedStatus, setSelectedStatus] = useState<string>("all");
  const [selectedLocation, setSelectedLocation] = useState<string>("all");
  const [isLoading, setIsLoading] = useState(false);
  const [showExportModal, setShowExportModal] = useState(false);

  const pageSize = 10;

  // Reset page when view changes
  const handleViewChange = useCallback((view: ViewType) => {
    setCurrentView(view);
    setCurrentPage(1);
    setSearchTerm("");
    setSelectedStatus("all");
    setSelectedLocation("all");
  }, []);

  // Get current data based on view
  const getCurrentData = useCallback(() => {
    switch (currentView) {
      case "patients":
        return {
          data: mockPatients,
          columns: patientColumns,
          title: "Export Patients Report",
        };
      case "pharmacies":
        return {
          data: mockPharmacies,
          columns: pharmacyColumns,
          title: "Export Pharmacies Report",
        };
      case "suppliers":
        return {
          data: mockSuppliers,
          columns: supplierColumns,
          title: "Export Suppliers Report",
        };
    }
  }, [currentView]);

  // Build search filters
  const searchFilters: SearchFilters = useMemo(
    () => ({
      searchTerm,
      status: selectedStatus !== "all" ? selectedStatus : undefined,
      location: selectedLocation !== "all" ? selectedLocation : undefined,
    }),
    [searchTerm, selectedStatus, selectedLocation]
  );

  // Get filtered and paginated data
  const { filteredData, paginatedData, totalPages } = useMemo(() => {
    const { data } = getCurrentData();
    const filtered = getFilteredData(currentView, data, searchFilters);
    const paginated = paginateData(filtered, currentPage, pageSize);
    const pages = getTotalPages(filtered.length, pageSize);

    return {
      filteredData: filtered,
      paginatedData: paginated,
      totalPages: pages,
    };
  }, [getCurrentData, currentView, searchFilters, currentPage, pageSize]);

  // Calculate stats
  const stats = useMemo(
    () => calculateAnalyticsStats(mockPatients, mockPharmacies, mockSuppliers),
    []
  );

  // Handlers
  const handleSearchChange = useCallback((value: string) => {
    setSearchTerm(value);
    setCurrentPage(1); // Reset to first page when searching
  }, []);

  const handleStatusChange = useCallback((status: string) => {
    setSelectedStatus(status);
    setCurrentPage(1);
  }, []);

  const handleLocationChange = useCallback((location: string) => {
    setSelectedLocation(location);
    setCurrentPage(1);
  }, []);

  const handlePageChange = useCallback((page: number) => {
    setCurrentPage(page);
  }, []);

  const handleExport = useCallback(() => {
    setShowExportModal(true);
  }, []);

  const handleDateSelect = useCallback(() => {
    // Open date picker modal or trigger date selection
    console.log("Opening date picker for analytics filtering");
    // This would typically open a date range picker component
  }, []);

  const handleRowSelect = useCallback(
    (id: string) => {
      console.log(`Selected ${currentView} with ID:`, id);
      // This would typically open a detail modal or navigate to detail page
    },
    [currentView]
  );

  const handleStatusUpdate = useCallback(
    (id: string, status: string) => {
      console.log(`Updating ${currentView} ${id} to status:`, status);
      // This would typically make an API call to update the status
      // For now, we just log it
    },
    [currentView]
  );

  // Simulate loading for data refresh
  const refreshData = useCallback(async () => {
    setIsLoading(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsLoading(false);
  }, []);
  return {
    // State
    currentView,
    currentPage,
    searchTerm,
    selectedStatus,
    selectedLocation,
    isLoading,
    showExportModal,

    // Data
    ...getCurrentData(),
    filteredData,
    paginatedData: paginatedData as unknown as TableRow[], // Cast for component compatibility
    totalPages,
    stats,
    columns: getCurrentData().columns as unknown as TableColumn[], // Cast for component compatibility

    // Handlers
    handleViewChange,
    handleSearchChange,
    handleStatusChange,
    handleLocationChange,
    handlePageChange,
    handleExport,
    handleDateSelect,
    handleRowSelect,
    handleStatusUpdate,
    refreshData,
    setShowExportModal,
  };
}
