import { SearchX } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { LoadingSpinner } from '@/components/ui/loading-spinner';

interface PatientCenterStatesProps {
  readonly state: 'loading' | 'no-results';
  readonly onTryAgain?: () => void;
}

export function PatientCenterStates({
  state,
  onTryAgain,
}: PatientCenterStatesProps) {
  if (state === 'loading') {
    return (
      <div className="flex flex-col items-center justify-center py-20">
        <LoadingSpinner />
        <p className="mt-4 text-gray-600">Searching for patients...</p>
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
          No patients found
        </h3>
        <p className="mb-6 max-w-md text-center text-gray-600">
          Your search did not match any patient. Kindly try again.
        </p>
        {onTryAgain && (
          <Button onClick={onTryAgain} variant="outline">
            Try Again
          </Button>
        )}
      </div>
    );
  }

  return null;
}
