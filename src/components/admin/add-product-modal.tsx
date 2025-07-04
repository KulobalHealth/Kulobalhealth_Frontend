"use client";

import { ArrowLeft, Upload } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";

interface AddProductModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function AddProductModal({ isOpen, onClose }: AddProductModalProps) {
  const [formData, setFormData] = useState({
    productName: "",
    price: "",
    quantity: "",
    brand: "",
    description: "",
    visibility: true,
  });

  const handleSave = () => {
    console.log("Adding new product:", formData);
    onClose();
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
              <div className="grid grid-cols-5 gap-3">
                {[1, 2, 3, 4, 5].map((index) => (
                  <div
                    className="flex aspect-square cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-gray-300 border-dashed transition-colors hover:border-primary-400"
                    key={index}
                  >
                    <Upload className="mb-2 h-6 w-6 text-gray-400" />
                    <span className="text-primary-600 text-xs">
                      Click to upload
                    </span>
                    <span className="text-gray-500 text-xs">PNG or JPG</span>
                  </div>
                ))}
              </div>
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
                  onChange={(e) =>
                    setFormData({ ...formData, price: e.target.value })
                  }
                  placeholder="eg. 200"
                  value={formData.price}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="quantity">Quantity*</Label>
                <Input
                  id="quantity"
                  onChange={(e) =>
                    setFormData({ ...formData, quantity: e.target.value })
                  }
                  placeholder=""
                  value={formData.quantity}
                />
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
            onClick={handleSave}
          >
            Add New Stock
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
