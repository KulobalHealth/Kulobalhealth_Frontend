"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  // SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import {
  Users,
  Home,
  FileText,
  Settings,
  ShoppingBasket,
  Bot,
} from "lucide-react";
import Link from "next/link";

import { usePathname } from "next/navigation";
import clsx from "clsx";

const items = [
  {
    title: "Dashboard",
    url: "/",
    icon: Home,
  },
  {
    title: "Patient Care",
    url: "/patients",
    icon: Users,
  },
  {
    title: "Test Manager",
    url: "/rapid-tests",
    icon: FileText,
  },
  {
    title: "Orders",
    url: "/orders",
    icon: ShoppingBasket,
  },
  {
    title: "Pharma Ai",
    url: "/pharma-ai",
    icon: Bot,
  },
  {
    title: "Account",
    url: "/account",
    icon: Settings,
  },
];

export function AppSidebar() {
  const pathname = usePathname();

  return (
    <Sidebar variant="inset" collapsible="icon">
      <SidebarContent className="pt-20">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    className={clsx(
                      "flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground hover:text-foreground",
                      pathname === item.url &&
                        "bg-sidebar-accent text-blue-800 dark:text-white text-sm"
                    )}
                  >
                    <Link
                      href={item.url}
                      className="flex items-center justify-between"
                    >
                      <span className="flex items-center gap-3">
                        <div className="flex items-center">
                          <item.icon
                            className={clsx(
                              "w-4 h-4 mr-2",
                              pathname === item.url && "text-current"
                            )}
                          />
                          {item.title}
                        </div>
                      </span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
