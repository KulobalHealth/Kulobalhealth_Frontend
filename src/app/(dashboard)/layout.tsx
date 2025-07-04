<<<<<<< HEAD
import type React from "react"
import { AppSidebar } from "@/components/app-sidebar"
import { Inter } from "next/font/google"
import Footer from "@/components/dashbord/footer"
import { SidebarProvider, SidebarInset} from "@/components/ui/sidebar"
import { DashboardNavbar } from "@/components/dashbord/navbar"
import { FloatingBottomNavbar } from "@/components/floating-navbar"

const inter = Inter({ subsets: ["latin"] })

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className=" w-full min-h-screen bg-white " style={{ fontFamily: inter.style.fontFamily }}>
      

      <SidebarProvider>
        <SidebarInset>
          <main className="flex min-h-screen b items-center justify-center">
           <DashboardNavbar />
            <div className=" h-full  flex p-4 md:py-24   w-[85%]">
               <AppSidebar />
         
              {children}
            </div>
            <FloatingBottomNavbar />
          </main>
        </SidebarInset>
      </SidebarProvider>

      <Footer />
    </div>
  )
}
=======
import { Inter } from 'next/font/google';
import type React from 'react';
import { AppSidebar } from '@/components/app-sidebar';
import Footer from '@/components/dashbord/footer';
import { DashboardNavbar } from '@/components/dashbord/navbar';
import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar';

const inter = Inter({ subsets: ['latin'] });

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className=" min-h-screen w-full bg-white "
      style={{ fontFamily: inter.style.fontFamily }}
    >
      <DashboardNavbar />

      <SidebarProvider>
        <SidebarInset>
          <main className="b flex min-h-screen items-center justify-center">
            <div className=" flex h-full w-[85%] p-4 md:py-24">
              <AppSidebar />

              {children}
            </div>
          </main>
        </SidebarInset>
      </SidebarProvider>

      <Footer />
    </div>
  );
}
>>>>>>> 2e204526af3930f4a2c1eb8432192121dad78a50
