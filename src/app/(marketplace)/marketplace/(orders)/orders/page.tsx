'use client';

import { ArrowRight, CheckCircle, Clock, Filter } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { useMarketplaceStore } from '@/lib/store';
import Sidebar from '../sidebar';

const getStatusClasses = (status: string) => {
  switch (status) {
    case 'delivered':
      return 'bg-emerald-100 text-emerald-800';
    case 'cancelled':
      return 'bg-red-100 text-red-800';
    case 'shipped':
      return 'bg-amber-100 text-amber-800';
    default:
      return 'bg-blue-100 text-blue-800';
  }
};

export default function OrderHistory() {
  const { orders } = useMarketplaceStore();
  const [filterStatus, setFilterStatus] = useState<string>('all');

  const filterOptions = [
    { label: 'All Orders', value: 'all' },
    { label: 'Processing', value: 'processing' },
    { label: 'Shipped', value: 'shipped' },
    { label: 'Delivered', value: 'delivered' },
    { label: 'Cancelled', value: 'cancelled' },
  ];

  const filteredOrders =
    filterStatus === 'all'
      ? orders
      : orders.filter((order) => order.status === filterStatus);

  return (
    <div className="container mx-auto flex flex-col md:flex-row">
      <Sidebar />

      <div className="flex-1 p-4 md:p-8">
        <div className="mb-6">
          <h1 className="font-bold text-xl">Orders & Purchase History</h1>

          <div className="mt-4 flex flex-wrap gap-2">
            {filterOptions.map((option) => (
              <Button
                className={`rounded-full text-sm ${
                  filterStatus === option.value
                    ? 'bg-emerald-500 text-white hover:bg-emerald-600'
                    : ''
                }`}
                key={option.value}
                onClick={() => setFilterStatus(option.value)}
                variant={filterStatus === option.value ? 'default' : 'outline'}
              >
                {option.label}
              </Button>
            ))}
            <div className="ml-auto">
              <Button className="text-sm" variant="outline">
                Filter by <Filter className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          {filteredOrders.length > 0 ? (
            filteredOrders.map((order) => (
              <div
                className="overflow-hidden rounded-lg border bg-white dark:bg-background"
                key={order.id}
              >
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
                    <h3 className="font-bold text-xl">
                      {order.items.length} items
                    </h3>
                    <p className="mt-1 text-gray-500 text-sm">
                      Order No. #{order.id}
                    </p>

                    <div
                      className={`mt-4 inline-flex items-center rounded-full px-2 py-1 ${getStatusClasses(
                        order.status
                      )} text-xs`}
                    >
                      {order.status === 'delivered' ? (
                        <CheckCircle className="mr-1 h-3 w-3" />
                      ) : (
                        <Clock className="mr-1 h-3 w-3" />
                      )}
                      {order.status.charAt(0).toUpperCase() +
                        order.status.slice(1)}
                    </div>
                    <div className="mt-1 text-gray-500 text-sm">
                      {new Date(order.createdAt).toLocaleDateString('en-GB', {
                        day: 'numeric',
                        month: 'short',
                        year: 'numeric',
                      })}
                    </div>
                  </div>

                  <div className="flex items-center">
                    <Link href={`/marketplace/orders/${order.id}`}>
                      <Button
                        className="border-emerald-500 text-emerald-500 hover:bg-emerald-50"
                        variant="outline"
                      >
                        View details <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="py-8 text-center text-gray-500">
              No orders found
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
