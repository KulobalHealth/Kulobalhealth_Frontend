import { Button } from "@/components/ui/button";
import { LayoutGrid, Package, Truck } from "lucide-react";

export default function Sidebar() {
  return (
    <div className="w-full md:w-64 p-4 md:p-8 space-y-4">
      <div className="space-y-1">
        <Button variant="ghost" className="w-full justify-start">
          <LayoutGrid className="mr-2 h-4 w-4" />
          Dashboard
        </Button>
        <Button
          variant="ghost"
          className="w-full justify-start text-primary-600"
        >
          <Package className="mr-2 h-4 w-4" />
          Orders
        </Button>
        <Button variant="ghost" className="w-full justify-start">
          <Truck className="mr-2 h-4 w-4" />
          Track Order
        </Button>
      </div>
    </div>
  );
}
