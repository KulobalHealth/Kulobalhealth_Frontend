import { create } from 'zustand';

export interface Medication {
  id: string;
  name: string;
  dosage: string;
  frequency: string;
  startDate: string;
  endDate: string;
  status: 'Ongoing' | 'Completed' | 'Discontinued';
}

export interface MedicalCondition {
  id: string;
  name: string;
  severity: 'Low' | 'Moderate' | 'High';
}

export interface Allergy {
  id: string;
  name: string;
  severity: 'Mild' | 'Moderate' | 'Severe';
}

export interface DDIRisk {
  id: string;
  severity: 'High' | 'Moderate' | 'Low';
  drugs: string[];
  description: string;
  recommendations: string[];
}

export interface Patient {
  id: string;
  name: string;
  dateOfBirth: string;
  age: number;
  gender: 'Male' | 'Female';
  contact: string;
  email?: string;
  address?: string;
  pharmacy: string;
  lastVisit: string;
  avatar?: string;
  medicalConditions: MedicalCondition[];
  allergies: Allergy[];
  medications: Medication[];
  ddiRisks: DDIRisk[];
}

interface PatientsState {
  patients: Patient[];
  filteredPatients: Patient[];
  searchTerm: string;
  isSearching: boolean;
  currentPage: number;
  itemsPerPage: number;
  totalPages: number;
  currentView: 'list' | 'detail';
  selectedPatientId: string | null;
  setSearchTerm: (term: string) => void;
  searchPatients: (term: string) => Promise<void>;
  clearSearch: () => void;
  setCurrentView: (view: 'list' | 'detail') => void;
  setSelectedPatientId: (id: string | null) => void;
  setCurrentPage: (page: number) => void;
  getPatientById: (id: string) => Patient | undefined;
  getPaginatedPatients: () => Patient[];
}

const profileImg = '/user-img.png';

