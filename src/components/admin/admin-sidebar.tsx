'use client';

import {
  Box,
  FileBarChart2,
  LayoutDashboard,
  Link2,
  Package,
  ShoppingBag,
  Truck,
  UserCog,
  Users,
} from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar';

const items = [
  {
    title: 'Dashboard',
    url: '/admin/dashboard',
    icon: LayoutDashboard,
  },
  {
    title: 'Patients Care',
    url: '/admin/patients-care',
    icon: Users,
  },
  {
    title: 'Pharmacies',
    url: '/admin/pharmacies',
    icon: ShoppingBag,
  },
  {
    title: 'DDI Integrations',
    url: '/admin/ddi-integrations',
    icon: Link2,
  },
  {
    title: 'Orders',
    url: '/admin/orders',
    icon: Package,
  },
  {
    title: 'Suppliers',
    url: '/admin/suppliers',
    icon: Truck,
  },
  {
    title: 'Products',
    url: '/admin/products',
    icon: Box,
  },
  {
    title: 'Analytics & Reports',
    url: '/admin/analytics-reports',
    icon: FileBarChart2,
  },
  {
    title: 'Account & Settings',
    url: '/admin/account-settings',
    icon: UserCog,
  },
];

export function AppSidebar() {
  const pathname = usePathname();

  return (
    <Sidebar className="border-r" variant="sidebar">
      <SidebarContent className="pt-20 ">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link
                      className={
                        pathname === item.url
                          ? 'bg-primary-600 text-white'
                          : 'text-black dark:text-white'
                      }
                      href={item.url}
                      prefetch
                    >
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  );
}
