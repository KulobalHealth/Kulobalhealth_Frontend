'use client';

import { Plus } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import type { DDIIntegrator } from '@/store/ddi-integrators';
import { useDDIIntegratorsStore } from '@/store/ddi-integrators';
import { AddIntegratorModal } from './add-integrator-modal';
import { DDICenterStates } from './ddi-center-states';
import { DDIIntegratorDetail } from './ddi-integrator-detail';
import { DDIIntegratorsTable } from './ddi-integrators-table';
import { DDISearchBar } from './ddi-search-bar';
import { EditIntegratorModal } from './edit-integrator-modal';

export default function DDIIntegrations() {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedEditIntegrator, setSelectedEditIntegrator] =
    useState<DDIIntegrator | null>(null);

  const {
    filteredIntegrators,
    searchTerm,
    statusFilter,
    isSearching,
    currentPage,
    totalPages,
    currentView,
    setSearchTerm,
    setStatusFilter,
    searchIntegrators,
    clearSearch,
    setCurrentView,
    setSelectedIntegratorId,
    setCurrentPage,
    updateIntegratorStatus,
    addIntegrator,
    updateIntegrator,
    deleteIntegrator,
    getPaginatedIntegrators,
  } = useDDIIntegratorsStore();

  const handleView = (integratorId: string) => {
    setSelectedIntegratorId(integratorId);
    setCurrentView('detail');
  };

  const handleEdit = (integrator: DDIIntegrator) => {
    setSelectedEditIntegrator(integrator);
    setIsEditModalOpen(true);
  };

  const handleAddIntegrator = (integratorData: Omit<DDIIntegrator, 'id'>) => {
    addIntegrator(integratorData);
  };

  const handleUpdateIntegrator = (
    id: string,
    integratorData: Partial<DDIIntegrator>
  ) => {
    updateIntegrator(id, integratorData);
  };

  const paginatedIntegrators = getPaginatedIntegrators();

  if (currentView === 'detail') {
    return <DDIIntegratorDetail />;
  }

  return (
    <div className="flex min-h-screen">
      <div className="flex-1 p-6">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h1 className="mb-1 font-bold text-2xl">DDI Integrators</h1>
            <p className="text-gray-600">
              Manage your product integrations and API connections by companies
            </p>
          </div>
          <Button onClick={() => setIsAddModalOpen(true)}>
            <Plus className="mr-2 h-4 w-4" />
            Add New Integrator
          </Button>
        </div>

        <DDISearchBar
          isSearching={isSearching}
          onSearch={searchIntegrators}
          onSearchTermChange={setSearchTerm}
          onStatusFilterChange={setStatusFilter}
          searchTerm={searchTerm}
          statusFilter={statusFilter}
        />

        {isSearching && <DDICenterStates state="loading" />}

        {!isSearching && filteredIntegrators.length === 0 && (
          <DDICenterStates onTryAgain={clearSearch} state="no-results" />
        )}

        {!isSearching && filteredIntegrators.length > 0 && (
          <DDIIntegratorsTable
            currentPage={currentPage}
            integrators={paginatedIntegrators}
            onDelete={deleteIntegrator}
            onIntegratorEdit={handleEdit}
            onIntegratorView={handleView}
            onPageChange={setCurrentPage}
            onStatusChange={updateIntegratorStatus}
            totalPages={totalPages}
          />
        )}
      </div>

      <AddIntegratorModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onSave={handleAddIntegrator}
      />
      <EditIntegratorModal
        integrator={selectedEditIntegrator}
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        onSave={handleUpdateIntegrator}
      />
    </div>
  );
}
