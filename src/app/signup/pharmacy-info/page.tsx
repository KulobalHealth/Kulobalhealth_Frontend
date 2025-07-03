'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import groupImg from '@/assets/images/groupImg.png';
import Loader from '@/components/loader';
import { Button } from '@/components/ui/button';
import Logo from '@/components/ui/logo';
import PasswordInput from '@/components/ui/password-input';
import TextInput from '@/components/ui/text-input';
import { useUserStore } from '@/store/user-store';

export default function PharmacyInfo() {
  const router = useRouter();
  const { updateUserData, isloading, createUser } = useUserStore();
  const [PharmacyData, setPharmacyData] = useState({
    firstName: '',
    lastName: '',
    // pharmacyLicenseNumber: "",
    email: '',
    phoneNumber: '',
    password: '',
  });
  const [confirmedPassword, setConfirmedPassword] = useState('');

  const PasswordChecker = (password: string, confirmedPassword: string) => {
    if (password !== confirmedPassword) {
      alert('Passwords do not match');
      return;
    }
    if (password.length < 8) {
      alert('Password must be at least 8 characters long');
      return;
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPharmacyData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    PasswordChecker(PharmacyData.password, confirmedPassword);
    console.log('Updating user data with:', PharmacyData);
    updateUserData({
      firstName: PharmacyData.firstName,
      lastName: PharmacyData.firstName.split(' ')[1] || '',
      email: PharmacyData.email,
      phoneNumber: PharmacyData.phoneNumber,
      password: PharmacyData.password,
    });
    createUser()
      .then(() => {
        console.log('User created successfully');
        router.push(`/signup/verify-otp?email=${PharmacyData.email}`);
      })
      .catch((error) => {
        console.error('Error creating user:', error);
      });
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

        <form className="mt-6 w-full max-w-sm space-y-4">
          {/* Step indicator */}
          <div className="mt-4 w-full max-w-sm font-bold text-emerald-600 text-sm">
            Hospital Admin Info <span className="float-right">2/2</span>
          </div>
          <TextInput
            label="Enter your pharmacy name"
            name="firstName"
            onChange={handleChange}
            placeholder="Pharmacy Name"
            value={PharmacyData.firstName}
          />
          {/* <TextInput
            placeholder="Pharmacy License Number"
            label="Enter  pharmacy license number"
            name="pharmacyLicenseNumber"
            value={PharmacyData.pharmacyLicenseNumber}
            onChange={handleChange}
          /> */}
          <TextInput
            label="Email"
            name="email"
            onChange={handleChange}
            placeholder="Enter email"
            value={PharmacyData.email}
          />

          <TextInput
            label="eg. 05534567890"
            name="phoneNumber"
            onChange={handleChange}
            placeholder="Phone Number"
            value={PharmacyData.phoneNumber}
          />

          <PasswordInput
            label="Create password"
            name="password"
            onChange={handleChange}
            placeholder="Create password"
            value={PharmacyData.password}
          />
          <PasswordInput
            label="Confirm your password"
            name="confirmedPassword"
            onChange={(e) => setConfirmedPassword(e.target.value)}
            placeholder="Confirm password"
            value={confirmedPassword}
          />

          <div className="flex w-full items-center gap-5">
            <Button className="w-1/2" variant="outline">
              <Link href="/login">Back</Link>
            </Button>
            <Button
              className="w-1/2 "
              onClick={handleSubmit}
              size={'lg'}
              variant="default"
            >
              <Link className="text-white" href="/signup/verify-otp">
                {isloading ? <Loader /> : 'Confirm'}
              </Link>
            </Button>
          </div>
        </form>
      </div>

      <div className="index-0 fixed right-0">
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
