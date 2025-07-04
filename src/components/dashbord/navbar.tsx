"use client";

import { Bell, CircleUserRound, Moon, ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
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

export function DashboardNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  //eslint-disable-next-line
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
        "fixed top-0 right-0 left-0 z-50 max-w-full rounded-sm bg-white shadow"
      }
    >
      <div className="mx-auto flex w-[85%] items-center justify-between px-6 py-4">
        <div className="flex items-center ">
          <Link className="font-bold text-2xl text-emerald-500" href="/">
            <Image
              alt="KulobalHealth"
              className="transition-transform duration-300 hover:brightness-110"
              height={180}
              src="/logo.webp"
              width={180}
            />
          </Link>
        </div>

        <div className="hidden items-center space-x-8 md:flex">
          {navigationLinks.primary.map((item) => (
            <Link
              className="transition-colors duration-300 hover:text-emerald-500"
              href={item.href}
              key={item.name}
            >
              {item.name}
            </Link>
          ))}
          <div className="group relative">
            <button className="transition-colors duration-300 hover:text-emerald-500">
              Company
            </button>
            <div className="absolute hidden w-48 pt-2 group-hover:block">
              <div className="rounded-md bg-white py-2 shadow-lg">
                {navigationLinks.company.map((item) => (
                  <Link
                    className="block px-4 py-2 transition-colors duration-300 hover:bg-emerald-50"
                    href={item.href}
                    key={item.name}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center space-x-2">
              {" "}
              <CircleUserRound /> Account
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>
                <Link href="/account">Profile</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/orders">Orders</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/payments">Payments</Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Link href="/subscriptions">Subscriptions</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <div className="relative">
            <Link href="/marketplace/cart">
              <ShoppingCart className="cursor-pointer transition-colors hover:text-emerald-500" />
              {cart.length > 0 && (
                <span className="-top-2 -right-2 absolute flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500 text-white text-xs">
                  {cart.length}
                </span>
              )}
            </Link>
          </div>
          <Bell />
          <Moon />
        </div>

        <button className="p-2 md:hidden" onClick={() => setIsOpen(!isOpen)}>
          <div className="mb-1 h-0.5 w-6 bg-gray-600" />
          <div className="mb-1 h-0.5 w-6 bg-gray-600" />
          <div className="h-0.5 w-6 bg-gray-600" />
        </button>
      </div>
    </nav>
  );
}
