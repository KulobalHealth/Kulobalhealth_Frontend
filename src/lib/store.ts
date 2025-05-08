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
}));
