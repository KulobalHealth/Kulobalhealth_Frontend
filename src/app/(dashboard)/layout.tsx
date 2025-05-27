import { AppSidebar } from "@/components/app-sidebar";
import { Inter } from "next/font/google";
import Footer from "@/components/dashbord/footer";



const inter = Inter({ subsets: ["latin"] });
import NavbarDashboard from "@/components/dashbord/navbar";

import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="" style={{ fontFamily: inter.style.fontFamily }}>
      <NavbarDashboard/>

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
