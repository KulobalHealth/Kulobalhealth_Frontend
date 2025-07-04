'use client';

import { X } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';

interface ProductDetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: any;
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
        <DialogHeader className="flex flex-row items-center justify-between">
          <DialogTitle>Product Stock Details</DialogTitle>
          <Button onClick={onClose} size="sm" variant="ghost">
            <X className="h-4 w-4" />
          </Button>
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
                {[1, 2, 3, 4].map((index) => (
                  <div
                    className="flex aspect-square items-center justify-center rounded-lg bg-gradient-to-br from-blue-400 to-blue-600"
                    key={index}
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-white/20">
                      <div className="h-6 w-6 rounded-sm bg-white" />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Product Details */}
            <div className="mb-6 grid grid-cols-3 gap-6">
              <div>
                <Label className="text-gray-600 text-sm">Product Name</Label>
                <div className="font-medium">Fertilizer</div>
              </div>
              <div>
                <Label className="text-gray-600 text-sm">
                  Quantity Available
                </Label>
                <div className="font-medium">300</div>
              </div>
              <div>
                <Label className="text-gray-600 text-sm">
                  Product Price (GHS)
                </Label>
                <div className="font-medium">200.00</div>
              </div>
            </div>

            <div className="mb-6 grid grid-cols-2 gap-6">
              <div>
                <Label className="text-gray-600 text-sm">
                  Product Visibility
                </Label>
                <div className="mt-1 flex items-center gap-2">
                  <Badge className="bg-success-100 text-success-700">On</Badge>
                </div>
              </div>
              <div>
                <Label className="text-gray-600 text-sm">Brand</Label>
                <div className="font-medium">Greater Accra</div>
              </div>
            </div>

            {/* Product Description */}
            <div>
              <Label className="text-gray-600 text-sm">
                Product Description
              </Label>
              <p className="mt-1 text-sm">
                Lorem ipsum dolor sit amet consectetur. Odio quisque sed arcu
                elit justo tortor. Vitae facilisi nam aliquet est placerat
                venenatis.
              </p>
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
