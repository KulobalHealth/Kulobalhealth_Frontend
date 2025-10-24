"use client";

import { ArrowLeft } from "lucide-react";
import { useEffect, useState } from "react";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import { useUpdateProduct } from "@/hooks/use-admin-product";
import {
  createUpdateProductPayload,
  PRODUCT_CATEGORIES,
} from "@/lib/product-utils";
import type { Product } from "@/store/products";

interface EditProductModalProps {
  readonly isOpen: boolean;
  readonly onClose: () => void;
  readonly product: Product | null;
}

export function EditProductModal({
  isOpen,
  onClose,
  product,
}: EditProductModalProps) {
  const updateProductMutation = useUpdateProduct();

  const [formData, setFormData] = useState({
    name: "",
    category: "",
    description: "",
    price: "",
    stock: "",
    visibility: true,
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    if (product) {
      setFormData({
        name: product.productName ?? product.name ?? "",
        category: product.productType ?? product.category ?? "",
        description: product.description ?? "",
        price: product.price !== undefined ? String(product.price) : "",
        stock: product.stock !== undefined ? String(product.stock) : "",
        visibility: product.visibility ?? true,
      });
    }
  }, [product]);

  const schema = z.object({
    name: z.string().min(1, "Product name is required"),
    category: z.string().min(1, "Category is required"),
    description: z.string().optional(),
    price: z
      .string()
      .min(1, "Price is required")
      .refine((val) => !isNaN(Number(val)) && Number(val) > 0, {
        message: "Price must be a valid positive number",
      }),
    stock: z
      .string()
      .min(1, "Stock is required")
      .refine((val) => !isNaN(Number(val)) && Number(val) >= 0, {
        message: "Stock must be a valid non-negative number",
      }),
    visibility: z.boolean(),
  });

  const validateForm = () => {
    const result = schema.safeParse(formData);
    if (!result.success) {
      const newErrors: Record<string, string> = {};
      for (const err of result.error.errors) {
        if (err.path[0]) {
          newErrors[err.path[0]] = err.message;
        }
      }
      setErrors(newErrors);
      return false;
    }
    setErrors({});
    return true;
  };

  const handleSave = () => {
    if (!(validateForm() && product)) {
      return;
    }

    const payload = createUpdateProductPayload(product, formData);
    updateProductMutation.mutate(payload, {
      onSuccess: () => {
        onClose();
      },
      onError: () => {
        // Error handling could be added here if needed
      },
    });
  };

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }));
    }
  };

  return (
    <Dialog onOpenChange={onClose} open={isOpen}>
      <DialogContent className="max-h-[90vh] max-w-2xl overflow-y-auto">
        <DialogHeader className="flex flex-row items-center justify-between">
          <div className="flex items-center gap-2">
            <Button onClick={onClose} size="sm" variant="ghost">
              <ArrowLeft className="h-4 w-4" />
            </Button>
            <div>
              <DialogTitle>Edit Product</DialogTitle>
              <p className="mt-1 text-gray-600 text-sm">
                Update the product information below
              </p>
            </div>
          </div>
        </DialogHeader>
        <div className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="name">Product Name *</Label>
            <Input
              className={errors.name ? "border-red-500" : ""}
              id="name"
              onChange={(e) => handleInputChange("name", e.target.value)}
              placeholder="Enter product name"
              value={formData.name}
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name}</p>
            )}
          </div>
          <div className="space-y-2">
            <Label htmlFor="category">Category *</Label>
            <Select
              onValueChange={(value) => handleInputChange("category", value)}
              value={formData.category}
            >
              <SelectTrigger
                className={errors.category ? "border-red-500" : ""}
              >
                <SelectValue placeholder="Select category" />
              </SelectTrigger>
              <SelectContent>
                {PRODUCT_CATEGORIES.map((category) => (
                  <SelectItem key={category} value={category}>
                    {category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {errors.category && (
              <p className="text-red-500 text-sm">{errors.category}</p>
            )}
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="price">Price (₵) *</Label>
              <Input
                className={errors.price ? "border-red-500" : ""}
                id="price"
                onChange={(e) => handleInputChange("price", e.target.value)}
                placeholder="0.00"
                type="number"
                value={formData.price}
              />
              {errors.price && (
                <p className="text-red-500 text-sm">{errors.price}</p>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="stock">Stock Quantity *</Label>
              <Input
                className={errors.stock ? "border-red-500" : ""}
                id="stock"
                onChange={(e) => handleInputChange("stock", e.target.value)}
                placeholder="0"
                type="number"
                value={formData.stock}
              />
              {errors.stock && (
                <p className="text-red-500 text-sm">{errors.stock}</p>
              )}
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              onChange={(e) => handleInputChange("description", e.target.value)}
              placeholder="Enter product description"
              rows={3}
              value={formData.description}
            />
          </div>
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label>Product Visibility</Label>
              <p className="text-gray-600 text-sm">
                Make this product visible to customers
              </p>
            </div>
            <Switch
              checked={formData.visibility}
              onCheckedChange={(checked) =>
                handleInputChange("visibility", checked)
              }
            />
          </div>
        </div>
        <div className="flex justify-end gap-3 border-t pt-6">
          <Button onClick={onClose} variant="outline">
            Cancel
          </Button>
          <Button
            className="bg-blue-600 text-white hover:bg-blue-700"
            onClick={handleSave}
          >
            Save Changes
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
