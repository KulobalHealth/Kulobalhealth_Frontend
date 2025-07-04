import { create } from 'zustand';

export interface Supplier {
  readonly id: string;
  readonly companyName: string;
  readonly telephone: string;
  readonly email: string;
  readonly address: string;
  readonly agentName: string;
  readonly agentNumber: string;
  readonly joinDate: string;
  readonly status: 'Active' | 'Inactive' | 'Suspended';
  readonly statusColor: 'green' | 'gray' | 'red';
  readonly totalOrders: number;
  readonly totalRevenue: string;
  readonly lastActivity: string;
}

interface SuppliersState {
  readonly suppliers: Supplier[];
  readonly filteredSuppliers: Supplier[];
  readonly searchTerm: string;
  readonly statusFilter: string;
  readonly itemsPerPage: number;
  readonly currentPage: number;
  readonly totalPages: number;
  readonly isSearching: boolean;
  readonly selectedSupplier: Supplier | null;

  // Actions
  readonly setSearchTerm: (term: string) => void;
  readonly setStatusFilter: (status: string) => void;
  readonly setItemsPerPage: (count: number) => void;
  readonly setCurrentPage: (page: number) => void;
  readonly searchSuppliers: () => void;
  readonly clearSearch: () => void;
  readonly addSupplier: (
    supplier: Omit<
      Supplier,
      'id' | 'joinDate' | 'totalOrders' | 'totalRevenue' | 'lastActivity'
    >
  ) => void;
  readonly updateSupplier: (id: string, updates: Partial<Supplier>) => void;
  readonly updateSupplierStatus: (
    id: string,
    status: Supplier['status']
  ) => void;
  readonly deleteSupplier: (id: string) => void;
  readonly getSupplierById: (id: string) => Supplier | undefined;
  readonly getPaginatedSuppliers: () => Supplier[];
  readonly setSelectedSupplier: (supplier: Supplier | null) => void;
}

// Mock data
const mockSuppliers: Supplier[] = [
  {
    id: 'SUP001',
    companyName: 'MedSupply Ghana Ltd',
    telephone: '0303435454',
    email: 'info@medsupply.com',
    address: 'Airport Residential Area, Accra',
    agentName: 'Orlando Diggs',
    agentNumber: '0540077343',
    joinDate: '2023-01-15',
    status: 'Active',
    statusColor: 'green',
    totalOrders: 156,
    totalRevenue: '₵245,000',
    lastActivity: '2024-01-20',
  },
  {
    id: 'SUP002',
    companyName: 'Pharma Distribution Co.',
    telephone: '0244123456',
    email: 'contact@pharmadist.com',
    address: 'East Legon, Accra',
    agentName: 'Sarah Johnson',
    agentNumber: '0201234567',
    joinDate: '2023-03-22',
    status: 'Active',
    statusColor: 'green',
    totalOrders: 89,
    totalRevenue: '₵134,500',
    lastActivity: '2024-01-19',
  },
  {
    id: 'SUP003',
    companyName: 'HealthCare Supplies',
    telephone: '0558765432',
    email: 'info@healthcare.com',
    address: 'Tema, Greater Accra',
    agentName: 'Michael Brown',
    agentNumber: '0209876543',
    joinDate: '2023-05-10',
    status: 'Inactive',
    statusColor: 'gray',
    totalOrders: 23,
    totalRevenue: '₵45,200',
    lastActivity: '2023-12-15',
  },
  {
    id: 'SUP004',
    companyName: 'Global Med Solutions',
    telephone: '0302987654',
    email: 'sales@globalmed.com',
    address: 'Kumasi, Ashanti Region',
    agentName: 'Grace Asante',
    agentNumber: '0244567890',
    joinDate: '2023-07-03',
    status: 'Active',
    statusColor: 'green',
    totalOrders: 201,
    totalRevenue: '₵412,300',
    lastActivity: '2024-01-21',
  },
  {
    id: 'SUP005',
    companyName: 'Reliable Pharma Supply',
    telephone: '0277123456',
    email: 'info@reliablepharma.com',
    address: 'Takoradi, Western Region',
    agentName: 'John Mensah',
    agentNumber: '0555123456',
    joinDate: '2023-09-12',
    status: 'Suspended',
    statusColor: 'red',
    totalOrders: 45,
    totalRevenue: '₵67,800',
    lastActivity: '2024-01-10',
  },
  {
    id: 'SUP006',
    companyName: 'Northern Med Distributors',
    telephone: '0371234567',
    email: 'contact@northernmed.com',
    address: 'Tamale, Northern Region',
    agentName: 'Fatima Abdul',
    agentNumber: '0246789012',
    joinDate: '2023-11-05',
    status: 'Active',
    statusColor: 'green',
    totalOrders: 67,
    totalRevenue: '₵98,400',
    lastActivity: '2024-01-18',
  },
  {
    id: 'SUP007',
    companyName: 'Coast Medical Supplies',
    telephone: '0322345678',
    email: 'info@coastmedical.com',
    address: 'Cape Coast, Central Region',
    agentName: 'Emmanuel Kojo',
    agentNumber: '0208765432',
    joinDate: '2022-12-20',
    status: 'Active',
    statusColor: 'green',
    totalOrders: 134,
    totalRevenue: '₵189,600',
    lastActivity: '2024-01-17',
  },
  {
    id: 'SUP008',
    companyName: 'Elite Pharmaceutical Ltd',
    telephone: '0303456789',
    email: 'sales@elitepharma.com',
    address: 'Lapaz, Accra',
    agentName: 'Rebecca Osei',
    agentNumber: '0551234567',
    joinDate: '2023-02-14',
    status: 'Inactive',
    statusColor: 'gray',
    totalOrders: 12,
    totalRevenue: '₵18,900',
    lastActivity: '2023-11-30',
  },
];

