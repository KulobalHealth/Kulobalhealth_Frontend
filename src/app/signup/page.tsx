"use client"
import Image from "next/image"
import type React from "react"
import img from "@/assets/images/groupImg.png"
import Link from "next/link"
import BusinessRegistrationForm from "@/components/auth/business-registration-form"


export default function BusinessRegistration() {
 
  return (
    <div className="flex flex-row justify-between h-screen overflow-hidden">
      <div className="flex flex-col justify-center items-center w-full lg:w-1/2 h-full bg-white p-4">

        <h1 className="text-3xl font-bold text-center mt-4">Register Your Business</h1>
        <p className="text-sm text-gray-500 mt-1">Please enter your business details to get started.</p>

        <BusinessRegistrationForm
        
        />

        <p className="text-sm text-gray-500 mt-4">
          Already have an account?{" "}
          <Link href="/login" className="text-emerald-700 font-bold underline">
            Sign in here
          </Link>
        </p>

        <p className="text-xs text-gray-400 mt-6">Copyright © 2025 Data Leap Technologies LLC</p>
      </div>

      <div className="hidden lg:flex lg:w-1/2 h-full">
        <Image
          src={img}
          alt="business registration"
          width={800}
          height={800}
          className="hidden lg:block h-full w-full object-cover"
        />
      </div>
    </div>
  )
}
