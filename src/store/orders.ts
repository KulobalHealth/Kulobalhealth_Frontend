import { create } from 'zustand';

export interface Order {
  id: string;
  orderId: string;
  productName: string;
  orderNumber: string;
  pharmacyName: string;
  orderDate: string;
  amount: string;
  paymentStatus: string;
  status: 'Delivered' | 'New Order' | 'In Transit' | 'Confirmed' | 'Cancelled';
  statusColor: 'green' | 'gray' | 'blue' | 'yellow' | 'red';
  customerName?: string;
  customerPhone?: string;
  customerEmail?: string;
  deliveryAddress?: string;
  notes?: string;
}

type StatusFilter =
  | 'All'
  | 'Delivered'
  | 'New Order'
  | 'In Transit'
  | 'Confirmed'
  | 'Cancelled';
type DateFilter = 'All' | 'Today' | 'This Week' | 'This Month' | 'Custom Range';

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
  currentView: 'list' | 'detail';
  selectedOrderId: string | null;
  setSearchTerm: (term: string) => void;
  setStatusFilter: (status: StatusFilter) => void;
  setDateFilter: (filter: DateFilter) => void;
  setItemsPerPage: (count: number) => void;
  searchOrders: () => Promise<void>;
  applyFilters: () => void;
  clearSearch: () => void;
  setCurrentView: (view: 'list' | 'detail') => void;
  setSelectedOrderId: (id: string | null) => void;
  setCurrentPage: (page: number) => void;
  getOrderById: (id: string) => Order | undefined;
  getPaginatedOrders: () => Order[];
  updateOrderStatus: (id: string, status: Order['status']) => void;
  deleteOrder: (id: string) => void;
}

const mockOrders: Order[] = [
  {
    id: '1',
    orderId: 'Malaria Test Kit\n#57578558686',
    productName: 'Malaria Test Kit',
    orderNumber: '#57578558686',
    pharmacyName: 'Humble Pharmacy',
    orderDate: 'Thu 7 Dec, 2025',
    amount: 'GHS 200.00',
    paymentStatus: '+ Full Payment',
    status: 'Delivered',
    statusColor: 'green',
    customerName: 'John Doe',
    customerPhone: '+233 540 077 343',
    customerEmail: 'john.doe@email.com',
    deliveryAddress: '123 Main St, Accra, Ghana',
  },
  {
    id: '2',
    orderId: 'Malaria Test Kit\n#57578558686',
    productName: 'Malaria Test Kit',
    orderNumber: '#57578558687',
    pharmacyName: 'Humble Pharmacy',
    orderDate: 'Thu 7 Dec, 2025',
    amount: 'GHS 200.00',
    paymentStatus: '+ Full Payment',
    status: 'New Order',
    statusColor: 'gray',
    customerName: 'Jane Smith',
    customerPhone: '+233 540 077 344',
    customerEmail: 'jane.smith@email.com',
    deliveryAddress: '456 Oak Ave, Kumasi, Ghana',
  },
  {
    id: '3',
    orderId: 'Blood Pressure Monitor\n#57578558688',
    productName: 'Blood Pressure Monitor',
    orderNumber: '#57578558688',
    pharmacyName: 'City Care Pharmacy',
    orderDate: 'Wed 6 Dec, 2025',
    amount: 'GHS 350.00',
    paymentStatus: '+ Full Payment',
    status: 'In Transit',
    statusColor: 'blue',
    customerName: 'Michael Johnson',
    customerPhone: '+233 540 077 345',
    customerEmail: 'michael.j@email.com',
    deliveryAddress: '789 Pine St, Tamale, Ghana',
  },
  {
    id: '4',
    orderId: 'Glucose Test Strips\n#57578558689',
    productName: 'Glucose Test Strips',
    orderNumber: '#57578558689',
    pharmacyName: 'Health Plus Pharmacy',
    orderDate: 'Tue 5 Dec, 2025',
    amount: 'GHS 150.00',
    paymentStatus: '+ Full Payment',
    status: 'Confirmed',
    statusColor: 'yellow',
    customerName: 'Sarah Wilson',
    customerPhone: '+233 540 077 346',
    customerEmail: 'sarah.w@email.com',
    deliveryAddress: '321 Elm St, Cape Coast, Ghana',
  },
  {
    id: '5',
    orderId: 'Thermometer\n#57578558690',
    productName: 'Digital Thermometer',
    orderNumber: '#57578558690',
    pharmacyName: 'MedCare Pharmacy',
    orderDate: 'Mon 4 Dec, 2025',
    amount: 'GHS 80.00',
    paymentStatus: '+ Full Payment',
    status: 'Delivered',
    statusColor: 'green',
    customerName: 'Robert Brown',
    customerPhone: '+233 540 077 347',
    customerEmail: 'robert.b@email.com',
    deliveryAddress: '654 Birch Rd, Sunyani, Ghana',
  },
  {
    id: '6',
    orderId: 'First Aid Kit\n#57578558691',
    productName: 'First Aid Kit',
    orderNumber: '#57578558691',
    pharmacyName: 'Quick Relief Pharmacy',
    orderDate: 'Sun 3 Dec, 2025',
    amount: 'GHS 120.00',
    paymentStatus: '+ Full Payment',
    status: 'Cancelled',
    statusColor: 'red',
    customerName: 'Emily Davis',
    customerPhone: '+233 540 077 348',
    customerEmail: 'emily.d@email.com',
    deliveryAddress: '987 Maple Ave, Ho, Ghana',
    notes: 'Customer requested cancellation due to delivery delay',
  },
  {
    id: '7',
    orderId: 'Vitamin D Supplements\n#57578558692',
    productName: 'Vitamin D Supplements',
    orderNumber: '#57578558692',
    pharmacyName: 'Wellness Pharmacy',
    orderDate: 'Sat 2 Dec, 2025',
    amount: 'GHS 90.00',
    paymentStatus: '+ Full Payment',
    status: 'Delivered',
    statusColor: 'green',
    customerName: 'David Lee',
    customerPhone: '+233 540 077 349',
    customerEmail: 'david.l@email.com',
    deliveryAddress: '147 Cedar St, Bolgatanga, Ghana',
  },
  {
    id: '8',
    orderId: 'Pain Relief Gel\n#57578558693',
    productName: 'Pain Relief Gel',
    orderNumber: '#57578558693',
    pharmacyName: 'Community Pharmacy',
    orderDate: 'Fri 1 Dec, 2025',
    amount: 'GHS 45.00',
    paymentStatus: '+ Full Payment',
    status: 'In Transit',
    statusColor: 'blue',
    customerName: 'Lisa Garcia',
    customerPhone: '+233 540 077 350',
    customerEmail: 'lisa.g@email.com',
    deliveryAddress: '258 Spruce Lane, Wa, Ghana',
  },
];

