"use client";
import {
  BadgeCheck,
  ChevronDown,
  House,
  LogOut,
  ShoppingBasket,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MenuButton } from "@/components/ui/user-button";

export function User({
  user,
}: {
  user: {
    name: string;
    email?: string;
    avatar: string;
  };
}) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <MenuButton
          className="w-[151px] data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
          size="lg"
        >
          <Avatar className="h-8 w-8 rounded-lg">
            <AvatarImage alt={user.name} src={user.avatar} />
            <AvatarFallback className="rounded-lg">TU</AvatarFallback>
          </Avatar>{" "}
          <div className="grid flex-1 text-left text-neutral-800 text-sm leading-tight dark:text-white">
            <span className="truncate">{user.name}</span>
          </div>
          <ChevronDown className="ml-auto size-4" />
        </MenuButton>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        // side={isMobile ? "bottom" : "right"}
        className="w-(--radix-dropdown-menu-trigger-width) min-w-56 rounded-lg"
        sideOffset={4}
      >
        {" "}
        <DropdownMenuLabel className="p-0 font-normal text-neutral-800 dark:text-neutral-200">
          <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
            <Avatar className="h-8 w-8 rounded-lg">
              <AvatarImage alt={user.name} src={user.avatar} />
              <AvatarFallback className="rounded-lg">DR</AvatarFallback>
            </Avatar>
            <div className="grid flex-1 text-left text-sm leading-tight">
              <span className="truncate">{user.name}</span>
              <span className="truncate text-neutral-600 text-xs dark:text-neutral-400">
                {user.email}
              </span>
            </div>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <BadgeCheck />
            My Account
          </DropdownMenuItem>
          <DropdownMenuItem>
            <House />
            Dashboard
          </DropdownMenuItem>
          <DropdownMenuItem>
            <ShoppingBasket />
            Orders
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="text-danger-500">
          <LogOut />
          Log out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
