"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState, useTransition } from "react";
import { toast } from "sonner";
import { useOrders, useUpdateOrderStatus } from "@/hooks/use-orders";
import { determineRenderState } from "@/lib/render-utils";
import { createURLUpdateHandler } from "@/lib/url-utils";
import type { Order } from "@/store/orders";
import { useOrdersStore } from "@/store/orders";
import { OrderDetailSheet } from "./order-detail-sheet";
import { OrderDetailsModal } from "./order-details-modal";
import { OrdersCenterStates } from "./orders-center-states";
import { OrdersSearchBar } from "./orders-search-bar";
import { OrdersTable } from "./orders-table";

interface OrdersManagementProps {
  readonly initialPage: number;
  readonly initialLimit: number;
  readonly initialStatus: string;
}

export default function OrdersManagement({
  initialPage,
  initialLimit,
  initialStatus,
}: OrdersManagementProps) {
  const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false);
  const [isDetailSheetOpen, setIsDetailSheetOpen] = useState(false);
  const [selectedModalOrder, setSelectedModalOrder] = useState<Order | null>(
    null
  );
  const [selectedViewOrder, setSelectedViewOrder] = useState<Order | null>(
    null
  );
  const [, startTransition] = useTransition();

  const router = useRouter();
  const searchParams = useSearchParams();

  const {
    orders,
    searchTerm,
    statusFilter,
    dateFilter,
    itemsPerPage,
    currentPage,
    totalPages,
    setOrders,
    setPagination,
    setSearchTerm,
    setStatusFilter,
    setDateFilter,
    setItemsPerPage,
    setIsSearching,
    clearSearch,
    setCurrentPage,
    getOrderById,
  } = useOrdersStore();

  // React Query hooks
  const {
    data: ordersData,
    isLoading: ordersLoading,
    error,
    refetch,
  } = useOrders({
    page: currentPage,
    limit: itemsPerPage,
    status: statusFilter !== "All" ? statusFilter : undefined,
  });

  const updateOrderStatusMutation = useUpdateOrderStatus();

  const updateURL = createURLUpdateHandler(router, searchParams);

  useEffect(() => {
    setCurrentPage(initialPage);
    setItemsPerPage(initialLimit);
    setStatusFilter(
      initialStatus as
        | "All"
        | "PENDING"
        | "PROCESSING"
        | "COMPLETED"
        | "CANCELLED"
    );
  }, [
    initialPage,
    initialLimit,
    initialStatus,
    setCurrentPage,
    setItemsPerPage,
    setStatusFilter,
  ]);

  useEffect(() => {
    if (ordersData) {
      setOrders(ordersData.orderData);
      setPagination(
        ordersData.paginationation.page,
        ordersData.paginationation.totalPages,
        ordersData.paginationation.totalDocs
      );
    }
  }, [ordersData, setOrders, setPagination]);

  useEffect(() => {
    setIsSearching(ordersLoading);
  }, [ordersLoading, setIsSearching]);

  useEffect(() => {
    if (error) {
      toast.error(error.message || "Failed to fetch orders");
    }
  }, [error]);

  const fetchOrders = () => {
    refetch();
  };

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

  const handleStatusChange = (orderId: string, newStatus: Order["status"]) => {
    const order = getOrderById(orderId);
    if (!order) {
      return;
    }

    startTransition(() => {
      updateOrderStatusMutation.mutate(
        { orderId, status: newStatus },
        {
          onSuccess: () => {
            toast.success(
              `Order ${orderId} status updated to ${newStatus.toLowerCase()}`
            );
          },
          onError: (mutationErr) => {
            toast.error(
              mutationErr.message || `Failed to update order ${orderId} status`
            );
          },
        }
      );
    });
  };

  const handleSearchChange = (value: string) => {
    setSearchTerm(value);
  };

  const handleSearch = () => {
    updateURL({
      page: "1",
      limit: itemsPerPage.toString(),
      status: statusFilter !== "All" ? statusFilter : "",
    });
    setCurrentPage(1);
  };

  const handleStatusFilterChange = (status: typeof statusFilter) => {
    setStatusFilter(status);
    updateURL({
      page: "1",
      limit: itemsPerPage.toString(),
      status: status !== "All" ? status : "",
    });
    setCurrentPage(1);
  };

  const handleDateFilterChange = (filter: typeof dateFilter) => {
    setDateFilter(filter);
  };

  const handleItemsPerPageChange = (count: number) => {
    setItemsPerPage(count);
    updateURL({
      page: "1",
      limit: count.toString(),
      status: statusFilter !== "All" ? statusFilter : "",
    });
    setCurrentPage(1);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    updateURL({
      page: page.toString(),
      limit: itemsPerPage.toString(),
      status: statusFilter !== "All" ? statusFilter : "",
    });
  };

  const handleClearSearch = () => {
    clearSearch();
    updateURL({ page: "", limit: "", status: "" });
    setCurrentPage(1);
    setItemsPerPage(10);
    setStatusFilter("All");
  };

  const hasOrders = orders.length > 0;
  const isLoading = ordersLoading || updateOrderStatusMutation.isPending;

  const renderState = determineRenderState(
    isLoading,
    error,
    hasOrders,
    searchTerm,
    statusFilter,
    dateFilter
  );

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
          isSearching={isLoading}
          itemsPerPage={itemsPerPage}
          onDateFilterChange={handleDateFilterChange}
          onItemsPerPageChange={handleItemsPerPageChange}
          onSearch={handleSearch}
          onSearchTermChange={handleSearchChange}
          onStatusFilterChange={handleStatusFilterChange}
          searchTerm={searchTerm}
          statusFilter={statusFilter}
        />

        {renderState.showLoading && <OrdersCenterStates state="loading" />}

        {renderState.showError && (
          <OrdersCenterStates onTryAgain={fetchOrders} state="error" />
        )}

        {renderState.showEmpty && (
          <OrdersCenterStates
            onTryAgain={handleClearSearch}
            state={renderState.emptyStateType}
          />
        )}

        {renderState.showOrders && (
          <OrdersTable
            currentPage={currentPage}
            onOrderEdit={handleEdit}
            onOrderView={handleView}
            onPageChange={handlePageChange}
            onStatusChange={handleStatusChange}
            orders={orders}
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
