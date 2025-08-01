"use client";
import Image from "next/image";
import Link from "next/link";
import type React from "react";
// import { useUserStore } from "@/store/user-store";
import { useState } from "react";
import img from "@/assets/images/groupImg.png";
import BusinessRegistrationForm from "@/components/auth/business-registration-form";
import Logo from "@/components/ui/logo";
// import { useRouter } from "next/navigation"

export default function BusinessRegistration() {
  // const router = useRouter()
  // const { registerBusiness, isloading } = useUserStore();
  const [formData, setFormData] = useState({
    businessName: "",
    ownerName: "",
    location: "",
    email: "",
    telephone: "",
    role: "",
  });

  // Mock loading state since the store is commented out
  const isloading = false;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent form reload
    console.log("Business registration data:", formData);
    // registerBusiness(formData)
    //   .then(() => {
    //     router.push("/dashboard");
    //   })
    //   .catch((err) => {
    //     console.error("Registration failed:", err);
    //   });
  };

  return (
    <div className="flex h-screen flex-row justify-between overflow-hidden">
      <div className="flex h-full w-full flex-col items-center justify-center bg-white p-4 lg:w-1/2">
        <Logo />

        <h1 className="mt-4 text-center font-bold text-3xl">
          Register Your Business
        </h1>
        <p className="mt-1 text-gray-500 text-sm">
          Please enter your business details to get started.
        </p>

        <BusinessRegistrationForm
          formData={formData ?? {}}
          handleSubmit={handleSubmit}
          isloading={isloading}
          setFormData={setFormData}
        />

        <p className="mt-4 text-gray-500 text-sm">
          Already have an account?{" "}
          <Link className="font-bold text-emerald-700 underline" href="/login">
            Sign in here
          </Link>
        </p>

        <p className="mt-6 text-gray-400 text-xs">
          Copyright © 2025 Data Leap Technologies LLC
        </p>
      </div>

      <div className="hidden h-full lg:flex lg:w-1/2">
        <Image
          alt="business registration"
          className="hidden h-full w-full object-cover lg:block"
          height={800}
          src={img}
          width={800}
        />
      </div>
    </div>
  );
}
