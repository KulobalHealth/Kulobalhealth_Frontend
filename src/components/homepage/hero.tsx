"use client";

import { Button } from "@/components/ui/button";
import { motion } from "motion/react";
import Link from "next/link";
import { Icons } from "../ui/icons";

export function Hero() {
  return (
    <section className="py-8 min-h-[500px] md:h-[700px] rounded-md flex flex-col items-center justify-center relative overflow-hidden">
      {" "}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <Icons.Banner className="w-full h-full opacity-20 object-cover" />
      </div>
      <div className="w-full container mx-auto max-w-2xl relative text-center flex flex-col items-center justify-center">
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
          Your One-Stop Marketplace for Rapid Test Kits, Medical Devices, and
          Essential Supplies
        </motion.p>
        <Link href="/marketplace">
          <Button className="px-6 py-2 bg-[#03C486] rounded-full md:px-8 md:py-5 hover:cursor-pointer text-white hover:bg-primary hover:text-underline">
            Explore the Marketplace.
          </Button>
        </Link>
      </div>
    </section>
  );
}
