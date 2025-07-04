import { Patient, Pharmacy, Supplier, ViewType } from "@/store/analytics";

export interface SearchFilters {
  readonly searchTerm: string;
  readonly dateRange?: {
    readonly from: Date;
    readonly to: Date;
  };
  readonly status?: string;
  readonly location?: string;
}

export function filterPatients(
  patients: readonly Patient[],
  filters: SearchFilters
): readonly Patient[] {
  let filtered = [...patients];

  if (filters.searchTerm) {
    const term = filters.searchTerm.toLowerCase();
    filtered = filtered.filter(
      (patient) =>
        patient.name.toLowerCase().includes(term) ||
        patient.contact.includes(term) ||
        patient.associatedPharmacy.toLowerCase().includes(term) ||
        patient.gender.toLowerCase().includes(term)
    );
  }

  return filtered;
}

export function filterPharmacies(
  pharmacies: readonly Pharmacy[],
  filters: SearchFilters
): readonly Pharmacy[] {
  let filtered = [...pharmacies];

  if (filters.searchTerm) {
    const term = filters.searchTerm.toLowerCase();
    filtered = filtered.filter(
      (pharmacy) =>
        pharmacy.pharmacyName.toLowerCase().includes(term) ||
        pharmacy.email.toLowerCase().includes(term) ||
        pharmacy.type.toLowerCase().includes(term) ||
        pharmacy.location.toLowerCase().includes(term)
    );
  }

  if (filters.status) {
    filtered = filtered.filter(
      (pharmacy) => pharmacy.status === filters.status
    );
  }

  if (filters.location) {
    filtered = filtered.filter(
      (pharmacy) => pharmacy.location === filters.location
    );
  }

  return filtered;
}

export function filterSuppliers(
  suppliers: readonly Supplier[],
  filters: SearchFilters
): readonly Supplier[] {
  let filtered = [...suppliers];

  if (filters.searchTerm) {
    const term = filters.searchTerm.toLowerCase();
    filtered = filtered.filter(
      (supplier) =>
        supplier.supplier.toLowerCase().includes(term) ||
        supplier.email.toLowerCase().includes(term) ||
        supplier.product.toLowerCase().includes(term) ||
        supplier.location.toLowerCase().includes(term)
    );
  }

  if (filters.location) {
    filtered = filtered.filter(
      (supplier) => supplier.location === filters.location
    );
  }

  return filtered;
}

export function getFilteredData(
  viewType: ViewType,
  data: readonly (Patient | Pharmacy | Supplier)[],
  filters: SearchFilters
) {
  switch (viewType) {
    case "patients":
      return filterPatients(data as readonly Patient[], filters);
    case "pharmacies":
      return filterPharmacies(data as readonly Pharmacy[], filters);
    case "suppliers":
      return filterSuppliers(data as readonly Supplier[], filters);
    default:
      return data;
  }
}

export function calculateAnalyticsStats(
  patients: readonly Patient[],
  pharmacies: readonly Pharmacy[],
  suppliers: readonly Supplier[]
) {
  const activePharmacies = pharmacies.filter(
    (p) => p.status === "active"
  ).length;
  const pendingPharmacies = pharmacies.filter(
    (p) => p.status === "pending"
  ).length;

  return {
    patients: patients.length,
    pharmacies: activePharmacies,
    suppliers: suppliers.length,
    pendingOrders: pendingPharmacies * 10, // Mock calculation
  };
}

export function paginateData<T>(
  data: readonly T[],
  page: number,
  pageSize: number = 10
): readonly T[] {
  const startIndex = (page - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  return data.slice(startIndex, endIndex);
}

export function getTotalPages(
  totalItems: number,
  pageSize: number = 10
): number {
  return Math.ceil(totalItems / pageSize);
}
