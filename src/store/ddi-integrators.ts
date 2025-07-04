import { create } from 'zustand';

export interface DDIIntegrator {
  id: string;
  productName: string;
  company: string;
  softwareType: 'Web System' | 'Mobile App' | 'Desktop App';
  apiKey: string;
  integrationDate: string;
  email: string;
  phoneNumber: string;
  status: 'Active' | 'Suspended';
  description?: string;
  contactPerson?: string;
  website?: string;
}

interface DDIIntegratorsState {
  integrators: DDIIntegrator[];
  filteredIntegrators: DDIIntegrator[];
  searchTerm: string;
  statusFilter: 'All' | 'Active' | 'Suspended';
  isSearching: boolean;
  currentPage: number;
  itemsPerPage: number;
  totalPages: number;
  currentView: 'list' | 'detail';
  selectedIntegratorId: string | null;
  setSearchTerm: (term: string) => void;
  setStatusFilter: (status: 'All' | 'Active' | 'Suspended') => void;
  searchIntegrators: () => Promise<void>;
  applyFilters: () => void;
  clearSearch: () => void;
  setCurrentView: (view: 'list' | 'detail') => void;
  setSelectedIntegratorId: (id: string | null) => void;
  setCurrentPage: (page: number) => void;
  getIntegratorById: (id: string) => DDIIntegrator | undefined;
  getPaginatedIntegrators: () => DDIIntegrator[];
  updateIntegratorStatus: (id: string, status: 'Active' | 'Suspended') => void;
  addIntegrator: (integrator: Omit<DDIIntegrator, 'id'>) => void;
  updateIntegrator: (id: string, integrator: Partial<DDIIntegrator>) => void;
  deleteIntegrator: (id: string) => void;
}

const mockIntegrators: DDIIntegrator[] = [
  {
    id: '1',
    productName: 'PaymentPro',
    company: 'FinTech Solutions',
    softwareType: 'Web System',
    apiKey: 'pk_live_K9X2mP4R7...',
    integrationDate: '7 June, 2025',
    email: 'support@fintech.com',
    phoneNumber: '+233 540077343',
    status: 'Suspended',
    description: 'Advanced payment processing system for e-commerce platforms',
    contactPerson: 'John Smith',
    website: 'https://fintech-solutions.com',
  },
  {
    id: '2',
    productName: 'MobileTracker',
    company: 'Analytics Corp',
    softwareType: 'Mobile App',
    apiKey: 'pk_live_A8B3nQ5S8...',
    integrationDate: '15 May, 2025',
    email: 'info@analytics.com',
    phoneNumber: '+233 540077344',
    status: 'Active',
    description: 'Real-time mobile analytics and user behavior tracking',
    contactPerson: 'Sarah Johnson',
    website: 'https://analytics-corp.com',
  },
  {
    id: '3',
    productName: 'DesktopSync',
    company: 'Productivity Inc',
    softwareType: 'Desktop App',
    apiKey: 'pk_live_D7C9mN2L5...',
    integrationDate: '20 April, 2025',
    email: 'contact@productivity.com',
    phoneNumber: '+233 540077345',
    status: 'Active',
    description: 'Cross-platform desktop synchronization and backup solution',
    contactPerson: 'Michael Brown',
    website: 'https://productivity-inc.com',
  },
  {
    id: '4',
    productName: 'CloudConnect',
    company: 'TechVision Ltd',
    softwareType: 'Web System',
    apiKey: 'pk_live_T4V8xY1M3...',
    integrationDate: '10 March, 2025',
    email: 'hello@techvision.com',
    phoneNumber: '+233 540077346',
    status: 'Active',
    description: 'Cloud infrastructure management and monitoring platform',
    contactPerson: 'Emma Davis',
    website: 'https://techvision.com',
  },
  {
    id: '5',
    productName: 'DataFlow',
    company: 'InfoSystems Co',
    softwareType: 'Desktop App',
    apiKey: 'pk_live_I6F3pR9Q7...',
    integrationDate: '25 February, 2025',
    email: 'support@infosystems.com',
    phoneNumber: '+233 540077347',
    status: 'Suspended',
    description: 'Enterprise data processing and workflow automation',
    contactPerson: 'Robert Wilson',
    website: 'https://infosystems.co',
  },
  {
    id: '6',
    productName: 'AppMonitor',
    company: 'DevTools Inc',
    softwareType: 'Mobile App',
    apiKey: 'pk_live_D5E7kL8M2...',
    integrationDate: '12 January, 2025',
    email: 'team@devtools.com',
    phoneNumber: '+233 540077348',
    status: 'Active',
    description: 'Application performance monitoring and error tracking',
    contactPerson: 'Lisa Taylor',
    website: 'https://devtools.com',
  },
  {
    id: '7',
    productName: 'SecureAuth',
    company: 'CyberSafe Solutions',
    softwareType: 'Web System',
    apiKey: 'pk_live_C3S9fH6K1...',
    integrationDate: '18 December, 2024',
    email: 'security@cybersafe.com',
    phoneNumber: '+233 540077349',
    status: 'Active',
    description: 'Multi-factor authentication and identity management',
    contactPerson: 'James Anderson',
    website: 'https://cybersafe.com',
  },
  {
    id: '8',
    productName: 'ReportGen',
    company: 'Business Analytics',
    softwareType: 'Desktop App',
    apiKey: 'pk_live_B2A4tG7N8...',
    integrationDate: '5 November, 2024',
    email: 'reports@business-analytics.com',
    phoneNumber: '+233 540077350',
    status: 'Active',
    description: 'Automated business reporting and data visualization',
    contactPerson: 'Kate Martinez',
    website: 'https://business-analytics.com',
  },
];

