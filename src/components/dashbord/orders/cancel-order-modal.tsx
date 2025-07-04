"use client";

import { X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogOverlay,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface CancelOrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: (reason: string) => void;
  orderNumber: string;
}

export default function CancelOrderModal({
  isOpen,
  onClose,
  onConfirm,
  orderNumber,
}: CancelOrderModalProps) {
  const [reason, setReason] = useState("");

  const handleConfirm = () => {
    onConfirm(reason);
    setReason("");
    onClose();
  };

  const handleCancel = () => {
    setReason("");
    onClose();
  };

  return (
    <Dialog onOpenChange={onClose} open={isOpen}>
      <DialogOverlay className="bg-black/40 backdrop-blur-sm" />
      <DialogContent className="gap-0 overflow-hidden rounded-3xl border-0 bg-white p-0 shadow-2xl sm:max-w-lg">
        {/* Header with Close Button */}
        <div className="relative px-8 pt-6 pb-2"></div>

        <DialogClose className="hidden">
          <X className="h-4 w-4" />
        </DialogClose>

        {/* Modal Content */}
        <div className="px-8 pb-8">
          {/* Title Section */}
          <div className="mb-8 text-center">
            <h2 className="mb-3 font-semibold text-gray-900 text-xl leading-tight">
              Cancel this order?
            </h2>
            <p className="mx-auto max-w-sm text-gray-600 leading-relaxed">
              Are you sure you want to cancel this order? This action is
              irreversible and cannot be undone.
            </p>
          </div>

          {/* Order Information */}
          <div className="mb-6 rounded-xl bg-gray-50 p-4">
            <div className="flex items-center justify-between">
              <span className="font-medium text-gray-700 text-sm">
                Order Number:
              </span>
              <span className="font-semibold text-gray-900 text-sm">
                {orderNumber}
              </span>
            </div>
          </div>

          {/* Reason Input Section */}
          <div className="mb-8 space-y-4">
            <Label
              className="block font-semibold text-gray-900 text-sm"
              htmlFor="reason"
            >
              Reason for cancellation
            </Label>
            <div className="relative">
              <Input
                className="w-full rounded-xl border-2 border-gray-200 px-4 py-3 transition-all duration-200 placeholder:text-gray-400 focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500/20"
                id="reason"
                maxLength={200}
                onChange={(e) => setReason(e.target.value)}
                placeholder="Please provide a reason for cancelling this order"
                type="text"
                value={reason}
              />
              <div className="absolute right-3 bottom-2 text-gray-400 text-xs">
                {reason.length}/200
              </div>
            </div>
            {reason.length > 0 && reason.length < 10 && (
              <p className="flex items-center gap-1 text-amber-600 text-xs">
                <span className="h-1 w-1 rounded-full bg-amber-500" />
                Please provide a more detailed reason (at least 10 characters)
              </p>
            )}
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4">
            <Button
              className="flex-1 rounded-xl border-2 border-gray-200 px-6 py-3 font-semibold text-gray-700 transition-all duration-200 hover:border-gray-300 hover:bg-gray-50 focus:ring-2 focus:ring-gray-200"
              onClick={handleCancel}
              variant="outline"
            >
              Keep Order
            </Button>
            <Button
              className="flex-1 rounded-xl bg-green-600 px-6 py-3 font-semibold text-white shadow-lg transition-all duration-200 hover:bg-green-700 hover:shadow-xl focus:ring-2 focus:ring-green-500/20 disabled:cursor-not-allowed disabled:bg-gray-300 disabled:shadow-none disabled:hover:bg-gray-300"
              disabled={!reason.trim() || reason.length < 10}
              onClick={handleConfirm}
            >
              Confirm Cancel
            </Button>
          </div>

          {/* Warning Footer */}
          <div className="mt-6 rounded-xl border border-amber-100 bg-amber-50 p-4">
            <p className="text-center text-amber-800 text-xs leading-relaxed">
              <span className="font-semibold">Important:</span> Once cancelled,
              this order cannot be restored. Any payments made will be processed
              for refund within 3-5 business days.
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
