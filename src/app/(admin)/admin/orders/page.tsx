"use client";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import { OrdersLoading } from "@/components/admin/orders-loading";
import OrdersManagement from "@/components/admin/orders-management";

function OrdersPageContent() {
  const searchParams = useSearchParams();

  const page = Number(searchParams.get("page")) || 1;
  const limit = Number(searchParams.get("limit")) || 10;
  const status = searchParams.get("status") || "All";

  return (
    <OrdersManagement
      initialLimit={limit}
      initialPage={page}
      initialStatus={status}
    />
  );
}

export default function OrdersPage() {
  return (
    <Suspense fallback={<OrdersLoading />}>
      <OrdersPageContent />
    </Suspense>
  );
}
