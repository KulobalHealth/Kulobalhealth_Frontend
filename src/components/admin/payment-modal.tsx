'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

interface PaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  pharmacyName: string;
}

export function PaymentModal({
  isOpen,
  onClose,
  pharmacyName,
}: PaymentModalProps) {
  const [amount, setAmount] = useState('1,000.00');
  const [paymentDate, setPaymentDate] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');

  const handleSave = () => {
    // Handle payment recording logic here
    console.log('Recording payment:', { amount, paymentDate, paymentMethod });
    onClose();
  };

  return (
    <Dialog onOpenChange={onClose} open={isOpen}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Record New Payment</DialogTitle>
        </DialogHeader>
        <div className="space-y-4 py-4">
          <div className="space-y-2">
            <Label htmlFor="pharmacy-name">Pharmacy Name</Label>
            <Input disabled id="pharmacy-name" value={pharmacyName} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="amount">Amount</Label>
            <Input
              id="amount"
              onChange={(e) => setAmount(e.target.value.replace('GHS ', ''))}
              value={`GHS ${amount}`}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="payment-date">Payment Date</Label>
            <Input
              id="payment-date"
              onChange={(e) => setPaymentDate(e.target.value)}
              type="date"
              value={paymentDate}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="payment-method">Payment Method</Label>
            <Select onValueChange={setPaymentMethod} value={paymentMethod}>
              <SelectTrigger>
                <SelectValue placeholder="Select payment method" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="cash">Cash</SelectItem>
                <SelectItem value="bank-transfer">Bank Transfer</SelectItem>
                <SelectItem value="mobile-money">Mobile Money</SelectItem>
                <SelectItem value="cheque">Cheque</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="flex justify-end gap-2">
          <Button onClick={onClose} variant="outline">
            Cancel
          </Button>
          <Button
            className="bg-green-500 hover:bg-green-600"
            onClick={handleSave}
          >
            Save Payment
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
