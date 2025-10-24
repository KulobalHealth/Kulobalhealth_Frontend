import { useMutation, useQuery } from "@tanstack/react-query";
import {
  addProduct,
  deleteProduct,
  getAllProducts,
  getOneProduct,
  updateProduct,
} from "@/lib/api/admin-product";

export function useAddProduct() {
  return useMutation({ mutationFn: addProduct });
}

export function useGetAllProducts() {
  return useQuery({ queryKey: ["admin-products"], queryFn: getAllProducts });
}

export function useGetOneProduct(productId: string) {
  return useQuery({
    queryKey: ["admin-product", productId],
    queryFn: () => getOneProduct(productId),
    enabled: !!productId,
  });
}

export function useUpdateProduct() {
  return useMutation({ mutationFn: updateProduct });
}

export function useDeleteProduct() {
  return useMutation({ mutationFn: deleteProduct });
}
