"use client";

import { ArrowLeft } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ImageUpload, type UploadedImage } from "@/components/ui/image-upload";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import { useGetAllProductTypes } from "@/hooks/use-admin-product-type";
import { removeLeadingZeros } from "@/lib/format-utils";
import {
  extractImageUrls,
  resetProductForm,
  validateProductImages,
} from "@/lib/product-utils";

interface ProductType {
  productType: string;
  productTypeCode: string;
}

interface AddProductModalProps {
  readonly isOpen: boolean;
  readonly onClose: () => void;
  readonly onAddProduct: (productData: AddProductFormData) => Promise<void>;
  readonly isLoading?: boolean;
}

export interface AddProductFormData {
  productName: string;
  price: number;
  quantity: number;
  brand: string;
  description: string;
  visibility: boolean;
  productTypeCode?: string;
  manufacturer?: string;
  photos?: string[];
}

// Zod schema for validation
const productSchema = z.object({
  productName: z.string().min(2, "Product name is required"),
  price: z.number().min(1, "Price must be greater than 0"),
  quantity: z.number().min(1, "Quantity must be at least 1"),
  brand: z.string().min(2, "Brand is required"),
  description: z.string().min(5, "Description is required"),
  visibility: z.boolean(),
  productTypeCode: z.string().min(1, "Product type is required"),
  manufacturer: z.string().min(1, "Manufacturer is required"),
  photos: z.array(z.string()).optional(),
});

export function AddProductModal({
  isOpen,
  onClose,
  onAddProduct,
  isLoading,
}: AddProductModalProps) {
  const { data: productTypes = [], isLoading: typesLoading } =
    useGetAllProductTypes();

  const [uploadedImages, setUploadedImages] = useState<UploadedImage[]>([]);

  const [formData, setFormData] = useState<AddProductFormData>(
    resetProductForm()
  );

  const handleSave = async () => {
    if (!validateProductImages(uploadedImages)) {
      toast.error("Please wait for all images to finish uploading");
      return;
    }

    const imageUrls = extractImageUrls(uploadedImages);

    const dataToValidate = {
      ...formData,
      price: Number(formData.price),
      quantity: Number(formData.quantity),
      photos: imageUrls,
    };

    const parsed = productSchema.safeParse(dataToValidate);
    if (!parsed.success) {
      toast.error(parsed.error.errors[0]?.message || "Validation error");
      return;
    }

    // Show warning if no images uploaded
    if (imageUrls.length === 0) {
      toast.warning("No images uploaded. Product will use a default image.");
    }

    try {
      await onAddProduct(parsed.data);
      setFormData(resetProductForm());
      setUploadedImages([]);
    } catch (error) {
      toast.error(
        error instanceof Error ? error.message : "Failed to add product"
      );
    }
  };

  return (
    <Dialog onOpenChange={onClose} open={isOpen}>
      <DialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-2xl">
        <DialogHeader className="flex flex-row items-center justify-between">
          <div className="flex items-center gap-2">
            <Button onClick={onClose} size="sm" variant="ghost">
              <ArrowLeft className="h-4 w-4" />
            </Button>
            <div>
              <DialogTitle>Add New Product</DialogTitle>
              <p className="mt-1 text-gray-600 text-sm">
                Provide the required information to successfully add a new
                product to stock
              </p>
            </div>
          </div>
        </DialogHeader>

        <div className="space-y-6 py-4">
          <div>
            <h3 className="mb-4 font-medium text-primary-600">
              Product Stock Information
            </h3>

            <div className="mb-6">
              <Label className="mb-3 block font-medium text-sm">
                Product Images
              </Label>
              <ImageUpload
                images={uploadedImages}
                maxImages={5}
                onImagesChange={setUploadedImages}
              />
              {uploadedImages.length === 0 && (
                <p className="mt-2 text-amber-600 text-sm">
                  💡 Adding images helps customers see your product better
                </p>
              )}
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="product-name">Product Name*</Label>
                <Input
                  id="product-name"
                  onChange={(e) =>
                    setFormData({ ...formData, productName: e.target.value })
                  }
                  placeholder="Enter product name"
                  value={formData.productName}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="price">Price Per Product (GHS)*</Label>
                <Input
                  id="price"
                  inputMode="numeric"
                  min={1}
                  onChange={(e) => {
                    const value = removeLeadingZeros(e.target.value);
                    setFormData({ ...formData, price: Number(value) });
                  }}
                  pattern="[0-9]*"
                  placeholder="eg. 200"
                  type="number"
                  value={formData.price || ""}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="quantity">Quantity*</Label>
                <Input
                  id="quantity"
                  inputMode="numeric"
                  min={1}
                  onChange={(e) => {
                    const value = removeLeadingZeros(e.target.value);
                    setFormData({ ...formData, quantity: Number(value) });
                  }}
                  pattern="[0-9]*"
                  placeholder=""
                  type="number"
                  value={formData.quantity || ""}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="product-type">Product Type*</Label>
                <select
                  className="w-full rounded border px-2 py-2"
                  disabled={typesLoading}
                  id="product-type"
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      productTypeCode: e.target.value,
                    })
                  }
                  value={formData.productTypeCode}
                >
                  <option value="">Select product type</option>
                  {(productTypes?.data ?? []).map((type: ProductType) => (
                    <option
                      key={type.productTypeCode}
                      value={type.productTypeCode}
                    >
                      {type.productType}
                    </option>
                  ))}
                </select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="brand">Brand*</Label>
                <Input
                  id="brand"
                  onChange={(e) =>
                    setFormData({ ...formData, brand: e.target.value })
                  }
                  placeholder="Enter the product brand"
                  value={formData.brand}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="manufacturer">Manufacturer*</Label>
                <Input
                  id="manufacturer"
                  onChange={(e) =>
                    setFormData({ ...formData, manufacturer: e.target.value })
                  }
                  placeholder="Enter the manufacturer"
                  value={formData.manufacturer}
                />
              </div>
            </div>

            <div className="mt-4 space-y-2">
              <Label htmlFor="description">Product Description</Label>
              <Textarea
                id="description"
                onChange={(e) =>
                  setFormData({ ...formData, description: e.target.value })
                }
                placeholder="Provide the product's description"
                rows={4}
                value={formData.description}
              />
            </div>
          </div>

          <div>
            <h3 className="mb-2 font-medium">Visibility</h3>
            <p className="mb-3 text-gray-600 text-sm">
              Toggling visibility on makes your product visible on marketplace
            </p>
            <div className="flex items-center space-x-2">
              <Switch
                checked={formData.visibility}
                id="visibility"
                onCheckedChange={(checked) =>
                  setFormData({ ...formData, visibility: checked })
                }
              />
              <Label htmlFor="visibility">Make product visible</Label>
            </div>
          </div>
        </div>

        <div className="flex justify-end gap-2 border-t pt-4">
          <Button onClick={onClose} variant="outline">
            Cancel
          </Button>
          <Button
            className="bg-primary-500 text-white hover:bg-primary-600"
            disabled={isLoading}
            onClick={handleSave}
          >
            {isLoading ? "Adding..." : "Add New Stock"}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
