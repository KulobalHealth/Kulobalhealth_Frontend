import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { sidebarNavItems } from "@/lib/navigation";

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
                isActive ? "bg-primary-600 text-white" : ""
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
