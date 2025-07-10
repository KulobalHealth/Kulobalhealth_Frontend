'use client';

import { Search } from 'lucide-react';
import { usePathname } from 'next/navigation';
import Footer from '@/components/footer';
import Filters from '@/components/marketplace/filters';
import { Navbar } from '@/components/navbar';
import { Icons } from '@/components/ui/icons';
import { useMarketplaceStore } from '@/lib/store';

export default function MarketplaceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const { searchQuery, setSearchQuery } = useMarketplaceStore();
  const isProductDetail = pathname.includes('/marketplace/');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="flex min-h-screen flex-col py-8">
      <header>
        <Navbar />
      </header>


        <main className=" min-h-screen flex-1">{children}</main>
  
      <Footer />
    </div>
  );
}
