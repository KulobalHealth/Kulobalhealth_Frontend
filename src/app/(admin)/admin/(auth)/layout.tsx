import Image from "next/image";
import img from "@/assets/images/groupImg.png";

export default function AdminAuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen items-center justify-between bg-background">
      <div className="flex h-screen w-full flex-col items-center justify-center p-4 lg:w-1/2 lg:rounded-lg lg:p-8 ">
        {children}
      </div>
      <div className="relative hidden h-screen w-screen lg:flex lg:w-1/2">
        <Image
          alt="business registration"
          className="hidden h-full w-full object-cover lg:block"
          fill
          priority
          sizes="100vw"
          src={img}
        />
      </div>
    </div>
  );
}
