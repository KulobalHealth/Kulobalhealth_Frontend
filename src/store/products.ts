import { create } from "zustand";

export interface Product {
  readonly imageUrl?: string;
  // Mock-only fields for compatibility
  readonly name?: string;
  readonly category?: string;
  readonly stock?: number;
  readonly totalSold?: number;
  readonly performance?: "Excellent" | "Good" | "Best" | "Poor";
  readonly performanceColor?: "success" | "primary" | "warning" | "danger";
  readonly visibility?: boolean;
  readonly productId: string;
  readonly productName: string;
  readonly productType: string;
  readonly productTypeCode: string;
  readonly price: number;
  readonly brand: string;
  readonly manufacturer: string;
  readonly description: string;
  readonly photos: string[];
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
  // API-driven: updateProduct, updateProductStatus, deleteProduct handled via API
  readonly getProductById: (id: string) => Product | undefined;
  readonly getPaginatedProducts: () => Product[];
  readonly setSelectedProduct: (product: Product | null) => void;
  readonly toggleProductVisibility: (id: string) => void;
}

export const mockProducts: Product[] = [
  {
    productId: "PRD001",
    productName: "Paracetamol 500mg Tablets",
    productType: "Pain Relief",
    productTypeCode: "PAIN_RELIEF",
    price: 15,
    brand: "Med Supplies Ltd.",
    manufacturer: "Med Supplies Ltd.",
    description: "Effective pain relief and fever reducer",
    photos: ["/products/paracetamol.jpg"],
  },
  {
    productId: "PRD002",
    productName: "Ibuprofen 400mg Capsules",
    productType: "Pain Relief",
    productTypeCode: "PAIN_RELIEF",
    price: 25,
    brand: "Pharma Distribution Co.",
    manufacturer: "Pharma Distribution Co.",
    description: "Anti-inflammatory and pain relief medication",
    photos: ["/products/ibuprofen.jpg"],
  },
  {
    productId: "PRD003",
    productName: "Vitamin C 1000mg Tablets",
    productType: "Vitamins",
    productTypeCode: "VITAMINS",
    price: 35,
    brand: "HealthCare Supplies",
    manufacturer: "HealthCare Supplies",
    description: "Immune system support supplement",
    photos: ["/products/vitamin-c.jpg"],
  },
  {
    productId: "PRD004",
    productName: "Amoxicillin 250mg Capsules",
    productType: "Antibiotics",
    productTypeCode: "ANTIBIOTICS",
    price: 45,
    brand: "Global Med Solutions",
    manufacturer: "Global Med Solutions",
    description: "Broad-spectrum antibiotic for bacterial infections",
    photos: ["/products/amoxicillin.jpg"],
  },
  {
    productId: "PRD005",
    productName: "Omeprazole 20mg Tablets",
    productType: "Gastric",
    productTypeCode: "GASTRIC",
    price: 55,
    brand: "Reliable Pharma Supply",
    manufacturer: "Reliable Pharma Supply",
    description: "Proton pump inhibitor for acid reflux",
    photos: ["/products/omeprazole.jpg"],
  },
  {
    productId: "PRD006",
    productName: "Cetirizine 10mg Tablets",
    productType: "Antihistamines",
    productTypeCode: "ANTIHISTAMINES",
    price: 20,
    brand: "Northern Med Distributors",
    manufacturer: "Northern Med Distributors",
    description: "Allergy relief medication",
    photos: ["/products/cetirizine.jpg"],
  },
  {
    productId: "PRD007",
    productName: "Metformin 500mg Tablets",
    productType: "Diabetes",
    productTypeCode: "DIABETES",
    price: 30,
    brand: "Coast Medical Supplies",
    manufacturer: "Coast Medical Supplies",
    description: "Type 2 diabetes management medication",
    photos: ["/products/metformin.jpg"],
  },
  {
    productId: "PRD008",
    productName: "Aspirin 75mg Tablets",
    productType: "Cardiovascular",
    productTypeCode: "CARDIOVASCULAR",
    price: 12,
    brand: "Elite Pharmaceutical Ltd",
    manufacturer: "Elite Pharmaceutical Ltd",
    description: "Low-dose aspirin for heart health",
    photos: ["/products/aspirin.jpg"],
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
      const { products, searchTerm, itemsPerPage } = get();

      let filtered = products;

      // Filter by search term (productName, productType, brand, manufacturer, description)
      if (searchTerm.trim()) {
        const term = searchTerm.toLowerCase();
        filtered = filtered.filter(
          (product) =>
            product.productName.toLowerCase().includes(term) ||
            product.productType.toLowerCase().includes(term) ||
            product.brand.toLowerCase().includes(term) ||
            product.manufacturer.toLowerCase().includes(term) ||
            product.description.toLowerCase().includes(term)
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
      filteredProducts: products,
      currentPage: 1,
      totalPages: Math.ceil(products.length / itemsPerPage),
      isSearching: false,
    });
  },

  addProduct: (productData) => {
    const newProduct: Product = {
      ...productData,
      productId: `PRD${String(Date.now()).slice(-3)}`,
    };

    const { products, itemsPerPage } = get();
    const updatedProducts = [newProduct, ...products];

    set({
      products: updatedProducts,
      filteredProducts: updatedProducts,
      totalPages: Math.ceil(updatedProducts.length / itemsPerPage),
    });
  },

  // Removed local updateProduct, updateProductStatus, and deleteProduct implementations. Use API mutations instead.

  getProductById: (id) => {
    const { products } = get();
    return products.find((product) => product.productId === id);
  },

  getPaginatedProducts: () => {
    const { filteredProducts, currentPage, itemsPerPage } = get();
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return filteredProducts.slice(startIndex, endIndex);
  },

  setSelectedProduct: (product) => set({ selectedProduct: product }),

  toggleProductVisibility: (id) => {
    // No-op: visibility logic removed, not present in API
  },
}));
