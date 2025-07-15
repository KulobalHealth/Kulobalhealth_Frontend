import { create } from "zustand"
import { devtools, persist } from "zustand/middleware"
import {
  getPayments,
  getPaymentsByUserId,
  getPaymentByTransactionId,
  getPaymentsByStatus,
  getPaymentsByType,
  createPayment,
  updatePaymentStatus,
  simulatePayment,
  getPaymentStats,
} from "@/app/actions/payment-actions"
import type { Payment } from "@/lib/mock-auth/payment"

interface PaymentStats {
  total: number
  completed: number
  pending: number
  failed: number
  totalAmount: number
  cardPayments: number
  mobileMoneyPayments: number
  byNetwork: Record<string, number>
  byCardType: Record<string, number>
}

interface PaymentState {
  // Payment data
  payments: Payment[]
  filteredPayments: Payment[]
  selectedPayment: Payment | null
  stats: PaymentStats | null

  // UI state
  isLoading: boolean
  error: string | null
  filterType: "all" | "card" | "mobile_money" | "cash on delivery" | "credit" | null
  filterStatus: "completed" | "pending" | "failed" | "cancelled" | null
  filterUserId: string | null

  // Actions
  fetchPayments: () => Promise<void>
  fetchPaymentsByUser: (userId: string) => Promise<void>
  fetchPaymentByTransactionId: (transactionId: string) => Promise<void>
  fetchPaymentsByStatus: (status: Payment["status"]) => Promise<void>
  fetchPaymentsByType: (paymentType: "card" | "mobile_money" | "cash on delivery" | "credit") => Promise<void>
  fetchPaymentStats: () => Promise<void>

  createNewPayment: (paymentData: {
    userId: string
    amount: number
    description: string
    paymentType: "card" | "mobile_money" | "cash on delivery" | "credit"
    metadata?: Record<string, string | number | boolean | undefined>
  }) => Promise<Payment>

  simulateNewPayment: (
    userId: string,
    amount: number,
    description: string, 
    paymentType: "card" | "mobile_money" | "cash on delivery" | "credit",
    metadata?: Record<string, unknown>,
  ) => Promise<Payment>

  updateStatus: (id: string, status: Payment["status"], metadata?: Record<string, unknown>) => Promise<void>

  // Filters
  setFilterType: (type: "all" | "card" | "mobile_money" | "cash on delivery" | "credit") => void
  setFilterStatus: (status: "completed" | "pending" | "failed" | "cancelled" | null) => void
  setFilterUserId: (userId: string | null) => void
  clearFilters: () => void

  // Selection
  selectPayment: (payment: Payment | null) => void
}

