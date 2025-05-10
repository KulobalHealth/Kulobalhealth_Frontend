import { Navbar } from "@/components/navbar";

export default function LandingPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="font-urbanist">
      <header>
        <Navbar />
      </header>
      <main>{children}</main>
    </div>
  );
}
