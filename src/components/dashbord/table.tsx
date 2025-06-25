'use client';
import {
  ChevronLeft,
  ChevronRight,
  Eye,
  MoreHorizontal,
  Plus,
} from 'lucide-react';
import { useState } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

const patients = [
  {
    name: 'Olivia Rhye',
    dob: '9 Mar 2000',
    gender: 'Male',
    contact: '0540777343',
    condition: 'Asthma',
    lastVisit: '7 May, 2025',
    avatar: '/avatars/olivia.png',
  },
  {
    name: 'Olivia Rhye',
    dob: '9 Mar 2000',
    gender: 'Male',
    contact: '0540777343',
    condition: 'Asthma',
    lastVisit: '7 May, 2025',
    avatar: '/avatars/olivia.png',
  },
  {
    name: 'Olivia Rhye',
    dob: '9 Mar 2000',
    gender: 'Male',
    contact: '0540777343',
    condition: 'Asthma',
    lastVisit: '7 May, 2025',
    avatar: '/avatars/olivia.png',
  },
  {
    name: 'Olivia Rhye',
    dob: '9 Mar 2000',
    gender: 'Male',
    contact: '0540777343',
    condition: 'Asthma',
    lastVisit: '7 May, 2025',
    avatar: '/avatars/olivia.png',
  },
  {
    name: 'Olivia Rhye',
    dob: '9 Mar 2000',
    gender: 'Male',
    contact: '0540777343',
    condition: 'Asthma',
    lastVisit: '7 May, 2025',
    avatar: '/avatars/olivia.png',
  },
  {
    name: 'Olivia Rhye',
    dob: '9 Mar 2000',
    gender: 'Male',
    contact: '0540777343',
    condition: 'Asthma',
    lastVisit: '7 May, 2025',
    avatar: '/avatars/olivia.png',
  },
  {
    name: 'Olivia Rhye',
    dob: '9 Mar 2000',
    gender: 'Male',
    contact: '0540777343',
    condition: 'Asthma',
    lastVisit: '7 May, 2025',
    avatar: '/avatars/olivia.png',
  },
  {
    name: 'Olivia Rhye',
    dob: '9 Mar 2000',
    gender: 'Male',
    contact: '0540777343',
    condition: 'Asthma',
    lastVisit: '7 May, 2025',
    avatar: '/avatars/olivia.png',
  },
  {
    name: 'Olivia Rhye',
    dob: '9 Mar 2000',
    gender: 'Male',
    contact: '0540777343',
    condition: 'Asthma',
    lastVisit: '7 May, 2025',
    avatar: '/avatars/olivia.png',
  },
  {
    name: 'Olivia Rhye',
    dob: '9 Mar 2000',
    gender: 'Male',
    contact: '0540777343',
    condition: 'Asthma',
    lastVisit: '7 May, 2025',
    avatar: '/avatars/olivia.png',
  },
  {
    name: 'Olivia Rhye',
    dob: '9 Mar 2000',
    gender: 'Male',
    contact: '0540777343',
    condition: 'Asthma',
    lastVisit: '7 May, 2025',
    avatar: '/avatars/olivia.png',
  },
  {
    name: 'Olivia Rhye',
    dob: '9 Mar 2000',
    gender: 'Male',
    contact: '0540777343',
    condition: 'Asthma',
    lastVisit: '7 May, 2025',
    avatar: '/avatars/olivia.png',
  },
  {
    name: 'Olivia Rhye',
    dob: '9 Mar 2000',
    gender: 'Male',
    contact: '0540777343',
    condition: 'Asthma',
    lastVisit: '7 May, 2025',
    avatar: '/avatars/olivia.png',
  },
  {
    name: 'Olivia Rhye',
    dob: '9 Mar 2000',
    gender: 'Male',
    contact: '0540777343',
    condition: 'Asthma',
    lastVisit: '7 May, 2025',
    avatar: '/avatars/olivia.png',
  },
  {
    name: 'Olivia Rhye',
    dob: '9 Mar 2000',
    gender: 'Male',
    contact: '0540777343',
    condition: 'Asthma',
    lastVisit: '7 May, 2025',
    avatar: '/avatars/olivia.png',
  },
  {
    name: 'Olivia Rhye',
    dob: '9 Mar 2000',
    gender: 'Male',
    contact: '0540777343',
    condition: 'Asthma',
    lastVisit: '7 May, 2025',
    avatar: '/avatars/olivia.png',
  },
  {
    name: 'Olivia Rhye',
    dob: '9 Mar 2000',
    gender: 'Male',
    contact: '0540777343',
    condition: 'Asthma',
    lastVisit: '7 May, 2025',
    avatar: '/avatars/olivia.png',
  },
  {
    name: 'Olivia Rhye',
    dob: '9 Mar 2000',
    gender: 'Male',
    contact: '0540777343',
    condition: 'Asthma',
    lastVisit: '7 May, 2025',
    avatar: '/avatars/olivia.png',
  },
  {
    name: 'Olivia Rhye',
    dob: '9 Mar 2000',
    gender: 'Male',
    contact: '0540777343',
    condition: 'Asthma',
    lastVisit: '7 May, 2025',
    avatar: '/avatars/olivia.png',
  },
  {
    name: 'Olivia Rhye',
    dob: '9 Mar 2000',
    gender: 'Male',
    contact: '0540777343',
    condition: 'Asthma',
    lastVisit: '7 May, 2025',
    avatar: '/avatars/olivia.png',
  },
  {
    name: 'Olivia Rhye',
    dob: '9 Mar 2000',
    gender: 'Male',
    contact: '0540777343',
    condition: 'Asthma',
    lastVisit: '7 May, 2025',
    avatar: '/avatars/olivia.png',
  },
  {
    name: 'Olivia Rhye',
    dob: '9 Mar 2000',
    gender: 'Male',
    contact: '0540777343',
    condition: 'Asthma',
    lastVisit: '7 May, 2025',
    avatar: '/avatars/olivia.png',
  },
  {
    name: 'Olivia Rhye',
    dob: '9 Mar 2000',
    gender: 'Male',
    contact: '0540777343',
    condition: 'Asthma',
    lastVisit: '7 May, 2025',
    avatar: '/avatars/olivia.png',
  },
  // Add more patient objects as needed...
  // Ensure there are more than 6 to see the effect of pagination
];

