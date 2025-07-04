import { ArrowLeft, KeyRound } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Button } from "@/components/ui/button";
import PasswordInput from "@/components/ui/password-input";

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
