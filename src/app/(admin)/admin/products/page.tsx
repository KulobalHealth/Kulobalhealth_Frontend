"use client";

import { Plus } from "lucide-react";
import { useState } from "react";
import { AddProductModal } from "@/components/admin/add-product-modal";
import { DeleteProductModal } from "@/components/admin/delete-product-modal";
import { ProductDetailsModal } from "@/components/admin/product-details-modal";
import { ProductRow } from "@/components/admin/product-row";
import { EmptyState } from "@/components/admin/empty-state";
import { MetricsCards } from "@/components/admin/metrics-cards";
import { SearchAndFilters } from "@/components/admin/search-and-filters";
import { PaginationControls } from "@/components/admin/pagination-controls";
import { Button } from "@/components/ui/button";
import { mockProducts, Product } from "@/store/products";

export default function ProductsManagement() {
  const [searchTerm, setSearchTerm] = useState("");
  const [hasProducts, setHasProducts] = useState(false); 
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const handleViewDetails = (product: Product) => {
    setSelectedProduct(product);
    setIsDetailsModalOpen(true);
  };

  const handleDelete = (product: Product) => {
    setSelectedProduct(product);
    setIsDeleteModalOpen(true);
  };

  const handleConfirmDelete = () => {
    console.log("Deleting product:", selectedProduct);
    setIsDeleteModalOpen(false);
    setSelectedProduct(null);
  };

  const handleAddProduct = () => {
    setIsAddModalOpen(true);
  };

  const handleSearchChange = (value: string) => {
    setSearchTerm(value);
  };

  const handleSearch = () => {
    console.log("Searching for:", searchTerm);
  };

  return (
    <div className="flex min-h-screen">
      <div className="flex-1 p-6">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h1 className="mb-1 font-bold text-2xl">Products</h1>
            <p className="text-gray-600">
              View and manage all registered products
            </p>
          </div>
          <Button
            className="bg-primary-500 text-white hover:bg-primary-600"
            onClick={handleAddProduct}
          >
            <Plus className="mr-2 h-4 w-4" />
            Add New Product
          </Button>
        </div>

        <MetricsCards hasProducts={hasProducts} />

        <SearchAndFilters
          searchTerm={searchTerm}
          onSearchChange={handleSearchChange}
          onSearch={handleSearch}
        />

        {hasProducts ? (
          <div className="rounded-lg bg-white shadow-sm">
            <div className="w-full">
              {mockProducts.map((product, index) => (
                <ProductRow
                  key={product.id}
                  onDelete={handleDelete}
                  onViewDetails={handleViewDetails}
                  product={product}
                  isLast={index === mockProducts.length - 1}
                />
              ))}
            </div>

            <PaginationControls />
          </div>
        ) : (
          <EmptyState onAddProduct={handleAddProduct} />
        )}


        <div className="fixed right-4 bottom-4">
          <Button
            className="bg-white shadow-lg"
            onClick={() => setHasProducts(!hasProducts)}
            variant="outline"
          >
            Toggle {hasProducts ? "Empty" : "Populated"} State
          </Button>
        </div>
      </div>

      <AddProductModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
      />
      <ProductDetailsModal
        isOpen={isDetailsModalOpen}
        onClose={() => setIsDetailsModalOpen(false)}
        product={selectedProduct}
      />
      <DeleteProductModal
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        onConfirm={handleConfirmDelete}
      />
    </div>
  );
}
