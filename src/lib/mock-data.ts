import type { Product, Order, Payment } from "./types";

const medImg = "/med.png";
const agaroGlucose1 = "/agaro-glucose-monitoring.jpg";
const careTouchGlucose1 = "/caretouch-glucose-monitoring.jpeg";
const careTouchGlucose2 = "/caretouch-glucose-monitoring-2.jpg";
const easyHomeGlucose = "/easy-home-glucose-monitoring.webp";
const omronBloodPressure = "/omron-blood-pressure-monitor.jpg";
const omronBloodPressure2 = "/omron-blood-pressure-monitor-2.jpg";
const omronBloodPressure3 = "/omron-blood-pressure-monitor-3.webp";
const omronBloodPressure4 = "/omron-blood-pressure-monitor-4.jpg";
const pangaBloodPressure = "/panga-blood-pressure-monitor.webp";
const pangaBloodPressure2 = "/panga-blood-pressure-monitor-2.webp";
const pangaBloodPressure3 = "/panga-blood-pressure-monitor-3.webp";

export const mockProducts: Product[] = [
  {
    id: "1",
    name: "Malaria Test Kits",
    description:
      "Rapid diagnostic test for malaria detection. Results in 15-20 minutes.",
    brand: "OraSure Technologies",
    category: "Rapid Test Kits",
    price: 200.0,
    images: [medImg],
    inStock: true,
    normalRange: "Negative",
    unit: "Box",
    stockQuantity: 15,
    imageUrl: medImg,
  },
  {
    id: "2",
    name: "Digital Blood Pressure Monitor",
    description:
      "Automatic upper arm blood pressure monitor with digital display and memory function.",
    brand: "Omron",
    category: "Medical Devices",
    price: 450.0,
    images: [
      omronBloodPressure,
      omronBloodPressure2,
      omronBloodPressure3,
      omronBloodPressure4,
    ],
    inStock: true,
    normalRange: "120/80 mmHg",
    unit: "Device",
    stockQuantity: 8,
    imageUrl: omronBloodPressure,
  },
  {
    id: "3",
    name: "Glucose Test Strips",
    description:
      "Compatible test strips for glucose monitoring devices. Pack of 50.",
    brand: "AccuChek",
    category: "Diabetic Supplies",
    price: 320.0,
    images: [
      careTouchGlucose1,
      careTouchGlucose2,
      easyHomeGlucose,
      agaroGlucose1,
    ],
    inStock: true,
    normalRange: "70-140 mg/dL",
    unit: "Pack",
    stockQuantity: 23,
    imageUrl: careTouchGlucose1,
  },
  {
    id: "5",
    name: "Digital Thermometer",
    description:
      "Fast-reading digital thermometer with fever alarm and memory function.",
    brand: "Braun",
    category: "Medical Devices",
    price: 120.0,
    images: [pangaBloodPressure, pangaBloodPressure2, pangaBloodPressure3],
    inStock: true,
    normalRange: "36.5-37.5°C",
    unit: "Device",
    stockQuantity: 12,
    imageUrl: pangaBloodPressure,
  },
  {
    id: "6",
    name: "Pregnancy Test Kit",
    description:
      "Early detection pregnancy test with over 99% accuracy. Results in 3 minutes.",
    brand: "ClearBlue",
    category: "Rapid Test Kits",
    price: 150.0,
    images: [medImg],
    inStock: false,
    normalRange: "N/A",
    unit: "Pack of 2",
    stockQuantity: 0,
    imageUrl: medImg,
  },
];

export const mockOrders: Order[] = [
  {
    id: "1",
    items: [
      { productId: "1", quantity: 2, price: 200.0 },
      { productId: "2", quantity: 1, price: 450.0 },
    ],
    status: "processing",
    total: 850.0,
    createdAt: new Date("2025-05-16T10:00:00Z").toISOString(),
    paymentMethod: "mobile-money",
    paymentType: "full",
    paymentDetails: {
      network: "MTN",
      accountNumber: "1234567890",
      accountName: "John Doe",
    },
    shippingAddress: {
      pharmacyName: "Health Pharmacy",
      phone: "+233123456789",
      email: "healthpharmacy@example.com",
      location: "Accra",
      streetAddress: "123 Main St",
      gpsAddress: "GA-123-4567",
    },
    tracking: [
      {
        status: "Order placed",
        date: new Date("2025-05-16T10:00:00Z").toISOString(),
      },
      {
        status: "Pending Confirmation",
        date: new Date("2025-05-16T10:05:00Z").toISOString(),
      },
    ],
  },
  {
    id: "2",
    items: [
      { productId: "3", quantity: 3, price: 320.0 },
      { productId: "5", quantity: 1, price: 120.0 },
    ],
    status: "shipped",
    total: 1080.0,
    createdAt: new Date("2025-05-15T14:30:00Z").toISOString(),
    paymentMethod: "card",
    paymentType: "full",
    paymentDetails: {
      cardLast4: "4242",
    },
    shippingAddress: {
      pharmacyName: "Care Plus Pharmacy",
      phone: "+233234567890",
      email: "care.plus@example.com",
      location: "Kumasi",
      streetAddress: "45 Hospital Road",
      gpsAddress: "AK-789-0123",
    },
    tracking: [
      {
        status: "Order placed",
        date: new Date("2025-05-15T14:30:00Z").toISOString(),
      },
      {
        status: "Confirmed",
        date: new Date("2025-05-15T14:35:00Z").toISOString(),
      },
      {
        status: "Shipped",
        date: new Date("2025-05-15T16:00:00Z").toISOString(),
      },
    ],
  },
  {
    id: "3",
    items: [{ productId: "4", quantity: 1, price: 580.0 }],
    status: "delivered",
    total: 580.0,
    createdAt: new Date("2025-05-14T09:15:00Z").toISOString(),
    deliveredAt: new Date("2025-05-14T14:30:00Z").toISOString(),
    paymentMethod: "mobile-money",
    paymentType: "half",
    paymentDetails: {
      network: "Vodafone",
      accountNumber: "0987654321",
      accountName: "Jane Smith",
    },
    shippingAddress: {
      pharmacyName: "MediLife Pharmacy",
      phone: "+233345678901",
      email: "medilife@example.com",
      location: "Tema",
      streetAddress: "15 Industrial Ave",
      gpsAddress: "GT-456-7890",
    },
    tracking: [
      {
        status: "Order placed",
        date: new Date("2025-05-14T09:15:00Z").toISOString(),
      },
      {
        status: "Confirmed",
        date: new Date("2025-05-14T09:20:00Z").toISOString(),
      },
      {
        status: "Shipped",
        date: new Date("2025-05-14T11:00:00Z").toISOString(),
      },
      {
        status: "Out for delivery",
        date: new Date("2025-05-14T13:45:00Z").toISOString(),
      },
      {
        status: "Delivered",
        date: new Date("2025-05-14T14:30:00Z").toISOString(),
      },
    ],
  },
  {
    id: "4",
    items: [{ productId: "6", quantity: 2, price: 150.0 }],
    status: "cancelled",
    total: 300.0,
    createdAt: new Date("2025-05-13T16:45:00Z").toISOString(),
    paymentMethod: "card",
    paymentType: "full",
    paymentDetails: {
      cardLast4: "1234",
    },
    shippingAddress: {
      pharmacyName: "Wellness Pharmacy",
      phone: "+233456789012",
      email: "wellness@example.com",
      location: "Cape Coast",
      streetAddress: "78 Beach Road",
      gpsAddress: "CC-234-5678",
    },
    tracking: [
      {
        status: "Order placed",
        date: new Date("2025-05-13T16:45:00Z").toISOString(),
      },
      {
        status: "Cancelled",
        date: new Date("2025-05-13T17:00:00Z").toISOString(),
      },
    ],
  },
];

