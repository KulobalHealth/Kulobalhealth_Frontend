<<<<<<< HEAD


export default function LandingPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>

      <main>{children}</main>
    </>
  );
}
=======
import { Navbar } from '@/components/navbar';

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
    </>
  );
}
>>>>>>> 2e204526af3930f4a2c1eb8432192121dad78a50
