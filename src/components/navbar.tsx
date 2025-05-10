"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { User } from "./user";
import { Bell, ShoppingCart } from "lucide-react";
import { useMarketplaceStore } from "@/lib/store";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { ModeToggle } from "./ui/mode-toggle";

const navigationLinks = [
  { name: "Home", href: "/" },
  { name: "Marketplace", href: "/marketplace" },
  { name: "Detection", href: "/detection" },
  { name: "Company", href: "/company" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const cart = useMarketplaceStore((state) => state.cart);
  const pathname = usePathname();
  const isActive = (href: string) => pathname === href;

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
          ? "fixed top-0 left-0 right-0 z-50 bg-white dark:bg-background shadow-lg transition duration-300"
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
          {navigationLinks.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={clsx(
                "transition-colors duration-300 hover:text-primary-700",
                {
                  "text-primary-600": isActive(item.href),
                  "text-neutral-800": !isActive(item.href),
                }
              )}
            >
              {item.name}
            </Link>
          ))}
          <div className="relative group">
            <div className="absolute hidden group-hover:block pt-2 w-48">
              <div className="bg-white shadow-lg rounded-md py-2">
                {navigationLinks.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={clsx(
                      "block px-4 py-2 hover:bg-emerald-50 transition-colors duration-300",
                      {
                        "text-primary-600": isActive(item.href),
                        "text-neutral-800": !isActive(item.href),
                      }
                    )}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="flex text-neutral-800 items-center space-x-4">
          <User
            user={{
              name: "Test User",
              avatar:
                "https://images.unsplash.com/photo-1675095680984-0b5a8b1e6c4f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fG1lbnxlbnwwfHx8fDE2ODQ3MTg3NjE&ixlib=rb-4.0.3&q=80&w=400",
            }}
          />
          <div className="relative">
            <Link href="/marketplace/cart">
              <ShoppingCart className="cursor-pointer text-neur hover:text-primary-700 transition-colors" />
              {cart.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-emerald-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cart.length}
                </span>
              )}
            </Link>
          </div>
          <Bell />
          <ModeToggle />
        </div>

        <button className="p-2 md:hidden" onClick={() => setIsOpen(!isOpen)}>
          <div className="w-6 h-0.5 bg-gray-600 mb-1"></div>
          <div className="w-6 h-0.5 bg-gray-600 mb-1"></div>
          <div className="w-6 h-0.5 bg-gray-600"></div>
        </button>
      </div>
    </nav>
  );
}
