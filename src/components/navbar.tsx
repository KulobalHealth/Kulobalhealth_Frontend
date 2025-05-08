"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { User } from "./user";
import { Bell, Moon, ShoppingCart } from "lucide-react";
import { useMarketplaceStore } from "@/lib/store";

const navigationLinks = {
  primary: [
    { name: "Home", href: "/" },
    { name: "Marketplace", href: "/marketplace" },
    { name: "Detection", href: "/detection" },
  ],
  company: [
    { name: "About", href: "/about" },
    { name: "Team", href: "/team" },
    { name: "Contact", href: "/contact" },
  ],
};

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const cart = useMarketplaceStore((state) => state.cart);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={
        isScrolled
          ? "fixed top-0 left-0 right-0 z-50 bg-white shadow-lg transition duration-300"
          : "transition duration-300"
      }
    >
      <div className="flex items-center justify-between px-6 py-4 mx-auto max-w-7xl">
        <div className="flex items-center">
          <Link href="/" className="text-2xl font-bold text-emerald-500">
            <Image
              src="/logo.webp"
              alt="KulobalHealth"
              width={180}
              height={180}
              className="transition-transform duration-300 hover:brightness-110"
            />
          </Link>
        </div>

        <div className="items-center hidden space-x-8 md:flex">
          {navigationLinks.primary.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="transition-colors duration-300 hover:text-emerald-500"
            >
              {item.name}
            </Link>
          ))}
          <div className="relative group">
            <button className="transition-colors duration-300 hover:text-emerald-500">
              Company
            </button>
            <div className="absolute hidden group-hover:block pt-2 w-48">
              <div className="bg-white shadow-lg rounded-md py-2">
                {navigationLinks.company.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block px-4 py-2 hover:bg-emerald-50 transition-colors duration-300"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <User
            user={{
              name: "Test User",
              avatar:
                "https://images.unsplash.com/photo-1675095680984-0b5a8b1e6c4f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fG1lbnxlbnwwfHx8fDE2ODQ3MTg3NjE&ixlib=rb-4.0.3&q=80&w=400",
            }}
          />
          <div className="relative">
            <Link href="/marketplace/cart">
              <ShoppingCart className="cursor-pointer hover:text-emerald-500 transition-colors" />
              {cart.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-emerald-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cart.length}
                </span>
              )}
            </Link>
          </div>
          <Bell />
          <Moon />
        </div>

        <button className="p-2 md:hidden" onClick={() => setIsOpen(!isOpen)}>
          <div className="w-6 h-0.5 bg-gray-600 mb-1"></div>
          <div className="w-6 h-0.5 bg-gray-600 mb-1"></div>
          <div className="w-6 h-0.5 bg-gray-600"></div>
        </button>
      </div>

      {/* {isOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div
            className="fixed inset-0 bg-black/50"
            onClick={() => setIsOpen(false)}
          ></div>
          <div className="fixed top-0 bottom-0 left-0 w-64 bg-white shadow-lg">
            <div className="p-4 flex justify-between items-center border-b">
              <Link href="/" className="text-2xl font-bold text-emerald-500">
                <Image
                  src="/logo.webp"
                  alt="KulobalHealth"
                  width={180}
                  height={180}
                  className="w-12 h-auto"
                />
              </Link>
              <button onClick={() => setIsOpen(false)} className="p-2">
                ✕
              </button>
            </div>
            <div className="px-4 py-6 space-y-4">
              {navigationLinks.primary.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block transition-colors duration-300 hover:text-emerald-500"
                >
                  {item.name}
                </Link>
              ))}
              <div className="py-2 border-t">
                {navigationLinks.company.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block py-2 transition-colors duration-300 hover:text-emerald-500"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <Link
                href="/login"
                className="block px-4 py-2 bg-emerald-500 text-white rounded transition duration-300 hover:bg-emerald-600"
              >
                Login
              </Link>
            </div>
          </div>
        </div>
      )} */}
    </nav>
  );
}
