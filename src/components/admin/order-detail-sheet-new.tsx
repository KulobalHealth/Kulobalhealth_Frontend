'use client';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet';
import type { Order } from '@/store/orders';

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
  if (!order) return null;

  const getStatusBadgeClass = (color: string) => {
    switch (color) {
      case 'green':
        return 'bg-green-50 text-green-700 hover:bg-green-50';
      case 'blue':
        return 'bg-blue-50 text-blue-700 hover:bg-blue-50';
      case 'yellow':
        return 'bg-yellow-50 text-yellow-700 hover:bg-yellow-50';
      case 'red':
        return 'bg-red-50 text-red-700 hover:bg-red-50';
      case 'gray':
      default:
        return 'bg-gray-50 text-gray-700 hover:bg-gray-50';
    }
  };

  const getActionButton = () => {
    switch (order.status) {
      case 'New Order':
        return (
          <Button className="w-full bg-teal-600 text-white hover:bg-teal-700">
            Confirm Order
          </Button>
        );
      case 'Confirmed':
        return (
          <Button className="w-full bg-blue-600 text-white hover:bg-blue-700">
            Mark as In Transit
          </Button>
        );
      case 'In Transit':
        return (
          <Button className="w-full bg-green-600 text-white hover:bg-green-700">
            Mark as Delivered
          </Button>
        );
      default:
        return null;
    }
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
                  {order.status}
                </Badge>
              </div>

              {/* Product Item */}
              <div className="flex items-center gap-3 rounded-lg bg-gray-50 p-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-500">
                  <div className="h-8 w-8 rotate-12 transform rounded bg-blue-600" />
                </div>
                <div className="flex-1">
                  <h4 className="font-medium text-gray-900">
                    {order.productName}
                  </h4>
                  <div className="mt-1 flex items-center gap-4 text-gray-600 text-sm">
                    <span>Order No. {order.orderNumber}</span>
                  </div>
                </div>
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
                  <span className="text-gray-600 text-sm">Date</span>
                  <span className="font-medium text-sm">{order.orderDate}</span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-gray-600 text-sm">Pharmacy</span>
                  <span className="font-medium text-sm">
                    {order.pharmacyName}
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-gray-600 text-sm">Amount</span>
                  <span className="font-medium text-sm">{order.amount}</span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-gray-600 text-sm">Payment Status</span>
                  <span className="font-medium text-green-600 text-sm">
                    {order.paymentStatus}
                  </span>
                </div>

                <Separator />

                <div className="flex items-center justify-between">
                  <span className="font-semibold text-base">Total</span>
                  <span className="font-semibold text-base">
                    {order.amount}
                  </span>
                </div>
              </div>
            </div>

            {/* Customer Information */}
            {order.customerName && (
              <>
                <Separator />
                <div className="space-y-4">
                  <h3 className="font-semibold text-gray-900">
                    Customer Information
                  </h3>
                  <div className="space-y-2 text-sm">
                    <p className="font-medium">{order.customerName}</p>
                    {order.customerPhone && (
                      <p className="text-gray-600">{order.customerPhone}</p>
                    )}
                    {order.customerEmail && (
                      <p className="text-gray-600">{order.customerEmail}</p>
                    )}
                  </div>
                </div>
              </>
            )}

            {/* Delivery Address */}
            {order.deliveryAddress && (
              <>
                <Separator />
                <div className="space-y-4">
                  <h3 className="font-semibold text-gray-900">
                    Delivery Address
                  </h3>
                  <div className="space-y-2 text-sm">
                    <p className="text-gray-600">{order.deliveryAddress}</p>
                  </div>
                </div>
              </>
            )}

            {/* Notes */}
            {order.notes && (
              <>
                <Separator />
                <div className="space-y-4">
                  <h3 className="font-semibold text-gray-900">Notes</h3>
                  <div className="rounded-lg bg-gray-50 p-3 text-gray-600 text-sm">
                    {order.notes}
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
