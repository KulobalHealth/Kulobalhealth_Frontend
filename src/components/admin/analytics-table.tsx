import { Eye, MoreHorizontal } from "lucide-react";
import Image from "next/image";
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
import { TablePagination } from "./table-pagination";
import { ViewType } from "@/store/analytics";

export interface TableColumn {
  readonly key: string;
  readonly label: string;
  readonly width?: string;
  readonly sortable?: boolean;
}

export interface TableRow {
  readonly id: string;
  readonly [key: string]: unknown;
}

interface AnalyticsTableProps {
  readonly columns: TableColumn[];
  readonly data: TableRow[];
  readonly currentPage?: number;
  readonly totalPages?: number;
  readonly currentView: ViewType;
  readonly onPageChange?: (page: number) => void;
  readonly onRowSelect?: (id: string) => void;
  readonly onStatusUpdate?: (id: string, status: string) => void;
}

export function AnalyticsTable({
  columns,
  data,
  currentPage = 1,
  totalPages = 1,
  currentView,
  onPageChange,
  onRowSelect,
  onStatusUpdate,
}: AnalyticsTableProps) {
  const renderCellContent = (value: unknown, key: string, row: TableRow) => {
    // Avatar rendering for patients
    if (key === "avatar" && typeof value === "string") {
      return (
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-full bg-gray-200">
            {/* Check if it's a URL or just initials */}
            {value.startsWith("http") || value.startsWith("/") ? (
              <Image
                alt={row.name as string}
                className="h-full w-full object-cover"
                height={40}
                src={value}
                width={40}
              />
            ) : (
              <span className="text-sm font-medium text-gray-600">{value}</span>
            )}
          </div>
          <span className="font-medium">{row.name as string}</span>
        </div>
      );
    }

    // Name rendering when there's no avatar
    if (key === "name" && !columns.some((col) => col.key === "avatar")) {
      return <span className="font-medium">{value as string}</span>;
    }

    // Gender badge for patients
    if (key === "gender" && typeof value === "string") {
      return (
        <Badge
          className={
            value === "Male"
              ? "bg-blue-100 text-blue-700 hover:bg-blue-100"
              : "bg-pink-100 text-pink-700 hover:bg-pink-100"
          }
          variant="secondary"
        >
          {value}
        </Badge>
      );
    }

    // Status rendering
    if (key === "status" && typeof value === "string") {
      const getStatusStyles = (status: string) => {
        switch (status.toLowerCase()) {
          case "active":
            return "bg-green-100 text-green-700 hover:bg-green-100";
          case "rejected":
          case "suspended":
            return "bg-red-100 text-red-700 hover:bg-red-100";
          case "pending":
            return "bg-yellow-100 text-yellow-700 hover:bg-yellow-100";
          default:
            return "bg-gray-100 text-gray-700 hover:bg-gray-100";
        }
      };

      return (
        <Badge className={getStatusStyles(value)} variant="secondary">
          {value}
        </Badge>
      );
    }

    // Actions rendering
    if (key === "actions") {
      return (
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="sm"
            onClick={(e) => {
              e.stopPropagation();
              onRowSelect?.(row.id);
            }}
            className="hover:bg-primary/10"
          >
            <Eye className="h-4 w-4 text-primary" />
          </Button>

          {currentView === "pharmacies" && onStatusUpdate && (
            <DropdownMenu>
              <DropdownMenuTrigger asChild onClick={(e) => e.stopPropagation()}>
                <Button size="sm" variant="ghost">
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem
                  onClick={(e) => {
                    e.stopPropagation();
                    onRowSelect?.(row.id);
                  }}
                >
                  View Details
                </DropdownMenuItem>
                {row.status === "rejected" || row.status === "suspended" ? (
                  <DropdownMenuItem
                    className="text-green-600"
                    onClick={(e) => {
                      e.stopPropagation();
                      onStatusUpdate?.(row.id, "active");
                    }}
                  >
                    Activate
                  </DropdownMenuItem>
                ) : (
                  <DropdownMenuItem
                    className="text-red-600"
                    onClick={(e) => {
                      e.stopPropagation();
                      onStatusUpdate?.(row.id, "rejected");
                    }}
                  >
                    Suspend
                  </DropdownMenuItem>
                )}
              </DropdownMenuContent>
            </DropdownMenu>
          )}
        </div>
      );
    }

    // Default rendering
    return value as string;
  };

  return (
    <div className="rounded-lg bg-white shadow-sm">
      <Table>
        <TableHeader>
          <TableRow className="bg-stroke">
            {columns.map((column) => (
              <TableHead
                key={column.key}
                className={`bg-stroke ${column.width ?? ""}`}
              >
                {column.label}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((row) => (
            <TableRow
              key={row.id}
              className="cursor-pointer hover:bg-gray-50"
              onClick={() => onRowSelect?.(row.id)}
            >
              {columns.map((column) => (
                <TableCell
                  key={column.key}
                  className={
                    column.key === "name" || column.key === "avatar"
                      ? ""
                      : "text-gray-600"
                  }
                >
                  {renderCellContent(row[column.key], column.key, row)}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <TablePagination
        currentPage={currentPage}
        onPageChange={onPageChange || (() => {})}
        totalPages={totalPages}
      />
    </div>
  );
}
