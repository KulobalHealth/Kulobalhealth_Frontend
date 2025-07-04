import { Card, CardContent } from "@/components/ui/card";

interface MetricsCardsProps {
  readonly hasProducts: boolean;
}

export function MetricsCards({ hasProducts }: MetricsCardsProps) {
  return (
    <div className="mb-6  grid grid-cols-1 gap-4 md:grid-cols-3">
      <Card className="bg-primary-50 border-[1px] border-black">
        <CardContent className="p-4">
          <div className="mb-1 text-gray-600 text-sm">
            Number of products in stock
          </div>
          <div className="font-bold text-2xl">
            {hasProducts ? "40,000" : "0"}
          </div>
        </CardContent>
      </Card>
      <Card className="bg-primary-50 border-[1px] border-black">
        <CardContent className="p-4">
          <div className="mb-1 text-gray-600 text-sm">Average Performance</div>
          <div className="font-bold text-2xl">
            {hasProducts ? "Good" : "N/A"}
          </div>
        </CardContent>
      </Card>
      <Card className="bg-primary-50 border-[1px] border-black">
        <CardContent className="p-4">
          <div className="mb-1 text-gray-600 text-sm">Products Sold</div>
          <div className="font-bold text-2xl">
            {hasProducts ? "40,000" : "0"}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
