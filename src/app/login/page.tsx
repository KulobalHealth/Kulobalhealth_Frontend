import { Button } from '@/components/ui/button'
import TextInput from '@/components/ui/text-input'
import React from 'react'
import Image from "next/image"
import  groupImg from "@/assets/images/groupImg.png"
import PasswordInput from '@/components/ui/password-input'
import Logo from '@/components/ui/logo'
import Link from 'next/link'

export default function Login() {
  return (
    <div className="flex flex-row  justify-between h-screen  overflow-hidden">
       <div className='flex flex-col justify-center items-center w-full lg:w-1/2 h-full bg-white p-4'>
  <Logo />

  <h1 className='text-3xl font-bold text-center mt-4'>Welcome back</h1>
  <p className='text-sm text-gray-500 mt-1'>Please enter your details to log in.</p>

  <form className='w-full max-w-sm mt-6 space-y-4'>
    <TextInput 
      placeholder='Enter email/phone' 
      label="Email/ Phone Number" 
    />
    
    <PasswordInput 
      placeholder="Enter your password" 
      label="Password" 
    />
    
    <div className='text-right'>
      <a href="/login/forgot-password" className='text-sm text-emerald-700 font-bold hover:underline'>
        Forgot password
      </a>
    </div>

    <Button className='w-full ' variant="default" type="submit" >
      Login
    </Button>
  </form>

  <p className='text-sm text-gray-500 mt-4'>
    Don’t have an account?{' '}
    <Link href="/signup" className='text-emerald-700 font-bold underline '>
      Create an account
    </Link>
  </p>

  <p className='text-xs text-gray-400 mt-6'>
    Copyright © 2025 Data Leap Technologies LLC
  </p>
</div>

        <div className='hidden lg:flex lg:w-1/2 h-full'> 
          <Image 
            src= {groupImg}
            alt="login"
            width={800} 
            className="hidden lg:block h-full w-full object-cover"
          />
        </div>
    </div>
  )
}
