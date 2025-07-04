"use client";

import { ArrowLeft, MailIcon } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import * as React from "react";
import { Suspense } from "react";
import Loader from "@/components/loader";
import { Button } from "@/components/ui/button";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { useUserStore } from "@/store/user-store";

function OTPVerificationComponent() {
  const [value, setValue] = React.useState("");
  const searchParams = useSearchParams();
  const email = searchParams.get("email");
  const { VerificationEmail, isloading } = useUserStore();
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!(email && value)) {
      alert("Please enter a valid email and OTP code.");
      return;
    }

    VerificationEmail(email, value);
    router.push("/login");

    console.log("OTP submitted:", value);
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
        {isloading ? <Loader /> : "Verify OTP"}
      </Button>
      {/* Resend Code */}
      <p className="mt-6 text-base text-gray-600">
        Didn&apos;t receive code?{" "}
        <button className="font-medium text-green-600 hover:underline">
          Resend code
        </button>
      </p>
      {/* Back to login */}
      <button className="mt-8 flex items-center text-base text-gray-700 hover:underline">
        <ArrowLeft className="mr-2 h-5 w-5" />
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
