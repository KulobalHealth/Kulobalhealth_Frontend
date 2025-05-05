import { Button } from '@/components/ui/button'
import TextInput from '@/components/ui/text-input'
import React from 'react'
import Image from "next/image"
import groupImg from "@/assets/images/groupImg.png"
import Logo from '@/components/ui/logo'
import Link from 'next/link'
import PasswordInput from '@/components/ui/password-input'

export default function AdminInfo() {
  return (
    <div className="flex flex-row  justify-between   overflow-hidden">
      <div className='flex flex-col justify-center items-center w-full lg:w-1/2 h-full bg-white  p-9'>
        <Logo />

        <h1 className='text-3xl font-bold text-center mt-4'>Create An Account </h1>
        <p className='text-sm text-gray-500 mt-1'>Provide your details below to continue</p>

        <form className='w-full max-w-sm mt-6 space-y-4'>
          {/* Step indicator */}
          <div className='w-full max-w-sm text-emerald-600 font-bold mt-4 text-sm'>Pharmacy Info <span className='float-right'>2/2</span></div>
          <TextInput
            label="Enter your full name"
            placeholder='Admin Full Name'
          />
          <TextInput
            label="License Number"
            placeholder='Enter your license number'
          />
          <TextInput
            label="Email"
            placeholder='Enter email'
          />
          <TextInput
            label="Phone Number"
            placeholder='eg. 05534567890'
          />
          <TextInput
            label="Pharmacy License Number"
            placeholder='Enter pharmacy license number'
          />
          <PasswordInput
            label="Create password"
            placeholder='Create password'
          />
          <PasswordInput
            label="Confirm your password"
            placeholder='Confirm password'
          />
          <div className='flex items-center gap-5 w-full'>
            <Button variant="outline" className='w-1/2'>
              <Link href="/login">Back</Link>
            </Button>
            <Button variant="default" className='w-1/2 '>
              <Link href="/login" className='text-white'>Confirm</Link>
            </Button>
          </div>
        </form>
      </div>

      <div className='fixed right-7'>
        <Image
          src={groupImg}
          alt="login"
          width={800}
          className="hidden lg:block h-full w-full object-cover"
        />
      </div>
    </div>
  )
}
