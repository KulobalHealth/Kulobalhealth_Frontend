"use server"

import { revalidatePath } from "next/cache"
import type { Payment } from "@/lib/mock-auth/payment"
import { generateTransactionId, generateCardDetails, generateMobileMoneyDetails } from "@/lib/mock-auth/payment"
import fs from "fs/promises"
import path from "path"

// Initialize the database when the server starts
const DB_DIR = path.join(process.cwd(), "db")
const PAYMENTS_FILE = path.join(DB_DIR, "payments.json")

// Initialize the payments database
async function initPaymentsDatabase() {
  try {
    // Ensure the db directory exists
    await fs.mkdir(DB_DIR, { recursive: true })

    // Check if payments.json exists, if not create it with initial data
    try {
      await fs.access(PAYMENTS_FILE)
      console.log("Payments database already exists")
    } catch {
      console.log("Creating new payments database with seed data...")
      // Generate initial seed data
      const initialPayments: Payment[] = [
        // Card payments
        {
          id: "pay_1",
          userId: "1",
          transactionId: generateTransactionId("card"),
          amount: 250.0,
          currency: "GHS",
          paymentType: "card",
          paymentMethod: {
            type: "card",
            cardType: "visa",
            last4Digits: "4532",
            expiryMonth: "12",
            expiryYear: "2026",
            cardholderName: "John Doe",
            issuerBank: "GCB Bank",
          },
          status: "completed",
          description: "Medicine purchase - Paracetamol 500mg",
          createdAt: "2024-01-15T14:30:00Z",
          updatedAt: "2024-01-15T14:30:15Z",
          metadata: {
            orderId: "ORD_001",
            pharmacyId: "1",
          },
        },
        {
          id: "pay_2",
          userId: "2",
          transactionId: generateTransactionId("card"),
          amount: 1500.0,
          currency: "GHS",
          paymentType: "card",
          paymentMethod: {
            type: "card",
            cardType: "mastercard",
            last4Digits: "8901",
            expiryMonth: "08",
            expiryYear: "2025",
            cardholderName: "Jane Smith",
            issuerBank: "Ecobank",
          },
          status: "completed",
          description: "Bulk medicine order",
          createdAt: "2024-01-14T09:15:00Z",
          updatedAt: "2024-01-14T09:15:22Z",
          metadata: {
            orderId: "ORD_002",
            supplierId: "2",
          },
        },
        // Mobile Money payments
        {
          id: "pay_3",
          userId: "1",
          transactionId: generateTransactionId("mobile_money"),
          amount: 75.5,
          currency: "GHS",
          paymentType: "mobile_money",
          paymentMethod: {
            type: "mobile_money",
            network: "mtn",
            phoneNumber: "+233 24 123 4567",
            accountName: "John Doe",
            networkDisplayName: "MTN Mobile Money",
          },
          status: "completed",
          description: "Prescription refill",
          createdAt: "2024-01-13T16:45:00Z",
          updatedAt: "2024-01-13T16:45:08Z",
          metadata: {
            orderId: "ORD_003",
            pharmacyId: "1",
          },
        },
        {
          id: "pay_4",
          userId: "3",
          transactionId: generateTransactionId("mobile_money"),
          amount: 320.0,
          currency: "GHS",
          paymentType: "mobile_money",
          paymentMethod: {
            type: "mobile_money",
            network: "vodafone",
            phoneNumber: "+233 20 987 6543",
            accountName: "Admin User",
            networkDisplayName: "Vodafone Cash",
          },
          status: "pending",
          description: "Medical supplies payment",
          createdAt: "2024-01-12T11:20:00Z",
          updatedAt: "2024-01-12T11:20:00Z",
          metadata: {
            orderId: "ORD_004",
            supplierId: "2",
          },
        },
        {
          id: "pay_5",
          userId: "2",
          transactionId: generateTransactionId("mobile_money"),
          amount: 89.99,
          currency: "GHS",
          paymentType: "mobile_money",
          paymentMethod: {
            type: "mobile_money",
            network: "airteltigo",
            phoneNumber: "+233 26 555 7890",
            accountName: "Jane Smith",
            networkDisplayName: "AirtelTigo Money",
          },
          status: "failed",
          description: "Emergency medicine order",
          createdAt: "2024-01-11T20:30:00Z",
          updatedAt: "2024-01-11T20:30:45Z",
          metadata: {
            orderId: "ORD_005",
            pharmacyId: "3",
            failureReason: "Insufficient balance",
          },
        },
        {
          id: "pay_6",
          userId: "1",
          transactionId: generateTransactionId("card"),
          amount: 450.75,
          currency: "GHS",
          paymentType: "card",
          paymentMethod: {
            type: "card",
            cardType: "american_express",
            last4Digits: "1234",
            expiryMonth: "03",
            expiryYear: "2027",
            cardholderName: "John Doe",
            issuerBank: "Standard Chartered",
          },
          status: "completed",
          description: "Monthly medication subscription",
          createdAt: "2024-01-10T08:00:00Z",
          updatedAt: "2024-01-10T08:00:18Z",
          metadata: {
            orderId: "ORD_006",
            subscriptionId: "SUB_001",
            pharmacyId: "1",
          },
        },
      ]

      await fs.writeFile(PAYMENTS_FILE, JSON.stringify(initialPayments, null, 2))
      console.log("Payments database initialized successfully")
    }
  } catch (error) {
    console.error("Failed to initialize payments database:", error)
    throw new Error("Database initialization failed")
  }
}

