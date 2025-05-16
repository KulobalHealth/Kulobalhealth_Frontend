import medImg from "@/../public/med.png";
import type { Product, Order } from "./types";

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
    images: [medImg.src],
    inStock: true,
    normalRange: "120/80 mmHg",
    unit: "Device",
    stockQuantity: 8,
    imageUrl: medImg.src,
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
    imageUrl: medImg.src,
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
    imageUrl: medImg.src,
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
    imageUrl: medImg.src,
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
