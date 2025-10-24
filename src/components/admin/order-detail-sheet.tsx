"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { formatCurrency, formatDate, formatOrderId } from "@/lib/format-utils";
import { canCompleteOrder, canProcessOrder } from "@/lib/order-utils";
import {
  getPaymentTypeDisplayName,
  getStatusBadgeClass,
} from "@/lib/status-utils";
import type { Order } from "@/store/orders";
import { Icons } from "../ui/icons";

interface OrderDetailSheetProps {
  readonly isOpen: boolean;
  readonly onClose: () => void;
  readonly order: Order | null;
}

export function OrderDetailSheet({
  isOpen,
  onClose,
  order,
}: OrderDetailSheetProps) {
  if (!order) {
    return null;
  }

  const getActionButton = () => {
    if (canProcessOrder(order.status)) {
      return (
        <Button className="w-full bg-teal-600 text-white hover:bg-teal-700">
          Process Order
        </Button>
      );
    }

    if (canCompleteOrder(order.status)) {
      return (
        <Button className="w-full bg-green-600 text-white hover:bg-green-700">
          Mark as Completed
        </Button>
      );
    }

    return null;
  };

  return (
    <Sheet onOpenChange={onClose} open={isOpen}>
      <SheetContent className="w-[400px] p-0 sm:w-[540px]" side="right">
        <div className="flex h-full flex-col">
          <SheetHeader className="border-b px-6 py-4">
            <div className="flex items-center justify-between">
              <SheetTitle className="font-semibold text-lg">
                Order details
              </SheetTitle>
            </div>
          </SheetHeader>

          <div className="flex-1 space-y-6 overflow-y-auto px-6 py-4">
            {/* Order Status */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-gray-600 text-sm">Order Status</span>
                <Badge
                  className={getStatusBadgeClass(order.statusColor)}
                  variant="secondary"
                >
                  {order.displayStatus || order.status}
                </Badge>
              </div>

              {/* Products List */}
              <div className="space-y-3">
                {order.products.map((product) => (
                  <div
                    className="flex items-center gap-3 rounded-lg bg-gray-50 p-3"
                    key={product.productId}
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-secondary">
                      <Icons.Basket className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium text-gray-900">
                        {product.productName}
                      </h4>
                      <div className="mt-1 flex items-center gap-4 text-gray-600 text-sm">
                        <span>Qty: {product.quantity}</span>
                        <span>{formatCurrency(product.price)} each</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-medium text-sm">
                        {formatCurrency(product.price * product.quantity)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Action Button */}
              {getActionButton()}
            </div>

            <Separator />

            {/* Order Information */}
            <div className="space-y-4">
              <h3 className="font-semibold text-gray-900">Order Information</h3>

              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600 text-sm">Order ID</span>
                  <span className="font-medium text-sm">
                    {formatOrderId(order.orderId)}
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-gray-600 text-sm">Date</span>
                  <span className="font-medium text-sm">
                    {formatDate(order.dateOrdered)}
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-gray-600 text-sm">Items</span>
                  <span className="font-medium text-sm">
                    {order.numberOfItems}
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-gray-600 text-sm">Delivery Method</span>
                  <span className="font-medium text-sm">
                    {order.deliveryMethod}
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-gray-600 text-sm">Payment Method</span>
                  <span className="font-medium text-sm">
                    {getPaymentTypeDisplayName(order.paymentType)}
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-gray-600 text-sm">Payment Status</span>
                  <span
                    className={`font-medium text-sm ${
                      order.paid ? "text-green-600" : "text-red-600"
                    }`}
                  >
                    {order.paid ? "Paid" : "Pending Payment"}
                  </span>
                </div>

                <Separator />

                <div className="flex items-center justify-between">
                  <span className="font-semibold text-base">Total</span>
                  <span className="font-semibold text-base">
                    {formatCurrency(order.totalCost)}
                  </span>
                </div>
              </div>
            </div>

            {/* Pharmacy Information */}
            <Separator />
            <div className="space-y-4">
              <h3 className="font-semibold text-gray-900">
                Pharmacy Information
              </h3>
              <div className="space-y-2 text-sm">
                <p className="font-medium">{order.pharmacy.pharmacyName}</p>
                <p className="text-gray-600">
                  {order.pharmacy.firstName} {order.pharmacy.lastName}
                </p>
                <p className="text-gray-600">{order.pharmacy.email}</p>
                <p className="text-gray-600">{order.pharmacy.phoneNumber}</p>
                <p className="text-gray-600">{order.pharmacy.location}</p>
                <p className="text-gray-600 text-xs">
                  License: {order.pharmacy.licenceNumber}
                </p>
              </div>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
