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
