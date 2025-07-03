import { MoreHorizontal } from 'lucide-react';
import Image from 'next/image';
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
import type { Pharmacy, PharmacyStatus } from '@/store/pharmacies';
import { TablePagination } from './table-pagination';

interface PharmaciesTableProps {
  readonly pharmacies: Pharmacy[];
  readonly currentPage: number;
  readonly totalPages: number;
  readonly onPharmacySelect: (pharmacyId: string) => void;
  readonly onPageChange: (page: number) => void;
  readonly onStatusUpdate: (pharmacyId: string, status: PharmacyStatus) => void;
}

export function PharmaciesTable({
  pharmacies,
  currentPage,
  totalPages,
  onPharmacySelect,
  onPageChange,
  onStatusUpdate,
}: PharmaciesTableProps) {
  const handleStatusUpdate = (
    pharmacy: Pharmacy,
    newStatus: PharmacyStatus
  ) => {
    onStatusUpdate(pharmacy.id, newStatus);
    const action = newStatus === 'Active' ? 'activated' : 'suspended';
    toast.success(`${pharmacy.name} has been ${action} successfully!`);
  };

  return (
    <div className="rounded-lg bg-white shadow-sm">
      <Table>
        <TableHeader>
          <TableRow className="bg-stroke">
            <TableHead className="bg-stroke">Pharmacy Name</TableHead>
            <TableHead className="bg-stroke">Contact</TableHead>
            <TableHead className="bg-stroke">Location</TableHead>
            <TableHead className="bg-stroke">Branches</TableHead>
            <TableHead className="bg-stroke">Pharmacist</TableHead>
            <TableHead className="bg-stroke">Status</TableHead>
            <TableHead className="bg-stroke">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {pharmacies.map((pharmacy) => (
            <TableRow
              className="cursor-pointer hover:bg-gray-50"
              key={pharmacy.id}
              onClick={() => onPharmacySelect(pharmacy.id)}
            >
              <TableCell>
                <span className="font-medium">{pharmacy.name}</span>
              </TableCell>
              <TableCell>
                <div className="text-sm">
                  <div>{pharmacy.contact}</div>
                  <div className="text-gray-600">{pharmacy.email}</div>
                </div>
              </TableCell>
              <TableCell className="text-gray-600">
                {pharmacy.location}
              </TableCell>
              <TableCell className="text-gray-600">
                {pharmacy.branches}
              </TableCell>
              <TableCell>
                <div className="flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center overflow-hidden rounded-full bg-gray-200">
                    <Image
                      alt={pharmacy.pharmacist.name}
                      className="h-full w-full object-cover"
                      height={32}
                      src={pharmacy.pharmacist.avatar ?? '/placeholder.svg'}
                      width={32}
                    />
                  </div>
                  <span className="text-gray-600 text-sm">
                    {pharmacy.pharmacist.name}
                  </span>
                </div>
              </TableCell>
              <TableCell>
                <Badge
                  className={
                    pharmacy.status === 'Active'
                      ? 'bg-green-100 text-green-700 hover:bg-green-100'
                      : 'bg-red-100 text-red-700 hover:bg-red-100'
                  }
                  variant={
                    pharmacy.status === 'Active' ? 'default' : 'destructive'
                  }
                >
                  {pharmacy.status}
                </Badge>
              </TableCell>
              <TableCell>
                <DropdownMenu>
                  <DropdownMenuTrigger
                    asChild
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Button size="sm" variant="ghost">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem
                      onClick={(e) => {
                        e.stopPropagation();
                        onPharmacySelect(pharmacy.id);
                      }}
                    >
                      View Details
                    </DropdownMenuItem>
                    {pharmacy.status === 'Suspended' ? (
                      <DropdownMenuItem
                        className="text-green-600"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleStatusUpdate(pharmacy, 'Active');
                        }}
                      >
                        Activate
                      </DropdownMenuItem>
                    ) : (
                      <DropdownMenuItem
                        className="text-red-600"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleStatusUpdate(pharmacy, 'Suspended');
                        }}
                      >
                        Suspend
                      </DropdownMenuItem>
                    )}
                  </DropdownMenuContent>
                </DropdownMenu>
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
