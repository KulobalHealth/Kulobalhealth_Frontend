"use client";

import { Edit, Eye, Trash2 } from "lucide-react";
import { PolarRadiusAxis, RadialBar, RadialBarChart } from "recharts";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { type ChartConfig, ChartContainer } from "@/components/ui/chart";
import { Icons } from "@/components/ui/icons";
import { Switch } from "@/components/ui/switch";
import { getProductImage } from "@/lib/product-utils";
import {
  getPerformanceBadgeClass,
  getPerformanceValue,
} from "@/lib/status-utils";
import type { Product } from "@/store/products";

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
  const productImageSrc = getProductImage(product);

  const productImage = productImageSrc ? (
    <img
      alt={product.productName ?? product.name ?? "Product"}
      className="h-10 w-10 rounded-lg object-cover"
      src={productImageSrc}
    />
  ) : (
    <Icons.Basket className="h-6 w-6 text-white" />
  );

  const performanceValue = getPerformanceValue(
    product.performance ?? "Excellent"
  );

  const chartData = [{ performance: performanceValue }];

  const chartConfig = {
    performance: {
      label: "Performance",
      color: product.performanceColor === "success" ? "#3b82f6" : "#10b981",
    },
  } satisfies ChartConfig;

  return (
    <>
      <div className="bg-white p-6 hover:bg-gray-50">
        <div className="flex items-center justify-between">
          {/* Product Name */}
          <div className="flex-1">
            <div className="mb-2 font-medium text-gray-500 text-xs uppercase tracking-wide">
              Product Name
            </div>
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-lg bg-secondary">
                {productImage}
              </div>
              <span className="font-medium">
                {product.productName ?? product.name ?? "-"}
              </span>
            </div>
          </div>

          <div className="mx-6 h-16 w-px bg-gray-200" />

          <div className="flex flex-row gap-3">
            <div className="mb-2 flex flex-col gap-2 font-medium text-gray-500 text-xs uppercase tracking-wide">
              Performance
              <div className="text-gray-600 text-sm">
                <span className="flex justify-center gap-1 *:items-center">
                  Total Sold
                  <Icons.Basket className="h-full w-4 text-gray-500" />
                </span>
              </div>
            </div>
            <div className="flex gap-2">
              <div className="flex flex-col">
                <Badge
                  className={getPerformanceBadgeClass(
                    product.performanceColor ?? ""
                  )}
                >
                  {product.performance ?? "Excellent"}
                </Badge>
                <div className="text-gray-600 text-sm *:items-center">
                  Quantity: {product.stock ?? "100 (fb)"}
                </div>
              </div>
            </div>
            <div className="aspect-square h-16 w-16">
              <ChartContainer
                className="aspect-square h-16 w-16"
                config={chartConfig}
              >
                <RadialBarChart
                  data={chartData}
                  endAngle={0}
                  innerRadius={16}
                  outerRadius={32}
                  startAngle={180}
                >
                  <PolarRadiusAxis
                    axisLine={false}
                    tick={false}
                    tickLine={false}
                  />
                  <RadialBar
                    className="stroke-1 stroke-transparent"
                    cornerRadius={2}
                    dataKey="performance"
                    fill="var(--color-performance)"
                  />
                </RadialBarChart>
              </ChartContainer>
            </div>
          </div>

          <div className="mx-6 h-16 w-px bg-gray-200" />

          {/* Stock */}
          <div className="flex-1">
            <div className="mb-2 font-medium text-gray-500 text-xs uppercase tracking-wide">
              Stock
            </div>
            <Badge className="bg-gray-50" variant="outline">
              {product.stock ?? "100 (fb)"}
            </Badge>
          </div>

          <div className="mx-6 h-16 w-px bg-gray-200" />

          {/* Product Type */}
          <div className="flex-1">
            <div className="mb-2 font-medium text-gray-500 text-xs uppercase tracking-wide">
              Product Type
            </div>
            <div className="font-medium">
              {product.productType ?? product.category ?? "-"}
            </div>
          </div>

          <div className="mx-6 h-16 w-px bg-gray-200" />

          {/* Product Price */}
          <div className="flex-1">
            <div className="mb-2 font-medium text-gray-500 text-xs uppercase tracking-wide">
              Product Price
            </div>
            <div className="font-medium">GHS {product.price ?? "-"}</div>
          </div>

          <div className="mx-6 h-16 w-px bg-gray-200" />

          {/* Visibility */}
          <div className="flex-1">
            <div className="mb-2 font-medium text-gray-500 text-xs uppercase tracking-wide">
              Visibility
            </div>
            <Switch checked={product.visibility ?? false} />
          </div>

          <div className="mx-6 h-16 w-px bg-gray-200" />

          {/* Brand */}
          <div className="flex-1">
            <div className="mb-2 font-medium text-gray-500 text-xs uppercase tracking-wide">
              Brand
            </div>
            <div className="font-medium">{product.brand ?? "-"}</div>
          </div>

          <div className="mx-6 h-16 w-px bg-gray-200" />

          {/* Manufacturer */}
          <div className="flex-1">
            <div className="mb-2 font-medium text-gray-500 text-xs uppercase tracking-wide">
              Manufacturer
            </div>
            <div className="font-medium">{product.manufacturer ?? "-"}</div>
          </div>

          <div className="mx-6 h-16 w-px bg-gray-200" />

          {/* Actions */}
          <div className="flex-1">
            <div className="mb-2 font-medium text-gray-500 text-xs uppercase tracking-wide">
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
      {!isLast && <div className="border-gray-200 border-t" />}
    </>
  );
}
