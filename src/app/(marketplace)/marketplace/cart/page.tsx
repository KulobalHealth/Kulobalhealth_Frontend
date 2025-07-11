"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useMarketplaceStore } from "@/lib/store";

export default function CartPage() {
  const { cart, products, removeFromCart, updateQuantity } =
    useMarketplaceStore();

  const cartItems = cart.map((item) => {
    const product = products.find((p) => p.id === item.productId);
    return { ...item, product };
  });

  const subtotal = cartItems.reduce((sum, item) => {
    return sum + (item.product?.price ?? 0) * item.quantity;
  }, 0);

  const tax = subtotal * 0.03;
  const total = subtotal + tax;

  return (
    <section className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <div className="overflow-hidden rounded-lg border">
            <div className="border-b bg-white p-4 dark:bg-background">
              <h1 className="font-bold text-xl">
                My Cart ({cartItems.length})
              </h1>
            </div>

            {cartItems.map((item) => (
              <div
                className="border-b bg-white p-4 dark:bg-background"
                key={item.productId}
              >
                <div className="flex flex-col gap-4 sm:flex-row">
                  <div className="flex h-36 w-full items-center justify-center rounded-md bg-gray-100 p-4 sm:w-36 dark:bg-neutral-900">
                    <Image
                      alt={item.product?.name ?? "Product"}
                      className="object-contain"
                      height={120}
                      src={item.product?.images[0] ?? "/placeholder.svg"}
                      width={120}
                    />
                  </div>

                  <div className="flex flex-1 flex-col justify-between">
                    <div>
                      <h3 className="font-bold text-xl">
                        {item.product?.name}
                      </h3>
                      <p className="mt-1 text-gray-600">
                        {item.product?.brand}
                      </p>
                    </div>

                    <button
                      className="mt-2 w-fit font-medium text-primary-600 text-sm"
                      onClick={() => removeFromCart(item.productId)}
                    >
                      Remove from cart
                    </button>
                  </div>

                  <div className="flex flex-col items-end justify-between">
                    <span className="font-bold text-lg">
                      GH₵{" "}
                      {((item.product?.price ?? 0) * item.quantity).toFixed(2)}
                    </span>

                    <div className="mt-2 flex items-center rounded-full bg-neutral-500 dark:bg-neutral-900">
                      <button
                        className="flex h-9 w-9 items-center justify-center rounded-full bg-neutral-500 p-[5px]"
                        onClick={() =>
                          updateQuantity(
                            item.productId,
                            Math.max(1, item.quantity - 1)
                          )
                        }
                      >
                        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#F6F6F7] p-[15px] dark:bg-[#2e2e2e]">
                          -
                        </span>
                      </button>
                      <span className="w-8 text-center">{item.quantity}</span>
                      <button
                        className="flex h-9 w-9 items-center justify-center rounded-full bg-neutral-500"
                        onClick={() =>
                          updateQuantity(item.productId, item.quantity + 1)
                        }
                      >
                        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#F6F6F7] p-[15px] dark:bg-[#2e2e2e]">
                          +
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {cartItems.length === 0 && (
              <div className="p-8 text-center text-gray-500">
                Your cart is empty.
                <Link
                  className="mt-2 block text-emerald-500"
                  href="/marketplace"
                >
                  Continue Shopping
                </Link>
              </div>
            )}
          </div>
        </div>

        {cartItems.length > 0 && (
          <div className="lg:col-span-1">
            <div className="overflow-hidden rounded-lg border bg-white dark:bg-background">
              <div className="border-b p-4">
                <h2 className="font-bold">Cart Summary</h2>
              </div>

              <div className="flex items-center justify-between border-b p-4">
                <span>Items</span>
                <span className="font-bold">{cartItems.length}</span>
              </div>

              <div className="flex items-center justify-between border-b p-4">
                <span>Subtotal</span>
                <span className="font-bold">GH₵ {subtotal.toFixed(2)}</span>
              </div>

              <div className="flex items-center justify-between border-b p-4">
                <span>Tax (3%)</span>
                <span className="font-bold">GH₵ {tax.toFixed(2)}</span>
              </div>

              <div className="border-b p-4">
                <h3 className="mb-2">Get it your way</h3>
                <RadioGroup className="space-y-2" defaultValue="pickup">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem id="pickup" value="pickup" />
                    <Label htmlFor="pickup">Pick up</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem id="delivery" value="delivery" />
                    <Label htmlFor="delivery">Delivery</Label>
                  </div>
                </RadioGroup>
              </div>

              <div className="flex items-center justify-between border-b p-4">
                <span className="font-bold">Total</span>
                <span className="font-bold text-xl">
                  GH₵ {total.toFixed(2)}
                </span>
              </div>

              <div className="p-4">
                <Link href="/marketplace/checkout">
                  <Button className="w-full ">Continue to checkout</Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
