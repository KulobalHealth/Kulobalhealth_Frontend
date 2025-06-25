'use client';

import { useState } from 'react';
import type { Supplier } from '@/store/suppliers';
import { useSuppliersStore } from '@/store/suppliers';
import { AddSupplierModal } from './add-supplier-modal';
import { EditSupplierModal } from './edit-supplier-modal';
import { SupplierDetailModal } from './supplier-detail-modal';
import { SupplierSearchBar } from './supplier-search-bar';
import { SuppliersCenterStates } from './suppliers-center-states';
import { SuppliersTable } from './suppliers-table';

export default function SuppliersManagement() {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);
  const [selectedSupplier, setSelectedSupplier] = useState<Supplier | null>(
    null
  );
  const [selectedViewSupplier, setSelectedViewSupplier] =
    useState<Supplier | null>(null);

  const {
    filteredSuppliers,
    searchTerm,
    statusFilter,
    itemsPerPage,
    isSearching,
    currentPage,
    totalPages,
    setSearchTerm,
    setStatusFilter,
    setItemsPerPage,
    searchSuppliers,
    clearSearch,
    setCurrentPage,
    updateSupplierStatus,
    deleteSupplier,
    getPaginatedSuppliers,
    getSupplierById,
  } = useSuppliersStore();

  const handleView = (supplierId: string) => {
    const supplier = getSupplierById(supplierId);
    if (supplier) {
      setSelectedViewSupplier(supplier);
      setIsDetailModalOpen(true);
    }
  };

  const handleEdit = (supplier: Supplier) => {
    setSelectedSupplier(supplier);
    setIsEditModalOpen(true);
  };

  const handleStatusChange = (id: string, status: Supplier['status']) => {
    updateSupplierStatus(id, status);
  };

  const handleDelete = (id: string) => {
    if (confirm('Are you sure you want to delete this supplier?')) {
      deleteSupplier(id);
    }
  };

  const paginatedSuppliers = getPaginatedSuppliers();

  return (
    <div className="flex min-h-screen">
      <div className="flex-1 p-6">
        <SupplierSearchBar
          isSearching={isSearching}
          itemsPerPage={itemsPerPage}
          onAddSupplier={() => setIsAddModalOpen(true)}
          onItemsPerPageChange={setItemsPerPage}
          onSearch={searchSuppliers}
          onSearchTermChange={setSearchTerm}
          onStatusFilterChange={setStatusFilter}
          searchTerm={searchTerm}
          statusFilter={statusFilter}
        />

        <div className="mt-6">
          {isSearching && <SuppliersCenterStates state="loading" />}

          {!isSearching && filteredSuppliers.length === 0 && (
            <SuppliersCenterStates
              onTryAgain={clearSearch}
              state={
                searchTerm || statusFilter !== 'All' ? 'no-results' : 'empty'
              }
            />
          )}

          {!isSearching && filteredSuppliers.length > 0 && (
            <SuppliersTable
              currentPage={currentPage}
              onDelete={handleDelete}
              onPageChange={setCurrentPage}
              onStatusChange={handleStatusChange}
              onSupplierEdit={handleEdit}
              onSupplierView={handleView}
              suppliers={paginatedSuppliers}
              totalPages={totalPages}
            />
          )}
        </div>
      </div>

      {/* Detail Modal */}
      <SupplierDetailModal
        isOpen={isDetailModalOpen}
        onClose={() => setIsDetailModalOpen(false)}
        onEdit={handleEdit}
        supplier={selectedViewSupplier}
      />

      {/* Add Modal */}
      <AddSupplierModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
      />

      {/* Edit Modal */}
      <EditSupplierModal
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        supplier={selectedSupplier}
      />
    </div>
  );
}
