"use client";


import { FloatingBottomNavbar } from "@/components/floating-navbar";
import Footer from "@/components/footer";

export default function MarketplaceLayout({
  children,
}: {
  children: React.ReactNode;
}) {


  return (
    <div className="min-h-screen flex flex-col py-8">
        <main className=" flex-1 min-h-screen my-8">
          {children}
          </main>
         <FloatingBottomNavbar />

      <Footer />
    </div>
  );
}
