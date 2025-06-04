"use client";
import { Button } from "@/components/ui/button";
import TextInput from "@/components/ui/text-input";
import React, { useState } from "react";
import Image from "next/image";
import groupImg from "@/assets/images/groupImg.png";
import Logo from "@/components/ui/logo";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useUserStore } from "../../store/user-store";

export default function SignUp() {
  const [role, setRole] = useState("");
  const [userData, setUserData] = useState({
    pharmacyName: "",
    pharmacyLicenseNumber: "",
    location: "",
    role: "",
    totalBranches: "",
  });
  const router = useRouter();
  const updateUserData = useUserStore((state) => state.updateUserData);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleNavigate = (e: React.FormEvent) => {
    e.preventDefault(); // prevent form submission refresh

    if (role === "pharmacist") {
      const updatedData = { ...userData, role: "pharmacist" };
      setUserData(updatedData);
      updateUserData(updatedData);
      router.push("/signup/pharmacy-info");
      console.log(updatedData);
    } else if (role === "hospitalAdmin") {
      const updatedData = { ...userData, role: "hospitalAdmin" };
      setUserData(updatedData);
      updateUserData(updatedData);
      router.push("/signup/admin-info");
      console.log(updatedData);
    } else {
      alert("Please select a role to continue");
    }
  };

  return (
    <div className="flex flex-row justify-between overflow-hidden min-h-screen">
      {/* Left form section */}
      <div className="flex flex-col justify-center items-center w-full lg:w-1/2 h-full bg-white p-9">
        <Logo />

        <h1 className="text-3xl font-bold text-center mt-4">
          Create an account
        </h1>
        <p className="text-sm text-gray-500 mt-1">
          Provide your details below to continue
        </p>

        <div className="w-full max-w-sm text-emerald-600 font-bold mt-4 text-sm">
          Pharmacy Info <span className="float-right">1/2</span>
        </div>

        <form
          className="w-full max-w-sm mt-2 space-y-4"
          onSubmit={handleNavigate}
        >
          <TextInput
            placeholder="Enter pharmacy name"
            label="Pharmacy Name"
            onChange={handleChange}
            name="pharmacyName"
            value={userData.pharmacyName}
          />
          <TextInput
            placeholder="Enter pharmacy licence number"
            label="Pharmacy Licence Number"
            onChange={handleChange}
            name="pharmacyLicenseNumber"
            value={userData.pharmacyLicenseNumber}
          />
          <TextInput
            placeholder="Enter location"
            label="Pharmacy Location"
            onChange={handleChange}
            name="location"
            value={userData.location}
          />
          <TextInput
            placeholder="Enter total number of branches"
            label="Total Branches"
            onChange={handleChange}
            name="totalBranches"
            value={userData.totalBranches}
          />

          {/* Role selection */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Select Role
            </label>
            <div className="flex space-x-4">
              <label className="flex items-center gap-2 text-sm">
                <input
                  type="radio"
                  name="role"
                  value="pharmacist"
                  className="accent-emerald-600"
                  onChange={(e) => setRole(e.target.value)}
                  checked={role === "pharmacist"}
                />
                Pharmacist
              </label>
              <label className="flex items-center gap-2 text-sm">
                <input
                  type="radio"
                  name="role"
                  value="hospitalAdmin"
                  className="accent-emerald-600"
                  onChange={(e) => setRole(e.target.value)}
                  checked={role === "hospitalAdmin"}
                />
                Hospital Admin
              </label>
            </div>
          </div>

          <p className="text-xs text-gray-500">
            By continuing, you agree to our{" "}
            <a href="#" className="text-emerald-700 underline">
              Terms & conditions
            </a>{" "}
            and our{" "}
            <a href="#" className="text-emerald-700 underline">
              Privacy policy
            </a>
            .
          </p>

          <Button
            variant="default"
            className="w-full"
            size={"lg"}
            type="submit"
          >
            Continue
          </Button>

          <div className="text-center text-sm">
            Already have an account?{" "}
            <Link href="/login" className="text-emerald-700 underline">
              Sign in
            </Link>
          </div>
        </form>
      </div>

      {/* Right image section */}
      <div className="hidden lg:block fixed -right-7">
        <Image
          src={groupImg}
          alt="illustration"
          width={800}
          className="h-full w-full object-cover"
        />
      </div>
    </div>
  );
}
