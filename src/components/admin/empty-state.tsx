import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

interface EmptyStateProps {
  readonly onAddProduct: () => void;
}

export function EmptyState({ onAddProduct }: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center py-16">
      <div className="mb-6 h-48 w-64">
        <svg className="h-full w-full" viewBox="0 0 300 200">
          {/* Laptop */}
          <rect
            fill="#e5e7eb"
            height="80"
            rx="4"
            stroke="#d1d5db"
            strokeWidth="2"
            width="120"
            x="50"
            y="80"
          />
          <rect fill="#f3f4f6" height="65" width="110" x="55" y="85" />
          <rect fill="#d1d5db" height="8" width="20" x="105" y="160" />
          <rect fill="#d1d5db" height="4" rx="2" width="60" x="85" y="168" />

          {/* Medical cross on screen */}
          <rect fill="#10b981" height="6" rx="3" width="30" x="95" y="105" />
          <rect fill="#10b981" height="30" rx="3" width="6" x="107" y="93" />

          {/* Person */}
          <circle cx="200" cy="60" fill="#6b7280" r="15" />
          <rect fill="#6b7280" height="40" rx="15" width="30" x="185" y="75" />
          <rect fill="#6b7280" height="25" rx="7" width="15" x="175" y="85" />
          <rect fill="#6b7280" height="25" rx="7" width="15" x="210" y="85" />
          <rect fill="#6b7280" height="25" rx="4" width="8" x="190" y="115" />
          <rect fill="#6b7280" height="25" rx="4" width="8" x="202" y="115" />
        </svg>
      </div>
      <h3 className="mb-2 font-medium text-lg">No products added yet</h3>
      <p className="mb-6 max-w-md text-center text-gray-600">
        You have not added any product yet. Click on the button below to add
        your first product
      </p>
      <Button
        className="bg-primary-500 text-white hover:bg-primary-600"
        onClick={onAddProduct}
      >
        <Plus className="mr-2 h-4 w-4" />
        Add New Product
      </Button>
    </div>
  );
}
