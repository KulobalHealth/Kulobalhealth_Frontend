'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import type React from 'react';
import { useState } from 'react';
import groupImg from '@/assets/images/groupImg.png';
import Loader from '@/components/loader';
import { Button } from '@/components/ui/button';
import Logo from '@/components/ui/logo';
import PasswordInput from '@/components/ui/password-input';
import TextInput from '@/components/ui/text-input';
import { useUserStore } from '@/store/user-store';

export default function AdminInfo() {
  const router = useRouter();

  const updateUserData = useUserStore((state) => state.updateUserData);
  const createUser = useUserStore((state) => state.createUser);
  const loading = useUserStore((state) => state.isloading);

  const [confirmPassword, setConfirmPassword] = useState('');
  const [adminData, setAdminData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    // pharmacyLicenseNumber: "",
    password: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === 'confirmPassword') {
      setConfirmPassword(value);
    } else {
      setAdminData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handlePassword = () => {
    if (adminData.password !== confirmPassword) {
      console.log('Passwords do not match');
      return false;
    }
    return true;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!handlePassword()) return;

    console.log('adminData', adminData);

    updateUserData({
      firstName: adminData.firstName,
      lastName: adminData.firstName.split(' ')[1] || '',
      email: adminData.email,
      phoneNumber: adminData.phoneNumber,
      password: adminData.password,
    });
    router.push(`/signup/verify-otp?email=${adminData.email}`);
    createUser();
  };

  return (
    <div className="flex flex-row justify-between overflow-hidden">
      <div className="flex h-full w-full flex-col items-center justify-center bg-white p-9 lg:w-1/2">
        <Logo />
        <h1 className="mt-4 text-center font-bold text-3xl">
          Create An Account{' '}
        </h1>
        <p className="mt-1 text-gray-500 text-sm">
          Provide your details below to continue
        </p>

        <form
          className="mt-6 w-full max-w-sm space-y-4"
          onSubmit={handleSubmit}
        >
          <div className="mt-4 w-full max-w-sm font-bold text-emerald-600 text-sm">
            Pharmacy Info <span className="float-right">2/2</span>
          </div>

          <TextInput
            label="Enter your full name"
            name="firstName"
            onChange={handleChange}
            placeholder="Admin Full Name"
            value={adminData.firstName}
          />
          {/* <TextInput
            label="License Number"
            placeholder='Enter your license number'
            name="licenseNumber"
            onChange={handleChange}
            value={adminData.licenseNumber}
          /> */}
          <TextInput
            label="Email"
            name="email"
            onChange={handleChange}
            placeholder="Enter email"
            value={adminData.email}
          />
          <TextInput
            label="Phone Number"
            name="phoneNumber"
            onChange={handleChange}
            placeholder="eg. 05534567890"
            value={adminData.phoneNumber}
          />
          {/* <TextInput
            label="Pharmacy License Number"
            placeholder='Enter pharmacy license number'
            name="pharmacyLicenseNumber"
            onChange={handleChange}
            value={adminData.l}
          /> */}
          <PasswordInput
            label="Create password"
            name="password"
            onChange={handleChange}
            placeholder="Create password"
            value={adminData.password}
          />
          <PasswordInput
            label="Confirm your password"
            name="confirmPassword"
            onChange={handleChange}
            placeholder="Confirm password"
            value={confirmPassword}
          />

          <div className="flex w-full items-center gap-5">
            <Button className="w-1/2" variant="outline">
              <Link href="/login">Back</Link>
            </Button>
            <Button className="w-1/2" size="lg" type="submit" variant="default">
              {loading ? <Loader /> : 'Confirm'}
            </Button>
          </div>
        </form>
      </div>

      <div className="index-0 fixed right-0 h-full w-1/2">
        <Image
          alt="login"
          className="hidden h-full w-full object-cover lg:block"
          src={groupImg}
          width={800}
        />
      </div>
    </div>
  );
}