const mockPatients: Patient[] = [
  {
    id: '1',
    name: 'John Doe',
    dateOfBirth: '9 Mar 1990',
    age: 35,
    gender: 'Male',
    contact: '+233 540077343',
    email: 'johndoe@example.com',
    address: '123 Main Street, Accra, Ghana',
    pharmacy: 'Humble Pharmacy',
    lastVisit: '7 May, 2025',
    avatar: profileImg,
    medicalConditions: [
      { id: '1', name: 'Hypertension', severity: 'Moderate' },
      { id: '2', name: 'Diabetes', severity: 'High' },
    ],
    allergies: [
      { id: '1', name: 'Penicillin', severity: 'Severe' },
      { id: '2', name: 'Sulfa Drugs', severity: 'Moderate' },
    ],
    medications: [
      {
        id: '1',
        name: 'Lisinopril',
        dosage: '10mg',
        frequency: 'Once daily',
        startDate: '15 Mar, 2025',
        endDate: 'Ongoing',
        status: 'Ongoing',
      },
      {
        id: '2',
        name: 'Metformin',
        dosage: '500mg',
        frequency: 'Twice daily',
        startDate: '2023-02-10',
        endDate: 'Ongoing',
        status: 'Ongoing',
      },
      {
        id: '3',
        name: 'Aspirin',
        dosage: '81mg',
        frequency: 'Once daily',
        startDate: '15 Mar, 2025',
        endDate: 'Ongoing',
        status: 'Ongoing',
      },
    ],
    ddiRisks: [
      {
        id: '1',
        severity: 'High',
        drugs: ['Aspirin', 'Warfarin'],
        description:
          'The combination of Aspirin and Warfarin significantly increases the risk of bleeding. Both medications affect blood clotting through different mechanisms, and their combined effect can be dangerous.',
        recommendations: [
          'Consider alternative to Aspirin such as Acetaminophen for pain relief',
          'If both medications are necessary, reduce Warfarin dosage and monitor INR closely',
          'Educate patient about bleeding risk signs and when to seek medical attention',
          'Schedule more frequent follow-ups to monitor for adverse effects',
        ],
      },
      {
        id: '2',
        severity: 'Moderate',
        drugs: ['Lisinopril', 'Metformin'],
        description:
          'Lisinopril (ACE inhibitor) and Metformin (antidiabetic) may interact. ACE inhibitors can potentially enhance the blood glucose-lowering effect of Metformin, increasing the risk of hypoglycemia.',
        recommendations: [
          'Monitor blood glucose levels more frequently',
          'Adjust Metformin dosage if necessary',
          'Educate patient about hypoglycemia symptoms and management',
        ],
      },
    ],
  },
  {
    id: '2',
    name: 'Phoenix Baker',
    dateOfBirth: '15 Jul 1995',
    age: 30,
    gender: 'Female',
    contact: '0540077344',
    email: 'phoenix.baker@example.com',
    address: '456 Oak Avenue, Kumasi, Ghana',
    pharmacy: 'Care Pharmacy',
    lastVisit: '12 May, 2025',
    avatar: profileImg,
    medicalConditions: [],
    allergies: [],
    medications: [],
    ddiRisks: [],
  },
  {
    id: '3',
    name: 'Lana Steiner',
    dateOfBirth: '22 Dec 1988',
    age: 37,
    gender: 'Female',
    contact: '0540077345',
    email: 'lana.steiner@example.com',
    address: '789 Pine Street, Tamale, Ghana',
    pharmacy: 'Health Plus',
    lastVisit: '3 May, 2025',
    avatar: profileImg,
    medicalConditions: [{ id: '3', name: 'Asthma', severity: 'Moderate' }],
    allergies: [],
    medications: [
      {
        id: '4',
        name: 'Albuterol',
        dosage: '100mcg',
        frequency: 'As needed',
        startDate: '1 Jan, 2023',
        endDate: 'Ongoing',
        status: 'Ongoing',
      },
    ],
    ddiRisks: [],
  },
  {
    id: '4',
    name: 'Demi Wilkinson',
    dateOfBirth: '5 Jun 1992',
    age: 33,
    gender: 'Male',
    contact: '0540077346',
    email: 'demi.wilkinson@example.com',
    address: '321 Maple Drive, Cape Coast, Ghana',
    pharmacy: 'MedCare Pharmacy',
    lastVisit: '15 Apr, 2025',
    avatar: profileImg,
    medicalConditions: [],
    allergies: [],
    medications: [],
    ddiRisks: [],
  },
  {
    id: '5',
    name: 'Candice Wu',
    dateOfBirth: '18 Feb 1985',
    age: 40,
    gender: 'Female',
    contact: '0540077347',
    email: 'candice.wu@example.com',
    address: '654 Cedar Lane, Takoradi, Ghana',
    pharmacy: 'Community Pharmacy',
    lastVisit: '20 May, 2025',
    avatar: profileImg,
    medicalConditions: [],
    allergies: [],
    medications: [],
    ddiRisks: [],
  },
  {
    id: '6',
    name: 'Natali Craig',
    dateOfBirth: '11 Oct 1990',
    age: 35,
    gender: 'Female',
    contact: '0540077348',
    email: 'natali.craig@example.com',
    address: '987 Birch Boulevard, Ho, Ghana',
    pharmacy: 'Humble Pharmacy',
    lastVisit: '8 May, 2025',
    avatar: profileImg,
    medicalConditions: [],
    allergies: [],
    medications: [],
    ddiRisks: [],
  },
  {
    id: '7',
    name: 'Drew Cano',
    dateOfBirth: '27 Aug 1987',
    age: 38,
    gender: 'Male',
    contact: '0540077349',
    email: 'drew.cano@example.com',
    address: '147 Elm Street, Sunyani, Ghana',
    pharmacy: 'Care Pharmacy',
    lastVisit: '1 May, 2025',
    avatar: profileImg,
    medicalConditions: [],
    allergies: [],
    medications: [],
    ddiRisks: [],
  },
  {
    id: '8',
    name: 'Orlando Diggs',
    dateOfBirth: '3 Jan 1993',
    age: 32,
    gender: 'Male',
    contact: '0540077350',
    email: 'orlando.diggs@example.com',
    address: '258 Willow Way, Koforidua, Ghana',
    pharmacy: 'Health Plus',
    lastVisit: '25 Apr, 2025',
    avatar: profileImg,
    medicalConditions: [],
    allergies: [],
    medications: [],
    ddiRisks: [],
  },
  {
    id: '9',
    name: 'Andi Lane',
    dateOfBirth: '14 Sep 1989',
    age: 36,
    gender: 'Female',
    contact: '0540077351',
    email: 'andi.lane@example.com',
    address: '369 Spruce Circle, Wa, Ghana',
    pharmacy: 'MedCare Pharmacy',
    lastVisit: '18 May, 2025',
    avatar: profileImg,
    medicalConditions: [],
    allergies: [],
    medications: [],
    ddiRisks: [],
  },
  {
    id: '10',
    name: 'Kate Morrison',
    dateOfBirth: '30 Apr 1991',
    age: 34,
    gender: 'Female',
    contact: '0540077352',
    email: 'kate.morrison@example.com',
    address: '741 Poplar Place, Bolgatanga, Ghana',
    pharmacy: 'Community Pharmacy',
    lastVisit: '10 May, 2025',
    avatar: profileImg,
    medicalConditions: [],
    allergies: [],
    medications: [],
    ddiRisks: [],
  },
];

export const usePatientsStore = create<PatientsState>((set, get) => ({
  patients: mockPatients,
  filteredPatients: mockPatients,
  searchTerm: '',
  isSearching: false,
  currentPage: 1,
  itemsPerPage: 10,
  totalPages: Math.ceil(mockPatients.length / 10),
  currentView: 'list',
  selectedPatientId: null,

  setSearchTerm: (term: string) => {
    set({ searchTerm: term });
  },

  searchPatients: async (term: string) => {
    set({ isSearching: true });

    // Simulate API call delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const filtered =
      term.trim() === ''
        ? get().patients
        : get().patients.filter(
            (patient) =>
              patient.name.toLowerCase().includes(term.toLowerCase()) ||
              patient.contact.includes(term) ||
              patient.pharmacy.toLowerCase().includes(term.toLowerCase())
          );

    set({
      filteredPatients: filtered,
      isSearching: false,
      currentPage: 1,
      totalPages: Math.ceil(filtered.length / get().itemsPerPage),
    });
  },

  clearSearch: () => {
    set({
      searchTerm: '',
      filteredPatients: get().patients,
      currentPage: 1,
      totalPages: Math.ceil(get().patients.length / get().itemsPerPage),
    });
  },

  setCurrentView: (view: 'list' | 'detail') => {
    set({ currentView: view });
  },

  setSelectedPatientId: (id: string | null) => {
    set({ selectedPatientId: id });
  },

  setCurrentPage: (page: number) => {
    set({ currentPage: page });
  },

  getPatientById: (id: string) => {
    return get().patients.find((patient) => patient.id === id);
  },

  getPaginatedPatients: () => {
    const { filteredPatients, currentPage, itemsPerPage } = get();
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return filteredPatients.slice(startIndex, endIndex);
  },
}));