export const mockPayments: Payment[] = [
  {
    id: "1",
    orderNo: "#7578558686",
    productName: "Malaria Test Kit",
    paymentType: "Full Payment",
    amount: 200.0,
    lastPaymentDate: "11th April, 2025",
    amountPaid: 200.0,
    amountRemaining: 0.0,
    status: "delivered",
    date: "20th Mar, 2025",
  },
  {
    id: "2",
    orderNo: "#7578558687",
    productName: "Digital Blood Pressure Monitor",
    paymentType: "Partial",
    amount: 450.0,
    lastPaymentDate: "10th April, 2025",
    amountPaid: 300.0,
    amountRemaining: 150.0,
    status: "shipped",
    date: "19th Mar, 2025",
  },
  {
    id: "3",
    orderNo: "#7578558688",
    productName: "Glucose Test Strips",
    paymentType: "Credit",
    amount: 320.0,
    lastPaymentDate: "15th April, 2025",
    amountPaid: 100.0,
    amountRemaining: 220.0,
    status: "processing",
    date: "18th Mar, 2025",
  },
  {
    id: "4",
    orderNo: "#7578558689",
    productName: "HIV Self-Test Kit",
    paymentType: "Full Payment",
    amount: 580.0,
    lastPaymentDate: "14th April, 2025",
    amountPaid: 580.0,
    amountRemaining: 0.0,
    status: "delivered",
    date: "17th Mar, 2025",
  },
  {
    id: "5",
    orderNo: "#7578558690",
    productName: "Digital Thermometer",
    paymentType: "Full Payment",
    amount: 120.0,
    lastPaymentDate: "13th April, 2025",
    amountPaid: 120.0,
    amountRemaining: 0.0,
    status: "delivered",
    date: "16th Mar, 2025",
  },
  {
    id: "6",
    orderNo: "#7578558691",
    productName: "Digital Blood Pressure Monitor",
    paymentType: "Credit",
    amount: 450.0,
    lastPaymentDate: "12th April, 2025",
    amountPaid: 150.0,
    amountRemaining: 300.0,
    status: "processing",
    date: "15th Mar, 2025",
  },
  {
    id: "7",
    orderNo: "#7578558692",
    productName: "Malaria Test Kit",
    paymentType: "Full Payment",
    amount: 200.0,
    lastPaymentDate: "11th April, 2025",
    amountPaid: 200.0,
    amountRemaining: 0.0,
    status: "processing",
    date: "14th Mar, 2025",
  },
  {
    id: "8",
    orderNo: "#7578558693",
    productName: "Glucose Test Strips",
    paymentType: "Partial",
    amount: 320.0,
    lastPaymentDate: "10th April, 2025",
    amountPaid: 160.0,
    amountRemaining: 160.0,
    status: "shipped",
    date: "13th Mar, 2025",
  },
  {
    id: "9",
    orderNo: "#7578558694",
    productName: "Digital Blood Pressure Monitor",
    paymentType: "Credit",
    amount: 450.0,
    lastPaymentDate: "9th April, 2025",
    amountPaid: 150.0,
    amountRemaining: 300.0,
    status: "delivered",
    date: "12th Mar, 2025",
  },
  {
    id: "10",
    orderNo: "#7578558695",
    productName: "HIV Self-Test Kit",
    paymentType: "Full Payment",
    amount: 580.0,
    lastPaymentDate: "8th April, 2025",
    amountPaid: 580.0,
    amountRemaining: 0.0,
    status: "delivered",
    date: "11th Mar, 2025",
  },
];
