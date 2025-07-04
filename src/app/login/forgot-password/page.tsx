"use client";
import { ArrowLeft, KeyRound } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import Helper from "@/components/auth-page-helper";
import Loader from "@/components/loader";
import { Button } from "@/components/ui/button";
import TextInput from "@/components/ui/text-input";
import { useUserStore } from "@/store/user-store";

export default function ForgetPassword() {
  const [email, setEmail] = useState<string>("");
  const { forgotPassword, isloading } = useUserStore();

  const handleForgot = () => {
    forgotPassword(email)
      .then(() => {
        console.log("Password reset instructions sent to:", email);
      })
      .catch((error) => {
        console.error("Error sending verification email:", error);
      });
  };

  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="flex w-full max-w-md flex-col items-center bg-white p-9 ">
        {/* Icon */}
        <Helper icon={<KeyRound className="h-6 w-6 text-green-800" />} />

        {/* Heading & Description */}
        <h1 className="mb-2 font-semibold text-2xl">Forgot Password</h1>
        <p className="mb-6 text-center text-gray-600 text-sm">
          Don’t worry, we’ll send you reset instructions.
        </p>

        {/* Input */}
        <div className="mb-4 w-full">
          <TextInput
            label="Email/Phone Number"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email/phone number"
            value={email}
          />
        </div>

        {/* Button */}
        <Button
          className="mb-4 w-full"
          disabled={isloading}
          onClick={handleForgot}
          size="lg"
          variant="default"
        >
          <Link className="text-white" href="/login/reset-password">
            {isloading ? <Loader /> : " Reset Password"}
          </Link>
        </Button>

        {/* Back to Login */}
        <p className="flex items-center gap-2 text-gray-500 text-sm">
          <ArrowLeft className="h-4 w-4" />
          <Link href="/login">Back to login</Link>
        </p>
      </div>
    </div>
  );
}
