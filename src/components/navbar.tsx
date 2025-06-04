"use client";

import Link from "next/link";
import Image from "next/image";
import { User } from "./user";
import { Bell, ShoppingCart } from "lucide-react";
import { useMarketplaceStore } from "@/lib/store";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { ModeToggle } from "./ui/mode-toggle";
import { Button } from "./ui/button";

const navigationLinks = [
  { name: "For Pharmacies", href: "/pharmacies" },
  { name: "For Suppliers", href: "/suppliers" },
  { name: "Detection", href: "/detection" },
  { name: "Marketplace", href: "/marketplace" },
  { name: "About Us", href: "/about-us" },
  { name: "Contact Us", href: "/contact" },
];

export function Navbar() {
  const cart = useMarketplaceStore((state) => state.cart);
  const { user, isAuthenticated } = useMarketplaceStore();
  const pathname = usePathname();
  const isActive = (href: string) => pathname === href;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-background transition duration-300">
      <div className="flex items-center justify-between px-6 py-4 mx-auto max-w-7xl">
        <div className="flex items-center">
          <Link
            href="/"
            prefetch
            className="text-2xl font-bold text-emerald-500"
          >
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
              prefetch
              key={item.name}
              href={item.href}
              className={clsx(
                "transition-colors duration-300 hover:text-primary-700 dark:hover:text-primary-400",
                {
                  "text-primary-600 font-semibold dark:text-primary-400":
                    isActive(item.href),
                  "text-neutral-800 dark:text-white": !isActive(item.href),
                }
              )}
            >
              {item.name}
            </Link>
          ))}
        </div>

        <div className="flex text-neutral-800 items-center space-x-4">
          {isAuthenticated && user ? (
            <>
              <User
                user={{
                  name: user.name,
                  email: user.email,
                  avatar: user.avatar,
                }}
              />
              <div className="relative">
                <Link prefetch href="/marketplace/cart">
                  <ShoppingCart className="cursor-pointer text-neur hover:text-primary-700 transition-colors" />
                  {cart.length > 0 && (
                    <span className="absolute -top-2 -right-2 bg-emerald-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                      {cart.length}
                    </span>
                  )}
                </Link>
              </div>
              <Bell className="cursor-pointer hover:text-primary-700 transition-colors" />
            </>
          ) : (
            <>
              <Link prefetch href="/login">
                <Button variant="ghost" className="hover:text-primary-700">
                  Login
                </Button>
              </Link>
              <Link prefetch href="/signup">
                <Button className="bg-emerald-500 hover:bg-emerald-600 text-white">
                  Create Account
                </Button>
              </Link>
            </>
          )}
          <ModeToggle />
        </div>
      </div>
    </nav>
  );
}
