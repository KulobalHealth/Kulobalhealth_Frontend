'use client';

import {
  type ColumnDef,
  type ColumnFiltersState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  type SortingState,
  useReactTable,
  type VisibilityState,
} from '@tanstack/react-table';
import { ChevronDown, ChevronsUpDown, ChevronUp } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import type { Patient } from '@/lib/data';
import { calculateAge } from '@/lib/utils';

export function PatientTable({ data }: { data: Patient[] }) {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = useState({});
  //eslint-disable-next-line
  const [pageSize, setPageSize] = useState(10);

  const columns: ColumnDef<Patient>[] = [
    {
      accessorKey: 'id',
      header: ({ column }) => {
        return (
          <Button
            className="p-0 font-semibold text-xs"
            onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
            variant="ghost"
          >
            PATIENT ID
            {column.getIsSorted() === 'asc' ? (
              <ChevronUp className="ml-1 h-3 w-3" />
            ) : column.getIsSorted() === 'desc' ? (
              <ChevronDown className="ml-1 h-3 w-3" />
            ) : (
              <ChevronsUpDown className="ml-1 h-3 w-3 opacity-50" />
            )}
          </Button>
        );
      },
      cell: ({ row }) => (
        <div className="font-medium">{row.getValue('id')}</div>
      ),
    },
    {
      accessorKey: 'name',
      header: ({ column }) => {
        return (
          <Button
            className="p-0 font-semibold text-xs"
            onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
            variant="ghost"
          >
            PATIENT NAME
            {column.getIsSorted() === 'asc' ? (
              <ChevronUp className="ml-1 h-3 w-3" />
            ) : column.getIsSorted() === 'desc' ? (
              <ChevronDown className="ml-1 h-3 w-3" />
            ) : (
              <ChevronsUpDown className="ml-1 h-3 w-3 opacity-50" />
            )}
          </Button>
        );
      },
      cell: ({ row }) => (
        <div className="font-medium">{row.getValue('name')}</div>
      ),
    },
    {
      accessorKey: 'telephone',
      header: ({ column }) => {
        return (
          <Button
            className="p-0 font-semibold text-xs"
            onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
            variant="ghost"
          >
            TELEPHONE
            {column.getIsSorted() === 'asc' ? (
              <ChevronUp className="ml-1 h-3 w-3" />
            ) : column.getIsSorted() === 'desc' ? (
              <ChevronDown className="ml-1 h-3 w-3" />
            ) : (
              <ChevronsUpDown className="ml-1 h-3 w-3 opacity-50" />
            )}
          </Button>
        );
      },
      cell: ({ row }) => <div>{row.getValue('telephone')}</div>,
    },
    {
      accessorKey: 'dateOfBirth',
      header: ({ column }) => {
        return (
          <Button
            className="p-0 font-semibold text-xs"
            onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
            variant="ghost"
          >
            DATE OF BIRTH
            {column.getIsSorted() === 'asc' ? (
              <ChevronUp className="ml-1 h-3 w-3" />
            ) : column.getIsSorted() === 'desc' ? (
              <ChevronDown className="ml-1 h-3 w-3" />
            ) : (
              <ChevronsUpDown className="ml-1 h-3 w-3 opacity-50" />
            )}
          </Button>
        );
      },
      cell: ({ row }) => <div>{row.getValue('dateOfBirth')}</div>,
    },
    {
      accessorKey: 'age',
      header: ({ column }) => {
        return (
          <Button
            className="p-0 font-semibold text-xs"
            onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
            variant="ghost"
          >
            AGE
            {column.getIsSorted() === 'asc' ? (
              <ChevronUp className="ml-1 h-3 w-3" />
            ) : column.getIsSorted() === 'desc' ? (
              <ChevronDown className="ml-1 h-3 w-3" />
            ) : (
              <ChevronsUpDown className="ml-1 h-3 w-3 opacity-50" />
            )}
          </Button>
        );
      },
      cell: ({ row }) => {
        const dob = row.original.dateOfBirth;
        return (
          <div className="font-medium text-blue-600">{calculateAge(dob)}</div>
        );
      },
      sortingFn: (rowA, rowB) => {
        const ageA = calculateAge(rowA.original.dateOfBirth);
        const ageB = calculateAge(rowB.original.dateOfBirth);
        return ageA - ageB;
      },
    },
    {
      accessorKey: 'gender',
      header: ({ column }) => {
        return (
          <Button
            className="p-0 font-semibold text-xs"
            onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
            variant="ghost"
          >
            GENDER
            {column.getIsSorted() === 'asc' ? (
              <ChevronUp className="ml-1 h-3 w-3" />
            ) : column.getIsSorted() === 'desc' ? (
              <ChevronDown className="ml-1 h-3 w-3" />
            ) : (
              <ChevronsUpDown className="ml-1 h-3 w-3 opacity-50" />
            )}
          </Button>
        );
      },
      cell: ({ row }) => (
        <div className="text-emerald-600">{row.getValue('gender')}</div>
      ),
    },
    {
      accessorKey: 'location',
      header: ({ column }) => {
        return (
          <Button
            className="p-0 font-semibold text-xs"
            onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
            variant="ghost"
          >
            LOCATION
            {column.getIsSorted() === 'asc' ? (
              <ChevronUp className="ml-1 h-3 w-3" />
            ) : column.getIsSorted() === 'desc' ? (
              <ChevronDown className="ml-1 h-3 w-3" />
            ) : (
              <ChevronsUpDown className="ml-1 h-3 w-3 opacity-50" />
            )}
          </Button>
        );
      },
      cell: ({ row }) => <div>{row.getValue('location')}</div>,
    },
    {
      id: 'profile',
      header: 'PROFILE',
      enableSorting: false,
      cell: ({ row }) => (
        <Link
          className="flex items-center justify-center"
          href={`/patients/${row.original.id}`}
        >
          <Button className="w-full" size="sm" variant="outline">
            view profile
          </Button>
        </Link>
      ),
    },
  ];

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });

  // Set page size when it changes
  const handlePageSizeChange = (value: string) => {
    const newSize = Number.parseInt(value);
    setPageSize(newSize);
    table.setPageSize(newSize);
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex flex-1 items-center space-x-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button className="ml-auto" variant="outline">
                Columns
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {table
                .getAllColumns()
                .filter((column) => column.getCanHide())
                .map((column) => {
                  return (
                    <DropdownMenuCheckboxItem
                      checked={column.getIsVisible()}
                      className="capitalize"
                      key={column.id}
                      onCheckedChange={(value) =>
                        column.toggleVisibility(!!value)
                      }
                    >
                      {column.id === 'id'
                        ? 'Patient ID'
                        : column.id === 'name'
                          ? 'Patient Name'
                          : column.id}
                    </DropdownMenuCheckboxItem>
                  );
                })}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <TableHead key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  className="hover:bg-muted/50"
                  data-state={row.getIsSelected() && 'selected'}
                  key={row.id}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  className="h-24 text-center"
                  colSpan={columns.length}
                >
                  No patients found.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-between space-x-2 py-4">
        <div className="flex items-center space-x-2">
          <p className="text-muted-foreground text-sm">
            Showing
            <span className="px-1 font-medium">
              {table.getState().pagination.pageIndex *
                table.getState().pagination.pageSize +
                1}
            </span>
            to
            <span className="px-1 font-medium">
              {Math.min(
                (table.getState().pagination.pageIndex + 1) *
                  table.getState().pagination.pageSize,
                table.getFilteredRowModel().rows.length
              )}
            </span>
            of
            <span className="px-1 font-medium">
              {table.getFilteredRowModel().rows.length}
            </span>
            entries
          </p>
          <Select
            onValueChange={handlePageSizeChange}
            value={table.getState().pagination.pageSize.toString()}
          >
            <SelectTrigger className="h-8 w-[70px]">
              <SelectValue placeholder={table.getState().pagination.pageSize} />
            </SelectTrigger>
            <SelectContent side="top">
              {[5, 10, 20, 30, 40, 50].map((pageSize) => (
                <SelectItem key={pageSize} value={pageSize.toString()}>
                  {pageSize}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="flex items-center space-x-2">
          <Button
            disabled={!table.getCanPreviousPage()}
            onClick={() => table.setPageIndex(0)}
            size="sm"
            variant="outline"
          >
            First
          </Button>
          <Button
            disabled={!table.getCanPreviousPage()}
            onClick={() => table.previousPage()}
            size="sm"
            variant="outline"
          >
            Previous
          </Button>
          <div className="flex items-center justify-center font-medium text-sm">
            Page {table.getState().pagination.pageIndex + 1} of{' '}
            {table.getPageCount()}
          </div>
          <Button
            disabled={!table.getCanNextPage()}
            onClick={() => table.nextPage()}
            size="sm"
            variant="outline"
          >
            Next
          </Button>
          <Button
            disabled={!table.getCanNextPage()}
            onClick={() => table.setPageIndex(table.getPageCount() - 1)}
            size="sm"
            variant="outline"
          >
            Last
          </Button>
        </div>
      </div>
    </div>
  );
}
