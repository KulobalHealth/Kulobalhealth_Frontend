'use client';

import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useMarketplaceStore } from '@/lib/store';

interface ShippingInfo {
  pharmacyName: string;
  phone: string;
  email: string;
  location: string;
  streetAddress: string;
  gpsAddress: string;
}

interface PaymentInfo {
  method: 'mobile-money' | 'card';
  network?: string;
  accountNumber?: string;
  accountName?: string;
  savePayment: boolean;
  cardNumber?: string;
  expiryDate?: string;
  cvv?: string;
  savedCards?: {
    id: string;
    last4: string;
    expiryDate: string;
    type: string;
  }[];
  selectedCard?: string;
}

export default function CheckoutPage() {
  const router = useRouter();
  const { cart, products } = useMarketplaceStore();
  const [shippingInfo, setShippingInfo] = useState<ShippingInfo>({
    pharmacyName: '',
    phone: '',
    email: '',
    location: '',
    streetAddress: '',
    gpsAddress: '',
  });
  const [paymentInfo, setPaymentInfo] = useState<PaymentInfo>({
    method: 'mobile-money',
    network: 'mtn',
    accountNumber: '',
    accountName: '',
    savePayment: false,
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    savedCards: [
      {
        id: '1',
        last4: '4242',
        expiryDate: '12/24',
        type: 'Visa',
      },
    ],
  });
  const [paymentType, setPaymentType] = useState<'full' | 'half' | 'credit'>(
    'full'
  );
  const [errors, setErrors] = useState<Partial<ShippingInfo & PaymentInfo>>({});
  const [showConfirmation, setShowConfirmation] = useState(false);

  const cartItems = cart.map((item) => {
    const product = products.find((p) => p.id === item.productId);
    return { ...item, product };
  });

  const subtotal = cartItems.reduce((sum, item) => {
    return sum + (item.product?.price || 0) * item.quantity;
  }, 0);

  const deliveryFee = 10;
  const tax = subtotal * 0.03;
  const total = subtotal + tax + deliveryFee;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setShippingInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (errors[name as keyof ShippingInfo]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  const validateForm = () => {
    const newErrors: Partial<ShippingInfo & PaymentInfo> = {};

    // Validate shipping info
    if (!shippingInfo.pharmacyName)
      newErrors.pharmacyName = 'Pharmacy name is required';
    if (!shippingInfo.phone) newErrors.phone = 'Phone number is required';
    if (!shippingInfo.email) newErrors.email = 'Email is required';
    if (!shippingInfo.location) newErrors.location = 'Location is required';
    if (!shippingInfo.streetAddress)
      newErrors.streetAddress = 'Street address is required';

    // Validate payment info
    if (paymentInfo.method === 'mobile-money') {
      if (!paymentInfo.accountNumber)
        newErrors.accountNumber = 'Account number is required';
      if (!paymentInfo.accountName)
        newErrors.accountName = 'Account name is required';
    } else if (paymentInfo.method === 'card' && !paymentInfo.selectedCard) {
      if (!paymentInfo.cardNumber)
        newErrors.cardNumber = 'Card number is required';
      if (!paymentInfo.expiryDate)
        newErrors.expiryDate = 'Expiry date is required';
      if (!paymentInfo.cvv) newErrors.cvv = 'CVV is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setShowConfirmation(true);
    }
  };

  const handleTrackOrder = () => {
    setShowConfirmation(false);
    router.push('/marketplace/orders');
  };

  const handleContinueShopping = () => {
    setShowConfirmation(false);
    router.push('/marketplace');
  };

  return (
    <>
      <div className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <Link
            className="inline-flex items-center font-medium text-sm"
            href="/marketplace/cart"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <div className="mb-8 overflow-hidden rounded-lg border bg-white dark:bg-background">
              <div className="flex items-center justify-between border-b p-4">
                <h2 className="font-bold">Shipping & Delivery Address</h2>
                <button className="font-medium text-emerald-500 text-sm">
                  Edit
                </button>
              </div>

              <div className="space-y-4 p-4">
                <div className="grid grid-cols-1 gap-4">
                  <div>
                    <Label className="text-sm" htmlFor="pharmacy-name">
                      Pharmacy Name<span className="text-red-500">*</span>
                    </Label>
                    <Input
                      className={`mt-1 ${
                        errors.pharmacyName ? 'border-red-500' : ''
                      }`}
                      id="pharmacy-name"
                      name="pharmacyName"
                      onChange={handleInputChange}
                      placeholder="Enter pharmacy name"
                      value={shippingInfo.pharmacyName}
                    />
                    {errors.pharmacyName && (
                      <p className="mt-1 text-red-500 text-xs">
                        {errors.pharmacyName}
                      </p>
                    )}
                  </div>

                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <div>
                      <Label className="text-sm" htmlFor="phone">
                        Phone Number<span className="text-red-500">*</span>
                      </Label>
                      <Input
                        className={`mt-1 ${
                          errors.phone ? 'border-red-500' : ''
                        }`}
                        id="phone"
                        name="phone"
                        onChange={handleInputChange}
                        placeholder="Enter phone number"
                        value={shippingInfo.phone}
                      />
                      {errors.phone && (
                        <p className="mt-1 text-red-500 text-xs">
                          {errors.phone}
                        </p>
                      )}
                    </div>
                    <div>
                      <Label className="text-sm" htmlFor="email">
                        Email<span className="text-red-500">*</span>
                      </Label>
                      <Input
                        className={`mt-1 ${
                          errors.email ? 'border-red-500' : ''
                        }`}
                        id="email"
                        name="email"
                        onChange={handleInputChange}
                        placeholder="Enter email"
                        type="email"
                        value={shippingInfo.email}
                      />
                      {errors.email && (
                        <p className="mt-1 text-red-500 text-xs">
                          {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <Label className="text-sm" htmlFor="pharmacy-location">
                      Pharmacy Location<span className="text-red-500">*</span>
                    </Label>
                    <Input
                      className={`mt-1 ${
                        errors.location ? 'border-red-500' : ''
                      }`}
                      id="pharmacy-location"
                      name="location"
                      onChange={handleInputChange}
                      placeholder="Enter pharmacy location"
                      value={shippingInfo.location}
                    />
                    {errors.location && (
                      <p className="mt-1 text-red-500 text-xs">
                        {errors.location}
                      </p>
                    )}
                  </div>

                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <div>
                      <Label className="text-sm" htmlFor="street-address">
                        Street Address Line
                        <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        className={`mt-1 ${
                          errors.streetAddress ? 'border-red-500' : ''
                        }`}
                        id="street-address"
                        name="streetAddress"
                        onChange={handleInputChange}
                        placeholder="Enter street address"
                        value={shippingInfo.streetAddress}
                      />
                      {errors.streetAddress && (
                        <p className="mt-1 text-red-500 text-xs">
                          {errors.streetAddress}
                        </p>
                      )}
                    </div>
                    <div>
                      <Label className="text-sm" htmlFor="gps">
                        GPS Address (Optional)
                      </Label>
                      <Input
                        className="mt-1"
                        id="gps"
                        name="gpsAddress"
                        onChange={handleInputChange}
                        placeholder="e.g. GH-0732-8739"
                        value={shippingInfo.gpsAddress}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="overflow-hidden rounded-lg border bg-white dark:bg-background">
              <div className="border-b p-4">
                <h2 className="font-bold">Payment Method</h2>
                <p className="mt-1 text-gray-500 text-sm">
                  Select the type of payment method you want to proceed.
                </p>
              </div>

              <div className="p-4">
                <RadioGroup
                  className="space-y-4"
                  defaultValue="mobile-money"
                  onValueChange={(value) =>
                    setPaymentInfo((prev) => ({
                      ...prev,
                      method: value as 'mobile-money' | 'card',
                    }))
                  }
                  value={paymentInfo.method}
                >
                  <div className="rounded-md border p-4">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem id="mobile-money" value="mobile-money" />
                      <Label className="font-medium" htmlFor="mobile-money">
                        Mobile Money (MTN, Telecel, AT)
                      </Label>
                    </div>

                    <div className="mt-4 space-y-4 pl-6">
                      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                        <div>
                          <Label className="text-sm" htmlFor="network">
                            Select Network
                          </Label>
                          <Select defaultValue="mtn">
                            <SelectTrigger className="mt-1" id="network">
                              <SelectValue placeholder="Select network" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="mtn">MTN</SelectItem>
                              <SelectItem value="telecel">Telecel</SelectItem>
                              <SelectItem value="at">AT</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div>
                          <Label className="text-sm" htmlFor="account-number">
                            Account Number
                          </Label>
                          <Input
                            className={`mt-1 ${
                              errors.accountNumber ? 'border-red-500' : ''
                            }`}
                            id="account-number"
                            name="accountNumber"
                            onChange={(e) =>
                              setPaymentInfo((prev) => ({
                                ...prev,
                                accountNumber: e.target.value,
                              }))
                            }
                            placeholder="Enter account number"
                            value={paymentInfo.accountNumber}
                          />
                          {errors.accountNumber && (
                            <p className="mt-1 text-red-500 text-xs">
                              {errors.accountNumber}
                            </p>
                          )}
                        </div>
                      </div>

                      <div>
                        <Label className="text-sm" htmlFor="account-name">
                          Account Name
                        </Label>
                        <Input
                          className={`mt-1 ${
                            errors.accountName ? 'border-red-500' : ''
                          }`}
                          id="account-name"
                          name="accountName"
                          onChange={(e) =>
                            setPaymentInfo((prev) => ({
                              ...prev,
                              accountName: e.target.value,
                            }))
                          }
                          placeholder="Enter account name"
                          value={paymentInfo.accountName}
                        />
                        {errors.accountName && (
                          <p className="mt-1 text-red-500 text-xs">
                            {errors.accountName}
                          </p>
                        )}
                      </div>

                      <div className="flex items-center justify-end space-x-2">
                        <Label
                          className="cursor-pointer text-sm"
                          htmlFor="save-payment"
                        >
                          Save payment method
                        </Label>
                        <button
                          className={`h-5 w-10 rounded-full p-1 duration-300 ease-in-out ${
                            paymentInfo.savePayment
                              ? 'bg-emerald-500'
                              : 'bg-gray-200'
                          }`}
                          onClick={() =>
                            setPaymentInfo((prev) => ({
                              ...prev,
                              savePayment: !prev.savePayment,
                            }))
                          }
                          type="button"
                        >
                          <div
                            className={`h-3 w-3 transform rounded-full bg-white shadow-md duration-300 ease-in-out dark:bg-background ${
                              paymentInfo.savePayment ? 'translate-x-5' : ''
                            }`}
                          />
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-md border p-4">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem id="card" value="card" />
                      <Label className="font-medium" htmlFor="card">
                        Payment Card (Visa, Mastercard)
                      </Label>
                    </div>

                    {paymentInfo.method === 'card' && (
                      <div className="mt-4 space-y-4 pl-6">
                        {paymentInfo.savedCards &&
                          paymentInfo.savedCards.length > 0 && (
                            <div className="space-y-2">
                              <Label className="font-medium text-sm">
                                Saved Cards
                              </Label>
                              <RadioGroup
                                className="space-y-2"
                                onValueChange={(value) =>
                                  setPaymentInfo((prev) => ({
                                    ...prev,
                                    selectedCard: value,
                                  }))
                                }
                                value={paymentInfo.selectedCard}
                              >
                                {paymentInfo.savedCards.map((card) => (
                                  <div
                                    className="flex items-center space-x-2 rounded border p-2"
                                    key={card.id}
                                  >
                                    <RadioGroupItem
                                      id={`card-${card.id}`}
                                      value={card.id}
                                    />
                                    <Label htmlFor={`card-${card.id}`}>
                                      {card.type} ending in {card.last4}{' '}
                                      (expires {card.expiryDate})
                                    </Label>
                                  </div>
                                ))}
                              </RadioGroup>
                              <div className="mt-2">
                                <Button
                                  className="text-sm"
                                  onClick={() =>
                                    setPaymentInfo((prev) => ({
                                      ...prev,
                                      selectedCard: undefined,
                                    }))
                                  }
                                  type="button"
                                  variant="outline"
                                >
                                  Use a different card
                                </Button>
                              </div>
                            </div>
                          )}

                        {!(
                          paymentInfo.savedCards?.length &&
                          paymentInfo.selectedCard
                        ) && (
                          <>
                            <div>
                              <Label className="text-sm" htmlFor="card-number">
                                Card Number
                              </Label>
                              <Input
                                className={`mt-1 ${
                                  errors.cardNumber ? 'border-red-500' : ''
                                }`}
                                id="card-number"
                                onChange={(e) =>
                                  setPaymentInfo((prev) => ({
                                    ...prev,
                                    cardNumber: e.target.value,
                                  }))
                                }
                                placeholder="1234 5678 9012 3456"
                                value={paymentInfo.cardNumber}
                              />
                              {errors.cardNumber && (
                                <p className="mt-1 text-red-500 text-xs">
                                  {errors.cardNumber}
                                </p>
                              )}
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                              <div>
                                <Label className="text-sm" htmlFor="expiry">
                                  Expiry Date
                                </Label>
                                <Input
                                  className={`mt-1 ${
                                    errors.expiryDate ? 'border-red-500' : ''
                                  }`}
                                  id="expiry"
                                  onChange={(e) =>
                                    setPaymentInfo((prev) => ({
                                      ...prev,
                                      expiryDate: e.target.value,
                                    }))
                                  }
                                  placeholder="MM/YY"
                                  value={paymentInfo.expiryDate}
                                />
                                {errors.expiryDate && (
                                  <p className="mt-1 text-red-500 text-xs">
                                    {errors.expiryDate}
                                  </p>
                                )}
                              </div>
                              <div>
                                <Label className="text-sm" htmlFor="cvv">
                                  CVV
                                </Label>
                                <Input
                                  className={`mt-1 ${
                                    errors.cvv ? 'border-red-500' : ''
                                  }`}
                                  id="cvv"
                                  onChange={(e) =>
                                    setPaymentInfo((prev) => ({
                                      ...prev,
                                      cvv: e.target.value,
                                    }))
                                  }
                                  placeholder="123"
                                  value={paymentInfo.cvv}
                                />
                                {errors.cvv && (
                                  <p className="mt-1 text-red-500 text-xs">
                                    {errors.cvv}
                                  </p>
                                )}
                              </div>
                            </div>

                            <div className="flex items-center justify-end space-x-2">
                              <Label
                                className="cursor-pointer text-sm"
                                htmlFor="save-payment"
                              >
                                Save payment method
                              </Label>
                              <button
                                className={`h-5 w-10 rounded-full p-1 duration-300 ease-in-out ${
                                  paymentInfo.savePayment
                                    ? 'bg-emerald-500'
                                    : 'bg-gray-200'
                                }`}
                                onClick={() =>
                                  setPaymentInfo((prev) => ({
                                    ...prev,
                                    savePayment: !prev.savePayment,
                                  }))
                                }
                                type="button"
                              >
                                <div
                                  className={`h-3 w-3 transform rounded-full bg-white shadow-md duration-300 ease-in-out ${
                                    paymentInfo.savePayment
                                      ? 'translate-x-5'
                                      : ''
                                  }`}
                                />
                              </button>
                            </div>
                          </>
                        )}
                      </div>
                    )}
                  </div>
                </RadioGroup>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-4 overflow-hidden rounded-lg border bg-white dark:bg-background">
              <div className="border-b p-4">
                <h2 className="font-bold">Cart Summary</h2>
              </div>

              <div className="flex items-center justify-between border-b p-4">
                <span>Items</span>
                <span className="font-bold">{cartItems.length}</span>
              </div>

              <div className="flex items-center justify-between border-b p-4">
                <span>Delivery fee</span>
                <span className="font-bold">GH₵ {deliveryFee.toFixed(2)}</span>
              </div>

              <div className="flex items-center justify-between border-b p-4">
                <span>Subtotal</span>
                <span className="font-bold">GH₵ {subtotal.toFixed(2)}</span>
              </div>

              <div className="flex items-center justify-between border-b p-4">
                <span>Tax</span>
                <span className="font-bold">GH₵ {tax.toFixed(2)}</span>
              </div>

              <div className="flex items-center justify-between border-b p-4">
                <span className="font-bold">Total</span>
                <span className="font-bold text-xl">
                  GH₵ {total.toFixed(2)}
                </span>
              </div>

              <div className="border-b p-4">
                <h3 className="mb-2 font-medium">Payment Type</h3>
                <RadioGroup
                  className="space-y-2"
                  onValueChange={(value) =>
                    setPaymentType(value as 'full' | 'half' | 'credit')
                  }
                  value={paymentType}
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem id="full" value="full" />
                    <Label htmlFor="full">Full payment</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem id="half" value="half" />
                    <Label htmlFor="half">Half payment</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem id="credit" value="credit" />
                    <Label htmlFor="credit">Credit</Label>
                  </div>
                </RadioGroup>
              </div>

              <div className="p-4">
                <Button
                  className="w-full bg-primary-600 font-medium text-white hover:bg-primary-700"
                  onClick={handleSubmit}
                >
                  Confirm
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Dialog onOpenChange={setShowConfirmation} open={showConfirmation}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Order Placed Successfully!</DialogTitle>
            <DialogDescription className="py-4">
              Your order has been placed and will be processed shortly. You can
              track your order status or continue shopping.
            </DialogDescription>
          </DialogHeader>
          <div className="flex justify-end gap-4">
            <Button onClick={handleContinueShopping} variant="outline">
              Continue Shopping
            </Button>
            <Button
              className="bg-emerald-500 text-white hover:bg-emerald-600"
              onClick={handleTrackOrder}
            >
              Track Order
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
