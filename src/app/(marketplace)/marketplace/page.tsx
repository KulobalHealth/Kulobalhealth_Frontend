"use client";

import ProductGrid from "@/components/marketplace/product-grid";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useMarketplaceStore } from "@/lib/store";

const categories = [
  "All Products",
  "Rapid Test Kits",
  "Vital Monitoring Devices",
  "Medical Materials",
  "Vaccines Antibiotics",
];

export default function MarketplacePage() {
  const { selectedCategory, setSelectedCategory } = useMarketplaceStore();

  return (
    <div className="w-full flex flex-col gap-4">
      <div className="">
        <h2 className="text-xl font-semibold mb-4">Featured Products</h2>
        <div className="flex overflow-x-auto gap-2 pb-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`${
                category === selectedCategory
                  ? "bg-primary-600 text-white"
                  : "bg-white dark:bg-[#2e2e2e] dark:border-none border border-gray-200"
              } px-4 py-1.5 rounded-md text-sm whitespace-nowrap`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className="flex-1">
        <ProductGrid />

        <div className="flex justify-center items-center gap-2 mt-8">
          <button className="p-2 rounded-md text-gray-500">
            <ChevronLeft />
          </button>
          <button className="w-8 h-8 flex items-center justify-center rounded-full bg-primary-600 text-white">
            1
          </button>
          {[2, 3, 4, 5, 6, 7, 8, 9, 10].map((page) => (
            <button
              key={page}
              className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100"
            >
              {page}
            </button>
          ))}
          <span className="px-2">...</span>
          <button className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100">
            2
          </button>
          <button className="p-2 rounded-md text-gray-500">
            <ChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
}
