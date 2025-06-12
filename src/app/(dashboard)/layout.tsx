import { AppSidebar } from "@/components/app-sidebar";
import Footer from "@/components/dashbord/footer";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { DashboardNavbar } from "@/components/dashbord/navbar";


export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-background min-h-screen ">
      <DashboardNavbar/>

      <SidebarProvider>

        <AppSidebar />
        <main className="flex flex-col flex-1 bg-background p-4 md:p-6 ">
          <SidebarTrigger />
          {children}
        </main>
      </SidebarProvider>
      <Footer/>
    </div>
  );
}
