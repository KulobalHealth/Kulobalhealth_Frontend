import { Button } from '@/components/ui/button';
import { LoadingSpinner } from '@/components/ui/loading-spinner';

interface PharmacyCenterStatesProps {
  readonly isSearching: boolean;
  readonly hasNoResults: boolean;
  readonly onTryAgain: () => void;
}

export function PharmacyCenterStates({
  isSearching,
  hasNoResults,
  onTryAgain,
}: PharmacyCenterStatesProps) {
  if (isSearching) {
    return (
      <div className="flex flex-col items-center justify-center py-16">
        <LoadingSpinner />
        <p className="mt-4 text-gray-600">Searching pharmacies...</p>
      </div>
    );
  }

  if (hasNoResults) {
    return (
      <div className="flex flex-col items-center justify-center py-16">
        <div className="text-center">
          <h3 className="mb-2 font-medium text-gray-900 text-lg">
            No pharmacy found
          </h3>
          <p className="mb-6 text-gray-600">
            Your search did not match any pharmacy. Kindly try again
          </p>
          <Button onClick={onTryAgain} variant="outline">
            Try again
          </Button>
        </div>
      </div>
    );
  }

  return null;
}
