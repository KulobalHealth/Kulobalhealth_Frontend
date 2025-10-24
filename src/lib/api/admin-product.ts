import adminApi from "./admin-axios";

/**
 * Adds a new product.
 */
export async function addProduct(data: {
  productName: string;
  productTypeCode: string;
  price: number;
  description: string;
  brand: string;
  manufacturer: string;
  photos: string[];
}) {
  const res = await adminApi.post("/admin/product", data);
  return res.data;
}

/**
 * Gets all products.
 */
export async function getAllProducts() {
  const res = await adminApi.get("/admin/product/all");
  return res.data;
}

/**
 * Gets one product by ID.
 */
export async function getOneProduct(productId: string) {
  const res = await adminApi.get(`/admin/product/getone/${productId}`);
  return res.data;
}

/**
 * Updates one product by ID.
 */
export async function updateProduct(
  productId: string,
  data: Partial<{
    productName: string;
    productTypeCode: string;
    price: number;
    description: string;
    brand: string;
    manufacturer: string;
    photos: string[];
  }>
) {
  const res = await adminApi.put(`/admin/product/${productId}`, data);
  return res.data;
}

/**
 * Deletes one product by ID.
 */
export async function deleteProduct(productId: string) {
  const res = await adminApi.delete(`/admin/testkit/${productId}`);
  return res.data;
}
