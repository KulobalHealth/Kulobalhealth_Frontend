"use client";

import { LayoutGrid, List } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useMarketplaceStore } from "@/lib/store";

export default function ProductGrid() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const { products, selectedCategory, searchQuery, addToCart } =
    useMarketplaceStore();

  const handleAddToCart = (e: React.MouseEvent, productId: string) => {
    e.preventDefault();
    addToCart(productId);
  };

  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      selectedCategory === "All Products" ||
      product.category === selectedCategory;
    const matchesSearch =
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="space-y-4">
      <div className="flex justify-end gap-2">
        <Button
          onClick={() => setViewMode("grid")}
          size="icon"
          variant={viewMode === "grid" ? "default" : "outline"}
        >
          <LayoutGrid className="h-4 w-4" />
        </Button>
        <Button
          onClick={() => setViewMode("list")}
          size="icon"
          variant={viewMode === "list" ? "default" : "outline"}
        >
          <List className="h-4 w-4" />
        </Button>
      </div>

      <div
        className={
          viewMode === "grid"
            ? "grid grid-cols-1 gap-[20px] md:grid-cols-2 lg:grid-cols-3"
            : "space-y-4"
        }
      >
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <Link
              className={`group block ${
                viewMode === "list" ? "rounded-lg border p-4" : ""
              }`}
              href={`/marketplace/${product.id}`}
              key={product.id}
            >
              <div
                className={
                  viewMode === "grid"
                    ? "overflow-hidden rounded-lg border transition-shadow hover:shadow-lg"
                    : "flex items-center gap-4"
                }
              >
                <div
                  className={
                    viewMode === "grid"
                      ? "relative flex h-full w-full items-center justify-center bg-(--search-bar-bg) dark:bg-neutral-900"
                      : "relative flex h-[189px] w-[260px] shrink-0 items-center justify-center bg-(--search-bar-bg) dark:bg-neutral-900"
                  }
                >
                  <div className="relative h-[189px] w-[260px]">
                    <Image
                      alt={product.name}
                      className="object-contain object-center"
                      fill
                      src={product.images[0]}
                    />
                  </div>
                </div>
                <div className={viewMode === "grid" ? "p-4" : "flex-1"}>
                  <h3 className="font-medium transition-colors group-hover:text-emerald-600">
                    {product.name}
                  </h3>
                  <p className="mt-1 text-gray-600 text-sm">{product.brand}</p>
                  <div
                    className={`flex ${
                      viewMode === "grid" ? "justify-between" : "gap-4"
                    } mt-2 items-center`}
                  >
                    <p className="font-medium">
                      GH₵ {product.price.toFixed(2)}
                    </p>
                    <span
                      className={`text-sm ${
                        product.stockQuantity > 0
                          ? "text-warning-600"
                          : "text-danger-600"
                      }`}
                    >
                      {product.stockQuantity > 0
                        ? `${product.stockQuantity} ${
                            product.unit || "items"
                          } left`
                        : "Out of Stock"}
                    </span>
                  </div>
                  {viewMode === "list" && (
                    <>
                      <p className="mt-2 text-gray-600 text-sm">
                        {product.description}
                      </p>
                      <Button
                        className="mt-3 bg-primary-600 text-white"
                        disabled={!product.inStock}
                        onClick={(e) => handleAddToCart(e, product.id)}
                      >
                        Add to Cart
                      </Button>
                    </>
                  )}
                  {viewMode === "grid" && (
                    <Button
                      className="mt-3 w-full bg-primary-600 text-white"
                      disabled={!product.inStock}
                      onClick={(e) => handleAddToCart(e, product.id)}
                    >
                      Add to Cart
                    </Button>
                  )}
                </div>
              </div>
            </Link>
          ))
        ) : (
          <div className="col-span-full py-8 text-center">
            <p className="text-gray-500">
              No items found matching your search criteria
            </p>
            <p className="mt-2 text-gray-400 text-sm">
              Try adjusting your search or filters
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
