"use client";

import { Plus } from "lucide-react";
import { useState } from "react";
import type { AddProductFormData } from "@/components/admin/add-product-modal";
import { AddProductModal } from "@/components/admin/add-product-modal";
import { DeleteProductModal } from "@/components/admin/delete-product-modal";
import { MetricsCards } from "@/components/admin/metrics-cards";
import { ProductDetailsModal } from "@/components/admin/product-details-modal";
import { SearchAndFilters } from "@/components/admin/search-and-filters";
import { Button } from "@/components/ui/button";
import {
  useAddProduct,
  useDeleteProduct,
  useGetAllProducts,
} from "@/hooks/use-admin-product";
import {
  determineProductsRenderState,
  renderProductsContent,
} from "@/lib/products-render-utils";
import type { Product } from "@/store/products";

export default function ProductsManagement() {
  const [searchTerm, setSearchTerm] = useState("");
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const { data, isLoading, isError, refetch } = useGetAllProducts();
  const products = data?.data ?? [];
  const addProductMutation = useAddProduct();
  const deleteProductMutation = useDeleteProduct();

  const hasProducts = products.length > 0;

  const handleViewDetails = (product: Product) => {
    setSelectedProduct(product);
    setIsDetailsModalOpen(true);
  };

  const handleDelete = (product: Product) => {
    setSelectedProduct(product);
    setIsDeleteModalOpen(true);
  };

  const handleConfirmDelete = () => {
    if (selectedProduct) {
      deleteProductMutation.mutate(selectedProduct.productId, {
        onSuccess: () => {
          setIsDeleteModalOpen(false);
          setSelectedProduct(null);
          refetch();
        },
        onError: () => {
          // Error handling could be added here if needed
        },
      });
    }
  };

  const handleAddProduct = (productData?: AddProductFormData) => {
    if (!productData) {
      setIsAddModalOpen(true);
      return Promise.resolve();
    }

    const payload = {
      productName: productData.productName,
      productTypeCode: productData.productTypeCode || "",
      price: productData.price,
      description: productData.description,
      brand: productData.brand,
      manufacturer: productData.manufacturer ?? "",
      photos: productData.photos ?? [],
    };

    return new Promise<void>((resolve, reject) => {
      addProductMutation.mutate(payload, {
        onSuccess: () => {
          setIsAddModalOpen(false);
          refetch();
          resolve();
        },
        onError: (err) => {
          reject(err);
        },
      });
    });
  };

  const handleSearchChange = (value: string) => {
    setSearchTerm(value);
  };

  const handleSearch = () => {
    refetch();
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
            onClick={() => setIsAddModalOpen(true)}
          >
            <Plus className="mr-2 h-4 w-4" />
            Add New Product
          </Button>
        </div>

        <MetricsCards hasProducts={hasProducts} />

        <SearchAndFilters
          onSearch={handleSearch}
          onSearchChange={handleSearchChange}
          searchTerm={searchTerm}
        />

        {renderProductsContent(
          determineProductsRenderState(isLoading, isError, hasProducts),
          products,
          handleViewDetails,
          handleDelete,
          () => setIsAddModalOpen(true)
        )}

        <div className="fixed right-4 bottom-4">
          <Button
            className="bg-white shadow-lg"
            onClick={() => refetch()}
            variant="outline"
          >
            Refresh Products
          </Button>
        </div>
      </div>

      <AddProductModal
        isLoading={addProductMutation.isPending}
        isOpen={isAddModalOpen}
        onAddProduct={handleAddProduct}
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
