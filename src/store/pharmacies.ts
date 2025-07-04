import { create } from 'zustand';

export interface Pharmacist {
  id: string;
  name: string;
  avatar?: string;
}

export type PharmacyStatus = 'Active' | 'Suspended';
export type StatusFilter = 'All' | 'Active' | 'Suspended';

export interface Pharmacy {
  id: string;
  name: string;
  contact: string;
  email: string;
  location: string;
  branches: number;
  pharmacist: Pharmacist;
  status: PharmacyStatus;
  registrationDate: string;
  licenseNumber: string;
  address: string;
}

interface PharmaciesState {
  pharmacies: Pharmacy[];
  filteredPharmacies: Pharmacy[];
  searchTerm: string;
  statusFilter: StatusFilter;
  isSearching: boolean;
  currentPage: number;
  itemsPerPage: number;
  totalPages: number;
  currentView: 'list' | 'detail';
  selectedPharmacyId: string | null;
  setSearchTerm: (term: string) => void;
  setStatusFilter: (status: StatusFilter) => void;
  searchPharmacies: (term: string) => Promise<void>;
  setCurrentView: (view: 'list' | 'detail') => void;
  setSelectedPharmacyId: (id: string | null) => void;
  setCurrentPage: (page: number) => void;
  getPharmacyById: (id: string) => Pharmacy | undefined;
  getPaginatedPharmacies: () => Pharmacy[];
  updatePharmacyStatus: (id: string, status: PharmacyStatus) => void;
  clearSearch: () => void;
}

const profileImg = '/user-img.png';

const mockPharmacies: Pharmacy[] = [
  {
    id: '1',
    name: 'Humble Pharmacy',
    contact: '0540077343',
    email: 'humble@pharmacy.com',
    location: 'Accra',
    branches: 2,
    pharmacist: {
      id: 'p1',
      name: 'OD Orlando Diggs',
      avatar: profileImg,
    },
    status: 'Suspended',
    registrationDate: '15 Jan, 2020',
    licenseNumber: 'PH-2020-001',
    address: '123 Independence Avenue, Accra, Ghana',
  },
  {
    id: '2',
    name: 'Care Plus Pharmacy',
    contact: '0540077344',
    email: 'careplus@pharmacy.com',
    location: 'Kumasi',
    branches: 8,
    pharmacist: {
      id: 'p2',
      name: 'Dr. Sarah Johnson',
      avatar: profileImg,
    },
    status: 'Active',
    registrationDate: '22 Mar, 2019',
    licenseNumber: 'PH-2019-045',
    address: '456 Kejetia Road, Kumasi, Ghana',
  },
  {
    id: '3',
    name: 'HealthFirst Pharmacy',
    contact: '0540077345',
    email: 'healthfirst@pharmacy.com',
    location: 'Tema',
    branches: 7,
    pharmacist: {
      id: 'p3',
      name: 'Pharm. Michael Brown',
      avatar: profileImg,
    },
    status: 'Active',
    registrationDate: '10 Jul, 2021',
    licenseNumber: 'PH-2021-087',
    address: '789 Harbour Road, Tema, Ghana',
  },
  {
    id: '4',
    name: 'MedCare Pharmacy',
    contact: '0540077346',
    email: 'medcare@pharmacy.com',
    location: 'Takoradi',
    branches: 6,
    pharmacist: {
      id: 'p4',
      name: 'Dr. Grace Mensah',
      avatar: profileImg,
    },
    status: 'Suspended',
    registrationDate: '05 Dec, 2018',
    licenseNumber: 'PH-2018-032',
    address: '321 Market Circle, Takoradi, Ghana',
  },
  {
    id: '5',
    name: 'Unity Pharmacy',
    contact: '0540077347',
    email: 'unity@pharmacy.com',
    location: 'Ho',
    branches: 1,
    pharmacist: {
      id: 'p5',
      name: 'Pharm. James Wilson',
      avatar: profileImg,
    },
    status: 'Active',
    registrationDate: '18 Aug, 2022',
    licenseNumber: 'PH-2022-156',
    address: '147 Ho Central, Ho, Ghana',
  },
  {
    id: '6',
    name: 'GoodHealth Pharmacy',
    contact: '0540077348',
    email: 'goodhealth@pharmacy.com',
    location: 'Kyebi',
    branches: 3,
    pharmacist: {
      id: 'p6',
      name: 'Dr. Patricia Davis',
      avatar: profileImg,
    },
    status: 'Active',
    registrationDate: '30 Nov, 2020',
    licenseNumber: 'PH-2020-189',
    address: '258 Chief Street, Kyebi, Ghana',
  },
  {
    id: '7',
    name: 'Wellness Pharmacy',
    contact: '0540077349',
    email: 'wellness@pharmacy.com',
    location: 'Mamprong',
    branches: 2,
    pharmacist: {
      id: 'p7',
      name: 'Pharm. Robert Taylor',
      avatar: profileImg,
    },
    status: 'Active',
    registrationDate: '12 Apr, 2023',
    licenseNumber: 'PH-2023-067',
    address: '369 Mamprong Junction, Mamprong, Ghana',
  },
  {
    id: '8',
    name: 'Community Pharmacy',
    contact: '0540077350',
    email: 'community@pharmacy.com',
    location: 'Cape Coast',
    branches: 5,
    pharmacist: {
      id: 'p8',
      name: 'Dr. Linda Garcia',
      avatar: profileImg,
    },
    status: 'Active',
    registrationDate: '25 Sep, 2021',
    licenseNumber: 'PH-2021-198',
    address: '741 Castle Road, Cape Coast, Ghana',
  },
  {
    id: '9',
    name: 'Prime Pharmacy',
    contact: '0540077351',
    email: 'prime@pharmacy.com',
    location: 'Sunyani',
    branches: 4,
    pharmacist: {
      id: 'p9',
      name: 'Pharm. David Martinez',
      avatar: profileImg,
    },
    status: 'Suspended',
    registrationDate: '14 Feb, 2019',
    licenseNumber: 'PH-2019-023',
    address: '852 Sunyani Market, Sunyani, Ghana',
  },
  {
    id: '10',
    name: 'Central Pharmacy',
    contact: '0540077352',
    email: 'central@pharmacy.com',
    location: 'Bolgatanga',
    branches: 23,
    pharmacist: {
      id: 'p10',
      name: 'Dr. Jennifer Lee',
      avatar: profileImg,
    },
    status: 'Active',
    registrationDate: '07 Jun, 2017',
    licenseNumber: 'PH-2017-134',
    address: '963 Central Market, Bolgatanga, Ghana',
  },
];

