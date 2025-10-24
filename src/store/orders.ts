import { create } from "zustand";

// API Response Types
export interface OrderProduct {
  productId: string;
  productName: string;
  productType: string;
  productTypeCode: string;
  price: number;
  brand: string;
  manufacturer: string;
  description: string;
  quantity: number;
}

export interface OrderPharmacy {
  pharmacyId: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  pharmacyName: string;
  licenceNumber: string;
  branch: number;
  location: string;
}

export interface Order {
  orderId: string;
  pharmacyId: string;
  totalCost: number;
  paid: boolean;
  status: "PENDING" | "PROCESSING" | "COMPLETED" | "CANCELLED";
  paymentType: "PAYMENT_ON_ONLINE" | "PAYMENT_ON_DELIVERY";
  deliveryMethod: "EXPRESS" | "STANDARD";
  numberOfItems: number;
  dateOrdered: string;
  products: OrderProduct[];
  pharmacy: OrderPharmacy;
  // Computed fields for UI compatibility
  statusColor?: "green" | "gray" | "blue" | "yellow" | "red";
  displayStatus?: string;
}

type StatusFilter =
  | "All"
  | "PENDING"
  | "PROCESSING"
  | "COMPLETED"
  | "CANCELLED";
type DateFilter = "All" | "Today" | "This Week" | "This Month" | "Custom Range";

interface OrdersState {
  orders: Order[];
  filteredOrders: Order[];
  searchTerm: string;
  statusFilter: StatusFilter;
  dateFilter: DateFilter;
  isSearching: boolean;
  currentPage: number;
  itemsPerPage: number;
  totalPages: number;
  totalDocs: number;
  currentView: "list" | "detail";
  selectedOrderId: string | null;

  // Actions
  setOrders: (orders: Order[]) => void;
  setPagination: (page: number, totalPages: number, totalDocs: number) => void;
  setSearchTerm: (term: string) => void;
  setStatusFilter: (status: StatusFilter) => void;
  setDateFilter: (filter: DateFilter) => void;
  setItemsPerPage: (count: number) => void;
  setIsSearching: (isSearching: boolean) => void;
  clearSearch: () => void;
  setCurrentView: (view: "list" | "detail") => void;
  setSelectedOrderId: (id: string | null) => void;
  setCurrentPage: (page: number) => void;
  getOrderById: (id: string) => Order | undefined;

  // Utility functions
  getStatusColor: (status: Order["status"]) => Order["statusColor"];
  getDisplayStatus: (status: Order["status"]) => string;
}

export const useOrdersStore = create<OrdersState>((set, get) => ({
  orders: [],
  filteredOrders: [],
  searchTerm: "",
  statusFilter: "All",
  dateFilter: "All",
  isSearching: false,
  currentPage: 1,
  itemsPerPage: 10,
  totalPages: 0,
  totalDocs: 0,
  currentView: "list",
  selectedOrderId: null,

  setOrders: (orders: Order[]) => {
    const ordersWithComputedFields = orders.map((order) => ({
      ...order,
      statusColor: get().getStatusColor(order.status),
      displayStatus: get().getDisplayStatus(order.status),
    }));
    set({
      orders: ordersWithComputedFields,
      filteredOrders: ordersWithComputedFields,
    });
  },

  setPagination: (page: number, totalPages: number, totalDocs: number) => {
    set({ currentPage: page, totalPages, totalDocs });
  },

  setSearchTerm: (term: string) => {
    set({ searchTerm: term });
  },

  setStatusFilter: (status: StatusFilter) => {
    set({ statusFilter: status });
  },

  setDateFilter: (filter: DateFilter) => {
    set({ dateFilter: filter });
  },

  setItemsPerPage: (count: number) => {
    set({ itemsPerPage: count, currentPage: 1 });
  },

  setIsSearching: (isSearching: boolean) => {
    set({ isSearching });
  },

  clearSearch: () => {
    set({
      searchTerm: "",
      statusFilter: "All",
      dateFilter: "All",
      currentPage: 1,
    });
  },

  setCurrentView: (view: "list" | "detail") => {
    set({ currentView: view });
  },

  setSelectedOrderId: (id: string | null) => {
    set({ selectedOrderId: id });
  },

  setCurrentPage: (page: number) => {
    set({ currentPage: page });
  },

  getOrderById: (id: string) => {
    return get().orders.find((order) => order.orderId === id);
  },

  getStatusColor: (status: Order["status"]): Order["statusColor"] => {
    const statusColors: Record<Order["status"], Order["statusColor"]> = {
      PENDING: "gray",
      PROCESSING: "blue",
      COMPLETED: "green",
      CANCELLED: "red",
    };
    return statusColors[status];
  },

  getDisplayStatus: (status: Order["status"]): string => {
    const displayStatuses: Record<Order["status"], string> = {
      PENDING: "New Order",
      PROCESSING: "In Transit",
      COMPLETED: "Delivered",
      CANCELLED: "Cancelled",
    };
    return displayStatuses[status];
  },
}));
