"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";

import type { Product } from "@/store/products";

interface ProductDetailsModalProps {
  readonly isOpen: boolean;
  readonly onClose: () => void;
  readonly product: Product | null;
}

export function ProductDetailsModal({
  isOpen,
  onClose,
  product,
}: ProductDetailsModalProps) {
  if (!product) return null;

  return (
    <Dialog onOpenChange={onClose} open={isOpen}>
      <DialogContent className="sm:max-w-2xl">
        <DialogHeader>
          <DialogTitle>Product Stock Details</DialogTitle>
        </DialogHeader>

        <div className="space-y-6 py-4">
          {/* Product Stock Information */}
          <div>
            <h3 className="mb-4 font-medium text-primary-600">
              Product Stock Information
            </h3>

            {/* Product Images */}
            <div className="mb-6">
              <Label className="mb-3 block font-medium text-sm">
                Product Images
              </Label>
              <div className="grid grid-cols-4 gap-3">
                {product.photos && product.photos.length > 0 ? (
                  product.photos.map((photo, idx) => (
                    <div
                      className="flex aspect-square items-center justify-center rounded-lg bg-gradient-to-br from-blue-400 to-blue-600"
                      key={photo}
                    >
                      <img
                        alt={`Product image ${idx + 1}`}
                        className="h-12 w-12 rounded-lg object-cover"
                        src={photo}
                      />
                    </div>
                  ))
                ) : (
                  <div className="col-span-4 text-center text-gray-400">
                    No images available
                  </div>
                )}
              </div>
            </div>

            {/* Product Details */}
            <div className="mb-6 grid grid-cols-3 gap-6">
              <div>
                <Label className="text-gray-600 text-sm">Product Name</Label>
                <div className="font-medium">{product.productName}</div>
              </div>
              <div>
                <Label className="text-gray-600 text-sm">Product Type</Label>
                <div className="font-medium">{product.productType}</div>
              </div>
              <div>
                <Label className="text-gray-600 text-sm">
                  Product Price (GHS)
                </Label>
                <div className="font-medium">GHS {product.price}</div>
              </div>
            </div>

            <div className="mb-6 grid grid-cols-2 gap-6">
              <div>
                <Label className="text-gray-600 text-sm">Brand</Label>
                <div className="font-medium">{product.brand}</div>
              </div>
              <div>
                <Label className="text-gray-600 text-sm">Manufacturer</Label>
                <div className="font-medium">{product.manufacturer}</div>
              </div>
            </div>

            {/* Product Description */}
            <div>
              <Label className="text-gray-600 text-sm">
                Product Description
              </Label>
              <p className="mt-1 text-sm">{product.description}</p>
            </div>
          </div>
        </div>

        <div className="flex justify-end gap-2 border-t pt-4">
          <Button onClick={onClose} variant="outline">
            Close
          </Button>
          <Button className="bg-primary-500 text-white hover:bg-primary-600">
            Edit
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
