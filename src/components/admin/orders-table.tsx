import {
  CheckCircle,
  Edit,
  Eye,
  MoreHorizontal,
  Truck,
  XCircle,
} from 'lucide-react';
import { toast } from 'sonner';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import type { Order } from '@/store/orders';
import { Icons } from '../ui/icons';
import { TablePagination } from './table-pagination';

interface OrdersTableProps {
  readonly orders: Order[];
  readonly currentPage: number;
  readonly totalPages: number;
  readonly onOrderView: (orderId: string) => void;
  readonly onOrderEdit: (order: Order) => void;
  readonly onStatusChange: (id: string, status: Order['status']) => void;
  readonly onDelete: (id: string) => void;
  readonly onPageChange: (page: number) => void;
}

export function OrdersTable({
  orders,
  currentPage,
  totalPages,
  onOrderView,
  onOrderEdit,
  onStatusChange,
  onDelete,
  onPageChange,
}: OrdersTableProps) {
  const handleStatusChange = (order: Order, newStatus: Order['status']) => {
    onStatusChange(order.id, newStatus);
    toast.success(`Order ${order.orderNumber} status updated`, {
      description: `Status changed to ${newStatus}`,
    });
  };

  const handleDelete = (order: Order) => {
    onDelete(order.id);
    toast.success(`Order ${order.orderNumber} has been deleted`, {
      description: 'Order has been permanently removed',
    });
  };

  const getStatusBadgeClass = (color: string) => {
    switch (color) {
      case 'green':
        return 'bg-success-50 text-success-700 hover:bg-success-50 border-success-200';
      case 'blue':
        return 'bg-primary-50 text-primary-700 hover:bg-primary-50 border-primary-200';
      case 'yellow':
        return 'bg-warning-50 text-warning-700 hover:bg-warning-50 border-warning-200';
      case 'red':
        return 'bg-red-50 text-red-700 hover:bg-red-50 border-red-200';
      case 'gray':
      default:
        return 'bg-neutral-100 text-neutral-700 hover:bg-neutral-100 border-neutral-300';
    }
  };

  const parseOrderId = (orderId: string) => {
    const parts = orderId.split('\n');
    return {
      productName: parts[0] || '',
      orderNumber: parts[1] || '',
    };
  };

  const parseQuantity = (quantity: string) => {
    const parts = quantity.split('\n');
    return {
      amount: parts[0] || '',
      paymentStatus: parts[1] || '',
    };
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
            const { productName, orderNumber } = parseOrderId(order.orderId);
            const { amount, paymentStatus } = parseQuantity(
              `${order.amount}\n${order.paymentStatus}`
            );

            return (
              <TableRow className="hover:bg-gray-50" key={order.id}>
                <TableCell>
                  <div className="flex items-center gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-secondary">
                      <Icons.Basket className="h-4 w-4 text-primary-500" />
                    </div>
                    <div>
                      <div className="font-medium">{productName}</div>
                      <div className="text-gray-500 text-sm">{orderNumber}</div>
                    </div>
                  </div>
                </TableCell>
                <TableCell className="text-gray-600">
                  {order.pharmacyName}
                </TableCell>
                <TableCell className="text-gray-600">
                  {order.orderDate}
                </TableCell>
                <TableCell>
                  <div>
                    <div className="font-medium">{amount}</div>
                    <div className="text-sm text-success-600">
                      {paymentStatus}
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <Badge
                    className={getStatusBadgeClass(order.statusColor)}
                    variant="outline"
                  >
                    {order.status}
                  </Badge>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Button
                      className="p-2"
                      onClick={() => onOrderView(order.id)}
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

                        {order.status === 'New Order' && (
                          <DropdownMenuItem
                            className="text-blue-600"
                            onClick={() =>
                              handleStatusChange(order, 'Confirmed')
                            }
                          >
                            <CheckCircle className="mr-2 h-4 w-4" />
                            Confirm Order
                          </DropdownMenuItem>
                        )}

                        {order.status === 'Confirmed' && (
                          <DropdownMenuItem
                            className="text-blue-600"
                            onClick={() =>
                              handleStatusChange(order, 'In Transit')
                            }
                          >
                            <Truck className="mr-2 h-4 w-4" />
                            Mark as In Transit
                          </DropdownMenuItem>
                        )}

                        {order.status === 'In Transit' && (
                          <DropdownMenuItem
                            className="text-green-600"
                            onClick={() =>
                              handleStatusChange(order, 'Delivered')
                            }
                          >
                            <CheckCircle className="mr-2 h-4 w-4" />
                            Mark as Delivered
                          </DropdownMenuItem>
                        )}

                        {order.status !== 'Delivered' &&
                          order.status !== 'Cancelled' && (
                            <DropdownMenuItem
                              className="text-red-600"
                              onClick={() =>
                                handleStatusChange(order, 'Cancelled')
                              }
                            >
                              <XCircle className="mr-2 h-4 w-4" />
                              Cancel Order
                            </DropdownMenuItem>
                          )}

                        <DropdownMenuItem
                          className="text-red-600"
                          onClick={() => handleDelete(order)}
                        >
                          Delete Order
                        </DropdownMenuItem>
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