export const useDDIIntegratorsStore = create<DDIIntegratorsState>(
  (set, get) => ({
    integrators: mockIntegrators,
    filteredIntegrators: mockIntegrators,
    searchTerm: '',
    statusFilter: 'All',
    isSearching: false,
    currentPage: 1,
    itemsPerPage: 10,
    totalPages: Math.ceil(mockIntegrators.length / 10),
    currentView: 'list',
    selectedIntegratorId: null,

    setSearchTerm: (term: string) => {
      set({ searchTerm: term });
    },

    setStatusFilter: (status: 'All' | 'Active' | 'Suspended') => {
      set({ statusFilter: status });
      get().applyFilters();
    },

    searchIntegrators: async () => {
      set({ isSearching: true });

      // Simulate API call delay
      await new Promise((resolve) => setTimeout(resolve, 1000));

      get().applyFilters();
      set({ isSearching: false });
    },

    applyFilters: () => {
      const { integrators, searchTerm, statusFilter } = get();
      let filtered = integrators;

      // Apply search filter
      if (searchTerm.trim() !== '') {
        filtered = filtered.filter(
          (integrator) =>
            integrator.productName
              .toLowerCase()
              .includes(searchTerm.toLowerCase()) ||
            integrator.company
              .toLowerCase()
              .includes(searchTerm.toLowerCase()) ||
            integrator.email.toLowerCase().includes(searchTerm.toLowerCase())
        );
      }

      // Apply status filter
      if (statusFilter !== 'All') {
        filtered = filtered.filter(
          (integrator) => integrator.status === statusFilter
        );
      }

      set({
        filteredIntegrators: filtered,
        currentPage: 1,
        totalPages: Math.ceil(filtered.length / get().itemsPerPage),
      });
    },

    clearSearch: () => {
      set({
        searchTerm: '',
        statusFilter: 'All',
        currentPage: 1,
      });
      get().applyFilters();
    },

    setCurrentView: (view: 'list' | 'detail') => {
      set({ currentView: view });
    },

    setSelectedIntegratorId: (id: string | null) => {
      set({ selectedIntegratorId: id });
    },

    setCurrentPage: (page: number) => {
      set({ currentPage: page });
    },

    getIntegratorById: (id: string) => {
      return get().integrators.find((integrator) => integrator.id === id);
    },

    getPaginatedIntegrators: () => {
      const { filteredIntegrators, currentPage, itemsPerPage } = get();
      const startIndex = (currentPage - 1) * itemsPerPage;
      const endIndex = startIndex + itemsPerPage;
      return filteredIntegrators.slice(startIndex, endIndex);
    },

    updateIntegratorStatus: (id: string, status: 'Active' | 'Suspended') => {
      set({
        integrators: get().integrators.map((integrator) =>
          integrator.id === id ? { ...integrator, status } : integrator
        ),
      });
      get().applyFilters();
    },

    addIntegrator: (integrator: Omit<DDIIntegrator, 'id'>) => {
      const newIntegrator = {
        ...integrator,
        id: Date.now().toString(),
      };
      set({
        integrators: [...get().integrators, newIntegrator],
      });
      get().applyFilters();
    },

    updateIntegrator: (
      id: string,
      updatedIntegrator: Partial<DDIIntegrator>
    ) => {
      set({
        integrators: get().integrators.map((integrator) =>
          integrator.id === id
            ? { ...integrator, ...updatedIntegrator }
            : integrator
        ),
      });
      get().applyFilters();
    },

    deleteIntegrator: (id: string) => {
      set({
        integrators: get().integrators.filter(
          (integrator) => integrator.id !== id
        ),
      });
      get().applyFilters();
    },
  })
);
