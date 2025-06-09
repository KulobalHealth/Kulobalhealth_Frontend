"use client";
import { Button } from "@/components/ui/button";
import TextInput from "@/components/ui/text-input";
import Image from "next/image";
import groupImg from "@/assets/images/groupImg.png";
import PasswordInput from "@/components/ui/password-input";
import Logo from "@/components/ui/logo";
import Link from "next/link";
import { useUserStore } from "@/store/user-store";
import Loader from "@/components/loader";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();
  const { loginUser, isloading } = useUserStore();
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent form reload
    loginUser({
      email: loginData.email,
      password: loginData.password,
    })
      .then(() => {
        router.push("/dashboard");
      })
      .catch((err) => {
        console.error("Login failed:", err);
      });
  };

  return (
    <div className="flex flex-row justify-between h-screen overflow-hidden">
      <div className="flex flex-col justify-center items-center w-full lg:w-1/2 h-full bg-white p-4">
        <Logo />

        <h1 className="text-3xl font-bold text-center mt-4">Welcome back</h1>
        <p className="text-sm text-gray-500 mt-1">
          Please enter your details to log in.
        </p>

        <form onSubmit={handleLogin} className="w-full max-w-sm mt-6 space-y-4">
          <div className="space-y-1">
            <TextInput
              placeholder="Enter email/phone"
              label="Email/ Phone Number"
              onChange={(e) =>
                setLoginData({ ...loginData, email: e.target.value })
              }
              value={loginData.email}
              
            />
          </div>

          <div className="space-y-1">
            <PasswordInput
              placeholder="Enter your password"
              label="Password"
              onChange={(e) =>
                setLoginData({ ...loginData, password: e.target.value })
              }
              value={loginData.password}
            />
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
            disabled={isloading}
          >
            {isloading ? <Loader /> : "Login"}
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
