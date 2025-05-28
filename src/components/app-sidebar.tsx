"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import {
  CircleUserRound,
  Home,
  FileText,
  Tag,
  ShoppingBasket,
  ScrollText,
  BriefcaseMedicalIcon,
  LucidePersonStanding,
} from "lucide-react";
import Link from "next/link";

import { usePathname } from "next/navigation";
import clsx from "clsx";

const items = [
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: Home,
  },
  {
    title: "Patients",
    url: "/patients",
    icon:LucidePersonStanding
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
    title: "Payments",
    url: "/payments",
    icon:ScrollText,
  },
  {
    title: "Subscriptions",
    url: "/subscriptions",
    icon: Tag,
  },
];

export function AppSidebar() {
  const pathname = usePathname();

  return (
    <Sidebar variant="inset" collapsible="icon" className="mt-20 h-[500px] bg-white pl-10">
      <SidebarContent className="bg-white border border-gray-200 rounded-lg">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    className={clsx(
                      "flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground hover:bg-emerald-200 hover:text-white",
                      "transition-colors duration-200",
                      pathname === item.url && "bg-emerald-600 text-white "
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