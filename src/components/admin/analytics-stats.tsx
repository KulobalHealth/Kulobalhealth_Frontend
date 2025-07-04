import {
  TrendingUp,
  TrendingDown,
  Users,
  Building,
  Truck,
  ShoppingCart,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { ViewType } from "@/store/analytics";

interface AnalyticsStatsProps {
  readonly patients: number;
  readonly pharmacies: number;
  readonly suppliers: number;
  readonly pendingOrders: number;
  readonly currentView: ViewType;
  readonly isLoading?: boolean;
}

interface StatCardProps {
  readonly title: string;
  readonly value: string;
  readonly icon: React.ComponentType<{ className?: string }>;
  readonly trend?: "up" | "down";
  readonly trendValue?: string;
  readonly isHighlighted?: boolean;
}

function StatCard({
  title,
  value,
  icon: Icon,
  trend,
  trendValue,
  isHighlighted,
}: StatCardProps) {
  return (
    <Card className={isHighlighted ? "border-primary shadow-md" : ""}>
      <CardContent className="p-4">
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <p className="text-sm text-muted-foreground">{title}</p>
            <p className="text-2xl font-semibold">{value}</p>
            {trend && trendValue && (
              <div className="flex items-center text-xs">
                {trend === "up" ? (
                  <TrendingUp className="h-3 w-3 text-green-500 mr-1" />
                ) : (
                  <TrendingDown className="h-3 w-3 text-red-500 mr-1" />
                )}
                <span
                  className={trend === "up" ? "text-green-500" : "text-red-500"}
                >
                  {trendValue}
                </span>
                <span className="text-muted-foreground ml-1">
                  vs last month
                </span>
              </div>
            )}
          </div>
          <div
            className={`p-2 rounded-full ${
              isHighlighted ? "bg-primary/10" : "bg-muted"
            }`}
          >
            <Icon
              className={`h-5 w-5 ${
                isHighlighted ? "text-primary" : "text-muted-foreground"
              }`}
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export function AnalyticsStats({
  patients,
  pharmacies,
  suppliers,
  pendingOrders,
  currentView,
  isLoading = false,
}: AnalyticsStatsProps) {
  const formatNumber = (num: number): string => {
    if (num >= 1000) {
      return `${(num / 1000).toFixed(1)}k`;
    }
    return num.toString();
  };

  const stats = [
    {
      title: "Total Patients",
      value: formatNumber(patients),
      icon: Users,
      trend: "up" as const,
      trendValue: "+12%",
      isHighlighted: currentView === "patients",
    },
    {
      title: "Active Pharmacies",
      value: formatNumber(pharmacies),
      icon: Building,
      trend: "up" as const,
      trendValue: "+8%",
      isHighlighted: currentView === "pharmacies",
    },
    {
      title: "Total Suppliers",
      value: formatNumber(suppliers),
      icon: Truck,
      trend: "down" as const,
      trendValue: "-2%",
      isHighlighted: currentView === "suppliers",
    },
    {
      title: "Pending Orders",
      value: formatNumber(pendingOrders),
      icon: ShoppingCart,
      trend: "up" as const,
      trendValue: "+15%",
      isHighlighted: false,
    },
  ];

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {Array.from({ length: 4 }).map((_, index) => (
          <Card key={index}>
            <CardContent className="p-4">
              <div className="animate-pulse space-y-2">
                <div className="h-4 bg-gray-200 rounded w-3/4" />
                <div className="h-6 bg-gray-200 rounded w-1/2" />
                <div className="h-3 bg-gray-200 rounded w-2/3" />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
      {stats.map((stat, index) => (
        <StatCard key={index} {...stat} />
      ))}
    </div>
  );
}
