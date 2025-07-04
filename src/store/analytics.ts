export interface Patient {
  readonly id: string;
  readonly avatar: string;
  readonly name: string;
  readonly dateOfBirth: string;
  readonly gender: "Male" | "Female" | "Other";
  readonly contact: string;
  readonly associatedPharmacy: string;
  readonly lastVisit: string;
}

export interface Pharmacy {
  readonly id: string;
  readonly pharmacyName: string;
  readonly email: string;
  readonly type: string;
  readonly contact: string;
  readonly location: string;
  readonly page: string;
  readonly status: "active" | "rejected" | "pending";
}

export interface Supplier {
  readonly id: string;
  readonly supplier: string;
  readonly email: string;
  readonly product: string;
  readonly location: string;
  readonly page: string;
  readonly date: string;
}

export interface AnalyticsStats {
  readonly patients: number;
  readonly pharmacies: number;
  readonly suppliers: number;
  readonly pendingOrders: number;
}

export interface TableColumn {
  readonly key: string;
  readonly label: string;
  readonly width?: string;
  readonly sortable?: boolean;
}

export type ViewType = "patients" | "pharmacies" | "suppliers";

// Mock data with proper typing
export const mockPatients: readonly Patient[] = [
  {
    id: "1",
    avatar: "OR",
    name: "Olivia Rhye",
    dateOfBirth: "9 May 2000",
    gender: "Female",
    contact: "054077343",
    associatedPharmacy: "Humble Pharmacy",
    lastVisit: "7 May, 2025",
  },
  {
    id: "2",
    avatar: "PB",
    name: "Phoenix Baker",
    dateOfBirth: "9 May 2000",
    gender: "Female",
    contact: "054077343",
    associatedPharmacy: "Humble Pharmacy",
    lastVisit: "7 May, 2025",
  },
  {
    id: "3",
    avatar: "LS",
    name: "Lana Steiner",
    dateOfBirth: "9 May 2000",
    gender: "Male",
    contact: "054077343",
    associatedPharmacy: "Humble Pharmacy",
    lastVisit: "7 May, 2025",
  },
  {
    id: "4",
    avatar: "DW",
    name: "Demi Wilkinson",
    dateOfBirth: "9 May 2000",
    gender: "Male",
    contact: "054077343",
    associatedPharmacy: "Humble Pharmacy",
    lastVisit: "7 May, 2025",
  },
  {
    id: "5",
    avatar: "CW",
    name: "Candice Wu",
    dateOfBirth: "9 May 2000",
    gender: "Female",
    contact: "054077343",
    associatedPharmacy: "Humble Pharmacy",
    lastVisit: "7 May, 2025",
  },
  {
    id: "6",
    avatar: "NA",
    name: "Natali Craig",
    dateOfBirth: "15 March 1995",
    gender: "Female",
    contact: "054088554",
    associatedPharmacy: "Care Plus Pharmacy",
    lastVisit: "3 May, 2025",
  },
  {
    id: "7",
    avatar: "DL",
    name: "Drew Cano",
    dateOfBirth: "22 September 1988",
    gender: "Male",
    contact: "054099665",
    associatedPharmacy: "Health First Pharmacy",
    lastVisit: "1 May, 2025",
  },
  {
    id: "8",
    avatar: "KB",
    name: "Kate Morrison",
    dateOfBirth: "10 July 1992",
    gender: "Female",
    contact: "054010776",
    associatedPharmacy: "Humble Pharmacy",
    lastVisit: "29 April, 2025",
  },
  {
    id: "9",
    avatar: "KP",
    name: "Koray Okumus",
    dateOfBirth: "5 November 1985",
    gender: "Male",
    contact: "054021887",
    associatedPharmacy: "Care Plus Pharmacy",
    lastVisit: "28 April, 2025",
  },
  {
    id: "10",
    avatar: "EM",
    name: "Emi Morgan",
    dateOfBirth: "18 January 1990",
    gender: "Female",
    contact: "054032998",
    associatedPharmacy: "Health First Pharmacy",
    lastVisit: "26 April, 2025",
  },
  {
    id: "11",
    avatar: "AG",
    name: "Alex Grant",
    dateOfBirth: "12 June 1993",
    gender: "Male",
    contact: "054043100",
    associatedPharmacy: "Humble Pharmacy",
    lastVisit: "25 April, 2025",
  },
  {
    id: "12",
    avatar: "SW",
    name: "Sarah Wilson",
    dateOfBirth: "30 August 1987",
    gender: "Female",
    contact: "054054211",
    associatedPharmacy: "Care Plus Pharmacy",
    lastVisit: "24 April, 2025",
  },
  {
    id: "13",
    avatar: "MJ",
    name: "Michael Johnson",
    dateOfBirth: "7 February 1991",
    gender: "Male",
    contact: "054065322",
    associatedPharmacy: "Health First Pharmacy",
    lastVisit: "23 April, 2025",
  },
  {
    id: "14",
    avatar: "LB",
    name: "Lisa Brown",
    dateOfBirth: "14 December 1989",
    gender: "Female",
    contact: "054076433",
    associatedPharmacy: "Humble Pharmacy",
    lastVisit: "22 April, 2025",
  },
  {
    id: "15",
    avatar: "RT",
    name: "Robert Taylor",
    dateOfBirth: "3 April 1994",
    gender: "Male",
    contact: "054087544",
    associatedPharmacy: "Care Plus Pharmacy",
    lastVisit: "21 April, 2025",
  },
] as const;

