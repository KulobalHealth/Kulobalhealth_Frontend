import type { Order } from "@/hooks/use-orders";

export const getMainProduct = (products: Order["products"]) => {
  if (products.length === 0) {
    return null;
  }
  return products[0];
};

export const hasMultipleProducts = (products: Order["products"]): boolean => {
  return products.length > 1;
};

export const getProductCountText = (products: Order["products"]): string => {
  const count = products.length;
  if (count <= 1) return "";
  return `+${count - 1} more`;
};

export const isOrderEditable = (status: string): boolean => {
  return status !== "COMPLETED" && status !== "CANCELLED";
};

export const canProcessOrder = (status: string): boolean => {
  return status === "PENDING";
};

export const canCompleteOrder = (status: string): boolean => {
  return status === "PROCESSING";
};

export const canCancelOrder = (status: string): boolean => {
  return status !== "COMPLETED" && status !== "CANCELLED";
};
