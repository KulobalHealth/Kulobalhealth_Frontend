<<<<<<< HEAD
import React from 'react'
import { Button } from '@/components/ui/button'
import { ArrowLeft, KeyRound } from 'lucide-react'
import Link from 'next/link'
import PasswordInput from '@/components/ui/password-input'

export default function ResetPassword() {
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
                <h1 className="text-2xl font-semibold mb-2">Reset Password</h1>
                <p className="text-sm text-gray-600 text-center mb-6">
                    Set a new password for your account
                </p>

                {/* Password Fields */}
                <div className="w-full space-y-4 mb-6">
                    <PasswordInput
                        label="New Password"
                        placeholder="Enter new password"
                    />
                    <PasswordInput
                        label="Confirm Password"
                        placeholder="Confirm new password"
                    />
                </div>

                {/* Button */}
                <Button variant="default" size="lg" className=" w-full mb-4">
                    <Link href ="/login/success" >Reset Password</Link>
                </Button>

                {/* Back to login */}
                <p className="flex items-center gap-2 text-sm text-gray-500">
                    <ArrowLeft className="w-4 h-4" />
                    <Link href="/login">Back to login</Link>
                </p>
            </div>
        </div>
    );
}
=======
import { ArrowLeft, KeyRound } from 'lucide-react';
import Link from 'next/link';
import React from 'react';
import { Button } from '@/components/ui/button';
import PasswordInput from '@/components/ui/password-input';

export default function ResetPassword() {
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
        <h1 className="mb-2 font-semibold text-2xl">Reset Password</h1>
        <p className="mb-6 text-center text-gray-600 text-sm">
          Set a new password for your account
        </p>

        {/* Password Fields */}
        <div className="mb-6 w-full space-y-4">
          <PasswordInput
            label="New Password"
            placeholder="Enter new password"
          />
          <PasswordInput
            label="Confirm Password"
            placeholder="Confirm new password"
          />
        </div>

        {/* Button */}
        <Button className=" mb-4 w-full" size="lg" variant="default">
          <Link href="/login/success">Reset Password</Link>
        </Button>

        {/* Back to login */}
        <p className="flex items-center gap-2 text-gray-500 text-sm">
          <ArrowLeft className="h-4 w-4" />
          <Link href="/login">Back to login</Link>
        </p>
      </div>
    </div>
  );
}
>>>>>>> 2e204526af3930f4a2c1eb8432192121dad78a50
