<<<<<<< HEAD
"use client";

import { Wallet } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { User } from "@/components/user";
import { ModeToggle } from "@/components/ui/mode-toggle";

export function SiteHeader() {
  return (
    <header className="flex flex-1 sticky top-0 z-50 w-full items-center border-b bg-background py-3">
      <div className="flex h-(--header-height) w-full items-center justify-between px-4">
        <div className="flex items-center gap-2"></div>

        <div className="flex items-center gap-2">
          <ModeToggle />
          <Button variant="ghost">
            <Wallet className="mr-2 h-4 w-4" />
            Amount
          </Button>
          <Separator orientation="vertical" className="mx-2 h-4" />
        </div>
      </div>
      <User
        user={{
          name: "Test User",
          email: "test@email",
          avatar:
            "https://images.unsplash.com/photo-1675095680984-0b5a8b1e6c4f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fG1lbnxlbnwwfHx8fDE2ODQ3MTg3NjE&ixlib=rb-4.0.3&q=80&w=400",
        }}
      />
    </header>
  );
}
=======
'use client';

import { Bell } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { ModeToggle } from '@/components/ui/mode-toggle';
import { User } from '@/components/user';

export function SiteHeader() {
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
          {/* Bell notifications */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button className="relative" size="icon" variant="ghost">
                <Bell className="h-5 w-5" />
                {/* Notification badge */}
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

          {/* Mode toggle */}
          <ModeToggle />

          {/* User dropdown */}
          <User
            user={{
              name: 'Admin User',
              email: 'admin@kulobalhealth.com',
              avatar:
                'https://images.unsplash.com/photo-1675095680984-0b5a8b1e6c4f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fG1lbnxlbnwwfHx8fDE2ODQ3MTg3NjE&ixlib=rb-4.0.3&q=80&w=400',
            }}
          />
        </div>
      </div>
    </header>
  );
}
>>>>>>> 2e204526af3930f4a2c1eb8432192121dad78a50
