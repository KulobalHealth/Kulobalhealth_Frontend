"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import Logo from "@/components/ui/logo";
import PasswordInput from "@/components/ui/password-input";
import TextInput from "@/components/ui/text-input";
import { useAdminLogin } from "@/hooks/use-admin-auth";

export default function AdminLogin() {
  const router = useRouter();
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const { mutate: login, isPending, error } = useAdminLogin();

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    login(loginData, {
      onSuccess: () => router.push("/admin/dashboard"),
    });
  };

  return (
    <div className="flex h-screen flex-col items-center justify-center bg-white p-4">
      <Logo />
      <h1 className="mt-4 text-center font-bold text-3xl">Admin Login</h1>
      <form className="mt-6 w-full max-w-sm space-y-4" onSubmit={handleLogin}>
        <TextInput
          label="Email"
          onChange={(e) =>
            setLoginData({ ...loginData, email: e.target.value })
          }
          placeholder="Enter email"
          value={loginData.email}
        />
        <PasswordInput
          label="Password"
          onChange={(e) =>
            setLoginData({ ...loginData, password: e.target.value })
          }
          placeholder="Enter password"
          value={loginData.password}
        />
        {error && <div className="text-red-500 text-sm">{error.message}</div>}
        <Button className="w-full" disabled={isPending} type="submit">
          {isPending ? "Logging in..." : "Login"}
        </Button>
      </form>
    </div>
  );
}
