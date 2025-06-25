import { KeyRound } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
export default function Success() {
  return (
    <div className="flex min-h-screen items-center justify-center ">
      <div className="flex w-full max-w-md flex-col items-center justify-center bg-white p-8 ">
        {/* Icon */}
        <div className="mb-4 flex h-24 w-24 items-center justify-center rounded-full bg-green-100">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-300">
            <KeyRound className="h-6 w-6 text-green-800" />
          </div>
        </div>

        {/* Heading and Subtext */}
        <h1 className="mb-2 font-semibold text-2xl">Password Reset</h1>
        <p className="mb-6 text-center text-gray-600 text-sm">
          Your password has been successfully reset. Click below to login
          effortlessly.
        </p>

        {/* Button */}
        <Button className="mb-4 w-full" size="lg" variant="default">
          <Link href="/login">Login now</Link>
        </Button>
      </div>
    </div>
  );
}
