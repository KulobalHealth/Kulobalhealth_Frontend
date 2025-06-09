import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

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
      className={`${color}  text-white px-6 py-6 rounded-xl w-full justify-between hover:${color} h-18`}
    >
      <div className="flex items-center gap-2 text-lg">
        {icon}
        <span>{text}</span>
      </div>
      <ChevronRight className="w-4 h-4" />
    </Button>
  );
}
