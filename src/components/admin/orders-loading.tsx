import { Loader2 } from "lucide-react";

export function OrdersLoading() {
  return (
    <div className="flex min-h-screen">
      <div className="flex-1 p-6">
        <div className="mb-6">
          <h1 className="mb-1 font-bold text-2xl">Orders Management</h1>
          <p className="text-gray-600">
            View and manage all orders from marketplace
          </p>
        </div>

        <div className="flex items-center justify-center py-12">
          <div className="flex flex-col items-center gap-4">
            <Loader2 className="h-8 w-8 animate-spin text-primary-500" />
            <p className="text-gray-600">Loading orders...</p>
          </div>
        </div>
      </div>
    </div>
  );
}
