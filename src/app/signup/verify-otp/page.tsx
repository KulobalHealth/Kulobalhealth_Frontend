<<<<<<< HEAD
"use client";

import * as React from "react";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { Button } from "@/components/ui/button";
import { MailIcon, ArrowLeft } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";

import { Suspense } from "react";

function OTPVerificationComponent() {
  const [value, setValue] = React.useState("");
  const searchParams = useSearchParams();
  const email = searchParams.get("email");
  // const { VerificationEmail, isloading } = useUserStore();
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !value) {
      alert("Please enter a valid email and OTP code.");
      return;
    }

    // VerificationEmail(email, value);
    router.push("/login");

    console.log("OTP submitted:", value);
    // You can also redirect or show a success message
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white px-4">
      {/* Icon */}
      <div className="mb-6 bg-green-100 rounded-full p-5">
        <MailIcon className="text-green-600 w-10 h-10" />
      </div>
      {/* Title */}
      <h1 className="text-4xl font-bold text-gray-800 mb-2">
        OTP Verification
      </h1>
      <p className="text-lg text-gray-600 mb-8 text-center leading-relaxed">
        We sent an OTP verification code to <br />
        <span className="font-semibold text-gray-800">{email}</span>
      </p>
      {/* OTP Input */}
      <InputOTP
        maxLength={4}
        value={value}
        onChange={(val) => setValue(val)}
        className="scale-110"
      >
        <InputOTPGroup>
          <InputOTPSlot index={0} className="w-20 h-20" />
          <InputOTPSlot index={1} className="w-20 h-20" />
          <InputOTPSlot index={2} className="w-20 h-20" />
          <InputOTPSlot index={3} className="w-20 h-20" />
        </InputOTPGroup>
      </InputOTP>
      {/* Verify Button */}
      <Button
        className="mt-8 w-full max-w-sm py-6 text-lg bg-emerald-600 hover:bg-emerald-700"
        onClick={handleSubmit}
      >
        {/* {isloading ? <Loader /> : "Verify OTP"} */}
      </Button>
      {/* Resend Code */}
      <p className="text-base text-gray-600 mt-6">
        Didn&apos;t receive code?{" "}
        <button className="text-green-600 hover:underline font-medium">
          Resend code
        </button>
      </p>
      {/* Back to login */}
      <button className="mt-8 flex items-center text-base text-gray-700 hover:underline">
        <ArrowLeft className="w-5 h-5 mr-2" />
        Back to log in
      </button>{" "}
    </div>
  );
}

export default function OTPVerificationPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <OTPVerificationComponent />
    </Suspense>
  );
}
=======
'use client';

import { ArrowLeft, MailIcon } from 'lucide-react';
import { useRouter, useSearchParams } from 'next/navigation';
import * as React from 'react';
import { Suspense } from 'react';
import Loader from '@/components/loader';
import { Button } from '@/components/ui/button';
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from '@/components/ui/input-otp';
import { useUserStore } from '@/store/user-store';

function OTPVerificationComponent() {
  const [value, setValue] = React.useState('');
  const searchParams = useSearchParams();
  const email = searchParams.get('email');
  const { VerificationEmail, isloading } = useUserStore();
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!(email && value)) {
      alert('Please enter a valid email and OTP code.');
      return;
    }

    VerificationEmail(email, value);
    router.push('/login');

    console.log('OTP submitted:', value);
    // You can also redirect or show a success message
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-white px-4">
      {/* Icon */}
      <div className="mb-6 rounded-full bg-green-100 p-5">
        <MailIcon className="h-10 w-10 text-green-600" />
      </div>
      {/* Title */}
      <h1 className="mb-2 font-bold text-4xl text-gray-800">
        OTP Verification
      </h1>
      <p className="mb-8 text-center text-gray-600 text-lg leading-relaxed">
        We sent an OTP verification code to <br />
        <span className="font-semibold text-gray-800">{email}</span>
      </p>
      {/* OTP Input */}
      <InputOTP
        className="scale-110"
        maxLength={4}
        onChange={(val) => setValue(val)}
        value={value}
      >
        <InputOTPGroup>
          <InputOTPSlot className="h-20 w-20" index={0} />
          <InputOTPSlot className="h-20 w-20" index={1} />
          <InputOTPSlot className="h-20 w-20" index={2} />
          <InputOTPSlot className="h-20 w-20" index={3} />
        </InputOTPGroup>
      </InputOTP>
      {/* Verify Button */}
      <Button
        className="mt-8 w-full max-w-sm bg-emerald-600 py-6 text-lg hover:bg-emerald-700"
        onClick={handleSubmit}
      >
        {isloading ? <Loader /> : 'Verify OTP'}
      </Button>
      {/* Resend Code */}
      <p className="mt-6 text-base text-gray-600">
        Didn&apos;t receive code?{' '}
        <button className="font-medium text-green-600 hover:underline">
          Resend code
        </button>
      </p>
      {/* Back to login */}
      <button className="mt-8 flex items-center text-base text-gray-700 hover:underline">
        <ArrowLeft className="mr-2 h-5 w-5" />
        Back to log in
      </button>{' '}
    </div>
  );
}

export default function OTPVerificationPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <OTPVerificationComponent />
    </Suspense>
  );
}
>>>>>>> 2e204526af3930f4a2c1eb8432192121dad78a50
