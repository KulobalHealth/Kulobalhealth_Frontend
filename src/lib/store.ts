import { create } from "zustand";
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
    },
    {
      id: "2",
      name: "Malaria Test Kits",
      description:
        "Rapid diagnostic test for malaria detection. Results in 15-20 minutes.",
      brand: "OraSure Technologies",
      category: "Rapid Test Kits",
      price: 300.0,
      images: [medImg.src],
      inStock: true,
      normalRange: "Negative",
      unit: "Box",
    },
    {
      id: "3",
      name: "Malaria Test Kits",
      description:
        "Rapid diagnostic test for malaria detection. Results in 15-20 minutes.",
      brand: "OraSure Technologies",
      category: "Rapid Test Kits",
      price: 400.0,
      images: [medImg.src],
      inStock: true,
      normalRange: "Negative",
      unit: "Box",
    },
    {
      id: "4",
      name: "Malaria Test Kits",
      description:
        "Rapid diagnostic test for malaria detection. Results in 15-20 minutes.",
      brand: "OraSure Technologies",
      category: "Rapid Test Kits",
      price: 500.0,
      images: [medImg.src],
      inStock: true,
      normalRange: "Negative",
      unit: "Box",
    },
    {
      id: "5",
      name: "Malaria Test Kits",
      description:
        "Rapid diagnostic test for malaria detection. Results in 15-20 minutes.",
      brand: "OraSure Technologies",
      category: "Rapid Test Kits",
      price: 600.0,
      images: [medImg.src],
      inStock: true,
      normalRange: "Negative",
      unit: "Box",
    },
    {
      id: "6",
      name: "Malaria Test Kits",
      description:
        "Rapid diagnostic test for malaria detection. Results in 15-20 minutes.",
      brand: "OraSure Technologies",
      category: "Rapid Test Kits",
      price: 600.0,
      images: [medImg.src],
      inStock: false,
      normalRange: "Negative",
      unit: "Box",
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
}));
