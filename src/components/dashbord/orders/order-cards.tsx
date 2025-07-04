"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ChevronRight, Clock, Truck, CheckCircle, XCircle } from "lucide-react"
import Image from "next/image"
import type { Order } from "@/lib/order-data"

interface OrderCardProps {
  order: Order
  onViewDetails: (order: Order) => void
}

export default function OrderCard({ order, onViewDetails }: OrderCardProps) {
  const getStatusConfig = (status: string) => {
    switch (status) {
      case "processing":
        return {
          color: "bg-blue-50 text-blue-700  dark:bg-blue-950/50 dark:text-blue-300 ",
          dotColor: "bg-blue-500",
          icon: <Clock className="w-3 h-3" />,
        }
      case "shipped":
        return {
          color:
            "bg-orange-50 text-orange-700  dark:bg-orange-950/60 dark:text-orange-300 dark:",
          dotColor: "bg-orange-500",
          icon: <Truck className="w-3 h-3" />,
        }
      case "delivered":
        return {
          color:
            "bg-green-50 text-green-700  dark:bg-green-950/50 dark:text-green-300 ",
          dotColor: "bg-green-500",
          icon: <CheckCircle className="w-3 h-3" />,
        }
      case "cancelled":
        return {
          color: "bg-red-50 text-red-700 dark:bg-red-950/50 dark:text-red-300 ",
          dotColor: "bg-red-500",
          icon: <XCircle className="w-3 h-3" />,
        }
      default:
        return {
          color: "bg-gray-50 text-gray-700 dark:bg-gray-900 dark:text-gray-300 ",
          dotColor: "bg-gray-500",
          icon: <Clock className="w-3 h-3" />,
        }
    }
  }

  const statusConfig = getStatusConfig(order.status)

  return (
    <Card className="bg-white dark:bg-background shadow-none overflow-hidden w-full mb-4 ">
      <CardContent className="p-0">
        <div className="flex h-[200px]">
          {/* Product Image - Takes 1/3 */}
          <div className="w-1/3 relative">
            <Image
              src={order.productImage || "/placeholder.svg"}
              alt={order.productName}
              fill
              className="object-cover"
              crossOrigin="anonymous"
            />
          </div>

          {/* Order Details - Takes 2/3 */}
          <div className="w-2/3 p-8 flex items-center justify-between">
            <div className="flex-grow">
              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 leading-tight">
                  {order.productName}
                </h3>
                <p className="text-base text-gray-600 dark:text-gray-400">
                  Order No.&nbsp;&nbsp;
                  <span className="font-medium text-gray-800 dark:text-gray-200">{order.orderNumber}</span>
                </p>
              </div>

              <div className="mt-10 space-y-3">
                <Badge
                  className={`${statusConfig.color} hover:${statusConfig.color} px-2 py-1.5 text-xs font-light inline-flex items-center w-fit shadow-none rounded-full`}
                >
                  {statusConfig.icon}
                  <span className="ml-2">{order.status.charAt(0).toUpperCase() + order.status.slice(1)}</span>
                </Badge>
                <div className="text-base text-gray-600 dark:text-gray-400 font-medium">{order.dateOrdered}</div>
              </div>
            </div>

            {/* View Details Button */}
            <div className="flex-shrink-0 ml-8">
              <Button
                variant="outline"
                onClick={() => onViewDetails(order)}
                className="border-green-600 dark:border-green-500 text-green-600 dark:text-green-400 hover:bg-green-50 dark:hover:bg-green-950 flex items-center gap-2 px-6 py-3 text-base font-medium transition-colors duration-200"
              >
                View details
                <ChevronRight className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
