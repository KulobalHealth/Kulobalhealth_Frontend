import { create } from 'zustand';

export interface DashboardMetrics {
  totalPharmacies: number;
  totalPatients: number;
  totalSuppliers: number;
  totalSales: number;
  totalDefaulters: number;
  outstandingPayment: number;
  totalDDUsers: number;
}

export interface ProductOrderData {
  month: string;
  orders: number;
  color: string;
}

export interface PerformingProduct {
  name: string;
  value: number;
  color: string;
}

export interface RecentOrder {
  id: string;
  product: string;
  pharmacy: string;
  amount: string;
  paymentStatus: string;
  paymentType: 'full' | 'credit';
  date: string;
  location: string;
  status: string;
}

interface AdminDashboardState {
  metrics: DashboardMetrics;
  productOrdersData: ProductOrderData[];
  performingProducts: PerformingProduct[];
  recentOrders: RecentOrder[];
  selectedDateRange: string;
  setSelectedDateRange: (range: string) => void;
  refreshData: () => void;
}

const mockMetrics: DashboardMetrics = {
  totalPharmacies: 200,
  totalPatients: 40,
  totalSuppliers: 90,
  totalSales: 40_000.0,
  totalDefaulters: 1001,
  outstandingPayment: 4000.0,
  totalDDUsers: 78,
};

const mockProductOrdersData: ProductOrderData[] = [
  { month: 'Jan', orders: 450, color: '#D1D5DB' },
  { month: 'Feb', orders: 650, color: '#10B981' },
  { month: 'Mar', orders: 650, color: '#10B981' },
  { month: 'Apr', orders: 350, color: '#D1D5DB' },
  { month: 'May', orders: 150, color: '#D1D5DB' },
  { month: 'Jun', orders: 650, color: '#10B981' },
  { month: 'Jul', orders: 280, color: '#D1D5DB' },
  { month: 'Aug', orders: 180, color: '#D1D5DB' },
  { month: 'Sep', orders: 450, color: '#D1D5DB' },
  { month: 'Oct', orders: 250, color: '#D1D5DB' },
  { month: 'Nov', orders: 50, color: '#D1D5DB' },
  { month: 'Dec', orders: 350, color: '#D1D5DB' },
];

const mockPerformingProducts: PerformingProduct[] = [
  { name: 'Malaria Test Kits', value: 120, color: '#6366F1' },
  { name: 'HIV Test Kits', value: 12, color: '#F472B6' },
  { name: 'Hypertension Test Kit', value: 78, color: '#06B6D4' },
];

const mockRecentOrders: RecentOrder[] = [
  {
    id: '#57578558686',
    product: 'Malaria Test Kit',
    pharmacy: 'Humble Pharmacy',
    amount: 'GHS 200.00',
    paymentStatus: 'Full Payment',
    paymentType: 'full',
    date: 'Thu 7 Dec, 2025',
    location: 'Greater Accra',
    status: 'New Order',
  },
  {
    id: '#57578558687',
    product: 'HIV Test Kit',
    pharmacy: 'Care Pharmacy',
    amount: 'GHS 150.00',
    paymentStatus: 'Full Payment',
    paymentType: 'full',
    date: 'Wed 6 Dec, 2025',
    location: 'Ashanti',
    status: 'Processing',
  },
  {
    id: '#57578558688',
    product: 'Blood Pressure Monitor',
    pharmacy: 'Health Plus',
    amount: 'GHS 300.00',
    paymentStatus: 'Credit',
    paymentType: 'credit',
    date: 'Tue 5 Dec, 2025',
    location: 'Northern',
    status: 'Shipped',
  },
  {
    id: '#57578558689',
    product: 'Glucose Test Strips',
    pharmacy: 'MedCare Pharmacy',
    amount: 'GHS 120.00',
    paymentStatus: 'Full Payment',
    paymentType: 'full',
    date: 'Mon 4 Dec, 2025',
    location: 'Western',
    status: 'Delivered',
  },
  {
    id: '#57578558690',
    product: 'First Aid Kit',
    pharmacy: 'Community Pharmacy',
    amount: 'GHS 80.00',
    paymentStatus: 'Credit',
    paymentType: 'credit',
    date: 'Sun 3 Dec, 2025',
    location: 'Volta',
    status: 'New Order',
  },
];

export const useAdminDashboardStore = create<AdminDashboardState>(
  (set, get) => ({
    metrics: mockMetrics,
    productOrdersData: mockProductOrdersData,
    performingProducts: mockPerformingProducts,
    recentOrders: mockRecentOrders,
    selectedDateRange: '12 months',

    setSelectedDateRange: (range: string) => {
      set({ selectedDateRange: range });
      // In a real app, this would trigger data refetch
      get().refreshData();
    },

    refreshData: () => {
      // In a real app, this would fetch fresh data from API
      // For now, we'll just simulate a refresh
      console.log('Refreshing dashboard data...');
    },
  })
);
