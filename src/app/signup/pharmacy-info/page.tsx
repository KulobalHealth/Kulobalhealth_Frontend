"use client"
import { Button } from '@/components/ui/button'
import TextInput from '@/components/ui/text-input'
import React from 'react'
import Image from "next/image"
import  groupImg from "@/assets/images/groupImg.png"
import Logo from '@/components/ui/logo'
import Link from 'next/link'
import PasswordInput from '@/components/ui/password-input'
import { useState } from 'react'
import { useUserStore } from "@/store/user-store"
import Loader from '@/components/loader'

export default function PharmacyInfo() {

  const updateUserData = useUserStore((state) => state.updateUserData);
  const createUser = useUserStore((state) => state.createUser);
  const loading = useUserStore((state) => state.isloading);

  const [confirmPassword, setConfirmPassword] = useState("");
  const [pharmacyData, setPharmacyData] = useState({
    pharmacistName: "",
    pharmacyLicenseNumber: "",
    email: "",
    phoneNumber: "",
    password: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === "confirmPassword") {
      setConfirmPassword(value);
    } else {
      setPharmacyData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handlePassword = () => {
    // const password = pharmacyData.password;
    // if (password.length < 8) {
    //   console.log("Password must be at least 8 characters long");
    //   return false;
    // }
    // if (!/[A-Z]/.test(password)) {
    //   console.log("Password must contain at least one uppercase letter");
    //   return false;
    // }
    if (pharmacyData.password !== confirmPassword) {
      console.log("Passwords do not match");
      return false;
    }
    return true;
  };

  //Handle form submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!handlePassword()) {
      return;
    }
  console.log("pharmacyData", pharmacyData)
    updateUserData(pharmacyData);
   
    createUser();
  };
  return (
    <div className="flex flex-row  justify-between   overflow-hidden">
       <div className='flex flex-col justify-center items-center w-full lg:w-1/2 h-full bg-white  p-9'>
  <Logo />

  <h1 className='text-3xl font-bold text-center mt-4'>Create An Account </h1>
  <p className='text-sm text-gray-500 mt-1'>Provide your details below to continue</p>

  <form className='w-full max-w-sm mt-6 space-y-4' onSubmit={handleSubmit}>
          {/* Step indicator */}
          <div className='w-full max-w-sm text-emerald-600 font-bold mt-4 text-sm'>Hospital Admin Info <span className='float-right'>2/2</span></div>
    <TextInput 
      label="Enter pharmacist full name"
      placeholder='Pharmacist Full Name'
      name='pharmacistName'
      onChange={handleChange}
      value={pharmacyData.pharmacistName}
    />
    <TextInput
        placeholder='License Number'
        label="Enter  pharmacy license number"
        name='pharmacyLicenseNumber'
        onChange={handleChange}
        value={pharmacyData.pharmacyLicenseNumber}
    />
     <TextInput 
        placeholder='Enter email'
        label="Email"
        name='email'
        onChange={handleChange}
        value={pharmacyData.email}
          

    />
     <TextInput
        label='Phone Number'
        placeholder='Enter phone number'
        name='phoneNumber'
        onChange={handleChange}
        value={pharmacyData.phoneNumber}
      
          
    />
  
      <PasswordInput
        placeholder='Create password'
        label="Create password"
        name='password'
        onChange={handleChange}
        value={pharmacyData.password}
            
      />
          <PasswordInput
            placeholder='Confirm password'
            label="Confirm your password"
            name='confirmPassword'
            onChange={handleChange}
            value={confirmPassword}
            

            
          />

        
          <div className='flex items-center gap-5 w-full'>
            <Button variant="outline" className='w-1/2'>
              <Link href="/login">Back</Link>
            </Button>
            <Button variant="default" className='w-1/2  ' size={"lg"} type='submit'>
            {
              loading ? <Loader/>: "Continue"
            }
            </Button>
         </div>
    
    
    
    
    
    

   
  </form>

  

  
</div>

        <div className='index-0 fixed right-0'>
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
