import { SearchX, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { LoadingSpinner } from '@/components/ui/loading-spinner';

interface OrdersCenterStatesProps {
  readonly state: 'loading' | 'no-results' | 'empty';
  readonly onTryAgain?: () => void;
}

export function OrdersCenterStates({
  state,
  onTryAgain,
}: OrdersCenterStatesProps) {
  if (state === 'loading') {
    return (
      <div className="flex flex-col items-center justify-center py-20">
        <LoadingSpinner />
        <p className="mt-4 text-gray-600">Searching for orders...</p>
      </div>
    );
  }

  if (state === 'no-results') {
    return (
      <div className="flex flex-col items-center justify-center py-20">
        <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gray-100">
          <SearchX className="h-8 w-8 text-gray-400" />
        </div>
        <h3 className="mb-2 font-semibold text-gray-900 text-lg">
          No orders found
        </h3>
        <p className="mb-6 max-w-md text-center text-gray-600">
          Your search did not match any orders. Try adjusting your filters or
          search terms.
        </p>
        {onTryAgain && (
          <Button onClick={onTryAgain} variant="outline">
            Clear Filters
          </Button>
        )}
      </div>
    );
  }

  if (state === 'empty') {
    return (
      <div className="flex flex-col items-center justify-center py-20">
        <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gray-100">
          <ShoppingCart className="h-8 w-8 text-gray-400" />
        </div>
        <h3 className="mb-2 font-semibold text-gray-900 text-lg">
          No orders yet
        </h3>
        <p className="mb-6 max-w-md text-center text-gray-600">
          When customers place orders from the marketplace, they will appear
          here.
        </p>
      </div>
    );
  }

  return null;
}
