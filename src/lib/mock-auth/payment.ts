export interface Payment {
  id: string
  userId: string
  transactionId: string
  amount: number
  currency: string
  paymentType: "card" | "mobile_money" | "cash on delivery" | "credit"
  paymentMethod: CardPayment | MobileMoneyPayment
  status: "pending" | "completed" | "failed" | "cancelled"
  description: string
  createdAt: string
  updatedAt: string
  metadata?: Record<string, unknown>
}

export interface CardPayment {
  type: "card"
  cardType: "visa" | "mastercard" | "american_express" | "discover"
  last4Digits: string
  expiryMonth: string
  expiryYear: string
  cardholderName: string
  issuerBank?: string
}

export interface MobileMoneyPayment {
  type: "mobile_money"
  network: "mtn" | "vodafone" | "airteltigo" | "telecel"
  phoneNumber: string
  accountName: string
  networkDisplayName: string
}

export type PaymentMethod = CardPayment | MobileMoneyPayment

// Helper function to generate realistic transaction IDs
export function generateTransactionId(paymentType: "card" | "mobile_money" | "cash on delivery" | "credit"): string {
  const timestamp = Date.now().toString(36)
  const random = Math.random().toString(36).substring(2, 8).toUpperCase()

  if (paymentType === "card") {
    return `TXN_${timestamp}_${random}`
  } else {
    return `MM_${timestamp}_${random}`
  }
}

// Helper function to generate realistic card details
export function generateCardDetails(): CardPayment {
  const cardTypes: CardPayment["cardType"][] = ["visa", "mastercard", "american_express"]
  const cardType = cardTypes[Math.floor(Math.random() * cardTypes.length)]
  const banks = ["GCB Bank", "Ecobank", "Standard Chartered", "Fidelity Bank", "Zenith Bank"]

  return {
    type: "card",
    cardType,
    last4Digits: Math.floor(1000 + Math.random() * 9000).toString(),
    expiryMonth: String(Math.floor(1 + Math.random() * 12)).padStart(2, "0"),
    expiryYear: String(2025 + Math.floor(Math.random() * 5)),
    cardholderName: "John Doe", // In real app, this would come from user data
    issuerBank: banks[Math.floor(Math.random() * banks.length)],
  }
}

// Helper function to generate realistic mobile money details
export function generateMobileMoneyDetails(): MobileMoneyPayment {
  const networks = [
    { network: "mtn" as const, displayName: "MTN Mobile Money" },
    { network: "vodafone" as const, displayName: "Vodafone Cash" },
    { network: "airteltigo" as const, displayName: "AirtelTigo Money" },
    { network: "telecel" as const, displayName: "Telecel Cash" },
  ]

  const selectedNetwork = networks[Math.floor(Math.random() * networks.length)]
  const phoneNumber = `+233 ${Math.floor(20 + Math.random() * 80)} ${Math.floor(100 + Math.random() * 900)} ${Math.floor(1000 + Math.random() * 9000)}`

  return {
    type: "mobile_money",
    network: selectedNetwork.network,
    phoneNumber,
    accountName: "John Doe", // In real app, this would come from user data
    networkDisplayName: selectedNetwork.displayName,
  }
}
