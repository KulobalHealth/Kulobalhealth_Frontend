import { ArrowLeft, CreditCard, Smartphone } from 'lucide-react';
import Link from 'next/link';

export default function CheckoutPage() {
  return (
    <div className=" min-h-screen w-full">
      {/* Main Content */}
      <main className="flex-1 items-center justify-center px-4 py-6 sm:px-6 ">
        <div className="mx-auto max-w-6xl">
          {/* Back Button */}
          <Link
            className="mb-6 flex items-center gap-2 font-medium text-gray-700 text-sm hover:text-gray-900"
            href="/cart"
          >
            <ArrowLeft className="h-4 w-4" />
            Back
          </Link>

          <div className="grid gap-8 md:grid-cols-3">
            {/* Left Column - Shipping & Payment */}
            <div className="space-y-8 md:col-span-2">
              {/* Shipping & Delivery Address */}
              <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-none">
                <div className="mb-6 flex items-center justify-between">
                  <h2 className="font-semibold text-gray-900 text-lg">
                    Shipping & Delivery Address
                  </h2>
                  <button className="font-medium text-emerald-600 text-sm hover:text-emerald-700">
                    Edit
                  </button>
                </div>

                <div className="grid gap-4">
                  <div>
                    <label
                      className="mb-2 block font-medium text-gray-700 text-sm"
                      htmlFor="pharmacy-name"
                    >
                      Pharmacy Name*
                    </label>
                    <input
                      className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm focus:border-transparent focus:outline-none focus:ring-2 focus:ring-emerald-500"
                      id="pharmacy-name"
                      placeholder="Required for user"
                      type="text"
                    />
                  </div>

                  <div className="grid gap-4 md:grid-cols-2">
                    <div>
                      <label
                        className="mb-2 block font-medium text-gray-700 text-sm"
                        htmlFor="phone"
                      >
                        Phone Number*
                      </label>
                      <input
                        className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm focus:border-transparent focus:outline-none focus:ring-2 focus:ring-emerald-500"
                        id="phone"
                        placeholder="Required for user"
                        type="tel"
                      />
                    </div>
                    <div>
                      <label
                        className="mb-2 block font-medium text-gray-700 text-sm"
                        htmlFor="email"
                      >
                        Email*
                      </label>
                      <input
                        className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm focus:border-transparent focus:outline-none focus:ring-2 focus:ring-emerald-500"
                        id="email"
                        placeholder="Required for user"
                        type="email"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      className="mb-2 block font-medium text-gray-700 text-sm"
                      htmlFor="pharmacy-location"
                    >
                      Pharmacy Location*
                    </label>
                    <input
                      className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm focus:border-transparent focus:outline-none focus:ring-2 focus:ring-emerald-500"
                      id="pharmacy-location"
                      placeholder="Required for user"
                      type="text"
                    />
                  </div>

                  <div className="grid gap-4 md:grid-cols-2">
                    <div>
                      <label
                        className="mb-2 block font-medium text-gray-700 text-sm"
                        htmlFor="street-address"
                      >
                        Street Address One*
                      </label>
                      <input
                        className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm focus:border-transparent focus:outline-none focus:ring-2 focus:ring-emerald-500"
                        id="street-address"
                        placeholder="Required for user"
                        type="text"
                      />
                    </div>
                    <div>
                      <label
                        className="mb-2 block font-medium text-gray-700 text-sm"
                        htmlFor="gps-address"
                      >
                        GPS Address (Optional)
                      </label>
                      <input
                        className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm focus:border-transparent focus:outline-none focus:ring-2 focus:ring-emerald-500"
                        id="gps-address"
                        placeholder="e.g. GA-492-9735"
                        type="text"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Payment Method */}
              <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-none">
                <div className="mb-6 flex items-center justify-between">
                  <h2 className="font-semibold text-gray-900 text-lg">
                    Payment Method
                  </h2>
                </div>

                <p className="mb-4 text-gray-600 text-sm">
                  Select the type of payment method you want to proceed.
                </p>

                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <label className="flex cursor-pointer items-center justify-between rounded-xl border-2 border-emerald-200 bg-emerald-50 p-4 transition-colors hover:border-emerald-300">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-500">
                        <CreditCard className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">Pay</p>
                        <p className="text-gray-600 text-sm">Pay now online</p>
                      </div>
                    </div>
                    <input
                      className="h-4 w-4 text-emerald-600 focus:ring-emerald-500"
                      defaultChecked
                      name="payment-method"
                      type="radio"
                    />
                  </label>

                  <label className="flex cursor-pointer items-center justify-between rounded-xl border-2 border-gray-200 p-4 transition-colors hover:border-gray-300">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-orange-500">
                        <Smartphone className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">
                          Pay on Delivery
                        </p>
                        <p className="text-gray-600 text-sm">
                          Cash on delivery
                        </p>
                      </div>
                    </div>
                    <input
                      className="h-4 w-4 text-emerald-600 focus:ring-emerald-500"
                      name="payment-method"
                      type="radio"
                    />
                  </label>
                </div>
              </div>
            </div>

            {/* Right Column - Cart Summary */}
            <div>
              <div className="sticky top-6 rounded-xl border border-gray-200 bg-white p-6 shadow-none">
                <h2 className="mb-6 font-semibold text-gray-900 text-lg">
                  Cart Summary
                </h2>

                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-gray-600 text-sm">Items</span>
                    <span className="font-medium text-gray-900">3</span>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-gray-600 text-sm">Delivery fee</span>
                    <span className="font-medium text-gray-900">GH₵ 10.00</span>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-gray-600 text-sm">Subtotal</span>
                    <span className="font-medium text-gray-900">
                      GH₵ 600.00
                    </span>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-gray-600 text-sm">Tax</span>
                    <span className="font-medium text-gray-900">GH₵ 10.00</span>
                  </div>

                  <div className="flex justify-between border-gray-200 border-t pt-4">
                    <span className="font-semibold text-gray-900">Total</span>
                    <span className="font-bold text-gray-900 text-lg">
                      GH₵ 620.00
                    </span>
                  </div>
                </div>

                <div className="mt-6 space-y-4">
                  <h3 className="font-semibold text-gray-900">Payment Type</h3>

                  <div className="space-y-2">
                    <label className="group flex items-center gap-2 p-4">
                      <div className="relative flex items-center justify-center">
                        <input
                          className="peer sr-only"
                          name="payment-type"
                          type="radio"
                        />
                        <div className="h-5 w-5 rounded-full border-2 border-gray-300 bg-white transition-all duration-200 group-hover:border-emerald-400 peer-checked:border-emerald-500 peer-checked:bg-emerald-500" />
                      </div>
                      <span className="font-medium text-gray-900 text-sm group-hover:text-emerald-800 peer-checked:text-emerald-800">
                        Full payment
                      </span>
                    </label>

                    <label className="group flex items-center gap-3 p-4 ">
                      <div className="relative flex items-center justify-center">
                        <input
                          className="peer sr-only"
                          name="payment-type"
                          type="radio"
                        />
                        <div className="h-5 w-5 rounded-full border-2 border-gray-300 bg-white transition-all duration-200 group-hover:border-emerald-400 peer-checked:border-emerald-500 peer-checked:bg-emerald-500" />
                      </div>
                      <span className="font-medium text-gray-900 text-sm group-hover:text-emerald-800 peer-checked:text-emerald-800">
                        Half payment
                      </span>
                    </label>

                    <label className="group flex items-center gap-3 p-4 ">
                      <div className="relative flex items-center justify-center">
                        <input
                          className="peer sr-only"
                          name="payment-type"
                          type="radio"
                        />
                        <div className="h-5 w-5 rounded-full border-2 border-gray-300 bg-white transition-all duration-200 group-hover:border-emerald-400 peer-checked:border-emerald-500 peer-checked:bg-emerald-500" />
                      </div>
                      <span className="font-medium text-gray-900 text-sm group-hover:text-emerald-800 peer-checked:text-emerald-800">
                        Credit
                      </span>
                    </label>
                  </div>
                </div>

                <button className="mt-6 w-full rounded-lg bg-emerald-600 py-3 font-semibold text-white transition-colors hover:bg-emerald-700">
                  Confirm
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
