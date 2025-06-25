import { Eye } from 'lucide-react';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import type { Patient } from '@/store/patients';
import { TablePagination } from './table-pagination';

interface PatientsTableProps {
  readonly patients: Patient[];
  readonly currentPage: number;
  readonly totalPages: number;
  readonly onPatientSelect: (patientId: string) => void;
  readonly onPageChange: (page: number) => void;
}

export function PatientsTable({
  patients,
  currentPage,
  totalPages,
  onPatientSelect,
  onPageChange,
}: PatientsTableProps) {
  return (
    <div className="rounded-lg bg-white shadow-sm">
      <Table>
        <TableHeader>
          <TableRow className="bg-stroke">
            <TableHead className="bg-stroke">Name</TableHead>
            <TableHead className="bg-stroke">Date of Birth</TableHead>
            <TableHead className="bg-stroke">Gender</TableHead>
            <TableHead className="bg-stroke">Contact</TableHead>
            <TableHead className="bg-stroke">Associated Pharmacy</TableHead>
            <TableHead className="bg-stroke">Last Visit</TableHead>
            <TableHead className="bg-stroke">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {patients.map((patient) => (
            <TableRow
              className="cursor-pointer hover:bg-gray-50"
              key={patient.id}
              onClick={() => onPatientSelect(patient.id)}
            >
              <TableCell>
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-full bg-gray-200">
                    <Image
                      alt={patient.name}
                      className="h-full w-full object-cover"
                      height={40}
                      src={patient.avatar ?? '/placeholder.svg'}
                      width={40}
                    />
                  </div>
                  <span className="font-medium">{patient.name}</span>
                </div>
              </TableCell>
              <TableCell className="text-gray-600">
                {patient.dateOfBirth}
              </TableCell>
              <TableCell>
                <Badge
                  className={`${
                    patient.gender === 'Male'
                      ? 'bg-blue-100 text-blue-700'
                      : 'bg-pink-100 text-pink-700'
                  }`}
                  variant="secondary"
                >
                  {patient.gender}
                </Badge>
              </TableCell>
              <TableCell className="text-gray-600">{patient.contact}</TableCell>
              <TableCell className="text-gray-600">
                {patient.pharmacy}
              </TableCell>
              <TableCell className="text-gray-600">
                {patient.lastVisit}
              </TableCell>
              <TableCell>
                <Button
                  className="hover:bg-primary/10"
                  onClick={(e) => {
                    e.stopPropagation();
                    onPatientSelect(patient.id);
                  }}
                  size="sm"
                  variant="ghost"
                >
                  <Eye className="h-4 w-4 text-primary" />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <div className="border-gray-200 border-t">
        <TablePagination
          currentPage={currentPage}
          onPageChange={onPageChange}
          totalPages={totalPages}
        />
      </div>
    </div>
  );
}
