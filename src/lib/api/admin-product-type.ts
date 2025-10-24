import adminApi from "./admin-axios";

/**
 * Adds a new product type.
 */
export async function addProductType(data: {
  productType: string;
  productTypeCode: string;
}) {
  const res = await adminApi.post("/admin/product-type", data);
  return res.data;
}

/**
 * Gets all product types.
 */
export async function getAllProductTypes() {
  const res = await adminApi.get("/admin/product-type/all");
  return res.data;
}

/**
 * Deletes a product type by code.
 */
export async function deleteProductType(productTypeCode: string) {
  const res = await adminApi.delete(`/admin/product-type/${productTypeCode}`);
  return res.data;
}

/**
 * Gets all types with products.
 */
export async function getTypesWithProducts() {
  const res = await adminApi.get("/admin/product-type/types-with-products");
  return res.data;
}

/**
 * Gets one type with products by code.
 */
export async function getTypeWithProducts(productTypeCode: string) {
  const res = await adminApi.get(
    `/admin/product-type/type-with-products/${productTypeCode}`
  );
  return res.data;
}
