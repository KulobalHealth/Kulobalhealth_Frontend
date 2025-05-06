"use client";

import { useState } from "react";
import { useMarketplaceStore } from "@/lib/store";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface ShippingInfo {
  firstName: string;
  lastName: string;
  address: string;
  city: string;
  region: string;
  phone: string;
}

export default function CheckoutPage() {
  const { cart, products } = useMarketplaceStore();
  const [shippingInfo, setShippingInfo] = useState<ShippingInfo>({
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    region: "",
    phone: "",
  });
  const [errors, setErrors] = useState<Partial<ShippingInfo>>({});

  const cartItems = cart.map((item) => {
    const product = products.find((p) => p.id === item.productId);
    return { ...item, product };
  });

  const subtotal = cartItems.reduce((sum, item) => {
    return sum + (item.product?.price || 0) * item.quantity;
  }, 0);

  const tax = subtotal * 0.03;
  const total = subtotal + tax;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setShippingInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error when user types
    if (errors[name as keyof ShippingInfo]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  const validateForm = () => {
    const newErrors: Partial<ShippingInfo> = {};
    if (!shippingInfo.firstName) newErrors.firstName = "First name is required";
    if (!shippingInfo.lastName) newErrors.lastName = "Last name is required";
    if (!shippingInfo.address) newErrors.address = "Address is required";
    if (!shippingInfo.city) newErrors.city = "City is required";
    if (!shippingInfo.region) newErrors.region = "Region is required";
    if (!shippingInfo.phone) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\d{10}$/.test(shippingInfo.phone)) {
      newErrors.phone = "Please enter a valid 10-digit phone number";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      // Handle order submission
      console.log("Order placed:", { shippingInfo, cartItems, total });
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-2xl font-bold mb-6">Checkout</h1>

        <form onSubmit={handleSubmit}>
          <div className="bg-white rounded-lg border p-6 mb-6">
            <h2 className="text-xl font-semibold mb-4">Shipping Information</h2>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">
                    First Name
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={shippingInfo.firstName}
                    onChange={handleInputChange}
                    className={`w-full p-2 border rounded ${
                      errors.firstName ? "border-red-500" : ""
                    }`}
                  />
                  {errors.firstName && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.firstName}
                    </p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={shippingInfo.lastName}
                    onChange={handleInputChange}
                    className={`w-full p-2 border rounded ${
                      errors.lastName ? "border-red-500" : ""
                    }`}
                  />
                  {errors.lastName && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.lastName}
                    </p>
                  )}
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Address
                </label>
                <input
                  type="text"
                  name="address"
                  value={shippingInfo.address}
                  onChange={handleInputChange}
                  className={`w-full p-2 border rounded ${
                    errors.address ? "border-red-500" : ""
                  }`}
                />
                {errors.address && (
                  <p className="text-red-500 text-sm mt-1">{errors.address}</p>
                )}
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">City</label>
                  <input
                    type="text"
                    name="city"
                    value={shippingInfo.city}
                    onChange={handleInputChange}
                    className={`w-full p-2 border rounded ${
                      errors.city ? "border-red-500" : ""
                    }`}
                  />
                  {errors.city && (
                    <p className="text-red-500 text-sm mt-1">{errors.city}</p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Region
                  </label>
                  <input
                    type="text"
                    name="region"
                    value={shippingInfo.region}
                    onChange={handleInputChange}
                    className={`w-full p-2 border rounded ${
                      errors.region ? "border-red-500" : ""
                    }`}
                  />
                  {errors.region && (
                    <p className="text-red-500 text-sm mt-1">{errors.region}</p>
                  )}
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  value={shippingInfo.phone}
                  onChange={handleInputChange}
                  className={`w-full p-2 border rounded ${
                    errors.phone ? "border-red-500" : ""
                  }`}
                  placeholder="0123456789"
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                )}
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg border p-6 mb-6">
            <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
            <div className="space-y-4">
              {cartItems.map((item) => (
                <div key={item.productId} className="flex justify-between">
                  <span>
                    {item.product?.name} × {item.quantity}
                  </span>
                  <span>
                    GH₵{" "}
                    {((item.product?.price || 0) * item.quantity).toFixed(2)}
                  </span>
                </div>
              ))}
              <div className="border-t pt-4">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>GH₵ {subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Tax (3%)</span>
                  <span>GH₵ {tax.toFixed(2)}</span>
                </div>
                <div className="flex justify-between font-bold mt-2">
                  <span>Total</span>
                  <span>GH₵ {total.toFixed(2)}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex gap-4">
            <Link href="/cart" className="flex-1">
              <Button type="button" variant="outline" className="w-full">
                Back to Cart
              </Button>
            </Link>
            <Button
              type="submit"
              className="flex-1 bg-emerald-500 hover:bg-emerald-600"
            >
              Place Order
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
