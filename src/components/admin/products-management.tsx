"use client";

import { useState } from "react";
import { useProductsStore } from "@/store/products";
import { ProductSearchBar } from "./product-search-bar";
import { ProductsTable } from "./products-table";
import { ProductsCenterStates } from "./products-center-states";
import { ProductDetailModal } from "./product-detail-modal";
import { AddProductModal } from "./add-product-modal";
import { EditProductModal } from "./edit-product-modal";
import { Card, CardContent } from "@/components/ui/card";
import type { Product } from "@/store/products";

export default function ProductsManagement() {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [selectedViewProduct, setSelectedViewProduct] =
    useState<Product | null>(null);

  const {
    products,
    filteredProducts,
    searchTerm,
    categoryFilter,
    statusFilter,
    itemsPerPage,
    isSearching,
    currentPage,
    totalPages,
    setSearchTerm,
    setCategoryFilter,
    setStatusFilter,
    setItemsPerPage,
    searchProducts,
    clearSearch,
    setCurrentPage,
    updateProductStatus,
    toggleProductVisibility,
    deleteProduct,
    getPaginatedProducts,
    getProductById,
  } = useProductsStore();

  const handleView = (productId: string) => {
    const product = getProductById(productId);
    if (product) {
      setSelectedViewProduct(product);
      setIsDetailModalOpen(true);
    }
  };

  const handleEdit = (product: Product) => {
    setSelectedProduct(product);
    setIsEditModalOpen(true);
  };

  const handleStatusChange = (id: string, status: Product["status"]) => {
    updateProductStatus(id, status);
  };

  const handleVisibilityToggle = (id: string) => {
    toggleProductVisibility(id);
  };

  const handleDelete = (id: string) => {
    if (confirm("Are you sure you want to delete this product?")) {
      deleteProduct(id);
    }
  };

  const paginatedProducts = getPaginatedProducts();

  const totalProducts = products.length;
  const totalStock = products.reduce((sum, product) => sum + product.stock, 0);
  const totalSold = products.reduce(
    (sum, product) => sum + product.totalSold,
    0
  );
  const averagePerformance =
    products.length > 0
      ? Math.round(
          (products.filter(
            (p) => p.performance === "Excellent" || p.performance === "Best"
          ).length /
            products.length) *
            100
        )
      : 0;

  return (
    <div className="flex min-h-screen">
      <div className="flex-1 p-6">
        <ProductSearchBar
          searchTerm={searchTerm}
          categoryFilter={categoryFilter}
          statusFilter={statusFilter}
          itemsPerPage={itemsPerPage}
          isSearching={isSearching}
          onSearchTermChange={setSearchTerm}
          onCategoryFilterChange={setCategoryFilter}
          onStatusFilterChange={setStatusFilter}
          onItemsPerPageChange={setItemsPerPage}
          onSearch={searchProducts}
          onAddProduct={() => setIsAddModalOpen(true)}
        />

        {/* Metrics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-6">
          <Card>
            <CardContent className="p-4">
              <div className="text-sm text-gray-600 mb-1">Total Products</div>
              <div className="text-2xl font-bold text-gray-900">
                {totalProducts}
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="text-sm text-gray-600 mb-1">Total Stock</div>
              <div className="text-2xl font-bold text-gray-900">
                {totalStock.toLocaleString()}
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="text-sm text-gray-600 mb-1">Total Sold</div>
              <div className="text-2xl font-bold text-gray-900">
                {totalSold.toLocaleString()}
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="text-sm text-gray-600 mb-1">Performance</div>
              <div className="text-2xl font-bold text-gray-900">
                {averagePerformance}%
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-6">
          {isSearching && <ProductsCenterStates state="loading" />}

          {!isSearching && filteredProducts.length === 0 && (
            <ProductsCenterStates
              state={
                searchTerm || categoryFilter !== "All" || statusFilter !== "All"
                  ? "no-results"
                  : "empty"
              }
              onTryAgain={clearSearch}
              onAddProduct={() => setIsAddModalOpen(true)}
            />
          )}

          {!isSearching && filteredProducts.length > 0 && (
            <ProductsTable
              products={paginatedProducts}
              currentPage={currentPage}
              totalPages={totalPages}
              onProductView={handleView}
              onProductEdit={handleEdit}
              onStatusChange={handleStatusChange}
              onVisibilityToggle={handleVisibilityToggle}
              onDelete={handleDelete}
              onPageChange={setCurrentPage}
            />
          )}
        </div>
      </div>

      <ProductDetailModal
        isOpen={isDetailModalOpen}
        onClose={() => setIsDetailModalOpen(false)}
        product={selectedViewProduct}
        onEdit={handleEdit}
      />

      <AddProductModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
      />

      <EditProductModal
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        product={selectedProduct}
      />
    </div>
  );
}
