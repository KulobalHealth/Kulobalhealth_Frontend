import { CheckCircle, Edit, Eye, MoreHorizontal, XCircle } from "lucide-react";
import { toast } from "sonner";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { formatCurrency, formatDate } from "@/lib/format-utils";
import {
  canCancelOrder,
  canCompleteOrder,
  canProcessOrder,
  getMainProduct,
  getProductCountText,
  hasMultipleProducts,
} from "@/lib/order-utils";
import { getStatusBadgeClass } from "@/lib/status-utils";
import type { Order } from "@/store/orders";
import { Icons } from "../ui/icons";
import { TablePagination } from "./table-pagination";

interface OrdersTableProps {
  readonly orders: Order[];
  readonly currentPage: number;
  readonly totalPages: number;
  readonly onOrderView: (orderId: string) => void;
  readonly onOrderEdit: (order: Order) => void;
  readonly onStatusChange: (id: string, status: Order["status"]) => void;
  readonly onPageChange: (page: number) => void;
}

export function OrdersTable({
  orders,
  currentPage,
  totalPages,
  onOrderView,
  onOrderEdit,
  onStatusChange,
  onPageChange,
}: OrdersTableProps) {
  const handleStatusChange = (order: Order, newStatus: Order["status"]) => {
    onStatusChange(order.orderId, newStatus);
    toast.success("Order status updated", {
      description: `Status changed to ${newStatus.toLowerCase()}`,
    });
  };

  return (
    <div className="rounded-lg bg-white shadow-sm">
      <Table>
        <TableHeader>
          <TableRow className="bg-stroke">
            <TableHead className="bg-stroke">Order ID</TableHead>
            <TableHead className="bg-stroke">Pharmacy Name</TableHead>
            <TableHead className="bg-stroke">Order Date</TableHead>
            <TableHead className="bg-stroke">Amount</TableHead>
            <TableHead className="bg-stroke">Status</TableHead>
            <TableHead className="bg-stroke">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className="mb-4">
          {orders.map((order) => {
            const mainProduct = getMainProduct(order.products);
            const multipleProducts = hasMultipleProducts(order.products);

            return (
              <TableRow className="hover:bg-gray-50" key={order.orderId}>
                <TableCell>
                  <div className="flex items-center gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-secondary">
                      <Icons.Basket className="h-4 w-4 text-primary-500" />
                    </div>
                    <div>
                      <div className="font-medium">
                        {mainProduct?.productName || "No Products"}
                        {multipleProducts && (
                          <span className="ml-1 text-gray-500 text-xs">
                            {getProductCountText(order.products)}
                          </span>
                        )}
                      </div>
                      <div className="text-gray-500 text-sm">
                        #{order.orderId.slice(-8)}
                      </div>
                    </div>
                  </div>
                </TableCell>
                <TableCell className="text-gray-600">
                  {order.pharmacy.pharmacyName}
                </TableCell>
                <TableCell className="text-gray-600">
                  {formatDate(order.dateOrdered)}
                </TableCell>
                <TableCell>
                  <div>
                    <div className="font-medium">
                      {formatCurrency(order.totalCost)}
                    </div>
                    <div className="text-sm text-success-600">
                      {order.paid ? "+ Full Payment" : "Pending Payment"}
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <Badge
                    className={getStatusBadgeClass(order.statusColor)}
                    variant="outline"
                  >
                    {order.displayStatus || order.status}
                  </Badge>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Button
                      className="p-2"
                      onClick={() => onOrderView(order.orderId)}
                      size="sm"
                      variant="ghost"
                    >
                      <Eye className="h-4 w-4" />
                    </Button>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button className="p-2" size="sm" variant="ghost">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem onClick={() => onOrderEdit(order)}>
                          <Edit className="mr-2 h-4 w-4" />
                          Edit Order
                        </DropdownMenuItem>

                        {canProcessOrder(order.status) && (
                          <DropdownMenuItem
                            className="text-blue-600"
                            onClick={() =>
                              handleStatusChange(order, "PROCESSING")
                            }
                          >
                            <CheckCircle className="mr-2 h-4 w-4" />
                            Process Order
                          </DropdownMenuItem>
                        )}

                        {canCompleteOrder(order.status) && (
                          <DropdownMenuItem
                            className="text-green-600"
                            onClick={() =>
                              handleStatusChange(order, "COMPLETED")
                            }
                          >
                            <CheckCircle className="mr-2 h-4 w-4" />
                            Mark as Completed
                          </DropdownMenuItem>
                        )}

                        {canCancelOrder(order.status) && (
                          <DropdownMenuItem
                            className="text-red-600"
                            onClick={() =>
                              handleStatusChange(order, "CANCELLED")
                            }
                          >
                            <XCircle className="mr-2 h-4 w-4" />
                            Cancel Order
                          </DropdownMenuItem>
                        )}
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>

      {/* Pagination */}
      <TablePagination
        currentPage={currentPage}
        onPageChange={onPageChange}
        totalPages={totalPages}
      />
    </div>
  );
}
