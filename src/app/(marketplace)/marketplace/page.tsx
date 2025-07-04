"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import ProductGrid from "@/components/marketplace/product-grid";
import { useMarketplaceStore } from "@/lib/store";

const categories = [
  "All Products",
  "Rapid Test Kits",
  "Vital Monitoring Devices",
  "Medical Materials",
  "Assistive technologies",
];

export default function MarketplacePage() {
  const { selectedCategory, setSelectedCategory } = useMarketplaceStore();

  return (
    <div className="flex w-full flex-col gap-4">
      <div className="">
        <h2 className="mb-4 font-semibold text-xl">Featured Products</h2>
        <div className="flex gap-2 overflow-x-auto pb-2">
          {categories.map((category) => (
            <button
              className={`${
                category === selectedCategory
                  ? "bg-primary-600 text-white"
                  : "border border-gray-200 bg-white dark:border-none dark:bg-[#2e2e2e]"
              } whitespace-nowrap rounded-md px-4 py-1.5 text-sm`}
              key={category}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className="flex-1">
        <ProductGrid />

        <div className="mt-8 flex items-center justify-center gap-2">
          <button className="rounded-md p-2 text-gray-500">
            <ChevronLeft />
          </button>
          <button className="flex h-8 w-8 items-center justify-center rounded-full bg-primary-600 text-white">
            1
          </button>
          {[2, 3, 4, 5, 6, 7, 8, 9, 10].map((page) => (
            <button
              className="flex h-8 w-8 items-center justify-center rounded-full hover:bg-gray-100"
              key={page}
            >
              {page}
            </button>
          ))}
          <span className="px-2">...</span>
          <button className="flex h-8 w-8 items-center justify-center rounded-full hover:bg-gray-100">
            2
          </button>
          <button className="rounded-md p-2 text-gray-500">
            <ChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
}