export const usePaymentStore = create<PaymentState>()(
  devtools(
    persist(
      (set, get) => ({
        // Initial state
        payments: [],
        filteredPayments: [],
        selectedPayment: null,
        stats: null,
        isLoading: false,
        error: null,
        filterType: null,
        filterStatus: null,
        filterUserId: null,

        // Fetch actions
        fetchPayments: async () => {
          set({ isLoading: true, error: null })
          try {
            const payments = await getPayments()
            set({
              payments,
              filteredPayments: payments,
              isLoading: false,
            })
          } catch (error) {
            set({
              error: error instanceof Error ? error.message : "Failed to fetch payments",
              isLoading: false,
            })
          }
        },

        fetchPaymentsByUser: async (userId: string) => {
          set({ isLoading: true, error: null, filterUserId: userId })
          try {
            const payments = await getPaymentsByUserId(userId)
            set({
              filteredPayments: payments,
              isLoading: false,
            })
          } catch (error) {
            set({
              error: error instanceof Error ? error.message : "Failed to fetch user payments",
              isLoading: false,
            })
          }
        },

        fetchPaymentByTransactionId: async (transactionId: string) => {
          set({ isLoading: true, error: null })
          try {
            const payment = await getPaymentByTransactionId(transactionId)
            if (payment) {
              set({
                selectedPayment: payment,
                isLoading: false,
              })
            } else {
              set({
                error: `Payment with transaction ID ${transactionId} not found`,
                isLoading: false,
              })
            }
          } catch (error) {
            set({
              error: error instanceof Error ? error.message : "Failed to fetch payment",
              isLoading: false,
            })
          }
        },

        fetchPaymentsByStatus: async (status: Payment["status"]) => {
          set({ isLoading: true, error: null, filterStatus: status })
          try {
            const payments = await getPaymentsByStatus(status)
            set({
              filteredPayments: payments,
              isLoading: false,
            })
          } catch (error) {
            set({
              error: error instanceof Error ? error.message : "Failed to fetch payments by status",
              isLoading: false,
            })
          }
        },

        fetchPaymentsByType: async (paymentType: "card" | "mobile_money" | "cash on delivery" | "credit") => {
          set({ isLoading: true, error: null, filterType: paymentType })
          try {
            const payments = await getPaymentsByType(paymentType)
            set({
              filteredPayments: payments,
              isLoading: false,
            })
          } catch (error) {
            set({
              error: error instanceof Error ? error.message : "Failed to fetch payments by type",
              isLoading: false,
            })
          }
        },

        fetchPaymentStats: async () => {
          set({ isLoading: true, error: null })
          try {
            const stats = await getPaymentStats()
            set({
              stats,
              isLoading: false,
            })
          } catch (error) {
            set({
              error: error instanceof Error ? error.message : "Failed to fetch payment statistics",
              isLoading: false,
            })
          }
        },

        // Create and update actions
        createNewPayment: async (paymentData) => {
          set({ isLoading: true, error: null })
          try {
            const newPayment = await createPayment(paymentData)

            set((state) => ({
              payments: [...state.payments, newPayment],
              filteredPayments: [...state.filteredPayments, newPayment],
              isLoading: false,
            }))

            return newPayment
          } catch (error) {
            set({
              error: error instanceof Error ? error.message : "Failed to create payment",
              isLoading: false,
            })
            throw error
          }
        },

        simulateNewPayment: async (userId, amount, description, paymentType, metadata) => {
          set({ isLoading: true, error: null })
          try {
            const payment = await simulatePayment(userId, amount, description, paymentType, metadata)

            set((state) => ({
              payments: [...state.payments, payment],
              filteredPayments: [...state.filteredPayments, payment],
              isLoading: false,
            }))

            return payment
          } catch (error) {
            set({
              error: error instanceof Error ? error.message : "Failed to simulate payment",
              isLoading: false,
            })
            throw error
          }
        },

        updateStatus: async (id, status, metadata) => {
          set({ isLoading: true, error: null })
          try {
            const updatedPayment = await updatePaymentStatus(id, status, metadata)

            if (updatedPayment) {
              set((state) => ({
                payments: state.payments.map((p) => (p.id === id ? updatedPayment : p)),
                filteredPayments: state.filteredPayments.map((p) => (p.id === id ? updatedPayment : p)),
                selectedPayment: state.selectedPayment?.id === id ? updatedPayment : state.selectedPayment,
                isLoading: false,
              }))
            } else {
              set({
                error: `Payment with ID ${id} not found`,
                isLoading: false,
              })
            }
          } catch (error) {
            set({
              error: error instanceof Error ? error.message : "Failed to update payment status",
              isLoading: false,
            })
          }
        },

        // Filter actions
        setFilterType: (type) => {
          set({ filterType: type })
          const { payments, filterStatus, filterUserId } = get()

          let filtered = [...payments]

          if (type && type !== "all") {
            filtered = filtered.filter((p) => p.paymentType === type)
          }

          if (filterStatus) {
            filtered = filtered.filter((p) => p.status === filterStatus)
          }

          if (filterUserId) {
            filtered = filtered.filter((p) => p.userId === filterUserId)
          }

          set({ filteredPayments: filtered })
        },

        setFilterStatus: (status) => {
          set({ filterStatus: status })
          const { payments, filterType, filterUserId } = get()

          let filtered = [...payments]

          if (status) {
            filtered = filtered.filter((p) => p.status === status)
          }

          if (filterType && filterType !== "all") {
            filtered = filtered.filter((p) => p.paymentType === filterType)
          }

          if (filterUserId) {
            filtered = filtered.filter((p) => p.userId === filterUserId)
          }

          set({ filteredPayments: filtered })
        },

        setFilterUserId: (userId) => {
          set({ filterUserId: userId })
          const { payments, filterType, filterStatus } = get()

          let filtered = [...payments]

          if (userId) {
            filtered = filtered.filter((p) => p.userId === userId)
          }

          if (filterType && filterType !== "all") {
            filtered = filtered.filter((p) => p.paymentType === filterType)
          }

          if (filterStatus) {
            filtered = filtered.filter((p) => p.status === filterStatus)
          }

          set({ filteredPayments: filtered })
        },

        clearFilters: () => {
          const { payments } = get()
          set({
            filterType: null,
            filterStatus: null,
            filterUserId: null,
            filteredPayments: payments,
          })
        },

        // Selection action
        selectPayment: (payment) => {
          set({ selectedPayment: payment })
        },
      }),
      {
        name: "payment-store",
        partialize: (state) => ({
          filterType: state.filterType,
          filterStatus: state.filterStatus,
          filterUserId: state.filterUserId,
        }),
      },
    ),
    { name: "PaymentStore" },
  ),
)

// Selector hooks for common use cases
export const usePayments = () => usePaymentStore((state) => state.payments)
export const useFilteredPayments = () => usePaymentStore((state) => state.filteredPayments)
export const useSelectedPayment = () => usePaymentStore((state) => state.selectedPayment)
export const usePaymentStats = () => usePaymentStore((state) => state.stats)
export const usePaymentLoading = () => usePaymentStore((state) => state.isLoading)
export const usePaymentError = () => usePaymentStore((state) => state.error)