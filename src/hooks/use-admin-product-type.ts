import { useMutation, useQuery } from "@tanstack/react-query";
import {
  addProductType,
  deleteProductType,
  getAllProductTypes,
  getTypesWithProducts,
  getTypeWithProducts,
} from "@/lib/api/admin-product-type";

export function useAddProductType() {
  return useMutation({ mutationFn: addProductType });
}

export function useGetAllProductTypes() {
  return useQuery({
    queryKey: ["admin-product-types"],
    queryFn: getAllProductTypes,
  });
}

export function useDeleteProductType() {
  return useMutation({ mutationFn: deleteProductType });
}

export function useGetTypesWithProducts() {
  return useQuery({
    queryKey: ["admin-types-with-products"],
    queryFn: getTypesWithProducts,
  });
}

export function useGetTypeWithProducts(productTypeCode: string) {
  return useQuery({
    queryKey: ["admin-type-with-products", productTypeCode],
    queryFn: () => getTypeWithProducts(productTypeCode),
    enabled: !!productTypeCode,
  });
}
