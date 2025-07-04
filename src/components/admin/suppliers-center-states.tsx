'use client';

import { Package, RefreshCw, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { LoadingSpinner } from '@/components/ui/loading-spinner';

type CenterState = 'loading' | 'empty' | 'no-results';

interface SuppliersCenterStatesProps {
  readonly state: CenterState;
  readonly onTryAgain?: () => void;
}

export function SuppliersCenterStates({
  state,
  onTryAgain,
}: SuppliersCenterStatesProps) {
  if (state === 'loading') {
    return (
      <div className="flex flex-col items-center justify-center rounded-lg border bg-white py-12">
        <LoadingSpinner />
        <p className="mt-4 text-gray-600">Searching suppliers...</p>
      </div>
    );
  }

  if (state === 'empty') {
    return (
      <div className="flex flex-col items-center justify-center rounded-lg border bg-white py-12">
        <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gray-100">
          <Package className="h-8 w-8 text-gray-400" />
        </div>
        <h3 className="mb-2 font-semibold text-gray-900 text-lg">
          No suppliers yet
        </h3>
        <p className="mb-6 max-w-md text-center text-gray-600">
          Get started by adding your first supplier to the system. You can
          manage all supplier information and track their performance.
        </p>
        <Button className="bg-primary-500 text-white hover:bg-primary-600">
          Add First Supplier
        </Button>
      </div>
    );
  }

  if (state === 'no-results') {
    return (
      <div className="flex flex-col items-center justify-center rounded-lg border bg-white py-12">
        <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gray-100">
          <Search className="h-8 w-8 text-gray-400" />
        </div>
        <h3 className="mb-2 font-semibold text-gray-900 text-lg">
          No suppliers found
        </h3>
        <p className="mb-6 max-w-md text-center text-gray-600">
          We couldn&apos;t find any suppliers matching your search criteria. Try
          adjusting your filters or search terms.
        </p>
        {onTryAgain && (
          <Button
            className="flex items-center gap-2"
            onClick={onTryAgain}
            variant="outline"
          >
            <RefreshCw className="h-4 w-4" />
            Clear Filters
          </Button>
        )}
      </div>
    );
  }

  return null;
}