// Initialize database on import
initPaymentsDatabase()

// Helper functions for database operations
async function getPaymentsFromFile(): Promise<Payment[]> {
  try {
    const data = await fs.readFile(PAYMENTS_FILE, "utf8")
    return JSON.parse(data)
  } catch (error) {
    console.error("Failed to read payments:", error)
    return []
  }
}

async function savePaymentsToFile(payments: Payment[]): Promise<void> {
  try {
    await fs.writeFile(PAYMENTS_FILE, JSON.stringify(payments, null, 2))
  } catch (error) {
    console.error("Failed to save payments:", error)
    throw new Error("Failed to save payments to database")
  }
}

// Server Actions
export async function getPayments(): Promise<Payment[]> {
  try {
    // Add a small delay to simulate network latency
    await new Promise((resolve) => setTimeout(resolve, 100))
    return await getPaymentsFromFile()
  } catch (error) {
    console.error("Get payments error:", error)
    throw new Error("Failed to fetch payments")
  }
}

export async function getPaymentsByUserId(userId: string): Promise<Payment[]> {
  try {
    await new Promise((resolve) => setTimeout(resolve, 100))
    const payments = await getPaymentsFromFile()
    return payments.filter((payment) => payment.userId === userId)
  } catch (error) {
    console.error("Get payments by user error:", error)
    throw new Error("Failed to fetch user payments")
  }
}

export async function getPaymentByTransactionId(transactionId: string): Promise<Payment | null> {
  try {
    await new Promise((resolve) => setTimeout(resolve, 100))
    const payments = await getPaymentsFromFile()
    return payments.find((payment) => payment.transactionId === transactionId) || null
  } catch (error) {
    console.error("Get payment by transaction ID error:", error)
    throw new Error("Failed to fetch payment")
  }
}

export async function getPaymentsByStatus(status: Payment["status"]): Promise<Payment[]> {
  try {
    await new Promise((resolve) => setTimeout(resolve, 100))
    const payments = await getPaymentsFromFile()
    return payments.filter((payment) => payment.status === status)
  } catch (error) {
    console.error("Get payments by status error:", error)
    throw new Error("Failed to fetch payments by status")
  }
}

export async function getPaymentsByType(paymentType: "card" | "mobile_money" | "cash on delivery" | "credit"): Promise<Payment[]> {
  try {
    await new Promise((resolve) => setTimeout(resolve, 100))
    const payments = await getPaymentsFromFile()
    return payments.filter((payment) => payment.paymentType === paymentType)
  } catch (error) {
    console.error("Get payments by type error:", error)
    throw new Error("Failed to fetch payments by type")
  }
}

