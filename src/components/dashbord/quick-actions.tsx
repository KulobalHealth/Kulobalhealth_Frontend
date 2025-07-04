import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function QuickActions({
  color,
  text,
  icon,
}: {
  color?: string;
  text: string;
  icon?: React.ReactNode;
}) {
  return (
    <Button
      className={`${color} w-full justify-between rounded-xl px-6 py-6 text-white hover:${color} h-18`}
    >
      <div className="flex items-center gap-2 text-lg">
        {icon}
        <span>{text}</span>
      </div>
      <ChevronRight className="h-4 w-4" />
    </Button>
  );
}
