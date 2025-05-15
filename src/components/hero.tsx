"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { motion } from "motion/react";

export function Hero() {
  return (
    <div className="container py-8 mx-auto bg-primary-foreground min-h-[500px] md:h-[700px] rounded-md">
      <div className="grid h-full gap-8 px-4 mx-auto place-items-center md:gap-12 md:px-6 max-w-7xl md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="order-2 text-center md:order-1 md:text-left"
        >
          <h1 className="mb-4 text-3xl font-bold dark:text-white leading-tight text-gray-800 font-urbanist md:mb-6 md:text-5xl">
            Improving Access to Medicines in Africa.
          </h1>
          <p className="mb-6 text-base md:text-lg md:mb-8">
            Your One-Stop Marketplace for Rapid Test Kits, Medical Devices, and
            Essential Supplies
          </p>
          <Button className="px-6 py-2 bg-primary rounded-md md:px-8 md:py-3 text-white hover:bg-primary hover:text-underline">
            Explore the Marketplace.
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="order-1 md:order-2 relative w-full h-[300px] md:h-[500px]"
        >
          <Image
            src="/images/homeImg.webp"
            alt="Healthcare Professional"
            fill
            className="object-contain rounded-lg"
            priority
          />
        </motion.div>
      </div>
    </div>
  );
}
