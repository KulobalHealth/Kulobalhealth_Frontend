'use client'
import { Button } from '@/components/ui/button'
import TextInput from '@/components/ui/text-input'
import React from 'react'
import Image from "next/image"
import groupImg from "@/assets/images/groupImg.png"
import Logo from '@/components/ui/logo'
import Link from 'next/link'

export default function SignUp() {
  return (
    <div className="flex flex-row justify-between overflow-hidden min-h-screen">
      {/* Left form section */}
      <div className='flex flex-col justify-center items-center w-full lg:w-1/2 h-full bg-white p-9'>
        <Logo />

        <h1 className='text-3xl font-bold text-center mt-4'>Create an account</h1>
        <p className='text-sm text-gray-500 mt-1'>Provide your details below to continue</p>

        {/* Step indicator */}
        <div className='w-full max-w-sm text-emerald-600 font-bold mt-4 text-sm'>Pharmacy Info <span className='float-right'>1/2</span></div>

        {/* Form */}
        <form className='w-full max-w-sm mt-2 space-y-4'>
          <TextInput
            placeholder='Enter pharmacy name'
            label="Pharmacy Name"
          />
          <TextInput
            placeholder='Enter pharmacy licence number'
            label="Pharmacy Licence Number"
          />
          <TextInput
            placeholder='Enter location'
            label="Pharmacy Location"
          />
          <TextInput
            placeholder='Enter total number of branches'
            label="Total Branches"
          />

          {/* Role selection */}
          <div>
            <label className='block text-sm font-medium text-gray-700 mb-1'>Select Role</label>
            <div className='flex space-x-4'>
              <label className='flex items-center gap-2 text-sm'>
                <input type="radio" name="role" value="pharmacist" className='accent-emerald-600 '/>
                Pharmacist
              </label>
              <label className='flex items-center gap-2 text-sm'>
                <input type="radio" name="role" value="hospitalAdmin" className='accent-emerald-600 ' />
                Hospital Admin
              </label>
            </div>
          </div>

          {/* Legal and continue */}
          <p className='text-xs text-gray-500'>
            By continuing, you agree to our <a href="#" className='text-emerald-700 underline'>Terms & conditions</a> and our <a href="#" className='text-emerald-700 underline'>Privacy policy</a>.
          </p>

          <Button variant="default" className='w-full' size={"lg"}>
            Continue
          </Button>

          <div className='text-center text-sm'>
            Already have an account? <Link href="/login" className='text-emerald-700 underline'>Sign in</Link>
          </div>
        </form>
      </div>

      {/* Right image section */}
      <div className='hidden lg:block fixed -right-7'>
        <Image
          src={groupImg}
          alt="illustration"
          width={800}
          className="h-full w-full object-cover"
        />
      </div>
    </div>
  )
}
