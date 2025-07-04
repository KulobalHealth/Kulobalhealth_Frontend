import { cookies } from "next/headers";
import { AppSidebar } from "@/components/admin/admin-sidebar";
import { SiteHeader } from "@/components/site-header";
import { SidebarProvider } from "@/components/ui/sidebar";

export default async function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies();
  const defaultOpen = cookieStore.get("sidebar_state")?.value === "true";

  return (
    <>
      <SiteHeader />
      <SidebarProvider>
        <AppSidebar />
        <main className="flex min-h-screen flex-1 flex-col">{children}</main>
      </SidebarProvider>
    </>
  );
}
