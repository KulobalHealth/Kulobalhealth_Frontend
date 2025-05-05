import { Button } from '@/components/ui/button'
import TextInput from '@/components/ui/text-input'
import React from 'react'
import Image from "next/image"
import  groupImg from "@/assets/images/groupImg.png"
import Logo from '@/components/ui/logo'
import Link from 'next/link'
import PasswordInput from '@/components/ui/password-input'

export default function PharmacyInfo() {
  return (
    <div className="flex flex-row  justify-between   overflow-hidden">
       <div className='flex flex-col justify-center items-center w-full lg:w-1/2 h-full bg-white  p-9'>
  <Logo />

  <h1 className='text-3xl font-bold text-center mt-4'>Create An Account </h1>
  <p className='text-sm text-gray-500 mt-1'>Provide your details below to continue</p>

  <form className='w-full max-w-sm mt-6 space-y-4'>
    <TextInput 
      placeholder='Pharmacy Name' 
      label="Enter your pharmacy name" 
      

    />
    <TextInput
        placeholder='Pharmacy License Number'
        label="Enter  pharmacy license number"
          

    />
     <TextInput 
        placeholder='Enter email'
        label="Email"
          

    />
     <TextInput
        placeholder='Phone Number'
        label="eg. 05534567890"
           

    />
    <TextInput
            placeholder='Enter  pharmacy license number'
        label="Pharmacy License Number"
           

       />
      <PasswordInput
        placeholder='Create password'
        label="Create password"
            
      />
          <PasswordInput
            placeholder='Confirm password'
            label="Confirm your password"
            
          />

         <label>
          Select role
          

          </label> 
          <div className='flex items-center gap-5 w-full'>
            <Button variant="outline" className='w-1/2'>
              <Link href="/login">Back</Link>
            </Button>
            <Button variant="default" className='w-1/2  ' size={"lg"} >
              <Link href="/login" className='text-white'>Confirm</Link>
            </Button>
         </div>
    
    
    
    
    
    

   
  </form>

  

  
</div>

        <div className='fixed right-7'>
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
