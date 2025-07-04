<<<<<<< HEAD
"use client"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import {
  CircleUserRound,
  Home,
  FileText,
  Tag,
  ShoppingBasket,
  ScrollText,
  BriefcaseMedicalIcon,
  LucidePersonStanding,
} from "lucide-react"
import Link from "next/link"

import { usePathname } from "next/navigation"
import clsx from "clsx"

const items = [
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: Home,
  },
  {
    title: "Patients",
    url: "/patients",
    icon: LucidePersonStanding,
  },
  {
    title: "Prescriptions",
    url: "/prescriptions",
    icon: ScrollText,
  },
  {
    title: "Rapid Test",
    url: "/rapid-tests",
    icon: BriefcaseMedicalIcon,
  },
  {
    title: "DDI",
    url: "/ddi",
    icon: FileText,
  },
  {
    title: "My Account",
    url: "/account",
    icon: CircleUserRound,
  },
  {
    title: "Orders",
    url: "/orders",
    icon: ShoppingBasket,
  },
  {
    title: "Subscriptions",
    url: "/subscriptions",
    icon: Tag,
  },
]

export function AppSidebar() {
  const pathname = usePathname()

  return (
    <Sidebar variant="inset" collapsible="icon" className="mt-20 h-[500px] relative border rounded-lg bg-background">
      <SidebarContent className="bg-background p-3">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-2">
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    className={clsx(
                      "flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-muted-foreground",
                      "hover:bg-gray-100 hover:text-gray-900 transition-all duration-200 ease-in-out",
                      "min-h-[44px] w-full group relative",
                      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2",
                      pathname === item.url &&
                        "bg-emerald-600 text-white hover:bg-emerald-700 hover:text-white shadow-sm",
                    )}
                  >
                    <Link href={item.url} className="flex items-center gap-3 w-full">
                      <item.icon
                        className={clsx(
                          "w-5 h-5 flex-shrink-0 transition-colors duration-200",
                          pathname === item.url ? "text-white" : "text-muted-foreground group-hover:text-gray-700",
                        )}
                      />
                      <span className="font-medium text-sm leading-5 tracking-wide truncate">{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
=======
'use client';

import clsx from 'clsx';
import {
  BriefcaseMedicalIcon,
  CircleUserRound,
  FileText,
  Home,
  LucidePersonStanding,
  ScrollText,
  ShoppingBasket,
  Tag,
} from 'lucide-react';
import Link from 'next/link';

import { usePathname } from 'next/navigation';
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar';

const items = [
  {
    title: 'Dashboard',
    url: '/dashboard',
    icon: Home,
  },
  {
    title: 'Patients',
    url: '/patients',
    icon: LucidePersonStanding,
  },

  {
    title: 'Prescriptions',
    url: '/prescriptions',
    icon: ScrollText,
  },
  {
    title: 'Rapid Test',
    url: '/rapid-tests',
    icon: BriefcaseMedicalIcon,
  },
  {
    title: 'DDI',
    url: '/ddi',
    icon: FileText,
  },
  {
    title: 'My Account',
    url: '/account',
    icon: CircleUserRound,
  },
  {
    title: 'Orders',
    url: '/orders',
    icon: ShoppingBasket,
  },
  {
    title: 'Payments',
    url: '/payments',
    icon: ScrollText,
  },
  {
    title: 'Subscriptions',
    url: '/subscriptions',
    icon: Tag,
  },
];

export function AppSidebar() {
  const pathname = usePathname();

  return (
    <Sidebar
      className="relative mt-20 h-[500px] rounded-lg border bg-background"
      collapsible="icon"
      variant="inset"
    >
      <SidebarContent className="bg-background">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    className={clsx(
                      'flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground hover:bg-emerald-200 hover:text-white',
                      'transition-colors duration-200',
                      pathname === item.url && 'bg-emerald-600 text-white '
                    )}
                  >
                    <Link
                      className="flex items-center justify-between"
                      href={item.url}
                    >
                      <span className="flex items-center gap-10">
                        <div className="flex items-center">
                          <item.icon
                            className={clsx(
                              'mr-2 h-4 w-4',
                              pathname === item.url && 'text-current'
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
>>>>>>> 2e204526af3930f4a2c1eb8432192121dad78a50
