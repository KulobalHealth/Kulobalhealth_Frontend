import { AppSidebar } from "@/components/app-sidebar";
import { SiteHeader } from "@/components/site-header";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="" style={{ fontFamily: inter.style.fontFamily }}>
      <SiteHeader />
      <SidebarProvider>
        <AppSidebar />
        <main className="flex flex-col flex-1 min-h-screen bg-background p-4 md:p-6">
          <SidebarTrigger />
          {children}
        </main>
      </SidebarProvider>
    </div>
  );
}
