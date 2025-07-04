import { create } from "zustand";

export interface Product {
  readonly id: string;
  readonly name: string;
  readonly category: string;
  readonly description: string;
  readonly price: string;
  readonly stock: number;
  readonly totalSold: number;
  readonly performance: "Excellent" | "Good" | "Best" | "Poor";
  readonly performanceColor: "success" | "primary" | "warning" | "danger";
  readonly visibility: boolean;
  readonly sku: string;
  readonly supplier: string;
  readonly createdAt: string;
  readonly updatedAt: string;
  readonly status: "Active" | "Inactive" | "Out of Stock";
  readonly statusColor: "green" | "gray" | "red";
  readonly imageUrl?: string;
}

interface ProductsState {
  readonly products: Product[];
  readonly filteredProducts: Product[];
  readonly searchTerm: string;
  readonly categoryFilter: string;
  readonly statusFilter: string;
  readonly itemsPerPage: number;
  readonly currentPage: number;
  readonly totalPages: number;
  readonly isSearching: boolean;
  readonly selectedProduct: Product | null;

  readonly setSearchTerm: (term: string) => void;
  readonly setCategoryFilter: (category: string) => void;
  readonly setStatusFilter: (status: string) => void;
  readonly setItemsPerPage: (count: number) => void;
  readonly setCurrentPage: (page: number) => void;
  readonly searchProducts: () => void;
  readonly clearSearch: () => void;
  readonly addProduct: (
    product: Omit<Product, "id" | "createdAt" | "updatedAt">
  ) => void;
  readonly updateProduct: (id: string, updates: Partial<Product>) => void;
  readonly updateProductStatus: (id: string, status: Product["status"]) => void;
  readonly deleteProduct: (id: string) => void;
  readonly getProductById: (id: string) => Product | undefined;
  readonly getPaginatedProducts: () => Product[];
  readonly setSelectedProduct: (product: Product | null) => void;
  readonly toggleProductVisibility: (id: string) => void;
}

export const mockProducts: Product[] = [
  {
    id: "PRD001",
    name: "Paracetamol 500mg Tablets",
    category: "Pain Relief",
    description: "Effective pain relief and fever reducer",
    price: "₵15.00",
    stock: 500,
    totalSold: 1200,
    performance: "Excellent",
    performanceColor: "success",
    visibility: true,
    sku: "PAR-500-100",
    supplier: "MedSupply Ghana Ltd",
    createdAt: "2024-01-15T10:30:00Z",
    updatedAt: "2024-01-20T14:45:00Z",
    status: "Active",
    statusColor: "green",
    imageUrl: "/products/paracetamol.jpg",
  },
  {
    id: "PRD002",
    name: "Ibuprofen 400mg Capsules",
    category: "Pain Relief",
    description: "Anti-inflammatory and pain relief medication",
    price: "₵25.00",
    stock: 300,
    totalSold: 800,
    performance: "Good",
    performanceColor: "success",
    visibility: true,
    sku: "IBU-400-50",
    supplier: "Pharma Distribution Co.",
    createdAt: "2024-01-10T08:15:00Z",
    updatedAt: "2024-01-18T16:20:00Z",
    status: "Active",
    statusColor: "green",
    imageUrl: "/products/ibuprofen.jpg",
  },
  {
    id: "PRD003",
    name: "Vitamin C 1000mg Tablets",
    category: "Vitamins",
    description: "Immune system support supplement",
    price: "₵35.00",
    stock: 0,
    totalSold: 450,
    performance: "Good",
    performanceColor: "success",
    visibility: false,
    sku: "VIT-C-1000-60",
    supplier: "HealthCare Supplies",
    createdAt: "2024-01-05T12:00:00Z",
    updatedAt: "2024-01-19T09:30:00Z",
    status: "Out of Stock",
    statusColor: "red",
    imageUrl: "/products/vitamin-c.jpg",
  },
  {
    id: "PRD004",
    name: "Amoxicillin 250mg Capsules",
    category: "Antibiotics",
    description: "Broad-spectrum antibiotic for bacterial infections",
    price: "₵45.00",
    stock: 150,
    totalSold: 600,
    performance: "Best",
    performanceColor: "primary",
    visibility: true,
    sku: "AMX-250-20",
    supplier: "Global Med Solutions",
    createdAt: "2024-01-12T14:20:00Z",
    updatedAt: "2024-01-21T11:15:00Z",
    status: "Active",
    statusColor: "green",
    imageUrl: "/products/amoxicillin.jpg",
  },
  {
    id: "PRD005",
    name: "Omeprazole 20mg Tablets",
    category: "Gastric",
    description: "Proton pump inhibitor for acid reflux",
    price: "₵55.00",
    stock: 200,
    totalSold: 350,
    performance: "Good",
    performanceColor: "success",
    visibility: true,
    sku: "OMP-20-30",
    supplier: "Reliable Pharma Supply",
    createdAt: "2024-01-08T09:45:00Z",
    updatedAt: "2024-01-17T13:25:00Z",
    status: "Active",
    statusColor: "green",
    imageUrl: "/products/omeprazole.jpg",
  },
  {
    id: "PRD006",
    name: "Cetirizine 10mg Tablets",
    category: "Antihistamines",
    description: "Allergy relief medication",
    price: "₵20.00",
    stock: 400,
    totalSold: 900,
    performance: "Best",
    performanceColor: "primary",
    visibility: true,
    sku: "CET-10-20",
    supplier: "Northern Med Distributors",
    createdAt: "2024-01-14T11:30:00Z",
    updatedAt: "2024-01-22T10:00:00Z",
    status: "Active",
    statusColor: "green",
    imageUrl: "/products/cetirizine.jpg",
  },
  {
    id: "PRD007",
    name: "Metformin 500mg Tablets",
    category: "Diabetes",
    description: "Type 2 diabetes management medication",
    price: "₵30.00",
    stock: 250,
    totalSold: 700,
    performance: "Excellent",
    performanceColor: "success",
    visibility: true,
    sku: "MET-500-100",
    supplier: "Coast Medical Supplies",
    createdAt: "2024-01-09T15:10:00Z",
    updatedAt: "2024-01-16T12:40:00Z",
    status: "Active",
    statusColor: "green",
    imageUrl: "/products/metformin.jpg",
  },
  {
    id: "PRD008",
    name: "Aspirin 75mg Tablets",
    category: "Cardiovascular",
    description: "Low-dose aspirin for heart health",
    price: "₵12.00",
    stock: 600,
    totalSold: 1100,
    performance: "Good",
    performanceColor: "success",
    visibility: false,
    sku: "ASP-75-100",
    supplier: "Elite Pharmaceutical Ltd",
    createdAt: "2024-01-06T13:25:00Z",
    updatedAt: "2024-01-15T08:50:00Z",
    status: "Inactive",
    statusColor: "gray",
    imageUrl: "/products/aspirin.jpg",
  },
];

