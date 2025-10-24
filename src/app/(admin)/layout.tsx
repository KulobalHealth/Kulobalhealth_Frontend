"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";
import { AppSidebar } from "@/components/admin/admin-sidebar";
import { SiteHeader } from "@/components/site-header";
import { SidebarProvider } from "@/components/ui/sidebar";
import { useAdminAuth } from "@/store/admin-auth";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const router = useRouter();
  const pathname = usePathname();
  const { isAuthenticated } = useAdminAuth();

  const isAuthPage =
    pathname?.startsWith("/admin/login") ||
    pathname?.startsWith("/admin/signup");

  useEffect(() => {
    if (!(isAuthenticated || isAuthPage)) {
      router.replace("/admin/login");
    }
  }, [isAuthenticated, isAuthPage, router]);

  if (!(isAuthenticated || isAuthPage)) {
    return null;
  }

  console.log({ isAuthenticated });

  return (
    <>
      {isAuthenticated && !isAuthPage ? (
        <>
          <SiteHeader />
          <SidebarProvider>
            <AppSidebar />
            <main className="flex min-h-screen flex-1 flex-col">
              {children}
            </main>
          </SidebarProvider>
        </>
      ) : (
        children
      )}
    </>
  );
}