export const useOrdersStore = create<OrdersState>((set, get) => ({
  orders: mockOrders,
  filteredOrders: mockOrders,
  searchTerm: '',
  statusFilter: 'All',
  dateFilter: 'All',
  isSearching: false,
  currentPage: 1,
  itemsPerPage: 10,
  totalPages: Math.ceil(mockOrders.length / 10),
  currentView: 'list',
  selectedOrderId: null,

  setSearchTerm: (term: string) => {
    set({ searchTerm: term });
  },

  setStatusFilter: (status: StatusFilter) => {
    set({ statusFilter: status });
    get().applyFilters();
  },

  setDateFilter: (filter: DateFilter) => {
    set({ dateFilter: filter });
    get().applyFilters();
  },

  setItemsPerPage: (count: number) => {
    set({
      itemsPerPage: count,
      currentPage: 1,
      totalPages: Math.ceil(get().filteredOrders.length / count),
    });
  },

  searchOrders: async () => {
    set({ isSearching: true });

    // Simulate API call delay
    await new Promise((resolve) => setTimeout(resolve, 500));

    set({ isSearching: false });
    get().applyFilters();
  },

  applyFilters: () => {
    const { orders, searchTerm, statusFilter, dateFilter } = get();
    let filtered = [...orders];

    // Apply search filter
    if (searchTerm) {
      filtered = filtered.filter(
        (order) =>
          order.productName.toLowerCase().includes(searchTerm.toLowerCase()) ||
          order.orderNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
          order.pharmacyName.toLowerCase().includes(searchTerm.toLowerCase()) ||
          order.customerName?.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Apply status filter
    if (statusFilter !== 'All') {
      filtered = filtered.filter((order) => order.status === statusFilter);
    }

    // Apply date filter (simplified - in real app would filter by actual dates)
    if (dateFilter !== 'All') {
      // For demo purposes, we'll just keep all orders
      // In a real app, you'd filter by actual date ranges
    }

    set({
      filteredOrders: filtered,
      currentPage: 1,
      totalPages: Math.ceil(filtered.length / get().itemsPerPage),
    });
  },

  clearSearch: () => {
    set({
      searchTerm: '',
      statusFilter: 'All',
      dateFilter: 'All',
      currentPage: 1,
    });
    get().applyFilters();
  },

  setCurrentView: (view: 'list' | 'detail') => {
    set({ currentView: view });
  },

  setSelectedOrderId: (id: string | null) => {
    set({ selectedOrderId: id });
  },

  setCurrentPage: (page: number) => {
    set({ currentPage: page });
  },

  getOrderById: (id: string) => {
    return get().orders.find((order) => order.id === id);
  },

  getPaginatedOrders: () => {
    const { filteredOrders, currentPage, itemsPerPage } = get();
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return filteredOrders.slice(startIndex, endIndex);
  },

  updateOrderStatus: (id: string, status: Order['status']) => {
    const statusColors: Record<Order['status'], Order['statusColor']> = {
      Delivered: 'green',
      'New Order': 'gray',
      'In Transit': 'blue',
      Confirmed: 'yellow',
      Cancelled: 'red',
    };

    set({
      orders: get().orders.map((order) =>
        order.id === id
          ? { ...order, status, statusColor: statusColors[status] }
          : order
      ),
    });
    get().applyFilters();
  },

  deleteOrder: (id: string) => {
    set({
      orders: get().orders.filter((order) => order.id !== id),
    });
    get().applyFilters();
  },
}));
