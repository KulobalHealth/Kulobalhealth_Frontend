'use client';

import { ArrowLeft, ArrowRight, CheckCircle } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { useMarketplaceStore } from '@/lib/store';
import Sidebar from '../../sidebar';

export default function OrderDetails() {
  const params = useParams();
  const { getOrderById } = useMarketplaceStore();
  const order = getOrderById(params.id as string);

  if (!order) {
    return <div>Order not found</div>;
  }

  return (
    <div className="container mx-auto flex flex-col md:flex-row">
      <Sidebar />
      <div className="flex-1 p-4 md:p-8">
        <div className="mb-6 flex items-center justify-between">
          <Link
            className="inline-flex items-center font-medium text-sm"
            href="/marketplace/orders"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back
          </Link>

          <Button className="bg-emerald-500 hover:bg-emerald-600">
            Order again <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>

        <div className="mb-6 grid grid-cols-1 gap-4 md:grid-cols-2">
          <div>
            <div className="text-gray-500 text-sm">Order No.</div>
            <div className="font-medium">#{order.id}</div>
          </div>
          <div>
            <div className="text-gray-500 text-sm">Date ordered:</div>
            <div className="font-medium">
              {new Date(order.createdAt).toLocaleDateString('en-GB', {
                day: 'numeric',
                month: 'short',
                year: 'numeric',
              })}
            </div>
          </div>
          <div>
            <div className="text-gray-500 text-sm">Date delivered:</div>
            <div className="font-medium">
              {order.deliveredAt
                ? new Date(order.deliveredAt).toLocaleDateString('en-GB', {
                    day: 'numeric',
                    month: 'short',
                    year: 'numeric',
                  })
                : 'Pending'}
            </div>
          </div>
          <div>
            <div className="text-gray-500 text-sm">Total:</div>
            <div className="font-medium">GHS {order.total.toFixed(2)}</div>
          </div>
        </div>

        <div className="mb-6 overflow-hidden rounded-lg border bg-white dark:bg-background">
          <div className="flex flex-col gap-4 p-4 md:flex-row">
            <div className="flex h-36 w-full items-center justify-center rounded-md bg-gray-100 p-4 md:w-36 dark:bg-neutral-900">
              <Image
                alt="Product"
                className="object-contain"
                height={120}
                src="/med.png"
                width={120}
              />
            </div>

            <div className="flex-1">
              <h3 className="font-bold text-xl">Order Items</h3>
              <div className="mt-2 space-y-2">
                {order.items.map((item) => (
                  <div className="flex justify-between" key={item.productId}>
                    <span>{item.quantity}x Product</span>
                    <span>GHS {(item.price * item.quantity).toFixed(2)}</span>
                  </div>
                ))}
              </div>

              <div
                className={`mt-4 inline-flex items-center rounded-full px-2 py-1 ${
                  order.status === 'delivered'
                    ? 'bg-emerald-100 text-emerald-800'
                    : order.status === 'cancelled'
                      ? 'bg-red-100 text-red-800'
                      : order.status === 'shipped'
                        ? 'bg-amber-100 text-amber-800'
                        : 'bg-blue-100 text-blue-800'
                } text-xs`}
              >
                <CheckCircle className="mr-1 h-3 w-3" />
                {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
              </div>
            </div>
          </div>
        </div>

        <div className="mb-6 grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="overflow-hidden rounded-lg border bg-white dark:bg-background">
            <div className="border-b p-4">
              <h2 className="font-bold">Payment Details</h2>
            </div>

            <div className="p-4">
              <div className="space-y-3">
                <div>
                  <div className="text-gray-500 text-sm">Payment Method</div>
                  <div className="font-medium">
                    {order.paymentMethod === 'mobile-money'
                      ? `Mobile Money (${order.paymentDetails.network})`
                      : `Card ending in ${order.paymentDetails.cardLast4}`}
                  </div>
                </div>

                <div>
                  <div className="text-gray-500 text-sm">Payment Type</div>
                  <div className="font-medium text-emerald-500">
                    {order.paymentType.charAt(0).toUpperCase() +
                      order.paymentType.slice(1)}{' '}
                    Payment
                  </div>
                </div>

                <div className="pt-2">
                  <div className="font-medium text-sm">Details</div>

                  <div className="mt-2 space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-500 text-sm">Item Total</span>
                      <span className="text-sm">
                        GHS {order.total.toFixed(2)}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500 text-sm">
                        Delivery Fees
                      </span>
                      <span className="text-sm">GHS 0.00</span>
                    </div>
                    <div className="flex justify-between font-medium">
                      <span className="text-gray-500 text-sm">Total:</span>
                      <span className="text-sm">
                        GHS {order.total.toFixed(2)}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="overflow-hidden rounded-lg border bg-white dark:bg-background">
            <div className="border-b p-4">
              <h2 className="font-bold">Delivery Details</h2>
            </div>

            <div className="p-4">
              <div className="space-y-3">
                <div>
                  <div className="text-gray-500 text-sm">Delivery Address</div>
                  <div className="font-medium">
                    {order.shippingAddress.gpsAddress}
                  </div>
                  <div className="text-sm">
                    {order.shippingAddress.streetAddress}
                  </div>
                  <div className="text-sm">
                    {order.shippingAddress.location}
                  </div>
                  <div className="text-sm">{order.shippingAddress.phone}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="overflow-hidden rounded-lg border bg-white dark:bg-background">
          <div className="border-b p-4">
            <h2 className="font-bold">Order Tracking</h2>
          </div>

          <div className="p-4">
            <div className="relative">
              <div className="absolute top-0 bottom-0 left-4 w-0.5 bg-emerald-500" />

              <div className="space-y-6">
                {order.tracking.map((track, index) => (
                  <div className="relative pl-10" key={index}>
                    <div className="absolute top-1 left-0 flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500">
                      <CheckCircle className="h-5 w-5 text-white" />
                    </div>
                    <div className="font-medium">{track.status}</div>
                    <div className="text-gray-500 text-sm">
                      {new Date(track.date).toLocaleDateString('en-GB', {
                        day: 'numeric',
                        month: 'short',
                        year: 'numeric',
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
