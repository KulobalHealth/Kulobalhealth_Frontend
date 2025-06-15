export interface Order {
  id: string
  orderNumber: string
  productName: string
  productImage: string
  status: "processing" | "shipped" | "delivered" | "cancelled"
  dateOrdered: string
  expectedDelivery: string
  total: string
  paymentMethod: string
  paymentType: string
  itemTotal: string
  deliveryFees: string
  deliveryAddress: {
    code: string
    street: string
    city: string
    country: string
    phone: string
  }
  trackingSteps: {
    step: string
    completed: boolean
    date?: string
  }[]
}

export const mockOrders: Order[] = [
  {
    id: "1",
    orderNumber: "#36373638733",
    productName: "Malaria Test Kit",
    productImage: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=300&fit=crop&crop=center",
    status: "cancelled",
    dateOrdered: "20th Mar, 2025",
    expectedDelivery: "03 Apr, 2025",
    total: "GHS 200.00",
    paymentMethod: "Mobile Money (MTN)",
    paymentType: "Full Payment",
    itemTotal: "GHS 200.00",
    deliveryFees: "GHS 200.00",
    deliveryAddress: {
      code: "GH-071-8268",
      street: "Grouse Streets",
      city: "Accra",
      country: "Ghana",
      phone: "233540977543",
    },
    trackingSteps: [
      { step: "Order placed", completed: true, date: "20th Mar, 2025" },
      { step: "Order confirmed", completed: false },
      { step: "Waiting to be picked", completed: false },
      { step: "Out for delivery", completed: false },
      { step: "Delivered", completed: false },
    ],
  },
  {
    id: "2",
    orderNumber: "#36373638734",
    productName: "COVID-19 Rapid Test",
    productImage: "https://images.unsplash.com/photo-1584308972272-9e4e7685e80f?w=400&h=300&fit=crop&crop=center",
    status: "processing",
    dateOrdered: "22nd Mar, 2025",
    expectedDelivery: "05 Apr, 2025",
    total: "GHS 150.00",
    paymentMethod: "Mobile Money (Vodafone)",
    paymentType: "Full Payment",
    itemTotal: "GHS 120.00",
    deliveryFees: "GHS 30.00",
    deliveryAddress: {
      code: "GH-072-9369",
      street: "Oxford Street",
      city: "Kumasi",
      country: "Ghana",
      phone: "233241234567",
    },
    trackingSteps: [
      { step: "Order placed", completed: true, date: "22nd Mar, 2025" },
      { step: "Order confirmed", completed: true, date: "22nd Mar, 2025" },
      { step: "Waiting to be picked", completed: false },
      { step: "Out for delivery", completed: false },
      { step: "Delivered", completed: false },
    ],
  },
  {
    id: "3",
    orderNumber: "#36373638735",
    productName: "Blood Pressure Monitor",
    productImage: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop&crop=center",
    status: "shipped",
    dateOrdered: "18th Mar, 2025",
    expectedDelivery: "01 Apr, 2025",
    total: "GHS 350.00",
    paymentMethod: "Bank Transfer",
    paymentType: "Full Payment",
    itemTotal: "GHS 320.00",
    deliveryFees: "GHS 30.00",
    deliveryAddress: {
      code: "GH-073-1234",
      street: "Ring Road East",
      city: "Tamale",
      country: "Ghana",
      phone: "233201987654",
    },
    trackingSteps: [
      { step: "Order placed", completed: true, date: "18th Mar, 2025" },
      { step: "Order confirmed", completed: true, date: "18th Mar, 2025" },
      { step: "Waiting to be picked", completed: true, date: "19th Mar, 2025" },
      { step: "Out for delivery", completed: true, date: "20th Mar, 2025" },
      { step: "Delivered", completed: false },
    ],
  },
  {
    id: "4",
    orderNumber: "#36373638736",
    productName: "Digital Thermometer",
    productImage: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop&crop=center",
    status: "delivered",
    dateOrdered: "15th Mar, 2025",
    expectedDelivery: "28 Mar, 2025",
    total: "GHS 80.00",
    paymentMethod: "Mobile Money (AirtelTigo)",
    paymentType: "Full Payment",
    itemTotal: "GHS 60.00",
    deliveryFees: "GHS 20.00",
    deliveryAddress: {
      code: "GH-074-5678",
      street: "Liberation Road",
      city: "Cape Coast",
      country: "Ghana",
      phone: "233271234567",
    },
    trackingSteps: [
      { step: "Order placed", completed: true, date: "15th Mar, 2025" },
      { step: "Order confirmed", completed: true, date: "15th Mar, 2025" },
      { step: "Waiting to be picked", completed: true, date: "16th Mar, 2025" },
      { step: "Out for delivery", completed: true, date: "17th Mar, 2025" },
      { step: "Delivered", completed: true, date: "18th Mar, 2025" },
    ],
  },
  {
    id: "5",
    orderNumber: "#36373638737",
    productName: "Pulse Oximeter",
    productImage: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=400&h=300&fit=crop&crop=center",
    status: "processing",
    dateOrdered: "25th Mar, 2025",
    expectedDelivery: "08 Apr, 2025",
    total: "GHS 180.00",
    paymentMethod: "Mobile Money (MTN)",
    paymentType: "Partial Payment",
    itemTotal: "GHS 160.00",
    deliveryFees: "GHS 20.00",
    deliveryAddress: {
      code: "GH-075-9012",
      street: "Spintex Road",
      city: "Accra",
      country: "Ghana",
      phone: "233501234567",
    },
    trackingSteps: [
      { step: "Order placed", completed: true, date: "25th Mar, 2025" },
      { step: "Order confirmed", completed: false },
      { step: "Waiting to be picked", completed: false },
      { step: "Out for delivery", completed: false },
      { step: "Delivered", completed: false },
    ],
  },
 
]
