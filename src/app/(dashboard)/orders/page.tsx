import React from "react";
import OrdersHistory from "@/components/dashbord/orders/orders-history";

export default function Orders() {
  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-background px-24 ">
      <OrdersHistory />
    </div>
  );
}
