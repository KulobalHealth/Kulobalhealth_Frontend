<<<<<<< HEAD
"use client";

import { Button } from "@/components/ui/button";
import { motion } from "motion/react";
import Link from "next/link";
import { Icons } from "../ui/icons";

export function Hero() {
  return (
    <section className="min-h-screen rounded-md flex flex-col items-center justify-center relative overflow-hidden">
      {" "}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <Icons.Banner className="w-full h-full opacity-20 object-cover" />
      </div>
      <div className="w-full container mx-auto max-w-2xl relative text-center flex flex-col items-center justify-center">
        {" "}
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-4 text-3xl font-bold dark:text-white leading-tight text-gray-800 font-urbanist md:mb-6 md:text-5xl"
        >
          Advancing Ghana&apos;s{" "}
          <span className="text-[#03C486]">Pharmacy Operations</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6 text-base md:text-lg md:mb-8"
        >
          Connecting Pharmacies with Suppliers Seamlessly. Order Rapid Test
          Kits, Medical Devices, and Supplies with Ease and Get Them Delivered
          Within 48 Hours.
        </motion.p>
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <Link href="/pharmacies">
            <Button className="px-6 py-2 bg-[#03C486] rounded-full md:px-8 md:py-3 hover:cursor-pointer text-white hover:bg-[#02b377]">
              Shop as a Pharmacy
            </Button>
          </Link>
          <Link href="/suppliers">
            <Button
              variant="outline"
              className="px-6 py-2 border-[#03C486] text-[#03C486] rounded-full md:px-8 md:py-3 hover:bg-[#03C486] hover:text-white"
            >
              Partner as a Supplier
            </Button>
          </Link>
        </div>
      </div>{" "}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="absolute bottom-32 right-8 flex flex-col items-center"
      >
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
          Scroll to explore
        </p>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 border-2 border-gray-400 dark:border-gray-300 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-1 h-3 bg-gray-400 dark:bg-gray-300 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
=======
'use client';

import { motion } from 'motion/react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Icons } from '../ui/icons';

export function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden rounded-md">
      {' '}
      <div className="absolute inset-0 h-full w-full overflow-hidden">
        <Icons.Banner className="h-full w-full object-cover opacity-20" />
      </div>
      <div className="container relative mx-auto flex w-full max-w-2xl flex-col items-center justify-center text-center">
        {' '}
        <motion.h1
          animate={{ opacity: 1, y: 0 }}
          className="mb-4 font-bold font-urbanist text-3xl text-gray-800 leading-tight md:mb-6 md:text-5xl dark:text-white"
          initial={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.5 }}
        >
          Advancing Ghana&apos;s{' '}
          <span className="text-[#03C486]">Pharmacy Operations</span>
        </motion.h1>
        <motion.p
          animate={{ opacity: 1, y: 0 }}
          className="mb-6 text-base md:mb-8 md:text-lg"
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          Connecting Pharmacies with Suppliers Seamlessly. Order Rapid Test
          Kits, Medical Devices, and Supplies with Ease and Get Them Delivered
          Within 48 Hours.
        </motion.p>
        <div className="mb-8 flex flex-col gap-4 sm:flex-row">
          <Link href="/pharmacies">
            <Button className="rounded-full bg-[#03C486] px-6 py-2 text-white hover:cursor-pointer hover:bg-[#02b377] md:px-8 md:py-3">
              Shop as a Pharmacy
            </Button>
          </Link>
          <Link href="/suppliers">
            <Button
              className="rounded-full border-[#03C486] px-6 py-2 text-[#03C486] hover:bg-[#03C486] hover:text-white md:px-8 md:py-3"
              variant="outline"
            >
              Partner as a Supplier
            </Button>
          </Link>
        </div>
      </div>{' '}
      <motion.div
        animate={{ opacity: 1, y: 0 }}
        className="absolute right-8 bottom-32 flex flex-col items-center"
        initial={{ opacity: 0, y: 10 }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        <p className="mb-2 text-gray-600 text-sm dark:text-gray-400">
          Scroll to explore
        </p>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          className="flex h-10 w-6 justify-center rounded-full border-2 border-gray-400 dark:border-gray-300"
          transition={{
            duration: 1.5,
            repeat: Number.POSITIVE_INFINITY,
            ease: 'easeInOut',
          }}
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            className="mt-2 h-3 w-1 rounded-full bg-gray-400 dark:bg-gray-300"
            transition={{
              duration: 1.5,
              repeat: Number.POSITIVE_INFINITY,
              ease: 'easeInOut',
            }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
>>>>>>> 2e204526af3930f4a2c1eb8432192121dad78a50
