'use client';

import {
  ChevronLeft,
  ChevronRight,
  Edit,
  Eye,
  MoreHorizontal,
  Trash,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
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
import type { Supplier } from '@/store/suppliers';

interface SuppliersTableProps {
  readonly suppliers: Supplier[];
  readonly currentPage: number;
  readonly totalPages: number;
  readonly onSupplierView: (id: string) => void;
  readonly onSupplierEdit: (supplier: Supplier) => void;
  readonly onStatusChange: (id: string, status: Supplier['status']) => void;
  readonly onDelete: (id: string) => void;
  readonly onPageChange: (page: number) => void;
}

export function SuppliersTable({
  suppliers,
  currentPage,
  totalPages,
  onSupplierView,
  onSupplierEdit,
  onStatusChange,
  onDelete,
  onPageChange,
}: SuppliersTableProps) {
  const renderPaginationButton = (page: number, isCurrent: boolean) => (
    <Button
      className={isCurrent ? 'bg-black text-white' : 'text-gray-600'}
      key={page}
      onClick={() => onPageChange(page)}
      size="sm"
      variant={isCurrent ? 'default' : 'ghost'}
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
        <span className="px-2 text-gray-500" key="ellipsis-start">
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
        <span className="px-2 text-gray-500" key="ellipsis-end">
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

  return (
    <div className="rounded-lg border bg-white shadow-sm">
      <Table>
        <TableHeader>
          <TableRow className="border-gray-200 border-b">
            <TableHead className="font-medium text-gray-700">ID</TableHead>
            <TableHead className="font-medium text-gray-700">
              Company Name
            </TableHead>
            <TableHead className="font-medium text-gray-700">
              Telephone
            </TableHead>
            <TableHead className="font-medium text-gray-700">Email</TableHead>
            <TableHead className="font-medium text-gray-700">Address</TableHead>
            <TableHead className="font-medium text-gray-700">
              Agent Name
            </TableHead>
            <TableHead className="font-medium text-gray-700">
              Agent Number
            </TableHead>
            <TableHead className="text-right font-medium text-gray-700">
              Actions
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {suppliers.map((supplier) => (
            <TableRow
              className="border-gray-100 border-b hover:bg-gray-50"
              key={supplier.id}
            >
              <TableCell className="font-mono text-gray-600 text-sm">
                {supplier.id}
              </TableCell>
              <TableCell className="font-medium text-gray-900">
                {supplier.companyName}
              </TableCell>
              <TableCell className="text-gray-600">
                {supplier.telephone}
              </TableCell>
              <TableCell className="text-gray-600">{supplier.email}</TableCell>
              <TableCell className="text-gray-600">
                {supplier.address}
              </TableCell>
              <TableCell>
                <div className="flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-300 font-medium text-gray-600 text-xs">
                    {supplier.agentName
                      .split(' ')
                      .map((n) => n[0])
                      .join('')}
                  </div>
                  <span className="text-gray-900">{supplier.agentName}</span>
                </div>
              </TableCell>
              <TableCell className="text-gray-600">
                {supplier.agentNumber}
              </TableCell>
              <TableCell className="text-right">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button className="h-8 w-8 p-0" size="sm" variant="ghost">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-48">
                    <DropdownMenuItem
                      className="flex items-center gap-2"
                      onClick={() => onSupplierView(supplier.id)}
                    >
                      <Eye className="h-4 w-4" />
                      View Details
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      className="flex items-center gap-2"
                      onClick={() => onSupplierEdit(supplier)}
                    >
                      <Edit className="h-4 w-4" />
                      Edit Supplier
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem
                      className="flex items-center gap-2"
                      onClick={() =>
                        onStatusChange(
                          supplier.id,
                          supplier.status === 'Active' ? 'Suspended' : 'Active'
                        )
                      }
                    >
                      {supplier.status === 'Active' ? 'Suspend' : 'Activate'}
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem
                      className="flex items-center gap-2 text-red-600 focus:text-red-600"
                      onClick={() => onDelete(supplier.id)}
                    >
                      <Trash className="h-4 w-4" />
                      Delete Supplier
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {/* Pagination */}
      <div className="flex items-center justify-between border-gray-200 border-t px-4 py-4">
        <Button
          className="text-gray-600"
          disabled={currentPage === 1}
          onClick={() => onPageChange(currentPage - 1)}
          size="sm"
          variant="ghost"
        >
          <ChevronLeft className="mr-1 h-4 w-4" />
          Previous
        </Button>

        <div className="flex items-center gap-1">
          {renderPaginationButtons()}
        </div>

        <Button
          className="text-gray-600"
          disabled={currentPage === totalPages}
          onClick={() => onPageChange(currentPage + 1)}
          size="sm"
          variant="ghost"
        >
          Next
          <ChevronRight className="ml-1 h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
