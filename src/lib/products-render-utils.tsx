import { EmptyState } from "@/components/admin/empty-state";
import { PaginationControls } from "@/components/admin/pagination-controls";
import { ProductRow } from "@/components/admin/product-row";

interface ProductsRenderState {
  showLoading: boolean;
  showError: boolean;
  showEmpty: boolean;
  showProducts: boolean;
}

export const determineProductsRenderState = (
  isLoading: boolean,
  isError: boolean,
  hasProducts: boolean
): ProductsRenderState => ({
  showLoading: isLoading,
  showError: isError && !isLoading,
  showEmpty: !(isLoading || isError || hasProducts),
  showProducts: !(isLoading || isError) && hasProducts,
});

export const renderProductsContent = (
  state: ProductsRenderState,
  products: any[],
  onViewDetails: (product: any) => void,
  onDelete: (product: any) => void,
  onAddProduct: () => void
) => {
  if (state.showLoading) {
    return (
      <div className="py-12 text-center text-gray-500">Loading products...</div>
    );
  }

  if (state.showError) {
    return (
      <div className="py-12 text-center text-red-500">
        Failed to load products.
      </div>
    );
  }

  if (state.showEmpty) {
    return <EmptyState onAddProduct={onAddProduct} />;
  }

  if (state.showProducts) {
    return (
      <div className="rounded-lg bg-white shadow-sm">
        <div className="w-full">
          {products.map((product: any, index: number) => (
            <ProductRow
              isLast={index === products.length - 1}
              key={product.productId}
              onDelete={onDelete}
              onViewDetails={onViewDetails}
              product={product}
            />
          ))}
        </div>
        <PaginationControls />
      </div>
    );
  }

  return null;
};
