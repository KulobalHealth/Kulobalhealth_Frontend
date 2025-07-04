"use client";

import { Search } from "lucide-react";
import { usePathname } from "next/navigation";
import Footer from "@/components/footer";
import Filters from "@/components/marketplace/filters";
import { Navbar } from "@/components/navbar";
import { Icons } from "@/components/ui/icons";
import { useMarketplaceStore } from "@/lib/store";

export default function MarketplaceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const { searchQuery, setSearchQuery } = useMarketplaceStore();
  const isProductDetail = pathname.includes("/marketplace/");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="flex min-h-screen flex-col py-8">
      <header>
        <Navbar />
      </header>

      {!isProductDetail && (
        <>
          <section className="relative my-7 bg-green-50 px-4 py-8 dark:bg-primary-900">
            <div className="absolute inset-0">
              <Icons.Banner className="h-full opacity-20 dark:bg-primary-900" />
            </div>
            <div className="container relative z-10 mx-auto max-w-6xl">
              <h1 className="mb-2 text-center font-medium text-2xl text-green-600">
                What product are you looking for?
              </h1>
              <p className="mb-4 text-center text-gray-600 text-sm dark:text-white">
                One-Stop Med Supply Ordering. Find all the medical supplies you
                need for your pharmacy in one place.
              </p>
              <form
                className="mx-auto flex max-w-xl gap-2"
                onSubmit={handleSearch}
              >
                <div className="relative flex-1">
                  <Search className="-translate-y-1/2 absolute top-1/2 left-3 h-4 w-4 text-gray-400" />
                  <input
                    className="w-full rounded-md border border-gray-300 py-2 pr-4 pl-10 focus:outline-hidden focus:ring-2 focus:ring-green-500"
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search for product"
                    type="text"
                    value={searchQuery}
                  />
                </div>
                <button
                  className="rounded-md bg-primary-500 px-6 py-2 text-white hover:bg-primary-600"
                  type="submit"
                >
                  Search
                </button>
              </form>
            </div>
          </section>

          <main className="container mx-auto mb-[194px] min-h-screen flex-1 px-4">
            <span className="flex flex-col gap-6 md:flex-row">
              <div className="w-full shrink-0 md:w-64">
                <Filters />
              </div>
              {children}
            </span>
          </main>
        </>
      )}

      {isProductDetail && (
        <main className="my-8 min-h-screen flex-1">{children}</main>
      )}

      <Footer />
    </div>
  );
}
