'use client';

import { usePatientsStore } from '@/store/patients';
import { PatientCenterStates } from './patient-center-states';
import PatientDetailPage from './patient-detail';
import { PatientSearchBar } from './patient-search-bar';
import { PatientsTable } from './patients-table';

export default function PatientsManagement() {
  const {
    searchTerm,
    isSearching,
    currentView,
    selectedPatientId,
    currentPage,
    totalPages,
    setSearchTerm,
    searchPatients,
    clearSearch,
    setCurrentView,
    setSelectedPatientId,
    setCurrentPage,
    getPaginatedPatients,
  } = usePatientsStore();

  const handleSearch = () => {
    searchPatients(searchTerm);
  };

  const handleTryAgain = () => {
    clearSearch();
  };

  const handlePatientSelect = (patientId: string) => {
    setSelectedPatientId(patientId);
    setCurrentView('detail');
  };

  const handleBackToList = () => {
    setCurrentView('list');
    setSelectedPatientId(null);
  };

  if (currentView === 'detail' && selectedPatientId) {
    return (
      <PatientDetailPage
        onBack={handleBackToList}
        patientId={selectedPatientId}
      />
    );
  }

  const paginatedPatients = getPaginatedPatients();
  const hasSearchTerm = searchTerm.trim() !== '';
  const hasNoResults =
    !isSearching && hasSearchTerm && paginatedPatients.length === 0;

  return (
    <div className="flex min-h-screen">
      <div className="flex-1 p-6">
        {/* Header */}
        <div className="mb-6">
          <h1 className="mb-1 font-bold text-2xl">Patients Management</h1>
          <p className="text-gray-600">
            View and manage all registered patients
          </p>
        </div>

        <PatientSearchBar
          isSearching={isSearching}
          onSearch={handleSearch}
          onSearchTermChange={setSearchTerm}
          searchTerm={searchTerm}
        />

        {/* Center states for loading and no results */}
        {isSearching && <PatientCenterStates state="loading" />}

        {!isSearching && hasNoResults && (
          <PatientCenterStates onTryAgain={handleTryAgain} state="no-results" />
        )}

        {!(isSearching || hasNoResults) && (
          <PatientsTable
            currentPage={currentPage}
            onPageChange={setCurrentPage}
            onPatientSelect={handlePatientSelect}
            patients={paginatedPatients}
            totalPages={totalPages}
          />
        )}
      </div>
    </div>
  );
}
