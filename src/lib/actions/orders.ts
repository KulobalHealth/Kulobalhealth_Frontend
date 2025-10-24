"use server";

import { cookies } from "next/headers";

const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:3001";

async function getAuthHeaders() {
  const cookieStore = await cookies();
  const token = cookieStore.get("admin_token")?.value;

  if (!token) {
    throw new Error("Authentication token not found");
  }

  return {
    "Content-Type": "application/json",
    ...(token && { Authorization: `Bearer ${token}` }),
  };
}

export interface OrderProduct {
  productId: string;
  productName: string;
  productType: string;
  productTypeCode: string;
  price: number;
  brand: string;
  manufacturer: string;
  description: string;
  quantity: number;
}

export interface OrderPharmacy {
  pharmacyId: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  pharmacyName: string;
  licenceNumber: string;
  branch: number;
  location: string;
}

export interface Order {
  orderId: string;
  pharmacyId: string;
  totalCost: number;
  paid: boolean;
  status: "PENDING" | "PROCESSING" | "COMPLETED" | "CANCELLED";
  paymentType: "PAYMENT_ON_ONLINE" | "PAYMENT_ON_DELIVERY";
  deliveryMethod: "EXPRESS" | "STANDARD";
  numberOfItems: number;
  dateOrdered: string;
  products: OrderProduct[];
  pharmacy: OrderPharmacy;
}

export interface OrdersResponse {
  status: string;
  statusCode: number;
  data: {
    orderData: Order[];
    paginationation: {
      page: number;
      limit: number;
      totalPages: number;
      totalDocs: number;
    };
  };
}

export interface GetOrdersParams {
  page?: number;
  limit?: number;
  status?: string;
}

export async function getAllOrders(params: GetOrdersParams = {}) {
  try {
    const { page = 1, limit = 10, status } = params;
    const searchParams = new URLSearchParams({
      page: page.toString(),
      limit: limit.toString(),
    });

    if (status && status !== "All") {
      searchParams.append("status", status.toLowerCase());
    }

    const response = await fetch(
      `${baseUrl}/admin/orders?${searchParams.toString()}`,
      {
        method: "GET",
        headers: await getAuthHeaders(),
        cache: "no-store",
      }
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch orders: ${response.statusText}`);
    }

    const data: OrdersResponse = await response.json();
    return {
      success: true,
      data: data.data,
    };
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : "Failed to fetch orders",
    };
  }
}

export interface GetOrderHistoryParams {
  page?: number;
  limit?: number;
  type: "all" | "year" | "month" | "day" | "range";
  year?: number;
  month?: number;
  day?: number;
  startDate?: string;
  endDate?: string;
}

export async function getOrderHistory(params: GetOrderHistoryParams) {
  try {
    const {
      page = 1,
      limit = 10,
      type,
      year,
      month,
      day,
      startDate,
      endDate,
    } = params;
    const searchParams = new URLSearchParams({
      page: page.toString(),
      limit: limit.toString(),
      type,
    });

    if (year) {
      searchParams.append("year", year.toString());
    }
    if (month) {
      searchParams.append("month", month.toString());
    }
    if (day) {
      searchParams.append("day", day.toString());
    }
    if (startDate) {
      searchParams.append("startDate", startDate);
    }
    if (endDate) {
      searchParams.append("endDate", endDate);
    }

    const response = await fetch(
      `${baseUrl}/orders/history?${searchParams.toString()}`,
      {
        method: "GET",
        headers: await getAuthHeaders(),
        cache: "no-store",
      }
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch order history: ${response.statusText}`);
    }

    const data: OrdersResponse = await response.json();
    return {
      success: true,
      data: data.data,
    };
  } catch (error) {
    return {
      success: false,
      error:
        error instanceof Error
          ? error.message
          : "Failed to fetch order history",
    };
  }
}

export interface ProcessOrderData {
  pharmacyId: string;
  orderId: string;
}

export async function processOrder(data: ProcessOrderData) {
  try {
    const response = await fetch(`${baseUrl}/admin/orders/proccess-order`, {
      method: "POST",
      headers: await getAuthHeaders(),
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`Failed to process order: ${response.statusText}`);
    }

    const result = await response.json();
    return {
      success: true,
      data: result,
    };
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : "Failed to process order",
    };
  }
}

export async function completeOrder(data: ProcessOrderData) {
  try {
    const response = await fetch(`${baseUrl}/admin/orders/complete-order`, {
      method: "POST",
      headers: await getAuthHeaders(),
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`Failed to complete order: ${response.statusText}`);
    }

    const result = await response.json();
    return {
      success: true,
      data: result,
    };
  } catch (error) {
    return {
      success: false,
      error:
        error instanceof Error ? error.message : "Failed to complete order",
    };
  }
}
