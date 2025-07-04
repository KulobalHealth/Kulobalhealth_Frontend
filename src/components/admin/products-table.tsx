"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  MoreHorizontal,
  ChevronLeft,
  ChevronRight,
  Eye,
  Edit,
  Trash,
  Package,
} from "lucide-react";
import type { Product } from "@/store/products";

interface ProductsTableProps {
  readonly products: Product[];
  readonly currentPage: number;
  readonly totalPages: number;
  readonly onProductView: (id: string) => void;
  readonly onProductEdit: (product: Product) => void;
  readonly onStatusChange: (id: string, status: Product["status"]) => void;
  readonly onVisibilityToggle: (id: string) => void;
  readonly onDelete: (id: string) => void;
  readonly onPageChange: (page: number) => void;
}

export function ProductsTable({
  products,
  currentPage,
  totalPages,
  onProductView,
  onProductEdit,
  onStatusChange,
  onVisibilityToggle,
  onDelete,
  onPageChange,
}: ProductsTableProps) {
  const renderPaginationButton = (page: number, isCurrent: boolean) => (
    <Button
      key={page}
      variant={isCurrent ? "default" : "ghost"}
      size="sm"
      onClick={() => onPageChange(page)}
      className={isCurrent ? "bg-black text-white" : "text-gray-600"}
    >
      {page}
    </Button>
  );

  const renderPaginationButtons = () => {
    const buttons = [];

    // First page
    buttons.push(renderPaginationButton(1, currentPage === 1));

    // Ellipsis before current page group
    if (currentPage > 3) {
      buttons.push(
        <span key="ellipsis-start" className="px-2 text-gray-500">
          ...
        </span>
      );
    }

    // Pages around current page
    const startPage = Math.max(2, currentPage - 1);
    const endPage = Math.min(totalPages - 1, currentPage + 1);

    for (let i = startPage; i <= endPage; i++) {
      if (i !== 1 && i !== totalPages) {
        buttons.push(renderPaginationButton(i, currentPage === i));
      }
    }

    // Ellipsis after current page group
    if (currentPage < totalPages - 2) {
      buttons.push(
        <span key="ellipsis-end" className="px-2 text-gray-500">
          ...
        </span>
      );
    }

    // Last page
    if (totalPages > 1) {
      buttons.push(
        renderPaginationButton(totalPages, currentPage === totalPages)
      );
    }

    return buttons;
  };

  const getPerformanceBadgeClass = (performance: Product["performance"]) => {
    switch (performance) {
      case "Excellent":
        return "bg-green-100 text-green-800";
      case "Best":
        return "bg-blue-100 text-blue-800";
      case "Good":
        return "bg-yellow-100 text-yellow-800";
      case "Poor":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getPerformancePercentage = (performance: Product["performance"]) => {
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

  const getStatusBadgeClass = (status: Product["status"]) => {
    switch (status) {
      case "Active":
        return "bg-green-100 text-green-800";
      case "Inactive":
        return "bg-gray-100 text-gray-800";
      case "Out of Stock":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border">
      <Table>
        <TableHeader>
          <TableRow className="border-b border-gray-200">
            <TableHead className="font-medium text-gray-700">
              Product Name
            </TableHead>
            <TableHead className="font-medium text-gray-700">
              Category
            </TableHead>
            <TableHead className="font-medium text-gray-700">Price</TableHead>
            <TableHead className="font-medium text-gray-700">Stock</TableHead>
            <TableHead className="font-medium text-gray-700">
              Performance
            </TableHead>
            <TableHead className="font-medium text-gray-700">Status</TableHead>
            <TableHead className="font-medium text-gray-700">
              Visibility
            </TableHead>
            <TableHead className="font-medium text-gray-700 text-right">
              Actions
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {products.map((product) => (
            <TableRow
              key={product.id}
              className="border-b border-gray-100 hover:bg-gray-50"
            >
              <TableCell>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Package className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">{product.name}</p>
                    <p className="text-sm text-gray-500">{product.sku}</p>
                  </div>
                </div>
              </TableCell>
              <TableCell className="text-gray-600">
                {product.category}
              </TableCell>
              <TableCell className="font-medium text-gray-900">
                {product.price}
              </TableCell>
              <TableCell>
                <Badge variant="outline" className="bg-gray-50">
                  {product.stock}
                </Badge>
              </TableCell>
              <TableCell>
                <div className="flex items-center gap-2">
                  <Badge
                    className={getPerformanceBadgeClass(product.performance)}
                  >
                    {product.performance}
                  </Badge>
                  <div className="relative w-8 h-8">
                    <svg
                      className="w-8 h-8 transform -rotate-90"
                      viewBox="0 0 32 32"
                    >
                      <circle
                        cx="16"
                        cy="16"
                        r="12"
                        fill="none"
                        stroke="#e5e7eb"
                        strokeWidth="3"
                      />
                      <circle
                        cx="16"
                        cy="16"
                        r="12"
                        fill="none"
                        stroke={
                          product.performanceColor === "success"
                            ? "#10b981"
                            : "#3b82f6"
                        }
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeDasharray={`${getPerformancePercentage(
                          product.performance
                        )} 75`}
                      />
                    </svg>
                  </div>
                </div>
              </TableCell>
              <TableCell>
                <Badge className={getStatusBadgeClass(product.status)}>
                  {product.status}
                </Badge>
              </TableCell>
              <TableCell>
                <Switch
                  checked={product.visibility}
                  onCheckedChange={() => onVisibilityToggle(product.id)}
                />
              </TableCell>
              <TableCell className="text-right">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                      <MoreHorizontal className="w-4 h-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-48">
                    <DropdownMenuItem
                      onClick={() => onProductView(product.id)}
                      className="flex items-center gap-2"
                    >
                      <Eye className="w-4 h-4" />
                      View Details
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      onClick={() => onProductEdit(product)}
                      className="flex items-center gap-2"
                    >
                      <Edit className="w-4 h-4" />
                      Edit Product
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem
                      onClick={() =>
                        onStatusChange(
                          product.id,
                          product.status === "Active" ? "Inactive" : "Active"
                        )
                      }
                      className="flex items-center gap-2"
                    >
                      <span className="w-4 h-4 flex items-center justify-center">
                        {product.status === "Active" ? "⏸" : "▶"}
                      </span>
                      {product.status === "Active" ? "Deactivate" : "Activate"}
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem
                      onClick={() => onDelete(product.id)}
                      className="flex items-center gap-2 text-red-600"
                    >
                      <Trash className="w-4 h-4" />
                      Delete Product
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {/* Pagination */}
      <div className="flex items-center justify-between px-6 py-4 border-t border-gray-200">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="text-gray-600"
        >
          <ChevronLeft className="w-4 h-4 mr-1" />
          Previous
        </Button>

        <div className="flex items-center gap-1">
          {renderPaginationButtons()}
        </div>

        <Button
          variant="ghost"
          size="sm"
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="text-gray-600"
        >
          Next
          <ChevronRight className="w-4 h-4 ml-1" />
        </Button>
      </div>
    </div>
  );
}
