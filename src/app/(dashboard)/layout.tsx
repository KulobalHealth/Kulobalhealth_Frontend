import { AppSidebar } from "@/components/app-sidebar";
import { Inter } from "next/font/google";
import Footer from "@/components/dashbord/footer";



const inter = Inter({ subsets: ["latin"] });

import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { DashboardNavbar } from "@/components/dashbord/navbar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="" style={{ fontFamily: inter.style.fontFamily }}>
      <div className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
        <DashboardNavbar/>

      </div>
      <SidebarProvider>

        <AppSidebar />
        <main className="flex flex-col flex-1 min-h-screen bg-background p-4 md:p-6">
          <SidebarTrigger />
          {children}
        </main>
      </SidebarProvider>
      <Footer/>
    </div>
  );
}
