import { Inter } from "next/font/google";
import type React from "react";
import Footer from "@/components/dashbord/footer";
import { DashboardNavbar } from "@/components/dashbord/navbar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";

const inter = Inter({ subsets: ["latin"] });

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
            <div className=" flex h-full w-[85%] p-4 md:py-24">{children}</div>
          </main>
        </SidebarInset>
      </SidebarProvider>

      <Footer />
    </div>
  );
}
