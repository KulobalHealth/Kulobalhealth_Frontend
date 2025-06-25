import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Icons } from '@/components/ui/icons';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import type { RecentOrder } from '@/store/admin-dashboard';
import { TablePagination } from './table-pagination';

interface RecentOrdersTableProps {
  orders: RecentOrder[];
  currentPage?: number;
  totalPages?: number;
  onPageChange?: (page: number) => void;
}

export function RecentOrdersTable({
  orders,
  currentPage = 1,
  totalPages = 10,
  onPageChange,
}: RecentOrdersTableProps) {
  return (
    <Card className="bg-white">
      <CardHeader>
        <CardTitle className="text-lg">Recent Orders</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow className="bg-secondary">
              <TableHead className="bg-secondary">Order ID</TableHead>
              <TableHead className="bg-secondary">Pharmacy Name</TableHead>
              <TableHead className="bg-secondary">Amount(GHS)</TableHead>
              <TableHead className="bg-secondary">Order Date</TableHead>
              <TableHead className="bg-secondary">Location</TableHead>
              <TableHead className="bg-secondary">Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {orders.map((order) => (
              <TableRow key={order.id}>
                <TableCell>
                  <div className="flex items-center gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-secondary">
                      <Icons.Basket className="h-4 w-4" />
                    </div>
                    <div>
                      <div className="font-medium">{order.product}</div>
                      <div className="text-gray-500 text-sm">{order.id}</div>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <div>
                    <div className="font-medium">{order.pharmacy}</div>
                    <div className="mt-1 flex items-center gap-1">
                      <div
                        className={`h-2 w-2 rounded-full ${
                          order.paymentType === 'full'
                            ? 'bg-green-500'
                            : 'bg-orange-500'
                        }`}
                      />
                      <span
                        className={`text-xs ${
                          order.paymentType === 'full'
                            ? 'text-green-600'
                            : 'text-orange-600'
                        }`}
                      >
                        {order.paymentStatus}
                      </span>
                    </div>
                  </div>
                </TableCell>
                <TableCell className="font-medium">{order.amount}</TableCell>
                <TableCell>{order.date}</TableCell>
                <TableCell>{order.location}</TableCell>
                <TableCell>
                  <Badge
                    className="bg-gray-100 font-normal text-gray-600"
                    variant="secondary"
                  >
                    {order.status}
                  </Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        <TablePagination
          currentPage={currentPage}
          onPageChange={onPageChange}
          totalPages={totalPages}
        />
      </CardContent>
    </Card>
  );
}
