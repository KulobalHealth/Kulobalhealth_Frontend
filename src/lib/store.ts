import { create } from "zustand";
<<<<<<< HEAD
import medImg from "@/../public/med.png";

export interface Product {
  id: string;
  name: string;
  description: string;
  brand: string;
  category: string;
  price: number;
  images: string[];
  inStock: boolean;
  normalRange?: string;
  unit?: string;
  stockQuantity: number;
}

interface MarketplaceStore {
  products: Product[];
  selectedCategory: string;
  searchQuery: string;
  cart: { productId: string; quantity: number }[];
  setProducts: (products: Product[]) => void;
  setSelectedCategory: (category: string) => void;
  setSearchQuery: (query: string) => void;
  addToCart: (productId: string) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
}

export const useMarketplaceStore = create<MarketplaceStore>((set) => ({
  products: [
    {
      id: "1",
      name: "Malaria Test Kits",
      description:
        "Rapid diagnostic test for malaria detection. Results in 15-20 minutes.",
      brand: "OraSure Technologies",
      category: "Rapid Test Kits",
      price: 200.0,
      images: [medImg.src],
      inStock: true,
      normalRange: "Negative",
      unit: "Box",
      stockQuantity: 15,
    },
    {
      id: "2",
      name: "Digital Blood Pressure Monitor",
      description:
        "Automatic upper arm blood pressure monitor with digital display and memory function.",
      brand: "Omron",
      category: "Medical Devices",
      price: 450.0,
      images: [medImg.src],
      inStock: true,
      normalRange: "120/80 mmHg",
      unit: "Device",
      stockQuantity: 8,
    },
    {
      id: "3",
      name: "Glucose Test Strips",
      description:
        "Compatible test strips for glucose monitoring devices. Pack of 50.",
      brand: "AccuChek",
      category: "Diabetic Supplies",
      price: 320.0,
      images: [medImg.src],
      inStock: true,
      normalRange: "70-140 mg/dL",
      unit: "Pack",
      stockQuantity: 23,
    },
    {
      id: "4",
      name: "HIV Self-Test Kit",
      description:
        "Private, at-home testing kit for HIV with results in 20 minutes.",
      brand: "BioSure",
      category: "Rapid Test Kits",
      price: 580.0,
      images: [medImg.src],
      inStock: true,
      normalRange: "Negative",
      unit: "Kit",
      stockQuantity: 5,
    },
    {
      id: "5",
      name: "Digital Thermometer",
      description:
        "Fast-reading digital thermometer with fever alarm and memory function.",
      brand: "Braun",
      category: "Medical Devices",
      price: 120.0,
      images: [medImg.src],
      inStock: true,
      normalRange: "36.5-37.5°C",
      unit: "Device",
      stockQuantity: 12,
    },
    {
      id: "6",
      name: "Pregnancy Test Kit",
      description:
        "Early detection pregnancy test with over 99% accuracy. Results in 3 minutes.",
      brand: "ClearBlue",
      category: "Rapid Test Kits",
      price: 150.0,
      images: [medImg.src],
      inStock: false,
      normalRange: "N/A",
      unit: "Pack of 2",
      stockQuantity: 0,
    },
    // Add more products as needed
  ],
  selectedCategory: "All Products",
  searchQuery: "",
  cart: [],
  setProducts: (products) => set({ products }),
  setSelectedCategory: (category) => set({ selectedCategory: category }),
  setSearchQuery: (query) => set({ searchQuery: query }),
  addToCart: (productId) =>
    set((state) => {
      const existingItem = state.cart.find(
        (item) => item.productId === productId
      );
      if (existingItem) {
        return {
          cart: state.cart.map((item) =>
            item.productId === productId
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      }
      return {
        cart: [...state.cart, { productId, quantity: 1 }],
      };
    }),
  removeFromCart: (productId) =>
    set((state) => ({
      cart: state.cart.filter((item) => item.productId !== productId),
    })),
  updateQuantity: (productId, quantity) =>
    set((state) => ({
      cart: state.cart.map((item) =>
        item.productId === productId ? { ...item, quantity } : item
      ),
    })),
=======
import { mockAuth } from "./mock-auth";
import { mockProducts, mockOrders, mockPayments } from "./mock-data";
import type { User, Product, CartItem, Order, Payment } from "./types";

// Mock user is now imported from mock-auth.ts
const dummyUser = mockAuth.getMockUser();

// Helper function to find product by ID
const findProduct = (products: Product[], id: string) =>
  products.find((p) => p.id === id);

// Helper function to update cart item quantity
const updateCartItemQuantity = (
  cart: CartItem[],
  productId: string,
  quantity: number
) => {
  const existingItem = cart.find((item) => item.productId === productId);
  if (existingItem) {
    return cart.map((item) =>
      item.productId === productId
        ? { ...item, quantity: Math.max(0, quantity) }
        : item
    );
  }
  return [...cart, { productId, quantity }];
};

interface MarketplaceState {
  products: Product[];
  cart: CartItem[];
  orders: Order[];
  user: User | null;
  isAuthenticated: boolean;
  selectedCategory: string;
  searchQuery: string;
  payments: Payment[];
  addToCart: (productId: string) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  setSelectedCategory: (category: string) => void;
  setSearchQuery: (query: string) => void;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
  signup: (userData: {
    pharmacyName?: string;
    licenseNumber?: string;
    location?: string;
    branches?: number;
    email: string;
    password: string;
    role: "pharmacist" | "hospitalAdmin";
  }) => Promise<boolean>;
  getOrderById: (orderId: string) => Order | undefined;
  getPayments: () => Payment[];
}

export const useMarketplaceStore = create<MarketplaceState>((set, get) => ({
  // Initial state with mock data
  products: mockProducts,
  cart: [],
  orders: mockOrders,
  payments: mockPayments,
  user: null,
  isAuthenticated: false,
  selectedCategory: "All Products",
  searchQuery: "",

  getOrderById: (orderId: string) => {
    return get().orders.find((order) => order.id === orderId);
  },

  getPayments: () => {
    return get().payments;
  },

  addToCart: (productId: string) => {
    const { cart, products } = get();
    const product = findProduct(products, productId);
    if (!product || product.stockQuantity === 0) return;

    const existingItem = cart.find((item) => item.productId === productId);
    if (existingItem) {
      if (existingItem.quantity >= product.stockQuantity) return; // cap at stock
      set({
        cart: cart.map((item) =>
          item.productId === productId
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ),
      });
    } else {
      set({ cart: [...cart, { productId, quantity: 1 }] });
    }
  },

  removeFromCart: (productId: string) => {
    set({
      cart: get().cart.filter((item) => item.productId !== productId),
    });
  },

  updateQuantity: (productId: string, quantity: number) => {
    if (quantity <= 0) {
      get().removeFromCart(productId);
      return;
    }

    const product = findProduct(get().products, productId);
    if (!product) {
      console.warn("Product not found");
      return;
    }

    // Cap the quantity at available stock
    const validQuantity = Math.min(quantity, product.stockQuantity);
    set({
      cart: updateCartItemQuantity(get().cart, productId, validQuantity),
    });
  },

  setSelectedCategory: (category: string) => {
    set({ selectedCategory: category });
  },

  setSearchQuery: (query: string) => {
    set({ searchQuery: query });
  },

  login: async (email: string, password: string) => {
    try {
      const isValid = await mockAuth.validateCredentials(email, password);
      if (isValid) {
        set({ user: dummyUser, isAuthenticated: true });
        return true;
      }
      return false;
    } catch (error) {
      console.error("Login failed:", error);
      return false;
    }
  },

  logout: () => {
    set({ user: null, isAuthenticated: false });
  },

  signup: async (userData) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate API call
      set({
        user: {
          ...dummyUser,
          email: userData.email,
          role: userData.role,
        },
        isAuthenticated: true,
      });
      return true;
    } catch (error) {
      console.error("Signup failed:", error);
      return false;
    }
  },
>>>>>>> origin
}));
