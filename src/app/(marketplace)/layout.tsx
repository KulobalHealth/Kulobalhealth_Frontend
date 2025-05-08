import Filters from "@/components/marketplace/filters";
import { Navbar } from "@/components/navbar";
import { Icons } from "@/components/ui/icons";
import { Search } from "lucide-react";

export default function MarketplaceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col">
      <header>
        <Navbar />
      </header>
      {/* Hero Search Section */}
      <section className="bg-green-50 py-8 px-4 relative">
        <div className="absolute inset-0">
          <Icons.Banner className="w-full h-full opacity-20" />
        </div>
        <div className="container mx-auto max-w-6xl relative z-10">
          <h1 className="text-center text-2xl font-medium text-green-600 mb-2">
            What product are you looking for?
          </h1>
          <p className="text-center text-sm text-gray-600 mb-4">
            One-Stop Med Supply Ordering. Find all the medical supplies you need
            for your pharmacy in one place.
          </p>
          <div className="flex max-w-xl mx-auto gap-2">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search for product"
                className="w-full rounded-md border border-gray-300 py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
            <button className="bg-primary-500 hover:bg-primary-600 text-white px-6 py-2 rounded-md">
              Search
            </button>
          </div>
        </div>
      </section>
      <main className="flex-1 container mx-auto px-4 py-8">
        <span className="flex flex-col md:flex-row gap-6">
          <div className="w-full md:w-64 shrink-0">
            <Filters />
          </div>

          {children}
        </span>
      </main>
    </div>
  );
}