export const usePharmaciesStore = create<PharmaciesState>((set, get) => ({
  pharmacies: mockPharmacies,
  filteredPharmacies: mockPharmacies,
  searchTerm: '',
  statusFilter: 'All',
  isSearching: false,
  currentPage: 1,
  itemsPerPage: 10,
  totalPages: Math.ceil(mockPharmacies.length / 10),
  currentView: 'list',
  selectedPharmacyId: null,

  setSearchTerm: (term: string) => {
    set({ searchTerm: term });
  },

  setStatusFilter: (status: StatusFilter) => {
    set({ statusFilter: status });
    const { searchTerm } = get();
    get().searchPharmacies(searchTerm);
  },

  searchPharmacies: async (term: string) => {
    set({ isSearching: true });

    // Simulate API call delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const { statusFilter } = get();
    let filtered = get().pharmacies;

    // Filter by search term
    if (term.trim() !== '') {
      filtered = filtered.filter(
        (pharmacy) =>
          pharmacy.name.toLowerCase().includes(term.toLowerCase()) ||
          pharmacy.location.toLowerCase().includes(term.toLowerCase()) ||
          pharmacy.pharmacist.name.toLowerCase().includes(term.toLowerCase()) ||
          pharmacy.contact.includes(term) ||
          pharmacy.email.toLowerCase().includes(term.toLowerCase())
      );
    }

    // Filter by status
    if (statusFilter !== 'All') {
      filtered = filtered.filter(
        (pharmacy) => pharmacy.status === statusFilter
      );
    }

    set({
      filteredPharmacies: filtered,
      isSearching: false,
      currentPage: 1,
      totalPages: Math.ceil(filtered.length / get().itemsPerPage),
    });
  },

  setCurrentView: (view: 'list' | 'detail') => {
    set({ currentView: view });
  },

  setSelectedPharmacyId: (id: string | null) => {
    set({ selectedPharmacyId: id });
  },

  setCurrentPage: (page: number) => {
    set({ currentPage: page });
  },

  getPharmacyById: (id: string) => {
    return get().pharmacies.find((pharmacy) => pharmacy.id === id);
  },

  getPaginatedPharmacies: () => {
    const { filteredPharmacies, currentPage, itemsPerPage } = get();
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return filteredPharmacies.slice(startIndex, endIndex);
  },

  updatePharmacyStatus: (id: string, status: PharmacyStatus) => {
    const updatedPharmacies = get().pharmacies.map((pharmacy) =>
      pharmacy.id === id ? { ...pharmacy, status } : pharmacy
    );

    const updatedFilteredPharmacies = get().filteredPharmacies.map(
      (pharmacy) => (pharmacy.id === id ? { ...pharmacy, status } : pharmacy)
    );

    set({
      pharmacies: updatedPharmacies,
      filteredPharmacies: updatedFilteredPharmacies,
    });
  },

  clearSearch: () => {
    set({
      searchTerm: '',
      filteredPharmacies: get().pharmacies,
      currentPage: 1,
      totalPages: Math.ceil(get().pharmacies.length / get().itemsPerPage),
    });
  },
}));
