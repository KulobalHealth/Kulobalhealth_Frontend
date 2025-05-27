"use client";

import { Button } from "@/components/ui/button";
import TextInput from "@/components/ui/text-input";
import React, { useState } from "react";
import Image from "next/image";
import groupImg from "@/assets/images/groupImg.png";
import PasswordInput from "@/components/ui/password-input";
import Logo from "@/components/ui/logo";
import Link from "next/link";
import { useMarketplaceStore } from "@/lib/store";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const loginSchema = z.object({
  email: z
    .string()
    .min(1, "Email is required")
    .email("Please enter a valid email address"),
  password: z
    .string()
    .min(1, "Password is required")
    .min(8, "Password must be at least 8 characters"),
});

type LoginFormData = z.infer<typeof loginSchema>;

export default function Login() {
  const { login } = useMarketplaceStore();
  const router = useRouter();
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginFormData) => {
    setError("");
    setIsLoading(true);

    try {
      const success = await login(data.email, data.password);
      if (success) {
        router.push("/marketplace");
      } else {
        setError("Invalid email or password");
      }
    } catch (error) {
      setError("An error occurred. Please try again.");
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-row justify-between h-screen overflow-hidden">
      <div className="flex flex-col justify-center items-center w-full lg:w-1/2 h-full bg-white p-4">
        <Logo />

        <h1 className="text-3xl font-bold text-center mt-4">Welcome back</h1>
        <p className="text-sm text-gray-500 mt-1">
          Please enter your details to log in.
        </p>

        <form
          className="w-full max-w-sm mt-6 space-y-4"
          onSubmit={handleSubmit(onSubmit)}
        >
          {error && (
            <div className="text-sm text-red-600 text-center">{error}</div>
          )}

          <div className="space-y-1">
            <TextInput
              placeholder="Enter email/phone"
              label="Email/ Phone Number"
              type="email"
              {...register("email")}
            />
            {errors.email && (
              <p className="text-sm text-red-500">{errors.email.message}</p>
            )}
          </div>

          <div className="space-y-1">
            <PasswordInput
              placeholder="Enter your password"
              label="Password"
              {...register("password")}
            />
            {errors.password && (
              <p className="text-sm text-red-500">{errors.password.message}</p>
            )}
          </div>

          <div className="text-right">
            <Link
              href="/login/forgot-password"
              className="text-sm text-emerald-700 font-bold hover:underline"
            >
              Forgot password
            </Link>
          </div>

          <Button
            className="w-full"
            variant="default"
            type="submit"
            disabled={isLoading}
          >
            {isLoading ? "Logging in..." : "Login"}
          </Button>
        </form>

        <p className="text-sm text-gray-500 mt-4">
          Don&apos;t have an account?{" "}
          <Link href="/signup" className="text-emerald-700 font-bold underline">
            Create an account
          </Link>
        </p>

        <p className="text-xs text-gray-400 mt-6">
          Copyright © 2025 Data Leap Technologies LLC
        </p>
      </div>

      <div className="hidden lg:flex lg:w-1/2 h-full">
        <Image
          src={groupImg}
          alt="login"
          width={800}
          className="hidden lg:block h-full w-full object-cover"
        />
      </div>
    </div>
  );
}
