'use client';

import { useState } from 'react';
import type { Order } from '@/store/orders';
import { useOrdersStore } from '@/store/orders';
import { OrderDetailSheet } from './order-detail-sheet';
import { OrderDetailsModal } from './order-details-modal';
import { OrdersCenterStates } from './orders-center-states';
import { OrdersSearchBar } from './orders-search-bar';
import { OrdersTable } from './orders-table';

export default function OrdersManagement() {
  const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false);
  const [isDetailSheetOpen, setIsDetailSheetOpen] = useState(false);
  const [selectedModalOrder, setSelectedModalOrder] = useState<Order | null>(
    null
  );
  const [selectedViewOrder, setSelectedViewOrder] = useState<Order | null>(
    null
  );

  const {
    filteredOrders,
    searchTerm,
    statusFilter,
    dateFilter,
    itemsPerPage,
    isSearching,
    currentPage,
    totalPages,
    setSearchTerm,
    setStatusFilter,
    setDateFilter,
    setItemsPerPage,
    searchOrders,
    clearSearch,
    setCurrentPage,
    updateOrderStatus,
    deleteOrder,
    getPaginatedOrders,
    getOrderById,
  } = useOrdersStore();

  const handleView = (orderId: string) => {
    const order = getOrderById(orderId);
    if (order) {
      setSelectedViewOrder(order);
      setIsDetailSheetOpen(true);
    }
  };

  const handleEdit = (order: Order) => {
    setSelectedModalOrder(order);
    setIsDetailsModalOpen(true);
  };

  const paginatedOrders = getPaginatedOrders();

  return (
    <div className="flex min-h-screen">
      <div className="flex-1 p-6">
        <div className="mb-6">
          <h1 className="mb-1 font-bold text-2xl">Orders Management</h1>
          <p className="text-gray-600">
            View and manage all orders from marketplace
          </p>
        </div>

        <OrdersSearchBar
          dateFilter={dateFilter}
          isSearching={isSearching}
          itemsPerPage={itemsPerPage}
          onDateFilterChange={setDateFilter}
          onItemsPerPageChange={setItemsPerPage}
          onSearch={searchOrders}
          onSearchTermChange={setSearchTerm}
          onStatusFilterChange={setStatusFilter}
          searchTerm={searchTerm}
          statusFilter={statusFilter}
        />

        {isSearching && <OrdersCenterStates state="loading" />}

        {!isSearching && filteredOrders.length === 0 && (
          <OrdersCenterStates
            onTryAgain={clearSearch}
            state={
              searchTerm || statusFilter !== 'All' || dateFilter !== 'All'
                ? 'no-results'
                : 'empty'
            }
          />
        )}

        {!isSearching && filteredOrders.length > 0 && (
          <OrdersTable
            currentPage={currentPage}
            onDelete={deleteOrder}
            onOrderEdit={handleEdit}
            onOrderView={handleView}
            onPageChange={setCurrentPage}
            onStatusChange={updateOrderStatus}
            orders={paginatedOrders}
            totalPages={totalPages}
          />
        )}
      </div>

      <OrderDetailSheet
        isOpen={isDetailSheetOpen}
        onClose={() => setIsDetailSheetOpen(false)}
        order={selectedViewOrder}
      />

      {/* Edit Modal */}
      <OrderDetailsModal
        isOpen={isDetailsModalOpen}
        onClose={() => setIsDetailsModalOpen(false)}
        order={selectedModalOrder}
      />
    </div>
  );
}
