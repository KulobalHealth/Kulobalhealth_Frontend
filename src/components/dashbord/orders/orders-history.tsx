"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Filter } from "lucide-react"
import { mockOrders, type Order } from "@/lib/order-data"
import OrderCard from "./order-cards"
import OrderDetails from "./order-details"

type TabType = "all" | "processing" | "shipped" | "delivered" | "cancelled"

export default function Component() {
  const [activeTab, setActiveTab] = useState<TabType>("all")
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null)

  const handleViewDetails = (order: Order) => {
    setSelectedOrder(order)
  }

  const handleBack = () => {
    setSelectedOrder(null)
  }

  const filteredOrders = activeTab === "all" ? mockOrders : mockOrders.filter((order) => order.status === activeTab)

  const getTabCount = (tab: TabType) => {
    if (tab === "all") return mockOrders.length
    return mockOrders.filter((order) => order.status === tab).length
  }

  const tabs = [
    { key: "all" as TabType, label: "All Orders" },
    { key: "processing" as TabType, label: "Processing" },
    { key: "shipped" as TabType, label: "Shipped" },
    { key: "delivered" as TabType, label: "Delivered" },
    { key: "cancelled" as TabType, label: "Cancelled" },
  ]

  if (selectedOrder) {
    return <OrderDetails order={selectedOrder} onBack={handleBack} />
  }

  return (
    <div className="w-full mx-auto p-6 bg-background min-h-screen">
      <h1 className="text-2xl font-semibold text-gray-900 mb-6 dark:text-white ">Orders & Purchase History</h1>

      {/* Navigation Tabs */}
      <div className="flex items-center justify-between mb-6 dark:text-white">
        <div className="flex items-center space-x-2 dark:text-white">
          {tabs.map((tab) => (
            <Button
              key={tab.key}
              variant={activeTab === tab.key ? "default" : "ghost"}
              className={`rounded-full ${
                activeTab === tab.key
                  ? "bg-green-600 hover:bg-green-700 text-white"
                  : "text-gray-600 hover:text-gray-900 dark:text-white"
              }`}
              onClick={() => setActiveTab(tab.key)}
            >
              {tab.label} ({getTabCount(tab.key)})
            </Button>
          ))}
        </div>

        <Button variant="outline" className="flex items-center gap-2 text-gray-600 dark:text-white dark:border-0">
          Filter by:
           <Filter className="w-4 h-4" />
        </Button>
      </div>

      {/* Orders List */}
      <div className="space-y-4">
        {filteredOrders.length > 0 ? (
          filteredOrders.map((order) => <OrderCard key={order.id} order={order} onViewDetails={handleViewDetails} />)
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No orders found for this category.</p>
          </div>
        )}
      </div>
    </div>
  )
}
