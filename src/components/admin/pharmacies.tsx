'use client';

import { usePharmaciesStore } from '@/store/pharmacies';
import { PharmaciesTable } from './pharmacies-table';
import { PharmacyCenterStates } from './pharmacy-center-states';
import PharmacyDetail from './pharmacy-detail';
import { PharmacySearchBar } from './pharmacy-search-bar';

export default function PharmaciesManagement() {
  const {
    searchTerm,
    statusFilter,
    isSearching,
    currentView,
    selectedPharmacyId,
    currentPage,
    totalPages,
    filteredPharmacies,
    setSearchTerm,
    setStatusFilter,
    searchPharmacies,
    setCurrentView,
    setSelectedPharmacyId,
    setCurrentPage,
    getPaginatedPharmacies,
    updatePharmacyStatus,
    clearSearch,
  } = usePharmaciesStore();

  const handleSearch = () => {
    searchPharmacies(searchTerm);
  };

  const handlePharmacySelect = (pharmacyId: string) => {
    setSelectedPharmacyId(pharmacyId);
    setCurrentView('detail');
  };

  const handleBackToList = () => {
    setCurrentView('list');
    setSelectedPharmacyId(null);
  };

  const handleTryAgain = () => {
    clearSearch();
  };

  if (currentView === 'detail' && selectedPharmacyId) {
    return (
      <PharmacyDetail
        onBack={handleBackToList}
        pharmacyId={selectedPharmacyId}
      />
    );
  }

  const paginatedPharmacies = getPaginatedPharmacies();
  const hasNoResults =
    !isSearching &&
    filteredPharmacies.length === 0 &&
    (searchTerm.trim() !== '' || statusFilter !== 'All');

  return (
    <div className="flex min-h-screen">
      <div className="flex-1 p-6">
        <div className="mb-6">
          <h1 className="mb-1 font-bold text-2xl">Pharmacies Management</h1>
          <p className="text-gray-600">View and manage all pharmacies</p>
        </div>

        <PharmacySearchBar
          isSearching={isSearching}
          onSearch={handleSearch}
          onSearchTermChange={setSearchTerm}
          onStatusFilterChange={setStatusFilter}
          searchTerm={searchTerm}
          statusFilter={statusFilter}
        />

        <PharmacyCenterStates
          hasNoResults={hasNoResults}
          isSearching={isSearching}
          onTryAgain={handleTryAgain}
        />

        {!(isSearching || hasNoResults) && (
          <PharmaciesTable
            currentPage={currentPage}
            onPageChange={setCurrentPage}
            onPharmacySelect={handlePharmacySelect}
            onStatusUpdate={updatePharmacyStatus}
            pharmacies={paginatedPharmacies}
            totalPages={totalPages}
          />
        )}
      </div>
    </div>
  );
}
