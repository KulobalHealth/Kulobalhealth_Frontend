"use client"

import { useState } from "react"
import { ArrowLeft, Clock, Truck, CheckCircle, XCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent,  CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import type { Order } from "@/lib/order-data"
import CancelOrderModal from "./cancel-order-modal"

interface OrderDetailsProps {
  order: Order
  onBack: () => void
}

export default function OrderDetails({ order, onBack }: OrderDetailsProps) {
  const [showCancelModal, setShowCancelModal] = useState(false)

  const getStatusConfig = (status: string) => {
    switch (status) {
      case "processing":
        return {
          color: "bg-blue-50 text-blue-700 border-blue-200",
          dotColor: "bg-blue-500",
          icon: <Clock className="w-3 h-3" />,
        }
      case "shipped":
        return {
          color: "bg-orange-50 text-orange-700 border-orange-200",
          dotColor: "bg-orange-500",
          icon: <Truck className="w-3 h-3" />,
        }
      case "delivered":
        return {
          color: "bg-green-50 text-green-700 border-green-200",
          dotColor: "bg-green-500",
          icon: <CheckCircle className="w-3 h-3" />,
        }
      case "cancelled":
        return {
          color: "bg-red-50 text-red-700 border-red-200",
          dotColor: "bg-red-500",
          icon: <XCircle className="w-3 h-3" />,
        }
      default:
        return {
          color: "bg-gray-50 text-gray-700 border-gray-200",
          dotColor: "bg-gray-500",
          icon: <Clock className="w-3 h-3" />,
        }
    }
  }

  const getStepIcon = (stepName: string, completed: boolean) => {
    if (completed) {
      return (
        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
            clipRule="evenodd"
          />
        </svg>
      )
    }

    // Show appropriate icons for incomplete steps
    switch (stepName.toLowerCase()) {
      case "order placed":
        return <CheckCircle className="w-3 h-3 text-gray-500" />
      case "order confirmed":
        return <Clock className="w-3 h-3 text-gray-500" />
      case "waiting to be picked":
        return <Clock className="w-3 h-3 text-gray-500" />
      case "out for delivery":
        return <Truck className="w-3 h-3 text-gray-500" />
      case "delivered":
        return <CheckCircle className="w-3 h-3 text-gray-500" />
      default:
        return <Clock className="w-3 h-3 text-gray-500" />
    }
  }

  const handleCancelOrder = () => {
    setShowCancelModal(true)
  }

  const handleConfirmCancel = (reason: string) => {
    console.log("Order cancelled with reason:", reason)
    // Here you would typically make an API call to cancel the order
    // For now, we'll just log the reason
  }

  const statusConfig = getStatusConfig(order.status)
  const completedSteps = order.trackingSteps.filter((step) => step.completed).length
  const totalSteps = order.trackingSteps.length

  return (
    <div className="w-full min-h-screen p-4 border rounded-2xl">
      <div className="max-w-5xl mx-auto p-6">
        {/* Header */}
        <div className="flex items-center mb-6">
          <Button variant="ghost" size="sm" className="p-0 h-auto" onClick={onBack}>
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back
          </Button>
        </div>

        {/* Order Summary */}
        <Card className="mb-6 shadow-none border-0 bg-transparent">
          <CardContent className="p-6">
            <div className="flex justify-between items-start">
              {/* Group 1: Order Number */}
              <div className="flex-shrink-0">
                <div>
                  <p className="text-sm text-gray-600">Order No.</p>
                  <p className="font-medium">{order.orderNumber}</p>
                </div>
              </div>

              {/* Group 2: Date and Expected Delivery (Vertical Stack) */}
              <div className="flex-1 mx-8 flex justify-center">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <p className="text-sm text-gray-600">Date ordered:</p>
                    <p className="font-medium">{order.dateOrdered}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <p className="text-sm text-gray-600">Expected Delivery Date:</p>
                    <p className="font-medium">{order.expectedDelivery}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <p className="text-sm text-gray-600">Total:</p>
                    <p className="font-medium">{order.total}</p>
                  </div>
                </div>
              </div>

              {/* Group 3: Cancel Button */}
              <div className="flex-shrink-0">
                <Button className="bg-orange-400 hover:bg-orange-500 text-white" onClick={handleCancelOrder}>
                  Cancel Order
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Product Details and Order Tracking Side by Side */}
        <div className="grid md:grid-cols-1 gap-4 mb-6">
          {/* Order Tracking */}
          <Card className="shadow-none border-0 bg-transparent">
            <CardContent className="p-6">
              <h2 className="text-lg font-semibold mb-4">Order Tracking</h2>

              {/* Progress Bar */}
              <div className="relative mb-6">
                {/* Steps Container */}
                <div className="flex justify-between items-start relative">
                  {order.trackingSteps.map((step, index) => (
                    <div
                      key={index}
                      className={`flex flex-col items-center z-20 ${!step.completed ? "opacity-70" : ""}`}
                    >
                      <div
                        className={`w-6 h-6 ${
                          step.completed ? "bg-green-500" : "bg-gray-300"
                        } rounded-full flex items-center justify-center mb-2 shadow-sm border-2 ${
                          step.completed ? "border-white" : "border-gray-200"
                        } relative`}
                        style={{
                          backgroundColor: step.completed ? "#10b981" : "#d1d5db",
                          position: "relative",
                          zIndex: 30,
                        }}
                      >
                        {getStepIcon(step.step, step.completed)}
                      </div>
                      <div className="text-center">
                        <p className={`text-xs ${step.completed ? "font-medium text-gray-900" : "text-gray-400"}`}>
                          {step.step}
                        </p>
                        {step.date && <p className="text-xs text-gray-500 mt-1">{step.date}</p>}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Connecting Lines Container - positioned for symmetrical behavior at both ends */}
                <div
                  className="absolute top-3 flex items-center z-10"
                  style={{
                    left: "24px", // Start immediately after the first step container boundary
                    right: "24px", // End immediately before the last step container boundary
                  }}
                >
                  <div className="w-full h-0.5 bg-gray-300 relative overflow-hidden rounded-full">
                    <div
                      className="h-full bg-green-500 transition-all duration-500 ease-in-out rounded-full"
                      style={{
                        width: `${Math.max(0, ((completedSteps - 1) / Math.max(1, totalSteps - 1)) * 100)}%`,
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-none overflow-hidden duration-200">
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
                <div className="w-2/3 p-4 flex items-center">
                  <div className="flex-grow">
                    <div className="space-y-2">
                      <h3 className="text-lg font-semibold text-gray-900 leading-tight">{order.productName}</h3>
                      <p className="text-sm text-gray-600">
                        Order No.&nbsp;&nbsp;<span className="font-medium text-gray-800">{order.orderNumber}</span>
                      </p>
                    </div>

                    <div className="mt-6 space-y-2">
                      <Badge
                        className={`${statusConfig.color} hover:${statusConfig.color} px-3 py-1.5 text-xs font-light border inline-flex items-center w-fit rounded-full shadow-none`}
                      >
                        {statusConfig.icon}
                        <span className="ml-2">{order.status.charAt(0).toUpperCase() + order.status.slice(1)}</span>
                      </Badge>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Payment and Delivery Details */}
        <div className="grid md:grid-cols-2 gap-6 ">
          {/* Payment Details */}
          <Card className="bg-white shadow-none ">
            <CardHeader className="border-b border-gray-200 h-[60px] ">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold">Payment Details</h2>
              </div>
            </CardHeader>
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-8">Payment Details</h3>

              <div className="space-y-8">
                <div className="space-y-3">
                  <h4 className="text-base font-medium text-gray-900">Payment Method</h4>
                  <p className="text-base text-gray-600 pl-1">{order.paymentMethod}</p>
                </div>

                <div className="space-y-3">
                  <h4 className="text-base font-medium text-gray-900">Payment Type</h4>
                  <p className="text-base text-blue-600 font-medium pl-1">{order.paymentType}</p>
                </div>

                <div className="space-y-4">
                  <h4 className="text-base font-medium text-gray-900">Details</h4>
                  <div className=" rounded-lg p-6 space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-base text-gray-600">Item Total</span>
                      <span className="text-base font-medium text-gray-900">{order.itemTotal}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-base text-gray-600">Delivery Fees</span>
                      <span className="text-base font-medium text-gray-900">{order.deliveryFees}</span>
                    </div>
                    <div className="border-t border-gray-200 pt-4">
                      <div className="flex justify-between items-center">
                        <span className="text-lg font-semibold text-gray-900">Total</span>
                        <span className="text-lg font-bold text-gray-900">{order.total}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Delivery Details */}
          <Card className="bg-white shadow-none transition-shadow duration-200">
            <CardHeader className="border-b border-gray-200 h-[60px] ">
              <div className="flex items-center justify-between">
       <h3 className="text-xl font-semibold text-gray-900 mb-8">Delivery Details</h3>
              </div>
            </CardHeader>
            <CardContent className="p-8">
             

              <div className="space-y-6">
                <div className="space-y-3">
                  <h4 className="text-base font-medium text-gray-900">Delivery Address</h4>
                  <div className=" rounded-lg p-6">
                    <div className="space-y-3 text-base text-gray-700 leading-relaxed">
                      <p className="font-medium">{order.deliveryAddress.code}</p>
                      <p>{order.deliveryAddress.street}</p>
                      <p>
                        {order.deliveryAddress.city}, {order.deliveryAddress.country}
                      </p>
                      <p className="font-medium text-gray-900">{order.deliveryAddress.phone}</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Cancel Order Modal */}
      <CancelOrderModal
        isOpen={showCancelModal}
        onClose={() => setShowCancelModal(false)}
        onConfirm={handleConfirmCancel}
        orderNumber={order.orderNumber}
      />
    </div>
  )
}
