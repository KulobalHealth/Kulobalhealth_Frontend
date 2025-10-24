"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import Logo from "@/components/ui/logo";
import PasswordInput from "@/components/ui/password-input";
import TextInput from "@/components/ui/text-input";
import { useAdminRegister } from "@/hooks/use-admin-auth";

export default function AdminSignup() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const { mutate: register, isPending, error } = useAdminRegister();

  const handleSignup = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    register(formData, {
      onSuccess: () => router.push("/admin/dashboard"),
    });
  };

  return (
    <div className="flex h-screen flex-col items-center justify-center bg-white p-4">
      <Logo />
      <h1 className="mt-4 text-center font-bold text-3xl">Admin Signup</h1>
      <form className="mt-6 w-full max-w-sm space-y-4" onSubmit={handleSignup}>
        <TextInput
          label="First Name"
          onChange={(e) =>
            setFormData({ ...formData, firstName: e.target.value })
          }
          placeholder="Enter first name"
          value={formData.firstName}
        />
        <TextInput
          label="Last Name"
          onChange={(e) =>
            setFormData({ ...formData, lastName: e.target.value })
          }
          placeholder="Enter last name"
          value={formData.lastName}
        />
        <TextInput
          label="Email"
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          placeholder="Enter email"
          value={formData.email}
        />
        <PasswordInput
          label="Password"
          onChange={(e) =>
            setFormData({ ...formData, password: e.target.value })
          }
          placeholder="Enter password"
          value={formData.password}
        />
        {error && <div className="text-red-500 text-sm">{error.message}</div>}
        <Button className="w-full" disabled={isPending} type="submit">
          {isPending ? "Signing up..." : "Sign Up"}
        </Button>
      </form>
    </div>
  );
}
