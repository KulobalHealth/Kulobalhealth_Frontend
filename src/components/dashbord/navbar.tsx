"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Bell, Moon, ShoppingCart, CircleUserRound} from "lucide-react";
import { useMarketplaceStore } from "@/lib/store";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

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
    <nav className={"fixed top-0 left-0 right-0 z-50 bg-white shadow-sm  "}>
      <div className="flex items-center justify-between px-6 py-4  ">
        <div className="flex items-center ">
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
    </nav>
  );
}
