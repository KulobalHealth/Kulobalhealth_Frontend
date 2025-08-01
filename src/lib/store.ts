import { create } from "zustand";
import { mockAuth } from "./mock-auth";
import { mockOrders, mockPayments, mockProducts } from "./mock-data";
import type { CartItem, Order, Payment, Product, User } from "./types";

const dummyUser = mockAuth.getMockUser();

const findProduct = (products: Product[], id: string) =>
  products.find((p) => p.id === id);

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

    // cap the quantity at available stock
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
      await new Promise((resolve) => setTimeout(resolve, 1000));
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
}));
