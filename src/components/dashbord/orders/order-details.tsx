"use client";

import { ArrowLeft, CheckCircle, Clock, Truck, XCircle } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import type { Order } from "@/lib/order-data";
import CancelOrderModal from "./cancel-order-modal";

interface OrderDetailsProps {
  order: Order;
  onBack: () => void;
}

export default function OrderDetails({ order, onBack }: OrderDetailsProps) {
  const [showCancelModal, setShowCancelModal] = useState(false);

  const getStatusConfig = (status: string) => {
    switch (status) {
      case "processing":
        return {
          color: "bg-blue-50 text-blue-700 border-blue-200",
          dotColor: "bg-blue-500",
          icon: <Clock className="h-3 w-3" />,
        };
      case "shipped":
        return {
          color: "bg-orange-50 text-orange-700 border-orange-200",
          dotColor: "bg-orange-500",
          icon: <Truck className="h-3 w-3" />,
        };
      case "delivered":
        return {
          color: "bg-green-50 text-green-700 border-green-200",
          dotColor: "bg-green-500",
          icon: <CheckCircle className="h-3 w-3" />,
        };
      case "cancelled":
        return {
          color: "bg-red-50 text-red-700 border-red-200",
          dotColor: "bg-red-500",
          icon: <XCircle className="h-3 w-3" />,
        };
      default:
        return {
          color: "bg-gray-50 text-gray-700 border-gray-200",
          dotColor: "bg-gray-500",
          icon: <Clock className="h-3 w-3" />,
        };
    }
  };

  const getStepIcon = (stepName: string, completed: boolean) => {
    if (completed) {
      return (
        <svg
          className="h-3 w-3 text-white"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            clipRule="evenodd"
            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
            fillRule="evenodd"
          />
        </svg>
      );
    }

    // Show appropriate icons for incomplete steps
    switch (stepName.toLowerCase()) {
      case "order placed":
        return <CheckCircle className="h-3 w-3 text-gray-500" />;
      case "order confirmed":
        return <Clock className="h-3 w-3 text-gray-500" />;
      case "waiting to be picked":
        return <Clock className="h-3 w-3 text-gray-500" />;
      case "out for delivery":
        return <Truck className="h-3 w-3 text-gray-500" />;
      case "delivered":
        return <CheckCircle className="h-3 w-3 text-gray-500" />;
      default:
        return <Clock className="h-3 w-3 text-gray-500" />;
    }
  };

  const handleCancelOrder = () => {
    setShowCancelModal(true);
  };

  const handleConfirmCancel = (reason: string) => {
    console.log("Order cancelled with reason:", reason);
    // Here you would typically make an API call to cancel the order
    // For now, we'll just log the reason
  };

  const statusConfig = getStatusConfig(order.status);
  const completedSteps = order.trackingSteps.filter(
    (step) => step.completed
  ).length;
  const totalSteps = order.trackingSteps.length;

  return (
    <div className="min-h-screen w-full rounded-2xl border p-4">
      <div className="mx-auto max-w-5xl p-6">
        {/* Header */}
        <div className="mb-6 flex items-center">
          <Button
            className="h-auto p-0"
            onClick={onBack}
            size="sm"
            variant="ghost"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back
          </Button>
        </div>

        {/* Order Summary */}
        <Card className="mb-6 border-0 bg-transparent shadow-none">
          <CardContent className="p-6">
            <div className="flex items-start justify-between">
              {/* Group 1: Order Number */}
              <div className="flex-shrink-0">
                <div>
                  <p className="text-gray-600 text-sm">Order No.</p>
                  <p className="font-medium">{order.orderNumber}</p>
                </div>
              </div>

              {/* Group 2: Date and Expected Delivery (Vertical Stack) */}
              <div className="mx-8 flex flex-1 justify-center">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <p className="text-gray-600 text-sm">Date ordered:</p>
                    <p className="font-medium">{order.dateOrdered}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <p className="text-gray-600 text-sm">
                      Expected Delivery Date:
                    </p>
                    <p className="font-medium">{order.expectedDelivery}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <p className="text-gray-600 text-sm">Total:</p>
                    <p className="font-medium">{order.total}</p>
                  </div>
                </div>
              </div>

              {/* Group 3: Cancel Button */}
              <div className="flex-shrink-0">
                <Button
                  className="bg-orange-400 text-white hover:bg-orange-500"
                  onClick={handleCancelOrder}
                >
                  Cancel Order
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Product Details and Order Tracking Side by Side */}
        <div className="mb-6 grid gap-4 md:grid-cols-1">
          {/* Order Tracking */}
          <Card className="border-0 bg-transparent shadow-none">
            <CardContent className="p-6">
              <h2 className="mb-4 font-semibold text-lg">Order Tracking</h2>

              {/* Progress Bar */}
              <div className="relative mb-6">
                {/* Steps Container */}
                <div className="relative flex items-start justify-between">
                  {order.trackingSteps.map((step, index) => (
                    <div
                      className={`z-20 flex flex-col items-center ${
                        step.completed ? "" : "opacity-70"
                      }`}
                      key={index}
                    >
                      <div
                        className={`h-6 w-6 ${
                          step.completed ? "bg-green-500" : "bg-gray-300"
                        } mb-2 flex items-center justify-center rounded-full border-2 shadow-sm ${
                          step.completed ? "border-white" : "border-gray-200"
                        } relative`}
                        style={{
                          backgroundColor: step.completed
                            ? "#10b981"
                            : "#d1d5db",
                          position: "relative",
                          zIndex: 30,
                        }}
                      >
                        {getStepIcon(step.step, step.completed)}
                      </div>
                      <div className="text-center">
                        <p
                          className={`text-xs ${
                            step.completed
                              ? "font-medium text-gray-900"
                              : "text-gray-400"
                          }`}
                        >
                          {step.step}
                        </p>
                        {step.date && (
                          <p className="mt-1 text-gray-500 text-xs">
                            {step.date}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Connecting Lines Container - positioned for symmetrical behavior at both ends */}
                <div
                  className="absolute top-3 z-10 flex items-center"
                  style={{
                    left: "24px", // Start immediately after the first step container boundary
                    right: "24px", // End immediately before the last step container boundary
                  }}
                >
                  <div className="relative h-0.5 w-full overflow-hidden rounded-full bg-gray-300">
                    <div
                      className="h-full rounded-full bg-green-500 transition-all duration-500 ease-in-out"
                      style={{
                        width: `${Math.max(
                          0,
                          ((completedSteps - 1) / Math.max(1, totalSteps - 1)) *
                            100
                        )}%`,
                      }}
                    />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="overflow-hidden bg-white shadow-none duration-200">
            <CardContent className="p-0">
              <div className="flex h-[200px]">
                {/* Product Image - Takes 1/3 */}
                <div className="relative w-1/3">
                  <Image
                    alt={order.productName}
                    className="object-cover"
                    crossOrigin="anonymous"
                    fill
                    src={order.productImage || "/placeholder.svg"}
                  />
                </div>

                {/* Order Details - Takes 2/3 */}
                <div className="flex w-2/3 items-center p-4">
                  <div className="flex-grow">
                    <div className="space-y-2">
                      <h3 className="font-semibold text-gray-900 text-lg leading-tight">
                        {order.productName}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        Order No.&nbsp;&nbsp;
                        <span className="font-medium text-gray-800">
                          {order.orderNumber}
                        </span>
                      </p>
                    </div>

                    <div className="mt-6 space-y-2">
                      <Badge
                        className={`${statusConfig.color} hover:${statusConfig.color} inline-flex w-fit items-center rounded-full border px-3 py-1.5 font-light text-xs shadow-none`}
                      >
                        {statusConfig.icon}
                        <span className="ml-2">
                          {order.status.charAt(0).toUpperCase() +
                            order.status.slice(1)}
                        </span>
                      </Badge>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Payment and Delivery Details */}
        <div className="grid gap-6 md:grid-cols-2 ">
          {/* Payment Details */}
          <Card className="bg-white shadow-none ">
            <CardHeader className="h-[60px] border-gray-200 border-b ">
              <div className="flex items-center justify-between">
                <h2 className="font-semibold text-lg">Payment Details</h2>
              </div>
            </CardHeader>
            <CardContent className="p-8">
              <h3 className="mb-8 font-semibold text-gray-900 text-xl">
                Payment Details
              </h3>

              <div className="space-y-8">
                <div className="space-y-3">
                  <h4 className="font-medium text-base text-gray-900">
                    Payment Method
                  </h4>
                  <p className="pl-1 text-base text-gray-600">
                    {order.paymentMethod}
                  </p>
                </div>

                <div className="space-y-3">
                  <h4 className="font-medium text-base text-gray-900">
                    Payment Type
                  </h4>
                  <p className="pl-1 font-medium text-base text-blue-600">
                    {order.paymentType}
                  </p>
                </div>

                <div className="space-y-4">
                  <h4 className="font-medium text-base text-gray-900">
                    Details
                  </h4>
                  <div className=" space-y-4 rounded-lg p-6">
                    <div className="flex items-center justify-between">
                      <span className="text-base text-gray-600">
                        Item Total
                      </span>
                      <span className="font-medium text-base text-gray-900">
                        {order.itemTotal}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-base text-gray-600">
                        Delivery Fees
                      </span>
                      <span className="font-medium text-base text-gray-900">
                        {order.deliveryFees}
                      </span>
                    </div>
                    <div className="border-gray-200 border-t pt-4">
                      <div className="flex items-center justify-between">
                        <span className="font-semibold text-gray-900 text-lg">
                          Total
                        </span>
                        <span className="font-bold text-gray-900 text-lg">
                          {order.total}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Delivery Details */}
          <Card className="bg-white shadow-none transition-shadow duration-200">
            <CardHeader className="h-[60px] border-gray-200 border-b ">
              <div className="flex items-center justify-between">
                <h3 className="mb-8 font-semibold text-gray-900 text-xl">
                  Delivery Details
                </h3>
              </div>
            </CardHeader>
            <CardContent className="p-8">
              <div className="space-y-6">
                <div className="space-y-3">
                  <h4 className="font-medium text-base text-gray-900">
                    Delivery Address
                  </h4>
                  <div className=" rounded-lg p-6">
                    <div className="space-y-3 text-base text-gray-700 leading-relaxed">
                      <p className="font-medium">
                        {order.deliveryAddress.code}
                      </p>
                      <p>{order.deliveryAddress.street}</p>
                      <p>
                        {order.deliveryAddress.city},{" "}
                        {order.deliveryAddress.country}
                      </p>
                      <p className="font-medium text-gray-900">
                        {order.deliveryAddress.phone}
                      </p>
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
  );
}
