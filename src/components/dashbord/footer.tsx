"use client";
import { Facebook, Instagram, Twitter } from "lucide-react";
import Link from "next/link";
export default function Footer() {
  return (
    <footer className="border-t bg-background py-6">
      <div className="mx-auto flex w-[80%] flex-col items-center justify-between md:flex-row ">
        <p className="text-gray-700 text-sm dark:text-white">
          © 2025 KulobalHealth. All rights reserved.
        </p>
        <div className="mt-4 flex space-x-4 md:mt-0">
          <Link
            className="text-gray-700 hover:text-primary-500 dark:text-white"
            href="#"
          >
            <Facebook size={20} />
            <span className="sr-only">Facebook</span>
          </Link>
          <Link
            className="text-gray-700 hover:text-primary-500 dark:text-white"
            href="#"
          >
            <Instagram size={20} />
            <span className="sr-only">Instagram</span>
          </Link>
          <Link
            className="text-gray-700 hover:text-primary-500 dark:text-white"
            href="#"
          >
            <Twitter size={20} />
            <span className="sr-only">Twitter</span>
          </Link>
        </div>
      </div>
    </footer>
  );
}
