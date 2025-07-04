"use client";

import { Button } from "@/components/ui/button";
import { Package, Search, Plus } from "lucide-react";

interface ProductsCenterStatesProps {
  readonly state: "loading" | "empty" | "no-results";
  readonly onTryAgain?: () => void;
  readonly onAddProduct?: () => void;
}

export function ProductsCenterStates({
  state,
  onTryAgain,
  onAddProduct,
}: ProductsCenterStatesProps) {
  if (state === "loading") {
    return (
      <div className="flex flex-col items-center justify-center py-16 bg-white rounded-lg shadow-sm border">
        <div className="w-12 h-12 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin mb-4" />
        <p className="text-gray-600">Loading products...</p>
      </div>
    );
  }

  if (state === "empty") {
    return (
      <div className="flex flex-col items-center justify-center py-16 bg-white rounded-lg shadow-sm border">
        <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-6">
          <Package className="w-12 h-12 text-gray-400" />
        </div>
        <h3 className="text-lg font-medium text-gray-900 mb-2">
          No products added yet
        </h3>
        <p className="text-gray-600 text-center max-w-md mb-6">
          You have not added any products yet. Click on the button below to add
          your first product.
        </p>
        <Button
          onClick={onAddProduct}
          className="bg-blue-600 hover:bg-blue-700 text-white"
        >
          <Plus className="w-4 h-4 mr-2" />
          Add New Product
        </Button>
      </div>
    );
  }

  if (state === "no-results") {
    return (
      <div className="flex flex-col items-center justify-center py-16 bg-white rounded-lg shadow-sm border">
        <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-6">
          <Search className="w-12 h-12 text-gray-400" />
        </div>
        <h3 className="text-lg font-medium text-gray-900 mb-2">
          No products found
        </h3>
        <p className="text-gray-600 text-center max-w-md mb-6">
          We could not find any products matching your search criteria. Try
          adjusting your filters or search terms.
        </p>
        <Button
          onClick={onTryAgain}
          variant="outline"
          className="text-gray-600 border-gray-300"
        >
          Clear Filters
        </Button>
      </div>
    );
  }

  return null;
}
