<<<<<<< HEAD
import { Button } from "@/components/ui/button";
import { KeyRound } from "lucide-react";
import Link from "next/link";
export default function Success() {
    return (
        <div className="flex justify-center items-center min-h-screen ">
            <div className="flex flex-col justify-center items-center w-full max-w-md bg-white p-8 ">
                {/* Icon */}
                <div className="flex items-center justify-center w-24 h-24 rounded-full bg-green-100 mb-4">
                    <div className="flex items-center justify-center w-16 h-16 rounded-full bg-green-300">
                        <KeyRound className="text-green-800 w-6 h-6" />
                    </div>
                </div>

                {/* Heading and Subtext */}
                <h1 className="text-2xl font-semibold mb-2">Password Reset</h1>
                <p className="text-sm text-gray-600 text-center mb-6">
                    Your password has been successfully reset. Click below to login effortlessly.
                </p>

                {/* Button */}
                <Button variant="default" size="lg" className="w-full mb-4">
                    <Link href="/login">Login now</Link>
                </Button>
            </div>
        </div>
    );
}
=======
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
>>>>>>> 2e204526af3930f4a2c1eb8432192121dad78a50
