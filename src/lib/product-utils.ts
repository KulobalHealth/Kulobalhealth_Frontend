import type { Product } from "@/store/products";

export const validateProductImages = (images: any[]): boolean => {
  return !images.some((img) => img.isUploading);
};

export const extractImageUrls = (images: any[]): string[] => {
  return images
    .filter((img) => !(img.error || img.isUploading))
    .filter((img) => img.url)
    .map((img) => img.url);
};

export const getProductImage = (product: Product) => {
  if (product.photos?.[0]) {
    return product.photos[0];
  }
  if (product.imageUrl) {
    return product.imageUrl;
  }
  return null;
};

export const createProductPayload = (formData: any, imageUrls: string[]) => {
  return {
    productName: formData.productName,
    productTypeCode: formData.productTypeCode || "",
    price: formData.price,
    description: formData.description,
    brand: formData.brand,
    manufacturer: formData.manufacturer ?? "",
    photos: imageUrls,
  };
};

export const createUpdateProductPayload = (product: Product, formData: any) => {
  return {
    productId: product.productId,
    productName: formData.name,
    productTypeCode: formData.category,
    price: Number(formData.price),
    description: formData.description,
    brand: product.brand ?? "",
    manufacturer: product.manufacturer ?? "",
    photos: product.photos ?? [],
  };
};

export const resetProductForm = () => ({
  productName: "",
  price: 0,
  quantity: 0,
  brand: "",
  description: "",
  visibility: true,
  productTypeCode: "",
  manufacturer: "",
  photos: [],
});

export const PRODUCT_CATEGORIES = [
  "Pain Relief",
  "Vitamins",
  "Antibiotics",
  "Gastric",
  "Antihistamines",
  "Diabetes",
  "Cardiovascular",
];
