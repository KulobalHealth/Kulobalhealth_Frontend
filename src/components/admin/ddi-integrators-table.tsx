import { Eye, MoreHorizontal } from "lucide-react";
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
import type { DDIIntegrator } from "@/store/ddi-integrators";
import { TablePagination } from "./table-pagination";

interface DDIIntegratorsTableProps {
  readonly integrators: DDIIntegrator[];
  readonly currentPage: number;
  readonly totalPages: number;
  readonly onIntegratorView: (integratorId: string) => void;
  readonly onIntegratorEdit: (integrator: DDIIntegrator) => void;
  readonly onStatusChange: (id: string, status: "Active" | "Suspended") => void;
  readonly onDelete: (id: string) => void;
  readonly onPageChange: (page: number) => void;
}

export function DDIIntegratorsTable({
  integrators,
  currentPage,
  totalPages,
  onIntegratorView,
  onIntegratorEdit,
  onStatusChange,
  onDelete,
  onPageChange,
}: DDIIntegratorsTableProps) {
  const handleStatusChange = (
    integrator: DDIIntegrator,
    newStatus: "Active" | "Suspended"
  ) => {
    onStatusChange(integrator.id, newStatus);
    toast.success(`${integrator.company} has been ${newStatus.toLowerCase()}`, {
      description: `Integration status changed to ${newStatus}`,
    });
  };

  const handleDelete = (integrator: DDIIntegrator) => {
    onDelete(integrator.id);
    toast.success(`${integrator.company} has been deleted`, {
      description: "Integration has been permanently removed",
    });
  };

  const getSoftwareTypeBadgeClass = (type: string) => {
    switch (type) {
      case "Mobile App":
        return "bg-gray-800 text-white border-gray-800";
      case "Desktop App":
        return "bg-gray-600 text-white border-gray-600";
      default:
        return "bg-gray-100 text-gray-700 border-gray-300";
    }
  };

  const getStatusBadgeClass = (status: string) => {
    return status === "Active"
      ? "bg-green-100 text-green-700 hover:bg-green-100"
      : "bg-red-100 text-red-700 hover:bg-red-100";
  };

  return (
    <div className="rounded-lg bg-white shadow-sm">
      <Table>
        <TableHeader>
          <TableRow className="bg-stroke">
            <TableHead className="bg-stroke">Product Name</TableHead>
            <TableHead className="bg-stroke">Company</TableHead>
            <TableHead className="bg-stroke">Software Type</TableHead>
            <TableHead className="bg-stroke">API Key</TableHead>
            <TableHead className="bg-stroke">Integration Date</TableHead>
            <TableHead className="bg-stroke">Contact</TableHead>
            <TableHead className="bg-stroke">Status</TableHead>
            <TableHead className="bg-stroke">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {integrators.map((integrator) => (
            <TableRow className="hover:bg-gray-50" key={integrator.id}>
              <TableCell>
                <span className="font-medium">{integrator.productName}</span>
              </TableCell>
              <TableCell className="text-gray-600">
                {integrator.company}
              </TableCell>
              <TableCell>
                <Badge
                  className={getSoftwareTypeBadgeClass(integrator.softwareType)}
                  variant="outline"
                >
                  {integrator.softwareType}
                </Badge>
              </TableCell>
              <TableCell className="font-mono text-gray-600 text-sm">
                {integrator.apiKey}
              </TableCell>
              <TableCell className="text-gray-600">
                {integrator.integrationDate}
              </TableCell>
              <TableCell>
                <div className="text-sm">
                  <div>{integrator.phoneNumber}</div>
                  <div className="text-gray-600">{integrator.email}</div>
                </div>
              </TableCell>
              <TableCell>
                <Badge
                  className={getStatusBadgeClass(integrator.status)}
                  variant={
                    integrator.status === "Active" ? "default" : "destructive"
                  }
                >
                  {integrator.status}
                </Badge>
              </TableCell>
              <TableCell>
                <div className="flex items-center gap-2">
                  <Button
                    className="p-2"
                    onClick={() => onIntegratorView(integrator.id)}
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
                      <DropdownMenuItem
                        onClick={() => onIntegratorEdit(integrator)}
                      >
                        Edit Details
                      </DropdownMenuItem>
                      {integrator.status === "Active" ? (
                        <DropdownMenuItem
                          className="text-orange-600"
                          onClick={() =>
                            handleStatusChange(integrator, "Suspended")
                          }
                        >
                          Suspend
                        </DropdownMenuItem>
                      ) : (
                        <DropdownMenuItem
                          className="text-green-600"
                          onClick={() =>
                            handleStatusChange(integrator, "Active")
                          }
                        >
                          Activate
                        </DropdownMenuItem>
                      )}
                      <DropdownMenuItem
                        className="text-red-600"
                        onClick={() => handleDelete(integrator)}
                      >
                        Delete Company
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
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
    </div>
  );
}
