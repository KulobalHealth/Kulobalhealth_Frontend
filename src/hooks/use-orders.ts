import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useAdminAuth } from "@/store/admin-auth";

const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:3001";

// Types (reusing from server actions)
export type OrderStatus = "PENDING" | "PROCESSING" | "COMPLETED" | "CANCELLED";
export type PaymentType = "PAYMENT_ON_ONLINE" | "PAYMENT_ON_DELIVERY";
export type DeliveryMethod = "EXPRESS" | "STANDARD";

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
  status: OrderStatus;
  paymentType: PaymentType;
  deliveryMethod: DeliveryMethod;
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

// Helper function to get auth headers
function getAuthHeaders(token: string | null) {
  if (!token) {
    throw new Error("Authentication token not found");
  }

  return {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  };
}

// Fetch orders function
async function fetchOrders(params: GetOrdersParams, token: string | null) {
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
      headers: getAuthHeaders(token),
    }
  );

  if (!response.ok) {
    throw new Error(`Failed to fetch orders: ${response.statusText}`);
  }

  const data: OrdersResponse = await response.json();
  return data.data;
}

// Fetch order history function
async function fetchOrderHistory(
  params: GetOrderHistoryParams,
  token: string | null
) {
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
    `${baseUrl}/admin/orders/history?${searchParams.toString()}`,
    {
      method: "GET",
      headers: getAuthHeaders(token),
    }
  );

  if (!response.ok) {
    throw new Error(`Failed to fetch order history: ${response.statusText}`);
  }

  const data: OrdersResponse = await response.json();
  return data.data;
}

// Update order status function
async function updateOrderStatus(
  orderId: string,
  status: OrderStatus,
  token: string | null
) {
  const response = await fetch(`${baseUrl}/admin/orders/${orderId}/status`, {
    method: "PATCH",
    headers: getAuthHeaders(token),
    body: JSON.stringify({ status }),
  });

  if (!response.ok) {
    throw new Error(`Failed to update order status: ${response.statusText}`);
  }

  return response.json();
}

// React Query Hooks

// Hook to fetch orders
export function useOrders(params: GetOrdersParams = {}) {
  const { token } = useAdminAuth();

  return useQuery({
    queryKey: ["orders", params],
    queryFn: () => fetchOrders(params, token),
    enabled: !!token, // Only run query if token exists
    staleTime: 5 * 60 * 1000, // 5 minutes
    retry: (failureCount, error) => {
      // Don't retry on auth errors
      if (error instanceof Error && error.message.includes("Unauthorized")) {
        return false;
      }
      return failureCount < 3;
    },
  });
}

// Hook to fetch order history
export function useOrderHistory(params: GetOrderHistoryParams) {
  const { token } = useAdminAuth();

  return useQuery({
    queryKey: ["orderHistory", params],
    queryFn: () => fetchOrderHistory(params, token),
    enabled: !!token,
    staleTime: 5 * 60 * 1000, // 5 minutes
    retry: (failureCount, error) => {
      if (error instanceof Error && error.message.includes("Unauthorized")) {
        return false;
      }
      return failureCount < 3;
    },
  });
}

// Hook to update order status
export function useUpdateOrderStatus() {
  const { token } = useAdminAuth();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      orderId,
      status,
    }: {
      orderId: string;
      status: OrderStatus;
    }) => updateOrderStatus(orderId, status, token),
    onSuccess: () => {
      // Invalidate and refetch orders
      queryClient.invalidateQueries({ queryKey: ["orders"] });
      queryClient.invalidateQueries({ queryKey: ["orderHistory"] });
    },
  });
}
