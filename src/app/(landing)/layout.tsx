import Footer from "@/components/footer";
import { Navbar } from "@/components/navbar";

export default function LandingPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <header className="pb-20">
        <Navbar />
      </header>
      <main>{children}</main>
      <Footer />
    </>
  );
}
