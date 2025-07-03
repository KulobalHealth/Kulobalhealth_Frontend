'use client';

import { Filter } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { mockOrders, type Order } from '@/lib/order-data';
import OrderCard from './order-cards';
import OrderDetails from './order-details';

type TabType = 'all' | 'processing' | 'shipped' | 'delivered' | 'cancelled';

export default function Component() {
  const [activeTab, setActiveTab] = useState<TabType>('all');
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);

  const handleViewDetails = (order: Order) => {
    setSelectedOrder(order);
  };

  const handleBack = () => {
    setSelectedOrder(null);
  };

  const filteredOrders =
    activeTab === 'all'
      ? mockOrders
      : mockOrders.filter((order) => order.status === activeTab);

  const getTabCount = (tab: TabType) => {
    if (tab === 'all') return mockOrders.length;
    return mockOrders.filter((order) => order.status === tab).length;
  };

  const tabs = [
    { key: 'all' as TabType, label: 'All Orders' },
    { key: 'processing' as TabType, label: 'Processing' },
    { key: 'shipped' as TabType, label: 'Shipped' },
    { key: 'delivered' as TabType, label: 'Delivered' },
    { key: 'cancelled' as TabType, label: 'Cancelled' },
  ];

  if (selectedOrder) {
    return <OrderDetails onBack={handleBack} order={selectedOrder} />;
  }

  return (
    <div className="mx-auto min-h-screen w-full bg-background p-6">
      <h1 className="mb-6 font-semibold text-2xl text-gray-900">
        Orders & Purchase History
      </h1>

      {/* Navigation Tabs */}
      <div className="mb-6 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          {tabs.map((tab) => (
            <Button
              className={`rounded-full ${
                activeTab === tab.key
                  ? 'bg-green-600 text-white hover:bg-green-700'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              variant={activeTab === tab.key ? 'default' : 'ghost'}
            >
              {tab.label} ({getTabCount(tab.key)})
            </Button>
          ))}
        </div>

        <Button
          className="flex items-center gap-2 text-gray-600"
          variant="outline"
        >
          Filter by:
          <Filter className="h-4 w-4" />
        </Button>
      </div>

      {/* Orders List */}
      <div className="space-y-4">
        {filteredOrders.length > 0 ? (
          filteredOrders.map((order) => (
            <OrderCard
              key={order.id}
              onViewDetails={handleViewDetails}
              order={order}
            />
          ))
        ) : (
          <div className="py-12 text-center">
            <p className="text-gray-500 text-lg">
              No orders found for this category.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
