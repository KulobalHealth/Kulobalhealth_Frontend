"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface DeleteProductModalProps {
  readonly isOpen: boolean;
  readonly onClose: () => void;
  readonly onConfirm: () => void;
}

export function DeleteProductModal({
  isOpen,
  onClose,
  onConfirm,
}: DeleteProductModalProps) {
  return (
    <Dialog onOpenChange={onClose} open={isOpen}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Delete Product Stock</DialogTitle>
        </DialogHeader>

        <div className="py-4">
          <p className="text-gray-600">
            Are you sure you want to delete this item from your product stock?
          </p>
        </div>

        <div className="flex justify-end gap-2 border-t pt-4">
          <Button onClick={onClose} variant="outline">
            Cancel
          </Button>
          <Button
            className="bg-danger-500 text-white hover:bg-danger-600"
            onClick={onConfirm}
          >
            Delete
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
