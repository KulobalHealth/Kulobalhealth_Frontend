<<<<<<< HEAD
"use client";
import {  Facebook, Instagram, Twitter } from "lucide-react";
import Link from "next/link";
export default function Footer() {
    return (
        <footer className="py-6 bg-background border-t">
           <div className="flex flex-col md:flex-row justify-between items-center w-[80%] mx-auto ">
                     <p className="text-sm text-gray-700 dark:text-white">
                       © 2025 KulobalHealth. All rights reserved.
                     </p>
                     <div className="flex space-x-4 mt-4 md:mt-0">
                       <Link
                         href="#"
                         className="text-gray-700 dark:text-white hover:text-primary-500"
                       >
                         <Facebook size={20} />
                         <span className="sr-only">Facebook</span>
                       </Link>
                       <Link
                         href="#"
                         className="text-gray-700 dark:text-white hover:text-primary-500"
                       >
                         <Instagram size={20} />
                         <span className="sr-only">Instagram</span>
                       </Link>
                       <Link
                         href="#"
                         className="text-gray-700 dark:text-white hover:text-primary-500"
                       >
                         <Twitter size={20} />
                         <span className="sr-only">Twitter</span>
                       </Link>
                     </div>
                   </div>
        </footer>
    );
  }
=======
'use client';
import { Facebook, Instagram, Twitter } from 'lucide-react';
import Link from 'next/link';
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
>>>>>>> 2e204526af3930f4a2c1eb8432192121dad78a50
