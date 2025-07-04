"use client";

import { Edit, Eye, Trash2 } from "lucide-react";
import { PolarRadiusAxis, RadialBar, RadialBarChart } from "recharts";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { ChartConfig, ChartContainer } from "@/components/ui/chart";
import { Icons } from "@/components/ui/icons";
import { Product } from "@/store/products";

interface ProductRowProps {
  readonly product: Product;
  readonly onViewDetails: (product: Product) => void;
  readonly onDelete: (product: Product) => void;
  readonly isLast?: boolean;
}

export function ProductRow({
  product,
  onViewDetails,
  onDelete,
  isLast,
}: ProductRowProps) {
  const getPerformanceBadgeClass = (color: string) => {
    switch (color) {
      case "success":
        return "bg-success-100 text-success-700";
      case "primary":
        return "bg-primary-100 text-primary-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  const getPerformanceValue = (performance: string) => {
    switch (performance) {
      case "Excellent":
        return 90;
      case "Best":
        return 85;
      case "Good":
        return 70;
      case "Poor":
        return 40;
      default:
        return 0;
    }
  };

  const performanceValue = getPerformanceValue(product.performance);
  const chartData = [{ performance: performanceValue }];

  const chartConfig = {
    performance: {
      label: "Performance",
      color: product.performanceColor === "success" ? "#10b981" : "#3b82f6",
    },
  } satisfies ChartConfig;

  return (
    <>
      <div className="p-6 bg-white hover:bg-gray-50">
        <div className="flex items-center justify-between">
          {/* Product Name */}
          <div className="flex-1">
            <div className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-2">
              Product Name
            </div>
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary">
                <Icons.Basket className="h-6 w-6 text-white" />
              </div>
              <span className="font-medium">{product.name}</span>
            </div>
          </div>

          <div className="h-16 w-px bg-gray-200 mx-6" />

          {/* Performance Section */}
          <div className="flex gap-3 flex-row">
            <div className="text-xs flex flex-col gap-2 font-medium text-gray-500 uppercase tracking-wide mb-2">
              Performance
              <div className="text-sm text-gray-600">
                <span className="flex *:items-center justify-center gap-1">
                  Total Sold
                  <Icons.Basket className="h-full w-4 text-gray-500" />
                </span>
              </div>
            </div>
            <div className="flex gap-2">
              <div className="flex flex-col">
                <Badge
                  className={getPerformanceBadgeClass(product.performanceColor)}
                >
                  {product.performance}
                </Badge>
                <div className="text-sm text-gray-600 *:items-center">
                  Quantity: {product.stock}
                </div>
              </div>
            </div>
            <ChartContainer
              config={chartConfig}
              className="aspect-square w-16 h-16"
            >
              <RadialBarChart
                data={chartData}
                startAngle={180}
                endAngle={0}
                innerRadius={16}
                outerRadius={32}
              >
                <PolarRadiusAxis
                  tick={false}
                  tickLine={false}
                  axisLine={false}
                />
                <RadialBar
                  dataKey="performance"
                  cornerRadius={2}
                  fill="var(--color-performance)"
                  className="stroke-transparent stroke-1"
                />
              </RadialBarChart>
            </ChartContainer>
          </div>

          {/* Vertical Divider */}
          <div className="h-16 w-px bg-gray-200 mx-6" />

          {/* Stock */}
          <div className="flex-1">
            <div className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-2">
              Stock
            </div>
            <Badge className="bg-gray-50" variant="outline">
              {product.stock}
            </Badge>
          </div>

          {/* Vertical Divider */}
          <div className="h-16 w-px bg-gray-200 mx-6" />

          {/* Product Price */}
          <div className="flex-1">
            <div className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-2">
              Product Price
            </div>
            <div className="font-medium">{product.price}</div>
          </div>

          {/* Vertical Divider */}
          <div className="h-16 w-px bg-gray-200 mx-6" />

          {/* Visibility */}
          <div className="flex-1">
            <div className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-2">
              Visibility
            </div>
            <Switch checked={product.visibility} />
          </div>

          {/* Vertical Divider */}
          <div className="h-16 w-px bg-gray-200 mx-6" />

          {/* Actions */}
          <div className="flex-1">
            <div className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-2">
              Actions
            </div>
            <div className="flex items-center gap-2">
              <Button
                onClick={() => onViewDetails(product)}
                size="sm"
                variant="ghost"
              >
                <Eye className="h-4 w-4" />
              </Button>
              <Button size="sm" variant="ghost">
                <Edit className="h-4 w-4" />
              </Button>
              <Button
                onClick={() => onDelete(product)}
                size="sm"
                variant="ghost"
              >
                <Trash2 className="h-4 w-4 text-danger-600" />
              </Button>
            </div>
          </div>
        </div>
      </div>
      {/* Horizontal Ruler Divider */}
      {!isLast && <div className="border-t border-gray-200" />}
    </>
  );
}
