<<<<<<< HEAD
"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import TextInput from "@/components/ui/text-input"
import Image from "next/image"
import groupImg from "@/assets/images/groupImg.png"
import PasswordInput from "@/components/ui/password-input"
import Link from "next/link"

import Loader from "@/components/loader"
import { useState } from "react"
import { useRouter } from "next/navigation"
import toast from "react-hot-toast"
import { useAuthStore } from "@/lib/mock-auth/auth"

export default function Login() {
  const router = useRouter()
  const { login, isLoading, clearError } = useAuthStore()
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  })

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault() // Prevent form reload
    clearError()

    // Show loading toast with green styling
    const loadingToast = toast.loading("Signing you in...", {
      icon: "🔐",
      style: {
        borderColor: "#10b981",
        borderLeftWidth: "4px",
        backgroundColor: "#f0fdf4",
        color: "#065f46",
      },
    })

    try {
      const result = await login(loginData.email, loginData.password)

      // Dismiss loading toast
      toast.dismiss(loadingToast)

      if (result.success) {
        // Success toast with green styling
        toast.success("Login successful!", {
          style: {
            backgroundColor: "#f0fdf4",
            border: "1px solid #10b981",
            color: "#065f46",
          },
        })
        router.push("/dashboard")
      }
    } catch (err) {
      // Dismiss loading toast
      toast.dismiss(loadingToast)

      // Error toast with red styling but keeping the requested green theme for consistency
      toast.error("Login failed. Please check your credentials.", {
        style: {
          backgroundColor: "#f0fdf4",
          borderColor: "#10b981",
          borderLeftWidth: "4px",
          color: "#065f46",
        },
      })
      console.error("Login failed:", err)
    }
  }

  return (
    <div className="flex flex-row justify-between h-screen overflow-hidden dark:bg-background dark:text-white">
      <div className="flex flex-col justify-center items-center w-full lg:w-1/2 h-full bg-white dark:bg-background p-4">

        <h1 className="text-3xl font-bold text-center mt-4 dark:text-white">Welcome back</h1>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Please enter your details to log in.</p>

        <form onSubmit={handleLogin} className="w-full max-w-sm mt-6 space-y-4">
          <div className="space-y-1">
            <TextInput
              placeholder="Enter email/phone"
              label="Email/ Phone Number"
              onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
              value={loginData.email}
            />
          </div>

          <div className="space-y-1">
            <PasswordInput
              placeholder="Enter your password"
              label="Password"
              onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
              value={loginData.password}
            />
          </div>

          <div className="text-right">
            <Link
              href="/login/forgot-password"
              className="text-sm text-emerald-700 dark:text-emerald-500 font-bold hover:underline"
            >
              Forgot password
            </Link>
          </div>

          <Button
            className="w-full bg-emerald-700 hover:bg-emerald-800 dark:bg-emerald-600 dark:hover:bg-emerald-700"
            variant="default"
            type="submit"
            disabled={isLoading}
          >
            {isLoading ? <Loader /> : "Login"}
          </Button>
        </form>

        <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
          Don&apos;t have an account?{" "}
          <Link href="/signup" className="text-emerald-700 dark:text-emerald-500 font-bold underline">
            Create an account
          </Link>
        </p>

        <p className="text-xs text-gray-400 dark:text-gray-500 mt-6">Copyright © 2025 Data Leap Technologies LLC</p>
      </div>

      <div className="hidden lg:flex lg:w-1/2 h-full">
        <Image
          src={groupImg || "/placeholder.svg"}
          alt="login"
          width={800}
          className="hidden lg:block h-full w-full object-cover"
        />
      </div>
    </div>
  )
}
=======
'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import groupImg from '@/assets/images/groupImg.png';
import Loader from '@/components/loader';
import { Button } from '@/components/ui/button';
import Logo from '@/components/ui/logo';
import PasswordInput from '@/components/ui/password-input';
import TextInput from '@/components/ui/text-input';
import { useUserStore } from '@/store/user-store';

export default function Login() {
  const router = useRouter();
  const { loginUser, isloading } = useUserStore();
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  });

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent form reload
    loginUser({
      email: loginData.email,
      password: loginData.password,
    })
      .then(() => {
        router.push('/dashboard');
      })
      .catch((err) => {
        console.error('Login failed:', err);
      });
  };

  return (
    <div className="flex h-screen flex-row justify-between overflow-hidden">
      <div className="flex h-full w-full flex-col items-center justify-center bg-white p-4 lg:w-1/2">
        <Logo />

        <h1 className="mt-4 text-center font-bold text-3xl">Welcome back</h1>
        <p className="mt-1 text-gray-500 text-sm">
          Please enter your details to log in.
        </p>

        <form className="mt-6 w-full max-w-sm space-y-4" onSubmit={handleLogin}>
          <div className="space-y-1">
            <TextInput
              label="Email/ Phone Number"
              onChange={(e) =>
                setLoginData({ ...loginData, email: e.target.value })
              }
              placeholder="Enter email/phone"
              value={loginData.email}
            />
          </div>

          <div className="space-y-1">
            <PasswordInput
              label="Password"
              onChange={(e) =>
                setLoginData({ ...loginData, password: e.target.value })
              }
              placeholder="Enter your password"
              value={loginData.password}
            />
          </div>

          <div className="text-right">
            <Link
              className="font-bold text-emerald-700 text-sm hover:underline"
              href="/login/forgot-password"
            >
              Forgot password
            </Link>
          </div>

          <Button
            className="w-full"
            disabled={isloading}
            type="submit"
            variant="default"
          >
            {isloading ? <Loader /> : 'Login'}
          </Button>
        </form>

        <p className="mt-4 text-gray-500 text-sm">
          Don&apos;t have an account?{' '}
          <Link className="font-bold text-emerald-700 underline" href="/signup">
            Create an account
          </Link>
        </p>

        <p className="mt-6 text-gray-400 text-xs">
          Copyright © 2025 Data Leap Technologies LLC
        </p>
      </div>

      <div className="hidden h-full lg:flex lg:w-1/2">
        <Image
          alt="login"
          className="hidden h-full w-full object-cover lg:block"
          src={groupImg}
          width={800}
        />
      </div>
    </div>
  );
}
>>>>>>> 2e204526af3930f4a2c1eb8432192121dad78a50
