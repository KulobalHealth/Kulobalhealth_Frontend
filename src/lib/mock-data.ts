import medImg from "@/../public/med.png";
import agaroGlucose1 from "@/../public/agaro-glucose-monitoring.jpg";
import careTouchGlucose1 from "@/../public/caretouch-glucose-monitoring.jpeg";
import careTouchGlucose2 from "@/../public/caretouch-glucose-monitoring-2.jpg";
import easyHomeGlucose from "@/../public/easy-home-glucose-monitoring.webp";
import omronBloodPressure from "@/../public/omron-blood-pressure-monitor.jpg";
import omronBloodPressure2 from "@/../public/omron-blood-pressure-monitor-2.jpg";
import omronBloodPressure3 from "@/../public/omron-blood-pressure-monitor-3.webp";
import omronBloodPressure4 from "@/../public/omron-blood-pressure-monitor-4.jpg";
import pangaBloodPressure from "@/../public/panga-blood-pressure-monitor.webp";
import pangaBloodPressure2 from "@/../public/panga-blood-pressure-monitor-2.webp";
import pangaBloodPressure3 from "@/../public/panga-blood-pressure-monitor-3.webp";
import type { Product, Order, Payment } from "./types";

export const mockProducts: Product[] = [
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
    imageUrl: medImg.src,
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
      omronBloodPressure.src,
      omronBloodPressure2.src,
      omronBloodPressure3.src,
      omronBloodPressure4.src,
    ],
    inStock: true,
    normalRange: "120/80 mmHg",
    unit: "Device",
    stockQuantity: 8,
    imageUrl: omronBloodPressure.src,
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
      careTouchGlucose1.src,
      careTouchGlucose2.src,
      easyHomeGlucose.src,
      agaroGlucose1.src,
    ],
    inStock: true,
    normalRange: "70-140 mg/dL",
    unit: "Pack",
    stockQuantity: 23,
    imageUrl: careTouchGlucose1.src,
  },
  {
    id: "5",
    name: "Digital Thermometer",
    description:
      "Fast-reading digital thermometer with fever alarm and memory function.",
    brand: "Braun",
    category: "Medical Devices",
    price: 120.0,
    images: [
      pangaBloodPressure.src,
      pangaBloodPressure2.src,
      pangaBloodPressure3.src,
    ],
    inStock: true,
    normalRange: "36.5-37.5°C",
    unit: "Device",
    stockQuantity: 12,
    imageUrl: pangaBloodPressure.src,
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
    imageUrl: medImg.src,
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
