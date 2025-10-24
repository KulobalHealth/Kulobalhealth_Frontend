"use client";

import { Bell } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ModeToggle } from "@/components/ui/mode-toggle";
import { User } from "@/components/user";
import { useAdminAuth } from "@/store/admin-auth";

const defaultUser = {
  name: "",
  email: "",
  avatar: "/logo.webp",
  firstName: "",
  lastName: "",
  staffId: "",
  role: "",
};

export function SiteHeader() {
  const { user } = useAdminAuth();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-14 items-center justify-between px-6">
        <div className="flex items-center">
          <Link className="flex items-center space-x-2" href="/">
            <Image
              alt="KulobalHealth"
              className="transition-transform duration-300 hover:brightness-110"
              height={32}
              src="/logo.webp"
              width={140}
            />
          </Link>
        </div>

        <div className="flex items-center space-x-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button className="relative" size="icon" variant="ghost">
                <Bell className="h-5 w-5" />

                <span className="-top-1 -right-1 absolute flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-white text-xs">
                  3
                </span>
                <span className="sr-only">View notifications</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-80">
              <DropdownMenuLabel>Notifications</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <div className="flex flex-col space-y-1">
                  <p className="font-medium text-sm">New order received</p>
                  <p className="text-muted-foreground text-xs">
                    Order #ORD-2024-001 from Humble Pharmacy
                  </p>
                </div>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <div className="flex flex-col space-y-1">
                  <p className="font-medium text-sm">Low stock alert</p>
                  <p className="text-muted-foreground text-xs">
                    Malaria Test Kit stock is running low
                  </p>
                </div>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <div className="flex flex-col space-y-1">
                  <p className="font-medium text-sm">Payment received</p>
                  <p className="text-muted-foreground text-xs">
                    Payment confirmed for order #ORD-2024-002
                  </p>
                </div>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="text-center">
                <span className="text-muted-foreground text-sm">
                  View all notifications
                </span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <ModeToggle />

          <User user={user ?? defaultUser} />
        </div>
      </div>
    </header>
  );
}