export const mockPharmacies: readonly Pharmacy[] = [
  {
    id: "1",
    pharmacyName: "Humble Pharmacy",
    email: "eric@gmail.com",
    type: "Accredited",
    contact: "2",
    location: "GD",
    page: "Orlando Page",
    status: "active",
  },
  {
    id: "2",
    pharmacyName: "Care Plus Pharmacy",
    email: "contact@careplus.com",
    type: "Standard",
    contact: "9",
    location: "AS",
    page: "Main Page",
    status: "rejected",
  },
  {
    id: "3",
    pharmacyName: "Health First Pharmacy",
    email: "info@healthfirst.com",
    type: "Premium",
    contact: "5",
    location: "BA",
    page: "Health Page",
    status: "active",
  },
  {
    id: "4",
    pharmacyName: "MediCare Pharmacy",
    email: "contact@medicare.com",
    type: "Standard",
    contact: "7",
    location: "WR",
    page: "Medical Page",
    status: "pending",
  },
  {
    id: "5",
    pharmacyName: "Quick Health Pharmacy",
    email: "info@quickhealth.com",
    type: "Accredited",
    contact: "3",
    location: "TV",
    page: "Quick Page",
    status: "active",
  },
  {
    id: "6",
    pharmacyName: "Wellness Plus Pharmacy",
    email: "support@wellnessplus.com",
    type: "Premium",
    contact: "8",
    location: "ER",
    page: "Wellness Page",
    status: "rejected",
  },
  {
    id: "7",
    pharmacyName: "City Central Pharmacy",
    email: "city@central.com",
    type: "Standard",
    contact: "4",
    location: "GD",
    page: "Central Page",
    status: "active",
  },
  {
    id: "8",
    pharmacyName: "Family Health Pharmacy",
    email: "family@health.com",
    type: "Accredited",
    contact: "6",
    location: "AS",
    page: "Family Page",
    status: "pending",
  },
  {
    id: "9",
    pharmacyName: "Express Pharmacy",
    email: "express@pharmacy.com",
    type: "Standard",
    contact: "9",
    location: "BA",
    page: "Express Page",
    status: "active",
  },
  {
    id: "10",
    pharmacyName: "Modern Pharmacy",
    email: "modern@pharmacy.com",
    type: "Premium",
    contact: "1",
    location: "WR",
    page: "Modern Page",
    status: "rejected",
  },
  {
    id: "11",
    pharmacyName: "Community Pharmacy",
    email: "community@pharmacy.com",
    type: "Accredited",
    contact: "10",
    location: "TV",
    page: "Community Page",
    status: "active",
  },
  {
    id: "12",
    pharmacyName: "Regional Pharmacy",
    email: "regional@pharmacy.com",
    type: "Standard",
    contact: "12",
    location: "ER",
    page: "Regional Page",
    status: "pending",
  },
] as const;