export const useSuppliersStore = create<SuppliersState>((set, get) => ({
  suppliers: mockSuppliers,
  filteredSuppliers: mockSuppliers,
  searchTerm: '',
  statusFilter: 'All',
  itemsPerPage: 10,
  currentPage: 1,
  totalPages: Math.ceil(mockSuppliers.length / 10),
  isSearching: false,
  selectedSupplier: null,

  setSearchTerm: (term) => set({ searchTerm: term }),

  setStatusFilter: (status) => set({ statusFilter: status }),

  setItemsPerPage: (count) => {
    const { filteredSuppliers } = get();
    set({
      itemsPerPage: count,
      currentPage: 1,
      totalPages: Math.ceil(filteredSuppliers.length / count),
    });
  },

  setCurrentPage: (page) => set({ currentPage: page }),

  searchSuppliers: () => {
    set({ isSearching: true });

    setTimeout(() => {
      const { suppliers, searchTerm, statusFilter, itemsPerPage } = get();

      let filtered = suppliers;

      // Filter by search term
      if (searchTerm.trim()) {
        const term = searchTerm.toLowerCase();
        filtered = filtered.filter(
          (supplier) =>
            supplier.companyName.toLowerCase().includes(term) ||
            supplier.email.toLowerCase().includes(term) ||
            supplier.agentName.toLowerCase().includes(term) ||
            supplier.id.toLowerCase().includes(term)
        );
      }

      // Filter by status
      if (statusFilter !== 'All') {
        filtered = filtered.filter(
          (supplier) => supplier.status === statusFilter
        );
      }

      set({
        filteredSuppliers: filtered,
        currentPage: 1,
        totalPages: Math.ceil(filtered.length / itemsPerPage),
        isSearching: false,
      });
    }, 500);
  },

  clearSearch: () => {
    const { suppliers, itemsPerPage } = get();
    set({
      searchTerm: '',
      statusFilter: 'All',
      filteredSuppliers: suppliers,
      currentPage: 1,
      totalPages: Math.ceil(suppliers.length / itemsPerPage),
      isSearching: false,
    });
  },

  addSupplier: (supplierData) => {
    const newSupplier: Supplier = {
      ...supplierData,
      id: `SUP${String(Date.now()).slice(-3)}`,
      joinDate: new Date().toISOString().split('T')[0],
      totalOrders: 0,
      totalRevenue: '₵0',
      lastActivity: 'Never',
      status: 'Active',
      statusColor: 'green',
    };

    const { suppliers, itemsPerPage } = get();
    const updatedSuppliers = [newSupplier, ...suppliers];

    set({
      suppliers: updatedSuppliers,
      filteredSuppliers: updatedSuppliers,
      totalPages: Math.ceil(updatedSuppliers.length / itemsPerPage),
    });
  },

  updateSupplier: (id, updates) => {
    const { suppliers, filteredSuppliers } = get();

    const updateSupplierInArray = (arr: Supplier[]) =>
      arr.map((supplier) =>
        supplier.id === id ? { ...supplier, ...updates } : supplier
      );

    set({
      suppliers: updateSupplierInArray(suppliers),
      filteredSuppliers: updateSupplierInArray(filteredSuppliers),
    });
  },

  updateSupplierStatus: (id, status) => {
    const statusColor: Record<Supplier['status'], Supplier['statusColor']> = {
      Active: 'green',
      Inactive: 'gray',
      Suspended: 'red',
    };

    get().updateSupplier(id, { status, statusColor: statusColor[status] });
  },

  deleteSupplier: (id) => {
    const { suppliers, filteredSuppliers, itemsPerPage } = get();

    const newSuppliers = suppliers.filter((supplier) => supplier.id !== id);
    const newFilteredSuppliers = filteredSuppliers.filter(
      (supplier) => supplier.id !== id
    );

    set({
      suppliers: newSuppliers,
      filteredSuppliers: newFilteredSuppliers,
      totalPages: Math.ceil(newFilteredSuppliers.length / itemsPerPage),
    });
  },

  getSupplierById: (id) => {
    const { suppliers } = get();
    return suppliers.find((supplier) => supplier.id === id);
  },

  getPaginatedSuppliers: () => {
    const { filteredSuppliers, currentPage, itemsPerPage } = get();
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return filteredSuppliers.slice(startIndex, endIndex);
  },

  setSelectedSupplier: (supplier) => set({ selectedSupplier: supplier }),
}));
