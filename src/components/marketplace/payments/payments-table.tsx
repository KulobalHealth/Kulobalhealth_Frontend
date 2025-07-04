"use client";

import {
  type ColumnDef,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { ArrowLeft, ArrowRight, FileText } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import type { Payment, PaymentStatus } from "@/lib/mock-payments";
import { useMarketplaceStore } from "@/lib/store";

export function PaymentsTable() {
  const { getPayments } = useMarketplaceStore();
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 10,
  });

  const columns: ColumnDef<Payment>[] = [
    {
      id: "select",
      header: "",
      cell: () => (
        <div className="flex items-center justify-center">
          <FileText className="h-5 w-5 text-gray-400" />
        </div>
      ),
      size: 50,
    },
    {
      accessorKey: "productName",
      header: "Product/Order No.",
      cell: ({ row }) => (
        <div>
          <div className="font-medium">{row.original.productName}</div>
          <div className="text-gray-500 text-sm">{row.original.orderNo}</div>
        </div>
      ),
    },
    {
      accessorKey: "paymentType",
      header: "Payment Type/Amount",
      cell: ({ row }) => (
        <div>
          <div
            className={`text-sm ${getPaymentTypeColor(
              row.original.paymentType
            )}`}
          >
            • {row.original.paymentType}
          </div>
          <div className="font-medium">
            GHS {row.original.amount.toFixed(2)}
          </div>
        </div>
      ),
    },
    {
      accessorKey: "lastPaymentDate",
      header: "Last Payment Date",
      cell: ({ row }) => <div>{row.original.lastPaymentDate}</div>,
    },
    {
      accessorKey: "amountPaid",
      header: "Amount Paid/Remains",
      cell: ({ row }) => (
        <div>
          <div className="font-medium">
            GHS {row.original.amountPaid.toFixed(2)}
          </div>
          <div className="text-gray-500 text-sm">
            GHS {row.original.amountRemaining.toFixed(2)}
          </div>
        </div>
      ),
    },
    {
      accessorKey: "status",
      header: "Order Status/Date",
      cell: ({ row }) => (
        <div>
          <div
            className={`inline-flex items-center rounded-full px-2 py-1 text-xs ${getStatusColor(
              row.original.status
            )}`}
          >
            • {capitalizeFirstLetter(row.original.status)}
          </div>
          <div className="mt-1 text-gray-500 text-sm">{row.original.date}</div>
        </div>
      ),
    },
  ];

  const table = useReactTable({
    data: getPayments(),
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onPaginationChange: setPagination,
    state: {
      pagination,
    },
  });

  return (
    <div className="rounded-lg border bg-white dark:bg-background">
      <div className="overflow-x-auto rounded-md">
        <table className="w-full">
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr
                className="border-b bg-gray-50 dark:bg-neutral-900"
                key={headerGroup.id}
              >
                {headerGroup.headers.map((header) => (
                  <th
                    className="px-4 py-3 text-left font-medium text-gray-500 text-sm dark:text-gray-400"
                    key={header.id}
                    style={{ width: header.getSize() }}
                  >
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map((row) => (
              <tr
                className="border-b hover:bg-gray-50 dark:hover:bg-neutral-900"
                key={row.id}
              >
                {row.getVisibleCells().map((cell) => (
                  <td className="px-4 py-3" key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex items-center justify-between p-4">
        <Button
          className="flex items-center gap-1"
          disabled={!table.getCanPreviousPage()}
          onClick={() => table.previousPage()}
          size="sm"
          variant="outline"
        >
          <ArrowLeft className="h-4 w-4" /> Previous
        </Button>
        <div className="flex items-center gap-1">
          {Array.from({ length: table.getPageCount() }, (_, i) => (
            <Button
              className={`h-8 w-8 p-0 ${
                i === table.getState().pagination.pageIndex
                  ? "bg-emerald-500 hover:bg-emerald-600"
                  : ""
              }`}
              key={i}
              onClick={() => table.setPageIndex(i)}
              size="sm"
              variant={
                i === table.getState().pagination.pageIndex
                  ? "default"
                  : "outline"
              }
            >
              {i + 1}
            </Button>
          ))}
          {table.getPageCount() > 7 && <span className="mx-1">...</span>}
        </div>
        <Button
          className="flex items-center gap-1"
          disabled={!table.getCanNextPage()}
          onClick={() => table.nextPage()}
          size="sm"
          variant="outline"
        >
          Next <ArrowRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}

function getPaymentTypeColor(paymentType: string): string {
  switch (paymentType) {
    case "Full Payment":
      return "text-emerald-500";
    case "Credit":
      return "text-amber-500";
    case "Partial":
      return "text-amber-500";
    default:
      return "text-gray-500";
  }
}

function getStatusColor(status: PaymentStatus): string {
  switch (status) {
    case "delivered":
      return "bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-300";
    case "processing":
      return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300";
    case "shipped":
      return "bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-300";
    default:
      return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300";
  }
}

function capitalizeFirstLetter(string: string): string {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