export const useProductsStore = create<ProductsState>((set, get) => ({
  products: mockProducts,
  filteredProducts: mockProducts,
  searchTerm: "",
  categoryFilter: "All",
  statusFilter: "All",
  itemsPerPage: 10,
  currentPage: 1,
  totalPages: Math.ceil(mockProducts.length / 10),
  isSearching: false,
  selectedProduct: null,

  setSearchTerm: (term) => set({ searchTerm: term }),

  setCategoryFilter: (category) => set({ categoryFilter: category }),

  setStatusFilter: (status) => set({ statusFilter: status }),

  setItemsPerPage: (count) => {
    const { filteredProducts } = get();
    set({
      itemsPerPage: count,
      currentPage: 1,
      totalPages: Math.ceil(filteredProducts.length / count),
    });
  },

  setCurrentPage: (page) => set({ currentPage: page }),

  searchProducts: () => {
    set({ isSearching: true });

    setTimeout(() => {
      const {
        products,
        searchTerm,
        categoryFilter,
        statusFilter,
        itemsPerPage,
      } = get();

      let filtered = products;

      // Filter by search term
      if (searchTerm.trim()) {
        const term = searchTerm.toLowerCase();
        filtered = filtered.filter(
          (product) =>
            product.name.toLowerCase().includes(term) ||
            product.category.toLowerCase().includes(term) ||
            product.sku.toLowerCase().includes(term) ||
            product.supplier.toLowerCase().includes(term)
        );
      }

      // Filter by category
      if (categoryFilter !== "All") {
        filtered = filtered.filter(
          (product) => product.category === categoryFilter
        );
      }

      // Filter by status
      if (statusFilter !== "All") {
        filtered = filtered.filter(
          (product) => product.status === statusFilter
        );
      }

      set({
        filteredProducts: filtered,
        currentPage: 1,
        totalPages: Math.ceil(filtered.length / itemsPerPage),
        isSearching: false,
      });
    }, 500);
  },

  clearSearch: () => {
    const { products, itemsPerPage } = get();
    set({
      searchTerm: "",
      categoryFilter: "All",
      statusFilter: "All",
      filteredProducts: products,
      currentPage: 1,
      totalPages: Math.ceil(products.length / itemsPerPage),
      isSearching: false,
    });
  },

  addProduct: (productData) => {
    const newProduct: Product = {
      ...productData,
      id: `PRD${String(Date.now()).slice(-3)}`,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      status: "Active",
      statusColor: "green",
    };

    const { products, itemsPerPage } = get();
    const updatedProducts = [newProduct, ...products];

    set({
      products: updatedProducts,
      filteredProducts: updatedProducts,
      totalPages: Math.ceil(updatedProducts.length / itemsPerPage),
    });
  },

  updateProduct: (id, updates) => {
    const { products, filteredProducts } = get();

    const updateProductInArray = (arr: Product[]) =>
      arr.map((product) =>
        product.id === id
          ? { ...product, ...updates, updatedAt: new Date().toISOString() }
          : product
      );

    set({
      products: updateProductInArray(products),
      filteredProducts: updateProductInArray(filteredProducts),
    });
  },

  updateProductStatus: (id, status) => {
    const statusColor: Record<Product["status"], Product["statusColor"]> = {
      Active: "green",
      Inactive: "gray",
      "Out of Stock": "red",
    };

    get().updateProduct(id, { status, statusColor: statusColor[status] });
  },

  deleteProduct: (id) => {
    const { products, filteredProducts, itemsPerPage } = get();

    const newProducts = products.filter((product) => product.id !== id);
    const newFilteredProducts = filteredProducts.filter(
      (product) => product.id !== id
    );

    set({
      products: newProducts,
      filteredProducts: newFilteredProducts,
      totalPages: Math.ceil(newFilteredProducts.length / itemsPerPage),
    });
  },

  getProductById: (id) => {
    const { products } = get();
    return products.find((product) => product.id === id);
  },

  getPaginatedProducts: () => {
    const { filteredProducts, currentPage, itemsPerPage } = get();
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return filteredProducts.slice(startIndex, endIndex);
  },

  setSelectedProduct: (product) => set({ selectedProduct: product }),

  toggleProductVisibility: (id) => {
    const { products } = get();
    const product = products.find((p) => p.id === id);

    if (product) {
      get().updateProduct(id, { visibility: !product.visibility });
    }
  },
}));