const ITEMS_PER_PAGE = 6;

export default function PatientTable() {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(patients.length / ITEMS_PER_PAGE);

  const paginatedPatients = patients.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const goToPage = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="mt-4">
      <Table>
        <TableHeader className="bg-gray-100">
          <TableRow>
            <TableHead className="rounded-tl-2xl">Name</TableHead>
            <TableHead>Date of Birth</TableHead>
            <TableHead>Gender</TableHead>
            <TableHead>Contact</TableHead>
            <TableHead>Medical Conditions</TableHead>
            <TableHead>Last Visit</TableHead>
            <TableHead className="rounded-tr-2xl">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {paginatedPatients.map((patient, i) => (
            <TableRow key={i}>
              <TableCell className="flex items-center gap-2 p-4">
                <Avatar>
                  <AvatarImage src={patient.avatar} />
                  <AvatarFallback>
                    {patient.name
                      .split(' ')
                      .map((n) => n[0])
                      .join('')}
                  </AvatarFallback>
                </Avatar>
                {patient.name}
              </TableCell>
              <TableCell>{patient.dob}</TableCell>
              <TableCell>{patient.gender}</TableCell>
              <TableCell>{patient.contact}</TableCell>
              <TableCell>{patient.condition}</TableCell>
              <TableCell>{patient.lastVisit}</TableCell>
              <TableCell>
                <Popover>
                  <PopoverTrigger asChild>
                    <MoreHorizontal className="h-4 w-4 cursor-pointer" />
                  </PopoverTrigger>
                  <PopoverContent className="w-56 p-2">
                    <div className="px-2 py-1 font-semibold text-sm">
                      Actions
                    </div>
                    <div className="mt-1 space-y-1 text-sm">
                      <button className="flex w-full items-center gap-2 rounded px-2 py-1.5 hover:bg-gray-100">
                        <Eye className="h-4 w-4" />
                        View Profile
                      </button>
                      <button className="flex w-full items-center gap-2 rounded px-2 py-1.5 hover:bg-gray-100">
                        <Plus className="h-4 w-4" />
                        New Prescription
                      </button>
                      <button className="flex w-full items-center gap-2 rounded px-2 py-1.5 hover:bg-gray-100">
                        <Plus className="h-4 w-4" />
                        New Rapid Test
                      </button>
                    </div>
                  </PopoverContent>
                </Popover>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <div className="mt-4 flex items-center justify-between">
        <Button
          disabled={currentPage === 1}
          onClick={() => goToPage(currentPage - 1)}
          size="sm"
          variant="outline"
        >
          <ChevronLeft className="mr-1 h-4 w-4" /> Previous
        </Button>

        <div className="space-x-1">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <Button
              key={page}
              onClick={() => goToPage(page)}
              size="sm"
              variant={page === currentPage ? 'default' : 'outline'}
            >
              {page}
            </Button>
          ))}
        </div>

        <Button
          disabled={currentPage === totalPages}
          onClick={() => goToPage(currentPage + 1)}
          size="sm"
          variant="outline"
        >
          Next <ChevronRight className="ml-1 h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