export const mockSuppliers: readonly Supplier[] = [
  {
    id: "1",
    supplier: "MedSupply Corp",
    email: "contact@medsupply.com",
    product: "Medical Equipment",
    location: "GD",
    page: "Equipment Page",
    date: "2025-01-15",
  },
  {
    id: "2",
    supplier: "PharmaCorp Ltd",
    email: "info@pharmacorp.com",
    product: "Pharmaceuticals",
    location: "AS",
    page: "Pharma Page",
    date: "2025-01-10",
  },
  {
    id: "3",
    supplier: "Global Health Supplies",
    email: "sales@globalsupplies.com",
    product: "Lab Supplies",
    location: "BA",
    page: "Lab Page",
    date: "2025-01-20",
  },
  {
    id: "4",
    supplier: "MedTech Solutions",
    email: "contact@medtech.com",
    product: "Medical Devices",
    location: "WR",
    page: "Tech Page",
    date: "2025-01-18",
  },
  {
    id: "5",
    supplier: "HealthCare Imports",
    email: "imports@healthcare.com",
    product: "Imported Medicines",
    location: "TV",
    page: "Import Page",
    date: "2025-01-16",
  },
  {
    id: "6",
    supplier: "BioSupply Corp",
    email: "bio@supply.com",
    product: "Biological Products",
    location: "ER",
    page: "Bio Page",
    date: "2025-01-14",
  },
  {
    id: "7",
    supplier: "Surgical Supplies Ltd",
    email: "surgical@supplies.com",
    product: "Surgical Equipment",
    location: "GD",
    page: "Surgical Page",
    date: "2025-01-12",
  },
  {
    id: "8",
    supplier: "Generic Medicines Co",
    email: "generic@medicines.com",
    product: "Generic Drugs",
    location: "AS",
    page: "Generic Page",
    date: "2025-01-11",
  },
  {
    id: "9",
    supplier: "Diagnostic Equipment Inc",
    email: "diagnostic@equipment.com",
    product: "Diagnostic Tools",
    location: "BA",
    page: "Diagnostic Page",
    date: "2025-01-09",
  },
  {
    id: "10",
    supplier: "Wellness Products Ltd",
    email: "wellness@products.com",
    product: "Wellness Products",
    location: "WR",
    page: "Wellness Page",
    date: "2025-01-08",
  },
  {
    id: "11",
    supplier: "Emergency Medical Supplies",
    email: "emergency@medical.com",
    product: "Emergency Kits",
    location: "TV",
    page: "Emergency Page",
    date: "2025-01-07",
  },
  {
    id: "12",
    supplier: "Digital Health Solutions",
    email: "digital@health.com",
    product: "Digital Health Tools",
    location: "ER",
    page: "Digital Page",
    date: "2025-01-06",
  },
] as const;

export const patientColumns: readonly TableColumn[] = [
  { key: "avatar", label: "", width: "w-12" },
  { key: "name", label: "Name", sortable: true },
  { key: "dateOfBirth", label: "Date of Birth", sortable: true },
  { key: "gender", label: "Gender" },
  { key: "contact", label: "Contact" },
  { key: "associatedPharmacy", label: "Associated Pharmacy", sortable: true },
  { key: "lastVisit", label: "Last Visit", sortable: true },
  { key: "actions", label: "Actions", width: "w-16" },
] as const;

export const pharmacyColumns: readonly TableColumn[] = [
  { key: "pharmacyName", label: "Pharmacy Name", sortable: true },
  { key: "email", label: "Email" },
  { key: "type", label: "Type", sortable: true },
  { key: "contact", label: "Contact" },
  { key: "location", label: "Location", sortable: true },
  { key: "page", label: "Page" },
  { key: "status", label: "Status", sortable: true },
  { key: "actions", label: "Actions", width: "w-16" },
] as const;

export const supplierColumns: readonly TableColumn[] = [
  { key: "supplier", label: "Supplier", sortable: true },
  { key: "email", label: "Email" },
  { key: "product", label: "Product", sortable: true },
  { key: "location", label: "Location", sortable: true },
  { key: "page", label: "Page" },
  { key: "date", label: "Date", sortable: true },
  { key: "actions", label: "Actions", width: "w-16" },
] as const;
