"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import type { Order } from "@/store/orders";

const getStatusBadgeClass = (color: string | undefined) => {
  switch (color) {
    case "green":
      return "bg-success-50 text-success-700 border-success-200";
    case "blue":
      return "bg-primary-50 text-primary-700 border-primary-200";
    case "yellow":
      return "bg-warning-50 text-warning-700 border-warning-200";
    case "red":
      return "bg-red-50 text-red-700 border-red-200";
    default:
      return "bg-neutral-100 text-neutral-700 border-neutral-300";
  }
};

interface OrderDetailsModalProps {
  readonly isOpen: boolean;
  readonly onClose: () => void;
  readonly order: Order | null;
}

export function OrderDetailsModal({
  isOpen,
  onClose,
  order,
}: OrderDetailsModalProps) {
  if (!order) {
    return null;
  }

  const formatCurrency = (amount: number) => {
    return `GHS ${amount.toFixed(2)}`;
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-GB", {
      weekday: "short",
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  };

  return (
    <Dialog onOpenChange={onClose} open={isOpen}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Order details</DialogTitle>
        </DialogHeader>

        <div className="space-y-6 py-4">
          {/* Order Status */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-gray-600 text-sm">Order Status</span>
              <Badge
                className={getStatusBadgeClass(order.statusColor)}
                variant="outline"
              >
                {order.displayStatus || order.status}
              </Badge>
            </div>
            {order.status !== "COMPLETED" && order.status !== "CANCELLED" && (
              <Button
                className="bg-primary-500 text-white hover:bg-primary-600"
                size="sm"
              >
                Update Status
              </Button>
            )}
          </div>

          {/* Products Information */}
          <div className="space-y-3">
            {order.products.map((product) => (
              <div
                className="flex items-center gap-3 rounded-lg bg-gray-50 p-3"
                key={product.productId}
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-primary-100">
                  <div className="h-8 w-8 rounded bg-primary-500" />
                </div>
                <div className="flex-1">
                  <h3 className="font-medium">{product.productName}</h3>
                  <p className="text-gray-600 text-sm">
                    Qty: {product.quantity} × {formatCurrency(product.price)}
                  </p>
                </div>
                <div className="text-right">
                  <p className="font-medium">
                    {formatCurrency(product.price * product.quantity)}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Order Information */}
          <div>
            <h3 className="mb-3 font-medium">Order Information</h3>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">Order ID:</span>
                <span>#{order.orderId.slice(-8)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Date Ordered:</span>
                <span>{formatDate(order.dateOrdered)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Items:</span>
                <span>{order.numberOfItems}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Delivery Method:</span>
                <span>{order.deliveryMethod}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Payment Method:</span>
                <span>
                  {order.paymentType === "PAYMENT_ON_ONLINE"
                    ? "Online Payment"
                    : "Payment on Delivery"}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Payment Status:</span>
                <span
                  className={order.paid ? "text-success-600" : "text-red-600"}
                >
                  {order.paid ? "Paid" : "Pending Payment"}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Total Amount:</span>
                <span className="font-medium">
                  {formatCurrency(order.totalCost)}
                </span>
              </div>
            </div>
          </div>

          {/* Pharmacy Information */}
          <div>
            <h3 className="mb-3 font-medium">Pharmacy Information</h3>
            <div className="space-y-1 text-sm">
              <div className="font-medium">{order.pharmacy.pharmacyName}</div>
              <div>
                {order.pharmacy.firstName} {order.pharmacy.lastName}
              </div>
              <div>{order.pharmacy.email}</div>
              <div>{order.pharmacy.phoneNumber}</div>
              <div className="mt-2 border-gray-200 border-t pt-2">
                <div className="mb-1 text-gray-600 text-xs">Location:</div>
                <div>{order.pharmacy.location}</div>
                <div className="text-gray-600 text-xs">
                  License: {order.pharmacy.licenceNumber}
                </div>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
