'use client';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import type { Order } from '@/store/orders';

const getStatusBadgeClass = (color: string) => {
  switch (color) {
    case 'green':
      return 'bg-success-50 text-success-700 border-success-200';
    case 'blue':
      return 'bg-primary-50 text-primary-700 border-primary-200';
    case 'yellow':
      return 'bg-warning-50 text-warning-700 border-warning-200';
    case 'red':
      return 'bg-red-50 text-red-700 border-red-200';
    default:
      return 'bg-neutral-100 text-neutral-700 border-neutral-300';
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
  if (!order) return null;

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
                {order.status}
              </Badge>
            </div>
            {order.status !== 'Delivered' && order.status !== 'Cancelled' && (
              <Button
                className="bg-primary-500 text-white hover:bg-primary-600"
                size="sm"
              >
                Update Status
              </Button>
            )}
          </div>

          {/* Product Information */}
          <div className="flex items-center gap-3 rounded-lg bg-gray-50 p-3">
            <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-primary-100">
              <div className="h-8 w-8 rounded bg-primary-500" />
            </div>
            <div>
              <h3 className="font-medium">{order.productName}</h3>
              <p className="text-gray-600 text-sm">{order.orderNumber}</p>
            </div>
          </div>

          {/* Order Information */}
          <div>
            <h3 className="mb-3 font-medium">Order Information</h3>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">Date Ordered:</span>
                <span>{order.orderDate}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Total Amount:</span>
                <span className="font-medium">{order.amount}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Payment Status:</span>
                <span className="text-success-600">{order.paymentStatus}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Pharmacy:</span>
                <span>{order.pharmacyName}</span>
              </div>
            </div>
          </div>

          {/* Customer & Delivery Information */}
          {order.customerName && (
            <div>
              <h3 className="mb-3 font-medium">Customer & Delivery</h3>
              <div className="space-y-1 text-sm">
                <div className="font-medium">{order.customerName}</div>
                {order.customerPhone && <div>{order.customerPhone}</div>}
                {order.customerEmail && <div>{order.customerEmail}</div>}
                {order.deliveryAddress && (
                  <div className="mt-2 border-gray-200 border-t pt-2">
                    <div className="mb-1 text-gray-600 text-xs">
                      Delivery Address:
                    </div>
                    <div>{order.deliveryAddress}</div>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Notes */}
          {order.notes && (
            <div>
              <h3 className="mb-3 font-medium">Notes</h3>
              <div className="rounded-lg bg-gray-50 p-3 text-gray-600 text-sm">
                {order.notes}
              </div>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