export async function createPayment(paymentData: {
  userId: string
  amount: number
  description: string
  paymentType: "card" | "mobile_money" | "cash on delivery" | "credit"
  metadata?: Record<string, unknown>
}): Promise<Payment> {
  try {
    // Add a small delay to simulate network latency
    await new Promise((resolve) => setTimeout(resolve, 200))

    const payments = await getPaymentsFromFile()

    const payment: Payment = {
      id: `pay_${Date.now()}_${Math.random().toString(36).substring(2, 8)}`,
      userId: paymentData.userId,
      transactionId: generateTransactionId(paymentData.paymentType),
      amount: paymentData.amount,
      currency: "GHS",
      paymentType: paymentData.paymentType,
      paymentMethod: paymentData.paymentType === "card" ? generateCardDetails() : generateMobileMoneyDetails(),
      status: Math.random() > 0.1 ? "completed" : "failed", // 90% success rate
      description: paymentData.description,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      metadata: paymentData.metadata,
    }

    payments.push(payment)
    await savePaymentsToFile(payments)

    revalidatePath("/payments")
    return payment
  } catch (error) {
    console.error("Create payment error:", error)
    throw new Error("Failed to create payment")
  }
}

export async function updatePaymentStatus(
  id: string,
  status: Payment["status"],
  metadata?: Record<string, unknown>,
): Promise<Payment | null> {
  try {
    await new Promise((resolve) => setTimeout(resolve, 100))

    const payments = await getPaymentsFromFile()
    const index = payments.findIndex((payment) => payment.id === id)

    if (index === -1) {
      return null
    }

    payments[index] = {
      ...payments[index],
      status,
      updatedAt: new Date().toISOString(),
      ...(metadata && { metadata: { ...payments[index].metadata, ...metadata } }),
    }

    await savePaymentsToFile(payments)
    revalidatePath("/payments")
    return payments[index]
  } catch (error) {
    console.error("Update payment status error:", error)
    throw new Error("Failed to update payment status")
  }
}

export async function getPaymentStats(): Promise<{
  total: number
  completed: number
  pending: number
  failed: number
  totalAmount: number
  cardPayments: number
  mobileMoneyPayments: number
  byNetwork: Record<string, number>
  byCardType: Record<string, number>
}> {
  try {
    await new Promise((resolve) => setTimeout(resolve, 100))
    const payments = await getPaymentsFromFile()

    const stats = {
      total: payments.length,
      completed: payments.filter((p) => p.status === "completed").length,
      pending: payments.filter((p) => p.status === "pending").length,
      failed: payments.filter((p) => p.status === "failed").length,
      totalAmount: payments.reduce((sum, p) => sum + p.amount, 0),
      cardPayments: payments.filter((p) => p.paymentType === "card").length,
      mobileMoneyPayments: payments.filter((p) => p.paymentType === "mobile_money").length,
      byNetwork: {} as Record<string, number>,
      byCardType: {} as Record<string, number>,
    }

    // Count by mobile money network
    payments.forEach((payment) => {
      if (payment.paymentType === "mobile_money") {
        const method = payment.paymentMethod as Extract<Payment["paymentMethod"], { type: "mobile_money" }>
        const network = method.networkDisplayName || method.network
        stats.byNetwork[network] = (stats.byNetwork[network] || 0) + 1
      }
    })

    // Count by card type
    payments.forEach((payment) => {
      if (payment.paymentType === "card") {
        const method = payment.paymentMethod as Extract<Payment["paymentMethod"], { type: "card" }>
        const cardType = method.cardType
        stats.byCardType[cardType] = (stats.byCardType[cardType] || 0) + 1
      }
    })

    return stats
  } catch (error) {
    console.error("Get payment stats error:", error)
    throw new Error("Failed to fetch payment statistics")
  }
}

// Simulate payment processing
export async function simulatePayment(
  userId: string,
  amount: number,
  description: string,
  paymentType: "card" | "mobile_money" | "cash on delivery" | "credit",
  metadata?: Record<string, unknown>,
): Promise<Payment> {
  try {
    return await createPayment({
      userId,
      amount,
      description,
      paymentType,
      metadata,
    })
  } catch (error) {
    console.error("Simulate payment error:", error)
    throw new Error("Failed to simulate payment")
  }
}
