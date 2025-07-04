<<<<<<< HEAD
import Link from "next/link"
import { ArrowLeft, Smartphone, CreditCard } from "lucide-react"

export default function CheckoutPage() {
  return (
    <div className=" w-full min-h-screen">
      {/* Main Content */}
      <main className="flex-1 py-6 px-4 sm:px-6 items-center justify-center ">
        <div className="max-w-6xl mx-auto">
          {/* Back Button */}
          <Link
            href="/cart"
            className="flex items-center gap-2 mb-6 text-sm font-medium text-gray-700 hover:text-gray-900"
          >
            <ArrowLeft className="h-4 w-4" />
            Back
          </Link>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Left Column - Shipping & Payment */}
            <div className="md:col-span-2 space-y-8">
              {/* Shipping & Delivery Address */}
              <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-none">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-lg font-semibold text-gray-900">Shipping & Delivery Address</h2>
                  <button className="text-emerald-600 text-sm font-medium hover:text-emerald-700">Edit</button>
                </div>

                <div className="grid gap-4">
                  <div>
                    <label htmlFor="pharmacy-name" className="block text-sm font-medium mb-2 text-gray-700">
                      Pharmacy Name*
                    </label>
                    <input
                      type="text"
                      id="pharmacy-name"
                      className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                      placeholder="Required for user"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium mb-2 text-gray-700">
                        Phone Number*
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                        placeholder="Required for user"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2 text-gray-700">
                        Email*
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                        placeholder="Required for user"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="pharmacy-location" className="block text-sm font-medium mb-2 text-gray-700">
                      Pharmacy Location*
                    </label>
                    <input
                      type="text"
                      id="pharmacy-location"
                      className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                      placeholder="Required for user"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="street-address" className="block text-sm font-medium mb-2 text-gray-700">
                        Street Address One*
                      </label>
                      <input
                        type="text"
                        id="street-address"
                        className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                        placeholder="Required for user"
                      />
                    </div>
                    <div>
                      <label htmlFor="gps-address" className="block text-sm font-medium mb-2 text-gray-700">
                        GPS Address (Optional)
                      </label>
                      <input
                        type="text"
                        id="gps-address"
                        className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                        placeholder="e.g. GA-492-9735"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Payment Method */}
              <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-none">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-lg font-semibold text-gray-900">Payment Method</h2>
                </div>

                <p className="text-sm mb-4 text-gray-600">Select the type of payment method you want to proceed.</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <label className="flex items-center justify-between border-2 border-emerald-200 bg-emerald-50 rounded-xl p-4 cursor-pointer hover:border-emerald-300 transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="bg-green-500 h-10 w-10 rounded-lg flex items-center justify-center">
                        <CreditCard className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">Pay</p>
                        <p className="text-sm text-gray-600">Pay now online</p>
                      </div>
                    </div>
                    <input
                      type="radio"
                      name="payment-method"
                      className="h-4 w-4 text-emerald-600 focus:ring-emerald-500"
                      defaultChecked
                    />
                  </label>

                  <label className="flex items-center justify-between border-2 border-gray-200 rounded-xl p-4 cursor-pointer hover:border-gray-300 transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="bg-orange-500 h-10 w-10 rounded-lg flex items-center justify-center">
                        <Smartphone className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">Pay on Delivery</p>
                        <p className="text-sm text-gray-600">Cash on delivery</p>
                      </div>
                    </div>
                    <input
                      type="radio"
                      name="payment-method"
                      className="h-4 w-4 text-emerald-600 focus:ring-emerald-500"
                    />
                  </label>
                </div>
              </div>
            </div>

            {/* Right Column - Cart Summary */}
            <div>
              <div className="bg-white border border-gray-200 rounded-xl p-6 sticky top-6 shadow-none">
                <h2 className="text-lg font-semibold mb-6 text-gray-900">Cart Summary</h2>

                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Items</span>
                    <span className="font-medium text-gray-900">3</span>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Delivery fee</span>
                    <span className="font-medium text-gray-900">GH₵ 10.00</span>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Subtotal</span>
                    <span className="font-medium text-gray-900">GH₵ 600.00</span>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Tax</span>
                    <span className="font-medium text-gray-900">GH₵ 10.00</span>
                  </div>

                  <div className="pt-4 border-t border-gray-200 flex justify-between">
                    <span className="font-semibold text-gray-900">Total</span>
                    <span className="font-bold text-lg text-gray-900">GH₵ 620.00</span>
                  </div>
                </div>

                <div className="mt-6 space-y-4">
                  <h3 className="font-semibold text-gray-900">Payment Type</h3>

                  <div className="space-y-2">
                    <label className="group flex items-center gap-2 p-4">
                      <div className="relative flex items-center justify-center">
                        <input type="radio" name="payment-type" className="sr-only peer" />
                        <div className="w-5 h-5 border-2 border-gray-300 rounded-full bg-white transition-all duration-200 peer-checked:bg-emerald-500 peer-checked:border-emerald-500 group-hover:border-emerald-400"></div>
                      </div>
                      <span className="text-sm font-medium text-gray-900 group-hover:text-emerald-800 peer-checked:text-emerald-800">
                        Full payment
                      </span>
                    </label>

                    <label className="group flex items-center gap-3 p-4 ">
                      <div className="relative flex items-center justify-center">
                        <input type="radio" name="payment-type" className="sr-only peer" />
                        <div className="w-5 h-5 border-2 border-gray-300 rounded-full bg-white transition-all duration-200 peer-checked:bg-emerald-500 peer-checked:border-emerald-500 group-hover:border-emerald-400"></div>
                      </div>
                      <span className="text-sm font-medium text-gray-900 group-hover:text-emerald-800 peer-checked:text-emerald-800">
                        Half payment
                      </span>
                    </label>

                    <label className="group flex items-center gap-3 p-4 ">
                      <div className="relative flex items-center justify-center">
                        <input type="radio" name="payment-type" className="sr-only peer" />
                        <div className="w-5 h-5 border-2 border-gray-300 rounded-full bg-white transition-all duration-200 peer-checked:bg-emerald-500 peer-checked:border-emerald-500 group-hover:border-emerald-400"></div>
                      </div>
                      <span className="text-sm font-medium text-gray-900 group-hover:text-emerald-800 peer-checked:text-emerald-800">
                        Credit
                      </span>
                    </label>
                  </div>
                </div>

                <button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 rounded-lg mt-6 transition-colors">
                  Confirm
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
=======
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
>>>>>>> 2e204526af3930f4a2c1eb8432192121dad78a50
