"use client";

import { AnalyticsHeader } from "@/components/admin/analytics-header";
import { AnalyticsSearch } from "@/components/admin/analytics-search";
import { AnalyticsStats } from "@/components/admin/analytics-stats";
import { AnalyticsTable } from "@/components/admin/analytics-table";
import { AnalyticsLoading } from "@/components/admin/analytics-loading";
import { ExportModal } from "@/components/admin/export-modal";
import { useAnalytics } from "@/hooks/use-analytics";

export default function AnalyticsPage() {
  const {
    // State
    currentView,
    currentPage,
    searchTerm,
    selectedStatus,
    selectedLocation,
    isLoading,
    showExportModal,

    // Data
    columns,
    title,
    paginatedData,
    totalPages,
    stats,

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
    setShowExportModal,
  } = useAnalytics();

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background">
        <div className="p-6">
          <AnalyticsLoading />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="p-6">
        <AnalyticsHeader
          currentView={currentView}
          onViewChange={handleViewChange}
          onExport={handleExport}
          onDateSelect={handleDateSelect}
          isLoading={isLoading}
        />

        <AnalyticsStats
          patients={stats.patients}
          pharmacies={stats.pharmacies}
          suppliers={stats.suppliers}
          pendingOrders={stats.pendingOrders}
          currentView={currentView}
          isLoading={isLoading}
        />

        <AnalyticsSearch
          searchTerm={searchTerm}
          onSearchChange={handleSearchChange}
          currentView={currentView}
          selectedStatus={selectedStatus}
          onStatusChange={handleStatusChange}
          selectedLocation={selectedLocation}
          onLocationChange={handleLocationChange}
          isLoading={isLoading}
        />

        <AnalyticsTable
          columns={columns}
          data={paginatedData}
          currentPage={currentPage}
          totalPages={totalPages}
          currentView={currentView}
          onPageChange={handlePageChange}
          onRowSelect={handleRowSelect}
          onStatusUpdate={handleStatusUpdate}
        />

        <ExportModal
          open={showExportModal}
          onOpenChange={setShowExportModal}
          title={title}
        />
      </div>
    </div>
  );
}
