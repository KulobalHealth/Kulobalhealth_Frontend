"use client";

import { useState } from "react";
import {
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
  type ColumnDef,
} from "@tanstack/react-table";
import { ArrowLeft, ArrowRight, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useMarketplaceStore } from "@/lib/store";
import type { Payment, PaymentStatus } from "@/lib/mock-payments";

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
          <div className="text-sm text-gray-500">{row.original.orderNo}</div>
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
          <div className="text-sm text-gray-500">
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
            className={`inline-flex items-center px-2 py-1 rounded-full text-xs ${getStatusColor(
              row.original.status
            )}`}
          >
            • {capitalizeFirstLetter(row.original.status)}
          </div>
          <div className="text-sm text-gray-500 mt-1">{row.original.date}</div>
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
    <div className="bg-white rounded-lg border dark:bg-background">
      <div className="overflow-x-auto rounded-md">
        <table className="w-full">
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr
                key={headerGroup.id}
                className="border-b bg-gray-50 dark:bg-neutral-900"
              >
                {headerGroup.headers.map((header) => (
                  <th
                    key={header.id}
                    className="px-4 py-3 text-left text-sm font-medium text-gray-500 dark:text-gray-400"
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
                key={row.id}
                className="border-b hover:bg-gray-50 dark:hover:bg-neutral-900"
              >
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id} className="px-4 py-3">
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
          variant="outline"
          size="sm"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
          className="flex items-center gap-1"
        >
          <ArrowLeft className="h-4 w-4" /> Previous
        </Button>
        <div className="flex items-center gap-1">
          {Array.from({ length: table.getPageCount() }, (_, i) => (
            <Button
              key={i}
              variant={
                i === table.getState().pagination.pageIndex
                  ? "default"
                  : "outline"
              }
              size="sm"
              onClick={() => table.setPageIndex(i)}
              className={`w-8 h-8 p-0 ${
                i === table.getState().pagination.pageIndex
                  ? "bg-emerald-500 hover:bg-emerald-600"
                  : ""
              }`}
            >
              {i + 1}
            </Button>
          ))}
          {table.getPageCount() > 7 && <span className="mx-1">...</span>}
        </div>
        <Button
          variant="outline"
          size="sm"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
          className="flex items-center gap-1"
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
