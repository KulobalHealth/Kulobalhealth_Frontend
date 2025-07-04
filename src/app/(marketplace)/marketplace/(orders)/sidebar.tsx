<<<<<<< HEAD
import { Button } from "@/components/ui/button";
import { sidebarNavItems } from "@/lib/navigation";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="w-full md:w-64 p-4 md:p-8 space-y-4">
      <div className="space-y-1 border rounded-xl shadow py-[30px] px-4">
        {sidebarNavItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Button
              key={item.href}
              variant="ghost"
              className={`w-full justify-start ${
                isActive ? "text-white bg-primary-600" : ""
              }`}
              asChild
            >
              <Link href={item.href}>
                <item.icon className="mr-2 h-4 w-4" />
                {item.title}
              </Link>
            </Button>
          );
        })}
      </div>
    </div>
  );
}
=======
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { sidebarNavItems } from '@/lib/navigation';

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="w-full space-y-4 p-4 md:w-64 md:p-8">
      <div className="space-y-1 rounded-xl border px-4 py-[30px] shadow">
        {sidebarNavItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Button
              asChild
              className={`w-full justify-start ${
                isActive ? 'bg-primary-600 text-white' : ''
              }`}
              key={item.href}
              variant="ghost"
            >
              <Link href={item.href}>
                <item.icon className="mr-2 h-4 w-4" />
                {item.title}
              </Link>
            </Button>
          );
        })}
      </div>
    </div>
  );
}
>>>>>>> 2e204526af3930f4a2c1eb8432192121dad78a50
